<template>
    <n-space :wrap="false">
        <div class="label">{{ t('admin.filename') }}: </div>
        <n-input style="width: 300px" size="small" :value="props.value" :on-input="input" type="text" :placeholder="t('admin.filename_placeholder')">
            <template #prefix>
                <n-icon :component="FileExcelTwotone" />
            </template>
        </n-input>
    </n-space>
</template>

<script setup lang="ts">
import { icon } from '../../../../plugins'

const t = window['$t']

const { FileExcelTwotone } = icon.antd
const props = defineProps({
    value: String
})

const emits = defineEmits(['update:value'])

const input = (value)=>{
    emits('update:value',value)
}
</script>
<style lang="scss">
.label {
    // width: 120px;
    font-size: 14px;
    color: #606266;
    line-height: 24px;
    font-weight: bolder;
}
</style>