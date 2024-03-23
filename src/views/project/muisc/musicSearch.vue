<template>
    <div class="go-search-page">
        <n-scrollbar style="max-height: 100%">
            <music-list></music-list>
        </n-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { MusicList } from "../../../components/Pages/Music/MusicList";

</script>

<style lang="scss" scoped>
@include go(search-page){
    padding: 10px;
    height: calc(100vh - 55px - 60px - 50px);
    overflow: hidden;
    box-sizing: border-box;
}
</style>