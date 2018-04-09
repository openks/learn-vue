<doc>
## 表格筛选-表格标题筛选-冻结-排序
用于表格列处理弹框组件
### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | — | 表格筛选 |
| colList | 表格列标题数组 | array | - | [] |
| showSortable | 是否显示可排序列 | boolean | false/true | false |
| visiable | 该弹框组件是否可见 |  boolean | false/true | false |
</doc>
<template lang="html">
    <div class="table-choose-part">
        <el-dialog :title="title" :visible.sync="showFilter">
            <el-table
                :data="colList"
                style="width: 100%">
                <el-table-column
                    prop="title"
                    label="标题">
                </el-table-column>
                <el-table-column
                    label="是否隐藏">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.hide"
                            on-text="是"
                            off-text="否">
                        </el-switch>
                    </template>
                </el-table-column>
                 <el-table-column
                    v-if="showSortable"
                    label="是否可排序">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.sort"
                            on-text="是"
                            off-text="否">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                    label="是否冻结">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.fixed"
                            on-text="是"
                            off-text="否">
                        </el-switch>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
/**
 * 一个表格筛选控件，可以显示隐藏列，固定列，是否允许该列排序
 * @type {String}
 */
export default {
  name: 'table-choose',
  props: {
        /**
         * 弹窗名称 默认表格筛选
         */
    title: {
      type: String,
      default: '表格筛选',
    },
        /**
         * 列名
         */
    colList: {
      type: Array,
      default: [],
    },
        /**
         * 是否显示可排序功能 默认不显示
         */
    showSortable: {
      type: Boolean,
      default: false,
    },
        /**
         * 该弹框是否可见 默认不可见触发事件后可见
         */
    visiable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showFilter: {
      get() {
        return this.visiable;
      },
      set(newValue) {
        this.$emit('update:visiable', newValue);
      },
    },
  },
};
</script>

<style lang="css">
</style>
