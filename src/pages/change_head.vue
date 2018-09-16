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
        <span class="name_box">昵称</span>
        <input class="name_c" type="text" placeholder="(点击修改，同下)">
        <span class="school_box">学校</span>
        <input class="school_c" type="text" placeholder="">
    </div>
    <div class="button">
        <input type="button" class="change_password" value="修改密码" @click="change">
        <input type="button" class="confirm" value="确认修改" @click="confirm">
    </div>
</div>
</template>

<script>
export default {

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

.photo{
  position: absolute;
  top:3.75rem;
  left: 1rem;
  width: 20.5rem;
}

.smile{

}

.take_photo{

}

.choose_photo{

}

.border{

}

</style>
