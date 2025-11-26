import Aluno from "../entities/aluno.entity.js";
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export default prisma;

export function create(data: {
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
}) {
	return Aluno.create({ data });
}

export function findAll() {
	return Aluno.findMany({
		include: { boletos: true }, // útil para ver boletos também
	});
}

export function findById(id: number) {
	return Aluno.findUnique({
		where: { id },
		include: { boletos: true },
	});
}

export function findbyCpf(cpf: string) {
	return Aluno.findUnique({
		where: { cpf },
		include: { boletos: true },
	});
}

type UpdateAlunoData = Partial<{ 
    nome: string; 
    email: string; 
    cpf: string; 
    telefone: string; 
}>;

export function updateAluno(
    id: number,
    data: UpdateAlunoData 
) {
    if (Object.keys(data).length === 0) {
        throw new Error("Por favor, insira os dados para atualizar.");
    }
    
    return prisma.aluno.update({
        where: { id: id },
        data,
    });
}

export function deleteAluno(id: number) {
	return Aluno.delete({
		where: { id },
	});
}
