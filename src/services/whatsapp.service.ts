import {
	makeWASocket,
	useMultiFileAuthState,
	DisconnectReason,
	fetchLatestBaileysVersion,
	delay,
	type AnyMessageContent,
	type WASocket,
	type ConnectionState,
} from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";
import * as Pino from "pino";
import qrcode from "qrcode-terminal";

const SESSION_DIR = "baileys_auth_info";
let sock: WASocket | null = null;
let isConnecting = false;
let connectionPromise: Promise<WASocket> | null = null;

export async function connectToWhatsApp(): Promise<WASocket> {
	if (sock && (sock.user as any)?.id) {
		return sock;
	}

	if (connectionPromise) {
		return connectionPromise;
	}

	const initiateConnection = async (): Promise<WASocket> => {
		isConnecting = true;

		const { state, saveCreds } = await useMultiFileAuthState(SESSION_DIR);

		const { version } = await fetchLatestBaileysVersion();
		console.log(`Usando a versão do WhatsApp Web: ${version.join(".")}`);

		sock = makeWASocket({
			version,
			logger: Pino.default({ level: "silent" }),
			auth: state,
			browser: ["MeuBot Baileys", "Chrome", " "],
		});

		sock.ev.on(
			"connection.update",
			async (update: Partial<ConnectionState>) => {
				const { connection, lastDisconnect, qr } = update;

				if (qr) {
					console.log("⚠️ QR Code Recebido. Escaneie com seu celular:");
					qrcode.generate(qr, { small: true });
				}

				if (connection === "close") {
					isConnecting = false;
					connectionPromise = null;

					const shouldReconnect =
						(lastDisconnect?.error as Boom)?.output?.statusCode !==
						DisconnectReason.loggedOut;
					console.log("Conexão fechada. Tentando reconectar:", shouldReconnect);

					if (shouldReconnect) {
						await delay(3000);
						console.log("Iniciando próxima tentativa de conexão...");
					} else {
						console.log(
							"Sessão encerrada (logged out). Exclua a pasta de sessão e tente novamente."
						);
						sock = null;
					}
				} else if (connection === "open") {
					console.log("✅ Conectado ao WhatsApp!");
					isConnecting = false;
				}
			}
		);

		sock.ev.on("creds.update", saveCreds);

		sock.ev.on("messages.upsert", async (m) => {
			const msg: any = m.messages[0];

			if (!msg.key.fromMe && m.type === "notify") {
				const sender = msg.key.remoteJid;
				const text = (
					msg.message?.extendedTextMessage?.text ||
					msg.message?.conversation ||
					""
				).toLowerCase();

				console.log(`Mensagem recebida de ${sender}: ${text}`);

				if (text) {
					if (sock && (sock.user as any)?.id) {
						await sock.sendMessage(sender!, { text: "Olá, tudo bem?" });
					} else {
						console.warn(
							"Não foi possível enviar a mensagem - Conexão Baileys não está aberta (Socket fechado)."
						);
					}
				}
			}
		});

		return sock;
	};

	connectionPromise = initiateConnection();
	return connectionPromise;
}

connectToWhatsApp().catch((err) => {
	console.error("Erro fatal na conexão do Baileys:", err);
});

export async function sendMessage(number: string, content: AnyMessageContent) {
	let client = sock;

	if (!client || !(client.user as any)?.id) {
		console.log(
			"Cliente não conectado ou desconectado. Tentando obter ou estabelecer conexão..."
		);
		try {
			client = await connectToWhatsApp();
		} catch (error) {
			console.error("Falha ao obter conexão para envio.", error);
			return;
		}
	}

	if (!client || !(client.user as any)?.id) {
		console.error(
			"Não foi possível estabelecer a conexão para enviar a mensagem."
		);
		return;
	}

	const jid = `${number.replace(/[-+\s]/g, "")}@s.whatsapp.net`;
	try {
		await client.sendMessage(jid, content);
		console.log(`Mensagem enviada com sucesso para ${number}.`);
	} catch (error) {
		console.error(`Erro ao enviar mensagem para ${number}:`, error);
	}
}
