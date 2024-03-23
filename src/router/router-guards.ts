import { PageEnum } from '../enums/pageEnum'
import { Router } from 'vue-router'
import { loginCheck } from '../utils'

export function createRouterGuard(router: Router) {
    // 前置
    router.beforeEach(async (to, _from, next) => {
        // @ts-ignore
        // if (!window.route) window.route = { params: {} }
        // @ts-ignore
        // Object.assign(window.route.params, to.query)

        const Loading = window['$loading']
        Loading && Loading.start()

        const isErrorPage = router.getRoutes().findIndex((item) => item.name === to.name)
        // 前往页面不在路由列表里
        if (isErrorPage === -1) {
            return next({ name: PageEnum.ERROR_PAGE_NAME_404 })
        }
        // 没登录
        if (!loginCheck()) {
            if (to.name === PageEnum.BASE_LOGIN_NAME) {
                return next()
            }
            return next({ name: PageEnum.BASE_LOGIN_NAME })
        }
        next()
    })

    // 后置
    router.afterEach((to, _, _failure) => {
        const Loading = window['$loading']
        document.title = (to?.meta?.title as string) || document.title
        Loading && Loading.finish()
    })

    // 错误
    router.onError(err => {
        console.log(err, '路由错误')
    })
}