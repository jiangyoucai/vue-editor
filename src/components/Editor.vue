<style media="screen" scoped>

#editor {
    height: 600px;
}

#editor img {
    max-width: 100%;
}

</style>

<template id="">

<textarea id="editor" name="name" rows="8" cols="40">
    {{newsContent}}
</textarea>

</template>

<script type="text/javascript">

import WangEditor from 'wangeditor/dist/js/wangEditor'
import store from '../store.js'
var editor
export default {
    data: function() {
        return {}
    },
    computed: {
        newsContent: function() {
            return store.state.newsContent
        }
    },
    watch: {
        // 监控newsContent,变化后更新编辑器内容
        'newsContent': function() {
            editor.$txt.html(this.newsContent)
        }
    },
    ready: function() {
        // 初始化
        editor = new WangEditor('editor')
            // 菜单
        editor.config.menus = ['source', '|', 'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright', '|', 'link', 'unlink', 'table', 'emotion', 'img', 'video', 'insertcode', '|', 'undo', 'redo', 'fullscreen']
            // 图片
        editor.config.uploadImgUrl = this.host + '/help/upload/wangEditorH5File'
            // 创建
        editor.create()
            // 自定义方法，编辑器失去焦点，派发内容到store
        editor.$txt.on('focusout', function() {
            setTimeout(function() {
                store.dispatch('newsContent', editor.$txt.html())
            }, 0)
        })
    }
}

</script>
