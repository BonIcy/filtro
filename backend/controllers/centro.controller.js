let Centro = require('../models/Centro');
let { validationResult } = require('express-validator');
let mongoose = require('mongoose');

exports.postCentro = async (req, res) => {
    let { nombre } = req.body;

    try {
        let nuevoCentro = new Centro({ nombre });
        await nuevoCentro.save();

        res.json(nuevoCentro);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el centro' });
    }
};

exports.getAllCentros = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 3;

        let totalCentros = await Centro.countDocuments();
        let totalPages = Math.ceil(totalCentros / limit);

        let centros = await Centro.find()
            .skip((page - 1) * limit)
            .limit(limit);

        res.json({
            total: totalCentros,
            totalPages,
            centros,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los centros' });
    }
};

exports.deleteCentro = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'ID no válido' });
        }
        
        let existingCentro = await Centro.findById(req.params.id);
        if (!existingCentro) {
            return res.status(404).json({ message: 'Centro no encontrado' });
        }

        await Centro.findByIdAndDelete(req.params.id);

        res.json({ message: 'Centro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el centro' });
    }
};

exports.updateCentro = async (req, res) => {
    let { nombre } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'ID no válido' });
        }

        let existingCentro = await Centro.findById(req.params.id);
        if (!existingCentro) {
            return res.status(404).json({ message: 'Centro no encontrado' });
        }

        let updatedCentro = await Centro.findByIdAndUpdate(
            req.params.id,
            { nombre },
            { new: true }
        );

        res.json(updatedCentro);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el centro' });
    }
};
