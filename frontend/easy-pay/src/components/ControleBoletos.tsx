export default function ControleBoletos() {
    return (
        <div className="container">
        <h1>Controle de pagamento</h1>
        
        <div className="control-card">
            <div className="filters">
                <div className="filter-group">
                    <label>🔍 Buscar boleto</label>
                    <input type="text" id="searchBoleto" placeholder="Digite CPF/CNPJ ou nome..." />
                </div>

                <div className="filter-group">
                    <label>Status</label>
                    <select id="statusFilter">
                        <option value="pendentes">Pendentes</option>
                        <option value="pagos">Pagos</option>
                        <option value="atrasados">Em atraso</option>
                        <option value="todos">Todos</option>
                    </select>
                </div>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome do pagador</th>
                            <th>CPF/CNPJ</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr>
                            <td>Giovanne Luiz</td>
                            <td>123.456.789-10</td>
                            <td>R$ 150,00</td>
                            <td><span className="status-badge status-pendente">Pendente</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn-action btn-edit" title="Editar">✏️</button>
                                    <button className="btn-action btn-delete" title="Excluir">🗑️</button>
                                    <button className="btn-action btn-check" title="Confirmar pagamento">✓</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Felipe Guimarães</td>
                            <td>123.456.789-10</td>
                            <td>R$ 200,00</td>
                            <td><span className="status-badge status-atraso">Em atraso</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn-action btn-edit" title="Editar">✏️</button>
                                    <button className="btn-action btn-delete" title="Excluir">🗑️</button>
                                    <button className="btn-action btn-check" title="Confirmar pagamento">✓</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Mateus de Barros</td>
                            <td>123.456.789-10</td>
                            <td>R$ 300,00</td>
                            <td><span className="status-badge status-pago">Pago</span></td>
                            <td>
                                <div className="actions">
                                    <button className="btn-action btn-edit" title="Editar">✏️</button>
                                    <button className="btn-action btn-delete" title="Excluir">🗑️</button>
                                    <button className="btn-action btn-check" title="Confirmar pagamento">✓</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <button className="btn-back">
            <svg viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
        </button>

        <footer>
            © 2025 Why Not? Institute. Todos os direitos reservados.
        </footer>
    </div>

    );
}