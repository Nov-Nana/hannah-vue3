<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
import { GoAppProvider } from './components/GoAppProvider/index'
import { I18n } from './components/I18n/index'
import { useLang, useCode, useDarkThemeHook, useThemeOverridesHook } from './hooks/index';
// 代码主题
const hljsTheme = useCode()
// 全局语言
const { locale, dateLocale } = useLang()
// 暗黑主题
const darkTheme = useDarkThemeHook()
// 主题配置
const overrideTheme = useThemeOverridesHook()

</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="overrideTheme" :hljs="hljsTheme" :locale="locale"
    :date-locale="dateLocale">
    <go-app-provider>
      <I18n></I18n>
      <router-view></router-view>
    </go-app-provider>
  </n-config-provider>
</template>

<style lang="scss" scoped>
</style>
