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


export default getAllVehicles

