import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import apiRouter from "./routes/api.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.json());
app.use("/", apiRouter);

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});