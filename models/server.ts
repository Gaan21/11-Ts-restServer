import  express  from "express"; //Instalacion de paquete necesaria
import  userRoutes from "../routes/usuario"; 
//userRoutes es el alias que se puede poner directamente si solo se exporta 1 cosa
import cors from "cors";


class Server {

    private app: express.Application;
    private port: string;
    private apiPaths = { //Definir las rutas que tendra la app

        usuarios: '/api/usuarios'
    }

    constructor(){

        this.app  = express();
        //el valor PORT puede ser nulo, asi que si eso pasa el puerto es el 8000
        this.port = process.env.PORT || '8000'; 

        this.middlewares();
  
        this.routes(); //Definir mis rutas
    }


    //TODO: Conectar base de datos


    middlewares(){

        //CORS  //Config por defecto
        this.app.use( cors() );

        //lectura del body //express parsea por mi el body
        this.app.use( express.json() )

        //Carpeta pueblica
        this.app.use( express.static('public') );
    }


    routes(){
        this.app.use( this.apiPaths.usuarios, userRoutes)
    }


    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en el puerto: ' + this.port);
        })
    }
}


export default Server;