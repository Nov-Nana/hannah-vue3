import { defineStore } from "pinia";
import { AppThemeColorType, DesignStateType } from './designStore.d'
import { setLocalStorage, getLocalStorage } from "../../../utils";
import { StorageEnum } from "../../../enums/storageEnum";
import { ThemeEnum } from "../../../enums/styleEnum";
import { theme } from "../../../settings/designSetting";

const { GO_DESIGN_STORE } = StorageEnum
const { darkTheme, appTheme, appThemeDetail } = theme

const storageDesign = getLocalStorage(GO_DESIGN_STORE)

export const useDesignStore = defineStore({
    id: 'useDesignStore',
    state: (): DesignStateType => storageDesign || {
        // 是否暗黑
        darkTheme,
        // 主题名称：dark || light
        themeName: (darkTheme && ThemeEnum.DARK) || ThemeEnum.LIGHT,
        // 主题色号
        appTheme,
        // 色号具体信息
        appThemeDetail
    },
    getters: {
        getDarkTheme(): boolean{
            return this.darkTheme
        },
        getApptheme(): string{
            return this.appTheme
        },
        getAppThemeDetail(): AppThemeColorType | null {
            return this.appThemeDetail
        }
    },
    actions:{
        // 切换主题
        changeTheme(): void{
            this.darkTheme = !this.darkTheme
            this.themeName = this.darkTheme ? ThemeEnum.DARK : ThemeEnum.LIGHT
            setLocalStorage(GO_DESIGN_STORE, this.$state)
        },
        // 设置颜色
        setAppColor(color: AppThemeColorType): void{
            this.appTheme = color.hex
            this.appThemeDetail = color
            setLocalStorage(GO_DESIGN_STORE, this.$state)
        }
    }
})