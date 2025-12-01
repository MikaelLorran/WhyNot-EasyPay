import { useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AlterarAluno() {
	const [titulo, setTitulo] = useState("");
	const [vencimento, setVencimento] = useState("");
	const [valor, setValor] = useState("");
	const [nomeAluno, setNomeAluno] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const carregarBoleto = async () => {
			try {
				const response = await api.get(
					`/boletos/${window.location.pathname.split("/").pop()}`
				);
				setTitulo(response.data.titulo);
				setVencimento(response.data.vencimento);
				setValor(response.data.valor);
				setNomeAluno(response.data.aluno.nome);
			} catch (error) {
				console.error("Erro ao carregar boleto:", error);
			}
		};

		carregarBoleto();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const id = window.location.pathname.split("/").pop();

		try {
			await api.put(`/boletos/${id}`, {
				titulo,
			});
			toast.success("Boleto alterado com sucesso!");
			setTimeout(() => {
				navigate("/boletos");
			}, 1500);
		} catch (error) {
			console.error("Erro ao alterar boleto:", error);
			toast.error("Erro ao alterar boleto. Por favor, tente novamente.");
		}
	};

	return (
		<div className="container">
			<h1 className="title">Alteração de Boleto</h1>

			<form onSubmit={handleSubmit}>
				<div className="content-wrapper">
					<div className="form-card">
						<div className="form-grid">
							<div className="form-group">
								<label>👤 Aluno</label>
								<input
									type="text"
									name="studentName"
									value={nomeAluno}
									required
									disabled
									readOnly
								/>
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
									type="text"
									name="dueDate"
									placeholder="dd/mm/aaaa"
									value={new Date(vencimento).toLocaleDateString("pt-BR")}
									required
									disabled
									readOnly
								/>
							</div>
							<div className="form-group">
								<label>💰 Valor do pagamento</label>
								<input
									type="text"
									step="0.1"
									name="paymentValue"
									placeholder="0,00"
									value={`R$ ${Number(valor).toFixed(2).replace(".", ",")}`}
									required
									disabled
									readOnly
								/>
							</div>
						</div>
						<br />
						<div className="btn-grid">
							<button className="btn-submit btn-group">Salvar</button>
							<a
								className="btn-cancel btn-group"
								onClick={() => navigate("/boletos")}
							>
								Cancelar
							</a>
						</div>
					</div>
				</div>
			</form>
			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
