const {matchedData} = require("express-validator");
const {tokenSign}=require("../utils/handleJwt")
const {handleHttpError} = require('../utils/handleError');
const {encrypt,compare}=require("../utils/handlePassword");
const {userModel}=require("../models");
/**
 * Este controlador es el encargado del registro de usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl= async (req,res)=>{
   try{
    req=matchedData(req);
    const password=await encrypt(req.password);
    const body={...req,password};
    const dataUser=await userModel.create(body);
    dataUser.set("password",undefined,{Strict:false});
    
    const data={
        token:await tokenSign(dataUser),
        user:dataUser,
    }
    
    res.send({data});
   }catch(e){
    handleHttpError(res,"ERROR_REGISTER_USER");
   }
}

/**
 * Este controladores es el encargado de logear a una persona
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl= async (req,res)=>{
try{
    req=matchedData(req)
    const user=await userModel.findOne({email:req.email})
    .select('password name role email');
    if(!user){
        handleHttpError(res,"USER_NOT_EXITSTS",404);
        return
    }

    const hashPassword=user.get('password');
    const check=await compare(req.password,hashPassword)
    if(!check){
        handleHttpError(res,"PASSWORD_INVALID",401);
        return
    }
user.set('password',undefined,{Strict:false})
    const data={
        token:await tokenSign(user),
        user
    }

    res.send({data})
}catch(e){
    console.log(e)
    handleHttpError(res,"ERROR_LOGIN_USER");
}

}

module.exports={registerCtrl,loginCtrl}