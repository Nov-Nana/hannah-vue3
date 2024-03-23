<template>
    <n-dropdown trigger="hover" :show-arrow="true" :options="options" @select="handleSelect">
        <div class="user-info-box">
            <person-icon v-if="fallback"></person-icon>
            <n-avatar v-if="!fallback" round object-fit="cover" size="medium" :src="Person" @error="errorHandle" />
        </div>
    </n-dropdown>

    <!-- 系统设置 -->
    <!-- 关于软件 -->
    <go-system-info v-model:modelShow="modelShowInfo"></go-system-info>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { renderIcon, renderLang, logout } from '../../utils';
import { icon } from '../../plugins'
import { NText, NAvatar } from 'naive-ui'
import Person from './person.png'
import { GoSystemInfo } from '../GoSystemInfo'

const modelShowInfo = ref(false)

const {
    ChatboxEllipsesIcon,
    PersonIcon,
    LogOutOutlineIcon,
} = icon.ionicons5

/**
 * 用户图标渲染
 * 创建一个虚拟节点 VNode
 * h(tag, attributes, children)
 * <div style='display: flex; align-item:center; padding: 8px 12px'>
 *  <n-avatar round style='margin-right: 12px;' src='./person.png'>
 *  </n-avatar>
 *  <div>
 *    <n-text depth='2'>奔跑的</n-text>
 *  </div>
 * </div>
 */
const renderUserInfo = () => {
    return h(
        'div',
        {
            style: 'display: flex; align-items: center; padding: 8px 12px;'
        },
        [
            h(NAvatar, {
                round: true,
                style: 'margin-right: 12px;',
                src: Person
            }),
            h('div', null, [
                h(NText, { depth: 2 }, { default: () => 'hannah' })
            ])
        ]
    )
}

const options = ref([
    {
        label: '我的信息',
        key: 'info',
        // 使用虚拟dom方式载入
        type: 'render',
        render: renderUserInfo
    },
    {
        type: 'divider',
        key: 'd1'
    },
    // {
    //     /**
    //      * renderLang(key, set = {}, tag = span)
    //      * <span>window['$t']( key )</span>
    //      */
    //     label: renderLang('global.sys_set'),
    //     key: 'sysSet',
    //     /**
    //      * renderIcon(icon, set={})
    //      * <n-icon>
    //      *      <settings-sharp-icon/>
    //      * </n-icon>
    //      */
    //     icon: renderIcon(SettingsSharpIcon)
    // },
    {
        label: renderLang('global.contact'),
        key: 'contact',
        icon: renderIcon(ChatboxEllipsesIcon)
    },
    {
        type: 'divider',
        key: 'd2'
    },
    {
        label: renderLang('global.logout'),
        key: 'logout',
        icon: renderIcon(LogOutOutlineIcon)
    }
])
let fallback = ref(false)
const errorHandle = (_e: Event) => {
    fallback.value = true
}

const handleSelect = (key: string) => {
    switch (key) {
        case 'sysSet':
            break
        case 'contact':
            modelShowInfo.value = true
            break
        case 'logout':
            logout()
            break
    }
}
</script>

<style scoped>
.user-info-box {
    cursor: pointer;
    transform: scale(0.7);
}
</style>