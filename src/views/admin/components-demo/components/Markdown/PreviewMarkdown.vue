<template>
    <VMdPreview :text="props.value"></VMdPreview>
</template>

<script setup lang="ts">
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';

VMdPreview.use(githubTheme);

const props = defineProps({
    value: {
        type: String,
        default: ''
    }
})



</script>