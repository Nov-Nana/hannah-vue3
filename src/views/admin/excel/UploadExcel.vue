<template>
    <div class="upload-excel-container">
        <UploadExcelComponent :on-success="handleSuccess" :before-upload="beforeUpload" v-model:isFile="isFile">
        </UploadExcelComponent>
        <div class="space"></div>
        <LinTable :data="tableData" :columns="tableColumns"></LinTable>
    </div>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue'
import UploadExcelComponent from './components/UploadExcelComponent.vue'
import LinTable from './components/LinTable.vue';
import XLSX from 'xlsx'

const tableData = ref([]) // 列表数据
const tableColumns: Ref<HeaderType[]> = ref([]) // 列表头
const isFile = ref(false)
const beforeUpload = (data) => {
    // 上传前的验证
    const isLt1M = data.file.file.size / 1024 / 1024 < 1
    if (!isLt1M) {
        console.log('Please do not upload files larger than 1M in size.')
        return false
    }
    isFile.value = true
    readerData(data.file.file)

}
const handleSuccess = () => {
    console.log('上传')
}
type HeaderType = {
    title: String,
    key: String
}
const createColumns = (header) => {
    const columns: HeaderType[] = []
    header.map(h => {
        columns.push({
            title: h,
            key: h
        });
    })
    return columns
}
const generateData = ({ header, results }) => {
    tableColumns.value = createColumns(header)
    tableData.value = results

}
const getHeaderRow = (sheet) => {
    const headers:String[] = []
    const range = XLSX.utils.decode_range(sheet['!ref'])
    let C
    const R = range.s.r
    /* start in the first row */
    for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
    }
    return headers
}
const readerData = (rawFile) => {
    return new Promise<void>((resolve) => {
        const reader = new FileReader()
        reader.onload = e => {
            const data = e?.target?.result
            const workbook = XLSX.read(data, { type: 'array' })
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName]
            const header = getHeaderRow(worksheet)
            const results = XLSX.utils.sheet_to_json(worksheet)
            generateData({ header, results })
            resolve()
        }
        reader.readAsArrayBuffer(rawFile)
    })
} 
</script>
<style lang="scss" scoped>
.upload-excel-container {
    width: 90%;
    margin: 0 auto;

    .space {
        margin: 10px 0;
    }
}
</style>