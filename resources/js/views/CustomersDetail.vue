<template>
    <div v-if="!loading">
        <div class="row">
            <div class="col-md-4">
                <a href="#" class="btn btn-light" @click="$router.back()">Back</a>
            </div>
            <div class="col-md-2">
                <router-link :to="'/customers/'+ customer.customer_id + '/edit'" class="btn btn-outline-success">Edit</router-link>
                <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modal">Delete</button>

                <!-- MODAL -->
                <div class="modal fade" id="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Confirmation</h5>
                                <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure you want to delete this customer?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button class="btn btn-danger" @click="destroy">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-6 ml-2">
                <CustomerLogo :name="customer.name" />
                <h4 class="d-inline pl-2">{{ customer.name }}</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 ml-2">
                <p class="text-uppercase text-secondary font-weight-bold pt-4 mb-2">Email</p>
                <p class="text-info">{{ customer.email }}</p>
                <p class="text-uppercase text-secondary font-weight-bold pt-4 mb-2">Telephone</p>
                <p class="text-info">{{ customer.telephone }}</p>
                <p class="text-uppercase text-secondary font-weight-bold pt-4 mb-2">Address</p>
                <p class="text-info">{{ customer.address }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import CustomerLogo from '../components/CustomerLogo';

export default {
    name: "CustomersDetail",

    components: { CustomerLogo },

    mounted() {
        axios.get('/api/customers/' + this.$route.params.id)
            .then(response => {
                this.customer = response.data.data;
                this.loading = false;
            })
            .catch(error => {

            });
    },

    data: function() {
        return {
            customer: null,
            loading: true
        }
    },

    methods: {
        destroy: function () {
            axios.delete('/api/customers/' + this.$route.params.id)
                .then(response => {
                    $('.close').click();
                    this.$router.push('/customers');
                })
                .catch(error => {
                    alert('Error: cannot delete customer.');
                });
        }
    }
}
</script>