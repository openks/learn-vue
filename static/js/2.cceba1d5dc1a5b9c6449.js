webpackJsonp([2],{106:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"zInput"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBig,expression:"showBig"}],staticClass:"big-show"},[t._v(t._s(t.txt2))]),t._v(" "),e("input",{attrs:{type:"text"},domProps:{value:t.txt},on:{blur:t.handerBlur,focus:t.handerFocus,input:t.handerInput}}),t._v(" "),e("p",[t._v("手机号银行卡的同步显示功能")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("code",[t._v("\n      1. 输入框输入内容数据长度大于0，展示出预览信息"),e("br"),t._v("\n      2. 光标离开关闭预览信息"),e("br"),t._v("\n      3. 预览信息每隔4位插入一个特殊字符_,输入内容不变"),e("br"),t._v("\n      4. 只能输入13位"),e("br"),t._v("\n      5. 只能输入数字"),e("br")])}]}},77:function(t,n,e){function o(t){e(99)}var s=e(7)(e(83),e(106),o,null,null);t.exports=s.exports},83:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"z-input",data:function(){return{txt:"",txt2:"",showBig:!1}},methods:{handerBlur:function(){this.showBig=!1},handerFocus:function(t){t.target.value.length>0&&(this.showBig=!0)},handerInput:function(t){var n=t.target.value.substr(0,13).replace(/[^\d]/g,"");t.target.value=n,this.txt=n,this.txt.length>0&&(this.showBig=!0),this.txt2=this.getStr(this.txt,4)},getStr:function(t,n){for(var e=t.length,o=n-1,s="",r=0;r<e;r++)s+=r%n===o&&r>0?t.charAt(r)+"_":t.charAt(r);return s.length%(n+1)==0&&(s=s.substr(0,s.length-1)),s}}}},94:function(t,n,e){n=t.exports=e(73)(!0),n.push([t.i,".zInput{position:relative}.zInput .big-show{position:absolute;top:-40px;font-size:36px;line-height:40px;background-color:red}.zInput{top:50px}","",{version:3,sources:["/home/travis/build/openks/learn-vue/src/demo/component/CompD.vue"],names:[],mappings:"AACA,QACE,iBAAmB,CACpB,AACD,kBACI,kBAAmB,AACnB,UAAW,AACX,eAAgB,AAChB,iBAAkB,AAClB,oBAAsB,CACzB,AACD,QACE,QAAU,CACX",file:"CompD.vue",sourcesContent:["\n.zInput {\n  position: relative;\n}\n.zInput .big-show {\n    position: absolute;\n    top: -40px;\n    font-size: 36px;\n    line-height: 40px;\n    background-color: red;\n}\n.zInput {\n  top: 50px;\n}\n"],sourceRoot:""}])},99:function(t,n,e){var o=e(94);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(74)("5a55cb09",o,!0,{})}});
//# sourceMappingURL=2.cceba1d5dc1a5b9c6449.js.map