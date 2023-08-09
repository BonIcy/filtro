let Level = require('../models/Level');

exports.getAllLevels = async (req, res) => {
    try {
        let levels = await Level.find();
        res.json(levels);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los niveles' });
    }
};

exports.getLevel = async (req, res) => {
    try {
        let level = await Level.findById(req.params.id);
        if (!level) {
            return res.status(404).json({ message: 'Nivel no encontrado' });
        }
        res.json(level);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el nivel' });
    }
};


exports.postLevel = async (req, res) => {
    let { nombre, ruta, duración } = req.body;

    try {
        let newLevel = new Level({
            nombre,
            ruta,
            duración
        });

        let savedLevel = await newLevel.save();
        res.json(savedLevel);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el nivel' });
    }
};

exports.updateLevel = async (req, res) => {
    let { nombre, ruta, duración } = req.body;

    try {
        let updatedLevel = await Level.findByIdAndUpdate(
            req.params.id,
            { nombre, ruta, duración },
            { new: true }
        );

        if (!updatedLevel) {
            return res.status(404).json({ message: 'Nivel no encontrado' });
        }

        res.json(updatedLevel);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el nivel' });
    }
};

exports.deleteLevel = async (req, res) => {
    try {
        let deletedLevel = await Level.findByIdAndRemove(req.params.id);
        if (!deletedLevel) {
            return res.status(404).json({ message: 'Nivel no encontrado' });
        }
        res.json({ message: 'Nivel eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el nivel' });
    }
};
exports.updateLevel = async (req, res) => {
    let { nombre, ruta, duración } = req.body;

    try {
        let updatedLevel = await Level.findByIdAndUpdate(
            req.params.id,
            { nombre, ruta, duración },
            { new: true }
        );

        res.json(updatedLevel);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el nivel' });
    }
};