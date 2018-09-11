<template>
  <div class="register">
    <div class="head">
      <i class="icon iconfont back" @click="back">&#xe600;</i>
      <div class="border"></div>
      <span class="register_word">注册</span>
    </div>
    <div class="input_content">
      <div class="i1">
        <input class="i1" type="text" placeholder="输入学校" v-model="school">
      </div>
      <div class="i2">
          <input class="i2" type="text" placeholder="输入手机号" v-model="phone_number">
      </div>
      <div class="i3">
          <input class="i3_3" type="text" placeholder="输入验证码" v-model="number">
          <input class="get" type="submit" value="获取验证码" @click="time(this)">
      </div>
      <div class="i4">
          <input class="i4" type="password" placeholder="输入密码" v-model="password1">
      </div>
      <div class="i5">
          <input class="i5" type="password" placeholder="再次输入密码" v-model="password2">
      </div>
      <div class="button">
          <input class="button" type="submit" value="注册" @click="register">
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data(){
      return {
        school:'',
        phone_number:'',
        number:'',
        password1:'',
        password2:''
      }
  },
  methods:{
    back(){

    },
    time(val){

    },
    register(){
    if(this.school ==''){
				Toast({
            message:'请输入学校',
            duration:700
          })
				}else if(this.phone_number == ''){
          Toast({
            message:'请输入手机号码',
            duration:700
          })
        }else if(this.phone_number.length<11){
        Toast({
          message:'手机号码为11位',
          duration:700
        })
        }else if(this.number == ''){
          Toast({
            message:'请输入验证码',
            duration:700
          })
        }else if(this.password1 == ''){
        Toast({
          message:'请输入密码',
          duration:800
        })
				}else if(this.password2 == ''){
					Toast({
            message:'请再次输入密码',
            duration:800
          })
        }else if(this.password1 != this.password2){
					Toast({
            message:'密码不一致',
            duration:800
          })
        }else if(this.password1.length<6||this.password2.length<6){
					Toast({
            message:'密码不得少于6位',
            duration:800
          })
				}else{
					Toast({
            message:'注册成功',
            duration:600
          })
					setTimeout(()=>{
						this.$router.push({
	                        path: '/login'
	                    })
					},1000)
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

.register{
    position: relative;
    width:22.5rem;
}

.head{
    position: fixed;
    height: 3.5rem;
    width:22.5rem;
}

.back{
    position: fixed;
    top:1.125rem;
    left: 1.125rem;
    font-size:1.25rem;
    color:white;
}

.border{
    position: fixed;
    height: 3.5rem;
    width:22.5rem;
    z-index: -1;
    background-image: linear-gradient(to right, #57BAD9 18%, #2593AE 100%);
    -moz-box-shadow:0 0 20px #c0c2c4;
    -webkit-box-shadow:0 0 20px #c0c2c4;
    box-shadow:0 0 20px #c0c2c4;
}

.register_word{
    position: fixed;
    top:0.89375rem;
     left:3.875rem;
     width:17.125rem;
     height:1.8125rem;
    font-family: NotoSansCJKsc-Regular;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
}

.input_content{
  position: fixed;
  width: 22.5rem;
  top:7.25rem;
  height: 32.75rem;
}

.i1,.i2,.i3_3,.i4,.i5{
    position: fixed;
    left:1rem;
     width:20rem;
     height:3rem;
    background: #FFFFFF;
    border-radius: 4px;
    border:0 #AEAEAE;
    padding-left:0.5rem;
    -moz-box-shadow:0 0 6px #AEAEAE;
    -webkit-box-shadow:0 0 6px #AEAEAE;
    box-shadow:0 0 6px #AEAEAE;
}

.i1{
     top:8rem;
}

.i2{
     top:12rem;
}

.i3{
  position: fixed;
    width:22.5rem;
     top:16rem;
}

.i3_3{
    width:10.125rem;
     top:16rem;
}

.get,.button{
    position: fixed;
    background: #FFFFFF;
    border-radius: 4px;
    border:0 #AEAEAE;
    -moz-box-shadow:0 0 6px #AEAEAE;
    -webkit-box-shadow:0 0 6px #AEAEAE;
    box-shadow:0 0 6px #AEAEAE;
    background-image: linear-gradient(to right, #57BAD9 18%, #2593AE 100%);
    border-radius: 8px;
    font-family: NotoSansCJKsc-Regular;
    font-size: 14px;
    color: #FFFFFF;
}

.get{
    left: 12.125rem;
    height:3rem;
    width:9.375rem;
    top:16rem;
}

.i4{
     top:20rem;
}

.i5{
    top:24rem;
}

.button{
    top:28rem;
    left:1rem;
    width:20rem;
    height:3rem;
}

</style>
