import "dotenv/config";
import express from "express";
import cors from "cors";
import * as cronSchedule from "./infrastructure/cronSchedule.infrastucture.js";
import alunoRoutes from "./routes/alunos.routes.js";
import boletoRoutes from "./routes/boleto.routes.js";
import usuarioRoutes from "./routes/usuario.route.js";

cronSchedule.scheduleBoletoBeforeExpirationCheck();
cronSchedule.scheduleBoletoAfterExpirationCheck();

const app = express();
const corsOptions = {
	origin: "http://localhost:5173",
	credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(alunoRoutes);
app.use(boletoRoutes);
app.use(usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server rodando em http://localhost:${PORT}`);
});
