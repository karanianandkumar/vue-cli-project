import Vue from 'vue'
import App from './App.vue'
import Students from './components/Students.vue'

Vue.component('students', Students);
Vue.config.productionTip = false

new Vue({
    el: "#app",
    render: h => h(App)
})