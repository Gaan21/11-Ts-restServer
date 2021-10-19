import { Request, Response } from "express";


//Obtener todos los usuarios
export const getUsuarios = ( req: Request, res: Response ) =>{
    res.json({
        msg: 'getUsuarios'
    })
}

//Obtener un usuario
export const getUsuario = ( req: Request, res: Response ) =>{

    const { id } = req.params;

    res.json({
        msg: 'getUsuario',
        id
    })
}

//Crear usuario
export const postUsuario = ( req: Request, res: Response ) =>{

    const { body } = req;

    res.json({
        msg: 'postUsuario', 
        body
    })
}

//Actualizar usuario
export const putUsuario = ( req: Request, res: Response ) =>{

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putUsuario', 
        body,
        id
    })
}

//Eliminar usuario
export const deleteUsuario = ( req: Request, res: Response ) =>{

    const { id } = req.params;

    res.json({
        msg: 'deleteUsuario', 
        id
    })
}