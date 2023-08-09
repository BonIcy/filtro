let { body, validationResult } = require('express-validator');

exports.validateCentroPosting = [
    body('nombre', 'El nombre del centro es obligatorio').notEmpty(),
    async (req, res, next) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if (req.user.rol !== 'gerenteRol') {
            return res.status(403).json({ message: 'Acceso no autorizado' });
        }

        next();
    }
];
