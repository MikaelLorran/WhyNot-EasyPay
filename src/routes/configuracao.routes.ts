import { Router } from "express";
import * as configuracaoController from "../controllers/configuracao.controller.js";

const router = Router();

router.post("/configuracao", configuracaoController.criarConfiguracao);
router.get("/configuracao/:id", configuracaoController.getConfiguracaoById);
router.put("/configuracao/:id", configuracaoController.updateConfiguracao);
router.delete("/configuracao/:id", configuracaoController.deleteConfiguracao);

export default router;
