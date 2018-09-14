<template>
<div class="bottom">
  <i class="iconfont home"
  @click="change(1)"
  :class="{'home1':home===1}">&#xe602;</i>
  <i class="iconfont friend"
  @click="change(1)"
  :class="{'friend1':friend===1}">&#xe603;</i>
  <i class="iconfont my"
  @click="change(1)"
  :class="{'my1':my===1}">&#xe60d;</i>
</div>
</template>

<script>
export default {
  data(){
    return {
      friend:0,
      home:0,
      my:0
    }
  },

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

.bottom{
  position: fixed;
  width: 22.5rem;
  height: 3rem;
  bottom: 0;
  left: 0;
}

.home,.friend,.my{
  position: fixed;
  width: 34%;
  height: 3rem;
  font-size:2.5rem;
  color: #E1E1E1;
  border:#E1E1E1;
  background: #F5F5F5;
}

.home{
  left: 0;
  color: #8ED3EB;
}
.home1{
  color: #E1E1E1;
}

.friend{
  left: 33.3%;
  color: #E1E1E1;
}
.friend1{
  color: #8ED3EB;
}

.my{
  left: 66.6%;
  color: #E1E1E1;
}
.my1{
  color: #8ED3EB;
}

</style>
