排序条件组合弹框

```js
<div>
    <el-button
        @click="showFilterDialog=!showFilterDialog"
        type="primary"
        size="small">
        点击查看效果
    </el-button>
    <filter-dialog
        :filterDialogVisible.sync="showFilterDialog"
        :tableObj="tableObjData"
        :sortOrder.sync="sortOrderData">
    </filter-dialog>
</div>
```
