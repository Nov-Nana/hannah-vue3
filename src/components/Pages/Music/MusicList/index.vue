<template>
    <n-tabs type="line" animated size="small">
        <n-tab-pane name="songs" tab="单曲">
            <n-space vertical>
                <n-data-table size="small" striped :bordered="false" :columns="songColumns" :data="musicStore.getSearchList"
                    :row-props="rowProps" />
                <n-pagination @update:page="changePage" :page="musicStore.getSearch?.page"
                    :page-count="musicStore.getSearchPageCount" />
            </n-space>
        </n-tab-pane>
    </n-tabs>
</template>

<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import { useMusicStore } from '../../../../store/modules/musicStore/musicStore'
import { getSongUrlApi, getLyricApi, getSongDetail } from '../../../../api/project/music'
import { parseLyric } from '../../../../utils/music'

const musicStore = useMusicStore()
// 歌曲数据列表
type songDataType = {
    key: number,
    songTitle: string,
    singer: string,
    album: string,
    albumId: number,
    duration: string
}
// 歌曲列表列头
const songColumns = ref([
    {
        title: '',
        key: 'idx',
        width: 50
    },
    {
        title: '音乐标题',
        key: 'songTitle',
    },
    {
        title: '歌手',
        key: 'singer',
        width: 200
    },
    {
        title: '专辑',
        key: 'album',
        width: 200
    }, {
        title: '时长',
        key: 'duration',
        minWidth: 100
    }
])

onUpdated(() => {

})

// 分页  事件
function changePage(page: number) {
    const k = musicStore.getSearch?.keyword
    const t = musicStore.getSearch?.type
    let param = {
        keyword: k,// 歌曲
        type: t, // 类型
        page: page
    }
    //@ts-ignore
    musicStore.doSearch(param)
}
// 选中单元  事件
const rowProps = (row: songDataType) => {
    return {
        style: 'cursor: pointer;',
        ondblclick: async () => {
            // 如果播放列表里有当前这首歌，则播放它
            let flag = false
            const playList = musicStore.getPlayList
            playList?.forEach(song => {
                // 如果存在这首歌，则播放它，将当前播放歌曲改为它
                if (song.id === row.key) {
                    musicStore.updateCurrentSong(song)
                    flag = true
                }
            })
            if (!flag) {
                let songUrl = ''
                let lyric = []
                let time = 0
                let pic = ''
                // 获取点击歌曲的url资源 以及 歌词
                await getSongUrlApi(row.key).then(res => {
                    songUrl = res.data[0].url
                    time = res.data[0].time
                })
                await getLyricApi(row.key).then(res => {
                    //@ts-ignore
                    // 处理歌词
                    lyric = parseLyric(res?.lrc.lyric)
                })
                await getSongDetail(row.key).then(res => {
                    //@ts-ignore
                    pic = res.songs[0].al.picUrl
                })
                let song = {
                    id: row.key,
                    url: songUrl,
                    time: time,
                    lyric: lyric,
                    albumPic: pic,
                    name: row.songTitle,
                    artists: row.singer,
                    album: row.album
                }
                // 更新当前播放音乐
                musicStore.updateCurrentSong(song)
                // 添加到播放列表
                musicStore.addPlayList(song)
            }

        }
    }
}


</script>

<style lang="scss" scoped></style>