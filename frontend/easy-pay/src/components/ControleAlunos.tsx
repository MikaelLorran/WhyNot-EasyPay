export default function ControleAlunos() {
    return (
        
    <div className="container">
        <h1>Controle de alunos</h1>
        
        <div className="control-card">
            <div className="filters">
                <div className="filter-group">
                    <label>🔍 Buscar aluno</label>
                    <input type="text" id="searchAluno" placeholder="Digite nome ou email..."/>
                </div>

                <div className="filter-group">
                    <label>Nível</label>
                    <select id="levelFilter">
                        <option value="todos">Todos</option>
                        <option value="basico">Básico</option>
                        <option value="intermediario">Intermediário</option>
                        <option value="avancado">Avançado</option>
                    </select>
                </div>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Nível</th>
                            <th>Idioma(s)</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr data-level="avancado">
                            <td>Giovanne</td>
                            <td>Oliveira</td>
                            <td>giovanne.j@outlook.com</td>
                            <td>(19) 99153-4021</td>
                            <td><span className="level-badge">Avançado</span></td>
                            <td>Inglês, Francês</td>
                            <td>
                                <div className="actions">
                                    <button className="btn-action btn-edit" title="Editar">✏️</button>
                                    <button className="btn-action btn-delete" title="Excluir">🗑️</button>
                                    <button className="btn-action btn-view" title="Visualizar">👁️</button>
                                </div>
                            </td>
                        </tr>
                        <tr data-level="basico">
                            <td>Mikael</td>
                            <td>Carvalho</td>
                            <td>kaellorran@gmail.com</td>
                            <td>(19) 98705-1421</td>
                            <td><span className="level-badge">Básico</span></td>
                            <td>Inglês</td>
                            <td>
                                <div className="actions">
                                    <button className="btn-action btn-edit" title="Editar">✏️</button>
                                    <button className="btn-action btn-delete" title="Excluir">🗑️</button>
                                    <button className="btn-action btn-view" title="Visualizar">👁️</button>
                                </div>
                            </td>
                        </tr>
                        <tr data-level="avancado">
                            <td>Mateus</td>
                            <td>Barros</td>
                            <td>mb685212@gmail.com</td>
                            <td>(19) 99954-5328</td>
                            <td><span className="level-badge">Avançado</span></td>
                            <td>Inglês</td>
                            <td>
                                <div className="actions">
                                    <button className="btn-action btn-edit" title="Editar">✏️</button>
                                    <button className="btn-action btn-delete" title="Excluir">🗑️</button>
                                    <button className="btn-action btn-view" title="Visualizar">👁️</button>
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