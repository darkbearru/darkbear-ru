import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'about',
            component: HomeView
        },
        {
            path: '/life',
            name: 'life',
            component: () => import('../views/Life.vue'),
            children: [
                {
                    path: '/',
                    name: 'life-common'
                },
                {
                    path: '/achievements',
                    name: 'life-achievements'
                },
                {
                    path: '/photography',
                    name: 'life-photography'
                },
                {
                    path: '/travel',
                    name: 'life-travel'
                }
            ]
        },
        {
            path: '/work',
            name: 'work',
            component: () => import('../views/Work.vue'),
            children: [
                {
                    path: '/portfolio',
                    name: 'work-portfolio'
                },
                {
                    path: '/backend',
                    name: 'work-backend'
                },
                {
                    path: '/frontend',
                    name: 'work-frontend'
                },
                {
                    path: '/technologies',
                    name: 'work-technologies'
                }
            ]
        }
    ]
})

export default router
