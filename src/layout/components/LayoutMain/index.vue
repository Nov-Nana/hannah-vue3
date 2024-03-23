<template>
    <n-layout has-sider position="absolute">
        <n-space vertical>
            <layout-project-sider></layout-project-sider>
        </n-space>
        <n-layout>
            <layout-header-pro></layout-header-pro>
            <n-layout>
                <n-layout-content>
                    <router-view>
                        <template #default="{ Component, route }">
                            <component v-if="route.meta.noKeepAlive" :is="Component" :key="key" />
                            <keep-alive v-else>
                                <component :is="Component" :key="key" />
                            </keep-alive>
                        </template>
                    </router-view>
                </n-layout-content>
            </n-layout>
        </n-layout>
    </n-layout>
</template>
<script setup lang="ts">
import { LayoutProjectSider } from '../LayoutProjectSider'
import { LayoutHeaderPro } from '../LayoutHeaderPro'
import { useRoute } from 'vue-router';
import { computed, ref, onMounted } from 'vue'
import { useSettingStore } from '../../../store/modules/settingStore/settingStore'
import { SettingStoreEnums } from '../../../store/modules/settingStore/settingStore.d'
// import {debounce} from '../../../utils/utils'

const route = useRoute()
const key = computed(() => route.meta.activeMenuName)
const settings = useSettingStore()
const windowWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

onMounted(() => {
    // 监听窗口大小变化
    // debounce(()=>{
        window.addEventListener('resize', handleResize);
    // },500)
    
})

const handleResize = () => {
    // 更新响应式属性
    windowWidth.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(windowWidth.value < 1200){
        settings.setItem(SettingStoreEnums.ASIDE_ALL_COLLAPSED, true)
    }
};

</script>

<style lang="scss" scoped>
.n-layout-toggle-bar {
    z-index: 100000;
}
</style>