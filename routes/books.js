// ./server/routes/guitars.js

// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()

const bookController	= require("./../controllers/bookController")

// 2. RUTEO (ROUTER)

// CREAR LIBRO
router.post("/create", bookController.create)

// LEER LIBROS
router.get("/readall", bookController.readAll)

// LEER UNA LIBRO
router.get("/readone/:id", bookController.readOne)

// ACTUALIZAR UNA LIBRO
router.put("/edit/:id", bookController.edit)

// BORRAR UNA LIBRO
router.delete("/delete/:id", bookController.delete)


// 3. EXPORTACIONES
module.exports = router