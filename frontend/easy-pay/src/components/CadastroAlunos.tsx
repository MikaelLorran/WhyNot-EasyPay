import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CadastroAlunos() {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [cpf, setCpf] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await api.post("/alunos", {
				nome,
				email,
				telefone,
				cpf,
			});
			alert("Aluno cadastrado com sucesso!");
			setTimeout(() => {
				navigate("/alunos");
			}, 1500);
		} catch (error) {
			console.error("Erro ao cadastrar aluno:", error);
			alert("Erro ao cadastrar aluno. Por favor, tente novamente.");
		}
	};

	return (
		<div className="container">
			<h1>Cadastro de Alunos</h1>

			<form onSubmit={handleSubmit}>
				<div className="form-card">
					<div className="form-grid">
						<div className="form-group">
							<label>👤 Nome Completo</label>
							<input
								type="text"
								name="name"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>📧 Email</label>
							<input
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>📞 Telefone</label>
							<input
								type="tel"
								name="phone"
								placeholder="+5519999999999"
								value={telefone}
								onChange={(e) => setTelefone(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>🪪 Cadastro Pessoa Física (CPF)</label>
							<input
								type="text"
								name="cpf"
								placeholder="xxx.xxx.xxx-xx"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
								required
							/>
						</div>
					</div>
					<br />
					<div>
						<button className="btn-submit">Cadastrar 💾</button>
					</div>
				</div>
			</form>

			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
