<template>
    <div @input="result" id="editor"></div>
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
    watch: {
        content() {
            this.editor.txt.html(this.content)
        }
    },
    mounted() {
        const editor = new WangEditor('#editor')
        editor.customConfig.uploadImgServer = this.path
        editor.create()
        this.editor = editor
    },
    methods: {
        result() {
            this.$emit('input', this.editor.txt.html())
        }
    }
}
</script>