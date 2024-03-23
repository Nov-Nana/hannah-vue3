<template>
    <!-- 富文本 -->
    <div>
        <Editor api-key="il82bxdyprj72pbtj79n6nd8sdz4txmf5encj7uacxca3mvf" v-model="content" :init="init" :disabled="disabled" />
    </div>
</template>

<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue';
// import { ref, watch, onMounted } from 'vue'
import { debounce } from '../../../../../utils/utils'


const props = defineProps({
    value: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    plugins: {
        type: [String, Array],
        default: "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media code codesample table charmap  nonbreaking insertdatetime advlist lists wordcount autosave autoresize"
    },
    toolbar: {
        type: [String, Array],
        default:
            "code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link codesample | alignleft aligncenter alignright alignjustify outdent indent | \
    styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
    table image media charmap  pagebreak insertdatetime | fullscreen preview"
    }
})
const emits = defineEmits(['input'])
let init = ref({
    language:'zh-Hans',
    plugins: ' preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media Template code codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount emoticons autosave autoresize',
    toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
    styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
    table image media charmap emoticons pagebreak insertdatetime  preview | fullscreen | bdmap lineheight',
    height: 650, //编辑器高度
    min_height: 400,
    fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
    font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
    link_list: [
        { title: '预置链接1', value: 'http://www.tinymce.com' },
        { title: '预置链接2', value: 'http://tinymce.ax-z.cn' }
    ],
    image_list: [
        { title: '预置图片1', value: 'https://www.tiny.cloud/images/glyph-tinymce@2x.png' },
        { title: '预置图片2', value: 'https://www.baidu.com/img/bd_logo1.png' }
    ],
    image_class_list: [
    { title: 'None', value: '' },
    { title: 'Some class', value: 'class-name' }
    ],
    importcss_append: true,
    //自定义文件选择器的回调内容
    file_picker_callback: function (callback, _, meta) {
        if (meta.filetype === 'file') {
          callback('https://www.baidu.com/img/bd_logo1.png', { text: 'My text' });
        }
        if (meta.filetype === 'image') {
          callback('https://www.baidu.com/img/bd_logo1.png', { alt: 'My alt text' });
        }
        if (meta.filetype === 'media') {
          callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.baidu.com/img/bd_logo1.png' });
        }
    },
    toolbar_sticky: true,
    autosave_ask_before_unload: false,
});
let content:Ref<string | undefined> = ref()

watch(() => props.value, (newValue) => {
    content.value = newValue
})
const debouncedCallback = debounce(() => {
    emits('input', content.value)
}, 500)
watch(content, debouncedCallback)


onMounted(() => {
    content.value = props.value
})
</script>