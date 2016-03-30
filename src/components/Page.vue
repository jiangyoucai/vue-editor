<style>

.pageBar {
    width: 100%;
    margin: 0 auto;
    /*css居中*/
    display: flex;
}

.pageBar ul {
    /*css居中*/
    margin: auto;
}

.pageBar li {
    float: left;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #fff;
    margin: 10px 5px;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 4px;
}

.pageBar li:hover,
.pageBar li.current {
    background: #f0f0f0;
}

</style>

<template>

<div class="pageBar">
    <ul>
        <!-- 选中页码大于0时，显示 -->
        <li v-if="pageIndex>0" @click="pagePre">«</li>
        <!-- 循环5个页码，页码超过最大页数时，隐藏，点击页码，设置背景色，更新选中页码 -->
        <li v-for="index in 5" v-if="pageCount*5+index<pageLength" :class="{'current':index+pageCount*5==pageIndex}" @click="pageAction(index)">{{pageCount*5+index+1}}</li>
        <!-- 当前页不是最后一页时显示 -->
        <li v-if="(pageCount+1)*5<pageLength">...</li>
        <!-- 当前页不是最后一页时显示 -->
        <li v-if="(pageCount+1)*5<pageLength" @click="pageEnd(pageLength-1)">{{pageLength}}</li>
        <!-- 选中页码小于最大页数时，显示 -->
        <li v-if="pageIndex<pageLength-1" @click="pageNext">»</li>
    </ul>
</div>

</template>

<script>

import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../store.js'
Vue.use(VueResource)

export default {
    data: function() {
        return {
            // 翻转页数，pageCount*5 为当前显示的页码
            // 1-5=0，6-10=1，11-15=2，依次类推
            pageCount: 0,
            // 当前页码
            pageIndex: 0
        }
    },
    computed: {
        // 最大页数
        pageLength: function() {
            return store.state.pageLength
        }
    },
    methods: {
        // 点击页码
        pageAction: function(page) {
            this.pageIndex = page
            this.pageTurn()
        },
        // 点击下一页
        pageNext: function() {
            if (this.pageIndex < this.pageLength - 1) {
                this.pageIndex += 1
                this.pageTurn()
            }
        },
        // 点击上一页
        pagePre: function() {
            if (this.pageIndex > 0) {
                this.pageIndex -= 1
                this.pageTurn()
            }
        },
        // 点击尾页
        pageEnd: function(page) {
            this.pageIndex = page
            this.pageCount = Math.ceil(this.pageLength / 5) - 1
        },
        // 切换页码
        pageTurn: function() {
            store.dispatch('pageIndex', this.pageIndex) // 更新页码
            if (this.pageIndex >= (this.pageCount + 1) * 5) { // 向后翻页
                this.pageCount += 1
            } else if (this.pageIndex < (this.pageCount) * 5) { // 向后翻页
                this.pageCount -= 1
            }
        }
    }
}

</script>
