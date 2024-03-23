<!-- 虚拟滚动 -->
<template>
    <div class="virtual-scroller" ref="scrollContainer" :style="{ height: props.height }" @scroll="handleScroll">
        <div class="virtual-spacer" :style="{ height: `${heightTotal}px` }"></div>
        <slot name="default" :items="visibleItems"></slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, PropType, computed } from 'vue';
interface ItemsType {
    id: number,
    content: string
}
const props = defineProps({
    // 列表
    items: Array as PropType<ItemsType[]>,
    // 可视区域高度
    height: {
        type: String,
        default: '300px'
    },
    // 每个列表项的高度
    itemHeight: {
        type: Number,
        default: 30
    }
})

const scrollContainer = ref() // 获取容器
const visibleItems = ref() // 当前可视区域内的列表项
const itemSize = ref() // 列表项总数
// 计算出 所有列表项的高度，为滚动预留空间
const heightTotal = computed(() => {
    return itemSize.value * props.itemHeight
})
onMounted(() => {
    itemSize.value = props.items?.length
    calculateVisibleItems()
})
const calculateVisibleItems = () => {
    const containerHeight = scrollContainer.value.clientHeight // 容器可见高度
    const scrollTop = scrollContainer.value.scrollTop // 滚轮高度
    const startIndex = Math.floor(scrollTop / props.itemHeight)
    const endIndex = Math.min(startIndex + Math.ceil(containerHeight / props.itemHeight), itemSize.value - 1)
    visibleItems.value = props.items?.slice(startIndex, endIndex + 1).map((item, index) => ({ ...item, top: (startIndex + index) * props.itemHeight }))
}
const handleScroll = () => {
    calculateVisibleItems()
}


</script>

<style lang="scss" scoped>
.virtual-scroller {
    position: relative;
    overflow-y: scroll;
    .virtual-spacer {
        top: 0;
        left: 0;
        z-index: -1;
    }
}
</style>