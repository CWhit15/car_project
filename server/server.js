const express = require('express')
const bodyParser = require ('body-parser')
const db = require('./queries')

const app = express()

const port = 3000


app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)


app.get('/', (request, response) => {
	response.json({ info: 'Node.js, Express, and PostgreSQL API' })
})



app.get('/vehicles', db.getVehicles)
app.get('/api/vehicles/:id', db.getVehicleByID)
app.post('/api/vehicles', db.createVehicle)
app.put('/api/vehicles/:id', db.updateVehicle)
app.delete('/api/vehicles/:id', db.deleteVehicle)



app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})
