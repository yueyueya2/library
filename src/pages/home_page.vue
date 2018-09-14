<template>
  <div class="home_page">
      <div class="head">
          <span class="head_word">小懂首页</span>
          <i class="icon iconfont search">&#xe601;</i>
      </div>
      <div class="notice">
          <span class="word1">公告</span>
          <div class="commit1">还书了吗？来评个分吧？</div>
      </div>
      <div class="guess-you-like">
          <div class="like"></div>
          <span class="word5">猜你喜欢</span>
          <div class="border5"></div>
          <swipe class="slide_book"></swipe>
      </div>
      <div class="recommend-to-you">
          <div class="recommend"></div>
          <span class="word7">为你推荐</span>
          <div class="recommend_book">
              <i class="icon iconfont hot_book">&#xe60e;</i>
              <span class="hot_word">热门书籍<br>推荐</span>
              <i class="icon iconfont classic_book">&#xe60f;</i>
              <span class="classic_word">经典书籍<br>推荐</span>
          </div>
      </div>
      <div class="book-situation">
          <div class="situation"></div>
          <span class="word6">图书情况</span>
          <div class="book-table">
              <div class="book-table-1">
                  <div class="border2"></div>
                  <span class="word2">每日借书人数</span>
                  <daily_borrow class="column"></daily_borrow>
              </div>
              <div class="book-table-2">
                  <div class="border3"></div>
                  <span class="word3">今日借书类别占比</span>
                  <borrow_classify class="circle"></borrow_classify>
              </div>
              <div class="book-table-3">
                  <div class="border4"></div>
                  <span class="word4">各类书的一周借阅时间总和</span>
                  <borrow_time class="graph"></borrow_time>
              </div>
          </div>
      </div>
      <div class="white"></div>
      <page_bottom class="bottom"></page_bottom>
  </div>
</template>

