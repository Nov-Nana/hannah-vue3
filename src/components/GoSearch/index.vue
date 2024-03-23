<template>
    <div class="go-search">
        <n-dropdown :menu-props="MenuProps" trigger="click" :options="options" @select="handleSelect">
            <n-input size="small" :on-input="inputHandle" @keyup.enter="search" v-model:value.trim="searchValue" round
                clearable :placeholder="$t('music.placeholder')">
                <template #prefix>
                    <n-icon size="20" depth="2" :component="SearchIcon"></n-icon>
                </template>
            </n-input>
        </n-dropdown>
    </div>
</template>

<script setup lang="ts">
import { ref, h, onBeforeUpdate, onMounted, onBeforeMount } from 'vue'
import { icon } from '../../plugins'
import { isNull, isUndefined } from 'lodash';
import { NIcon } from 'naive-ui'
import { searchHotDetail, searchSuggest } from '../../api/project'
import { debounce } from '../../utils'
import { MuiscEnum } from '../../enums/musicEnum'
import { useMusicStore } from '../../store/modules/musicStore/musicStore.ts'
import { useRouter, useRoute } from 'vue-router';
// import {debounceRef} from '../../utils/music'

const router = useRouter()
const route = useRoute()
const musicStore = useMusicStore()
// const { search } = storeToRefs(musicStore)
const t = window['$t']
const { SearchIcon } = icon.ionicons5 // 搜索图标
const emits = defineEmits(['searchHandle', 'getSongHandle'])
const hotSongList = ref([]) // 热搜列表
const suggestList = ref([]) // 搜索建议表
const searchValue = ref('') // 搜索内容
const options = ref([]) // 下拉菜单选项
const MenuProps = () => { // 下拉菜单 props设置
    return {
        style: {
            maxHeight: '300px',
            overflow: 'auto',
            minWidth: '300px'
        }
    }
}
const hotOptions = ref([ // 下拉热搜菜单选项
    {
        render: () => {
            return h('div', {
                style: 'fontSize: 14px;color: grey;padding: 0 30px',
            }, { default: () => '热搜榜' })
        },
        key: 'topSearch',
        type: 'render',
        meta: {
            type: MuiscEnum.SONG
        }
    }
])

const suggestOptions = ref([// 下拉搜索建议选项
    {
        type: 'render',
        key: 'guess',
        render: () => {
            return h('div', {
                style: 'fontSize: 13px;color: grey;padding: 0 25px;',
            }, [
                h('span', {
                    style: 'font-size:15px;margin-left:18px'
                }, { default: () => '猜你想搜' })
            ])
        },
        meta: {
            type: 0
        }
    }
])
const type = ref(1) // 搜索类型

// 搜索
const search = () => {
    // 如果搜索栏为空则不做搜索
    if (isNull(searchValue.value) || isUndefined(searchValue.value) || searchValue.value === '') return
    let param = {
        keyword: searchValue.value,// 歌曲
        type: type.value, // 类型
        page: 1
    }
    musicStore.doSearch(param)
    if (route.fullPath !== '/music/search') router.push({ path: '/music/search' })
}
// 下拉菜单点击
const handleSelect = (_key, option) => {
    console.log(option)
    // 热搜
    if (isNull(searchValue.value) || isUndefined(searchValue.value) || searchValue.value.length === 0 || searchValue.value === '') {
        searchValue.value = option.key
        search()
    }
    // 建议----
    // 单曲即播放
    if (option.meta.type === MuiscEnum.SONG) {
        emits('getSongHandle', option.key)
    }
    // 专辑
    if (option.meta.type === MuiscEnum.ALUMN) {
        console.log('专辑，搜索 {keyword，type} 搜索列表更换标签页')
    }
    // 歌手
    if (option.meta.type === MuiscEnum.ARTIST) {
        console.log('歌手，搜索 {keyword，type} 搜索列表更换标签页')
    }
}

