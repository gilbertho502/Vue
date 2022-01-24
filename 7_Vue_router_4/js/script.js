const router = new VueRouter({
    routes: [
         {path: "/product/:name", 
         component: "product_detail",
         children: [
            {path: '', component: "product_color_default"},
            {path: '/color/:color', component: "product_color"}
         ]
        }
    ] 
    
})

const app = new Vue({
    router
}).$mount("#app")