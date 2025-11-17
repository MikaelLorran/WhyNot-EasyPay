import * as boletoRepository from "../repositories/boleto.repository.js"

export function criarBoleto(data: {
  titulo: string
  valor: number
  vencimento: Date
  alunoId: number
}) {
  return boletoRepository.create(data)
}

export function getAllBoletos() {
  return boletoRepository.findAll()
}

export function getBoletoById(id: number) {
  return boletoRepository.findById(id)
}

export function pagarBoleto(id: number) {
  return boletoRepository.marcarComoPago(id, new Date())
}

export async function deletarBoleto(id: number) {
  return boletoRepository.remove(id)
}

export async function getBoletosByAlunoId(id: number) {
  return boletoRepository.findByAlunoId(id)
}