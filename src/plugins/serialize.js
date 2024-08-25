export default {
    install(Vue) {
        function capitalize(s)
        {
            return s[0].toUpperCase() + s.slice(1);
        }
        
        Vue.prototype.$serializeArrayToQuery = function(params, type) {
            let query = params.map(function(el) {
                if (type === 'username') {
                    return type + '=' + capitalize(el);
                } else {
                    return type + '=' + el;
                }
            }).join('&');
            return '?' + query;
        }
    }
}