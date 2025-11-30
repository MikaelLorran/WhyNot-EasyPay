import { useState, useEffect } from "react";
import api from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AlterarConfiguracao() {
	const [diasAntesVencimento, setDiasAntesVencimento] = useState("");
	const [diasAposVencimento, setDiasAposVencimento] = useState("");

	// O estado frequenciaVerificacao pode ser mantido para o valor completo,
	// mas não será usado para *disparar* a separação de forma síncrona.
	const [frequenciaVerificacao, setFrequenciaVerificacao] =
		useState<string>("");

	const [minuto, setMinuto] = useState("");
	const [hora, setHora] = useState("");
	const [diaMes, setDiaMes] = useState("");
	const [mes, setMes] = useState("");
	const [diaSemana, setDiaSemana] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const carregarConfiguracao = async () => {
			try {
				const response = await api.get("/configuracao/1");
				const {
					diasAntesVencimento: antes,
					diasAposVencimento: apos,
					frequenciaVerificacao: cronString,
				} = response.data;

				setDiasAntesVencimento(antes);
				setDiasAposVencimento(apos);
				setFrequenciaVerificacao(cronString);

				if (cronString) {
					const partes = cronString.split(" ");

					if (partes.length === 5) {
						setMinuto(partes[0]);
						setHora(partes[1]);
						setDiaMes(partes[2]);
						setMes(partes[3]);
						setDiaSemana(partes[4]);
					} else {
						console.error(
							"Formato inválido de frequência de verificação (Cron)"
						);
						setMinuto("*");
						setHora("*");
						setDiaMes("*");
						setMes("*");
						setDiaSemana("*");
					}
				}
			} catch (error) {
				console.error("Erro ao carregar configurações:", error);
			}
		};
		carregarConfiguracao();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!minuto || !hora || !diaMes || !mes || !diaSemana) {
			toast.error("Por favor, preencha todos os campos da frequência (Cron).");
			return;
		}

		const cronExpression = `${minuto} ${hora} ${diaMes} ${mes} ${diaSemana}`;

		try {
			await api.put("/configuracao/1", {
				diasAntesVencimento,
				diasAposVencimento,
				frequenciaVerificacao: cronExpression,
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
