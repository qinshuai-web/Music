<template>
    <div>   
    <div class="toptop">
     <span class="topleft">网易云音乐</span>
     <span class="topright">下载APP</span>
    </div>
    <div class="topbuttom">
        <ul class="topUl">
             <li ><router-link to="/home" class="active"><span @click="changge('home')" :class="{csschange:ischang?'home'==namechang:''}">推荐音乐</span></router-link></li>
             <li><router-link to="/hot" class="active"><span @click="changge('hot')" :class="{csschange:ischang?'hot'==namechang:''}">热歌榜</span></router-link></li>
             <li><router-link to="/serach" class="active"><span @click="changge('serach')" :class="{csschange:ischang?'serach'==namechang:''}">搜索</span></router-link></li>
        </ul>
    </div>
      <router-view/>
    </div>
</template>
<script>
//功能:导航跳转页面 导航样式改变
export default {
     data(){
         return{
               ischang:true,
               namechang:'home'
         }
     },
     methods:{
         changge(itme){
             this.namechang=itme
         }
     },
 
}
</script>
<style scoped>
.toptop{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background-color: #d43c33;
}
.topleft{
    font-size: 16px;
     color: #fff;
}
.topright{
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    width: 100px;
    text-align: center;
    color: #d43c33;
    background-color: #fff;
    border-radius: 37.5%/100%;
}
.topbuttom{
   height: 30px;
   line-height: 30px;
}
.topUl{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
   
}
.topUl li .active{
 text-decoration: none;
 color: black;
}
.topUl .csschange{
    padding-bottom: 8px;
    color: #d43c33;
    border-bottom:3px solid red;
}
</style>