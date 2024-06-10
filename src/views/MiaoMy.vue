<template>
    <div class="miao">
        <van-pull-refresh v-model="isLoading" success-text="" @refresh="onRefresh">
            <div class="top">
                <img class="avatar" src="../assets/img/avatar.jpg" />
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
                            <van-icon name="arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul class="nei1">
                    <li>
                        <div>
                            <van-icon name="star-o" size="23" />
                            <p>收藏</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="iconfont icon-liulanjilu"></span>
                            <p>浏览记录</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <van-icon name="cash-on-deliver" size="23" />
                            <p>红包卡卷</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="iconfont icon-jifen"></span>
                            <p>美团币</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="nei2">
                <p>订单</p>
                <ul class="nei1">
                    <li>
                        <div>
                            <van-icon name="todo-list-o" size="23" />
                            <p>全部订单</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <van-icon name="clock-o" size="23" />
                            <p>待收货/使用</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <van-icon name="comment-o" size="23" />
                            <p>待评价</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <van-icon name="after-sale" size="23" />
                            <p>退款售后</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="nei2">
                <div class="nei3-p">
                    <p>钱包</p>
                    <span>进入钱包<van-icon name="arrow" size="16" /></span>
                </div>
                <ul class="nei3">
                    <li>
                        <div>
                            <p class="nei3-p1">一笔</p>
                            <p class="nei3-p2">先用后还</p>
                            <p class="nei3-p3">我的额度</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="nei3-p1">
                                <p>5.3</p>
                                <p>万</p>
                            </div>
                            <p class="nei3-p2">借钱</p>
                            <p class="nei3-p3">大约可借</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p class="nei3-p1">90,000</p>
                            <p class="nei3-p2">查看卡额度</p>
                            <p class="nei3-p3">额度可取现</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="nei3-p1">
                                <p>
                                    11.48
                                </p>
                                <p>元</p>
                            </div>
                            <p class="nei3-p2">我的账单</p>
                            <p class="nei3-p3">最近支付</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="nei4">
                <div class="nei3-p">
                    <p>书城</p>
                    <span>赚金币，可提现<van-icon name="arrow" size="16" /></span>
                </div>
                <ul class="nei4-p">
                    <li>
                        <div>
                            <div class="title">
                                <p>最近在读</p>
                            </div>
                            <img src="https://img.tuka.cc/54/54274/54274s.jpg">
                            <van-text-ellipsis rows="2" content="末日重生后我全家都是大佬" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="title1">
                                连载
                            </div>
                            <img src="https://www.boshishuwu.com/files/article/image/29/29091/29091s.jpg">
                            <van-text-ellipsis rows="2" content="重生崛起于腾飞时代" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="title1">
                                完结
                            </div>
                            <img src="http://img.htqidian.com/56/BR18_224600.jpg">
                            <van-text-ellipsis rows="2" content="我就是传奇" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="title1">
                                连载
                            </div>
                            <img src="https://m.a1x.net/uploads/162/16253.jpg">
                            <van-text-ellipsis rows="2" content="重生：回到1983当富翁" />
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="nei5">
                    <li>
                        <div>
                            <van-icon name="service-o" size="23"/>
                            <p>小美音频</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <van-icon name="balance-o" size="23"/>
                            <p>推现金</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="iconfont icon-qiyefuwu1"></span>
                            <p>企业服务</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="iconfont icon-kaifapiao1"></span>
                            <p>开发票</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="iconfont icon-chongzhi0101"></span>
                            <p>手机充值</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="iconfont icon-qiyefuwu2"></span>
                            <p>入驻美团</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="iconfont icon-gongyi1"></span>
                            <p>美团公益</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <van-icon name="list-switching" />
                            <p>全部工具</p>
                        </div>
                    </li>
                </ul>
            </div>
        </van-pull-refresh>

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
import { Tabbar, TabbarItem } from "vant";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import "animate.css";

const active = ref("mine");
// 点击设置跳转到MiaoSettings.vue页面
const router = useRouter();
const toSettings = () => {
    router.push("/settings");
};
const count = ref(0);
const isLoading = ref(false);
const onRefresh = () => {
    setTimeout(() => {
        isLoading.value = false;
        count.value++;
    }, 500);
};
</script>

<style scoped>
img {
    width: 100%;
    border-radius: 10px;
}

.miao {
    background-color: var(--miao-bgc-color);
    height: 855px;
}

/* 更改van-tabbar-item中的icon的颜色 */
.van-tabbar-item__icon {
    color: #000;
}

.top {
    display: flex;
}

.top1 {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
}

