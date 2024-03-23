<template>
    <div class="go-music-project">
        <n-layout style="height: calc(100vh - 60px)">
            <n-layout-header style="height: 50px; display: flex; padding:0 50px;" bordered>
                <go-search></go-search>
            </n-layout-header>
            <n-layout position="absolute" @click="closePlayList" style="top: 50px; bottom: 55px" has-sider>
                <n-layout-sider width="220"
                    content-style="padding: 24px;overflow:hidden background-color:transparent;z-index: 1;" bordered>
                    <div class="music-menu">
                        <router-link to="/music/home">发现音乐</router-link>
                    </div>
                </n-layout-sider>
                <router-view>
                </router-view>

            </n-layout>
            <n-layout-footer position="absolute" style="height: 55px;z-index: 11;" bordered>
                <music-player @updatecrtFlag="updatecrtFlag" :crtListFlag="crtListFlag" ref="musicPlayerDom"></music-player>
            </n-layout-footer>

        </n-layout>
        <div class="lyric-wrp" :style="{ transform: lyricFlag ? 'translateY(0vh)' : 'translateY(100vh)' }">
            <MusicLyric :currentTime="currentTime"></MusicLyric>
        </div>
        <div class="crtList-wrp" :style="{ transform: crtListFlag ? 'translateX(0%)' : 'translateX(100%)' }">
            <MusicCurrentList></MusicCurrentList>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { GoSearch } from "../../../components/GoSearch";
import { MusicPlayer } from '../../../components/Pages/Music/MusicPlayer'
import { MusicLyric } from '../../../components/Pages/Music/MusicLyric'
// import {useMusicStore} from '../../../store/modules/musicStore/musicStore'
import { MusicCurrentList } from '../../../components/Pages/Music/MusicCurrentList'

onMounted(() => {
    watch(() => musicPlayerDom.value.currentTime,
        (value) => {
            currentTime.value = value
        }
    )
    watch(() => musicPlayerDom.value.lyricFlag,
        (value) => {
            lyricFlag.value = value
        }
    )
})

const updatecrtFlag = (value) => {
    crtListFlag.value = value
}
const closePlayList = () => {
    crtListFlag.value = false
}

const musicPlayerDom = ref() // 播放器dom元素
const currentTime = ref()// 播放时的当前时间
const lyricFlag = ref() // 歌词界面标识符
const crtListFlag = ref(false) // 当前播放列表标识符


</script>

<style lang="scss" scoped>
@include go(music-project) {
    position: relative;
    overflow: hidden;

    .music-menu {
        width: 100%;
        margin: 2px 5px;
        height: 25px;
        font-size: 18px;
        padding: 5px;
        cursor: pointer;

        a {
            display: inline-block;
            width: 100%;
            text-decoration: none;
            /* 去除默认的下划线 */
            outline: none;
            /* 去除旧版浏览器的点击后的外虚线框 */
            color: #000000ab;
            /* 去除默认的颜色和点击后变化的颜色 */
        }

        .router-link-active {
            font-weight: bold;
        }
    }

    .music-menu:hover {
        background-color: rgb(169 169 169 / 8%);
    }

    .lyric-wrp {
        position: absolute;
        top: 49px;
        left: 0;
        width: 100%;
        height: calc(100vh - 55px - 60px - 49px);
        z-index: 10;
        // @include background-image('background-image');
        background-color: rgba($color: rgb(255, 255, 255), $alpha: 1);
        filter: blur(1);
        transition: 0.5s ease-in;

    }

    .crtList-wrp {
        width: 30%;
        height: calc(100vh - 50px - 55px - 60px);
        position: absolute;
        right: 0;
        top: 50px;
        overflow: hidden;
        z-index: 11;
        box-sizing: border-box;
        background-color: white;
        border-bottom: 1px solid rgb(239, 239, 245);
        border-left: 1px solid rgb(239, 239, 245);
        transition: all 1s ease;
    }
}
</style>