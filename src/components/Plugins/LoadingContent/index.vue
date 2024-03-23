<template></template>
<script setup lang="ts">
import { useLoadingBar } from 'naive-ui';
// 挂载在window上方便js是使用
window['$loading'] = useLoadingBar()
window['$loading'].finish()
</script>