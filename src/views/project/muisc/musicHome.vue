<template>
    <div class="go-music-home">
        <div class="music-home-header">
            <n-tabs type="line" @update:value="changeTab" animated v-model:value="tabValue">
                <n-tab v-for="tab in tabs" :key="tab.key" :name="tab.path">
                    {{ tab.name }}
                </n-tab>
            </n-tabs>
        </div>
        <n-scrollbar>
            <router-view></router-view>
        </n-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const tabs = ref([
    {
        name: '个性推荐',
        path: '/music/recommend',
        key: 'MusicRecommend'
    },
    {
        name: '歌单',
        path: '/music/songlist',
        key: 'MusicSongList'
    },
])
const tabValue = ref('/music/recommend')
watch(() => router.currentRoute.value.path, (newValue) => {
    tabValue.value = newValue
}, { immediate: true })

// 选中标签 切换路由
const changeTab = (value) => {
    router.push(value)
}

</script>

<style lang="scss">
@include go(music-home) {
    height: calc(100vh - 60px - 50px - 55px);
    overflow: hidden;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    .music-home-header {
        width: 100%;
        height: 40px;
        padding: 5px;
    }
}
</style>