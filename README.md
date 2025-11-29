# WhyNot-EasyPay

Sistema desenvolvido para o PI (Projeto Interdisciplinar) do 2º semestre de Análise e Desenolvimento e Sistemas da Fatec Indaiatuba.

## Backend

O backend do sistema foi desenvolvido utilizando Nodejs com o framework Express. Ele é responsável por gerenciar as requisições dos usuários, processar pagamentos e interagir com o banco de dados.

Requisitos para rodar:

- Nodejs v22 instalado na máquina,
- Token API e Phone ID da API oficial do WhatsApp

Como executar:

1. Clone o repositório do backend:

   ```bash
   git clone

   ```

2. No terminal, instale as dependências do Nodejs:

   ```bash
   npm install
   npm install @whiskeysockets/baileys pino

   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```env

   DATABASE_URL="file:./database.db"
   PORT=3000 ou outra porta disponível
   EMAIL_USER= E-mail responsável pelos envios
   EMAIL_PASS= Sua senha gerada pelo provedor

   ```

4. Execute a API com o seguinte comando no terminal:

   ```bash
   npm run dev

   ```
