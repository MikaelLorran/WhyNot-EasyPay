import cron from "node-cron";
import { PrismaClient } from "../generated/prisma/client.js";
import * as boletoService from "../services/boleto.service.js";
import * as dotenv from "dotenv";
import * as configuracaoService from "../services/configuracao.service.js";

dotenv.config();

const prisma = new PrismaClient();

const frequenciaVerificacao = async () => {
	const configuracao = await configuracaoService.getConfiguracaoById(1);
	if (configuracao) {
		const frequencia = `${configuracao.minuto} ${configuracao.hora} ${configuracao.diaMes} ${configuracao.mes} ${configuracao.diaSemana}`;
		return frequencia;
	}
	return "0 9 * * 1-5";
};

export async function scheduleBoletoBeforeExpirationCheck() {
	const frequencia: string = await frequenciaVerificacao();
	const cronExpression = frequencia;

	cron.schedule(cronExpression, async () => {
		console.log(
			"Iniciando tarefa agendada para verificação de boletos a vencer..."
		);
		try {
			await boletoService.sendBeforeExpirationMessage();
			console.log("Tarefa de verificação de boletos a vencer concluída.");
		} catch (error) {
			console.error("Erro durante a verificação de boletos a vencer:", error);
		}
	}),
		{
			scheduled: true,
			timezone: "America/Sao_Paulo",
		};

	console.log(`Frequência definida: ${frequencia}`);
}

export async function scheduleBoletoAfterExpirationCheck() {
	const frequencia: string = await frequenciaVerificacao();
	const cronExpression = frequencia;

	cron.schedule(cronExpression, async () => {
		console.log(
			"Iniciando tarefa agendada para verificação de boletos vencidos..."
		);
		try {
			await boletoService.sendAfterExpirationMessage();
			console.log("Tarefa de verificação de boletos vencidos concluída.");
		} catch (error) {
			console.error("Erro durante a verificação de boletos a vencer:", error);
		}
	}),
		{
			scheduled: true,
			timezone: "America/Sao_Paulo",
		};
}
