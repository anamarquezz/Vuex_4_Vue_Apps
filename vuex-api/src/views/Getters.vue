<template>
  <div>
    <h1>Getters</h1>

    <div>Count is {{ $store.state.count }}</div>
    <div>2x count is {{ $store.getters.doubledCount}}</div>
     <div>Count + 10 is{{ $store.getters.countPlusM(10)}}</div>

    <button class="pure-button" 
      @click="$store.dispatch('addToCount',1)">
      Increment
    </button>
  </div>
</template>