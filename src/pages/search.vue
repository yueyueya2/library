<template>
  <div class="searchfor">
    <div class="head">
        <i class="icon iconfont back" @click="back">&#xe600;</i>
        <div class="top"></div>
        <input type="text" class="search_word" placeholder="输入书名、作者名等">
        <div class="line"></div>
        <i class="icon iconfont search">&#xe601;</i>
    </div>
  </div>
</template>

<script>
import home_page from '@/pages/home_page'
export default {
  methods:{
    back:function(){
      this.$router.push({
        path:'home_page'
      })
    }
  }
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

:-ms-input-placeholder{
    font-family: NotoSansCJKsc-Regular;
    font-size: 14px;
    color: white;
}

::-webkit-input-placeholder{
    font-family: NotoSansCJKsc-Regular;
    font-size: 14px;
    color: white;
}

html{
  font-size: 16px;
  background:#F8F8FF;
}

.searchfor{
  position: relative;
  top:0;
  left: 0;
  width:100%;
}

.head{
  position: fixed;
  top:0;
  left: 0;
  height: 3.5rem;
  width: 22.5rem;
  z-index:5;
  background: linear-gradient(to right, #57BAD9 18%, #2593AE 100%);
  -moz-box-shadow:0 0 20px #c0c2c4;
  -webkit-box-shadow:0 0 20px #c0c2c4;
  box-shadow:0 0 20px #c0c2c4;
}

.back{
    position: absolute;
    top:1.125rem;
    left: 1.125rem;
    height: 1.25rem;
    width:1.25rem;
    z-index: 2;
    color: white;
    font-size: 20px;
}

.search_word{
  position: absolute;
  top:0.9rem;
  left: 4rem;
  width: 15.875rem;
  height: 2rem;
  border: none;
  background: linear-gradient(to right, rgb(75, 183, 216) 18%, #2593AE 100%);
}

.line{
  position: absolute;
  top:2.9rem;
  left: 4rem;
  width: 17.625rem;
  height: 0.1px;
  background: #D8D8D8;
  border: 1px solid #FFFFFF;
}

.search{
  position: fixed;
  z-index:5;
  left:19.8125rem;
  top:0.9375rem;
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  font-size:1.5rem;
}
</style>
