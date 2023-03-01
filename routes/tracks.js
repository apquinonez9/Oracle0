const express = require("express");
const router = express.Router();
const customHeader=require("../middleware/customHeader")
const {validatorcreateItems,validatorGetItem}=require("../validators/tracks")
const {getItems,getItem,createItems,updateItems,deleteItems} = require("../controllers/tracks");

/**
 * Lista los items
 * 
 */

router.get("/", getItems);

/**
 * obtener detalle de item
 * 
 */

router.get("/:id",validatorGetItem,getItem);

/**
 * crear un registro
 * 
 */

router.post("/",validatorcreateItems,createItems);

/**
 * actualizar un registro
 * 
 */
router.put("/:id",validatorGetItem,validatorcreateItems,updateItems);

/**
 * eliminar un registro
 * 
 */

router.delete("/:id",validatorGetItem,deleteItems);


module.exports = router;

