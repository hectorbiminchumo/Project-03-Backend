
const BookUsed = require("./../models/BookUsed")

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

	// CREAR UN LIBRO USADO EN BASE DE DATOS
	try {
		const newBookUsed = await BookUsed.create({
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
			msg: "Used Book created",
			data: newBookUsed		
		})

	} catch (error) {
		
		res.status(500).json({
			msg: "Creating used book error",
			error: error
		})

	}


}

exports.readAll = async (req, res) => {

	try {
		
		const booksUsed = await BookUsed.find({})

		res.json({
			msg: "Get used books successfully",
			data: booksUsed
		})


	} catch (error) {
		
		res.status(500).json({
	 		msg: "Getting used books error ",
			error: error
		})

	}

}

exports.readOne = async (req, res) => {

	const { id } = req.params

	try {
		//Se busca por ID y se muestra el libro usado
		const bookUsed = await BookUsed.findById(id)

		res.json({
			msg: "Get book successfully.",
			data: bookUsed
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
        //Se busca por ID y se actualiza el libro usado
		const updatedBookUsed = await BookUsed.findByIdAndUpdate(
			id, // ID DE LIBRO
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
			data: updatedBookUsed
		})

		
	} catch (error) {
		
		res.status(500).json({
			msg: "Updating used book error",
			error: error
		})

	}

}

exports.delete = async (req, res) => {

	const { id } = req.params

	try {
		//Se busca por ID y se elimina el libro usado
		const deletedBookUsed = await BookUsed.findByIdAndRemove({_id: id})

		res.json({
			msg: "Deleted used book successfully",
			data: deletedBookUsed
		})

	} catch (error) {
		res.status(500).json({
			msg: "Deleting used book error",
			error: error
		})
	}

}