import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

// loading component globalize
import LoadingComponent from "@/components/LoadingComponent.vue";

createApp(App).use(store).use(router).component('LoadingComponent', LoadingComponent).mount('#app')
