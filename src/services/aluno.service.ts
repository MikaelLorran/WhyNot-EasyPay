import * as alunoRepository from "../repositories/aluno.repository.js"

export function criarAluno(data: { nome: string; email: string; cpf: string }) {
  return alunoRepository.create(data)
}

export function getAllAlunos() {
  return alunoRepository.findAll()
}

export function getAlunoById(id: number) {
  return alunoRepository.findById(id)
}

export function getAlunoByCpf(cpf: string) {
  return alunoRepository.findbyCpf(cpf)
}
