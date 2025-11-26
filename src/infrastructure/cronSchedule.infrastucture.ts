import cron from "node-cron";
import { PrismaClient } from "../generated/prisma/client.js";
import * as boletoService from "../services/boleto.service.js";
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

export function scheduleBoletoBeforeExpirationCheck() {
	const cronExpression = "4 22 * * *"; //Todo dia as 22:04AM

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
}
