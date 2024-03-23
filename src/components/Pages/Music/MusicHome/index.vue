<template>
    <div class="go-music-home">
        <div class="music-home-header">
            <n-tabs type="line" animated>
                <n-tab-pane name="recommand" tab="个性推荐">
                    <n-carousel effect="card" prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
                        next-slide-style="transform: translateX(50%) translateZ(-800px);" style="height: 240px"
                        :show-dots="true">
                        <n-carousel-item v-for="item in musicStore.getBanner" :key="item.targetId">
                            <img class="carousel-img" :src="item.imageUrl">
                            <div class="image-type" :style="{ backgroundColor: item.titleColor }">{{ item.typeTitle }}</div>
                        </n-carousel-item>
                    </n-carousel>
                </n-tab-pane>
                <n-tab-pane name="customization" tab="专属定制">
                    专属定制
                </n-tab-pane>
                <n-tab-pane name="song list" tab="歌单">
                    歌单
                </n-tab-pane>
                <n-tab-pane name="ranking list" tab="排行榜">
                    排行榜
                </n-tab-pane>
                <n-tab-pane name="singer" tab="歌手">
                    排行榜
                </n-tab-pane>
                <n-tab-pane name="Lstest music" tab="最新音乐">
                    Latest Music
                </n-tab-pane>
            </n-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMusicStore } from '../../../../store/modules/musicStore/musicStore'
import { onBeforeMount } from 'vue';

const musicStore = useMusicStore()
onBeforeMount(() => {
    musicStore.updateBanner()
})

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
    }

    .n-carousel .n-carousel__slides .n-carousel__slide {
        width: 60% !important;
    }

}
</style>