import { computed } from 'vue'
import { LangEnum } from '../enums/styleEnum'
import { zhCN, enUS, dateEnUS, dateZhCN } from 'naive-ui'
import { useLangStore } from '../store/modules/langStore/langStore'



/**
 * 语言切换
 */
export const useLang = () => {
    const lang = useLangStore()

    const locale = computed(() => {
        return lang.getLang === LangEnum.ZH ? zhCN : enUS
    })

    const dateLocale = computed(() => {
        return lang.getLang === LangEnum.ZH ? dateZhCN : dateEnUS
    })

    return {
        locale,
        dateLocale
    }
}
