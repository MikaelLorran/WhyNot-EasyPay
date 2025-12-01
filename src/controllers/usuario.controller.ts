import type express from "express";
import * as usuarioService from "../services/usuario.service.js";

export async function criarUsuario(
	req: express.Request,
	res: express.Response
) {
	const { username, password } = req.body;
	const usuario = await usuarioService.criarUsuario({ username, password });
	res.status(201).json(usuario);
}

export async function getAllUsuarios(
	req: express.Request,
	res: express.Response
) {
	const usuarios = await usuarioService.getAllUsuarios();
	res.status(200).json(usuarios);
}

export async function getUsuarioById(
	req: express.Request,
	res: express.Response
) {
	const { id } = req.params;
	const usuario = await usuarioService.getUsuarioById(Number(id));

	if (!usuario)
		return res.status(404).json({ message: "Usuario não encontrado" });

	res.status(200).json(usuario);
}

export async function getUsuarioByUsername(
	req: express.Request,
	res: express.Response
) {
	const username = req.params.username as string;
	const usuario = await usuarioService.getUsuarioByUsername(username);

	if (!usuario) {
		return res.status(404).json({ message: "Usuario não encontrado" });
	}
	res.status(200).json(usuario);
}

export async function updateUsuario(
	req: express.Request,
	res: express.Response
) {
	const { id } = req.params;
	const { username, password } = req.body;
	const usuario = await usuarioService.updateUsuario(Number(id), {
		username,
		password,
	});
	res.status(200).json(usuario);
}

export async function deleteUsuario(
	req: express.Request,
	res: express.Response
) {
	const { id } = req.params;
	await usuarioService.deleteUsuario(Number(id));
	res.status(204).send();
}

export async function loginByUsername(
	req: express.Request,
	res: express.Response
) {
	const { username, password } = req.body;
	const usuario = await usuarioService.loginByUsername(username, password);

	if (!usuario) {
		return res.status(404).json({ message: "Usuario não encontrado" });
	}

	res.status(200).json(usuario);
}
