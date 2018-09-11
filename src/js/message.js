function openNew(){
  //获取页面的高度和宽度
  var sWidth=document.body.scrollWidth;
  var sHeight=document.body.scrollHeight;

  //获取页面的可视区域高度和宽度
  var wHeight=document.documentElement.clientHeight;

  var oMask=document.createElement("div");
      oMask.id="mask";
      oMask.style.height=100+"%";
      oMask.style.width=100+"%";
      document.body.appendChild(oMask);

  var osuccess=document.createElement("div");
      osuccess.id="success";
      osuccess.innerHTML="<div class='success'><span class='word'>修改成功<span></div>";
      document.body.appendChild(osuccess);

  //获取登陆框的宽和高
  var dHeight=osuccess.offsetHeight;
  var dWidth=osuccess.offsetWidth;
      //设置登陆框的left和top
      osuccess.style.left=0;
      osuccess.style.top=45+"%";
};

//关闭弹窗,移除div元素
function close(){
  var mySuccess = document.getElementById("success");
  var myMask = document.getElementById("mask");
  if (mySuccess != null) mySuccess.parentNode.removeChild(mySuccess);
  if (myMask != null) myMask.parentNode.removeChild(myMask);
};

window.onload=function(){
var oBtn=document.getElementById("confirm");
    //点击登录按钮
  oBtn.onclick=function(){
        openNew();
        setTimeout("close()",3000);
        return false;
      }
}
