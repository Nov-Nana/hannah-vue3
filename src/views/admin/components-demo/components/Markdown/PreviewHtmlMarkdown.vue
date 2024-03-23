<template>
    <VMdPreviewHtml :html="props.html" preview-class="vuepress-markdown-body"></VMdPreviewHtml>
</template>

<script setup lang="ts">
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

const props = defineProps({
    html: {
        type: String,
        default: '<div data-v-md-line="1"><h1 align="center">Markdown Editor built on Vue</h1>'
    }
})



</script>