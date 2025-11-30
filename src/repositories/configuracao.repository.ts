import Configuracao from "../entities/configuracao.entity.js";

export function create(data: {
	diasAntesVencimento: number;
	diasAposVencimento: number;
	frequenciaVerificacao: string;
}) {
	return Configuracao.create({ data });
}

export function findById(id: number) {
	return Configuracao.findUnique({
		where: { id },
	});
}

export function updateConfiguracao(
	id: number,
	data: {
		diasAntesVencimento: number;
		diasAposVencimento: number;
		frequenciaVerificacao: string;
	}
) {
	return Configuracao.update({
		where: { id },
		data,
	});
}

export async function deleteConfiguracao(id: number) {
	return Configuracao.delete({ where: { id } });
}
