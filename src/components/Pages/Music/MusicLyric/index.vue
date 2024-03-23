<template>
    <div class="go-music-lyric">
        <div class="first-floor">
            <div class="action-bars">
                <img ref="barRef"
                    src="/src/assets/7e5a26d5-bfce-490f-b750-e566827fdeca__4f8f28d568278937e81fd4c9701dc35b.png" alt=""
                    srcset="">
            </div>
            <div class="song-wrp">
                <div class="song-name">{{musicStore.getCurrentSong?.name}}</div>
                <div class="song-info">
                    <div class="singer">歌手：{{musicStore.getCurrentSong?.artists}}</div>
                    <div class="album">专辑：{{musicStore.getCurrentSong?.name}}</div>
                </div>
            </div>
        </div>
        <div class="second-floor">
            <div class="album-wrp">
                <div class="album-pic" style="animation-play-state: paused;" ref="albumRef">
                    <img :src="musicStore.getCurrentSong?.albumPic">
                </div>
            </div>
            <div class="lyric-wrp">
                <ul class="lyric-box" ref="lyricRef" v-if="musicStore.getCurrentSong?.lyric">
                    <li v-for="(item, index) in musicStore.getCurrentSong?.lyric" :key="index"
                        :class="{ active: index == currentIdx - 1 }">{{ item.word }}</li>
                </ul>
                <n-text v-else>暂无歌词~</n-text>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { onUpdated, ref } from 'vue';
import { useMusicStore } from '../../../../store/modules/musicStore/musicStore';
import { storeToRefs } from 'pinia'


const musicStore = useMusicStore()
const props = defineProps(['currentTime', 'playStatus'])
const currentIdx = ref() // 当前歌词
const lyricRef = ref() // ul元素
const { isPlayState } = storeToRefs(musicStore) // 将store里的state变为响应式
const barRef = ref() // 唱片遥杆
const albumRef = ref()
watch(isPlayState, (value) => {
    if (value) {
        barRef.value.style = 'transform: rotateZ(25deg);'
        albumRef.value.style.animationPlayState = 'running'

    }else{
        barRef.value.style = 'transform: rotateZ(0deg);'
        albumRef.value.style.animationPlayState = 'paused'
    }
})
watch(currentIdx, (newIdx) => {
    rollLyric(newIdx)
})

// 在实现更新时,获取歌曲当前播放时间
onUpdated(() => {
    // 处理当前歌词
    currentIdx.value = musicStore.getCurrentSong?.lyric.findIndex((value) => {
        return value.time > props.currentTime
    })

})
// 滚动歌词
function rollLyric(newIdx) {
    lyricRef.value.style.transform = `translateY(-${newIdx * 30}px)`
}


</script>

<style lang="scss" scoped>
@include go(music-lyric) {
    // @include background-image('background-image');
    width: 100%;
    height: 100%;
    position: relative;
    z-index: -1;
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;


    .first-floor,
    .second-floor {
        width: 80%;
        display: flex;
        justify-content: center;
    }

    .first-floor {
        height: 20%;
        position: relative;

        .action-bars,
        .song-wrp {
            width: 50%;
        }

        .action-bars {
            position: relative;
            z-index: 2;

            img {
                position: absolute;
                left: 54%;
                top: 25px;
                width: 130px;
                object-fit: contain;
                transform-origin: 0 0;
                transform: rotateZ(0deg);
                transition: all 1s;
            }
        }

        .song-wrp {
            padding-left: 80px;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            position: relative;

            .song-name {
                font-size: 20px;

            }

            .song-info {
                display: flex;

                .singer {
                    margin-right: 20px;
                }
            }
        }

        .song-wrp::after {
            content: '';
            width: 50%;
            height: 3px;
            position: absolute;
            bottom: 0;
            left: 10%;
            background-color: white;
            box-shadow: 0px -4px 34px 45px rgb(255, 255, 255);
        }
    }


    .second-floor {
        height: 60%;

        .album-wrp {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            margin-top: 20px;

            .album-pic {
                width: 180px;
                height: 180px;
                border-radius: 50%;
                overflow: hidden;
                border: 30px solid #000;
                box-shadow: 0 0 1px 10px rgba($color: #000000, $alpha: 0.3);
                animation: rotateAlbum infinite linear 100s;

                img {
                    width: 180px;
                    height: 180px;

                }
            }

            @keyframes rotateAlbum {
                from {
                    transform: rotateZ(0);
                }

                to {
                    transform: rotateZ(360deg);
                }
            }


        }

        .lyric-wrp {
            width: 50%;
            height: 100%;
            overflow: hidden;
            position: relative;

            ul {
                width: 90%;
                transition: all 1s;
                position: absolute;
                top: 50%;
                // text-align: center;
            }

            li {
                height: 30px;
                color: grey;
                font-size: 13px;
                transition: all .5s;
            }

            li.active {
                font-size: 15px;
                font-weight: bolder;
            }
        }

        .lyric-wrp::after {
            content: '';
            width: 100%;
            height: 5px;
            position: absolute;
            bottom: 0;
            background-color: white;
            box-shadow: 1px -4px 34px 45px rgb(255, 255, 255);
        }

        .lyric-wrp::before {
            content: '';
            width: 100%;
            height: 5px;
            position: absolute;
            top: 0;
            background-color: white;
            box-shadow: 0px -5px 36px 36px rgb(255, 255, 255);
            z-index: 1;
        }

    }




}
</style>