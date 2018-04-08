<template>
<div class="login">
  <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0px" class="demo-loginForm">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')"></el-input>
    </el-form-item>
    <div class="login-btn">
      <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
    </div>
    <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
  </el-form>
</div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const self = this;
      self.$refs[formName].validate((valid) => {
        console.log('from', self.$refs[formName]);
        if (valid) {
          localStorage.setItem('ms_username', self.$refs[formName].username);
          self.$router.push('/test');
        } else {
          console.log('error submit!!');
          return false;
        }
        return false;
      });
    },
  },
};
</script>
