import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        errorsStack: [],
        usersResult: [],
        userNameResult: [],
        idResult: [],
        domain: 'https://jsonplaceholder.typicode.com/',
    },
    actions: {
        // startSearch(value) {
        //    
        // }
    },
    mutations: {
        pushNewToast(state, toast) {
            state.errorsStack.unshift(toast)
        },
    },
    getters: {
        getErrorsStack(state) {
            return state.errorsStack;
        },
        getAllResults(state) {
            return state.usersResult.concat(state.userNameResult, state.idResult);
        }
    }
});