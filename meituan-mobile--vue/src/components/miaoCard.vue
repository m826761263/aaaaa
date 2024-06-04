<template>
    <div>
        <van-swipe-cell>
            <van-card num="2" class="goods-card" price="v.price" desc="描述信息" title="商品标题"
                thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(
    {
        list: Array
    }
)
</script>

<style scoped>
.goods-card {
    margin: 0;
    background-color: #fff;
}

.delete-button {
    height: 100%;
}
</style>