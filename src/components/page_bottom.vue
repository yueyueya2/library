<template>
  <div class="bottom">
      <i class="iconfont home"><router-link to="/home_page" exact>&#xe602;</router-link></i>

      <i class="iconfont friend"><router-link to="/friend" exact>&#xe603;</router-link></i>

      <i class="iconfont my"><router-link to="/my" exact>&#xe60d;</router-link>&#xe60d;</i>
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
  methods:{
    changehome:function(){
      this.home=1;
      this.friend=0;
      this.my=0;
    },
    changefriend:function(){
      this.home=0;
      this.friend=1;
      this.my=0;
    },
    changemy:function(){
      this.home=0;
      this.friend=0;
      this.my=1;
    },
  },
  computed:{
    page_start:function(){
      this.home=1;
      this.friend=0;
      this.my=0;
    },
  }

}
</script>

<style scoped>

a{
    color: #E1E1E1;
    text-decoration: none;
}

.router-link-active {
    color: #8ED3EB;
    text-decoration: none;
}

@font-face{
  font-family: "iconfont";
  src: url('../../static/icon2-1/iconfont.eot'); /* IE9*/
  src: url('../../static/icon2-1/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('../../static/icon2-1/iconfont.woff') format('woff'), /* chrome, firefox */
  url('../../static/icon2-1/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../../static/icon2-1/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" ;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.bottom{
  position: fixed;
  width: 100%;
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
}

.friend{
  left: 33.3%;
}

.my{
  left: 66.6%;
}

</style>
