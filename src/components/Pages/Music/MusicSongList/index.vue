<template>
    <div class="song-list" @click="toSongListDetail">
        <div class="pic-creator">
            <img v-lazy="props.songlist?.coverImgUrl || props.songlist?.picUrl">
            <div class="play-count"><i class="iconfont icon-bofang101"></i>{{ playCount }}</div>
            <div class="creater" v-if="props.songlist?.creator">
                <slot name="creater">
                    <i class="iconfont icon-ren111"></i>{{ props.songlist.creator.nickname }}
                </slot>
                
            </div>
            <i class="iconfont icon-bofang clickI"></i>
        </div>
        <div class="song-list-name">
            <slot name="name">
                {{ props.songlist.name }}
            </slot>

        </div>
    </div>
    <slot name="info">

    </slot>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { PageEnum } from "../../../../enums/pageEnum";

const router = useRouter()
const props = defineProps(['songlist'])
const playCount = computed(() => {
    let result = props.songlist.playCount
    // 如果大于十万
    if (props.songlist.playCount / 100000) {
        result = Math.floor(props.songlist.playCount / 10000) + '万'
        return result
    }
    return result
})
// 歌单详情页
const toSongListDetail = ()=>{
    const listId = props.songlist.id
    router.push({ path: PageEnum.MUSIC_SONGLIST_DETAIL, query: { id: listId} })
}
</script>

<style lang='scss' scoped>
.song-list {
    width: 17%;
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;

    .pic-creator {
        position: relative;

        img {
            width: 100%;
            object-fit: cover;
            border-radius: 5px;
        }

        .play-count {
            position: absolute;
            right: 5px;
            top: 2px;
            color: white;
            font-size: 12px;
        }

        .creater {
            position: absolute;
            bottom: 5px;
            left: 5px;
            color: white;
            font-size: 12px;
        }

        .clickI {
            font-size: 40px;
            position: absolute;
            bottom: 5px;
            right: 5px;
            opacity: 0;
            color: white;
            transition: all .3s;
        }
    }

}

.song-list:hover {
    .clickI {
        opacity: 1;
    }
}
</style>