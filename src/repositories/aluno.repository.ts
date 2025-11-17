import Aluno from "../entities/aluno.entity.js"

export function create(data: { nome: string; email: string; cpf: string }) {
  return Aluno.create({ data })
}

export function findAll() {
  return Aluno.findMany({
    include: { boletos: true } // útil para ver boletos também
  })
}

export function findById(id: number) {
  return Aluno.findUnique({
    where: { id },
    include: { boletos: true }
  })
}

export function findbyCpf(cpf: string) {
  return Aluno.findUnique({
    where: { cpf },
    include: { boletos: true }
  })
}
