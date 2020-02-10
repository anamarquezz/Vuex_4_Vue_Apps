<template>
    <div>
        <h3> Add Item</h3>       
        <table class="pure-table">
            <thead>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </thead>
            <tbody>
                <tr v-for="item in $store.state.shoppingList" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.quantity }}</td>
                </tr>
            </tbody>
        </table>
        <h3>Shopping List</h3>
    </div>
</template>
<script>
    const INITIAL_ITEM = {
        name: "",
        price: null,
        quantity: 1
    }
    export default {
        data() {
            return {
                newItem: Object.assign({}, INITIAL_ITEM)
            }
        },
        methods: {

        }
    }
</script>