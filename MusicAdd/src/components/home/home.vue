<template>
  <div>
    <span class="homemain">推荐歌单</span>
    <div class="homelist">
      <ul>
        <li v-for="(item,index) in musicList" :key="index">
           <span class="iconfont icon-headset">{{item.playCount}}</span>
            <img :src="item.picUrl">
            <span class="name">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicList: [], //所有的列表内容
    };
  },
  methods: {
    getlist() {
      this.$axios
        .get("api/" + this.$http.tuijian, {
          params: {
            limit: 6,
          },
        })
        .then((res) => {
           console.log(res.data.result);
            this.musicList=res.data.result
        });
    },
  },
  created() {
    this.getlist()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homemain {
  font-size: 16px;
  padding-left: 20px;
  border-left: 2px solid red;
}
.homelist {
   width: 100%;
   overflow: hidden;
}
.homelist ul li{
    float: left;
    width: 33.33%;
    height: 170px;
    position: relative;
}
img{
  width: 123px;
  height: 123px;
}
.name{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    min-height: 30px;
    line-height: 1.2;
    font-size: 14px;
}
.iconfont{
     position: absolute;
    right: 50px;
    top: 2px;
    z-index: 3;
    padding-left: 13px;
    color: #fff;
    font-size: 12px;
    background-position: 0;
    background-repeat: no-repeat;
    background-size: 11px 10px;
    text-shadow: 1px 0 0 rgb(0 0 0 / 15%);
}
</style>