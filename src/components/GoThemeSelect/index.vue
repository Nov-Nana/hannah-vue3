<template>
    <n-button quaternary @click="changeTheme" title="主题">
        <n-icon size="20" depth="1">
            <MoonIcon v-if="designStore.darkTheme"></MoonIcon>
            <SunnyIcon v-else></SunnyIcon>
        </n-icon>
    </n-button>
</template>

<script setup lang="ts">
import { useDesignStore } from '../../store/modules/designStore/designStore.ts'
import { icon } from "../../plugins";
import { setHtmlTheme } from "../../utils";

const designStore = useDesignStore()
const { MoonIcon, SunnyIcon } = icon.ionicons5

const changeTheme = () => {
    designStore.changeTheme()
    setHtmlTheme()
}
</script>

<style scoped></style>