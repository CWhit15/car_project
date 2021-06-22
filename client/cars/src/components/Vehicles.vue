<template>
    <div class="container">
        

        <h3>vehicles:</h3>
        <button v-on:click="AddNewCar" v-if="!showModalNewCar" class="btn btn-success btn-sm ">Add New</button>
        <NewCarForm v-if="showModalNewCar" :showModalNewCar=showModalNewCar v-on:clicked="onChildClick">
            <div slot="header">
                <h3>Test modal</h3>
            </div>
            <div slot="body">
                <p>test paragraph for the modal</p>
            </div>
        </NewCarForm>

        <UpdateCarForm v-if="showModalUpdateCar" :showModalUpdateCar=showModalUpdateCar v-on:clicked="onChildUpdateClick">
            <div slot="header">
                <h3>Test update modal</h3>
            </div>
            <div slot="body">
                <p>test paragraph for the modal</p>
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
                            <button v-on:click="testUpdate(vehicles.id)" v-if="!showModalUpdateCar" class="btn btn-light">Update</button>
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
                console.log(res.data)
                this.vehicles = res.data
                
            })
            
        },
        methods: {
            AddNewCar() {
                console.log('test')
                this.showModalNewCar = true;
                
            },
            testUpdate(param) {
                console.log(param)
                this.showModalUpdateCar = true;
                
            },
            testDelete() {
                console.log('delete')
            },
            onChildClick () {
                this.showModalNewCar = false;
            },
            onChildUpdateClick () {
                this.showModalUpdateCar = false;
            }
        }

    }






</script>


<style>
    h3 {
        margin-bottom: 5%
    }
</style>
