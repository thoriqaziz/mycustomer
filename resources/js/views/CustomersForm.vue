<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group row">
            <label for="Name" class="col-md-1 col-form-label">Name</label>
            <div class="col-md-6">
                <input type="text" id="name" class="form-control" placeholder="Input name here" v-model="name">
            </div>
        </div>
        <div class="form-group row">
            <label for="Email" class="col-md-1 col-form-label">Email</label>
            <div class="col-md-6">
                <input type="email" id="email" class="form-control" placeholder="Input email here" v-model="email">
            </div>
        </div>
        <div class="form-group row">
            <label for="Telephone" class="col-md-1 col-form-label">Telephone</label>
            <div class="col-md-6">
                <input type="text" id="telephone" class="form-control" placeholder="Input telephone here" v-model="telephone">
            </div>
        </div>
        <div class="form-group row">
            <label for="Address" class="col-md-1 col-form-label">Address</label>
            <div class="col-md-6">
                <textarea id="address" cols="30" rows="4" class="form-control" placeholder="Input address here" v-model="address"></textarea>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-7">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "CustomersForm",

    data () {
        return {
            name: '',
            email: '',
            telephone: '',
            address: '',
        }
    },

    methods: {
        handleSubmit() {
            this.$emit('submitted', {
                name: this.name,
                email: this.email,
                telephone: this.telephone,
                address: this.address,            
            })
        }
    }
}
</script>