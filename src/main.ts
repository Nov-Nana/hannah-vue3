import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupNaive, initFunction } from './plugins'
import router, { setupRouter } from './router'
import { GoAppProvider } from './components/GoAppProvider'
import i18n from './i18n'
import VueLazyload from 'vue3-lazyload'

// 引入动画
import 'animate.css/animate.min.css'

async function appInit() {
    const goAppProvider = createApp(GoAppProvider)

    const app = createApp(App)

    // 注册全局常用的naive-ui组件
    setupNaive(app)
    //挂载状态管理
    setupStore(app)
    // 挂载路由
    setupRouter(app)
    // 路由准备就绪后挂载APP实例
    await router.isReady()
    // 语言注册
    app.use(i18n)
    // 图片懒加载
    app.use(VueLazyload, {
        loading: 'src/assets/images/canvas/noImage.png',
        error: '加载失败'
    })

    goAppProvider.mount('#appProvider', true)
    app.mount('#app', true)

    // 挂载到window
    window['$vue'] = app

}

appInit().then(() => {
    initFunction()
})
