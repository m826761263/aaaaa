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
            <img :src="obj.image" />
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
    <div>
        <van-tabs v-model:active="active" swipe able >
            <van-tab title="点餐">
                <van-tree-select  :title="obj.name" v-model:main-active-index="activeIndex" height="55vw" :items="items" scrollspy sticky>
                    <template #content v-if="obj.menu">
                      <div v-for="item in obj.menu" :key="item.name">
                        <router-link :to="{ name: 'detail', params: { name: item.name }}">
                          <van-card   :price="item.price" :desc="item.sales1" :title="item.name"
                            :thumb="item.images" v-if="activeIndex === 0">
                            <template #tags >
                                <van-tag  type="primary" :border="false">{{ item.tag1 }}</van-tag>
                                <van-tag  type="primary" >{{ item.tag2 }}</van-tag>
                            </template>
                            <template #footer>
                                <van-button size="mini" >选规格</van-button>
                            </template>
                        </van-card>
                        </router-link>
                      </div>
                    </template>
                </van-tree-select>
            </van-tab>
            <van-tab title="评论">
            </van-tab>
            <van-tab title="商家">
            </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["id"]);
import { ref, onBeforeMount, inject } from "vue";
import { shareSheetProps, showToast } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
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
      setTimeout(() => {
                showToast({
                    message: "网络错误",
                });
                router.push("/error");
            }, 1000);
    });
});
const activeIndex = ref(0);
const items = [{ text: ' 招牌拌饭' }, { text: '朝鲜烹炒' }]
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
>>> .van-nav-bar__right .van-icon {
  padding: 0 10px;
}

>>> .van-nav-bar__right .van-icon-arrow-left::before {
  margin-left: -380px;
}
/* tab */
>>>.van-tree-select__nav-item{
    padding: 20px 0px 10px 10px ;
}
>>>.van-tree-select__content {
    flex: 5;
    height: 1000px;
}
>>>.van-card{
    background-color: var(--miao-white-color);
}

>>>.van-tag--primary{
  background-color:#fee6b4;
  color: #ff7700;
  margin-right: 5px;
  border: none;
}
>>>.van-tabs__track{
  height: 726px;
}
>>>.van-sidebar-item__text{
  font-size: 13px;
}
>>>.van-tabs__line{
  background-color: var(--miao-main-bottom-color);
}
>>>.van-tab{
  flex:2;
  padding: 10px;
}
</style>