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
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.eMailArray.push(res.data.response)
            })
        }
    },
    beforeMount() {
        for (i=0; i<10; i++) {
            console.log(`ciclo nr ${i} `)
            this.fetchEmail()
        }
    }
}).mount('#app')
