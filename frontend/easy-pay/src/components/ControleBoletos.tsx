import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Boleto {
	id: number;
	valor: number;
	finalizado: boolean;
	vencimento: string;
	aluno: {
		nome: string;
		cpf: string;
	};
}

export default function ControleBoletos() {
	const navigate = useNavigate();
	const [boletos, setBoletos] = useState<Boleto[]>([]);
	const [modalAberto, setModalAberto] = useState(false);
	const [boletoPagamento, setBoletoPagametno] = useState(0);
	const [dataPagamento, setDataPagamento] = useState("");

	useEffect(() => {
		const carregarBoletos = async () => {
			try {
				const response = await api.get("/boletos");
				setBoletos(response.data);
			} catch (error) {
				console.error("Erro ao carregar boletos:", error);
			}
		};
		carregarBoletos();
	}, []);

	const excluirBoleto = async (id: number) => {
		if (window.confirm("Tem certeza que deseja excluir este boleto?")) {
			try {
				await api.delete(`/boletos/${id}`);
				toast.success("Boleto excluído com sucesso!");
				setBoletos(boletos.filter((boleto) => boleto.id !== id));
			} catch (error) {
				console.error("Erro ao excluir boleto:", error);
				toast.error("Erro ao excluir boleto. Tente novamente.");
			}
		}
	};

	const pagarBoleto = async (id: number, dataPagamento: string) => {
		try {
			await api.post(`/boletos/${id}/pagar`, { dataPagamento });
			toast.success("Boleto marcado como pago com sucesso!");
			setModalAberto(false);
			setBoletos(
				boletos.map((boleto) =>
					boleto.id === id ? { ...boleto, finalizado: true } : boleto
				)
			);
		} catch (error) {
			console.error("Erro ao marcar boleto como pago:", error);
			toast.error("Erro ao marcar boleto como pago. Tente novamente.");
		}
	};

	return (
		<div className="container">
			<h1 className="title">Controle de Boletos</h1>

			<div className="control-card">
				<div className="filters">
					<div className="filter-group">
						<input
							type="text"
							id="searchBoleto"
							placeholder="🔍 Digite o nome do aluno..."
						/>
					</div>
					<div className="filter-group">
						<button onClick={() => navigate("/cadastroboletos")}>
							Cadastrar Novo Boleto
						</button>
					</div>
				</div>

				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th>Nome do Aluno</th>
								<th>CPF</th>
								<th>Valor</th>
								<th>Status</th>
								<th>Data de Vencimento</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							{boletos.map((boleto) => (
								<tr key={boleto.id}>
									<td>{boleto.aluno.nome}</td>
									<td>{boleto.aluno.cpf}</td>
									<td>R$ {boleto.valor.toFixed(2).replace(".", ",")}</td>
									<td>
										{boleto.finalizado
											? "Pago"
											: new Date(boleto.vencimento) < new Date()
											? "Em atraso"
											: "Pendente"}
									</td>
									<td>
										{new Date(boleto.vencimento).toLocaleDateString("pt-Br")}
									</td>
									<td>
										<div className="actions">
											<button className="btn-action btn-edit" title="Editar">
												✏️
											</button>
											<button
												className="btn-action btn-delete"
												title="Excluir"
												onClick={() => excluirBoleto(boleto.id)}
											>
												🗑️
											</button>
											<button
												className="btn-action btn-check"
												title="Confirmar pagamento"
												onClick={() => {
													setModalAberto(true);
													setBoletoPagametno(boleto.id);
												}}
											>
												✓
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{modalAberto && boletoPagamento && (
						<div className="modal fade show d-block" tabIndex={-1}>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Pagamento Boleto</h5>
										<button
											type="button"
											className="btn-close"
											onClick={() => setModalAberto(false)}
										>
											X
										</button>
									</div>
									<div className="modal-body">
										<div className="mb-3">
											<label>Data de Pagamento</label>
											<input
												type="date"
												className="form-control"
												value={dataPagamento}
												onChange={(e) => setDataPagamento(e.target.value)}
											/>
										</div>
									</div>
									<div className="modal-footer">
										<button
											className="btn btn-secondary"
											onClick={() => setModalAberto(false)}
										>
											Cancelar
										</button>
										<button
											className="btn btn-primary"
											onClick={() =>
												pagarBoleto(boletoPagamento, dataPagamento)
											}
										>
											Confirmar Pagamento
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
