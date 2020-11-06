<template>
    <div class="container">
        <div class="header">
            <div class="tpleft">
                <div class="laterpro">
                   <span>万众瞩目的人---------》</span>
                   <div class="imgborder">
                     <img class="lxfheaderimg" src="../assets/image/lxfheaderimg.jpg" alt="">
                   </div>
                   <span>《---------人的目瞩众万</span>
                </div>
            </div>
        </div>
        <div class="mainimg">
          <div class="overhide" @click="goAnchor('#nextid')" style="overflow:hidden;">
              <a href="javascript:void(0)" class="gonextone"></a>
          </div>
        </div>
        <div id="nextid" class="nextid">

        </div>
    </div>
</template>
<script>
import $ from "jquery"
export default {
  data() {
    return {
      
    }
  },
  mounted(){
    
  },
  methods:{
    goAnchor(selector) {
        let that = this
        var anchor = that.$el.querySelector(selector) 
        $('html,body').animate({ scrollTop: anchor.offsetTop }, 400);
    }
  }
};
</script>
<style lang="stylus">
  @import "../assets/style/global.styl";
  .container
    background #f5f5f5;
    height 100vh;
    width 750px;
    .header
      background #fff;
      height 80px;
      width 100%;
      position absolute;
      top 150px;z-index 2;
      .tpleft
        height 100%;
        padding 0 20px
        display flex;
        align-items center;
      .laterpro
        font-size 26px;
        font-weight bold;
        display flex;
        align-items center;
        width 100%;
        justify-content center;
        .imgborder
          width 60px; height 60px;
          position relative;
          overflow hidden;
          border-radius 30px
          .lxfheaderimg 
            width 60px;height 60px;
            position absolute;
            left 50%;top 50%;
            transform translate(-50%,-50%);
  .mainimg
    background url("../assets/image/timg.jpg") no-repeat center;
    height 100vh;
    background-size 750px auto;
    position relative;
    .overhide
      position absolute;
      bottom 150px;
      height 100px;width 150px;
      left 50%;
      transform translateX(-50%);
      .gonextone
        position absolute;
        bottom 150px;
        height 50px;width 50px;
        left 50%;
        transform translateX(-50%);
        animation: play-state 2s linear infinite;
        @keyframes play-state {
          0% {
            bottom 150px
          }
          100% {
            bottom -50px
          }
        }
        &:before{
            content "";
            background url("../assets/image/downarrow.png") no-repeat center;
            background-size 50px 50px;
            width 50px;height 50px;
            position absolute;
            left 0 ; top 0;
        };
  .nextid
    height 1600px
</style>