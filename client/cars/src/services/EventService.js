import axios from 'axios'

const baseURL = 'http://localhost:3000'
const baseAPIURL = 'http://localhost:3000/api/vehicles/'


function isValid(a, b, c ,d ,e) {

    if (a.length > 30 || b.length > 30 || c.length > 30 || d.length > 30) {
        return false
    }

    if (!Number.isInteger(parseInt(e))) {
        return false
    }

    return true
}

async function getAllVehicles() {
    let getURL = baseURL + '/vehicles/'

    let res = await axios.get(getURL);

    //console.log(res);
    //console.log(res.data);
    return res;
}

async function addNewVehicle(vin, make, model, color,year) {
    console.log(vin + ' ' + make + ' ' + model + ' ' + color + ' '+ year)

    if (!isValid(vin, make, model, color, year)) {
        console.log('invalid data')
        return
    }


    let res = await axios
        .post(baseAPIURL, {
            vin: vin,
            make: make,
            model: model,
            color: color,
            year: year
        })
        .catch(error => {
            console.error(error)
        })

        console.log(res)
        
}

async function deleteVehicle(CarID) {
    console.log('deleting car with ID: ' + CarID)

    let deleteURL = baseAPIURL + CarID

    console.log(deleteURL)
    axios.delete(deleteURL)
    
}

async function getVehicleByID(CarID) {
    console.log('fetching vehicle with ID: ' + CarID)
    let getURL = baseAPIURL + CarID

    let res = await axios.get(getURL);
    // console.log('results from getByID')
    //console.log(res)
    return res

}

async function updateVehicle(CarID, vin, make, model, color, year) {
    console.log(CarID + ' ' + vin + ' ' + make + ' ' + model + ' ' + color + ' '+ year)

    if (!isValid(vin, make, model, color, year)) {
        console.log('invalid data')
        return
    }

    let putURL = baseAPIURL + CarID
    //console.log(putURL)

    let res = await axios
        .put(putURL, {
            vin: vin,
            make: make,
            model: model,
            color: color,
            year: year
        })
        .catch(error => {
            console.error(error)
        })

        console.log(res)
        console.log(res.statusText)
}


export { getAllVehicles as getAllVehicles }
export { addNewVehicle as addNewVehicle }
export { deleteVehicle as deleteVehicle }
export { getVehicleByID as getVehicleByID }
export { updateVehicle as updateVehicle }