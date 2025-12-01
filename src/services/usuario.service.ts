import * as usuarioRepository from "../repositories/usuario.repository.js";

export function criarUsuario(data: { username: string; password: string }) {
	return usuarioRepository.create(data);
}

export function getAllUsuarios() {
	return usuarioRepository.findAll();
}

export function getUsuarioById(id: number) {
	return usuarioRepository.findById(id);
}

export function getUsuarioByUsername(username: string) {
	return usuarioRepository.findbyUsername(username);
}

export async function updateUsuario(
	id: number,
	data: { username: string; password: string }
) {
	const usuario = await usuarioRepository.findById(id);

	if (!usuario) {
		throw new Error("Usuário não encontrado");
	}

	return usuarioRepository.updateUsuario(id, data);
}

export async function deleteUsuario(id: number) {
	const usuario = await usuarioRepository.findById(id);

	if (!usuario) {
		throw new Error("Usuário não encontrado");
	}
	return usuarioRepository.deleteUsuario(id);
}

export async function loginByUsername(username: string, password: string) {
	const response = await usuarioRepository.loginByUsername(username, password);

	if (!response) {
		throw new Error("Usuário não encontrado");
	}

	return usuarioRepository.loginByUsername(username, password);
}
