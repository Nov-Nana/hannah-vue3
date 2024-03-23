import { computed, toRefs } from "vue"
import { useDesignStore } from "../store/modules/designStore/designStore"
import { GlobalThemeOverrides, darkTheme } from "naive-ui"
import { alpha, lighten } from '../utils'
import { borderRadius } from "../settings/designSetting"

/**
 * 返回暗黑主题
 */
export const useDarkThemeHook = () => {
    const designStore = useDesignStore()
    return computed(() => (designStore.getDarkTheme ? darkTheme : undefined))
}

/**
 * 设置全局主题
 */
export const useThemeOverridesHook = () => {
    // 获取designStore
    const designStore = useDesignStore()
    // 获取designStore的getApptheme
    const { getApptheme } = toRefs(designStore)
    // 计算darkTheme
    const darkTheme = computed(
        (): GlobalThemeOverrides => {
            // 通用
            const commonObj = {
                common: {
                    primaryColor: getApptheme.value,
                    primaryColorHover: lighten(alpha(getApptheme.value), 0.1),
                    primaryColorPressed: lighten(alpha(getApptheme.value), 0.1),
                    primaryColorSuppl: getApptheme.value,
                    borderRadius
                }
            }
            // 亮色主题
            const lightObject = {
                common: {
                    ...commonObj.common
                }
            }
            // 暗色主题
            const darkObject = {
                common: {
                    ...commonObj.common,
                },
                LoadingBar: {
                    colorLoading: getApptheme.value
                }
            }
            // 返回暗色主题或者亮色主题
            return designStore.getDarkTheme ? darkObject : lightObject
        }
    )
    // 返回darkTheme
    return darkTheme
}