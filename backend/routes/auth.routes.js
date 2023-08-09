let { Router } = require('express');
let { check } = require('express-validator');
let { login } = require('../controllers/auth.controller');
let { validateCamperPosting } = require('../middlewares/validateCamper'); 

let router = Router();

router.post(
    '/login',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        validateCamperPosting
    ],
    login
);

module.exports = router;
