import * as configuracaoRepository from "../repositories/configuracao.repository.js";

export function criarConfiguracao(data: {
	diasAntesVencimento: number;
	diasAposVencimento: number;
	frequenciaVerificacao: string;
}) {
	return configuracaoRepository.create(data);
}

export function getConfiguracaoById(id: number) {
	return configuracaoRepository.findById(id);
}

export async function updateConfiguracao(
	id: number,
	data: {
		diasAntesVencimento: number;
		diasAposVencimento: number;
		frequenciaVerificacao: string;
	}
) {
	const configuracao = await configuracaoRepository.findById(id);

	if (!configuracao) {
		throw new Error("Configuração não encontrado!");
	}

	return configuracaoRepository.updateConfiguracao(id, data);
}

export async function deleteConfiguracao(id: number) {
	const configuracao = await configuracaoRepository.findById(id);

	if (!configuracao) {
		throw new Error("Configuração não encontrado!");
	}
	return configuracaoRepository.deleteConfiguracao(id);
}