<script>
import page_bottom from '../components/page_bottom'
import daily_borrow from '../components/daily_borrow'
import borrow_classify from '../components/borrow_classify'
import borrow_time from '../components/borrow_time'
import swipe from '../components/swipe'
export default {
  components:{
    page_bottom,
    daily_borrow,
    borrow_classify,
    borrow_time,
    swipe
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

html{
  font-size: 16px;
  background:#F8F8FF;
}

.home_page{
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

.head_word{
  position: fixed;
  left: 3.875rem;
  top:0.89rem;
  width: 17.125rem;
  height: 1.8125rem;
  z-index:5;
  font-family: NotoSansCJKsc-Regular;
  font-size: 1.25rem;
  color: #FFFFFF;
  letter-spacing: 0;
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

.notice{
  position: absolute;
  top:3.9375rem;
  height: 2rem;
  width: 22.5rem;
  border-top: solid 1px #979797;
  border-bottom: solid 1px #979797;
}

.word1{
  position: absolute;
  left: 1rem;
  top: 0.375rem;
  width: 2.75rem;
  height: 1.25rem;
  font-family: NotoSansCJKsc-Regular;
  font-size: 0.875rem;
  color: #5E5E5E;
}

.commit1{
  position: absolute;
  left: 3.8125rem;
  top:0.375rem;
  width: 12.5rem;
  height: 1.25rem;
  font-family: NotoSansCJKsc-Regular;
  font-size:  0.875rem;
  color: #3F3E3E;
}

.guess-you-like{
  position: absolute;
  width: 22.5rem;
  height: 13rem;
  top:6.5rem;
}

.like{
  position: absolute;
  left: 1rem;
  top: 0;
  width: 20.5rem;
  height: 1.7rem;
  border: 0 white;
  border-radius:4px;
  z-index:-1;
  background-color: #57BAD9;
  -moz-box-shadow:0 0 20px #c0c2c4;
  -webkit-box-shadow:0 0 20px #c0c2c4;
  box-shadow:0 0 20px #c0c2c4;
}

.word5{
  position: absolute;
  top:0.1rem;
  left: 1rem;
  width: 20.5rem;
  height: 1.5rem;
  font-family: NotoSansCJKsc-Medium;
  font-size: 1.1rem;
  z-index: 0;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-align: center;
}

.border5{
  position: absolute;
  left:1rem;
  top:2.1rem;
  width: 20.5rem;
  height: 10rem;
  border: 1px solid #D8F0F7;
}

.slide_book{
  position: absolute;
  left:1rem;
  top:2.1rem;
  width: 20.5rem;
  height: 10rem;
}

.recommend-to-you{
  position: absolute;
  width: 22.5rem;
  top:19.2rem;
}

.recommend{
  position: absolute;
  left: 1rem;
  width: 20.5rem;
  height: 1.7rem;
  border: 0 white;
  border-radius:4px;
  background-color: #57BAD9;
  -moz-box-shadow:0 0 20px #c0c2c4;
  -webkit-box-shadow:0 0 20px #c0c2c4;
  box-shadow:0 0 20px #c0c2c4;
}

.word7{
  position: absolute;
  top:0.1rem;
  left: 1rem;
  width: 20.5rem;
  height: 1.5rem;
  font-family: NotoSansCJKsc-Medium;
  font-size: 1.1rem;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-align: center;
}

.hot_book,.classic_book{
  position: absolute;
  top:1.7rem;
  width: 10rem;
  z-index: -1;
  font-size:6rem;
}

.hot_word,.classic_word{
  position: absolute;
  top:3rem;
  font-family: NotoSansCJKsc-Regular;
  font-size: 24px;
  color: #5E5E5E;
  letter-spacing: 2px;
  text-align: center;
}

.hot_word{
  left: 2.5rem;
}

.hot_book{
  left: 0.8rem;
  color:#FFE3E0;
}

.classic_word{
  left: 13.5rem;
}

.classic_book{
  left: 11.8rem;
    color: #DBF0F7;
}

.book-situation{
  position: absolute;
  top:28rem;
  width: 22.5rem;
}

.situation{
  position: absolute;
  left: 1rem;
  width: 20.5rem;
  height: 1.7rem;
  border: 0 white;
  border-radius:4px;
  background-color: #57BAD9;
  -moz-box-shadow:0 0 20px #c0c2c4;
  -webkit-box-shadow:0 0 20px #c0c2c4;
  box-shadow:0 0 20px #c0c2c4;
}

.word6{
  position: absolute;
  top:0.1rem;
  left: 1rem;
  width: 20.5rem;
  height: 1.5rem;
  font-family: NotoSansCJKsc-Medium;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-align: center;
}

.book-table{
  position: absolute;
  top:2.2rem;
  width: 22.5rem;
}

.book-table-1{
  position: absolute;
  width: 22.5rem;
  height: 14rem;
}

.book-table-2{
  position: absolute;
  width: 22.5rem;
  top:14.5rem;
  height: 16rem;
}

.book-table-3{
  position: absolute;
  width: 22.5rem;
  top:31rem;
  height: 14rem;
}

.border2,.border4{
  position: absolute;
  left: 1rem;
  width: 20.5rem;
  height: 14rem;
  z-index: -1;
  border: solid 1px #E6E6FA;
}

.word2,.word3,.word4{
  position: absolute;
  left: 1rem;
  top:0.1rem;
  width: 20.5rem;
  height: 1.2rem;
  text-align: center;
  font-family: NotoSansCJKsc-Regular;
  font-size: 14px;
  color: black;
  letter-spacing: 1px;
}

.border3{
  position: absolute;
  left: 1rem;
  width: 20.5rem;
  height: 16rem;
  border: solid 1px #E6E6FA;
}

.graph,.circle,.column{
  position: absolute;
  top:2rem;
}

.white{
  position: absolute;
  top:76rem;
  width: 22.5rem;
  height: 3rem;
}

.bottom{
  position: fixed;
  bottom: 0;
}

</style>

