<template>
    <n-layout-header class="go-header">
        <header class="go-header-box" :class="{ 'is-project': isProject }">
            <div class="header-item left">
                <n-space>
                    <slot name="left"></slot>
                </n-space>
            </div>
            <div class="header-item center">
                <n-space>
                    <slot name="center"></slot>
                </n-space>
            </div>
            <div class="header-item right">
                <n-space>
                    <slot name="ri-left"></slot>
                    <go-lang-select></go-lang-select>
                    <theme-color-select></theme-color-select>
                    <go-theme-select></go-theme-select>
                    <slot name="ri-right"></slot>
                </n-space>
            </div>
        </header>
    </n-layout-header>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PageEnum } from '../../../enums/pageEnum';
import { GoLangSelect } from '../../../components/GoLangSelect'
import { ThemeColorSelect } from '../../../components/Pages/ThemeColorSelect'
import { GoThemeSelect } from '../../../components/GoThemeSelect'
const route = useRoute()

const isProject = computed(() => {
    return route.fullPath === PageEnum.PROJECT_TEST
})
</script>
<style lang="scss" scoped>
// $min-width: 250px;

@include go(header) {
    width: 100%;
    &-box {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: $--header-height;
        padding: 0 20px 0 60px;

        &.is-project {
            display: none;
        }

        .header-item {
            display: flex;
            align-items: center;
            // min-width: 400px;

            &.left {
                justify-content: start;
            }

            &.center {
                justify-content: center;
            }

            &.right {
                justify-content: end;
            }
        }
    }
}
</style>