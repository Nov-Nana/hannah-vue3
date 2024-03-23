<template>
    <router-view>
        <template #default="{ Component, route }">
            <component v-if="route.meta.noKeepAlive" :is="Component" :key="route.path" />
            <keep-alive v-else>
                <component :is="Component" :key="route.path" />
            </keep-alive>
        </template>
    </router-view>
</template>