require('./bootstrap');

import { createApp } from 'vue';

import App from './pages/App.vue';

const app = createApp({
    data(){
        return {
            name: '',
            description: '',
            errors: {}
        }
    },
    methods: {
        // also includes validation checks for if the post request is successful or not
        onSubmit(){
            axios.post('/projects', this.$data)
                 .then(response => alert('success'))
                .catch(error => {
                    console.log(error.response);
                })
        }
    },
    components: {
        App,
    }
})
app.mount('#app')
