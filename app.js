new Vue({
    el: '#vue-app', //which one to mainpulate/root element
    data: {
        name: "Seb",
        job: "Dev",
        website: "https://vuejs.org/v2/guide/#Getting-Started", 
        websiteTag:    '<a href="https://vuejs.org/v2/guide/#Getting-Started">google</a>'
    },
    methods:{
        greet: function(time){
            return "Good " + time + " " +this.name;
        }
    }
}) 