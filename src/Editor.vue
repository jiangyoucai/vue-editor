<template>
    <div v-html="content" @input="result" id="editor">
    </div>
</template>

<script>
import WangEditor from 'wangeditor'
export default {
    props: ['content', 'path'],
    data() {
        return {
            editor: ''
        }
    },
    mounted() {
        const editor = new WangEditor('editor')
        editor.config.menus = ['source', '|', 'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright',
            '|', 'link', 'unlink', 'table', 'img', 'video', 'insertcode', '|', 'undo', 'redo', 'fullscreen'
        ]
        editor.config.uploadImgUrl = this.path
        editor.create()
        this.editor = editor
    },
    methods: {
        result() {
            this.$emit('input', this.editor.$txt.html())
        }
    }
}
</script>
<style scoped>
#editor {
    height: 440px;
}

.wangEditor-container {
    border-radius: 2px;
    overflow: hidden;
    border: 1px solid #CCC;
}
</style>
