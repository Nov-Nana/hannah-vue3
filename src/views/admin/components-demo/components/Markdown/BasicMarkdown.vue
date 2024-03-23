<template>
    <VMdEditor v-model="text" heigh="400px"></VMdEditor>
</template>

<script setup lang="ts">
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import {ref, watch, onMounted} from 'vue'
import { debounce } from '../../../../../utils/utils'
VMdEditor.use(githubTheme)
const text = ref('')
const props = defineProps({
    value: {
        type: String,
        default: ''
    }
})

const emits = defineEmits(['input'])

const debouncedCallback = debounce(()=>{
    emits('input', text.value)
},500)
watch(text, debouncedCallback)
onMounted(()=>{
    text.value = props.value
})



</script>

<style lang="scss"></style>../../../../../utils/utils