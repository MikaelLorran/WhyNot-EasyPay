import Boleto from "../entities/boleto.entity.js";

export function create(data: {
	titulo: string;
	valor: number;
	vencimento: Date;
	alunoId: number;
}) {
	return Boleto.create({ data });
}

export function findAll() {
	return Boleto.findMany({
		include: { aluno: true },
	});
}

export function findById(id: number) {
	return Boleto.findUnique({
		where: { id },
		include: { aluno: true },
	});
}

export function marcarComoPago(id: number, dataPagamento: Date) {
	return Boleto.update({
		where: { id },
		data: {
			finalizado: true,
			dataPagamento,
		},
	});
}

export function updateBoleto(
	id: number,
	data: {
		titulo: string;
	}
) {
	return Boleto.update({
		where: { id },
		data,
	});
}

export async function deleteBoleto(id: number) {
	return Boleto.delete({ where: { id } });
}

export async function findByAlunoId(alunoId: number) {
	return Boleto.findMany({ where: { alunoId } });
}

export async function findBeforeDueBoletos(
	currentDate: Date,
	daysBeforeVencimento: number
) {
	const daysBeforeDue = new Date(currentDate);
	daysBeforeDue.setDate(daysBeforeDue.getDate() + daysBeforeVencimento);
	return Boleto.findMany({
		where: {
			vencimento: { gte: currentDate, lte: daysBeforeDue },
			finalizado: false,
		},
		include: { aluno: true },
	});
}

export async function findAfterDueBoletos(
	currentDate: Date,
	daysAfterVencimento: number
) {
	return Boleto.findMany({
		where: {
			vencimento: { lte: currentDate },
			finalizado: false,
		},
		include: { aluno: true },
	});
}
