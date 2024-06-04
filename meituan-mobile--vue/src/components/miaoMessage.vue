<template>
    <div>
        <van-swipe-cell left-width:100px v-for="v in list" :key="v.id">
            <div class="item">
                <van-badge :content="v.tag">
                    <img :src="v.img" class="img" />
                </van-badge>
                <div class="item3">
                    <div class="item1">
                        <van-text-ellipsis :content="v.shopname" rows="7" />
                        <p class="time">{{ v.time }}</p>
                    </div>
                    <div class="item2">
                        <van-text-ellipsis :content="v.detail" rows="7" />
                    </div>
                </div>
            </div>
            <template #right>
                <van-button square type="primary" text="免打扰" color="#9c9c9c"  />
                <van-button square type="warning" text="置顶" color="rgb(251, 121, 8)"  height="100%"/>
                <van-button square type="danger" text="删除"  height="100%"/>
            </template>
        </van-swipe-cell>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
    list: Array,
});
</script>

<style scoped>
>>>.van-button{
    flex-grow: 1;
    height: 100%;
}
.item {
    display: flex;
    padding: 10px;
    background-color: var(--miao-white-color);
}
.item1 {
    display: flex;
    align-items: baseline;
    padding-bottom: 5px;
}

img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    aspect-ratio: 1 / 1;
    margin: 0;
}
.time{
    color: var(--miao-font-color);
    padding-left: 180px;
}
.item3{
    margin-left: 10px;
}
.item2{
    font-size: 12px;
    color: var(--miao-font-color);
    padding-bottom: 10px;
    border-bottom: 1px solid var(--miao-font-color);
}
</style>