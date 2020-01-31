import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    count: 1,
    trivia:""
  },  
  mutations:{  
    ADD_N(state,n){
      state.count += n;
    },
    SET_TRIVIA(state, trivia){
      state.trivia = trivia;
    }
  },  
  actions:{
    addToCount({commit},n){
      commit("SET_TRIVIA","");
      commit("ADD_N",n);
    },
    updateTrivia({commit,state}){
      fetch(`http://numbersapi.com/${state.count}`)
      .then(res => res.text())
      .then(trivia => commit('SET_TRIVIA',trivia))
    }
  }


});
/*
   > They are synchronous and simple changes made to a vuex store
   > Any change to the store must happen within mutations
   > forcing all changes to occur through a mutation makes it so that the
        state of the application can be defined as the initial state plus each mutation
   */


     /* 
  > Are Aritrary functions, 
  > They cannot directly mutate state like mutation can 
  > They are asynchronous
  >
  */