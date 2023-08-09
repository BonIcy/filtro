let express = require('express');
let router = express.Router();
let rutaController = require('../controllers/ruta.controller');
let { validateJWT } = require('../middlewares/validate.jwt');
let { validateRutaPosting, validateDeletePermissions, validateUpdatePermissions } = require('../middlewares/validateRutas');

router.post('/', validateRutaPosting, rutaController.postRuta);
router.get('/', rutaController.getAllRutas);
router.get('/:id', rutaController.getRuta);
router.put('/:id', validateJWT, validateUpdatePermissions, rutaController.updateRuta);
router.delete('/:id', validateJWT, validateDeletePermissions, rutaController.deleteRuta);

module.exports = router;
