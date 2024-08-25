import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    actions: {
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
    }
});