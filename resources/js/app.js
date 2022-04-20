require('./bootstrap');

import { createApp } from 'vue';

import App from './pages/App.vue';

class Errors {
    constructor() {
        this.errors = { };
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
        delete this.errors[field];
    }
}

class Form {
    constructor(data){
        this.data = data;

        for(let field in data) {
            this[field] = data[field];
        }
    }

    reset() {

    }

}

const app = createApp({
    data(){
        return {
            form: new Form({
                name: '',
                description: ''
            }),
            errors: new Errors(),
        }
    },
    methods: {
        // also includes validation checks for if the post request is successful or not
        onSubmit(){
            axios.post('/projects', this.$data)
                 .then(this.onSuccess)
                 .catch(error => this.errors.record(error.response.data));
        },
        onSuccess(response){
            alert(response.data.message);

            form.reset();
        }
    },
    components: {
        App
    }
})
app.mount('#app')
