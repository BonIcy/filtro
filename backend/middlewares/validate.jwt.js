let jwt = require('jsonwebtoken');
let Camper = require('../models/Camper'); 
let validateJWT = async (req, res, next) => {
    let token = req.header('x-api-token-jwt');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }
    try {
        let { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);

        let camper = await Camper.findById(uid); 
        if (!camper) {
            return res.status(401).json({
                msg: 'Token no válido - Camper no existe enDB'
            });
        }
        if (!camper.estado) {
            return res.status(401).json({
                msg: 'Token no válido - Camper con estado: false'
            });
        }
        req.camper = camper; 
        console.log("req camper en validate:", req.camper);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        });
    }
};
module.exports = {
    validateJWT
};
