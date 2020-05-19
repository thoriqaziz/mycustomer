<template>
    <div class="ml-2">
        <CustomersForm @submitted="create"></CustomersForm>
    </div>
</template>

<script>
import CustomersForm from './CustomersForm.vue'
export default {
    name: "CustomersCreate",

    components: { CustomersForm },

    methods: {
        create (data) {
            axios.post('/api/customers', data)
                .then(result => {

                })
                .catch(response => {
                    
                })
        }
    }
}
</script>