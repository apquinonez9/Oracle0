const express = require("express");
const {registerCtrl,loginCtrl} = require("../controllers/auth");

const router = express.Router();
const {validatorRegister,validatorLogin}=require("../validators/auth")

/**
 * crear un registro
 * login y register
 */

router.post("/register",validatorRegister,registerCtrl);


router.post("/login",validatorLogin,loginCtrl);



module.exports = router;

 //findOne modelo de busqueda/
