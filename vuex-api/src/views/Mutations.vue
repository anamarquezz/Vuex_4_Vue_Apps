<template>
  <div>
    <h1>Changing <code>count</code></h1>
    <div>Current value of count: {{$store.state.count}}</div>
   
    <button class="pure-button" @click="ADD_N(10)">
      Add 10
    </button>
  </div>
</template>
<script>
import {mapMutations} from "vuex"
export default{
  methods:{
    ...mapMutations(["ADD_N"])
  }
};
</script>
