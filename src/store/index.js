import Vue from "vue";
import Vuex from "vuex";

// returns true if duplicates are exist else false
function checkDuplicates(newItem, allResults) {
    let result = false;
    if (allResults.length) {
        // я знаю, что forEach это медленный метод для перебора большого массива, по хорошему нужно преобразовывать массив в объект и обращаться по ключу. 
        // Пробовал сделать это на weakMap, но не сработало, глубоко объекты он не сравнивал. Для нормального решения требуется больше времени.
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
             return new Promise((resolve) => {
                 const requests = [];
                 /* eslint-disable no-debugger */
                 let idRequests = [];
                 const copyValues = [...value];
                 copyValues.forEach(item => {
                     //debugger
                     if (!isNaN(Number(item))) {
                         idRequests.push(item);
                         //debugger
                         const index = value.indexOf(item);
                         //debugger
                         if (index !== -1) {
                             value.splice(index, 1);
                         }
                     }
                 });
                 //bret 4 5
                 /* eslint-disable no-debugger */

                 if (idRequests.length) {
                     const query = Vue.prototype.$serializeArrayToQuery(idRequests, 'id');
                     const idRequest = fetch(this.state.domain + query, {
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
                     requests.push(idRequest);
                 }

                 if (value.length) {
                     const query = Vue.prototype.$serializeArrayToQuery(value, 'username');

                     const nameRequest = fetch(this.state.domain + query, {
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

                     requests.push(nameRequest);
                 }

                 if (requests.length) {
                     Promise.allSettled(requests).then(() => {
                         resolve();
                     })
                 } else resolve();
             })
            
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