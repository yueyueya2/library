<template>
  <div class="friend">
    <div class="head">
        <div class="top"></div>
        <span class="word1">书友</span>
    </div>
    <div class="similar">
        <div class="blue-background1"></div>
        <span class="word2">相似度推荐书友</span>
        <div class="simi1">
        </div>
        <div class="simi2">
        </div>
        <div class="simi3">
        </div>
    </div>
    <div class="my-friend">
        <div class="blue-background2"></div>
        <span class="word3">我的书友</span>
        <book_friend class="friends-details"></book_friend>
    </div>
    <page_bottom class="bottom"></page_bottom>
  </div>

</template>

<script>
import page_bottom from '../components/page_bottom'
import book_friend from '../components/book_friend'
export default {
  components:{
    page_bottom,
    book_friend
  },
  data:{
      friends:["小明","小杜","小二","小李"]
  }
}
</script>

<style scoped>
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
  width:100%;
}

.friend{
  position: relative;
  top:0;
  left: 0;
}

.head{
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
}

.top{
    position: absolute;
    width: 100%;
    top:0;
    left: 0;
    height: 3.5rem;
    background-image: linear-gradient(to right, #57BAD9 18%, #2593AE 100%);
    -moz-box-shadow:0 0 20px #d5d7d8;
    -webkit-box-shadow:0 0 20px #d5d7d8;
    box-shadow:0 0 20px #d5d7d8;
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

.similar{
  position: absolute;
  top:4.2rem;
  left: 1rem;
}

.blue-background1{
  position: absolute;
  top:0;
  left: 0;
  width:20.5rem;
  height: 1.7rem;
  border: 0 white;
  border-radius:4px;
  z-index:-1;
  background-color: #57BAD9;
  -moz-box-shadow:0 0 20px #d5d7d8;
  -webkit-box-shadow:0 0 20px #d5d7d8;
  box-shadow:0 0 20px #d5d7d8;
}

.word2{
  position: absolute;
  top:0.1rem;
  left: 0;
  width: 20.5rem;
  height: 1.5rem;
  font-family: NotoSansCJKsc-Medium;
  font-size: 1.1rem;
  z-index: 0;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-align: center;
}

.my-friend{
  position: absolute;
  top:12.5rem;
  left: 1rem;
}

.blue-background2{
  position: absolute;
  top:0;
  left: 0;
  width:20.5rem;
  height: 1.7rem;
  border: 0 white;
  border-radius:4px;
  z-index:-1;
  background-color: #57BAD9;
  -moz-box-shadow:0 0 20px #d5d7d8;
  -webkit-box-shadow:0 0 20px #d5d7d8;
  box-shadow:0 0 20px #d5d7d8;
}

.word3{
  position: absolute;
  top:0.1rem;
  left: 0;
  width: 20.5rem;
  height: 1.5rem;
  font-family: NotoSansCJKsc-Medium;
  font-size: 1.1rem;
  z-index: 0;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-align: center;
}

.friends-details{
  position: absolute;
  top:2.5rem;
  left: 0;
}

.bottom{
  position: fixed;
  bottom: 0;
}

</style>

