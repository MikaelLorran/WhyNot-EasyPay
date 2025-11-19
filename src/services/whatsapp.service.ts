import Twilio from "twilio";
import * as dotenv from "dotenv";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappFrom = "whatsapp:" + process.env.WHATSAPP_FROM;

const client = Twilio(accountSid, authToken);

export async function sendWhatsAppMessage(
	to: string,
	message: string
): Promise<void> {
	const whatsappTo = "whatsapp:" + to;

	try {
		await client.messages.create({
			from: whatsappFrom,
			to: whatsappTo,
			body: message,
		});
		console.log(`Mensagem WhatsApp enviada para ${to}`);
	} catch (error) {
		console.error(`Erro ao enviar mensagem WhatsApp para ${to}:`, error);
		throw error;
	}
}
