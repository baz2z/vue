new Vue({
    el: '#vue-app', //which one to mainpulate/root element
    data: {
        name: "Seb",
        age: 20,
        a: 0,
        b: 0
    },
    //with methods, vue doesnt know which one to run so it goes through all
    /*
    methods: {
        addToA: function () {
            console.log("add to a")
            return this.a + this.age
        },
        
        addToB: function () {
            console.log("add to b")
            return this.b + this.age
        },
        
    },
    */

    //change functions to properties

    computed:{
        addToA: function () {
            console.log("add to a")
            return this.a + this.age
        },
        addToB: function () {
            console.log("add to b")
            return this.b + this.age
        }   
    }
})