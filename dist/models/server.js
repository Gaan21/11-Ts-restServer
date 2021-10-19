"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //Instalacion de paquete necesaria
const usuario_1 = __importDefault(require("../routes/usuario"));
//userRoutes es el alias que se puede poner directamente si solo se exporta 1 cosa
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        //el valor PORT puede ser nulo, asi que si eso pasa el puerto es el 8000
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes(); //Definir mis rutas
    }
    //TODO: Conectar base de datos
    middlewares() {
        //CORS  //Config por defecto
        this.app.use((0, cors_1.default)());
        //lectura del body //express parsea por mi el body
        this.app.use(express_1.default.json());
        //Carpeta pueblica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map