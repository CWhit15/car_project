<template>
    <div class="container">
        

        <h3>Vehicles:</h3>
        <button v-on:click="AddNewCar" v-if="!showModalNewCar" class="btn btn-success btn-sm ">Add New</button>
        <NewCarForm v-if="showModalNewCar" :showModalNewCar=showModalNewCar v-on:clicked="onChildClick">
            <div slot="header">
                <h3>Add New Car</h3>
            </div>
            <div slot="body">

            </div>
        </NewCarForm>

        <UpdateCarForm v-if="showModalUpdateCar" :showModalUpdateCar=showModalUpdateCar v-on:clicked="onChildUpdateClick">
            <div slot="header">
                <h3>Update Car</h3>
            </div>
            <div slot="body">

            </div>
        </UpdateCarForm>


        <table class="table">
            <thead>
                <tr>
                    
                    <th scope="col">VIN</th>
                    <th scope="col">Make</th>
                    <th scope="col">Model</th>
                    <th scope="col">Color</th>
                    <th scope="col">Year</th>
                    <th scope="col"  v-if="!showModalUpdateCar" >Actions</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="vehicles in vehicles" v-bind:key="vehicles.id">
                    
                    <td>{{ vehicles.vin }}</td>
                    <td>{{ vehicles.make }}</td>
                    <td>{{ vehicles.model }}</td>
                    <td>{{ vehicles.color }}</td>
                    <td>{{ vehicles.year }}</td>
                    <td  v-if="!showModalUpdateCar" >
                        <div class="btn-group btn-group-sm" role="group">
                            <button v-on:click="UpdateExistingCar(vehicles.id)" v-if="!showModalUpdateCar" class="btn btn-secondary">Update</button>
                            <button v-on:click="DeleteCar(vehicles.id)" class="btn btn-danger">Delete</button>

                        </div>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import {getAllVehicles, deleteVehicle} from '../services/EventService.js';
    import NewCarForm from './NewCarForm.vue'
    import UpdateCarForm from './UpdateCarForm.vue'

    export default {
        name: 'Vehicles',
        components: {
            NewCarForm,
            UpdateCarForm,
        },
        data() {
            return {
                vehicles:null,
                showModalNewCar: false,
                showModalUpdateCar: false
            };
        },
        created() {
            getAllVehicles()
            .then(res => {
                
                this.vehicles = res.data
                
            })
            
        },
        methods: {
            AddNewCar() {
                this.showModalNewCar = true;
                
            },
            UpdateExistingCar(param) {
                console.log(param)
                this.showModalUpdateCar = true;
                
            },
            DeleteCar(param) {
                deleteVehicle(param)
                this.reset();
            },
            onChildClick () {
                this.showModalNewCar = false;
                this.reset()
            },
            onChildUpdateClick () {
                this.showModalUpdateCar = false;
                this.reset()
            },
            reset() {
                getAllVehicles()
                .then(res => {
                    this.vehicles = res.data
                })
                this.$forceUpdate();
            },
            
        }

    }

</script>


<style>
    h3 {
        margin-bottom: 5%
    }
</style>
