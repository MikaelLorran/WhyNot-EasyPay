import dotenv from "dotenv";
dotenv.config();

const API_URL = `https://graph.facebook.com/v22.0/${process.env.WA_PHONE_ID}/messages`;
const WA_TOKEN = process.env.WA_TOKEN;
interface WhatsAppOptions {
	to: string;
	template?: {
		name: string;
		language: { code: string };
		components?: Array<{
			type: string;
			parameters: Array<{
				type: string;
				text?: string;
			}>;
		}>;
	};
}

export async function sendWhatsAppMessage(options: WhatsAppOptions) {
	const messageOptions = {
		messaging_product: "whatsapp",
		to: options.to,
		type: "template",
		template: options.template,
	};

	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${WA_TOKEN}`,
			},
			body: JSON.stringify(messageOptions),
		});

		const data = await response.json();
		if (!response.ok) {
			console.error(`Erro ao enviar mensagem para ${options.to}:`, data);
		} else {
			console.log(`Mensagem enviada para ${options.to}`);
		}
	} catch (error) {
		console.error(`Erro ao enviar mensagem para ${options.to}:`, error);
	}
}
