<template>
  <div class="my">
      <div class="mys">
          <div class="top"></div>
          <span class="word1">我的</span>
      </div>
      <div class="user">
          <i class="icon iconfont smile">&#xe609;</i>
          <div class="box"></div>
          <div class="username" >小李子</div>
          <div class="userschool" >广州大学</div>
          <i class="icon iconfont no_authenty"></i>
          <img class="authenty">
      </div>
      <div class="all_button">
          <input class="my_borrow" type="submit" value="我的借阅">
          <input class="my_collection" type="submit" value="我的收藏">
          <input class="clear" type="submit" value="消除缓存">
      </div>
      <page_bottom></page_bottom>
  </div>
</template>

<script>
import page_bottom from '../components/page_bottom'
export default {
  components:{
    page_bottom
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

body{
  font-size: 16px;
}

.my{
    width:100%;
    height: 100%;
}

.top{
    position: absolute;
    top:0;
    left: 0;
    height: 3.5rem;
    width:100%;
    background-image: linear-gradient(to right, #57BAD9 18%, #2593AE 100%);
    -moz-box-shadow:0 0 20px #c0c2c4;
    -webkit-box-shadow:0 0 20px #c0c2c4;
    box-shadow:0 0 20px #c0c2c4;
}

.word1{
    position: absolute;
    left: 3.875rem;
    top:.89375rem;
    width: 17.125rem;
    height: 1.8125rem;
    font-family: NotoSansCJKsc-Regular;
    font-size: 1.25rem;
    color: #FFFFFF;
    letter-spacing: 0;
}

.user{
    position: absolute;
    top:4.2rem;
    left: 1rem;
    width: 20.5rem;
    height: 8.8125rem;
    z-index: 0;
}

.smile{
  position: absolute;
    top:0;
    left: .5rem;
    width: 3rem;;
    height: 3rem;;
    z-index: 0;
    font-size: 3rem;
    color: #2593AE;
}

.box{
    position: absolute;
    top:1.5rem;
    left: 0;
    width:20.5rem;
    height: 7.5rem;
    z-index: -1;
    background: #DAF0F7;
    border-radius: 4px;
    -moz-box-shadow:0 0 10px #c9cccf;
    -webkit-box-shadow:0 0 10px #c9cccf;
    box-shadow:0 0 10px #c9cccf;
}

.username,.userschool{
    position: absolute;
    left: 4rem;
    width:16rem;
    z-index: 0;
    font-family: NotoSansCJKsc-Regular;
    font-size: 16px;
    color: #515151;
    letter-spacing: 1px;
}

.username{
    top:3.25rem;
    height: 1.6875rem;
}

.userschool{
    top:5.1875rem;
    height: 1.5rem;
}

.no_authenty,.authenty{
    position: absolute;
    top:6.9375rem;
    left: 4rem;
    width:30%;
    height: 1.125rem;
    display: block;
}

.all_button{
    position: relative;
    top:17.5rem;
    left: 1rem;
}

.my_borrow,.my_collection,.clear{
    height: 3rem;
    width: 20.5rem;
    position: absolute;
    border-radius: 4px;
    background: #FFFFFF;
    font-family: NotoSansCJKsc-Regular;
    font-size: 1rem;;
    color: #515151;
    letter-spacing: 1px;
    text-align: center;
    border:0 #E2E1E1;
    -moz-box-shadow:0 0 5px #c9cccf;
    -webkit-box-shadow:0 0 5px #c9cccf;
    box-shadow:0 0 5px #c9cccf;
}

.my_borrow{
  position: absolute;
  top:0;
}

.my_collection{
    position: absolute;
    top:3.8rem;
}
.clear{
    position: absolute;
    top:12rem;
}

</style>
