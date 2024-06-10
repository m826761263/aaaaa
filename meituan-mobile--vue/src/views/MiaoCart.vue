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
                    <span>（{{sum1}}）</span>
                    <van-icon name="arrow-down" />
                </div>
                <div class="title3-2">
                    <van-icon name="star" color="orange" />
                    收藏
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
        <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
            <miao-card :list="arr"></miao-card>
        </van-pull-refresh>
        <van-submit-bar :price="sum" button-text="结算" button-text-color="black" button-color="rgb(244, 220, 98)"
            @submit="onSubmit" decimal-length="2">
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
import { t } from "@/assets/swiper/shared/utils.min.mjs";
import { useRouter } from "vue-router";
const router = useRouter();
const active = ref("cart");
const checked = ref(false);
const onSubmit = () => showToast("点击按钮");
const onClickLink = () => showToast("修改地址");
const sum = computed(() => {
    let he = 0;
    if(checked.value===true){
    for (let v of arr.value) {
        he += v.price*100;
    }
    }
    
    return he;
});
const sum1 = computed(() => {
    let he = 0;
    for (let v of arr.value) {
        he = Math.max(he, v.id);
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
            setTimeout(() => {
                showToast({
                    message: "网络错误",
                });
                router.push("/error");
            }, 1000);
        });
});

const count = ref(0);
const isLoading = ref(false);
const onRefresh = () => {
    setTimeout(() => {
        isLoading.value = false;
        count.value++;
    }, 1000);
};
</script>

<style scoped>
.miao{
    background-color:var(--miao-bgc-color);
    height: 1000px;
}
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
.van-pull-refresh {
    position: absolute;
    top: 78px;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 0;
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
.title>h2{
    margin: 5px 0 2px 10px;
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
    padding-left: 185px;
}
.title3 {
    display: flex;
}
.title3-1{
    display: flex;
    align-items: center;
    margin: 10px 15px 5px 15px;
    background-color: #fce39a;
    border: 1px solid #fcb654;
    padding: 5px 5px 5px 10px;
    border-radius: 15px;
    font-size: 10px;
}
.title3-2{
    display: flex;
    align-items: center;
    margin: 10px 15px 5px 15px;
    background-color: var(--miao-grey-color);
    padding: 5px 5px 5px 10px;
    border-radius: 15px;
    font-size: 10px;
}
</style>