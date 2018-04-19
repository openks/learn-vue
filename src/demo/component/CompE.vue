<template lang="html">
  <div class="demo-f">
      <div class="demo-header"></div>
      <div class="demo-body">
          <div class="demo-menu"></div>
          <div class="demo-content">
              <div class="content">
                  <h1>flex内部的块状子元素在不同浏览器上高度显示不一致</h1>
                  <p>父节点为flex布局，子节点设置宽高100%</p>
                  <p>在chrome 49版本里子节点高度由内部孙节点的高度撑起(底色紫色,子节点绿色)</p>
                  <p>在chrome 59版本里子节点高度和父节点高度一致(显示为绿色)</p>
                  <p>其实父节点如果为flex布局,子节点设置flex:1即可填充整个区域</p>
              </div>
          </div>
      </div>
  </div>
</template>

<style lang="css">
.demo-f {
    height: 100%;
    width: 100%;
    background: red;
    display: flex;
    flex-direction: column;
}
.demo-header{
    width: 100%;
    height: 100px;
    background-color: blue;
}
.demo-body{
    display: flex;
    flex:1;
    flex-direction: row;
    background-color: yellow;
}
.demo-menu {
    width: 20%;
    background-color: pink;
}
.demo-content {
    display: flex;
    flex: 1;
    background-color: purple;
}
.content{
    width: 100%;
    height: 100%;
    background-color: green;
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
}
</style>
