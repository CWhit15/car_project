<template>
    <div class="modal" v-if="showModalNewCar">
        <div v-if="showModalNewCar" class="modal-content">
            <div class="modal-header">
                <slot name="header"></slot>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
                <form id="NewCarInfo">
                    <table class="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td scope="col">New VIN</td>
                                <td scope="col"><input type="text" v-model="NewVIN"></td>
                            </tr>
                            <tr>
                                <td scope="col">New Make</td>
                                <td scope="col"><input type="text" v-model="NewMake"></td>
                            </tr>
                            <tr>
                                <td scope="col">New Model</td>
                                <td scope="col"><input type="text" v-model="NewModel"></td>
                            </tr>
                            <tr>
                                <td scope="col">New Color</td>
                                <td scope="col"><input type="text" v-model="NewColor"></td>
                            </tr>
                            <tr>
                                <td scope="col">New Year</td>
                                <td scope="col"><input type="text" v-model="NewYear"></td>
                            </tr>
                        </tbody>
                    </table>

                </form>
            </div>
            <div>
                <button v-on:click="SaveCar">Save</button>
                <button v-on:click="closeModal">Close</button>
            </div>
        </div>
    </div>
</template>

<script>

    import {addNewVehicle} from '../services/EventService.js';

    export default {
        name: 'NewCarForm',
        data() {
            return {
                NewCarForm:null,
                NewVIN: null,
                NewMake: null,
                NewModel: null,
                NewColor: null,
                NewYear: null,
            };
        },
        props: {
            showModalNewCar: Boolean
        },
        methods: {
            closeModal() {
                this.$emit('clicked');
            },

            SaveCar() {
                console.log(this.NewVIN)
                console.log(this.NewMake)
                console.log(this.NewModel)
                console.log(this.NewColor)
                console.log(this.NewYear)
                addNewVehicle(this.NewVIN, this.NewMake,this.NewModel, this.NewColor, this.NewYear)
            },
        },
    }

</script>

<style>
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        max-width: 100%;
        height: 500px;
        max-height: 100%;
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }
</style>
