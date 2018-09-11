/* eslint-disable */
<template>
  <div class="login">
    <div class="input_1">
        <input class="input_1_1" type="text" placeholder="输入学号/手机号" v-model="username">
    </div>
    <div class="input_2">
        <input class="input_2_1" type="password" placeholder="输入密码" v-model="userpassword">
    </div>
    <div class="button">
        <input class="button_1" @click="Login" type="submit" value="登录">
    </div>
    <div class="forget_it">
        <a class="register" @click="Register">注册</a>
        <span class="sprit">/</span>
        <a class="forget_password" @click="Forget_Password">忘记密码</a>
    </div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return {
      username:'',
      userpassword:''
    }
  },
  methods:{

  Register(){
    Toast({
        message:'正在前往注册',
        duration:600
      })
    setTimeout(()=>{
      this.$router.push({
                    path: '/register'
                })
    },1000)
  },
  Forget_Password(){
    Toast({
        message:'正在前往修改密码',
        duration:600
      })
    setTimeout(()=>{
      this.$router.push({
                    path: '/forget_password1'
                })
    },1000)
  },
  Login(){
    if(this.username ==''){
				Toast({
            message:'请输入账号名',
            duration:700
          })
				}else if(this.userpassword == ''){
          Toast({
            message:'请输入密码',
            duration:700
          })
				}else if(this.userpassword.length <= 6){
					Toast({
            message:'密码不能低于6位',
            duration:800
          })
				}else{
					Toast({
            message:'登陆成功',
            duration:600
          })
					setTimeout(()=>{
						this.$router.push({
	                        path: '/home_page'
	                    })
					},1000)
        }
     }
  }
}
</script>
<style lang="css" scoped>
.login{
    position: fixed;
    padding:0;
    margin:0;
    width: 100%;
    height:100%;
    overflow: hidden;
    left: 0;
    top:0;
    background-image: url('../../static/log-in-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    font-size:16px;
}
:-ms-input-placeholder{
    color:#AEAEAE;
    font-size: 14px;
    font-family: NotoSansCJKsc-Regular;;
}
::-webkit-input-placeholder{
    color:#AEAEAE;
    font-size: 14px;
    font-family: NotoSansCJKsc-Regular;
}
.input_1,.input_1_1{
    position: fixed;
    width: 20.5rem;
    height: 3rem;
    left: 1rem;
    top:12.31rem;
}
.input_1_1{
    width: 20rem;
    padding-left: 0.5rem;
    background: #FFFFFF;
    border-radius: 4px;
    border:0 #AEAEAE;
    -moz-box-shadow:0 0 10px #D9E7EA;
    -webkit-box-shadow:0 0 10px #D9E7EA;
    box-shadow:0 0 10px #D9E7EA;
}
.input_2,.input_2_1{
    position: fixed;
    width: 20.5rem;
    height: 3rem;
    left: 1rem;
    top:16.1rem;
}
.input_2_1{
    width: 20rem;
    padding-left: 0.5rem;
    background: #FFFFFF;
    border-radius: 4px;
    border:0 #AEAEAE;
    -moz-box-shadow:0 0 10px #D9E7EA;
    -webkit-box-shadow:0 0 10px #D9E7EA;
    box-shadow:0 0 10px #D9E7EA;
}
.button,.button_1{
    position: fixed;
    width: 20.5rem;
    height: 3rem;
    left: 1rem;
    top:20.2rem;
}
.button_1{
    background-image: linear-gradient(to right, #57BAD9 18%, #2593AE 100%);
    border-radius: 8px;
    border: 0 white;
    color: white;
    font-size: 18px;
    -moz-box-shadow:0 0 10px #7BC8E1;
    -webkit-box-shadow:0 0 10px #7BC8E1;
    box-shadow:0 0 10px #7BC8E1;
}
.forget_it{
    position: fixed;
    left: 8.3125rem;
    top:23.875rem;
    height: 1.125rem;
    width: 5.8125rem;
}

.register{
    left: 0;
    font-family: NotoSansCJKsc-Regular;
    font-size: 12px;
    color: #AEAEAE;
    text-align: center;
}
.sprit{
    font-family: NotoSansCJKsc-Regular;
    font-size: 12px;
    color: #AEAEAE;
    text-align: center;
}
.forget_password{
    font-family: NotoSansCJKsc-Regular;
    font-size: 12px;
    color: #AEAEAE;
    text-align: center;
}

</style>
