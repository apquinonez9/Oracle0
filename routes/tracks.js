const express = require("express");
const router = express.Router();
const authMiddleware=require("../middleware/session")
const checkRol=require("../middleware/rol")
const {validatorcreateItems,validatorGetItem}=require("../validators/tracks")
const {getItems,getItem,createItems,updateItems,deleteItems} = require("../controllers/tracks");

/**
 * Lista los items
 * 
 */

router.get("/",authMiddleware,getItems);

/**
 * obtener detalle de item
 * 
 */

router.get("/:id",authMiddleware,validatorGetItem,getItem);

/**
 * crear un registro
 * 
 */

router.post("/",authMiddleware,checkRol(["admin"]),validatorcreateItems,createItems);

/**
 * actualizar un registro
 * 
 */
router.put("/:id",authMiddleware,validatorGetItem,validatorcreateItems,updateItems);

/**
 * eliminar un registro
 * 
 */

router.delete("/:id",authMiddleware,validatorGetItem,deleteItems);


module.exports = router;

