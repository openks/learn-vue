
<template lang="html">
    <div class="filter-dialog-wp">
    <el-dialog
        :visible.sync="dialogVisible"
        :title="title">
        <div v-for="(item,index) in sortArray" class="m-y-b-4">
            <el-select
               size="small"
               clearable
               v-model="item.col"
               placeholder="选择排序列">
               <el-option
                   v-for="(v,k) in tableObj"
                   :key='k'
                   :label='v'
                   :value='k'>
               </el-option>
           </el-select>
            <el-select
               size="small"
               v-model="item.type"
               placeholder="选择排序列">
               <el-option value="asc" label="升序"></el-option>
               <el-option value="desc" label="降序"></el-option>
           </el-select>
           <el-button
            size="small" @click="deleteSortFilter(index)">删除</el-button>
        </div>
        <el-button size="small" @click="addNewSortFilter">新增</el-button>
        <el-button  class="bt-sure" type="primary" size="small" @click="sortFilterOk">确定</el-button>
    </el-dialog>
    </div>
</template>

<script>
/**
 * 组合排序弹层
 * A列升序，B列降序，C列升序等设置
 */
export default {
  name: 'filter-dialog',
  props: {
        /**
         * 弹窗名称 默认组合排序
         */
    title: {
      type: String,
      default: '组合排序',
    },
        /**
         * 弹框是否可见默认false
         * @type {Object}
         */
    filterDialogVisible: {
      type: Boolean,
      required: true,
      default: false,
    },
        /**
         * 表头对象 key为字段名 value为显示的表头
         */
    tableObj: {
      type: Object,
      required: true,
    },
        /**
         * 排序顺序 对象数组 \[{col:"akb021",type:"desc"}\]
         */
    sortOrder: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      sortArray: [{ col: '', type: 'desc' }],
    };
  },
  computed: {
    dialogVisible: {
      set(newValue) {
        this.$emit('update:filterDialogVisible', newValue);
      },
      get() {
        return this.filterDialogVisible;
      },
    },
  },
  methods: {
    addNewSortFilter() {
      this.sortArray.push({ col: '', type: 'desc' });
    },
    deleteSortFilter(item) {
      this.sortArray.splice(item, 1);
    },
    sortFilterOk() {
                // 判断重复
                // 如果重复给出提示 禁止进一步操作
      const arr = this.sortArray;
      const arr1 = [];
      let flag = 'ok';
      for (let i = 0; i < arr.length; i++) {
        if (arr1.includes(arr[i].col)) {
          this.$message('请处理重复列');
          flag = 'error';
          break;
        } else {
          arr1.push(arr[i].col);
        }
        if (arr[i].col.length === 0) {
          this.$message('请删除空行');
          flag = 'error';
          break;
        }
      }
      if (flag === 'ok') {
        console.log('获取到的排序条件:', this.sortArray);
        this.$emit('update:sortOrder', this.sortArray);
        this.dialogVisible = false;
      } else {
        console.error('获取排序条件失败');
        // this.sortOrder.splice(0)
        this.$emit('update:sortOrder', []);
      }
    },
  },
};
</script>

<style lang="scss">
.filter-dialog-wp {
    .m-y-b-4 {
        margin-bottom: 20px;
    }
}
</style>
