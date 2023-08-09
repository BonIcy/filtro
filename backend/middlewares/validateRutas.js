let { body, validationResult } = require('express-validator');

exports.validateRutaPosting = [
    body('nombre').notEmpty().withMessage('El nombre de la ruta es obligatorio'),
    (req, res, next) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }
];

exports.validateDeletePermissions = (req, res, next) => {
    if (req.user.rol === 'gerenteRol') {
        next();
    } else {
        res.status(403).json({ message: 'Acceso no autorizado' });
    }
};

exports.validateUpdatePermissions = (req, res, next) => {
    if (req.user.rol === 'trainerRol') {
        next();
    } else {
        res.status(403).json({ message: 'Acceso no autorizado' });
    }
};
