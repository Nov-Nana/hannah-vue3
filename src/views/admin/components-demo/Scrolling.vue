<template>
    <h3>虚拟滚动</h3>
    <VirturalScrolling class="virtual-scroll-wrapper" :items="items" height="200px" :item-height="itemHeight">
        <template v-slot:default="slotProps">
            <div ref="listItem" class="virtual-list" :style="{ height: itemHeight + 'px', top: item.top + 'px' }"
                v-for="(item) in slotProps.items" :key="item.id">
                {{ item.content }}
            </div>
        </template>
    </VirturalScrolling>
    <h3>滚动加载</h3>
    <InfiniteScrolling class="infinite-scroll-wrapper" :items="itemsPart" @getItemsPart="getItemsPart">
        <template v-slot:content="slotProps">
            <div class="list" v-for="item in slotProps.items" :key="item.id">
                {{ item.content }}
            </div>
        </template>
    </InfiniteScrolling>
</template>

<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue'
import { VirturalScrolling } from './components/Scrolling'
import { InfiniteScrolling } from './components/Scrolling';

type ItemsType = {
    id: number,
    content: string
}
type ItemsPartType = {
    isFinished: boolean,
    total: number,
    data: ItemsType[]
}
const items: ItemsType[] = []
const itemHeight = 50
onBeforeMount(() => {
    getItem()
    getItemsPart(0)
})

const getItem = () => {
    for (let i = 0; i < 10000; i++) {
        items.push({
            id: i,
            content: `数据 ${i}`
        })
    }
}
let itemsPart: Ref<ItemsPartType | undefined> = ref()
let totalItems: number | Number = 0
let count = 0
const getItemsPart = (itemNum) => {
    if (itemNum === 0 || itemNum < totalItems) {
        count++
        const mockData: ItemsType[] = []
        for (let i = 0; i < 100; i++) {
            mockData.push({
                id: Number('' + count + i),
                content: '数' + Number('' + count + i)
            })
        }
        // 发送请求
        itemsPart.value = {
            isFinished: false,
            total: 200,
            data: mockData
        }
        totalItems = itemsPart.value.total
    } else {
        itemsPart.value = {
            isFinished: true,
            total: 200,
            data: []
        }
    }

}
</script>

<style lang='scss' scoped>
h3{
    text-align: center;
}
.virtual-scroll-wrapper {
    width: 90%;
    margin: 20px auto;

    .virtual-list {
        width: 100%;
        position: absolute;
    }
}
.infinite-scroll-wrapper{
    width: 90%;
    margin: 20px auto;
    .list{
        text-align: center;
        height: 30px;
        border: 1px solid rgba(240, 240, 240, 0.3);
        line-height: 30px;
    }
}
</style>