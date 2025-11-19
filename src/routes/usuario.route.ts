import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller.js";

const router = Router();

router.post("/usuario", usuarioController.criarUsuario);
router.get("/usuario", usuarioController.getAllUsuarios);
router.get("/usuario/id/:id", usuarioController.getUsuarioById);
router.get("/usuario/:username", usuarioController.getUsuarioByUsername);

export default router;
