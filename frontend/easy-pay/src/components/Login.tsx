import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

export default function Login() {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await api.post("/login", { username, password });
			toast.success("Login realizado com sucesso!");
			navigate("/home");
		} catch (error) {
			toast.error("Erro ao fazer login");
			console.log("Erro ao fazer login", error);
		}
	};

	return (
		<div className="container">
			<div className="header">
				<h1 className="title">Why Not? Institute</h1>
				<p className="subtitle">Sistema de Gerenciamento Acadêmico</p>
			</div>

			<form onSubmit={handleLogin}>
				<div className="container-login">
					<h1>Login</h1>
					<label htmlFor="">Email</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<br />
					<label htmlFor="">Senha</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button id="btn-log">Entrar</button>
				</div>
			</form>
			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
