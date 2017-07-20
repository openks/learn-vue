<template>
  <div class="login">
    <el-input v-model="username" placeholder="请输入用户名"></el-input>
    <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
    <el-button type="button">登陆</el-button>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>
