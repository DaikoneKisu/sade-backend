import { Router } from "express";

import studentsRouter from "./students.js";
import schoolsRouter from "./schools.js";

const router = Router();

router.get("/", (req, res) => res.send("<h1>Activo papa<h1/>"));
router.use("/students", studentsRouter);
router.use("/schools", schoolsRouter);

export default router;