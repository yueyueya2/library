<template>
  <div id="my_borrow">
    <div class="head">
            <i class="icon iconfont back" @click="back">&#xe600;</i>
            <div class="top"></div>
        <span class="word1">我的收藏</span>
    </div>
    <div class="order">
        <div class="borrow_order">
            <div class="borrow_border"></div>
            <span class="borrow_word"></span>
        </div>
        <div class="score_order">
            <div class="score_border"></div>
            <span class="score_word"></span>
        </div>
    </div>
    <div class="book">
      <div class="border"></div>
      <img class="book_photo">
      <div class="word">
          <span class="name"></span>
          <span class="author"></span>
          <span class="publish"></span>
      </div>
      <span class="number_of_borrow"></span>
      <input type="button" value="取消收藏" class="cancel">
      <div class="circle">
        <div class="rate_of_borrow">
          <i class="icon iconfont red"></i>
          <span class="rate_word">校内借阅率</span>
          <span class="percentage_of_borrow">98%</span>
        </div>
        <div class="score_of_douban">
          <i class="icon iconfont blue"></i>
          <span class="score_word">豆瓣评分</span>
          <span class="score_of_douban">7分</span>
        </div>
      </div>
    </div>
  </div>
</template>
