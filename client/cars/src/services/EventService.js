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

    // let postURL = "http://localhost:3000/api/vehicles?"
    //     + "vin=" + vin
    //     + "&make=" + make
    //     + "&model=" + model
    //     + "&color=" + color
    //     + "&year=" + year
    
    // console.log(postURL)

    // axios
    //     .post(postURL)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })

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

// export default getAllVehicles
// module.exports.addNewVehicle = addNewVehicle;

export { getAllVehicles as getAllVehicles }
export { addNewVehicle as addNewVehicle }

