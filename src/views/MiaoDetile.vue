<template>
    <div class="miao" v-for="item in obj.menu" :key="item.name">
        <div class="bgc">
            <img class="topic" :src="item.images" />
            <van-nav-bar>
                <template #right>
                    <van-icon name="arrow-down" @click="arrowDown" size="15" />
                    <van-icon name="chat-o" size="15" />
                    <van-icon name="ellipsis" size="15" />
                </template>
            </van-nav-bar>
        </div>
        <div class="root_Q2Inj8">
            <div class="content_gLi09E">
                <div class="price">
                    <p>￥</p>
                    <p class="number">{{ item.price }}</p>
                </div>
                <div class="dishname">
                    <p class="name">
                        {{ item.name }}
                    </p>
                    <div class="shoucang">
                        <van-icon :name="currentIcon" @click="toggleIcon" :class="{ 'active-icon': isActive }"
                            size="15" />
                        <p>收藏</p>
                    </div>
                </div>
                <div class="tag">
                    <p>{{ item.weight }}</p>
                    <p>{{ item.flavor }}</p>
                </div>
                <div class="footer">
                    <p class="shopInfo">{{ item.sales1 }}</p>
                    <div class="addCart">
                        <van-icon name="plus" />
                        <p>加入购物车</p>
                    </div>
                </div>
            </div>

        </div>
        <van-tabs v-model:active="active" scrollspy sticky shrink class="bottom">
            <van-tab title="详情">
                <div>
                    <div class="infoPart">
                        <p>掌柜描述:</p>
                        <p class="d">{{ item.detail }}</p>
                    </div>
                    <div class="infoPart">
                        <p>主料: </p>
                        <p class="i">
                            {{ item.ingredient }}
                        </p>
                    </div>
                    <div class="infoPart">
                        <p>辅料:</p>
                        <p class="a">
                            {{ item.auxiliary }}
                        </p>
                    </div>
                    
                    <p>价格说明<span class="iconfont icon-wenhao"></span> </p>
                </div>
            </van-tab>
            <van-tab title="评价">
                <div class="comment_1">
                    <h3>外卖评价</h3>
                    <p>暂无，期待您的餐后评价</p>
                </div>
            </van-tab>
        </van-tabs>



    </div>
</template>

<script setup lang="ts">
const props = defineProps(["id"]);
import { ref, onBeforeMount, inject } from 'vue'
import { showToast } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter();
const arrowDown = () => { setTimeout(() => { history.back(); }, 500) };
const active = ref(0);
const obj = ref([]);
const axios = inject("$axios");
onBeforeMount(() => {
    const url = `http://localhost:3000/shops?${props.id}`;
    console.log(url);
    axios
        .get(url)
        .then((res) => {
            console.log(res.data);
            obj.value = res.data[0];
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
const isActive = ref(false);
const icons = ['star-o', 'star'];
const currentIcon = ref(icons[0]);
const item = ref([{ title: "tab1" }]);
const toggleIcon = () => {
    currentIcon.value = icons[(icons.indexOf(currentIcon.value) + 1) % icons.length];
    isActive.value = !isActive.value;
    //点击后实现图标变黄
    if (isActive.value) {
        showToast({
            message: '收藏成功',
            duration: 1000,
            forbidClick: true,
            type: 'success'
        });
    } else {
        showToast({
            message: '取消收藏',
            duration: 1000,
            forbidClick: true,
            type: 'success'
        });
    }

    //再次点击弹出取消收藏

}
</script>

<style scoped>
@import '../assets/icon/iconfont.css';

.active-icon {
    color: var(--miao-main-color);
}

.miao {
    background-color: var(--miao-bgc-color);
}

.topic {
    overflow: hidden;
    color: rgb(255, 255, 255);
    position: relative;
    height: 100%;
    width: 100%;
    filter: grayscale(30%) blur(2px);
}

.bgc {
    display: flex;
}

>>>.van-nav-bar__content .van-icon {
    color: var(--miao-white-color);
}

>>>.van-nav-bar__right .van-icon {
    padding: 0 10px;

}

>>>.van-nav-bar__right .van-icon-arrow-down::before {
    margin-left: -485px;
}

>>>.van-nav-bar__right .van-icon-chat-o::before,
.van-icon-arrow-down::before,
.van-icon-ellipsis::before {
    background-color: #20202097;
    padding: 5px;
    border-radius: 30px;
}

.root_Q2Inj8 {
    margin-top: -10.4vw;
    min-height: 10.66666667vw;
}

.content_gLi09E {
    position: relative;
    width: 100%;
    padding: 3.33333333vw 4.26666667vw;
    box-sizing: border-box;
    background: white;
    border-radius: 3.2vw 3.2vw 0 0;
}

.infoPart_JnYZ7R .shopInfo_XTh7Mu .monthSales_FsQjze,
.infoPart_JnYZ7R .shopInfo_XTh7Mu .deliveryTime {
    font-size: 2.66666667vw;
    color: #858687;
}

.price {
    display: flex;
    color: var(--miao-price-color);
    align-items: center;
}

.number {
    font-size: 22px;
}

.dishname {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
}

.name {
    font-size: 35px;
}

>>>.van-icon-star-o:before,
.van-icon-star:before {
    font-weight: bold;
    margin-right: 5px;
}

.shoucang {
    display: flex;
    align-items: center;
    font-size: 10px;
}

.shoucang p {
    color: var(--miao-font-color);
}

.tag {
    display: flex;
    font-size: 2px;
}

.tag p {
    margin: 5px 5px 5px 0;
    padding: 1px 5px;
    background-color: #f0f0f0;
    border-radius: 5px;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.shopInfo {
    font-size: 12px;
    color: var(--miao-font-color);
}

.addCart {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    background-color: var(--miao-main-color);
}

>>>.van-icon-plus:before {
    font-weight: bold;
}

.bottom {
    margin-top: 10px;
    color: var(--miao-font-color);
    font-size: 14px;
}

.bottom p {
    padding: 5px 4.26666667vw;
}

.bottom p:nth-child(1) {
    padding-top: 13px;
}

.bottom p:nth-last-child(1) {
    display: flex;
    align-items: center;
    padding-bottom: 13px;
}

>>>.van-tab__panel,
.van-tab__panel-wrapper {
    background-color: var(--miao-white-color);
}

.comment_1 {
    margin-top: 10px;
    background-color: var(--miao-white-color);
}

.comment_1 h3 {
    padding-left: 4.26666667vw;
    padding: 10px 0 10px 4.26666667vw;
    color: var(--miao-black-color);
}
.infoPart{
    display: flex;
    align-items: center;
    
}
.a{
    padding: 10px;
}
</style>