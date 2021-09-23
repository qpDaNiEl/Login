import express from "express";
import "dotenv/config";
import { bemVindo } from "../controllers/bemVindo";

const server = express();

const PORT = process.env.PORT || 4000;

server.use(express.json());

server.get ('/', bemVindo);

server.listen(PORT, () => {console.log(`Server runing at http://localhost:${PORT}`)})