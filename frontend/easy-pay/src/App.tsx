import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import ControleBoletos from "./components/ControleBoletos.tsx";
import ControleAlunos from "./components/ControleAlunos.tsx";
import CadastroUsuarios from "./components/CadastroUsuarios.tsx";
import CadastroBoletos from "./components/CadastroBoletos.tsx";
import Login from "./components/login.tsx";
import Navbar from "./components/navbar.tsx";

function App() {
	return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/controleboletos" element={<ControleBoletos />} />
				<Route path="/alunos" element={<ControleAlunos />} />
				<Route path="/usuarios" element={<CadastroUsuarios />} />
				<Route path="/cadastroboletos" element={<CadastroBoletos />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<h1>About Page</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
