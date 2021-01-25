var data = {
    name: "Yoshi"
}

Vue.component("greeting", {
    template: "<p> Hey there, I am {{name}}. <button v-on:click='changeName'> Change name </button></p>",
    //data: function, that returns Object, not directly
    //because there can be multiple instances --> if function: call by object
    //function creates copy
    // as property: call by value
    data: function(){
        return {
            name: "Yoshi"
        }
    },

 //   data: function(){
 //       return data;
 //   },


    methods:{
        changeName: function(){
            this.name = "Pimmel"
        }
    }
})


new Vue({
    el: '#vue-app-one', //which one to mainpulate/root element
    
})


new Vue({
    el: '#vue-app-two', //which one to mainpulate/root element

})