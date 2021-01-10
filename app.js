new Vue({
    el: '#vue-app', //which one to mainpulate/root element
    data: {
        name: "",
        age:""
    },
    methods:{
        greet: function(time){
            return "Good " + time + " " +this.name;
        }
    }
})