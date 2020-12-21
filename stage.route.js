import Stage_controller from "./stage.controller";
import express from "express";
const router = express.Router();

router.post("/create", Stage_controller.create);

module.exports = router;