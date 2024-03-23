import { ThemeEnum } from '../../../enums/styleEnum'

// 导出AppThemeColorType类型，它是一个对象，包含CMYK、RGB、hex、name、pinyin属性
export type AppThemeColorType = {
    CMYK: number[]
    RGB: number[]
    hex: string
    name: string
    pinyin: string
}

// 导出DesignStateType类型，它是一个接口，包含darkTheme、themeNmae、appTheme、appThemeDetail属性
export interface DesignStateType {
    // 是否时深色主题
    darkTheme: boolean
    // 主题名称
    themeName: ThemeEnum
    // 应用主题
    appTheme: string
    // 应用主题详情
    appThemeDetail: AppThemeColorType | null
}