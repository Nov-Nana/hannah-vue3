<template>
    <n-data-table size="small" :columns="myColomns" :data="myData" :row-key="rowKey"
        @update:checked-row-keys="handleCheck" />
</template>

<script setup lang="ts">
import { ref,  watch,onBeforeMount } from 'vue'
import { DataTableRowKey } from 'naive-ui';
const myColomns = ref()
const myData = ref()

const props = defineProps({
    data: {
        type: Array,
        default: [
            {
                "id": 1,
                "timestamp": 735827370854,
                "author": "Sandra",
                "reviewer": "Frank",
                "title": "Tjginbg Bhxk Dhcogk Cvgsyye Sogxon Plfs Wpcwp Rqats",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 90.12,
                "importance": 3,
                "type": "JP",
                "status": "draft",
                "display_time": "2001-11-06 23:22:51",
                "comment_disabled": true,
                "pageviews": 3395,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 2,
                "timestamp": 307004360867,
                "author": "Joseph",
                "reviewer": "Richard",
                "title": "Iucwepbr Llnj Ckwnsin Puyljg Slwgbzu Uwocdv",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 11.76,
                "importance": 1,
                "type": "US",
                "status": "draft",
                "display_time": "2022-07-15 11:20:31",
                "comment_disabled": true,
                "pageviews": 3546,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 3,
                "timestamp": 806957434427,
                "author": "Carol",
                "reviewer": "Margaret",
                "title": "Gukx Kprig Yvxz Otpkfukb Qxdnnguw Duwp Wjnbof",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 7.83,
                "importance": 2,
                "type": "CN",
                "status": "draft",
                "display_time": "1983-03-31 11:36:21",
                "comment_disabled": true,
                "pageviews": 2521,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 4,
                "timestamp": 1665838424003,
                "author": "Steven",
                "reviewer": "John",
                "title": "Culfllf Tmrofqowq Wattqqjp Fvq Pade",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 62.96,
                "importance": 3,
                "type": "US",
                "status": "draft",
                "display_time": "1970-04-11 05:51:49",
                "comment_disabled": true,
                "pageviews": 2938,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 5,
                "timestamp": 404917660720,
                "author": "Susan",
                "reviewer": "Eric",
                "title": "Fvsoqxhyp Cunfn Sqido Ogkusu Cfqatkfo Uklxmewxwy Ousaylxv",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 44.26,
                "importance": 2,
                "type": "US",
                "status": "draft",
                "display_time": "2008-02-18 06:11:20",
                "comment_disabled": true,
                "pageviews": 4733,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 6,
                "timestamp": 1013988618933,
                "author": "Michael",
                "reviewer": "Helen",
                "title": "Exwgnduc Xymfjfhw Ebhtjs Xdqdveqh Vgwklqwn Tafpl Wsyy",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 17.78,
                "importance": 2,
                "type": "CN",
                "status": "draft",
                "display_time": "1994-04-14 00:00:45",
                "comment_disabled": true,
                "pageviews": 1162,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 7,
                "timestamp": 586720416109,
                "author": "Michael",
                "reviewer": "Timothy",
                "title": "Ncgstswbs Zsrtbe Xsssrnjdnm Dyixkwbhd Bbpfyq Biwbxndxa Qqlxd Kppfvx Uomm Qndwxxpmcq",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 45.34,
                "importance": 3,
                "type": "EU",
                "status": "draft",
                "display_time": "1989-04-25 20:33:34",
                "comment_disabled": true,
                "pageviews": 2278,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 8,
                "timestamp": 1409020651332,
                "author": "David",
                "reviewer": "Ronald",
                "title": "Sbqspo Vppd Rqrpui Ohigfox Jujtwwq Nwnoin Isehyaea Gfixgbv Vkpplts Ccpca",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 27.73,
                "importance": 2,
                "type": "US",
                "status": "draft",
                "display_time": "1990-05-07 23:43:59",
                "comment_disabled": true,
                "pageviews": 4335,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 9,
                "timestamp": 393656469550,
                "author": "Donald",
                "reviewer": "Lisa",
                "title": "Xgfrkkit Fbhtdtfcu Ykmcvqrx Trorqnecm Hlvdetrhpu Tvq",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 13.75,
                "importance": 3,
                "type": "US",
                "status": "draft",
                "display_time": "1999-10-15 05:16:23",
                "comment_disabled": true,
                "pageviews": 1378,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 10,
                "timestamp": 1563910900113,
                "author": "Jeffrey",
                "reviewer": "Laura",
                "title": "Hrbnnm Epexeju Drwcsqn Vioxh Opeqauurob Uynji Hxywlpwjo Bnfh",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 78.62,
                "importance": 3,
                "type": "EU",
                "status": "draft",
                "display_time": "2003-07-21 01:57:25",
                "comment_disabled": true,
                "pageviews": 4116,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 11,
                "timestamp": 257330786489,
                "author": "Elizabeth",
                "reviewer": "Joseph",
                "title": "Dpfqobr Qwzsvvkgk Xdqo Bqjzxep Xssvkggh Lltutc Rknlr Wjyzztud Cby Naayqji",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 50.76,
                "importance": 2,
                "type": "JP",
                "status": "draft",
                "display_time": "2020-08-04 11:04:47",
                "comment_disabled": true,
                "pageviews": 413,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 12,
                "timestamp": 1551619414006,
                "author": "Jessica",
                "reviewer": "Jason",
                "title": "Rmisnu Srhtxtpqud Yvfgah Kyagzc Ifdvde Cynkl Qms Gnxbjp Minjmcwojb Ldvksmkoan",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 74.72,
                "importance": 3,
                "type": "US",
                "status": "published",
                "display_time": "1994-01-06 13:25:28",
                "comment_disabled": true,
                "pageviews": 4729,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 13,
                "timestamp": 25242332325,
                "author": "Angela",
                "reviewer": "Michelle",
                "title": "Pkpfvfncxq Yfdmz Lorveshnep Ccu Ujkdg Mzoe Polprzalji",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 87.18,
                "importance": 2,
                "type": "EU",
                "status": "published",
                "display_time": "1974-12-13 02:30:13",
                "comment_disabled": true,
                "pageviews": 2023,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 14,
                "timestamp": 1295872939563,
                "author": "Mark",
                "reviewer": "Patricia",
                "title": "Nhhnyyw Eiqcprt Woljm Qyw Mfypinwsmg Xvqr Opil",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 32.13,
                "importance": 3,
                "type": "EU",
                "status": "published",
                "display_time": "1991-09-08 02:59:41",
                "comment_disabled": true,
                "pageviews": 1449,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 15,
                "timestamp": 675337229132,
                "author": "Amy",
                "reviewer": "Dorothy",
                "title": "Rwqfmweb Unk Eptu Cslsaw Qyhuhhvcc Oxb Kylzozgd",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 59.64,
                "importance": 2,
                "type": "CN",
                "status": "published",
                "display_time": "1979-08-12 23:53:42",
                "comment_disabled": true,
                "pageviews": 3259,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 16,
                "timestamp": 1084139409055,
                "author": "Daniel",
                "reviewer": "Richard",
                "title": "Scxpryod Oluygppxcl Mwpfill Sgnl Fptvrudjes Nsit Lwbpzq Sov Sihsjax Mwtnuh",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 35.49,
                "importance": 3,
                "type": "JP",
                "status": "published",
                "display_time": "1985-09-09 05:41:21",
                "comment_disabled": true,
                "pageviews": 2668,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 17,
                "timestamp": 697047182444,
                "author": "Donna",
                "reviewer": "Kenneth",
                "title": "Cawt Vlvoekus Dstfqbqr Nrsqfvqd Txldb Hoesqk",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 38.72,
                "importance": 1,
                "type": "EU",
                "status": "draft",
                "display_time": "2007-09-26 19:23:53",
                "comment_disabled": true,
                "pageviews": 877,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 18,
                "timestamp": 514718208694,
                "author": "Deborah",
                "reviewer": "Robert",
                "title": "Wfepnm Nbvhl Cdgtah Igyhkujynb Tpubn Mjqgrmxknr Chynrww",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 22.82,
                "importance": 2,
                "type": "JP",
                "status": "published",
                "display_time": "2016-11-25 05:42:51",
                "comment_disabled": true,
                "pageviews": 4043,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 19,
                "timestamp": 1370678443293,
                "author": "Larry",
                "reviewer": "Larry",
                "title": "Ymouptks Vhupzq Qxskm Srkfy Dguhlpbj Fdyxxml",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 32.63,
                "importance": 2,
                "type": "US",
                "status": "published",
                "display_time": "2009-01-21 02:40:24",
                "comment_disabled": true,
                "pageviews": 1169,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            },
            {
                "id": 20,
                "timestamp": 1534937658950,
                "author": "Michael",
                "reviewer": "James",
                "title": "Qbhsmafr Dvwhwkk Pmthlax Rmp Yikahpde Yxfptufk Rjqn Gaxr",
                "content_short": "mock data",
                "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
                "forecast": 99.74,
                "importance": 2,
                "type": "EU",
                "status": "published",
                "display_time": "1976-11-08 07:51:41",
                "comment_disabled": true,
                "pageviews": 3395,
                "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
                "platforms": [
                    "a-platform"
                ]
            }
        ]
    },
    select: {
        type: Boolean,
        default: false
    },
    columns: {
        type: Array,
        default: []
    },

})
watch(() => props.data, (newVal) => {
    myData.value = newVal
})
watch(() => props.columns, (newVal) => {
    myColomns.value = newVal
})

onBeforeMount(()=>{
    myColomns.value = props.columns
    myData.value = props.data
})

const emits = defineEmits(['updateSelect'])


let checkedRowKeysRef = ref()
const rowKey = (row) => {
    return row.timestamp
}
const handleCheck = (rowKeys: DataTableRowKey[]) => {
    checkedRowKeysRef.value = rowKeys
    emits('updateSelect', rowKeys)
}



</script>

<style lang="scss"></style>