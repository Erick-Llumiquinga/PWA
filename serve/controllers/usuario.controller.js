const Usuario = require('../models/usuario');

let getAll = async (req, res) => {
    try {
       let data = await Usuario.findAll()
       return res.status(200).json(
           {
            status: true,
            data,
            msg: ''
           }
       );
    } catch (error) {
       return res.status(400).json({
           status: false,
           error,
           msg: 'No se pudo crear',
       })
    }
}

let create = async (req, res) => {
    let usuario = req.body
    let imagePath = req.file.path
    usuario.image = imagePath
    try {
        let data = await Usuario.create(usuario)
        return res.status(200).json(
            {
             status: true,
             data,
             msg: ''
            }
        );
        
    } catch (error) {
        return res.status(400).json({
            status: false,
           error,
           msg: 'No se pudo crear',
        })
    }
 }

 module.exports = {
    getAll,
    create
}