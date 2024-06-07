<template>
  <div class="miao">
    <div>
      <div class="bgc">
        <img class="topic" :src="obj.titleimage" />
        <van-nav-bar color="#ccc">
          <template #right>
            <van-icon name="arrow-left" size="18" @click="onClickLeft" />
            <van-icon name="search" size="18" />
            <van-icon name="chat-o" size="18" />
            <van-icon name="star-o" size="18" />
            <van-icon name="ellipsis" size="18" />
          </template>
        </van-nav-bar>
      </div>
      <div class="root_Q2Inj8">
        <div class="content_gLi09E">
          <div class="shopIcon_eX2_mV">
            <img :src="obj.avatar" />
          </div>
          <div class="infoPart_JnYZ7R">
            <div class="title_X4W1xy ellipsis_tbmFBA">
              {{ obj.shopName }}
            </div>
            <div class="shopInfo_XTh7Mu">
              <span class="score_e7kGCW">
                <van-icon name="star" />
                <span>{{ obj.shopscore }}</span>
              </span>
              <span class="deliveryTime">
                {{ obj.deliveryTime }}
              </span>
            </div>
          </div>
          <div class="root_Mi9HIu">
            <div class="nei2">
              <p>{{ obj.tag }}</p>
            </div>
          </div>
          <van-collapse v-model="activeNames" :border="false">
            <van-collapse-item title="公告" name="1">
              {{ obj.notice }}
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
    </div>
    <miao-tab></miao-tab>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["id"]);
import { ref, onBeforeMount, inject } from "vue";
import { shareSheetProps, showToast } from "vant";
import MiaoTab from "../components/miaoTab.vue";
const active = ref(0);
const active1 = ref(0);
const onClickTab = ({ title }) => showToast(title);
const onClickLeft = () => history.back();
const activeNames = ref(["0"]);
const axios = inject("$axios");
const obj = ref({});
onBeforeMount(() => {
  const url = `http://localhost:3000/shops?id=${props.id}`;
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
    });
});
</script>

<style scoped>
>>> .van-cell--clickable {
  padding: 10px 16px 0 16px;
}
.shopIcon_eX2_mV img {
  position: absolute;
  right: 4vw;
  top: -1.8vw;
  width: 17vw;
  height: 17vw;
  border-radius: 1.8vw;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0.26666667vw 0.26666667vw 1.33333333vw 0 rgb(0 0 0 / 5%);
}

.infoPart_JnYZ7R .shopInfo_XTh7Mu .monthSales_FsQjze,
.infoPart_JnYZ7R .shopInfo_XTh7Mu .deliveryTime {
  font-size: 2.66666667vw;
  color: #858687;
}

.infoPart_JnYZ7R .title_X4W1xy {
  width: 67.73333333vw;
  font-weight: 600;
  font-size: 5.86666667vw;
  color: #222426;
  line-height: 8.26666667vw;
}

.ellipsis_tbmFBA {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.infoPart_JnYZ7R .shopInfo_XTh7Mu {
  height: 4.8vw;
  display: flex;
  align-items: center;
  width: 67.73333333vw;
}

.infoPart_JnYZ7R .shopInfo_XTh7Mu .score_e7kGCW {
  font-weight: 500;
  font-size: 3.2vw;
  color: #ff8000;
  display: inline-flex;
  align-items: center;
}

.root_Q2Inj8 {
  margin-top: -8.4vw;
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

.nei2 {
  display: flex;
  color: var(--miao-price-color);
}

.nei2 p {
  border: 1px solid var(--miao-price-color);
  border-radius: 5px;
  font-weight: bold;
  font-size: 10px;
  margin: 5px 0 0 5px;
  padding: 0 3px 0 3px;
  text-align: center;
}

.miao {
  background-color: #f5f5f5;
  height: 1000px;
  width: 100%;
}

.top {
  display: flex;
  align-items: center;
  padding: 10px;
}

.topic {
  overflow: hidden;
  color: rgb(255, 255, 255);
  position: relative;
  height: 100%;
  width: 100%;
  filter: grayscale(50%) blur(2px);
}

img {
  width: 100%;
}

.bgc {
  display: flex;
}

>>> .van-nav-bar__content {
  height: 50px;
  position: relative;
  touch-action: none;
  z-index: 1;
}

>>> .van-nav-bar__content .van-icon {
  color: var(--miao-white-color);
}

>>> .van-swipe-item {
  padding: 0 15px 0px 0;
}

>>> .van-nav-bar__right .van-icon {
  padding: 0 10px;
}

>>> .van-nav-bar__right .van-icon-arrow-left::before {
  margin-left: -380px;
}
</style>