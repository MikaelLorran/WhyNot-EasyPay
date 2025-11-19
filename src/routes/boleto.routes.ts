import { Router } from "express";
import * as boletoController from "../controllers/boleto.controller.js";

const router = Router();

router.post("/boletos", boletoController.criarBoleto);
router.get("/boletos", boletoController.getAllBoletos);
router.get("/boletos/:id", boletoController.getBoletoById);
router.post("/boletos/:id/pagar", boletoController.pagarBoleto);
router.put("/boletos/:id", boletoController.updateBoleto);
router.delete("/boletos/:id", boletoController.deleteBoleto);

router.get("/alunos/:id/boletos", boletoController.getBoletosByAlunoId);

export default router;
