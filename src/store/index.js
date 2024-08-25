import Vue from "vue";
import Vuex from "vuex";


// returns cut array if duplicates are exist
/* eslint-disable no-debugger */
function checkDuplicates(stateTarget, payload) {
    if (stateTarget.length) {
        let processedPayload = [];
        payload.forEach(item => {
            const double = stateTarget.find(item => item.id === stateTarget.id);
            if (!double) {
                processedPayload.push(item);
            }
        })
        return processedPayload;
    } else return payload;
}
/* eslint-disable no-debugger */

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        errorsStack: [],
        userNameResult: [],
        IDResult: [],
        sumResults: [],
        domain: 'https://jsonplaceholder.typicode.com/users',
    },
    actions: {
        startSearch(context, value) {
            const requests = [];
            
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
                const fetchIDs = fetch(this.state.domain + query, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data && data.length) {
                            context.commit('setIDResult', data)
                        }
                    }).catch(error => {
                        context.commit("pushNewToast", {
                            type: 'critical',
                            header: 'Ошибка получения ответа по параметру (id)',
                            text: String(error)
                        })
                    });
                
                requests.push(fetchIDs);
            }
            
            const query = Vue.prototype.$serializeArrayToQuery(value, 'username');
            console.log(query);
            const fetchUserNames = fetch(this.state.domain + query, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data && data.length) {
                        context.commit('setUserNameResult', data)
                    }
                }).catch(error => {
                    context.commit('pushNewToast', {
                        type: 'critical',
                        header: 'Ошибка получения ответа по параметру (username)',
                        text: String(error)
                    })
                });

            requests.push(fetchUserNames);
            
            Promise.allSettled(requests).then(() => {
                 context.commit('concatAllResults');
            })
        }
    },
    mutations: {
        pushNewToast(state, toast) {
            state.errorsStack.unshift(toast)
        },
        setIDResult(state, result) {
            const processedPayload = checkDuplicates(state.IDResult, result)
            state.IDResult = state.IDResult.concat(processedPayload);
        },
        setUserNameResult(state, result) {
            const processedPayload = checkDuplicates(state.userNameResult, result)
            state.userNameResult = state.userNameResult.concat(processedPayload);
        },
        concatAllResults(state) {
            const processedPayload = checkDuplicates(state.IDResult, state.userNameResult)
            state.sumResults = state.sumResults.concat(processedPayload);
        }
    },
    getters: {
        getErrorsStack(state) {
            return state.errorsStack;
        },
        getAllResults(state) {
            return state.sumResults;
        }
    }
});