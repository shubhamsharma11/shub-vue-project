import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './vuetify'

const app = createApp(App)

// Register Global Plugins
app.use(vuetify)
app.use(router)

app.mount('#app')
