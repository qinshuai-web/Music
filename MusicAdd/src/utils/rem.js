const webapp=()=>{
    //获取当前页面的宽度
let clientWidth=document.documentElement.clientWidth
if(clientWidth>=750){
    clientWidth=750
}
//相当于根元素
let htmlDom=document.getElementsByTagName('html')[0]
htmlDom.style.fontSize=clientWidth/7.5+'px'
}
window.onresize=webapp()
webapp()