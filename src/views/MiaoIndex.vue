<template>
    <div class="miao">
        <div class="top">
            <div class="location">
                <van-icon name="location-o" />
                <span>东软三期</span>
                <van-icon name="arrow-down" />
            </div>
            <div class="search">
                <input type="text" name="search" id="search" placeholder="米村拌饭">
                <button class="n">搜索</button>
                <van-icon class="search-icon" name="scan" size="23px" />
            </div>
        </div>
        <!-- 下拉刷新在这个top之下 -->
        <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
            <div class="one">
                <van-swipe :loop="false">
                    <van-swipe-item>
                        <miao-icon :list="arr"></miao-icon>
                    </van-swipe-item>
                    <van-swipe-item>
                        <miao-icon :list="arr1"></miao-icon>
                    </van-swipe-item>
                    <van-swipe-item>
                        <miao-icon :list="arr2"></miao-icon>
                    </van-swipe-item>
                </van-swipe>
                <lazy-component>
                    <miao-list :miaolist="arr3"></miao-list>
                </lazy-component>
            </div>
        </van-pull-refresh>
        <van-tabbar class="van-hairline--top" v-model="active">
            <van-tabbar-item replace to="/index" name="home" icon="home-o" :class="{ active: active === 'home' }">
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { createApp } from "vue";
import { Tabbar, TabbarItem, showToast, Swipe, SwipeItem } from "vant";
import { ref, onMounted, } from "vue";
import { reactive, inject, onBeforeMount } from "vue"
import "animate.css";
import MiaoIcon from "../components/MiaoIcon.vue";
import MiaoList from '../components/miaoList.vue';
import { useRouter } from "vue-router";
const router = useRouter();

const active = ref("home");
const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};

const count = ref(0);
const isLoading = ref(false);
const onRefresh = () => {
    setTimeout(() => {
        isLoading.value = false;
        count.value++;
    }, 1000);
};


const axios = inject("$axios");
const arr = ref([]);
const arr1 = ref([]);
const arr2 = ref([]);
const arr3 = ref([]);
onBeforeMount(() => {
    const url = `http://localhost:3000/indexIcon1`;
    axios.get(url).then(res => {
        console.log(res.data);
        arr.value = res.data;
    }).catch(err => {
        alert("网络问题或其他：" + err);
        console.log(err)
        setTimeout(() => {
                showToast({
                    message: "网络错误",
                });
                router.push("/error");
            },0);
    }
    );
    const url1 = `http://localhost:3000/indexIcon2`;
    axios.get(url1).then(res => {
        console.log(res.data);
        arr1.value = res.data;
    }).catch(err => {
        console.log(err)

    }
    );
    const url2 = `http://localhost:3000/indexIcon3`;
    axios.get(url2).then(res => {
        console.log(res.data);
        arr2.value = res.data;
    }).catch(err => {
        console.log(err)
    }
    );
    const url3 = `http://localhost:3000/shops`;
    axios.get(url3).then(res => {
        console.log(res.data);
        arr3.value = res.data;
    }).catch(err => {
        console.log(err)
    }
    );
})
</script>

<style scoped>
@import '../assets/icon/iconfont.css';

.miao {
    background-color: var(--miao-main-color);
    height: 844px;
}

.location {
    padding: 10px 0 0 11px;
    font-size: 10px;
    background-color: var(--miao-main-color);
    width: 1000px;
    z-index: 0;
}

.search {
    justify-content: space-between;
    align-items: center;
    background-color: var(--miao-main-color);
    display: flex;
}

.search-input {
    width: 96%;
}

.search-icon {

    margin: 10px;
}

.one {
    background-color: var(--miao-white-color);
    border-radius: 10px 10px 0 0;
}

#search {
    border: none;
    outline: none;
    flex-grow: 2;
    margin: 10px 0 9px 10px;
    padding: 8px;
    font-size: 15px;
    border-radius: 15px;
}

.n {
    line-height: 5px;
    padding: 10px;
    border-radius: 20px;
    background-color: var(--miao-main-color);
    display: flex;
    border: 0;
    outline: none;
    font-size: 15px;
    align-content: center;
    flex-wrap: wrap;
    font-weight: bold;
    right: 46px;
    position: absolute;
}

.top {
    /* 将其固定在顶部 */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 78px;
    background-color: var(--miao-main-color);
    z-index: 1;
}


.van-pull-refresh {
    position: absolute;
    top: 78px;
    /* 设置高度无限 */
    height: 1620px;
    left: 0;
    right: 0;
    z-index: 0;
    background-color: var(--miao-bgc-color);

}

>>>.van-tabbar-item--active .van-tabbar-item__icon {
    color: var(--miao-main-bottom-color);
    transform: scale(1.2);
}

>>>.van-tabbar-item--active .van-tabbar-item__text {
    color: var(--miao-black-color);
    font-weight: bold;
}

.van-swipe-item {
    top: 7px;
    height: 190px;
}
</style>
<!-- 加一个注释 ，苗桐菲 2024-05-21 -->
<!--  -->