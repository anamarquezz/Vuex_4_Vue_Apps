<template>
    <div>
        <h3> Add Item</h3>
        <form action="" class="pure-form pure-form-aligned">
            <fieldset>
                <div class="pure-control-group">
                    <label for="name">Item Name</label>
                    <input for="text" v-model="newItem.name" id="name" />
                </div>
                <div class="pure-control-group">
                    <label for="price">Price</label>
                    <input for="number" v-model="newItem.price" id="price" step="0.01" />
                </div>
                <div class="pure-control-group">
                    <label for="quantity">Quantity</label>
                    <input type="number" v-model="newItem.quantity" id="quantity" />
                </div>
                <div class="pure-controls">
                      <button type="button" class="pure-button pure-button-primary"
                        :disabled="!newItem.name || !newItem.price || !newItem.quantity" @click="submitForm">
                        Add Item
                    </button>
                </div>

            </fieldset>
        </form>
        <table class="pure-table">
            <thead>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="item in $store.state.shoppingList" :key="item.id">
                    <td>{{ item.name }}
                    </td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.name }}                 
                    <td>
                        <button class="pure-button" @click="startEdit(item)">
                            <i class="fa fa-pencil-alt"></i>
                        </button> </td>
                    <td><button @click="$store.commit('REMOVE_ITEM_FROM_LIST',item) " class="pure-button"><i
                                class="fas fa-trash-alt"></i></button></td>
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
            submitForm() {
                this.$store.commit('ADD_ITEM_TO_LIST', this.newItem);
                this.newItem = Object.assign({}, INITIAL_ITEM);
            },
            startEdit(item) {
                const newName = prompt(`What would you like to rename "${item.name}) to?`);

                if (newName) {
                    this.$store.commit('EDIT_ITEM_NAME', {
                        item,
                        newName
                    });
                }
            }
        }
    }
</script>