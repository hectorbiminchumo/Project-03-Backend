
// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()

const bookUsedController	= require("./../controllers/bookUsedController")

// 2. RUTEO (ROUTER)

// CREAR LIBRO
router.post("/create", bookUsedController.create)

// LEER LIBROS
router.get("/readall", bookUsedController.readAll)

// LEER UNA LIBRO
router.get("/readone/:id", bookUsedController.readOne)

// ACTUALIZAR UNA LIBRO
router.put("/edit/:id", bookUsedController.edit)

// BORRAR UNA LIBRO
router.delete("/delete/:id", bookUsedController.delete)


// 3. EXPORTACIONES
module.exports = router