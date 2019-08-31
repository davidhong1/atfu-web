import Vue from 'vue'
import VueRouter from "vue-router";

import ElementUI from 'element-ui'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'normalize.css'

import App from './App.vue'
import routes from "@/routes";
import store from "@/store";

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.component('icon', Icon)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
