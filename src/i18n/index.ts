//语言
import { createI18n } from 'vue-i18n'
import { lang } from '../settings/designSetting'
import { LangStateType } from '../store/modules/langStore/langStore.d'
import { getLocalStorage } from '../utils'
import { StorageEnum } from '../enums/storageEnum'
import { LangEnum } from '../enums/styleEnum'
import zh from './zh'
import en from './en'




const langStorage: LangStateType = getLocalStorage(StorageEnum.GO_LANG_STORE)

export const langList = [
    {
        label: '中文',
        key: LangEnum.ZH
    },
    {
        label: 'English',
        key: LangEnum.EN
    },
]

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: langStorage?.lang || lang,
    fallbackLocale: langStorage?.lang || lang,
    messages: {
        [LangEnum.ZH]: zh,
        [LangEnum.EN]: en
    }
})
export default i18n