var one = new Vue({
    el: '#vue-app-one', //which one to mainpulate/root element
    data: {
        name: "Seb",
        title: "Vue App One"
    },
    
    methods:{

    },

    computed:{
        greet: function(){
            return "Hello from app one";
        }
    }
})

var two = new Vue({
    el: '#vue-app-two', //which one to mainpulate/root element
    data: {
        name: "Seb",
        title: "Vue App Two"
    },
    
    methods:{
        changeTitle: function(){
            one.title = "New Name Title 1"
        }
    },

    computed:{

        greet: function(){
            return "Hello from app TWO";
        }
    }
})


two.title = "Changed from outside";

