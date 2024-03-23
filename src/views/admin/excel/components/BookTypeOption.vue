<template>
    <n-space :wrap="false">
        <div class="label">{{ t('admin.book_type') }}: </div>
        <n-select size="small" style="width: 100px;" v-model:value="props.value" :on-update:value="change" :options="options" />
    </n-space>
</template>

<script setup lang="ts">

let options = [
    { label: 'xlsx', value: 'xlsx' },
    { label: 'csv', value: 'csv' },
    { label: 'txt', value: 'txt' },
]
const t = window['$t']

const props = defineProps({
    value: String
})

const emits = defineEmits(['update:value'])

const change = (value) => {
    emits('update:value', value)
}
</script>

<style lang="scss" scoped>
.label {
    font-size: 14px;
    color: #606266;
    line-height: 24px;
    font-weight: bolder;
}
</style>