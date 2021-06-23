const Pool = require('pg').Pool


var env = process.env.NODE_ENV || 'test';
var config = require('./config')[env];


const pool = new Pool({
	user: config.user,
	host: config.host,
	database: config.database,
	password: config.password,
	port: config.port
})

const getVehicles = (request, response) => {
	console.log(request.url)

	pool.query('SELECT * FROM vehicles ORDER BY ID', (error, results) => {
		if (error) {
			throw error
		}

		response.status(200).json(results.rows)
	})
}


const getVehicleByID = (request, response) => {
	const id = parseInt(request.params.id)

	console.log(request.url)

	pool.query('SELECT * FROM vehicles WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error
		}

		response.status(200).json(results.rows)
	})
}


const createVehicle = (request, response) => {
	const { vin, make, model, color, year } = request.body

	console.log(request.url)
	console.log(request.body)

	pool.query('INSERT INTO vehicles (vin, make, model, color, year) VALUES ($1, $2, $3, $4, $5)', [vin, make, model, color, year], (error, results) => {
		if (error) {
			throw error
		}

		response.status(201).send(`vehicle added with ID: ${results.insertId}`)
	})
}


const updateVehicle = (request, response) => {
	const id = parseInt(request.params.id)
	const { vin, make, model, color, year } = request.body

	console.log(request.url)
	console.log(request.body)

	pool.query(
		'UPDATE vehicles SET vin=$1, make=$2, model=$3, color=$4, year=$5 WHERE id=$6',
		[vin, make, model, color, year, id],
		(error, results) => {
			if (error) {
				throw error
			}

			response.status(200).send(`vehicle modified with ID: ${id}`)
		}
	)
}


const deleteVehicle = (request, response) => {
	const id = parseInt(request.params.id)

	console.log(request.url)
	console.log(request.params)

	pool.query('DELETE FROM vehicles WHERE id= $1', [id], (error, results) => {
		if (error) {
			throw error
		}

		response.status(200).send(`User deleted with ID: ${id}`)
	})
}


module.exports = {
	getVehicles,
	getVehicleByID,
	createVehicle,
	updateVehicle,
	deleteVehicle
}