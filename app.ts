import dotenv from "dotenv";
import Server from "./models/server";

dotenv.config(); //Configuracion por defecto de dotenv para leer archivo .env

const server = new Server();


server.listen();