vueComponents
---

**富文本编辑**

    Editor.vue
    简介：
        使用store.js进行组件间数据共享，基于wangEditor封装
    使用：
        引入：
            import editor from '../../components/Editor'
        组件：
            components: {,
                'app-editor': editor
            }
        模板：
            <div>
                <app-editor></app-editor>
            </div>

**列表分页**

    Page.vue

    简介：
        使用store.js进行组件间数据共享，默认每次显示5页
    使用：
        引入：
            import page from '../../components/Page'
        组件：
            components: {,
                'app-page': page
            }
        模板：
            <div>
                <app-page></app-page>
            </div>

**DEMO**

    NewsEdit.vue

        新闻编辑页面，使用editor组件

    NewsEditBak.vue

        新闻编辑页面，使用wangEeditor
