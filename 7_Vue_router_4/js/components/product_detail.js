Vue.component('product_detail', {
    data: function () {
        return{
            product_name: this.$route.params.name,
            
        }
    },
    methos: {
        SelectRed: function () {
            this.$router.push("/product/" + this.product_name + "/color/rojo")
        },
        SelectBlue: function () {
            this.$router.push("/product/" + this.product_name + "/color/blue")
        },
    },
    template: 
    `
    <div>
        <h1> {{ this.$route.params.name }}</h1>
        <button v-on:click="SelectBlue"> Azul </button>
        <button v-on:click="SelectRed"> Rojo </button>
        <br>

        <router-view> </router-view>
        
    </div>
    `
})


//  para actualizar el proyecto :
// https://gist.github.com/joelibaceta/3259d3f90dbce245a6ab00cfae52b4a4

