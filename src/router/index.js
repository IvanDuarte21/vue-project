import App from "@/App.vue";
import Usuarios from "@/views/usuarios.vue"; // Corrigido para 'views' em vez de 'viewrs'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Usuarios
    },

    {
        path: '/',
        name: 'login',
        component: App
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes // Defina 'routes' aqui
});

export default router;