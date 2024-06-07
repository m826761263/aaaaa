<template>
  <div class="miao">
    <div>
      <div>
        <van-nav-bar left-arrow @click-left="onClickLeft" color="#00000000">
          <template #right>
            <van-icon name="search" size="18" />
            <van-icon name="chat-o" size="18" />
            <van-icon name="star-o" size="18" />
            <van-icon name="ellipsis" size="18" />
          </template>
        </van-nav-bar>
      </div>
    </div>
    <div class="goods">
            <div class="menu-wrapper">
                <ul>
                    <li class="menu-item" v-for="(good, index) in goods" :key="index"
                        :class="{ current: index === currentIndex }" @click="clickMenuItem(index)">
                        <span class="text">
                            <img class="icon" :src="good.icon" v-if="good.icon" />
                            {{ good.name }}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper">
                <ul ref="foodsUl">
                    <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
                        <h1 class="title">{{ good.name }}</h1>
                        <ul>
                            <li class="food-item" v-for="(food, index) in good.foods" :key="index">
                                <div class="icon">
                                    <img width="57" height="57" :src="food.icon" />
                                </div>
                                <div class="content">
                                    <h2 class="name">{{ food.name }}</h2>
                                    <p class="desc">{{ food.description }}</p>
                                    <div class="extra">
                                        <span class="count">月售{{ food.sellCount }}份</span>
                                        <span>好评率{{ food.rating }}%</span>
                                    </div>
                                    <div class="price">
                                        <span class="now">￥{{ food.price }}</span>
                                        <span class="old" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { showToast } from "vant";
const active = ref(0);
const active1 = ref(0);
const onClickTab = ({ title }) => showToast(title);
const onClickLeft = () => history.back();
const onChange = (index) => showToast(`标签名 ${index + 1}`);
const props = defineProps({
  indexList: {
    type: Array as () => number[],
    default: () => ["新品尝鲜", "热销榜", "好评推荐", "价格最低"],
  },
});
import BScroll from "better-scroll";

const scrollY = ref(0); 
const tops = ref([]); 
const currentIndex = computed(() => {
  const index = tops.value.findIndex((top, index) => {
    return scrollY.value >= top && scrollY.value < tops.value[index + 1];
  });
  return index;
});

onMounted(() => {
  nextTick(() => {
    initScroll();
    initTops();
  });
});

let foodsScroll;

const initScroll = () => {
  nextTick(() => {
    new BScroll(".menu-wrapper", {
      click: true,
    });
    foodsScroll = new BScroll(".foods-wrapper", {
      probeType: 2,
      click: true,
    });

    foodsScroll.on("scroll", ({ y }) => {
      scrollY.value = Math.abs(y);
    });

    foodsScroll.on("scrollEnd", ({ y }) => {
      scrollY.value = Math.abs(y);
    });
  });
};

const initTops = () => {
  const topsArray = [];
  let top = 0;
  topsArray.push(top);

  const lis = refs.foodsUl.getElementsByClassName("food-list-hook");
  Array.from(lis).forEach((li) => {
    top += li.clientHeight;
    topsArray.push(top);
  });

  tops.value = topsArray;
};

const clickMenuItem = (index) => {
  const scrollYValue = tops.value[index];
  scrollY.value = scrollYValue;
  foodsScroll.scrollTo(0, -scrollYValue, 300);
};
</script>

<style scoped>
.top {
  display: flex;
  align-items: center;
  padding: 10px;
}

img {
  width: 100%;
}

.van-nav-bar__content {
  background-color: #ffffff00;
}

>>> .van-swipe-item {
  padding: 0 15px 0px 0;
}

>>> .van-nav-bar__right .van-icon {
  padding: 0 10px;
}
</style>