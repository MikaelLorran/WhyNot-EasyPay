import * as alunoRepository from "../repositories/aluno.repository.js";

export function criarAluno(data: {
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
}) {
	return alunoRepository.create(data);
}

export function getAllAlunos() {
	return alunoRepository.findAll();
}

export function getAlunoById(id: number) {
	return alunoRepository.findById(id);
}

export function getAlunoByCpf(cpf: string) {
	return alunoRepository.findbyCpf(cpf);
}

export async function updateAluno(
	id: number,
	data: { nome: string; email: string; cpf: string; telefone: string }
) {
	const aluno = await alunoRepository.findById(id);

	if (!aluno) {
		throw new Error("Aluno não encontrado!");
	}

	return alunoRepository.updateAluno(id, data);
}

export async function deleteAluno(id: number) {
	const aluno = await alunoRepository.findById(id);

	if (!aluno) {
		throw new Error("Aluno não encontrado!");
	}
	return alunoRepository.deleteAluno(id);
}
