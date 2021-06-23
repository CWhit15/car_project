<template>
    <div class="modal" v-if="showModalUpdateCar">
        <div v-if="showModalUpdateCar" class="modal-content">
            <div class="modal-header">
                <slot name="header"></slot>
                
            </div>

            <div class="modal-body">
                <slot name="body"></slot>
                <p>test paragraph for text within modal vue app</p>
            </div>
            <hr>
            <div>
                <button v-on:click="closeModal">Close</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'UpdateCarForm',
        data() {
            return {
                UpdateCarForm:null
            };
        },
        props: {
            showModalUpdateCar: Boolean
        },
        methods: {
            closeModal() {
                this.$emit('clicked');
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
