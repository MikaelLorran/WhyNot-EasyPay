import { useEffect, useState } from "react";
import api from "../services/api";

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
	const [boletos, setBoletos] = useState<Boleto[]>([]);

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

	return (
		<div className="container">
			<h1>Controle de pagamento</h1>

			<div className="control-card">
				<div className="filters">
					<div className="filter-group">
						<label>🔍 Buscar boleto</label>
						<input
							type="text"
							id="searchBoleto"
							placeholder="Digite CPF/CNPJ ou nome..."
						/>
					</div>

					<div className="filter-group">
						<label>Status</label>
						<select id="statusFilter">
							<option value="pendentes">Pendentes</option>
							<option value="pagos">Pagos</option>
							<option value="atrasados">Em atraso</option>
							<option value="todos">Todos</option>
						</select>
					</div>
				</div>

				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th>Nome do Aluno</th>
								<th>CPF/CNPJ</th>
								<th>Valor</th>
								<th>Status</th>
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
										<div className="actions">
											<button className="btn-action btn-edit" title="Editar">
												✏️
											</button>
											<button className="btn-action btn-delete" title="Excluir">
												🗑️
											</button>
											<button
												className="btn-action btn-check"
												title="Confirmar pagamento"
											>
												✓
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
