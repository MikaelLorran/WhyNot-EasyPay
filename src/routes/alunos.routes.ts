import { Router } from "express"
import * as alunoController from "../controllers/aluno.controller.js"

const router = Router()

router.post("/alunos", alunoController.criarAluno)
router.get("/alunos", alunoController.getAllAlunos)
router.get("/alunos/cpf/:cpf", alunoController.getAlunoByCpf)
router.get("/alunos/:id", alunoController.getAlunoById)

export default router
