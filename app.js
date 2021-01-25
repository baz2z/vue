new Vue({
    el: '#vue-app', //which one to mainpulate/root element
    data: {
        name: "Seb",
        output: "YOur fav food"
    },
    
    methods:{
        readRefs: function(){
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    },

    computed:{

    }
})