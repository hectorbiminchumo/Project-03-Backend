
const Book = require("./../models/Book")

exports.create = async (req, res) => {

	// DEL FORMULARIO, CREAMOS VARIABLES Y ASIGNAMOS VALORES.
		const { 
			title,
			author,
			description,
            price,
            condition,
			image,
			pages
		 } = req.body

	// CREAR UN libro EN BASE DE DATOS
	try {
		const newBook = await Book.create({
			title,
			author,
			description,
            price,
            condition,
			image,
			pages
		})

		// DEVOLVER UNA RESPUESTA EN UN FORMATO JSON
		res.json({
			msg: "Book created",
			data: newBook		
		})

	} catch (error) {
		
		res.status(500).json({
			msg: "Creating book error",
			error: error
		})

	}


}

exports.readAll = async (req, res) => {

	try {
		
		const books = await Book.find({})

		res.json({
			msg: "Get books successfully",
			data: books
		})


	} catch (error) {
		
		res.status(500).json({
	 		msg: "Getting books error ",
			error: error
		})

	}

}

exports.readOne = async (req, res) => {

	const { id } = req.params

	try {
		
		const book = await Book.findById(id)

		res.json({
			msg: "Get book successfully.",
			data: book
		})

	} catch (error) {
		res.status(500).json({
			msg: "Getting information error",
			error: error
		})
	}


}

exports.edit = async (req, res) => {
	
	const { id } = req.params

	const { 
        title,
        author,
        description,
        price,
        condition,
        image,
        pages
	} = req.body


	try {
		const updatedBook = await Book.findByIdAndUpdate(
			id, // ID DE GUITARRA
			{
                title,
                author,
                description,
                price,
                condition,
                image,
                pages // PROPIEDADES A CAMBIAR
			}, 
			{new: true}
		)

		res.json({
			msg: "Updated book successfully",
			data: updatedBook
		})

		
	} catch (error) {
		
		res.status(500).json({
			msg: "Updating book error",
			error: error
		})

	}

}

exports.delete = async (req, res) => {

	const { id } = req.params

	try {
		
		const deletedBook = await Book.findByIdAndRemove({_id: id})

		res.json({
			msg: "Deleted book successfully",
			data: deletedBook
		})

	} catch (error) {
		res.status(500).json({
			msg: "Deleting book error",
			error: error
		})
	}

}