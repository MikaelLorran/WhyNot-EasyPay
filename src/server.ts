import "dotenv/config"
import express from "express"
import alunoRoutes from "./routes/alunos.routes.js"

const app = express()
app.use(express.json())
app.use(alunoRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`)
})
