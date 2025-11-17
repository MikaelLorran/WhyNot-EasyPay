import type express from "express"
import * as boletoService from "../services/boleto.service.js"

export async function criarBoleto(req: express.Request, res: express.Response) {
  const { titulo, valor, vencimento, alunoId } = req.body

  const boleto = await boletoService.criarBoleto({
    titulo,
    valor,
    vencimento: new Date(vencimento),
    alunoId
  })

  res.status(201).json(boleto)
}

export async function getAllBoletos(req: express.Request, res: express.Response) {
  const boletos = await boletoService.getAllBoletos()
  res.status(200).json(boletos)
}

export async function getBoletoById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const boleto = await boletoService.getBoletoById(Number(id))

  if (!boleto)
    return res.status(404).json({ message: "Boleto não encontrado" })

  res.status(200).json(boleto)
}

export async function pagarBoleto(req: express.Request, res: express.Response) {
  const { id } = req.params
  const boleto = await boletoService.pagarBoleto(Number(id))
  res.status(200).json(boleto)
}
