<template>
<div class="bottom">
  <i class="iconfont home" @click="tohome">&#xe602;</i>
  <i class="iconfont friend" @click="tofriend">&#xe604;</i>
  <i class="iconfont my" @click="tomy">&#xe60c;</i>
</div>
</template>

<script>
export default {
  data(){
    return {
      footerIndex:'',
      active:false
    }
  },
  methods:{
    tohome(){
      this.$router.push({path:'/home_page'})
      if(this.innerHTML=="&#xe602;"){
        this.innerHTML="&#xe605;";
      }else{
        this.innerHTML="&#xe602;";
        this.style="color:#8ED3EB";
        this.style="color:#E1E1E1";
      }
    },
    tofriend(){
      this.$router.push({path:'/book_friend'})
      if(this.innerHTML=="&#xe604;"){
        this.innerHTML="&#xe603;"
        this.style="color:#8ED3EB";
      }else{
        this.innerHTML="&#xe604;"
        this.style="color:#E1E1E1";
      }
    },
    tomy(){
      this.$router.push({path:'/my'})
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
  width: 33.3%;
  height: 3rem;
  color: #E1E1E1;
  background: #F5F5F5;
}

.home{
  left: 0;
  font-size:2.5rem;
  color: #8ED3EB;
}

.friend{
  left: 33.3%;
  font-size: 3rem;
}

.my{
  left: 66.6%;
  font-size: 3rem;
}

</style>