.top2 {
    display: flex;
    margin: 5px;
}

.top2-1 {
    margin: 0 10px;
    font-size: 5px;
    padding: 5px 10px;
    background-color: #efefef;
    color: #989898;
    border-radius: 15px;
}

.top2 p {
    font-size: 13px;
    padding-top: 3px;
    margin: 0 9px;
    align-items: center;
    font-weight: bold;
}

.top3 {
    display: flex;
    margin-left: 5px;
    font-size: 12px;
    align-items: center;
}

.top3 p {
    margin: 0 5px;
    font-weight: bold;
}

.top3 p:nth-child(2) {
    padding: 0 8px;
    border: #9b9a9a 1px solid;
    border-width: 0 1px;
}

.top3-1 {
    display: flex;
    align-items: center;
    margin-left: 15px;
    background-color: #fce39a;
    border: 1px solid #fcb654;
    padding: 0px 5px 0 10px;
    border-radius: 15px;
}

.top3-1 div {
    padding: 5px;
}

.avatar {
    border-radius: 50%;
    margin: 5px;
    width: 80px;
    height: 80px;
}

.icon-huiyuanquanyi {
    color: #f0aa48;
}

>>>.van-tabbar-item--active .van-tabbar-item__icon {
    color: var(--miao-main-bottom-color);
    transform: scale(1.2);
}

>>>.van-tabbar-item--active .van-tabbar-item__text {
    color: var(--miao-black-color);
    font-weight: bold;
}

/* 内容1 */
.nei1 {
    display: flex;
    align-items: center;
    flex: auto;
    margin: 10px 10px;
    background-color: var(--miao-white-color);
    padding: 10px 0;
    border-radius: 10px;
    font-weight: 600;
}

.nei1:nth-child(2) {
    margin: 0 8px 10px 8px;
    padding-top: 5px;
}

.nei1 li {
    width: 25%;
}

.nei1 div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nei1 p {
    padding-top: 10px;
    font-size: 15px;
}

.iconfont {
    font-size: 23px;
}

.nei2 {
    background-color: #fff;
    padding: 0;
    border-radius: 10px;
    margin: 0 8px 10px 8px;
    /* display: flex;
    flex-direction: column; */
}

.nei2>p {
    padding: 10px 0 0 13px;
    font-weight: 600;
}

>>>.van-icon:before {
    font-weight: 600;
}

.nei3 {
    display: flex;
    align-items: center;
    text-align: center;
}

.nei3-p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 13px;
    font-weight: 600;
}

.nei3-p span,
.van-icon-arrow:before {
    font-size: 12px;
    color: var(--miao-font-color);
}

.nei3 li {
    width: 25%;
}

.nei3-p1 {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 22px;
    font-weight: 600;
}

.nei3-p1 p:nth-child(2) {
    font-size: 10px;
    padding-left: 3px;
    font-weight: 500;
}

.nei3-p2 {
    font-size: 15px;
    font-weight: 500;
    padding-top: 3px;
}

.nei3-p3 {
    font-size: 12px;
    color: var(--miao-font-color);
    padding: 3px 0 10px 0;
}

.nei4 {
    background-color: var(--miao-white-color);
    margin: 10px 10px;
    border-radius: 10px;
}

.nei4-p {
    display: flex;
    align-items: baseline;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.nei4 li {
    width: 25%;
    margin: 0 10px;
}

>>>.van-text-ellipsis {
    font-size: 14px;
}

.title {
    font-size: 0.5vw;
    /* 让他附着在图片的右上角 */
    position: absolute;
    background-color: var(--miao-main-color);
    margin-left: 19px;
    padding: 1px 3px;
    /* 右上角和左下角是圆角效果 */
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
}
.title1 {
    font-size: 0.5vw;
    /* 让他附着在图片的右上角 */
    position: absolute;
    background-color: #222222ac;
    color: var(--miao-white-color);
    margin-left: 38px;
    padding: 1px 5px;
    /* 右上角和左下角是圆角效果 */
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
}
.nei5{
    display: flex;
    align-items: center;
    margin: 10px 10px;
    background-color: var(--miao-white-color);
    padding: 10px 0;
    border-radius: 10px;
    font-weight: 600; 
    /* 一行有四个，多余的去下一行 */
    flex-wrap: wrap;
}
.nei5 li{
    display: flex;
    width: 25%;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
}
.nei5 li:nth-last-child(1),li:nth-last-child(2),li:nth-last-child(3),li:nth-last-child(4){
    padding-top:10px;
}
.nei5 li p{
    padding-top:5px;
}
</style>
