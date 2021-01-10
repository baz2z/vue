new Vue({
    el: '#vue-app', //which one to mainpulate/root element
    data: {
        name: "Seb",
    },
    methods:{
        greet: function(time){
            return "Good " + time + " " +this.name;
        }
    }
})