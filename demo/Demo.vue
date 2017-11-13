<template lang="html">
    <div class="">
        <v-editor
        :content="content"
        :path="path"
        v-model="result"></v-editor>
        <input type="button" name="name" value="submit" @click="submit">
    </div>
</template>

<script>
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
</script>

<style lang="css">
</style>
