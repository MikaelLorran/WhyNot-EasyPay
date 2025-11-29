import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import ControleBoletos from "./components/ControleBoletos.tsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/boletos" element={<ControleBoletos />} />
				<Route path="/about" element={<h1>About Page</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
