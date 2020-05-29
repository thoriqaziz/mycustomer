<template>
    <div>
        <ul class="list-group" id="list-customer">
            <div v-for="customer in customers" :key="customer.id">
                <router-link :to="'/customers/' + customer.id" class="d-flex border-bottom border-secondary p-2 text-decoration-none">
                    <li class="list-group-item border-0">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="btn rounded border text-white bg-primary align-center" style="height:40px; width:40px"><center>Ta</center></div>
                            </div>
                            <div class="col-md-9">
                                <label class="m-0">{{ customer.name }}</label><br>
                                <span class="text-muted small text-truncate">{{ customer.email }}</span>
                            </div>
                        </div>
                    </li>
                </router-link>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: "CustomersIndex",

    mounted() {
        axios.get('api/customers')
            .then(response => {
                this.customers = response.data.data;
            })
            .catch(error => {
                alert('Unable to fetch customers');
            })
    },

    data: function () {
        return {
            customers: null
        }
    }
}
</script>