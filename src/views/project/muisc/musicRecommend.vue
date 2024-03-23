<template>
    <div class="go-music-recommend">
        <n-carousel autoplay effect="card" prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
            next-slide-style="transform: translateX(50%) translateZ(-800px);" style="height: 240px" :show-dots="true">
            <n-carousel-item v-for="item in musicStore.getBanner" :key="item.targetId">
                <img class="carousel-img" :src="item.imageUrl">
                <div class="image-type" :style="{ backgroundColor: item.titleColor }">{{ item.typeTitle }}</div>
            </n-carousel-item>
        </n-carousel>
        <div class="recommend-title" @click="$router.push('/music/songlist')">推荐歌单<i
                class="iconfont icon-fangxiang-xiangyou"></i></div>
        <div class="song-list-wrp">
            <template v-for="songlist in recommendSongList" :key="songlist.id">
                <MusicSongList :songlist="songlist"></MusicSongList>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMusicStore } from '../../../store/modules/musicStore/musicStore'
import { onBeforeMount,ref } from 'vue';
import { MusicSongList } from '../../../components/Pages/Music/MusicSongList'
import {getPersonalized} from '../../../api/project/music'

const musicStore = useMusicStore()
onBeforeMount(() => {
    musicStore.updateBanner()
    // 获取推荐歌单
    getPersonalized().then(res=>{
        //@ts-ignore
        recommendSongList.value = res.result
    })
})

const recommendSongList = ref()
</script>

<style lang="scss" scoped>
@include go(music-recommend) {
    padding-bottom: 50px;
    .carousel-img {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    .image-type {
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        position: absolute;
        right: 0;
        bottom: 0;
        color: white;
        border-top-left-radius: 5px;
        border-end-end-radius: 5px;
        padding: 2px 10px;
    }

    .n-carousel .n-carousel__slides .n-carousel__slide {
        width: 60% !important;
    }

    .recommend-title {
        width: fit-content;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        color: rgb(52, 52, 52);

        i {
            margin-left: 5px;
        }
    }

    .recommend-title:hover {
        color: black;
    }

    .song-list-wrp{
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 10px;
    }
}
</style>