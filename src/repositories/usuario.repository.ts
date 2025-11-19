import Usuario from "../entities/usuario.entity.js";

export function create(data: { username: string; password: string }) {
	return Usuario.create({ data });
}

export function findAll() {
	return Usuario.findMany();
}

export function findById(id: number) {
	return Usuario.findUnique({ where: { id } });
}

export function findbyUsername(username: string) {
	return Usuario.findUnique({ where: { username } });
}

export function updateUsuario(
	id: number,
	data: { username: string; password: string }
) {
	return Usuario.update({
		where: { id },
		data,
	});
}

export function deleteUsuario(id: number) {
	return Usuario.delete({
		where: { id },
	});
}
