//import { useNavigate } from "react-router-dom";

export default function Home() {
	//const navigate = useNavigate();

	return (
		<div className="container">
			<div className="header">
				<h1>Why Not? Institute</h1>
				<p className="subtitle">Sistema de Gerenciamento Acadêmico</p>
			</div>

			<div className="cards-grid">
				<a href="Cadastro de Usuários.html" className="card">
					<div className="card-icon">👥</div>
					<h2 className="card-title">Cadastro de Usuários</h2>
					<p className="card-description">
						Registre novos alunos no sistema com todas as informações
						necessárias
					</p>
				</a>

				<a href="Cadastro de Boletos.html" className="card">
					<div className="card-icon">📄</div>
					<h2 className="card-title">Cadastro de Boletos</h2>
					<p className="card-description">
						Gerencie boletos de pagamento e anexe comprovantes
					</p>
				</a>
			</div>

			<div className="management-section">
				<h3 className="section-title">Controle e Gerenciamento</h3>
				<div className="management-grid">
					<a href="Controle de Alunos.html" className="management-card">
						<div className="management-icon">🎓</div>
						<h3 className="management-title">Controle de Alunos</h3>
					</a>

					<a href="Controle de Pagamentos.html" className="management-card">
						<div className="management-icon">💳</div>
						<h3 className="management-title">Controle de Pagamentos</h3>
					</a>

					<a href="#" className="management-card">
						<div className="management-icon">📊</div>
						<h3 className="management-title">Relatório (PowerBI)</h3>
					</a>
				</div>
			</div>
			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
