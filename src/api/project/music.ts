import { get } from "../http";

/**
 * 搜索
 * @param {string} keywords  关键词
 * @param {number} limit 返回数量 默认为10
 * @param {number} offset 偏移数量 用于分页: (页数-1) * limit ,默认为0
 * @param {1 | 10 | 100 | 1000 | 1002 | 1004 | 1006 | 1009 | 1014 |1018 | 2000} type 搜索类型 默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
 * @returns 
 */
export const searchSongs = (keywords: string, limit?: number, offset?: number, type?: number) => {
    // 搜索参数
    const params = {
        keywords,
        limit,
        offset,
        type
    }
    return get(`/search`, params)
}

/**
 * 默认搜索关键词
 * @returns {Promise} 
 */
export const searchDefault = () => {
    return get('/search/default')
}

/**
 * 热搜列表(详细)
 * @returns {Promise} 
 */
export const searchHotDetail = () => {
    return get('/search/hot/detail')
}

/**
 * 搜索建议
 * @param {String} keywords 关键词
 * @param {'mobile'} type 移动端数据
 * @returns 
 */
export const searchSuggest = (keywords: string) => {
    return get(`/search/suggest?keywords=${keywords}`)
}



// 分页
export const pageMusic = (param: { keyword: string, limit: number, offset: number, type?: number }) => {
    const { keyword, limit, offset, type } = param
    return get(`/search?keywords=${keyword}&limit=${limit}&offset=${offset}&type=${type}`)
}
// 获取歌曲地址
export const getSongUrlApi = (id: number) => {
    return get(`/song/url/v1?id=${id}&level=standard`)
}

// 获取歌词
export const getLyricApi = (id: number) => {
    return get(`/lyric?id=${id}`)
}

// 获取歌曲详情
export const getSongDetail = (id: number) => {
    return get(`/song/detail?ids=${id}`)
}

// 获取轮播图
export const getBanner = () => {
    return get(`/banner`)
}

/**
 * ========歌单=========
 */
// 获取热门歌单分类
export const getPlayListHot = () => {
    return get('/playlist/hot')
}
// 获取歌单分类
export const getPlayCatList = () => {
    return get('/playlist/catlist')

}
// 精品歌单分类
export const getHighQualityCat = ()=>{
    return get('/playlist/highquality/tags')
}
/**
 * 说明 : 调用此接口 , 可获取精品歌单
 * 可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)
 * limit: 取出歌单数量 , 默认为 50
 * before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
 * @param cat 
 * @returns 
 */
export const getHighQualityList = (params) => {
    return get(`/top/playlist/highquality`,params)
}

// 推荐歌单 /personalized?limit=1
export const getPersonalized=()=>{
    return get('/personalized?limit=10')
}

// 歌单 网友精选碟
export const getTopPlayList = (params)=>{
    return get(`/top/playlist`,params)
}

// 歌单详情
export const getPlayListDetail = (id)=>{
    return get(`/playlist/detail?id=${id}`)
}