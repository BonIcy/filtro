let express = require('express');
let router = express.Router();
let camperController = require('../controllers/camper.controller');
let { validateJWT } = require('../middlewares/validate.jwt');
let { validateCamperPosting, validateDeletePermissions, validateUpdatePermissions, checkTrainerRole } = require('../middlewares/validateCamper');

router.post('/', checkTrainerRole, validateCamperPosting, camperController.postCamper);
router.get('/', camperController.getAllCampers);
router.get('/:id', checkTrainerRole, validateCamperPosting, camperController.getCamper);
router.put('/:id', checkTrainerRole, validateUpdatePermissions, camperController.updateCamper);
router.delete('/:id', validateJWT, validateDeletePermissions, camperController.deleteCamper);

module.exports = router;
