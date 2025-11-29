export default function CadastroBoletos() {
	return (
		<div className="container">
			<h1>Cadastro de Boletos</h1>

			<div className="content-wrapper">
				<div className="form-card">
					<div className="form-grid">
						<div className="form-group">
							<label>👤 Nome do aluno</label>
							<input type="text" id="studentName" name="studentName" />
						</div>

						<div className="form-group">
							<label>📅 Data de vencimento</label>
							<input
								type="text"
								id="dueDate"
								name="dueDate"
								placeholder="dd/mm/aaaa"
							/>
						</div>

						<div className="form-group">
							<label>📄 Docs. anexados</label>
							<input
								type="text"
								id="attachedDocs"
								name="attachedDocs"
								value="Anexo_comprovante.pdf"
								readOnly={true}
								style={{ background: "#f9fafb" }}
							/>
						</div>

						<div className="form-group">
							<label>💰 Valor do pagamento</label>
							<input
								type="text"
								id="paymentValue"
								name="paymentValue"
								placeholder="R$ xxx,xx"
							/>
						</div>

						<div className="form-group observations">
							<label>📝 Observações</label>
							<textarea
								id="observations"
								name="observations"
								placeholder="Alguma observação adicional..."
							></textarea>
						</div>

						<div className="form-group">
							<button className="btn-submit">Cadastrar 💾</button>
						</div>
					</div>
				</div>

				<div className="search-card">
					<div className="search-group">
						<label>🔍 Consulta de boletos</label>
						<input
							type="text"
							id="searchCPF"
							name="searchCPF"
							placeholder="Digite CPF/CNPJ ou nome..."
						/>
					</div>

					<button className="btn-search">
						Consultar
						<svg viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</div>

			<button className="btn-back">
				<svg viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>

			<footer>© 2025 Why Not? Institute. Todos os direitos reservados.</footer>
		</div>
	);
}
