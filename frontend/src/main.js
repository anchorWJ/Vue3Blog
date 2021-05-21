import { createApp } from 'vue'
import App from './App.vue'
import { usePlugins } from '@p'

const app = createApp(App)

usePlugins(app)

app.mount('#app')
