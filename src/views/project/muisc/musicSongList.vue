<template>
    <div class="go-music-song-list" @click="dropdownFlag = false">
        <div class="song-list-header-wrp" :style="{ backgroundImage: `url(${headerPlayList.coverImgUrl})` }">
            <div class="header-pic">
                <img :src="headerPlayList.coverImgUrl ? headerPlayList.coverImgUrl : ''">
            </div>
            <div class="header-text" @click="gotoQualityList">
                <div class="boutique-btn">
                    <span>👑</span>
                    精品歌单
                </div>
                <div class="list-desribe">{{ headerPlayList.name }}</div>
                <div class="list-sub-des">{{ headerPlayList.description }}</div>
            </div>
        </div>
        <div class="song-list-menu">
            <div class="all-song-list-dropdown-wrp">
                <div class="all-song-list-btn" @click.stop @click="dropdownFlag = !dropdownFlag">{{ crtPlayListcat }}<i
                        class="iconfont icon-fangxiang-xiangyou"></i></div>
                <div class="all-song-list-dropdown" @click.stop v-show="dropdownFlag">
                    <!-- 全部歌单 -->
                    <div class="all-menu-wrap" v-show="catListAll">
                        <div class="all-menu" @click="clickAllSongList" :class="{ active: crtPlayListcat === '全部歌单' }">{{ catListAll.name }}</div>
                    </div>
                    <!-- 分类 -->
                    <div class="menu-categoriess-wrp" v-for="item of catListCategory">
                        <div class="category-menu">
                            <i class="iconfont icon-wangluo" :class="iList[item]"></i>
                            <span>{{ item }}</span>
                        </div>
                        <div class="song-list-menus">
                            <div class="menu-item" @click="selectSongList(songlist)" v-for="songlist in catListSub[item]"
                                :key="songlist.id"><span :class="{ active: crtPlayListcat === songlist.name }">{{
                                    songlist.name }}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hot-list-menu-wrp">
                <div class="hot-catlist" :class="{ active: crtPlayListcat === playlist.name }"
                    @click="selectSongList(playlist)" v-for="playlist in hotPlayList" :key="playlist.id">{{ playlist.name }}
                </div>
            </div>
        </div>
        <div class="song-list-wrp">
            <template v-for="songlist in crtPlayLlist">
                <MusicSongList :songlist="songlist"></MusicSongList>
            </template>
            <div style="width: 20%; height: 0" v-for="n in 10" :key="n"></div>
            <n-pagination @update:page="changePage" v-model:page="page" :page-count="pageCount" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { getPlayListHot, getPlayCatList, getTopPlayList } from '../../../api/project/music';
import { onMounted, ref, onBeforeUpdate, watch } from 'vue';
import { MusicSongList } from '../../../components/Pages/Music/MusicSongList'
import {useRouter} from 'vue-router'
import { PageEnum } from '../../../enums/pageEnum';

onMounted(() => {
    // 获取热门歌单分类
    getPlayListHot().then((res) => {
        // @ts-ignore
        hotPlayList.value = res.tags
    })
    // 获取歌单分类
    getPlayCatList().then(res => {
        //@ts-ignore
        const { all, sub, categories } = res
        catListAll.value = all
        catListCategory.value = categories
        // 处理分类歌单列表
        catListSub.value = subHandle(sub)
    })
    // 获取精品歌单
    getTopList()
})
onBeforeUpdate(() => {
    watch(catListAll, (value) => {
        catListAll.value = value
    })
})

const router = useRouter()
const hotPlayList = ref() // 热门歌单列表
const catListAll = ref({ // 全部歌单
    name: "",
})
const catListSub = ref() // 分类歌单列表
const catListCategory = ref() // 分类歌单类型
const iList = { // 歌单icon标签
    '语种': 'icon-wangluo',
    '风格': 'icon-iconfontfengge',
    '场景': 'icon-kafei',
    '情感': 'icon-xiaolianxiaolian',
    '主题': 'icon-zhuti'
}
const crtPlayListcat = ref('全部歌单') // 当前歌单分类
const dropdownFlag = ref(false) // 歌单下拉菜单标志
const crtPlayLlist = ref() // 当前歌单列表
const headerPlayList = ref({ // 歌单页面头部
    coverImgUrl: '',
    name: '',
    description: ''
})
const page = ref(1) // 分页
const pageCount = ref(0)
const offset = ref(0)

