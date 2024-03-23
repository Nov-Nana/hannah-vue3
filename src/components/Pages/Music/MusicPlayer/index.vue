<template>
    <div class="player-btn-wrp">
        <n-icon @click="prevSong"><i class="iconfont icon-shangyiqu"></i></n-icon>
        <n-icon ref="playRef" class="zanting" v-if="!musicStore.getIsPlayState" @click="onPlay"><i
                class="iconfont icon-zanting"></i></n-icon>
        <n-icon ref="pauseRef" v-else @click="onPause"><i class="iconfont icon-bofangzhong"></i></n-icon>
        <n-icon @click="nextSong"><i class="iconfont icon-xiayiqu"></i></n-icon>
    </div>
    <div class="music-info" v-if="musicStore.getCurrentSong?.id">
        <div class="ablum-pic" @click="lyricFlag = !lyricFlag">
            <img :src="musicStore.getCurrentSong?.albumPic">
            <ChevronUpIcon class="up-icon"></ChevronUpIcon>
        </div>
        <div class="song-singer">
            <div class="name">{{ musicStore.getCurrentSong?.name }}</div>
            <div class="singer">{{ musicStore.getCurrentSong?.artists }}</div>
        </div>
    </div>
    <div class="progress">
        <n-text style="margin-right: 5px;">{{ audioCurrent }}</n-text>
        <n-slider :tooltip="false" v-model:value="playProgress" :step="0.1" :on-update:value="sliceHandle">
            <template #thumb>
                <n-icon :size="18" :component="PawIcon" />
            </template>
        </n-slider>
        <n-text style="margin-left: 5px;">{{ audioDuration ? transTime(audioDuration - currentTime) : '' }}</n-text>
    </div>
    <div class="player-util">
        <n-icon><i class="iconfont icon-24gl-volumeHigh"></i></n-icon>
        <n-icon @click="updatecrtFlag"><i class="iconfont icon-bofangliebiao"></i></n-icon>
    </div>
    <audio ref="audioRef" @ended="endedHandel" :src="musicStore.getCurrentSong?.url ? musicStore.getCurrentSong?.url : ''"></audio>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onBeforeUnmount,defineProps,defineEmits } from 'vue';
import { icon } from '../../../../plugins'
import { useMusicStore } from '../../../../store/modules/musicStore/musicStore';
import { storeToRefs } from 'pinia';


const musicStore = useMusicStore()
const { PawIcon, ChevronUpIcon } = icon.ionicons5
// 音频
const audioRef = ref(); // 音频标签对象
const audioDuration = ref(); // 音频总时长
const audioCurrent = ref(''); // 音频当前播放时间
const playProgress = ref(0); // 音频播放进度
const timeInterval = ref(); // 获取音频播放进度定时器
const currentTime = ref(0); // 当前时间，没有格式化 36000ms
const playRef = ref() // 播放标签
const pauseRef = ref() // 暂停标签
const lyricFlag = ref(false) // 歌词 控制flag
const props = defineProps(['crtListFlag'])
const emits = defineEmits(['updatecrtFlag'])


const { currentSong: url } = storeToRefs(musicStore)
watch(url, async function () {
    pauseRef.value?.$.vnode.el?.click()
    await nextTick()
    playRef.value?.$.vnode.el?.click()
})
onMounted(() => {
    window.addEventListener('beforeunload', () => {
        musicStore.changeIsPlayState(false)
    })
})
onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', () => { });
})


// 音频加载完毕的回调
const endedHandel = ()=>{
    if(musicStore.getPlayList?.length === 1){
        audioRef.value.currentTime = 0
        audioRef.value.play()
    }
    nextSong()
}

