import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
interface Aluno {
	id: number;
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
}

export default function ControleAlunos() {
	const navigate = useNavigate();
	const [alunos, setAlunos] = useState<Aluno[]>([]);

	useEffect(() => {
		const carregarAlunos = async () => {
			try {
				const response = await api.get("/alunos");
				setAlunos(response.data);
			} catch (error) {
				console.error("Erro ao carregar alunos:", error);
			}
		};
		carregarAlunos();
	}, []);
	return (
		<div className="container">
			<h1>Controle de Alunos</h1>

			<div className="control-card">
				<div className="filters">
					<div className="filter-group">
						<input
							type="text"
							id="searchAluno"
							placeholder="🔍 Digite o nome do aluno..."
						/>
					</div>

					<div className="filter-group">
						<button onClick={() => navigate("/cadastroalunos")}>
							Cadastrar Novo Aluno
						</button>
					</div>
				</div>

				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th>Nome</th>
								<th>Email</th>
								<th>Telefone</th>
								<th>CPF</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							{alunos.map((aluno) => (
								<tr key={aluno.id}>
									<td>{aluno.nome}</td>
									<td>{aluno.email}</td>
									<td>{aluno.telefone}</td>
									<td>{aluno.cpf}</td>
									<td>
										<div className="actions">
											<button className="btn-action btn-edit" title="Editar">
												✏️
											</button>
											<button className="btn-action btn-delete" title="Excluir">
												🗑️
											</button>
											<button
												className="btn-action btn-view"
												title="Visualizar"
											>
												👁️
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<button className="btn-back">
				<svg viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>

			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