// 歌单分类项处理
const subHandle = (list) => {
    let result = { '语种': [], '风格': [], '场景': [], '情感': [], '主题': [] }
    list.forEach((item) => {
        if (item.category === 0) {
            //@ts-ignore
            result['语种'].push(item)
        } else if (item.category === 1) {
            //@ts-ignore
            result['风格'].push(item)
        } else if (item.category === 2) {
            //@ts-ignore
            result['场景'].push(item)
        } else if (item.category === 3) {
            //@ts-ignore
            result['情感'].push(item)
        } else {
            //@ts-ignore
            result['主题'].push(item)
        }
    })
    return result
}
// 选择歌单类型
const selectSongList = (value) => {
    const { name } = value
    crtPlayListcat.value = name
    getTopList()
}
// 全部歌单
const clickAllSongList = ()=>{
    crtPlayListcat.value = '全部歌单'
    getTopList()
}
// 分页
const changePage = (value) => {
    offset.value = (value - 1) * 50
    getTopList()
}
// 获取精品歌单
const getTopList = () => {
    // 搜索参数
    const params = {
        cat: crtPlayListcat.value === '全部歌单' ? undefined : crtPlayListcat.value,
        limit: undefined,
        offset: offset.value
    }
    // 获取精品歌单
    getTopPlayList(params).then(res => {
        //@ts-ignore
        crtPlayLlist.value = res.playlists
        headerPlayList.value = crtPlayLlist.value[0]
        headerPlayList.value.description = headerPlayList.value.description.split('\n')[0]
        //@ts-ignore
        pageCount.value = Math.floor(res.total / 50) + 1
    })
}

// 跳转到精品歌单
const gotoQualityList = ()=>{
    router.push({ path: PageEnum.MUSIC_QUALITYSONGLIST, query: {cat: crtPlayListcat.value} })
}
</script>

<style lang="scss" scoped>
@include go(music-song-list) {
    width: 100%;
    user-select: none;
    padding-bottom: 40px;

    .song-list-header-wrp {
        position: relative;
        height: 215px;
        box-sizing: border-box;
        width: 95%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px;
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin: 0 auto;

        .header-pic {
            width: 180px;
            height: 180px;
            border-radius: 5px;
            background-color: salmon;
            margin-right: 13px;
            z-index: 11;

            img {
                width: 180px;
                height: 180px;
                object-fit: contain;
            }
        }

        .header-text {
            display: flex;
            flex-direction: column;
            z-index: 11;
            cursor: pointer;

            .boutique-btn {
                width: 128px;
                height: 40px;
                box-sizing: border-box;
                border: 1px solid rgb(231, 170, 90);
                border-radius: 50px;
                color: rgb(231, 170, 90);
                text-align: center;
                line-height: 40px;
                margin-bottom: 30px;
            }

            .list-desribe {
                color: white;
                font-size: 15px;
            }

            .list-sub-des {
                font-size: 13px;
                color: rgb(200, 200, 200);
            }
        }
    }

    .song-list-header-wrp::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        backdrop-filter: blur(100px);
    }

    .song-list-menu {
        width: 95%;
        display: flex;
        justify-content: space-between;
        padding: 2px 18px;
        margin-top: 5px;

        .all-song-list-dropdown-wrp {
            position: relative;

            .all-song-list-btn {
                width: 130px;
                height: 40px;
                border-radius: 50px;
                box-sizing: border-box;
                text-align: center;
                line-height: 40px;
                border: 1px solid rgb(217, 217, 217);
                cursor: pointer;

                i {
                    margin-left: 10px;
                }
            }

            .all-song-list-btn:hover {
                background-color: rgb(242, 242, 242);
            }


            .all-song-list-dropdown {
                position: absolute;
                top: 40px;
                width: 700px;
                background-color: white;
                @include background-image('background-image');
                box-shadow: 0 0 9px 1px rgba(99, 99, 99, .5);
                z-index: 11;

                .all-menu-wrap {
                    width: 100%;
                    height: 70px;
                    border-bottom: 1px solid rgba(99, 99, 99, 0.2);
                    box-sizing: border-box;
                    padding: 15px 20px;

                    .all-menu {
                        width: 105px;
                        height: 40px;
                        box-sizing: border-box;
                        text-align: center;
                        line-height: 40px;
                    }
                }

                .menu-categoriess-wrp {
                    padding: 10px 30px;
                    display: flex;
                    font-size: 13px;

                    .category-menu {
                        width: 130px;
                        height: 45px;
                        color: rgba(50, 50, 50, 0.5);
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 25px;
                            margin-right: 10px;

                        }
                    }

                    .song-list-menus {
                        width: calc(100% - 130px);
                        line-height: 45px;
                        display: flex;
                        flex-wrap: wrap;

                        .menu-item {
                            width: calc(20%);
                            text-wrap: nowrap;
                            cursor: pointer;


                            span {
                                padding: 8px 16px;

                            }
                        }

                        .menu-item:hover {
                            color: red;
                        }

                        span.active {
                            background-color: rgba(255, 137, 137, 0.151);
                            border-radius: 50px;
                            color: red;
                        }
                    }


                }
            }

        }



        .hot-list-menu-wrp {
            padding-top: 15px;
            display: flex;

            .hot-catlist {
                font-size: 13px;
                color: rgb(99, 99, 99);
                padding: 1px 12px;
                border-radius: 20px;
                user-select: none;
            }

            .hot-catlist:hover {
                color: rgb(50, 50, 50);
            }

            .hot-catlist.active {
                color: red;
            }
        }

    }

    .active {
        background-color: rgba(255, 137, 137, 0.151);
        border-radius: 50px;
        color: red;
    }

    .song-list-wrp {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 18px;
    }
}
</style>