<template>
    <div class="crtList-header">
        <p>当前播放</p>
        <div class="count-btn">
            <span class="count">总 {{ musicStore.getPlayList?.length }} 首</span>
            <span class="clear-btn" @click="clearPlayList">清空列表</span>
        </div>
    </div>
    <div class="crtList-list-wrp">
        <n-scrollbar style="max-height: 100%">
            <p v-if="musicStore.getPlayList && musicStore.getPlayList?.length > 0" :class="{ active: musicStore.getCurrentSong?.id === item.id }" v-for="item in musicStore.getPlayList">
                <span>{{ item.name }}</span>
                <span>{{ item.artists }}</span>
                <span>{{ getDuration(item.time) }}</span>
            </p>
            <div v-else class="empty-list">
                <div>你还没有添加任何歌曲！</div>
                <div >去首页<router-link class="go-recommend" to="/music/recommend">发现音乐</router-link></div>
            </div>

        </n-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { useMusicStore } from '../../../../store/modules/musicStore/musicStore';
import { getDuration } from '../../../../utils/music'
const musicStore = useMusicStore()

const clearPlayList = ()=>{
    musicStore.clearPlayList()
}
</script>

<style lang="scss" scoped>
$text-color: rgba(175, 173, 173, 0.881);

.crtList-header {
    width: 100%;
    height: 13%;
    border-bottom: 1px solid rgb(214, 214, 214);
    box-sizing: border-box;
    padding: 0 20px;


    p {
        font-size: 20px;
        font-weight: bolder;
    }

    .count-btn {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        margin-top: 5px;

        .count {
            color: $text-color;
        }

        .clear-btn {
            color: rgba(77, 95, 233, 0.959);
            cursor: pointer;
        }

        .clear-btn:hover {
            color: rgba(52, 72, 228, 0.959);
        }
    }
}

.crtList-list-wrp {
    width: 100%;
    height: 87%;
    overflow: hidden;
    user-select: none;
    box-sizing: border-box;

    p {
        position: relative;
        width: 100%;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        color: rgba(23, 23, 23, 0.751);
        padding: 5px;
        box-sizing: border-box;
    }

    p.active {
        span:nth-child(3) {
            color: $text-color;
        }

        color: red;
    }

    p::before {
        content: '=';
        position: absolute;
        transform: rotateZ(90deg);
        font-size: 13px;
        font-weight: bold;
    }


    p:hover {
        background-color: rgba(225, 225, 225, 0.5);
    }

    p:nth-child(even) {
        background-color: rgba(225, 225, 225, 0.26);
    }

    span {
        box-sizing: border-box;
        text-wrap: nowrap;
        overflow: hidden;
        padding: 0 10px;
    }

    p>span:nth-child(1) {
        width: 60%;
        padding-left: 15px;
    }

    p>span:nth-child(2) {
        width: 20%;
    }

    p>span:nth-child(3) {
        width: 20%;
        color: $text-color;
    }

    .empty-list{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: $--color-text-3;
        div:nth-child(1){
            padding: 10px 0;
            font-size: 16px;
        }
        div:nth-child(2){
            font-size: 12px;
        }
        .go-recommend{
            font-size: 15px;
            color: $--color-text-2;
        }
        .go-recommend:hover{
            color: $--color-text-1;
        }
    }
}
</style>