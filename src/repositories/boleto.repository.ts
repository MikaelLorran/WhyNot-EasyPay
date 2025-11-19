import Boleto from "../entities/boleto.entity.js";

export function create(data: {
	titulo: string;
	valor: number;
	vencimento: Date;
	alunoId: number;
}) {
	return Boleto.create({ data });
}

export function findAll() {
	return Boleto.findMany({
		include: { aluno: true },
	});
}

export function findById(id: number) {
	return Boleto.findUnique({
		where: { id },
		include: { aluno: true },
	});
}

export function marcarComoPago(id: number, dataPagamento: Date) {
	return Boleto.update({
		where: { id },
		data: {
			finalizado: true,
			dataPagamento,
		},
	});
}

export function updateAluno(
	id: number,
	data: {
		titulo: string;
		valor: number;
		vencimento: Date;
		alunoId: number;
	}
) {
	return Boleto.update({
		where: { id },
		data,
	});
}

export async function deleteBoleto(id: number) {
	return Boleto.delete({ where: { id } });
}

// Boletos de um aluno específico
export async function findByAlunoId(alunoId: number) {
	return Boleto.findMany({ where: { alunoId } });
}
/* 
  id        Int      @id @default(autoincrement())
  titulo    String
  valor     Float
  vencimento DateTime
  dataPagamento DateTime?
  finalizado Boolean  @default(false)
  aluno      Aluno?    @relation(fields: [alunoId], references: [id])
  alunoId    Int?
  */
