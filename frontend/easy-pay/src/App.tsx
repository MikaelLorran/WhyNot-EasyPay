import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import ControleBoletos from "./components/ControleBoletos.tsx";
import ControleAlunos from "./components/ControleAlunos.tsx";
import CadastroAlunos from "./components/CadastroAlunos.tsx";
import CadastroBoletos from "./components/CadastroBoletos.tsx";
import Login from "./components/Login.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/boletos" element={<ControleBoletos />} />
				<Route path="/alunos" element={<ControleAlunos />} />
				<Route path="/cadastroalunos" element={<CadastroAlunos />} />
				<Route path="/cadastroboletos" element={<CadastroBoletos />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<h1>About Page</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
