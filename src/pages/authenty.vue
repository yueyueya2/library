<template>
  <div class="authenty">
      <div class="head">
            <i class="icon iconfont back" @click="back">&#xe600;</i>
            <div class="top"></div>
            <span class="word1">认证</span>
      </div>
      <div class="info">
        <input type="text" class="phone_number" placeholder="输入手机号" v-model="phone_number">
        <input type="text" class="id_number" placeholder="输入教务系统学号" v-model="id_number">
        <input type="password" class="id_password" placeholder="输入教务系统密码" v-modai="id_password">
        <input type="password" class="this_password" placeholder="输入该软件密码" v-model="this_password">
      </div>
      <input type="button" class="confirm" value="认证" @click="confirm">
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import my from '@/pages/my'
export default {
  data(){
    return{
      phone_number:'',
      id_number:'',
      id_password:'',
      this_password:''
    }
  },
  methods:{
    back:function(){
      this.$router.push({
        path:'my'
      })
    },
    confirm:function(){
      Toast({
              message:'认证成功',
              duration:600
            })
            setTimeout(()=>{
              this.$router.push({
                            path: 'my'
                        })
            },1000)
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

body{
    width: 100%;
    font-size: 16px;
}

:-ms-input-placeholder{
    font-family: NotoSansCJKsc-Regular;
    font-size: 14px;
    color: #AEAEAE;
}

::-webkit-input-placeholder{
    font-family: NotoSansCJKsc-Regular;
    font-size: 14px;
    color: #AEAEAE;
}

.authenty{
  position: absolute;
  top:0;
  width: 100%;
}

.head{
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
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

.info{
  position: absolute;
  top:6rem;
  left: 1rem;
}

.phone_number,.id_number,.id_password,.this_password,.confirm{
    position: absolute;
    width: 20rem;
    height: 3rem;
    top:0;
    padding-left: 0.5rem;
    background: #FFFFFF;
    border-radius: 4px;
    border: 0 white;
    -moz-box-shadow:0 0 10px #c9cccf;
    -webkit-box-shadow:0 0 10px #c9cccf;
    box-shadow:0 0 10px #c9cccf;
}

.id_number{
  top:4rem;
}

.id_password{
  top:8rem;
}

.this_password{
  top:12rem;
}

.confirm{
    top:23rem;
    position: absolute;
    width: 20.5rem;
    height: 3rem;
    left: 1rem;
    font-family: NotoSansCJKsc-Regular;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    background-image: linear-gradient(to right, #57BAD9 18%, #2593AE 100%);
    border-radius: 8px;
    border: 0 white;
    -moz-box-shadow:0 0 10px #c9cccf;
    -webkit-box-shadow:0 0 10px #c9cccf;
    box-shadow:0 0 10px #c9cccf;
}

</style>
