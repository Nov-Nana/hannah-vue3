<template>
    <div class="markdown-container">
        <h2>基础用法</h2>
        <BasicMarkdown :value="content" @input="getInput"></BasicMarkdown>
        <h2>渲染Markdown</h2>
        <PreviewMarkdown :value="content"></PreviewMarkdown>
        <h2>渲染HTML</h2>
        <PreviewHtmlMarkdown></PreviewHtmlMarkdown>
    </div>
</template>

<script setup lang="ts">
import { BasicMarkdown, PreviewMarkdown, PreviewHtmlMarkdown } from './components/Markdown'
import { ref } from 'vue'

const content = ref('# 一级标题')

const getInput = (value) => {
    content.value = value
}
</script>

<style lang="scss">
.markdown-container {
    width: 90%;
    margin: 10px auto;
    overflow: hidden;

    h2 {
        margin: 20px 0;
        color: grey;
        text-align: center;
        
    }
}
</style>./components/Markdown