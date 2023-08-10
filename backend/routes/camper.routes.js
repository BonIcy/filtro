let express = require('express');
let router = express.Router();
let camperController = require('../controllers/camper.controller');
let { validateJWT } = require('../middlewares/validate.jwt');
let { validateCamperPosting, validateDeletePermissions, validateUpdatePermissions } = require('../middlewares/validateCamper');

router.post('/', validateCamperPosting, camperController.postCamper);
router.get('/', camperController.getAllCampers);
router.get('/:id', validateCamperPosting, camperController.getCamper);
router.put('/:id', validateUpdatePermissions, camperController.updateCamper);
router.delete('/:id', validateJWT, validateDeletePermissions, camperController.deleteCamper);

module.exports = router;
