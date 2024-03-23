<!-- 滚动加载 -->
<template>
    <div class="infinite-scroller" @scroll.passive="handleScroll">
        <slot name="content" :items="visibleItmes">
            <div v-for="item in visibleItmes" :key="item.id">
                {{ item.content }}
            </div>
        </slot>
        <slot name="loading">
            <div v-show="loading">加载ing...</div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref, watch } from 'vue';

type ItemsType = {
    id: number,
    content: string
}
type ItemsPartType = {
    isFinished: boolean,
    total: number,
    data: ItemsType[]

}
interface Props {
    items: ItemsPartType | undefined
}

const props = defineProps<Props>()
const emits = defineEmits(['getItemsPart'])
onMounted(() => {
    i.value = props.items?.data
    return visibleItmes.value.push(...i.value);
})
watch(() => props.items, (newValue) => {
    i.value = newValue?.data
    // visibleItmes.value.push(newValue)
    visibleItmes.value.push(...i.value);
})
const visibleItmes: Ref<ItemsType[]> = ref([])
const i = ref()
const loading = ref(false)
const handleScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target
    // 如果滚动条高度 - 滚轮滚动距离 - 元素可见高度 < 10 触底
    if (!loading.value && scrollHeight - (scrollTop + clientHeight) < 10 && !props.items?.isFinished) {
        loadMoreItems()
    }
}
const loadMoreItems = () => {
    loading.value = true
    console.log(visibleItmes.value.length)
    emits('getItemsPart', visibleItmes.value.length)
    loading.value = false
}


</script>

<style lang="scss" scoped>
.infinite-scroller {
    height: 200px;
    overflow-y: auto;
}
</style>