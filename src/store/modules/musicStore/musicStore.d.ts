export type lyricType = {
    time: number,
    word:string
}
export type SongType = {
    id: number,
    url: string,
    time: number,
    lyric: lyricType[],
    albumPic: string,
    name: string,
    artists:string,
    album:string
}
export type SearchType = {
    keyword: string,
    type: number,
    page: number
}
export type searchListType = {
    idx: string,
    key: number,
    songTitle: string,
    singer: string,
    album: string,
    albumId: number,
    duration: string
}
export type bannerType = {
    imageUrl: string,
    typeTitle: string,
    titleColor: string,
    targetId: number
}

export interface MusicStoreType {
    currentSong: SongType |undefined,  // 当前播放歌曲
    playList: SongType[] |undefined,  // 播放列表
    isPlayState: boolean,  // 播放状态，true 在播放，false 暂停
    search: SearchType, // 搜索关键词
    searchList: searchListType[] |undefined,// 搜索列表,
    searchPageCount: number, // 搜索歌曲总数
    banner: bannerType[], // 轮播图数据

}
