let { Router } = require('express');
let { check } = require('express-validator');
let { uploadFile } = require('../controllers/upload.controller');

let router = Router();
router.post( '/', uploadFile );
module.exports = router;