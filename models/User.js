// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMAS
const userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
		
	},
	lastName: {
        type: String,
		default: ""
	},
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
	city: {
		type: String,
		default: ""
	},
	country: {
		type: String,
		default: ""
	},
	phone: {
		type: Number,
		default: ""
	},
})

// 3. MODELOS
const User = mongoose.model("User", userSchema)

// 4. EXPORTACIÓN
module.exports = User