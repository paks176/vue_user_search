import Vue from "vue";
import Vuex from "vuex";

// returns true if duplicates are exist else false
function checkDuplicates(newItem, allResults) {
    let result = false;
    if (allResults.length) {
        allResults.forEach(existingItem => {
            if (existingItem.id === newItem.id) {
                result = true
            } else {
                result = false;
            }
        })
    } else return result;
    return result;
}

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        errorsStack: [],
        allResults: [],
        selected: {},
        domain: 'https://jsonplaceholder.typicode.com/users',
    },
    actions: {
        startSearch(context, value) {
            let idRequests = [];
            value.forEach(item => {
                if (!isNaN(Number(item))) {
                    idRequests.push(item);
                    const index = value.indexOf(item);
                    if (index !== -1) {
                        value.splice(index, 1);
                    }
                }
            });

            if (idRequests.length) {
                const query = Vue.prototype.$serializeArrayToQuery(idRequests, 'id');
                fetch(this.state.domain + query, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data && data.length) {
                            context.commit('addResult', data)
                        }
                    }).catch(error => {
                    context.commit("pushNewToast", {
                        type: 'critical',
                        header: 'Ошибка получения ответа по параметру (id)',
                        text: String(error)
                    })
                });
            }

            const query = Vue.prototype.$serializeArrayToQuery(value, 'username');

            fetch(this.state.domain + query, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data && data.length) {
                        context.commit('addResult', data)
                    }
                }).catch(error => {
                context.commit('pushNewToast', {
                    type: 'critical',
                    header: 'Ошибка получения ответа по параметру (username)',
                    text: String(error)
                })
            });
        },
        addToSelected(context, id) {
            const thisItem = context.state.allResults.find(item => item.id === id);
            if (thisItem) {
                context.commit('addSelected', thisItem);
            }
        }
    },
    mutations: {
        pushNewToast(state, toast) {
            state.errorsStack.unshift(toast)
        },
        addResult(state, result) {
            result.forEach(item => {
                const check = checkDuplicates(item, state.allResults);
                if (!check) {
                    state.allResults.push(item);
                }
            })
        },
        clearResult(state) {
            state.allResults = [];
        },
        addSelected(state, item) {
            state.selected = item;
        },
        clearSelected(state) {
            state.selected = {};
        }
    },
    getters: {
        getErrorsStack(state) {
            return state.errorsStack;
        },
        getAllResults(state) {
            return state.allResults;
        },
        getSelected(state) {
            return state.selected;
        }
    }
});