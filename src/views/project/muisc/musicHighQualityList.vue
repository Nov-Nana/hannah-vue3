<!-- 精品歌单 -->
<template>
    <div class="go-highquality-songlist" @click="menuFlag = false">
        <div class="highquality-header">
            <div class="header-title">
                <span>精品歌单</span>
                <a href="https://music.163.com/#/topic?id=202001" target="_blank" rel="noopener noreferrer">
                    <i class="iconfont icon-wenhao-xianxingyuankuang"></i>
                </a>
            </div>
            <div class="header-list" @click="menuFlag = !menuFlag" @click.stop>
                <i class="iconfont icon-funnelloudou"></i>
                {{ crtCat }}
            </div>
            <div class="songlist-dropdown" v-show="menuFlag">
                <div class="all-songlist"><span :class="{ active: crtCat === '全部歌单' }" @click="clickAllSongList">全部歌单</span>
                </div>
                <div class="songlist-menu">
                    <span @click="selectQualityList(cat)" v-for="cat in highQualityCat" :key="cat.id"
                        :class="{ active: crtCat === cat.name }">{{ cat.name
                        }}</span>
                </div>
            </div>
        </div>
        <div class="highquality-list">
            <div class="song-list-wrp">
                <template v-for="songlist in qualityList">
                    <MusicSongList :songlist="songlist">
                        <template #creater><span></span></template>
                        <template #name><span></span></template>
                        <template #info>
                            <div class="songlist-info">
                                <p class="name">{{ songlist.name }}</p>
                                <p class="creater">by {{ songlist.creator.nickname }}</p>
                                <div>
                                    <span class="tag">{{ songlist.tag }}</span>
                                    <span class="copywrite">{{ songlist.copywriter }}</span>
                                </div>
                            </div>
                        </template>
                    </MusicSongList>
                </template>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { getHighQualityCat, getHighQualityList } from '../../../api/project/music'
import { onMounted, ref } from 'vue'
import { MusicSongList } from '../../../components/Pages/Music/MusicSongList'
import { useRoute } from 'vue-router'
onMounted(() => {
    crtCat.value = route.query.cat ? route.query.cat + "" : '全部歌单'
    // 获取精品歌单菜单
    getHighQualityCat().then(res => {
        //@ts-ignore
        highQualityCat.value = res.tags
    })
    // 获取精品歌单列表
    getSongList()
})
const qualityList = ref()
const highQualityCat = ref()
const crtCat = ref('全部歌单')
const menuFlag = ref(false)
// const lastUpdatTime = ref()
const route = useRoute()

const selectQualityList = (item) => {
    crtCat.value = item.name
    getSongList()
}
const clickAllSongList = () => {
    crtCat.value = '全部歌单'
    getSongList()
}
const getSongList = () => {

    let params = {
        cat: crtCat.value ? crtCat.value : undefined,
        limit: undefined,
        before: undefined
    }
    if (crtCat.value === '全部歌单') params.cat = undefined
    getHighQualityList(params).then(res => {
        //@ts-ignore
        qualityList.value = res.playlists
    })
}
</script>

<style lang="scss" scoped>
@include go(highquality-songlist) {
    padding: 15px;

    .highquality-header {
        display: flex;
        justify-content: space-between;
        position: relative;

        .header-title {
            font-size: 20px;
            font-weight: bold;

            span {
                margin-right: 5px;
            }

            a,
            a:link,
            a:visited,
            a:hover,
            a:active {
                text-decoration: none;
                // color: inherit;
            }

            a {
                color: black;
                font-weight: 100;

                i {
                    font-weight: 100;
                }

                i:hover {
                    font-weight: bold;
                }
            }


        }

        .header-list {
            border: 1px solid rgba(171, 171, 171, 0.662);
            font-size: 12px;
            height: 25px;
            box-sizing: border-box;
            padding: 2px 15px;
            border-radius: 50px;
            cursor: pointer;

            i {
                font-size: 10px;
            }

        }

        .header-list:hover {
            background-color: rgba($color: #a0a0a0, $alpha: 0.2);
        }

        .songlist-dropdown {
            position: absolute;
            right: 5px;
            top: 30px;
            width: 50%;
            padding-bottom: 30px;
            background-color: white;
            @include background-image('background-image');
            box-shadow: 0 0 9px 1px rgba(99, 99, 99, .5);
            z-index: 12;

            span {
                cursor: pointer;
                font-size: 13px;
            }

            span:hover {
                color: red;
            }

            span.active {
                background-color: rgba(255, 137, 137, 0.151);
                border-radius: 50px;
                color: red;
            }

            .all-songlist {
                span {
                    font-size: 15px;
                    padding: 5px 10px;
                }

                padding: 18px;
                border-bottom: 1px solid rgba(99, 99, 99, 0.2);
            }

            .songlist-menu {
                padding: 18px;
                display: flex;
                flex-wrap: wrap;

                span {
                    text-align: center;
                    width: 18%;
                    margin-right: 5px;
                    margin-bottom: 20px;
                    text-wrap: nowrap;
                }
            }
        }
    }

    .highquality-list {
        width: 95%;
        padding: 18px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .song-list-wrp {
            display: flex;
            width: 100%;
            flex-wrap: wrap;


            .song-list {
                width: 34%;
            }
        }

        .songlist-info {
            width: 30%;
            padding-left: 5px;

            .name {
                margin: 20px 0;
            }

            .creater {
                color: rgb(153, 153, 153);
                font-size: 13px;
                margin: 10px 0;
            }

            .tag {
                font-size: 10px;
                border: 1px solid red;
                color: red;
                padding: 0 2px;
            }

            .copywrite {
                font-size: 11px;
                color: rgb(200, 200, 200);
                text-overflow: ellipsis;
                padding-right: 5px;
                text-wrap: nowrap;
            }
        }
    }
}
</style>