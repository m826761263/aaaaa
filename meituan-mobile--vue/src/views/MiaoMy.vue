<template>
  <div class="miao">
    <div class="top">
        <img class="avatar" src="../assets/img/avatar.jpg">

        <div class="top1">
            <div class="top2">
                <p>Nvl2488757...</p>
                <div class="top2-1">实名待认证</div>
                <p>客服</p>
                <p @click="toSettings">设置</p>
            </div>
            <div class="top3">
                <p>关注 0</p>
                <p>评价 14</p>
                <p>勋章 30</p>
                <div class="top3-1">
                    <span class="iconfont icon-huiyuanquanyi"></span>
                    <div>黄金等级</div>
                    <van-icon name="arrow"/>
                </div>
            </div>
        </div>

    </div>

    <van-tabbar class="van-hairline--top" v-model="active">
            <van-tabbar-item replace to="/index" class="van-hairline--top" name="home" icon="home-o" :class="{ active: active === 'home' }">
                <p>首页</p>
            </van-tabbar-item>
            <van-tabbar-item name="music" icon="music-o" :class="{ active: active === 'music' }">
                <p>视频</p>
            </van-tabbar-item>
            <van-tabbar-item replace to="/massage" name="message" icon="chat-o" :class="{ active: active === 'message' }">
                <p>消息</p>
            </van-tabbar-item>
            <van-tabbar-item replace to="/cart" name="cart" icon="cart-o" :class="{ active: active === 'cart' }">
                <p>购物车</p>
            </van-tabbar-item>
            <van-tabbar-item replace to="/my" name="mine" icon="smile-o" :class="{ active: active === 'mine' }">
                <p>我的</p>
            </van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { createApp } from "vue";
import { Tabbar, TabbarItem } from "vant";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router';
import "animate.css";

const active = ref("mine");
// 点击设置跳转到MiaoSettings.vue页面
const router = useRouter();
const toSettings = () => {
  router.push('/settings');
}
</script>

<style scoped>
/* 更改van-tabbar-item中的icon的颜色 */
.van-tabbar-item__icon{
    color: #000;
}
.top{
    display: flex;
}
.top1{
    display: flex;
    align-content: center;
    flex-wrap: wrap;
}
.top2{
    display: flex;
    margin: 5px;
}
.top2-1{
    margin: 0 10px;
    font-size: 5px;
    padding: 5px 10px;
    background-color: #efefef;
    color: #989898;
    border-radius: 15px;
}
.top2 p{
    font-size: 13px;
    padding-top: 3px;
    margin: 0 9px;
    align-items: center;
    font-weight: bold;
}


.top3{
    display: flex;
    margin-left: 5px;
    font-size: 12px;
    align-items: center;
}
.top3 p{
    margin: 0 5px;
    font-weight: bold;

}
.top3 p:nth-child(2){
    padding: 0 8px;
    border: #9b9a9a 1px solid;
    border-width: 0 1px;
}
.top3-1{
    display: flex;
    align-items: center;
    margin-left: 15px;
    background-color: #fce39a;
    border: 1px solid #fcb654;
    padding: 0px 5px 0 10px;
    border-radius: 15px;
}
.top3-1 div{
    padding: 5px;
}
.avatar{
    border-radius: 50%;
    margin: 5px;
    width: 80px;
    height: 80px;
}
.icon-huiyuanquanyi{
    color: #f0aa48;
}
>>> .van-tabbar-item--active .van-tabbar-item__icon{
    color: var(--miao-main-bottom-color);
    transform: scale(1.2);
}
>>> .van-tabbar-item--active .van-tabbar-item__text{
    color: var(--miao-black-color);
    font-weight: bold;
}
</style>