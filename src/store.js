import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    // 列表分页
    pageLength: 0,
    // 当前页码
    pageIndex: 0,
    // 资讯内容
    newsContent: ''
}
const mutations = {
    // 列表分页
    pageLength(state, number) {
        state.pageLength = number
    },
    // 当前页码
    pageIndex(state, number) {
        state.pageIndex = number
    },
    // 资讯内容
    newsContent: function(state, text) {
        state.newsContent = text
    }
}

export default new Vuex.Store({
    state,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
})
