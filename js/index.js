var regist=document.getElementById("regist");
regist.onclick=function(){
	var bgColor=document.getElementById("bgColor"),
	    formRegist=document.getElementById("formRegist")
		bgColor.style.display="block";
		formRegist.style.display="block";
		
}
//表单验证

//验证姓名不为空
var username=document.getElementById("uname");
var userPnode=username.parentNode;
var userspnode=userPnode.getElementsByTagName("span")[0];
username.onblur=function(){
	var unameValue=username.value;
	if(unameValue){
		userspnode.innerText ="输入正确!";
	}else{
		userspnode.innerHTML="用户名不能为空!";
	}
}

//验证邮箱格式
var useremail=document.getElementById("email");
var useremailPnode=useremail.parentNode;
var useremailspnode=useremailPnode.getElementsByTagName("span")[0];
useremail.onblur=function(){
	var uemailValue=username.value;
	var pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

	if(!uemailValue.match(pattern)){
		useremailspnode.innerText ="请输入正确的邮箱格式";
	}else{
		useremailspnode.innerText ="输入正确!";
	}
}

//验证手机号
var userephone=document.getElementById("phone");
var userphonePnode=userephone.parentNode;
var userephonespnode=userphonePnode.getElementsByTagName("span")[0];
userephone.onblur=function(){
	var uphoneValue=userephone.value;
	var pattern=/^1[8|5|7][0-9]{9}$/;
	if(!uphoneValue.match(pattern)){
		userephonespnode.innerText ="请输入正确的手机格式";
	}else{
		userephonespnode.innerText ="输入正确!";
	}
}

//验证密码
var userepwd1=document.getElementById("pwd1");
var userpwd1Pnode=userepwd1.parentNode;
var userepwd1spnode=userpwd1Pnode.getElementsByTagName("span")[0];
userepwd1.onblur=function(){
	var upwd1Value=userepwd1.value;

	var pattern=/^[0-9]{6}$/;
	if(!upwd1Value.match(pattern)){
		userepwd1spnode.innerText ="请输入正确的密码格式";
	}else{
		userepwd1spnode.innerText ="输入正确!";
	}
}
//密码确认正确与否
var userepwd2=document.getElementById("pwd2");
var userpwd2Pnode=userepwd2.parentNode;
var userepwd2spnode=userpwd2Pnode.getElementsByTagName("span")[0];
userepwd2.onblur=function(){
var upwd2Value=userepwd2.value;
var upwd1Value=userepwd1.value;
if(upwd2Value==upwd1Value){
	userepwd2spnode.innerText ="密码正确";
}else{
	userepwd2spnode.innerText ="密码与初始密码不一致！";
}
}