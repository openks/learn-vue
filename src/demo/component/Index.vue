<template>
<!--
弹框使用主要按钮
跳页使用默认按钮
 -->
<div class="index-wp">
  <el-button type="primary"
             plain
             size="small"
             @click="testBtnClick('showDialog1')">根据不同参数动态设置校验规则</el-button>
  <el-button size="small"
             @click="pushToUrl('/compa')">element-ui通用表格</el-button>
  <el-button size="small"
             @click="pushToUrl('/compc')">表格行首添加单选按钮</el-button>
  <el-button size="small"
             @click="pushToUrl('/compd')">手机号银行卡的同步显示功能</el-button>
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
.index-wp {
  display: flex;
  flex-wrap: wrap;
  .el-button {
    margin: 5px;
  }
}
</style>
