import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import Form from './Form.vue'
import Timer from './Timer.vue'
createApp(App).mount('#app')
createApp(Timer).mount('#reaction_time')
createApp(Form).mount('#Form')
