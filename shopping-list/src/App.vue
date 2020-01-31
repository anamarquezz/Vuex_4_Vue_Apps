<template>
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <h1>Shopping List</h1>
      </div>
      <div class="content">
          <ShoppingList></ShoppingList>
      </div>
    </div>
  </div>
</template>
<script>
import ShoppingList from './views/ShoppingList'
export default {
  components:{
    ShoppingList
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.wrapper {
    margin: 10px;
  }
</style>
