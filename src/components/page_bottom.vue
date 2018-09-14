<template>
<div class="bottom">
  <div class="background"></div>
  <i class="iconfont home" @click="tohome">&#xe602;</i>
  <i class="iconfont friend" @click="tofriend">&#xe603;</i>
  <i class="iconfont my" @click="tomy">&#xe60d;</i>
</div>
</template>

<script>
export default {
  data(){
    return {
      footerhome:'',
      active:false
    }
  },
  methods:{
    tohome(){
      if(home.style.color=="#E1E1E1"){
        home.style.color="#8ED3EB";
        home.$router.push({path:'/home_page'})
      }
    },
    tofriend(){
      if(friend.style.color=="#E1E1E1"){
        friend.style.color="#8ED3EB";
        friend.$router.push({path:'/book_friend'})
      }
    },
    tomy(){
      if(home.style.color=="#E1E1E1"){
        home.style.color="#8ED3EB";
        home.$router.push({path:'/my'})
      }
    }
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

.friend{
  left: 33.3%;
}

.my{
  left: 66.6%;
}

</style>
