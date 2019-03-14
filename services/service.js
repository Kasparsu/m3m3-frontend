export default class Service {
    constructor(api){
        this.api = api;
        this.prefix = '';
    }

    getUrl(url){
        return 'api/' + this.prefix + ((url) ? '/' + url : '');
    }

    get(url, params){
        arguments[0] = this.getUrl(url);
        return this.api.$get(...arguments)
    }
    post(url, data, params){
        arguments[0] = this.getUrl(url);
        return this.api.$post(...arguments)
    }
    patch(url, data, params){
        arguments[0] = this.getUrl(url);
        return this.api.$patch(...arguments)
    }
    put(url, data, params){
        arguments[0] = this.getUrl(url);
        return this.api.$put(...arguments)
    }
    delete(url, params){
        arguments[0] = this.getUrl(url);
        return this.api.$delete(...arguments)
    }

    list(page=1) {
        return this.get('', {
            params: {
                page: page
            }
        })
    }
}