<style media="screen" scoped>

#editor {
    height: 600px;
}

#editor img {
    max-width: 100%;
}

</style>

<template id="">

<div id="editor">
</div>

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
        'newsContent': function() {
            editor.$txt.html(this.newsContent)
        }
    },
    ready: function() {
        editor = new WangEditor('editor')
        editor.config.printLog = false
        editor.config.menus = [
            'source',
            '|',
            'bold',
            'underline',
            'italic',
            'strikethrough',
            'eraser',
            'forecolor',
            'bgcolor',
            '|',
            'quote',
            'fontfamily',
            'fontsize',
            'head',
            'unorderlist',
            'orderlist',
            'alignleft',
            'aligncenter',
            'alignright',
            '|',
            'link',
            'unlink',
            'table',
            'emotion',
            // '|',
            'img',
            'video',
            // 'location',
            'insertcode',
            '|',
            'undo',
            'redo',
            'fullscreen'
        ]
        editor.config.uploadImgUrl = this.host + '/help/upload/wangEditorH5File'
        editor.create()
    }
}

</script>
