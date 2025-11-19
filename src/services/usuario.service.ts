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
