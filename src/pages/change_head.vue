<template>
  <div class="all">
    <div class="head">
        <i class="icon iconfont back">&#xe600;</i>
        <div class="top"></div>
        <span class="word1">修改信息</span>
    </div>
    <div class="photo">
        <i class="icon iconfont smile">&#xe609;</i>
        <div class="border"></div>
        <input type="button" class="take_photo" value="拍照" @click="photo">
        <input type="button" class="choose_photo" value="从相册中选择照片" @click="choose">
    </div>
    <div class="info">
        <div class="name_box">
            <span class="name">昵称</span>
        </div>
        <input class="name_c" type="text" placeholder="点击修改，同下">
        <div class="school_box">
            <span class="school">学校</span>
        </div>
        <input class="school_c" type="text" placeholder="">
    </div>
    <div class="button">
        <input type="button" class="change_password" value="修改密码" @click="change">
        <input type="button" class="logout" value="退出登录" @click="logout">
    </div>
</div>
</template>

<script>
import change_password2 from '@/pages/change_password2'
import login from '@/pages/login'
import {Toast} from 'mint-ui'
export default {
  methods:{
    photo:function(){

    },
    choose:function(){

    },
    change:function(){
    Toast({
        message:'正在前往修改密码',
        duration:600
    })
    setTimeout(()=>{
      this.$router.push({
                    path: 'change_password2'
                })
    },1000)
    },
    logout:function(){
      this.$router.push({path:'login'})
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

all{
  position: absolute;
  width: 22.5rem;
  height: 40rem;
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
    width: 150%;
    top:0;
    left: 0;
    height: 3.5rem;
    background-image: linear-gradient(to right, #57BAD9 18%, #2593AE 150%);
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

.photo{
  position: absolute;
  top:4rem;
  left: 1rem;
  width: 20.5rem;
}

.smile{
  position: absolute;
  top:0;
  width: 6.5rem;
  height: 6.5rem;
  left: 7.1rem;
  font-size: 6.5rem;
  color: #2593AE;
}

.take_photo,.choose_photo{
  position: absolute;
  top:7.5rem;
  left: .9375rem;
  width: 18.625rem;
  height: 3rem;
  background: #FFFFFF;
  border-radius: 4px;
  border: none;
  -moz-box-shadow:0 0 15px #c9cbcc;
  -webkit-box-shadow:0 0 15px #c9cbcc;
  box-shadow:0 0 15px #c9cbcc;
}

.choose_photo{
  top:11rem;
}

.border{
  position: absolute;
  top:3.25rem;
  left: 0;
  width: 20.5rem;
  height: 11.5625rem;
  background: #DAF0F7;
  border-radius: 4px;
  z-index: -2;
  border: none;
}

.info{
  position: absolute;
  top:21rem;
  left: 1rem;
  width: 20.5rem;
}
.name_box,.school_box{
  position: absolute;
  top:0;
  left: 0;
  width: 3.625rem;
  height: 3rem;
  background: #DAF0F7;
  border-radius: 4px;
  border: none;
  border-right: solid 1px #d5d7d8;
  -moz-box-shadow:0 0 15px #c9cbcc;
  -webkit-box-shadow:0 0 15px #c9cbcc;
  box-shadow:0 0 15px #c9cbcc;
}

.name,.school{
  position: absolute;
  top:.75rem;
  left: .75rem;
  font-family: NotoSansCJKsc-Regular;
  font-size: 1rem;
  color: #515151;
  letter-spacing: 1px;
  text-align: center;
}
.name_c,.school_c{
  position: absolute;
  top:0;
  left: 3.625rem;
  width: 15.875rem;
  height: 3rem;
  padding-left: 1rem;
  border: none;
  background: #FFFFFF;
  border-radius: 4px;
  -moz-box-shadow:0 0 15px #c9cbcc;
  -webkit-box-shadow:0 0 15px #c9cbcc;
  box-shadow:0 0 15px #c9cbcc;
}
.school_box,.school_c{
  position: absolute;
  top:3.8rem;
}
.button{
  position: absolute;
  top:30rem;
  left: 1rem;
  width: 20.5rem;
}
.change_password{
  position: absolute;
  top:0;
  left: 0;
  width: 20.5rem;
  height: 3rem;
  background: #FFFFFF;
  border: none;
  border-radius: 4px;
  -moz-box-shadow:0 0 15px #c9cbcc;
  -webkit-box-shadow:0 0 15px #c9cbcc;
  box-shadow:0 0 15px #c9cbcc;
  font-family: NotoSansCJKsc-Regular;
  font-size: 18px;
  color: #515151;
  letter-spacing: 1px;
  text-align: center;
}

.logout{
  position: absolute;
  top:4rem;
  left: 0;
  width: 20.5rem;
  height: 3rem;
  background-image: linear-gradient(to right, #57BAD9 18%, #2593AE 100%);
  border-radius: 8px;
  border: none;
  border-radius: 4px;
  -moz-box-shadow:0 0 15px #c9cbcc;
  -webkit-box-shadow:0 0 15px #c9cbcc;
  box-shadow:0 0 15px #c9cbcc;
  font-family: NotoSansCJKsc-Regular;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
}
</style>
