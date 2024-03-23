<template>
    <n-upload ref="upload" :on-before-upload="props.beforeUpload" :on-remove="removeFile" :on-error="errorUpload"
        :on-finish="finishUpload" accept=".xlsx,.xls" directory-dnd :max="1">
        <n-upload-dragger>
            <n-text>{{ t('admin.upload_text') }} </n-text>
            <n-button class="upload-button" size="small" secondary type="primary">{{
        t('admin.browse') }}</n-button>
        </n-upload-dragger>
    </n-upload>
    <n-button :disabled="!props.isFile" style="margin-bottom: 12px" @click="onSuccess">上传文件</n-button>
</template>
<script setup lang="ts">
import { ref,  watch } from 'vue'


const t = window['$t']
const props = defineProps({
    beforeUpload: Function,
    onSuccess: Function,
    isFile: Boolean,
    upload: Function
})
const emits = defineEmits(['update:isFile'])
// const excelData = ref({
//     header: null,
//     results: null
// })
const upload = ref()
const isExcelFile = ref()
watch(() => props.isFile, (newVal) => {
    isExcelFile.value = newVal
})
const finishUpload = () => {
    console.log('finsh')
}
const errorUpload = () => {
    console.log('error')
}
const removeFile = () => {
    emits('update:isFile', false)
}



</script>
<style lang="scss" scoped>
.upload-button {
    margin: 5px 10px;
}
</style>