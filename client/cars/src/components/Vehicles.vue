<template>
    <div class="container">
    <h3>vehicles:</h3>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">VIN</th>
                <th scope="col">Make</th>
                <th scope="col">Model</th>
                <th scope="col">Color</th>
                <th scope="col">Year</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="vehicles in vehicles" v-bind:key="vehicles.id">
                <th scope="row">{{ vehicles.id }}</th>
                <td>{{ vehicles.vin }}</td>
                <td>{{ vehicles.make }}</td>
                <td>{{ vehicles.model }}</td>
                <td>{{ vehicles.color }}</td>
                <td>{{ vehicles.year }}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Vehicles',
        data() {
            return {
                vehicles: null,
            };
        },
        created: function() {
            axios
                .get('http://localhost:3000/vehicles/')
                .then(res => {
                    this.vehicles = res.data;
                })
        }
    }
</script>


<style>
    h3 {
        margin-bottom: 5%
    }
</style>
