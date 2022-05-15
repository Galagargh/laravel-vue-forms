require('./bootstrap');

import { createApp } from 'vue';

import App from './pages/App.vue';

class Errors {
    constructor() {
        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any(){
        return Object.keys(this.errors).length > 0;
    }

    get(field){
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors){
        this.errors = errors;
    }

    clear(field){
        if(field) {
            delete this.errors[field];
            return;
        }
        this.errors = {};
    }
}

class Form {
    constructor(data){
        this.originalData = data;

        for(let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data(){
        let data = Object.assign({}, this);
        delete data.originalData;
        delete data.errors;
        return data;
    }

    reset() {
        for(let field in originalData){
            this[field] = '';
        }
    }

    submit(requestType, url){
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this))
            .catch(error => this.errors.record(error.response.data));
    }

    onSuccess(response) {
        alert(response.data.message);
        this.errors.clear();
        this.reset();
    }

    onFail(error){
        this.errors.record(error.response.data);
    }

}

const app = createApp({
    components: {
        App
    },
    data(){
        return {
            form: new Form({
                name: '',
                description: ''
            }),
        }
    },
    methods: {
        // also includes validation checks for if the post request is successful or not
        onSubmit(){
            this.form.submit('post', '/projects');
        }
    },

})
app.mount('#app')
