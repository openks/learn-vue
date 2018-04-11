<template lang="html">
  <div class="zInput">
      <div class="big-show" v-show="showBig">{{txt2}}</div>
      <input type="text"
             @blur="handerBlur"
             @focus="handerFocus"
             :value="txt"
             @input="handerInput">
      <p>手机号银行卡的同步显示功能</p>
      <code>
        1. 输入框输入内容数据长度大于0，展示出预览信息<br>
        2. 光标离开关闭预览信息<br>
        3. 预览信息每隔4位插入一个特殊字符_,输入内容不变<br>
        4. 只能输入13位<br>
        5. 只能输入数字<br>
      </code>
  </div>
</template>

<script>
export default {
  name: 'z-input',
  data() {
    return {
      txt: '',
      txt2: '',
      showBig: false,
    };
  },
  methods: {
    handerBlur() {
      this.showBig = false;
    },
    handerFocus(evt) {
      if (evt.target.value.length > 0) {
        this.showBig = true;
      }
    },
    handerInput(evt) {
      const val = evt.target.value.substr(0, 13).replace(/[^\d]/g, '');
      // console.log('handerInput__val', val);
        // 这里拿到的val是纯数字
       // eslint-disable-next-line
      evt.target.value = val;
      this.txt = val;
      if (this.txt.length > 0) {
        this.showBig = true;
      }
      this.txt2 = this.getStr(this.txt, 4);
    },
    getStr(str, len) {
      const lenth = str.length;
      const len1 = len - 1;
      let newStr = '';
      for (let i = 0; i < lenth; i++) {
        if (i % len === len1 && i > 0) {
          newStr += `${str.charAt(i)}_`;
        } else {
          newStr += str.charAt(i);
        }
      }
      if (newStr.length % (len + 1) === 0) {
        // 解决最后一位为补充项问题
        newStr = newStr.substr(0, newStr.length - 1);
      }
      return newStr;
    },
  },
};
</script>

<style lang="scss">
.zInput {
    position: relative;
    .big-show {
        position: absolute;
        top: -40px;
        font-size: 36px;
        line-height: 40px;
        background-color: red;
    }
}
.zInput {
    top: 50px;
}
</style>
