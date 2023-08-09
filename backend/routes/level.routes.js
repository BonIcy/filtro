let express = require('express');
let router = express.Router();
let levelController = require('../controllers/level.controller');
let { validateJWT } = require('../middlewares/validate.jwt'); 
let { validateLevelPosting, validateLevelUpdate } = require('../middlewares/validateLevel'); 

router.post('/', validateJWT, validateLevelPosting, levelController.postLevel);
router.get('/', levelController.getAllLevels);

router.delete('/:id', validateJWT, levelController.deleteLevel);
router.put('/:id', validateJWT, validateLevelUpdate, levelController.updateLevel);

module.exports = router;
