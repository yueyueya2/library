<template>
  <div class="root">
    <div  class="friends-details" v-for="friend in friends" :key="friend.id">
        <i class="icon iconfont smile">&#xe609;</i>
        <span class="word4">kkkkkk</span>
        <div class="border"></div>
        <input type="button" class="left-box" value="TA浏览">
        <input type="button" class="right-box" value="TA评价">
    </div>
  </div>
</template>

<script>
export default {
  data:{
    return(){
      friends:[1,2,3,4,5]
    }
  },
}
</script>

<style>
@font-face{
  font-family: "iconfont";
  src: url('../../static/icon2-1/iconfont.eot'); /* IE9*/
  src: url('../../static/icon2-1/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('../../static/icon2-1/iconfont.woff') format('woff'), /* chrome, firefox */
  url('../../static/icon2-1/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../../static/icon2-1/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.friends-details{
  position: absolute;
  top:2.5rem;
  left: 0;
}

.smile{
  position: absolute;
  top:0;
  left: .5rem;
  width: 3rem;
  height: 3rem;
  z-index: 1;
  font-size: 3rem;
  color: #2593AE;
}

.word4{
  position: absolute;
  top:3.5rem;
  left: 1rem;
  width: 2.1875rem;
  height: 1.25rem;
  z-index: 1;
  font-family: NotoSansCJKsc-Medium;
  font-size: .875rem;
  color: #5E5E5E;
}

.border{
  position: absolute;
  top:1rem;
  left: 0;
  width: 20.5rem;
  height: 4.125rem;
  z-index: 0;
  border-radius: 4px;
  border: solid 0.5px #d5d7d8;
  -moz-box-shadow:0 0 10px #d5d7d8;
  -webkit-box-shadow:0 0 10px #d5d7d8;
  box-shadow:0 0 10px #d5d7d8;
}

.left-box,.right-box{
  position: absolute;
  top:1.55rem;
  left: 4.75rem;
  width: 7.625rem;
  height: 3rem;
  z-index: 0;
  border-radius: 4px;
  border: solid 0.8px #d5d7d8;
  border-right: solid 1px #d5d7d8;
  -moz-box-shadow:0 0 10px #c9cbcc;
  -webkit-box-shadow:0 0 10px #c9cbcc;
  box-shadow:0 0 10px #c9cbcc;
  background: rgb(250, 248, 248);
  font-family: Roboto-Regular;
  font-size: 14px;
  color: #5E5E5E;
  text-align: center;
}

.right-box{
  left: 12.375rem;
}
</style>
