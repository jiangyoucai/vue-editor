# vue-editor


Editor for Vue.js , Base on wangEditor

#### how to use


template

    <v-editor
    :input-content="inputContent"
    :output-content.sync="outputContent"
    :upload-url="uploadURL"></v-editor>


import

    import Editor from './Editor'
    export default {
        data() {
            return {
                // input content to editor
                inputContent: 'base on wangeditor',
                // output content from editor
                outputContent: '',
                // set image upload api url
                uploadURL: '/api/v1/help/upload/wangEditorH5File'
            }
        },
        computed: {},
        ready() {},
        attached() {},
        methods: {
            submit() {
                console.log(this.outputContent)
            }
        },
        components: {
            'v-editor': Editor
        }
    }

remark

    check the demo or create a issues
