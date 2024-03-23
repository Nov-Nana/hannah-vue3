<template>
    <n-layout-sider bordered class="go-project-sider" collapse-mode="width" show-trigger="bar"
        :collapse-width="getAsideCollapsedWidth" :collapsed="getAsideAllCollapsed" :native-scrollbar="false" :width="asideWidth"
        @collapse="setCollapsed(true)" @expand="setCollapsed(false)">
        <div class="go-project-sider-flex">
            <aside>
                <n-space vertical class="go-project-sider-top">
                    <go-project-top :collapsed="getAsideAllCollapsed">

                    </go-project-top>
                </n-space>
                <n-menu :value="menuValue" :options="menuOptions" :collapse-width="getAsideCollapsedWidth"
                    :collapse-icon-size="22" :default-expended-keys="defaultExpandedKeys"></n-menu>
            </aside>
            <!-- 底部 -->
            <div class="sider-bottom">
                <go-project-bottom></go-project-bottom>
            </div>
        </div>
    </n-layout-sider>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { menuOptionsInit, expandedKeys } from './menu';
import { useSettingStore } from '../../../store/modules/settingStore/settingStore';
import { asideWidth } from '../../../settings/designSetting'
import { GoProjectTop } from '../../../components/GoProjectTop'
import { GoProjectBottom } from '../../../components/GoProjectBottom'
import { SettingStoreEnums } from '../../../store/modules/settingStore/settingStore.d'

// 折叠
// const collapsed = ref(false)
// 折叠宽度
const { getAsideCollapsedWidth,getAsideAllCollapsed } = toRefs(useSettingStore())
const settings = useSettingStore()

const route = useRoute()
const menuValue = computed(() => route.name)
// 菜单列表
const menuOptions = menuOptionsInit()
// 展开menu项
const defaultExpandedKeys = expandedKeys()

// 折叠
const setCollapsed = (value)=>{
    settings.setItem(SettingStoreEnums.ASIDE_ALL_COLLAPSED, value)
}
</script>

<style lang="scss" scoped>
@include go(project) {
    &-sider {
        @include fetch-bg-color('aside-background-color');

        &-top {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            margin-top: 30px;
            margin-bottom: 20px;
        }

        &-flex {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100vh;
        }

        &-layout-sider {
            height: 100vh;
        }

        .content-top {
            top: $--header-height;
            margin-top: 1px;
        }
    }
}</style>