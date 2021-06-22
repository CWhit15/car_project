<template>
    <div class="container">
    <h3>vehicles:</h3>
    <button v-on:click="testFunction" class="btn btn-success btn-sm ">Add New</button>
    <table class="table">
        <thead>
            <tr>
                
                <th scope="col">VIN</th>
                <th scope="col">Make</th>
                <th scope="col">Model</th>
                <th scope="col">Color</th>
                <th scope="col">Year</th>
                <th scope="col">Actions</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="vehicles in vehicles" v-bind:key="vehicles.id">
                
                <td>{{ vehicles.vin }}</td>
                <td>{{ vehicles.make }}</td>
                <td>{{ vehicles.model }}</td>
                <td>{{ vehicles.color }}</td>
                <td>{{ vehicles.year }}</td>
                <td>
                    <div class="btn-group btn-group-sm" role="group">
                        <button v-on:click="testUpdate(vehicles.id)" class="btn btn-light">Update</button>
                        <button v-on:click="testDelete" class="btn btn-danger">Delete</button>

                    </div>
                </td>

            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>

    import getAllVehicles from '../services/EventService.js';
    

    export default {
        name: 'Vehicles',
        data() {
            return {
                vehicles:null,
            };
        },
        created() {
            getAllVehicles()
            .then(res => {
                console.log(res.data)
                this.vehicles = res.data
                
            })
            
        },
        methods: {
            testFunction() {
                console.log('test')
                
            },
            testUpdate(param) {
                console.log(param)
                console.log(this.vehicles)
            },
            testDelete() {
                console.log('delete')
            },
        }

    }






</script>


<style>
    h3 {
        margin-bottom: 5%
    }
</style>
