import ziming from '@ziming/components';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);
app.use(ziming);

app.mount('#app');
