<template>
    <div class="tinymce-view-container">

        <TinyMce :value="content" @input="getInput"></TinyMce>
        <div class="editor-content" v-html="content"></div>
    </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { TinyMce } from './components/TinyMCE';

let content = ref(`<h1 style="text-align: center;">TinyMCE</h1>
<p><img src="https://www.baidu.com/img/bd_logo1.png" alt="My alt text" width="540" height="258"></p>
<p>🙄&nbsp;Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</p>
<p>😬&nbsp;Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</p>
<p>😕 We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</p>`)

const getInput = (value) => {
    content.value = value
}

</script>

<style lang="scss">
.tinymce-view-container{
    width: 90%;
    margin: 0 auto;
}
.editor-content {
    margin: 30px 20px;
    background-color: #fff;
}
</style>./components/TinyMCE