<template>
<div>
  <el-button type="primary"
             size="small"
             @click="testBtnClick('showDialog1')">根据不同参数动态设置校验规则</el-button>
  <el-button type="primary"
             size="small"
             @click="pushToUrl('/compa')">element-ui通用表格</el-button>
  <el-button type="primary"
             size="small"
             @click="pushToUrl('/compc')">表格行首添加单选按钮</el-button>
  <comp-b :visible.sync="showDialog1"></comp-b>
</div>
</template>

<script>
import CompB from '@/demo/component/CompB';

export default {
  components: {
    CompB,
  },
  data() {
    return {
      showDialog1: false,
      showDialog2: false,
      showDialog3: false,
      showDialog4: false,
      showDialog5: false,
    };
  },
  methods: {
    pushToUrl(url) {
      this.$router.push(url);
    },
    saveDialog() {
      console.log('您点击了保存按钮');
    },
    cancelDialog() {
      console.log('您点击了取消按钮');
    },
    testBtnClick(item) {
      this[item] = !this[item];
    },
  },
};
</script>

<style lang="scss">
</style>
