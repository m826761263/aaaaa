<template>
    <div class="miao">
        <van-sticky :offset-top="0">
 <div class="miao-top">
            <h3>消息</h3>
            <p>（{{ sum1 }}）</p>
            <span class="iconfont icon-xiangpica">全部已读</span>
            <span @click="toSettings" class="set">设置</span>
        </div>
</van-sticky>

       
        <van-pull-refresh v-model="isLoading" success-text="下拉加载更多" @refresh="onRefresh">  
            <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" />
            <miao-message :list="arr"></miao-message>
        </van-pull-refresh>
      
        <van-sticky :offset-bottom="0">

</van-sticky>

        <van-tabbar class="van-hairline--top" v-model="active"  fixed safe-area-inset-bottom>
            <van-tabbar-item replace to="/index" name="home" icon="home-o" :class="{ active: active === 'home' }">
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
const router = useRouter();
const active = ref("message");
const toSettings = () => {
  router.push('/settings');
}
const count = ref(0);
const isLoading = ref(false);
const onRefresh = () => {
    setTimeout(() => {
        isLoading.value = false;
        count.value++;
    }, 500);
};

import { onBeforeMount, inject } from "vue";
import MiaoMessage from "../components/miaoMessage.vue";
const axios = inject("$axios");
const arr = ref([]);
onBeforeMount(() => {
    const url = `http://localhost:3000/message`;
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
.miao{
    background-color: var(--miao-bgc-color);
    height: 844px;
}
>>> .van-tabbar-item--active .van-tabbar-item__icon{
    color: var(--miao-main-bottom-color);
    transform: scale(1.2);
}
>>> .van-tabbar-item--active .van-tabbar-item__text{
    color: var(--miao-black-color);
    font-weight: bold;
}
.miao-top{
    position:absolute;    
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding: 10px 0 10px 10px;
    background-color: var(--miao-white-color);
    z-index: 999;
}
.iconfont{
    font-size: 12px;
    font-weight:600;
    color:var(--miao-font-color);
}
.set{
    padding-left: 200px;
}
.van-pull-refresh {
    position: absolute;
    top: 44px;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 0;
}
</style>