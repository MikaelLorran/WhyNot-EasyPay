import { useNavigate } from "react-router-dom";
export default function Navbar() {
	const navigate = useNavigate();
	return (
		<nav className="sidebar">
			<ul>
				<li className="cardnav">WhyNot</li>
				<li onClick={() => navigate("/")} className="cardnav">
					Dashboard
				</li>
				<li onClick={() => navigate("/alunos")} className="cardnav">
					Alunos
				</li>
				<li onClick={() => navigate("/boletos")} className="cardnav">
					Boletos
				</li>
				<li onClick={() => navigate("/login")} className="cardnav-logout">
					Sair
				</li>
			</ul>
		</nav>
	);
}
