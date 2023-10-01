import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './portfolio/Home.vue';
import Projects from './portfolio/Projects.vue';
import About from './portfolio/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/about', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp({});
app.use(router);
app.mount('#app');
