export default function Login() {
	return (
		<div className="container">
			<div className="header">
				<h1 className="title">Why Not? Institute</h1>
				<p className="subtitle">Sistema de Gerenciamento Acadêmico</p>
			</div>

			<div className="container-login">
				<h1>Login</h1>

				<label htmlFor="">Email</label>
				<input type="text" />
				<br />
				<label htmlFor="">Senha</label>
				<input type="password" />

				<h4>Esqueci a senha</h4>

				<button id="btn-log">Entrar</button>
			</div>
			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
