export default function CadastroUsuarios() {
    return (
        
    <div className="container">
        <h1>Cadastro de usuários</h1>
        
        <div className="form-card">
            <div className="form-grid">
                <div className="form-group">
                    <label>
                        <svg viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        Nome
                    </label>
                    <input type="text" id="name" name="name"/>
                </div>

                <div className="form-group">
                    <label>
                        <svg viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Email
                    </label>
                    <input type="email" id="email" name="email"/>
                </div>

                <div className="form-group observations">
                    <label>
                        <svg viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                        </svg>
                        Observações
                    </label>
                    <textarea id="observations" name="observations" placeholder="Alguma observação adicional..."></textarea>
                </div>

                <div className="form-group">
                    <label>
                        <svg viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        Sobrenome
                    </label>
                    <input type="text" id="surname" name="surname"/>
                </div>

                <div className="form-group">
                    <label>
                        <svg viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Telefone
                    </label>
                    <input type="tel" id="phone" name="phone"/>
                </div>

                <div className="form-group">
                    <label>
                        <svg viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd" />
                        </svg>
                        Idiomas de interesse
                    </label>
                    <div className="language-box">
                        <label className="language-option">
                            <input type="checkbox" name="language" value="Ingles"/>
                            <span>Inglês</span>
                        </label>
                        <label className="language-option">
                            <input type="checkbox" name="language" value="Frances"/>
                            <span>Francês</span>
                        </label>
                        <label className="language-option">
                            <input type="checkbox" name="language" value="Espanhol"/>
                            <span>Espanhol</span>
                        </label>
                        <label className="language-option">
                            <input type="checkbox" name="language" value="Portugues"/>
                            <span>Português</span>
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>
                        <svg viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        Data de nascimento
                    </label>
                    <input type="text" id="birthDate" name="birthDate" placeholder="dd/mm/aaaa"/>
                </div>

                <div className="form-group">
                    <label>Livro atual:</label>
                    <select id="book" name="book">
                        <option value="">Selecione...</option>
                        <option value="book1">Livro 1</option>
                        <option value="book2">Livro 2</option>
                        <option value="book3">Livro 3</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>
                        <svg viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                        Cadastro Pessoa Física (CPF)
                    </label>
                    <input type="text" id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx"/>
                </div>

                <div className="button-container">
                    <button className="btn-submit">
                        Cadastrar
                        <svg viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
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