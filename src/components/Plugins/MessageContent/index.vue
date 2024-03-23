<template></template>
<script setup lang="ts">
import { useMessage } from 'naive-ui';
// 挂载在window上方便js是使用
window['$message'] = useMessage()
</script>