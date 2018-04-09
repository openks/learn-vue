import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

export default {
    data () {
        return {
            colListData: [
                {
                    title: '日期',
                    key: 'date',
                    hide: false,
                    fixed: 'left',
                    filter: false,
                    sort: true
                },
                {
                    title: '姓名',
                    key: 'name',
                    hide: false,
                    fixed: false,
                    filter: false,
                    sort: false
                },
                {
                    title: '地址',
                    key: 'address',
                    hide: false,
                    fixed: false,
                    filter: false,
                    sort: false
                },
                {
                    title: '标签',
                    key: 'tag',
                    hide: false,
                    fixed: false,
                    sort: false
                },
                {
                    title: '年龄',
                    key: 'age',
                    hide: false,
                    fixed: false,
                    filter: false,
                    sort: true
                }
            ],
            showFilterTable: false,
            showFilterDialog: false,
            tableObjData: {
                aaz001: '医院编码',
                akb021: '医院名称',
                aka101: '医院级别'
            },
            sortOrderData: []
        }
    },
    methods: {
        log (...text) {
            console.log(...text)
        }
    }
}
