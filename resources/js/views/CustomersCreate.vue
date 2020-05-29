<template>
    <div class="ml-2">
        <CustomersForm @submitted="create" :errors="errors"></CustomersForm>
    </div>
</template>

<script>
import CustomersForm from './CustomersForm.vue'
export default {
    name: "CustomersCreate",

    components: { CustomersForm },

    data: function() {
        return{
            errors: null
        }
    },

    methods: {
        create (data) {
            axios.post('/api/customers', data)
                .then(result => {
                    this.$router.push(result.data.data.url);
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                })
        }
    }
}
</script>