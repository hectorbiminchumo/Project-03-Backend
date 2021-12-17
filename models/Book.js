
// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA
const bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
    author: {
		type: String,
		required: true
	},
    description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	condition: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
    pages:{
        type: Number,
        required: true
    }
	
})

// 3. MODELO
const Book = mongoose.model("Book", bookSchema)

// 4. EXPORTACIÓN
module.exports = Book