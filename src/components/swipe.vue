<template>
<div class="slideshow">
  <div class="book">
    <mt-swipe :auto="5000" ref="swipeWrapper" class="swipe">
      <mt-swipe-item class="swip-item"></mt-swipe-item>
      <mt-swipe-item class="swip-item"></mt-swipe-item>
      <mt-swipe-item class="swip-item"></mt-swipe-item>
    </mt-swipe>
  </div>
  <div class="slidebutton">
    <i class="icon iconfont pre" @click="pre"></i>
    <i class="icon iconfont next" @click="next"></i>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  methods:{
    pre(){

    },
    next(){

    },
    loadImg: function (path) {
      require(path)
    }
  },
  components:{
    'mt-swipe':Swipe,
    'mt-swipe-item':SwipeItem
  }
}
</script>

<style scoped>
html{
  position: relative;
  width: 22.5rem;
  font-size: 16px;
}
.slideshow{
  position: relative;
  width: 22.5rem;
}
.book{
  position: absolute;
  width: 22.5rem;
}
.swipe{
  position: absolute;
    width: 100%;
    height: 200px;
}
</style>
