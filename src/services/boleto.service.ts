import * as boletoRepository from "../repositories/boleto.repository.js";
import * as dotenv from "dotenv";
import * as emailService from "./email.service.js";
import * as alunoService from "./aluno.service.js";
import * as whatsappService from "./whatsapp.service.js";

dotenv.config();
export function criarBoleto(data: {
	titulo: string;
	valor: number;
	vencimento: Date;
	alunoId: number;
}) {
	return boletoRepository.create(data);
}

export function getAllBoletos() {
	return boletoRepository.findAll();
}

export function getBoletoById(id: number) {
	return boletoRepository.findById(id);
}

export function pagarBoleto(id: number) {
	return boletoRepository.marcarComoPago(id, new Date());
}

export async function deleteBoleto(id: number) {
	const boleto = await boletoRepository.findById(id);

	if (!boleto) {
		throw new Error("Boleto não encontrado!");
	}
	return boletoRepository.deleteBoleto(id);
}

export async function updateBoleto(
	id: number,
	data: {
		titulo: string;
	}
) {
	const boleto = await boletoRepository.findById(id);

	if (!boleto) {
		throw new Error("Boleto não encontrado!");
	}

	return boletoRepository.updateAluno(id, data);
}

export async function getBoletosByAlunoId(id: number) {
	return boletoRepository.findByAlunoId(id);
}

export async function sendBeforeExpirationMessage() {
	console.log("Iniciando verificação de boletos a vencer...");
	const currentDate = new Date();

	const boletosToNotify = await boletoRepository.findOverdueBoletos(
		currentDate
	);

	if (boletosToNotify.length === 0) {
		console.log("Nenhum boleto vencido encontrado.");
		return;
	}

	console.log(`Foram encontrados ${boletosToNotify.length} boletos a vencer.`);

	for (const boleto of boletosToNotify) {
		const aluno = await alunoService.getAlunoById(boleto.alunoId);
		if (!aluno) {
			console.warn(
				`Aluno com ID ${boleto.alunoId} não encontrado. Pulando boleto ID ${boleto.id}.`
			);
			continue;
		}

		const emailOptions = {
			to: aluno.email,
			subject: "Seu boleto WhyNot-EasyPay está prestes a vencer!",
			html: `<h2>Olá ${
				aluno.nome
			},</h2></br> <p>Estamos passando para lembrar que seu boleto com titulo "${
				boleto.titulo
			}" está prestes a vencer.</p></br> <p>Valor do boleto: R$${boleto.valor.toFixed(
				2
			)}</p></br> <p>Vencimento em: ${boleto.vencimento.toLocaleDateString(
				"pt-Br"
			)}.</p>`,
		};
		try {
			await emailService.sendEmail(emailOptions);
		} catch (error) {
			console.error("O programa falhou ao enviar o e-mail:", error);
		}

		if (aluno.telefone) {
			const contentText = {
				text: `Olá ${aluno.nome}, passando para lembrar que seu boleto com titulo "${boleto.titulo}" está prestes a vencer. Valor do boleto: R$${boleto.valor.toFixed(
					2
				)}. Vencimento em: ${boleto.vencimento.toLocaleDateString(
					"pt-Br"
				)}.` 
			};
			try {
				await whatsappService.sendMessage(aluno.telefone, contentText);
			} catch (error) {
				console.error(
					"O programa falhou ao enviar a mensagem WhatsApp:",
					error
				);
			}
		}
	}
}
