import type express from "express";
import * as configuracaoService from "../services/configuracao.service.js";

export async function criarConfiguracao(
	req: express.Request,
	res: express.Response
) {
	const { diasAntesVencimento, diasAposVencimento, frequenciaVerificacao } =
		req.body;
	const configuracao = await configuracaoService.criarConfiguracao({
		diasAntesVencimento,
		diasAposVencimento,
		frequenciaVerificacao,
	});
	res.status(201).json(configuracao);
}

export async function getConfiguracaoById(
	req: express.Request,
	res: express.Response
) {
	const { id } = req.params;
	const configuracao = await configuracaoService.getConfiguracaoById(
		Number(id)
	);

	if (!configuracao)
		return res.status(404).json({ message: "Configuração não encontrado" });

	res.status(200).json(configuracao);
}

export async function updateConfiguracao(
	req: express.Request,
	res: express.Response
) {
	const { id } = req.params;
	const { diasAntesVencimento, diasAposVencimento, frequenciaVerificacao } =
		req.body;
	const configuracao = await configuracaoService.updateConfiguracao(
		Number(id),
		{
			diasAntesVencimento,
			diasAposVencimento,
			frequenciaVerificacao,
		}
	);
	res.status(200).json(configuracao);
}

export async function deleteConfiguracao(
	req: express.Request,
	res: express.Response
) {
	const { id } = req.params;
	await configuracaoService.deleteConfiguracao(Number(id));
	res.status(204).send();
}
