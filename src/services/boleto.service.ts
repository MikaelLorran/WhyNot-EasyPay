import * as boletoRepository from "../repositories/boleto.repository.js";

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
		throw new Error("Boleto não encontrado");
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
		throw new Error("Boleto não encontrado");
	}

	return boletoRepository.updateAluno(id, data);
}

export async function getBoletosByAlunoId(id: number) {
	return boletoRepository.findByAlunoId(id);
}
