<template>
    <div class="go-project-top">
        <slot name="avatar">
            <n-avatar class="sider-avatar" :style="{ transform: collapsed ? 'scale(0.7)' : 'scale(1.5)' }" size="large" round
                bordered object-fit="cover" :src="PersonImg">
            </n-avatar>
        </slot>
        <slot name="text">
            <p v-if="!collapsed">hannah</p>
        </slot>
    </div>
</template>

<script setup lang="ts">
import PersonImg from './person.png'

defineProps({
    collapsed: Boolean
})
</script>

<style lang="scss" scoped>
.sider-avatar {
    transition: all 0.5s;
}
</style>