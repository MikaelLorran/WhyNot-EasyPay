import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Aluno {
	id: number;
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
}

export default function CadastroBoletos() {
	const [titulo, setTitulo] = useState("");
	const [vencimento, setVencimento] = useState("");
	const [valor, setValor] = useState("");
	const [alunoId, setAlunoId] = useState("");
	const [alunos, setAlunos] = useState<Aluno[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		const buscarAlunos = async () => {
			try {
				const response = await api.get("/alunos");
				setAlunos(response.data);
			} catch (error) {
				console.error("Erro ao buscar alunos:", error);
			}
		};

		buscarAlunos();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await api.post("/boletos", {
				titulo,
				vencimento,
				valor: parseFloat(valor),
				alunoId: parseInt(alunoId),
			});
			toast.success("Boleto cadastrado com sucesso!");
			setTimeout(() => {
				navigate("/boletos");
			}, 1500);
		} catch (error) {
			console.error("Erro ao cadastrar boleto:", error);
			toast.error("Erro ao cadastrar boleto. Por favor, tente novamente.");
		}
	};

	return (
		<div className="container">
			<h1 className="title">Cadastro de Boletos</h1>

			<form onSubmit={handleSubmit}>
				<div className="content-wrapper">
					<div className="form-card">
						<div className="form-grid">
							<div className="form-group">
								<label>👤 Aluno</label>
								<select
									name="studentName"
									value={alunoId}
									onChange={(e) => setAlunoId(e.target.value)}
									required
								>
									<option value="">Selecione um aluno</option>
									{alunos.map((aluno) => (
										<option key={aluno.id} value={aluno.id}>
											{aluno.nome} - {aluno.cpf}
										</option>
									))}
								</select>
							</div>
							<div className="form-group">
								<label>📄 Título</label>
								<input
									type="text"
									name="billTitle"
									placeholder="Ex.: Mensalidade 11/2025"
									value={titulo}
									onChange={(e) => setTitulo(e.target.value)}
									required
								/>
							</div>
							<div className="form-group">
								<label>📅 Data de vencimento</label>
								<input
									type="date"
									name="dueDate"
									placeholder="dd/mm/aaaa"
									value={vencimento}
									onChange={(e) => setVencimento(e.target.value)}
									required
								/>
							</div>
							<div className="form-group">
								<label>💰 Valor do pagamento</label>
								<input
									type="number"
									step="0.1"
									name="paymentValue"
									placeholder="0,00"
									value={valor}
									onChange={(e) => setValor(e.target.value)}
									required
								/>
							</div>
						</div>
						<br />
						<div>
							<button className="btn-submit">Cadastrar 💾</button>
						</div>
					</div>
				</div>
			</form>

			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
