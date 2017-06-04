# vue-editor


Editor for Vue2.0 , Base on wangEditor

#### how to use


template

    <v-editor
    :content="inputContent"
    :path="path"
    v-model="result"></v-editor>


import

    import Editor from './Editor'
    export default {
        data() {
            return {
                // input content to editor
                content: 'base on wangeditor',
                // output content from editor
                result: '',
                // set image upload api url
                path: '/api/v1/help/upload/wangEditorH5File'
            }
        },
        methods: {
            submit() {
                console.log(this.result)
            }
        },
        components: {
            'v-editor': Editor
        }
    }

remark

    check the demo or create a issues
