import type express from "express";
import * as dotenv from "dotenv";
import * as boletoService from "../services/boleto.service.js";
import * as emailService from "../services/email.service.js";
import * as alunoService from "../services/aluno.service.js";

dotenv.config();

export async function criarBoleto(req: express.Request, res: express.Response) {
	const { titulo, valor, vencimento, alunoId } = req.body;

	const aluno = await alunoService.getAlunoById(alunoId);
	if (!aluno) {
		return res.status(404).json({ message: "Aluno não encontrado" });
	}

	const boleto = await boletoService.criarBoleto({
		titulo,
		valor,
		vencimento: new Date(vencimento),
		alunoId,
	});

	res.status(201).json(boleto);

	// Enviar e-mail de notificação (exemplo)
	if (boleto) {
		const emailOptions = {
			to: aluno.email,
			subject: "Seu boleto WhyNot-EasyPay gerado",
			html: `<h2>Olá ${aluno.nome},<h2></br> <p>O boleto com titulo"${
				boleto.titulo
			}" foi gerado hoje</p></br> <p>Valor do boleto: R$${boleto.valor.toFixed(
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
	}
}

export async function getAllBoletos(
	req: express.Request,
	res: express.Response
) {
	const boletos = await boletoService.getAllBoletos();
	res.status(200).json(boletos);
}

export async function getBoletoById(
	req: express.Request,
	res: express.Response
) {
	const { id } = req.params;
	const boleto = await boletoService.getBoletoById(Number(id));

	if (!boleto)
		return res.status(404).json({ message: "Boleto não encontrado" });

	res.status(200).json(boleto);
}

export async function pagarBoleto(req: express.Request, res: express.Response) {
	const { id } = req.params;
	const boleto = await boletoService.pagarBoleto(Number(id));
	res.status(200).json(boleto);
}

export async function updateBoleto(
	req: express.Request,
	res: express.Response
) {
	const { id } = req.params;
	const { titulo } = req.body;
	const boleto = await boletoService.updateBoleto(Number(id), {
		titulo,
	});
	res.status(200).json(boleto);
}

export async function deleteBoleto(
	req: express.Request,
	res: express.Response
) {
	await boletoService.deleteBoleto(Number(req.params.id));
	res.status(204).send();
}

export async function getBoletosByAlunoId(
	req: express.Request,
	res: express.Response
) {
	const boletos = await boletoService.getBoletosByAlunoId(
		Number(req.params.id)
	);
	res.status(200).json(boletos);
}
