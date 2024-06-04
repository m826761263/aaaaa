<template>
    <div class="miao">
        <div class="top">
            <div class="title">
                <h2>购物车</h2>
                <div class="title1">
                    <van-icon name="location-o" />
                    <span>东软三期</span>
                    <van-icon name="arrow" />
                </div>
                <span class="title2">管理</span>
            </div>
            <div class="title3">
                <div class="title3-1">
                    全部
                    <span>(2)</span>
                    <van-icon name="arrow-down" />
                </div>
                <div class="title3-2">
                    <van-icon name="star" color="orange" />
                    收藏
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>

        <miao-card></miao-card>
        <van-submit-bar :price="sum" button-text="结算" button-text-color="black" button-color="rgb(244, 220, 98)"
            @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
        <van-tabbar class="van-hairline--top" v-model="active">
            <van-tabbar-item replace to="/index" class="van-hairline--top" name="home" icon="home-o"
                :class="{ active: active === 'home' }">
                <p>首页</p>
            </van-tabbar-item>
            <van-tabbar-item name="music" icon="music-o" :class="{ active: active === 'music' }">
                <p>视频</p>
            </van-tabbar-item>
            <van-tabbar-item replace to="/massage" name="message" icon="chat-o"
                :class="{ active: active === 'message' }">
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
import { Tabbar, TabbarItem, showToast, Card } from "vant";
import { ref, onMounted, computed } from "vue";
import { reactive, inject, onBeforeMount } from "vue";
import MiaoCard from "../components/miaoCard.vue";
const active = ref("cart");
const onSubmit = () => showToast("点击按钮");
const onClickLink = () => showToast("修改地址");
const sum = computed(() => {
    let he = 0;
    for (let v of arr.value) {
        he += v.price * v.count;
    }
    return he;
});

const axios = inject("$axios");
const arr = ref([]);
onBeforeMount(() => {
    const url = `http://localhost:3000/shop`;
    axios
        .get(url)
        .then((res) => {
            console.log(res.data);
            arr.value = res.data;
        })
        .catch((err) => {
            alert("网络问题或其他：" + err);
            console.log(err);
        });
});
</script>

<style scoped>
>>>.van-tabbar-item--active .van-tabbar-item__icon {
    color: var(--miao-main-bottom-color);
    transform: scale(1.2);
}

>>>.van-tabbar-item--active .van-tabbar-item__text {
    color: var(--miao-black-color);
    font-weight: bold;
}

>>>.van-button__text {
    color: #000;
}

.van-submit-bar {
    position: fixed;
    bottom: 50px;
}

.title {
    display: flex;
    align-items: baseline;
    position: relative;
}

.title1 {
    font-size: 12px;
    color: var(--miao-grey-color);
    margin: 0 4px;
}

.title1>span {
    padding: 0 4px;
}

.title2 {
    font-size: 12px;
    padding-left: 195px;
}
.title3 {
    display: flex;
}
.title
</style>