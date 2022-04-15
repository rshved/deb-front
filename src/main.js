import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SocketIo from "./services/socketio.service";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SocketIo, {
  connection: 'http://localhost:8000',
  options: {
    // Your Socket.io options here
  }
})

app.mount('#app')
