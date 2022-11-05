import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '首页'
        },
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/flv',
        name: 'Flv',
        meta: {
            title: 'Flv'
        },
        component: () => import('@/pages/flv.vue')
    },
    {
        path: '/hls',
        name: 'Hls',
        meta: {
            title: 'Hls'
        },
        component: () => import('@/pages/hls.vue')
    },
    {
        path: '/video',
        name: 'Video',
        meta: {
            title: 'Video'
        },
        component: () => import('@/pages/video.vue')
    },
    {
        path: '/easyplayer',
        name: 'EasyPlayer',
        meta: {
            title: 'EasyPlayer'
        },
        component: () => import('@/pages/easyplayer.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
