<template>
    <div class="miao">
        <h1>消息</h1>
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
import "animate.css";
const active = ref("message");
</script>

<style scoped>
>>> .van-tabbar-item--active .van-tabbar-item__icon{
    color: var(--miao-main-bottom-color);
    transform: scale(1.2);
}
>>> .van-tabbar-item--active .van-tabbar-item__text{
    color: var(--miao-black-color);
    font-weight: bold;
}
</style>