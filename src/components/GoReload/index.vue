<template>
    重新加载
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import router from '../../router/index'
onMounted(() =>{
    router.go(-1)
})
</script>