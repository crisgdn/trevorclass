import FormEmail from './components/form.js';


(()=> {

    const { createApp } = Vue
    createApp({
    
        data() {
            return {

            }
        },
        
        methods: {


        },

        components: {
            formpanel: FormEmail
        }

    
    })
    .mount('#app');
    
})();
