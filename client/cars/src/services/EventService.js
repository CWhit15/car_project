import axios from 'axios'

// export default {
//     name: 'Vehicles',
//     data() {
//         return {
//             vehicles: null,
//         };
//     },
//     created: function() {
//         axios
//             .get('http://localhost:3000/vehicles/')
//             .then(res => {
//                 this.vehicles = res.data;
//             })
//     }
// }

// export default {
//     async getAllVehicles() {
//         let res = await axios.get("http://localhost:3000/vehicles");

//         return res.data;
//     }
// }

async function getAllVehicles() {
    let res = await axios.get("http://localhost:3000/vehicles/");

    //console.log(res);
    //console.log(res.data);
    return res;
}

async function addNewVehicle(vin, make, model, color,year) {
    console.log(vin + ' ' + make + ' ' + model + ' ' + color + ' '+ year)


    let res = await axios
        .post('http://localhost:3000/api/vehicles', {
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

    let deleteURL = 'http://localhost:3000/api/vehicles/' + CarID

    console.log(deleteURL)
    axios.delete(deleteURL)
    
}


export { getAllVehicles as getAllVehicles }
export { addNewVehicle as addNewVehicle }
export { deleteVehicle as deleteVehicle }
