<style media="screen" scoped>

.newsEdit input {
    height: 40px;
    line-height: 40px;
    width: 98%;
    margin: 10px 0;
    padding: 0 1%;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 14px;
}

.newsEdit .newsPublish {
    width: 100%;
    cursor: pointer;
}

</style>

<template id="">

<app-layout>
    <div slot="block">
        <div class="newsEdit">
            <div class="main">
                <input class="name" type="text" placeholder="标题" v-model="result.name">
                <app-editor></app-editor>
                <input class="newsPublish" type="button" value="发布" @click="newsPublish">
            </div>
        </div>
    </div>
</app-layout>

</template>

<script type="text/javascript">

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from '../../store.js'
import layout from '../../components/Layout'
import editor from '../../components/Editor'
Vue.use(VueResource)
Vue.use(VueRouter)
var router = new VueRouter()
export default {
    data: function() {
        return {
            result: {},
            method: '',
            url: ''
        }
    },
    computed: {
        host: function() {
            return store.state.host
        },
        account: function() {
            return store.state.account
        }
    },
    methods: {
        newsDetail: function() {
            let data = {
                url: this.url + '?token=' + this.account.token,
                method: 'get'
            }
            this.requestData('newsDetail', data)
        },
        newsPublish: function() {
            if (this.result.name === undefined || editor.$txt.text() === '') {
                console.log('提交空数据')
            } else {
                let content = editor.$txt.html()
                content = content.replace(/&nbsp;/ig, '')
                content = content.replace(/'<p><\/p>'/ig, '')
                content = this.ReplaceLoadingImage('save', content)
                this.result.content = content
                this.result.thumb = $(editor.$txt.find('img')[0]).attr('src')
                let data = {
                    url: this.url + '?token=' + this.account.token,
                    method: this.method,
                    data: this.result
                }
                this.requestData('newsPublish', data)
            }
        },
        // 请求数据
        requestData: function(method, data) {
            this.$http(data).then(function(response) {
                if (response.data.status === '200') {
                    this.responseComply(method, response.data.result)
                } else {
                    var message = response.data.message
                    if (message === '用户未登录') {
                        router.go({
                            path: '/account'
                        })
                    } else {
                        store.dispatch('promptShow', '0', message)
                    }
                }
            }, function(response) {
                store.dispatch('promptShow', '0', '未知错误')
            })
        },
        // 响应执行
        responseComply: function(method, result) {
            switch (method) {
                case 'newsDetail':
                    result.content = this.ReplaceLoadingImage('show', result.content)
                    this.result = result
                    store.dispatch('newsContent', result.content)
                    break
                case 'newsPublish':
                    router.go({
                        path: '/news'
                    })
                    break
            }
        },
        // 替换懒加载图片
        ReplaceLoadingImage: function(action, data) {
            if (action === 'save') {
                let temp = new RegExp('src', 'g')
                return data.replace(temp, 'src="/media/img/loading.gif" data-echo')
            } else if (action === 'show') {
                let temp = new RegExp('src="/media/img/loading.gif" data-echo', 'g')
                return data.replace(temp, 'src')
            }
        }
    },
    components: {
        'app-layout': layout,
        'app-editor': editor
    },
    ready: function() {
        var requestID = this.$route.params['number']
        if (requestID !== undefined) {
            // 编辑
            this.method = 'put'
            this.url = this.host + '/api/news/' + requestID
            this.newsDetail()
        } else {
            // 添加
            this.method = 'post'
            this.url = this.host + '/api/news'
        }
    }
}

</script>
