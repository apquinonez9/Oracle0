const bcrypt = require("bcryptjs");
/**
 * Contraseña sin encriptar:
 * ejm:ifyou197-hola.01-
 * @param {*} passwordPlain 
 *  
 */
const encrypt=async(passwordPlain)=>{
    const hash=await bcrypt.hash(passwordPlain,10); 
    //obtenemos una version encriptada de nuestra contraseña
    return hash;
};
/**
 * Pasar contraseña sin encriptar y pasar contraseña encriptadad
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 * 
 */
const compare=async(passwordPlain,hashPassword)=>{
    return await bcrypt.compare(passwordPlain,hashPassword)
};
module.exports = { encrypt,compare };
