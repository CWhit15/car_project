const express = require('express')
const bodyParser = require ('body-parser')
const db = require('./queries')

const app = express()

const port = 3000


app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
	
	next();

});

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