// 处理热搜列表
const getHotOptions = () => {
    hotOptions.value.length = 1
    hotSongList.value.forEach((song, index) => {
        const { searchWord, score, iconUrl } = song
        hotOptions.value.push({
            //@ts-ignore
            label: () => {
                return h('div', {
                    style: {
                        width: '300px',
                        padding: '0 10px',
                        display: 'flex',
                    }
                }, [
                    h('span', {
                        style: {
                            fontSize: '14px',
                            marginRight: '20px',
                            color: index < 3 ? 'red' : 'grey',
                            display: 'block',
                            width: '20px',
                            textAlign: 'center'
                        }
                    }, `${index + 1}`),
                    h('span', {
                        style: {
                            fontSize: '12px',
                            color: 'grey',
                            marginRight: '5px',
                            fontWeight: index < 3 ? 'bolder' : 'normal'
                        }
                    }, `${searchWord}`),
                    h('span', {
                        style: {
                            fontSize: '12px',
                            color: 'grey'
                        }
                    }, `${score}`,
                    ), h('img', {
                        style: {
                            width: '15px',
                            display: iconUrl ? 'inline-block' : 'none',
                            objectFit: 'contain',
                            marginLeft: '5px'
                        },
                        src: iconUrl
                    })
                ]);
            },
            key: searchWord,
            disabled: false,
            meta: {
                type: MuiscEnum.SONG
            }
        })
        //@ts-ignore
        options.value = hotOptions.value
    });
}
// 处理建议列表
const getSuggestOptions = () => {
    //@ts-ignore
    const { albums, artists, songs } = suggestList.value
    suggestOptions.value.length = 1
    // 单曲
    if (songs && songs.length !== 0) {
        suggestOptions.value.push(
            getLabel('songs')
        )
        songs.forEach((song) => {
            suggestOptions.value.push({
                //@ts-ignore
                label: () => {
                    return h('div', {
                        style: {
                            width: '300px',
                            padding: '0 10px',
                            display: 'flex',
                        }
                    }, [
                        h('span', {
                            style: {
                                fontSize: '12px',
                                color: 'grey',
                                marginLeft: '20px'
                            }
                        }, { default: () => `${song.name}  -  ${song.artists[0].name}` })
                    ]);
                },
                key: song.id,
                disabled: false,
                meta: {
                    type: MuiscEnum.SONG
                }
            })
        })
    }
    // 歌手
    if (artists && artists.length !== 0) {
        suggestOptions.value.push(
            getLabel('artists')
        )
        artists.forEach((artist) => {
            suggestOptions.value.push(
                {
                    //@ts-ignore
                    label: () => {
                        return h('div', {
                            style: {
                                width: '300px',
                                padding: '0 10px',
                                display: 'flex',
                            }
                        }, [
                            h('span', {
                                style: {
                                    fontSize: '12px',
                                    color: 'grey',
                                    marginLeft: '20px'
                                }
                            }, { default: () => `${artist.name}` })
                        ]);
                    },
                    key: artist.id,
                    disabled: false,
                    meta: {
                        type: MuiscEnum.ARTIST
                    }
                },

            )
        })
    }
    // 专辑
    if (albums && albums.length !== 0) {
        suggestOptions.value.push(
            getLabel('albums')
        )
        albums.forEach((album) => {
            suggestOptions.value.push({
                //@ts-ignore
                label: () => {
                    return h('div', {
                        style: {
                            width: '300px',
                            padding: '0 10px',
                            display: 'flex',
                        }
                    }, [
                        h('span', {
                            style: {
                                fontSize: '12px',
                                color: 'grey',
                                marginLeft: '20px'
                            }
                        }, { default: () => `${album.name}  -${album.artist.name}` })
                    ]);
                },
                key: album.id,
                disabled: false,
                meta: {
                    type: MuiscEnum.ALUMN
                }
            })
        })
    }
    //@ts-ignore
    options.value = suggestOptions.value
}
// 建议列表标签
const getLabel = (value: string) => {
    let iconClass = value === 'songs' ? 'icon-yinleguan' : value === 'artists' ? 'icon-huiyuanzhuanxiang' : 'icon-CD'
    let translate = `music.${value}`
    return {
        type: 'render',
        key: value,
        render: () => {
            return h('div', {
                style: 'fontSize: 13px;color: grey;padding: 0 20px;',
            }, [
                h('i', {
                    class: `iconfont ${iconClass}`,
                    style: 'font-size: 15px;color:grey;margin-right:5px'
                }),
                h('span', {
                    style: 'font-size:15px;'
                }, { default: () => t(translate) })
            ])
        },
        meta: {
            type: 0
        }
    }
}
// 根据输入搜索建议 事件函数
const inputHandle = async (value) => {
    if (isNull(value) || isUndefined(value) || value === '') {
        getHotOptions()
        return
    }
    //@ts-ignore
    debounceFn(value)
}
// 发送请求获取搜索建议方法
const getSuggest = async (value) => {
    suggestOptions.value.length = 1

    await searchSuggest(value).then((res) => {
        //@ts-ignore
        suggestList.value = res.result
        if (suggestList.value.length == 0) {
            getHotOptions()
            return
        }
    })
    getSuggestOptions()
}
// 节流
const debounceFn = debounce(getSuggest, 1000)




/**
 * 生命周期钩子函数
 */
onBeforeMount(async () => {
    // console.log('search on before mount')
    // 热搜列表
    await searchHotDetail().then((res) => {
        hotSongList.value = res.data
        // console.log(hotSongList.value);
    })
    await getHotOptions()

})
onMounted(() => {
    // console.log('search on mounted')

})
onBeforeUpdate(() => {
    // console.log('search before update')
})
</script>

<style lang='scss' scoped>
.go-search {
    max-width: 300px;
}
</style>