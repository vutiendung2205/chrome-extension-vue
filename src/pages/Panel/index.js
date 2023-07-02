import { createApp } from 'vue';
import App from './Panel.vue';
import './panel.styles.css';
// ant design styles
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import store from './store';

const app = createApp(App).use(Antd);
app.use(store);
app.mount('#app-container');
