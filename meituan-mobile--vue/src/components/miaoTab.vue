<template>
    <div>
        <van-tabs v-model:active="active" swipeable>
            <van-tab title="点餐">
                <van-tree-select v-model:main-active-index="activeIndex" height="55vw" :items="items" scrollspy sticky>
                    <template #content>
                        
                    </template>
                </van-tree-select>
            </van-tab>
            <van-tab title="评论">
                 </van-tab>
            <van-tab title="商家">
                 </van-tab>
        </van-tabs>
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue";
const activeIndex = ref(0);
const items= [{ text: '分组 1' }, { text: '分组 2' }]
</script>

<style scoped>

</style>