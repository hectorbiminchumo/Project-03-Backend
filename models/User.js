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
		required:true,
		default: ""
	},
    email: {
        type: String,
        required: true,
		unique: true
    },
    password: {
        type: String,
        required: true
    },
	city: {
		type: String,
		required: true,
		default: ""
	},
	country: {
		type: String,
		required: true,
		default: ""
	},
	phone: {
		type: Number,
		unique: true,
		required: true,
		
		default: ""
	},
})

// 3. MODELOS
const User = mongoose.model("User", userSchema)

// 4. EXPORTACIÓN
module.exports = User