let mongoose = require('mongoose');
let Ruta = require('../models/Ruta');

exports.postRuta = async (req, res) => {
    let { nombre, centro } = req.body;

    try {
        let ruta = new Ruta({
            nombre,
            centro
        });

        let newRuta = await ruta.save();

        res.status(201).json(newRuta);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la ruta' });
    }
};

exports.getAllRutas = async (req, res) => {
    try {
        let rutas = await Ruta.find().populate('centro', 'nombre'); 
        res.json(rutas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las rutas' });
    }
};

exports.getRuta = async (req, res) => {
    try {
        let ruta = await Ruta.findById(req.params.id).populate('centro', 'nombre'); 

        if (!ruta) {
            return res.status(404).json({ message: 'Ruta no encontrada' });
        }

        res.json(ruta);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la ruta' });
    }
};

exports.updateRuta = async (req, res) => {
    let { nombre, centro } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'ID no válido' });
        }

        let existingRuta = await Ruta.findById(req.params.id);
        if (!existingRuta) {
            return res.status(404).json({ message: 'Ruta no encontrada' });
        }

        let updatedRuta = await Ruta.findByIdAndUpdate(
            req.params.id,
            { nombre, centro },
            { new: true }
        );

        res.json(updatedRuta);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la ruta' });
    }
};

exports.deleteRuta = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'ID no válido' });
        }

        let deletedRuta = await Ruta.findByIdAndRemove(req.params.id);
        if (!deletedRuta) {
            return res.status(404).json({ message: 'Ruta no encontrada' });
        }

        res.json({ message: 'Ruta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la ruta' });
    }
};