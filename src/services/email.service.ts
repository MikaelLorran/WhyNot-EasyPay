import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";

dotenv.config();

interface EmailOptions {
	to: string;
	subject: string;
	html: string;
}

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export async function sendEmail(options: EmailOptions): Promise<void> {
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: options.to,
		subject: options.subject,
		html: options.html,
	};

	try {
		await transporter.sendMail(mailOptions);
		console.log(`Email enviado para ${options.to}`);
	} catch (error) {
		console.error(`Erro ao enviar e-mail para ${options.to}:`, error);
		throw error;
	}
}
