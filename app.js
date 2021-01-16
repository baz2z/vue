new Vue({
    el: '#vue-app', //which one to mainpulate/root element
    data: {
        name: "Seb",
        available: false,
        nearby: false
    },
    methods:{
        greet: function(time){
            return "Good " + time + " " +this.name;
        }
    },

    computed:{
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby
            }
        }
    }
})