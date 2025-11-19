import "dotenv/config";
import express from "express";
import alunoRoutes from "./routes/alunos.routes.js";
import boletoRoutes from "./routes/boleto.routes.js";
import usuarioRoutes from "./routes/usuario.route.js";

const app = express();
app.use(express.json());
app.use(alunoRoutes);
app.use(boletoRoutes);
app.use(usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server rodando em http://localhost:${PORT}`);
});
