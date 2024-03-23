<template>
    <div class="go-songlist-detail">
        <div class="detail-header">
            <div class="header-pic">
                <img v-lazy="songListDetail.coverImgUrl">
            </div>
            <div class="header-info">
                <div class="first-floor">
                    <span class="hight-quality-tag">{{ songListDetail?.highQuality ? '精品歌单' : '歌单' }}</span>
                    <span class="name">{{ songListDetail?.name }}</span>
                </div>
                <div class="second-floor">
                    <img class="avator" :src="songListDetail?.creator.avatarUrl">
                    <span class="creator">{{ songListDetail?.creator.nickname }}</span>
                    <span class="createTime">{{ transToTime(songListDetail?.createTime).slice(0, 10) }}</span>
                </div>
                <div class="third-floor">
                    <div class="play-all-btn">
                        <span><i class="iconfont icon-bofang101"></i>播放全部
                            <i class="iconfont icon-jiahao_o jiahao"></i></span>

                    </div>
                </div>
                <div class="forth-floor">
                    <span v-if="tag">标签：</span><span>{{ tag }}</span>
                </div>
                <div class="fifth-floor">
                    <span class="song-count">歌曲：{{ songListDetail?.trackCount }}</span>
                    <span class="play-count">播放：{{ playCount }}</span>
                </div>
                <div class="sixth-floor">
                    <div ref="description" class="description">
                        简介：{{ songListDetail?.description }}
                    </div>
                    <div class="btn" @click="pickUpBtnHandler">
                        <i class="iconfont icon-fangxiang-xiangxia" v-if="isPickUp"></i>
                        <i class="iconfont icon-fangxiang-xiangshang" v-else></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-list"></div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, computed } from 'vue';
import { getPlayListDetail } from '../../../api/project/music'
import { transToTime } from '../../../utils/music'

const route = useRoute()
const songListDetail = ref({
    coverImgUrl: '',
    highQuality: false,
    name: '',
    creator: {
        avatarUrl: '',
        nickname: ''
    },
    createTime: 0,
    playCount: 0,
    tags: [],
    trackCount: 0,
    description: ''
})
const description = ref()
const isPickUp = ref(true)

onMounted(() => {
    getDetail()
})

const getDetail = () => {
    getPlayListDetail(route.query.id).then(res => {
        //@ts-ignore
        songListDetail.value = res.playlist
        console.log(songListDetail.value)
    })
}

const playCount = computed(() => {
    let result: number | string = songListDetail.value.playCount
    // 如果大于十万
    if (songListDetail.value.playCount / 100000) {
        result = Math.floor(songListDetail.value.playCount / 10000) + '万'
        return result
    }
    return result
})
const tag = computed(() => {
    let result = ''
    if (songListDetail.value.tags.length === 0) return result
    else {
        songListDetail.value.tags.forEach(tag => {
            result += tag + '/'
        })
    }
    result = result.slice(0, result.length - 1)
    return result
})


const pickUpBtnHandler = () => {
    if (isPickUp.value) {
        description.value.style.webkitLineClamp = 999
    } else {
        description.value.style.webkitLineClamp = 1
    }
    isPickUp.value = !isPickUp.value

}

</script>

<style lang='scss' scoped>
@include go(songlist-detail) {
    padding: 18px;

    .detail-header {
        width: 100%;
        display: flex;
        overflow: hidden;

        .header-pic {
            width: 200px;
            height: 200px;
            margin-right: 20px;

            img {
                width: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
        }

        .header-info {
            width: calc(100% - 250px);

            .first-floor {
                margin-bottom: 10px;

                .hight-quality-tag {
                    border: 1px solid red;
                    color: red;
                    padding: 1px 3px;
                    margin-right: 20px;
                }

                .name {
                    font-size: 20px;
                    font-weight: bold;
                }
            }

            .second-floor {
                display: flex;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    margin-right: 5px;
                }

                span {
                    font-size: 12px;
                    margin-right: 5px;
                }

                .creator {
                    color: rgb(80, 125, 175);
                }

                .createTime {
                    color: rgb(150, 150, 150);
                }
            }

            .third-floor {
                margin: 10px 0;

                .play-all-btn {
                    color: white;

                    span {
                        background-color: rgb(236, 65, 65);
                        padding: 8px 16px;
                        border-radius: 50px;

                        i {
                            margin: 0 5px;
                        }
                    }

                    span:hover {
                        cursor: pointer;
                        background-color: rgb(205, 50, 50);
                    }

                }
            }

            .forth-floor {
                color: rgb(150, 150, 150);
                font-size: 14px;
                margin: 5px 0;

                span {
                    cursor: pointer;
                    color: rgb(80, 125, 175);
                }
            }

            .fifth-floor {
                margin: 5px 0;
                color: rgb(150, 150, 150);

                span {
                    margin-right: 5px;
                }
            }

            .sixth-floor {
                display: flex;
                justify-content: space-between;
                width: 100%;

                .description {
                    width: 95%;
                    color: rgb(150, 150, 150);

                    // 实现多行溢出省略
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    word-break: break-all;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
}
</style>