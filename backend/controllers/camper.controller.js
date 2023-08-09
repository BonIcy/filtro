let Camper = require('../models/Camper');

//crear
exports.postCamper = async (req, res) => {
    try {
        let newCamper = new Camper(req.body);
        let savedCamper = await newCamper.save();
        res.status(201).json(savedCamper);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el camper' });
    }
};

exports.getAllCampers = async (req, res) => {
    try {
        let campers = await Camper.find({ estado: true });
        res.json(campers);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los campers' });
    }
};


// obtener por id
exports.getCamper = async (req, res) => {
    try {
        let camper = await Camper.findById(req.params.id,{ estado: true });
        if (!camper) {
            return res.status(404).json({ message: 'Camper no encontrado' });
        }
        res.json(camper);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el camper' });
    }
};

//actualizar
exports.updateCamper = async (req, res) => {
    try {
        let updatedCamper = await Camper.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCamper) {
            return res.status(404).json({ message: 'camper no encontrado' });
        }
        res.json(updatedCamper);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el camper' });
    }
};

// eliminar
exports.deleteCamper = async (req, res) => {
    try {
        let deletedCamper = await Camper.findByIdAndUpdate(req.params.id, { estado: false }, { new: true });
        if (!deletedCamper) {
            return res.status(404).json({ message: 'Camper no encontrado' });
        }
        res.json({ message: 'Camper borrado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al borrar el amper' });
    }
};
