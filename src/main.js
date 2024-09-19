import { createApp } from 'vue'
import App from './App'
import Kui from './lib'

import './css/main.css'
import './css/tailwind.css'

const app = createApp(App)
app.use(Kui)
app.mount('#app')
