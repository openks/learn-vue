<!--
表格添加单选按钮组
 -->
<template lang="html">
<div class="comB">
    <el-radio-group v-model="radio2">
        <el-table ref="singleTable"
                  :data="tableData"
                  highlight-current-row
                  @row-click="handerRowClick"
                  @current-change="handleCurrentChange"
                  style="width: 100%">
            <el-table-column label="日期" width="190">
                <template slot-scope="scope">
                    <el-radio :label="scope.row.date"> </el-radio>
                </template>
            </el-table-column>
            <el-table-column property="date"
                             label="日期"
                             width="120"> </el-table-column>
            <el-table-column property="name"
                             label="姓名"
                             width="120"> </el-table-column>
            <el-table-column property="address"
                             label="地址"> </el-table-column>
        </el-table>
    </el-radio-group>
    <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
        <el-button @click="setCurrent()">取消选择</el-button>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      radio2: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
      currentRow: null,
    };
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
      if (row === undefined) {
        this.radio2 = '';
      } else {
        this.radio2 = row.date;
      }
    },
    handerRowClick(row) {
      this.$refs.singleTable.setCurrentRow(row);
      this.radio2 = row.date;
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
  },
};
</script>

<style lang="scss">
.comB {
    width: 800px;
    margin: 30px;
    .el-radio-group {
        display: block;
    }
}
</style>
