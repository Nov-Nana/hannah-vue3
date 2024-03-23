import { defineStore } from 'pinia'
import { SettingStoreType } from './settingStore.d'
import { getLocalStorage, setLocalStorage } from '../../../utils'
import { StorageEnum } from '../../../enums/storageEnum'
import { systemSetting } from '../../../settings/systemSetting'
const { GO_SYSTEM_SETTING_STORE } = StorageEnum
import {asideCollapsedWidth} from '../../../settings/designSetting'

const storageSetting: SettingStoreType = getLocalStorage(GO_SYSTEM_SETTING_STORE)
//全局设置
export const useSettingStore = defineStore({
    id: 'useSettingStore',
    state: (): SettingStoreType => storageSetting || systemSetting,
    getters: {
        getChangeLangReload(): boolean {
            return this.changeLangReload
        },
        getAsideCollapsedWidth():number{
            return this.asideAllCollapsed ? 0 : asideCollapsedWidth
        },
        getAsideAllCollapsed():boolean {
            return this.asideAllCollapsed
        }
    },
    actions: {
        setItem<T extends keyof SettingStoreType, K extends SettingStoreType[T]>(
            key: T,
            value: K
        ): void{
            this.$patch(state => {
                state[key] = value
            })
            setLocalStorage(GO_SYSTEM_SETTING_STORE, this.$state)
        }
    }
})