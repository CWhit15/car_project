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
                <button v-on:click="UpdateCar">Save</button>
                <button v-on:click="closeModal">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'UpdateCarForm',
        data() {
            return {
                UpdateCarForm:null,
                UpdateVIN:null,
                UpdateMake:null,
                UpdateModel:null,
                UpdateColor:null,
                UpdateYear:null,
            };
        },
        props: {
            showModalUpdateCar: Boolean
        },
        methods: {
            closeModal() {
                this.$emit('clicked');
            },
            UpdateCar() {
                console.log('update car button clicked')
                
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
