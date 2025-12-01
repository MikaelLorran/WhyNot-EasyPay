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

interface Boleto {
	id: number;
	valor: number;
	finalizado: boolean;
	vencimento: string;
	alunoId: number;
	aluno: {
		nome: string;
		cpf: string;
	};
}

export default function ControleAlunos() {
	const navigate = useNavigate();
	const [alunos, setAlunos] = useState<Aluno[]>([]);
	const [boletos, setBoletos] = useState<Boleto[]>([]);

	useEffect(() => {
		const carregarAlunos = async () => {
			try {
				const response = await api.get("/alunos");
				setAlunos(response.data);
			} catch (error) {
				console.error("Erro ao carregar alunos:", error);
			}
		};

		const carregarBoletos = async () => {
			try {
				const response = await api.get("/boletos");
				setBoletos(response.data);
			} catch (error) {
				console.error("Erro ao carregar boletos:", error);
			}
		};

		carregarBoletos();
		carregarAlunos();
	}, []);

	const excluirAluno = async (id: number) => {
		if (window.confirm("Tem certeza que deseja excluir este aluno?")) {
			if (
				boletos.some(
					(boleto) =>
						boleto.aluno && boleto.alunoId === id && !boleto.finalizado
				)
			) {
				console.error("Existem boletos pendentes para este aluno.");
				toast.error(
					"Não é possível excluir o aluno. Existem boletos pendentes associados a ele."
				);
				return;
			}
			try {
				await api.delete(`/alunos/${id}`);
				toast.success("Aluno excluído com sucesso!");
				setAlunos(alunos.filter((aluno) => aluno.id !== id));
			} catch (error) {
				console.error("Erro ao excluir aluno:", error);
				toast.error("Erro ao excluir aluno.");
			}
		}
	};

	return (
		<div className="container">
			<h1 className="title">Controle de Alunos</h1>

			<div className="control-card">
				<div className="filters">
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
											<button
												className="btn-action btn-edit"
												title="Editar"
												onClick={() => navigate(`/edicaoaluno/${aluno.id}`)}
											>
												✏️
											</button>
											<button
												className="btn-action btn-delete"
												title="Excluir"
												onClick={() => excluirAluno(aluno.id)}
											>
												🗑️
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
