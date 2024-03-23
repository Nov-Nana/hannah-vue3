import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { PageEnum } from '../enums/pageEnum'
import { Layout } from './constant'
import { HttpErrorPage, LoginRoute, ReloadRoute, HomeRoute } from './base'
import modules from './modules/index'
import { createRouterGuard } from './router-guards'

const RootRoute: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Root',
        redirect: PageEnum.BASE_HOME,
        component: Layout,
        meta: {
            title: 'Root',
        },
        children: [
            HomeRoute,
            modules.MusicRoute,
            modules.testRoute,
            modules.AdminRoute
        ]
    }

]

export const constantRouter: any[] = [...RootRoute, LoginRoute, ReloadRoute, ...HttpErrorPage]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouter
})

export function setupRouter(app: App) {
    app.use(router)
    createRouterGuard(router)
}

export default router