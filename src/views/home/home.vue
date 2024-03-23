<template>
    <div>主页</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue';

onBeforeUnmount(()=>{
    console.log('Home')
})
</script>

<style scoped></style>