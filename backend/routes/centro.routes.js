let express = require('express');
let router = express.Router();
let centroController = require('../controllers/centro.controller');
let { validateJWT } = require('../middlewares/validate.jwt');
let { validateCentroPosting } = require('../middlewares/validateCentro');

router.post('/', validateJWT, validateCentroPosting, centroController.postCentro);
router.get('/', centroController.getAllCentros);
router.delete('/:id', validateJWT, centroController.deleteCentro);
router.put('/:id', validateJWT, centroController.updateCentro);

module.exports = router;
