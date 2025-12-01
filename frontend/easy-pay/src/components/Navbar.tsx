import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
	const navigate = useNavigate();

	const handleLogout = () => {
		sessionStorage.removeItem("usuario");
		toast.success("Deslogado com sucesso");
		navigate("/");
	};

	return (
		<nav className="sidebar">
			<ul>
				<li className="cardnav" onClick={() => navigate("/home")}>
					<img className="img-icon" src="/logo.png" alt="Logo" />
				</li>
				<li onClick={() => navigate("/alunos")} className="cardnav">
					Alunos
				</li>
				<li onClick={() => navigate("/boletos")} className="cardnav">
					Boletos
				</li>
				<li onClick={() => navigate("/configuracao")} className="cardnav">
					Configurações
				</li>
				<li onClick={handleLogout} className="cardnav-logout">
					Sair
				</li>
			</ul>
		</nav>
	);
}
