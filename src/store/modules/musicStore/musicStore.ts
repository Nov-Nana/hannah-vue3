import { defineStore } from "pinia";
import { MusicStoreType, SongType, SearchType, searchListType, bannerType } from './musicStore.d'
import { setSessionStorage, getSessionStorage } from "../../../utils";
import { StorageEnum } from "../../../enums/storageEnum";
import { searchSongs, getBanner } from '../../../api/project/index'
import { parseSinger, getDuration, parseIndex } from '../../../utils/music'

const { GO_MUSIC_PROJECT } = StorageEnum
const storageMusic = getSessionStorage(GO_MUSIC_PROJECT)
export const useMusicStore = defineStore({
    id: 'usemusicStore',
    state: (): MusicStoreType => storageMusic || {
        currentSong: {},
        playList: [],
        isPlayState: false,
        search: {
            keyword: '',
            page: 1,
            type: 1
        },
        searchList: [],
        searchPageCount: 0,
        banner: []
    },
    getters: {
        getCurrentSong(): SongType | undefined {
            return this.currentSong
        },
        getPlayList(): SongType[] | undefined {
            return this.playList
        },
        getIsPlayState(): boolean {
            return this.isPlayState
        },
        getSearch(): SearchType | undefined {
            return this.search
        },
        getSearchList(): searchListType[] | undefined {
            return this.searchList
        },
        getSearchPageCount(): number {
            return this.searchPageCount
        },
        getBanner(): bannerType[] {
            return this.banner
        }
    },
    actions: {
        // 添加歌曲 到播放列表
        addPlayList(song: SongType): void {
            
            this.playList?.push(song)
            setSessionStorage(GO_MUSIC_PROJECT, this.$state)
        },
        // 删除歌曲 播放列表
        deletePlayList(id: number): void {
            this.playList = this.playList?.filter(item => {
                return item.id !== id
            })
            if (this.currentSong?.id === id) {
                this.isPlayState = false
                this.currentSong = undefined
            }
            setSessionStorage(GO_MUSIC_PROJECT, this.$state)
        },
        // 清空播放列表
        clearPlayList():void{
            this.playList = []
            this.currentSong = undefined
            setSessionStorage(GO_MUSIC_PROJECT, this.$state)
        },
        // 更改当前播放歌曲
        updateCurrentSong(song: SongType): void {
            this.currentSong = song
            setSessionStorage(GO_MUSIC_PROJECT, this.$state)
        },
        // 更改播放状态
        changeIsPlayState(value): void {
            this.isPlayState = value
            setSessionStorage(GO_MUSIC_PROJECT, this.$state)
        },
        // 去搜索
        doSearch(value: SearchType): void {
            this.search = value
            let offset = (value.page - 1) * 100
            searchSongs(value.keyword, 100, offset, value.type).then(res => {
                //@ts-ignore
                this.searchPageCount = Math.floor(res.result.songCount / 100) + 1
                let arr = []
                // @ts-ignore
                res.result.songs.forEach((song, index) => arr.push({
                    idx: parseIndex(index + 1),
                    key: song.id,
                    songTitle: song.name,
                    singer: parseSinger(song.artists),
                    album: song.album.name,
                    albumId: song.album.id,
                    duration: getDuration(song.duration)
                }))
                this.searchList = arr
                setSessionStorage(GO_MUSIC_PROJECT, this.$state)
            })
        },
        updateBanner(): void {
            getBanner().then(res => {
                let result = []
                // @ts-ignore
                res.banners.forEach(banner => result.push({
                    imageUrl: banner.imageUrl,
                    typeTitle: banner.typeTitle,
                    titleColor: banner.titleColor,
                    targetId: banner.targetId
                }))
                this.banner = result
                setSessionStorage(GO_MUSIC_PROJECT, this.$state)
            })
        }
    }
})