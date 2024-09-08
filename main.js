import { createApp } from 'vue'
import App from './App'
import Kui from './lib'

import './css/style.css'

const app = createApp(App)
app.use(Kui)
app.mount('#app')
