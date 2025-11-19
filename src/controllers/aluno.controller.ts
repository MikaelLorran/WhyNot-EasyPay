import type express from "express";
import * as alunoService from "../services/aluno.service.js";

export async function criarAluno(req: express.Request, res: express.Response) {
	const { nome, email, cpf } = req.body;
	const aluno = await alunoService.criarAluno({ nome, email, cpf });
	res.status(201).json(aluno);
}

export async function getAllAlunos(
	req: express.Request,
	res: express.Response
) {
	const alunos = await alunoService.getAllAlunos();
	res.status(200).json(alunos);
}

export async function getAlunoById(
	req: express.Request,
	res: express.Response
) {
	const { id } = req.params;
	const aluno = await alunoService.getAlunoById(Number(id));

	if (!aluno) return res.status(404).json({ message: "Aluno não encontrado" });

	res.status(200).json(aluno);
}

export async function getAlunoByCpf(
	req: express.Request,
	res: express.Response
) {
	const cpf = req.params.cpf as string;
	const aluno = await alunoService.getAlunoByCpf(cpf);

	if (!aluno) return res.status(404).json({ message: "Aluno não encontrado" });

	res.status(200).json(aluno);
}

export async function updateAluno(req: express.Request, res: express.Response) {
	const { id } = req.params;
	const { nome, email, cpf } = req.body;
	const aluno = await alunoService.updateAluno(Number(id), {
		nome,
		email,
		cpf,
	});
	res.status(200).json(aluno);
}

export async function deleteAluno(req: express.Request, res: express.Response) {
	const { id } = req.params;
	await alunoService.deleteAluno(Number(id));
	res.status(204).send();
}
