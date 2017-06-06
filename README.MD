# vue-editor

Editor for Vue2.0 , Base on wangEditor

#### notice

    I don't suggest you use wangeditor v3.0 in your production, because it's not very stable, such as the user interface, the upload image and so on.

    choose wangeditor v2.0 first, if you do not want to trouble 



#### how to use


template

    <v-editor
    :content="content"
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
