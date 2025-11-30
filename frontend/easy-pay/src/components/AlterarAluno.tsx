import { useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AlterarAluno() {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [cpf, setCpf] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const carregarAluno = async () => {
			try {
				const response = await api.get(
					`/alunos/${window.location.pathname.split("/").pop()}`
				);
				setNome(response.data.nome);
				setEmail(response.data.email);
				setTelefone(response.data.telefone);
				setCpf(response.data.cpf);
			} catch (error) {
				console.error("Erro ao carregar aluno:", error);
			}
		};

		carregarAluno();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const id = window.location.pathname.split("/").pop();

		try {
			await api.put(`/aluno/${id}`, {
				nome,
				email,
				telefone,
				cpf,
			});
			toast.success("Aluno alterado com sucesso!");
			setTimeout(() => {
				navigate("/alunos");
			}, 1500);
		} catch (error) {
			console.error("Erro ao alterar aluno:", error);
			toast.error("Erro ao alterar aluno. Por favor, tente novamente.");
		}
	};

	return (
		<div className="container">
			<h1 className="title">Alteração de Aluno</h1>

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
					<div className="btn-grid">
						<button className="btn-submit btn-group">Salvar</button>
						<a
							className="btn-cancel btn-group"
							onClick={() => navigate("/alunos")}
						>
							Cancelar
						</a>
					</div>
				</div>
			</form>

			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
