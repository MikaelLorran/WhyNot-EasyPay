import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="container">
			<div className="header">
				<h1 className="title">Why Not? Institute</h1>
				<p className="subtitle">Sistema de Gerenciamento de Pagamentos</p>
			</div>
			<div className="management-section">
				<div className="management-grid">
					<a onClick={() => navigate("/alunos")} className="management-card">
						<div className="management-icon">🎓</div>
						<h3 className="management-title">Controle de Alunos</h3>
					</a>

					<a onClick={() => navigate("/boletos")} className="management-card">
						<div className="management-icon">💳</div>
						<h3 className="management-title">Controle de Boletos</h3>
					</a>

					<a
						onClick={() => navigate("/configuracao")}
						className="management-card"
					>
						<div className="management-icon">⚙️</div>
						<h3 className="management-title">Configurar envios</h3>
					</a>
				</div>
			</div>
			<br />
			<br />
			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
