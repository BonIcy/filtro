let { response } = require('express');
let Camper = require('../models/Camper'); 
let bcryptjs = require('bcryptjs');
let { generateJWT } = require('../middlewares/generateJwt');
let login = async (req, res = response) => {
    let { email, password } = req.body;
    try {
        let camper = await Camper.findOne({ email });
        
        if (!camper) {
            return res.status(400).json({ msg: "Camper incorrecto" });
        }
        
        if (!camper.estado) {
            return res.status(400).json({ msg: "Estado inactivo" });
        }
        
        let validPassword = bcryptjs.compareSync(password, camper.password);
        if (!validPassword) {
            return res.status(400).json({ msg: "Contraseña incorrecta" });
        }

        let token = await generateJWT(camper.id);

        res.json({
            camper,
            token
        });
        
    } catch (error) {
        console.log(error);
        return res.json({ msg: "error :p" });
    }
}

module.exports = {
    login
}
