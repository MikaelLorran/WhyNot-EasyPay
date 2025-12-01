import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller.js";

const router = Router();

router.post("/usuario", usuarioController.criarUsuario);
router.post("/login", usuarioController.loginByUsername);
router.get("/usuario", usuarioController.getAllUsuarios);
router.get("/usuario/id/:id", usuarioController.getUsuarioById);
router.get("/usuario/:username", usuarioController.getUsuarioByUsername);
router.put("/usuario/:id", usuarioController.updateUsuario);
router.delete("/usuario/:id", usuarioController.deleteUsuario);

export default router;
