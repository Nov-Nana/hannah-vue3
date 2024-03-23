<template>
    <div>
        test,,,,,
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue';

onBeforeUnmount(()=>{
    console.log('TEST')
})
</script>

<style scoped>

</style>