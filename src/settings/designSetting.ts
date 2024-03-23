/**
 * 设计配置：语言、主题配置
 */
import { LangEnum } from "../enums/styleEnum"

// 默认语言
export const lang = LangEnum.ZH

// 主题配置
export const theme = {
    // 默认是否开启深色主题
    darkTheme: true,
    // 默认主题色
    appTheme: '#54d6a9',
    appThemeDetail: null
}

// 全局边框圆角
export const borderRadius = '4px'

// 轮播间隔
export const carouselInterval = 4000

// 侧边栏折叠后的宽度，支持全部折叠会覆盖为0
export const asideCollapsedWidth = 60

// 侧边栏宽度
export const asideWidth = '270'