const { createApp } = Vue

createApp({
    data() {
        return {
            eMail: '',
            eMailArray: [],
        }
    },
    methods: {
        fetchEmail() {
            axios.get('https//flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.log(res, res.data)
                
            })
        }
    },
    mounted() {
        for (i=0; i<10; i++) {
            console.log(`ciclo nr ${i} `)
            this.fetchEmail()
        }
    }
}).mount('#app')