// 播放
const onPlay = () => {
    if (musicStore.getCurrentSong === undefined || musicStore.getCurrentSong == null || musicStore.getCurrentSong.id === undefined) return

    // 音频播放完后，重新播放
    if (playProgress.value === 100) audioRef.value.currentTime = 0;

    audioRef.value.play();
    // 更改播放状态
    musicStore.changeIsPlayState(true)
    audioDuration.value = musicStore.getCurrentSong?.time / 1000

    timeInterval.value = setInterval(() => {
        try {
            if (musicStore.getIsPlayState === false) clearInterval(timeInterval.value);
            currentTime.value = audioRef.value.currentTime
            audioCurrent.value = transTime(audioRef.value.currentTime);
            if (audioDuration.value == null) {
                playProgress.value = 0;
            } else {
                playProgress.value = (audioRef.value.currentTime / audioDuration.value) * 100;
            }
            if (playProgress.value === 100) onPause();
        } catch (e) {
            clearInterval(timeInterval.value);
        }

    }, 100);
}
// 暂停
const onPause = () => {
    audioRef.value.pause();
    // 更改播放状态
    musicStore.changeIsPlayState(false)
    clearInterval(timeInterval.value);
};
// 上一首
const prevSong = () => {
    // 从playList中找到当前歌曲的index，然后index-1 找到播放歌曲赋值给currentSong
    let playList = musicStore.getPlayList
    if (playList === undefined || playList?.length < 2) return
    let crtSong = musicStore.getCurrentSong
    let idx
    playList?.forEach((item, index) => {
        if (item.id === crtSong?.id) {
            idx = index
        }
    })
    // 如果是第一首
    if (idx === 0) {
        musicStore.updateCurrentSong(playList[playList?.length - 1])
        return
    } else {
        musicStore.updateCurrentSong(playList[idx - 1])
    }
}
// 下一首
const nextSong = () => {
    // 从playList中找到当前歌曲的index，然后index+1 找到播放歌曲赋值给currentSong
    let playList = musicStore.getPlayList
    if (playList === undefined || playList?.length < 2) return
    let crtSong = musicStore.getCurrentSong
    let idx
    playList?.forEach((item, index) => {
        if (item.id === crtSong?.id) {
            idx = index
        }
    })
    // 如果是最后一首
    if (idx === (playList.length - 1)) {
        musicStore.updateCurrentSong(playList[0])
        return
    } else {
        musicStore.updateCurrentSong(playList[idx + 1])
    }
}

const updatecrtFlag = ()=>{
    emits('updatecrtFlag', !props.crtListFlag)
}


//暴露state和play方法
defineExpose({
    currentTime,
    lyricFlag
});


// 根据拖动进度条，更改当前播放时间
const sliceHandle = (value) => {
    playProgress.value = value
    audioRef.value.currentTime = (playProgress.value / 100) * audioRef.value.duration
}
// 音频播放时间换算
const transTime = (value: number) => {
    let time = "";
    let h = parseInt(String(value / 3600));
    value %= 3600;
    let m = parseInt(String(value / 60));
    let s = parseInt(String(value % 60));
    if (h > 0) {
        time = formatTime(h + ":" + m + ":" + s);
    } else {
        time = formatTime(m + ":" + s);
    }
    return time;
};
// 格式化时间显示，补零对齐
const formatTime = (value: string) => {
    let time = "";
    let s = value.split(":");
    let i = 0;
    for (; i < s.length - 1; i++) {
        time += s[i].length == 1 ? "0" + s[i] : s[i];
        time += ":";
    }
    time += s[i].length == 1 ? "0" + s[i] : s[i];

    return time;
};
</script>

<style lang="scss" scoped>
.player-btn-wrp {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .n-icon {
        margin: 5px;
    }
}

.music-info {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 55px;
    box-sizing: border-box;
    padding: 5px;

    .ablum-pic {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 3px;
        cursor: pointer;
        position: relative;

        img {
            width: 50px;
            height: 50px;
        }

        .up-icon {
            width: 30px;
            position: absolute;
            color: rgb(190, 190, 190);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
        }
    }

    .ablum-pic:hover::before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        /*最后一个参数是半透明度，可以透过调整0-1的数值，调整到满意的透明度*/
        background-color: rgba(0, 0, 0, 0.5);
    }

    .ablum-pic:hover {
        .up-icon {
            opacity: 1;
        }
    }

    .song-singer {
        padding-left: 5px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

        .name {
            font-size: 15px;
        }

        .singer {
            font-size: 14px;
        }
    }
}

i {
    font-size: 30px;
    cursor: pointer;
}

.progress {
    width: 50%;
    display: flex;
    margin: 0 auto;
    margin-top: -8px;
}

.player-util{
    position: absolute;
    right: 5px;
    top:5px;
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    .n-icon{
        margin-right: 10px;
    }
    i{
        font-size: 20px;
    }
}

.n-text {
    color: #a3a3a3;
    margin-top: -3px;
}
</style>