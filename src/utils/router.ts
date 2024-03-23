import router from '../router/index'
import { PageEnum } from '../enums/pageEnum'
import { clearLocalStorage, getLocalStorage, clearSessionStorage } from './storage'
import { cryptoDecode } from './crypto'
import { } from '../enums/pageEnum'
import { StorageEnum } from '../enums/storageEnum'
import { ResultEnum } from '../enums/httpEnum'
import { ErrorPageNameMap } from '../enums/pageEnum'
/**
 * 根據名字跳轉路由 
 */
export const routerTurnByName = (pageName: string, isReplace?: boolean, windowOpen?: boolean) => {
    if (windowOpen) {
        const path = fetchPathByname(pageName, 'href')
        openNewWindow(path)
        return
    }
    if (isReplace) {
        router.replace({
            name: pageName
        })
        return
    }
    router.push({
        name: pageName
    })
}

/**
 * 根据路径跳转路由
 */
export const routerTurnByPath = (path: string, isReplace?: boolean, windowOpen?: boolean, query?: Array<string | number>) => {
    let fullPath = ''
    if (query?.length) {
        fullPath = `${path}/${query.join('/')}`
    }
    if (windowOpen) {
        return openNewWindow(fullPath)
    }
    if (isReplace) {
        router.replace({
            path: fullPath
        })
        return
    }
    router.push({
        path: fullPath
    })
}

/**
 * 根据名字获取路由信息
 * @param pageName 路由名字
 * @param param 路由参数
 */
export const fetchPathByname = (pageName: string, param?: string) => {
    try {
        // 根据页面名称获取路径数据
        const pathData = router.resolve({
            name: pageName
        })
        // 如果参数存在，则返回路径数据中对应参数的值，否则返回路径数据
        return param ? (pathData as any)[param] : pathData
    } catch (e) {
        // 如果获取路径数据失败，则弹出警告
        window['$message'].warning('查询路由信息失败，请联系管理员！')
    }
}

/**
 * 重新加載當前路由界面
 */
export const reloadRoutePage = () => {
    routerTurnByName(PageEnum.RELOAD_NAME)
}

/**
 * 打开新页面
 */
export const openNewWindow = (url: string) => {
    return window.open(url, '_blank')
}

/**
 * 判断是否登录
 * @return boolean
 */
export const loginCheck = () => {
    try {
        const userInfo = getLocalStorage(StorageEnum.GO_LOGIN_INFO_STORE)
        if (!userInfo) return false
        const decodeInfo = cryptoDecode(userInfo)
        if (decodeInfo) {
            return true
        }
        return false
    } catch (e) {
        return false
    }
}

/**
 * 退出登录
 */
export const logout = () => {
    // 清除缓存
    clearLocalStorage(StorageEnum.GO_LOGIN_INFO_STORE)
    // clearLocalStorage(StorageEnum.GO_MUSIC_PROJECT)
    clearSessionStorage(StorageEnum.GO_MUSIC_PROJECT)
    // 跳转路由到登录页
    routerTurnByName(PageEnum.BASE_LOGIN_NAME)
}

/**
 * * 错误页重定向
 * @param icon
 * @returns
 */
export const redirectErrorPage = (code: ResultEnum) => {
    if (!code) return false
    const pageName = ErrorPageNameMap.get(code)
    if (!pageName) return false
    routerTurnByName(pageName)
}
