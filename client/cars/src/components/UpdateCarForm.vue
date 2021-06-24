<template>
    <div class="modal" v-if="showModalUpdateCar">
        <div v-if="showModalUpdateCar" class="modal-content">
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
                                <td scope="col">Update VIN</td>
                                <td scope="col"><input type="text" v-model="UpdateVIN"></td>
                            </tr>
                            <tr>
                                <td scope="col">Update Make</td>
                                <td scope="col"><input type="text" v-model="UpdateMake"></td>
                            </tr>
                            <tr>
                                <td scope="col">Update Model</td>
                                <td scope="col"><input type="text" v-model="UpdateModel"></td>
                            </tr>
                            <tr>
                                <td scope="col">Update Color</td>
                                <td scope="col"><input type="text" v-model="UpdateColor"></td>
                            </tr>
                            <tr>
                                <td scope="col">Update Year</td>
                                <td scope="col"><input type="text" v-model="UpdateYear"></td>
                            </tr>
                        </tbody>
                    </table>

                </form>
            </div>
            <div>
                <button v-on:click="ResetForm">Reset</button>
                <button v-on:click="UpdateCar">Save</button>
                <button v-on:click="closeModal">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>

    import {getVehicleByID, updateVehicle} from '../services/EventService.js';

    export default {
        name: 'UpdateCarForm',
        data() {
            return {
                UpdateCarFormObject:null,
                UpdateVIN:null,
                UpdateMake:null,
                UpdateModel:null,
                UpdateColor:null,
                UpdateYear:null,

            };
        },
        props: {
            showModalUpdateCar: Boolean,
            carIDToPass: Number
            
        },
        created() {
            getVehicleByID(this.carIDToPass)
            .then(res => {
                console.log(res.data[0])
                this.UpdateCarFormObject = res.data[0]
                this.UpdateValues(res.data[0])
            })
            
            
            
        },
        methods: {
            closeModal() {
                this.$emit('clicked');
            },
            UpdateCar() {
                console.log('update car button clicked')
                console.log(this.carIDToPass)
                updateVehicle(this.carIDToPass, this.UpdateVIN, this.UpdateMake,this.UpdateModel, this.UpdateColor, this.UpdateYear)
                console.log('test')
                this.closeModal()
            },
            ResetForm() {
                getVehicleByID(this.carIDToPass)
                .then(res => {
                    
                    this.UpdateVIN = res.data[0].vin;
                    this.UpdateMake = res.data[0].make;
                    this.UpdateModel = res.data[0].model;
                    this.UpdateColor = res.data[0].color;
                    this.UpdateYear = res.data[0].year;
                    
                })
            },
            UpdateValues(resData) {
                console.log(resData.id)
                this.UpdateVIN = resData.vin
                this.UpdateMake = resData.make
                this.UpdateModel = resData.model
                this.UpdateColor = resData.color
                this.UpdateYear = resData.year
            }
        },
    }

</script>

<style>
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        max-width: 100%;
        height: 400px;
        max-height: 100%;
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }
</style>
