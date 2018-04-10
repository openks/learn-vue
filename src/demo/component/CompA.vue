<!--
element-ui通用表格
 -->
<template>
<div class="comA">
  <h1>element-ui通用表格</h1>
  <el-form label-width="80px"
           ref='formLabelAlign'
           :model="formLabelAlign">
    <el-form-item label="名称1"
                  prop="name1">
      <el-input v-model="formLabelAlign.name1"> </el-input>
    </el-form-item>
    <el-form-item label="名称2"
                  prop="name2">
      <el-input v-model="formLabelAlign.name2"></el-input>
    </el-form-item>
    <el-form-item label="名称3"
                  prop="name3">
      <el-input v-model="formLabelAlign.name3"></el-input>
    </el-form-item>
    <el-form-item label="名称4"
                  prop="name4">
      <el-input v-model="formLabelAlign.name4"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="submitForm('formLabelAlign')">确定</el-button>
      <el-button @click="resetForm('formLabelAlign')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      result: '',
      formLabelAlign: {
        name1: '',
        name2: '',
        name3: '',
        name4: '',
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      const url = '';
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('保存弹框数据', this.formLabelAlign, url);
          this.$axios.post(url, {
            body: { ...this.formLabelAlign,
            },
          })
            .then((res) => {
              console.log(res, 'res');
            })
            .catch((err) => {
              console.error(err);
            });
        }
      });
    },
  },
};
</script>

<style lang="scss">
.comA {
    width: 500px;
    margin: 30px;
}
</style>
