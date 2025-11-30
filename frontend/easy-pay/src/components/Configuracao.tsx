import { useState, useEffect } from "react";
import api from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AlterarConfiguracao() {
	const [diasAntesVencimento, setDiasAntesVencimento] = useState("");
	const [diasAposVencimento, setDiasAposVencimento] = useState("");
	const [minuto, setMinuto] = useState("");
	const [hora, setHora] = useState("");
	const [diaMes, setDiaMes] = useState("");
	const [mes, setMes] = useState("");
	const [diaSemana, setDiaSemana] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const carregarConfiguracao = async () => {
			const response = await api.get("/configuracao/1");

			setDiasAntesVencimento(response.data.diasAntesVencimento);
			setDiasAposVencimento(response.data.diasAposVencimento);
			setMinuto(response.data.minuto);
			setHora(response.data.hora);
			setDiaMes(response.data.diaMes);
			setMes(response.data.mes);
			setDiaSemana(response.data.diaSemana);
		};

		carregarConfiguracao();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!minuto || !hora || !diaMes || !mes || !diaSemana) {
			toast.error("Por favor, preencha todos os campos da frequência");
			return;
		}

		try {
			await api.put("/configuracao/1", {
				diasAntesVencimento,
				diasAposVencimento,
				minuto,
				hora,
				diaMes,
				mes,
				diaSemana,
			});
			toast.success("Configuração alterada com sucesso!");
			setTimeout(() => {
				navigate("/");
			}, 1500);
		} catch (error) {
			console.error("Erro ao alterar configuração", error);
			toast.error("Erro ao alterar configuração. Por favor, tente novamente.");
		}
	};

	return (
		<div className="container">
			<h1 className="title">Configurações de envio</h1>

			<form onSubmit={handleSubmit}>
				<div className="form-card">
					<div className="form-grid">
						<div className="form-group">
							<label>Dias antes do vencimento</label>
							<input
								type="number"
								name="diasAntesVencimento"
								value={diasAntesVencimento}
								onChange={(e) => setDiasAntesVencimento(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>Dias após o vencimento</label>
							<input
								type="number"
								name="diasAposVencimento"
								value={diasAposVencimento}
								onChange={(e) => setDiasAposVencimento(e.target.value)}
								required
							/>
						</div>

						<div className="form-group">
							<label>Minuto (0-59)</label>
							<input
								type="text"
								name="Minuto"
								value={minuto}
								onChange={(e) => setMinuto(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>Hora (0-23)</label>
							<input
								type="text"
								name="Hora"
								value={hora}
								onChange={(e) => setHora(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>Dia Mês (1-31)</label>
							<input
								type="text"
								name="DiaMes"
								value={diaMes}
								onChange={(e) => setDiaMes(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>Mês (1-12)</label>
							<input
								type="text"
								name="Mês"
								value={mes}
								onChange={(e) => setMes(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>Dia Semana (0-6)</label>
							<input
								type="text"
								name="DiaSemana"
								value={diaSemana}
								onChange={(e) => setDiaSemana(e.target.value)}
								required
							/>
						</div>
					</div>
					<br />
					<div>
						<button className="btn-submit">Alterar</button>
					</div>
				</div>
			</form>

			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
