import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/Router.js'
import store from './store'
import './styles.css'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
