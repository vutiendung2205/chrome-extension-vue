import { createApp } from 'vue';
import NewTab from './NewTab.vue';

// ant design styles
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './newtab.styles.css';

import store from './store';

const app = createApp(NewTab).use(Antd);
app.use(store);
app.mount('#app-container');
