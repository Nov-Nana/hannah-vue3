import { PageEnum } from "../enums/pageEnum";
import { RouteRecordRaw } from "vue-router";
import { ErrorPage403, ErrorPage404, ErrorPage500 } from "./constant";
import { AppRouteRecordRaw } from './types'
import { GoReload } from "../components/GoReload/index";

export const LoginRoute: RouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue'),
    meta: {
        title: '登录'
    }
}

export const HomeRoute: RouteRecordRaw = {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/home.vue'),
    meta: {
        title: '主页',
        activeMenuName:'Home'
    }
}

export const HttpErrorPage: RouteRecordRaw[] = [
    {
        path: '/error/404',
        name: PageEnum.ERROR_PAGE_NAME_404,
        component: ErrorPage404,
        meta: {
            title: PageEnum.ERROR_PAGE_NAME_404
        }
    },
    {
        path: '/error/403',
        name: PageEnum.ERROR_PAGE_NAME_403,
        component: ErrorPage403,
        meta: {
            title: PageEnum.ERROR_PAGE_NAME_403
        }
    },
    {
        path: '/error/500',
        name: PageEnum.ERROR_PAGE_NAME_500,
        component: ErrorPage500,
        meta: {
            title: PageEnum.ERROR_PAGE_NAME_500
        }
    },
]

export const ErrorPageRoute: AppRouteRecordRaw = {
    path: '/:path(.*)*',
    name: 'ErrorPage',
    component: ErrorPage404,
    meta: {
        title: PageEnum.ERROR_PAGE_NAME_404,
        hideBreadcrumb: true
    }
}

export const ReloadRoute: AppRouteRecordRaw = {
    path: PageEnum.RELOAD,
    name: PageEnum.RELOAD_NAME,
    component: GoReload,
    meta: {
        title: PageEnum.RELOAD_NAME
    }
}