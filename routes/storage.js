const express = require("express");
const router = express.Router();
const uploadMiddleware=require("../utils/handleStorage")
const {getItems,getItem,createItems,deleteItems}=require("../controllers/storage")
const {validatorGetItem}=require('../validators/storage')

/**
 * lista de items
 */
router.get("/",getItems);
/**
 * Detalle de items
 */
router.get("/:id",validatorGetItem,getItem);
/**
 * Crear lista de items
 */
router.post("/",uploadMiddleware.single("myfile"),createItems);
/**
 * Eliminar item
 */
router.delete("/:id",validatorGetItem,deleteItems);

module.exports=router;