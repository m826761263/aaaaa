<template>
    <div>
        <van-tabs v-model:active="active" swipeable>
            <van-tab title="点餐">
                <van-tree-select v-for="v in dishes" :key="v.id" :title="v.name" v-model:main-active-index="activeIndex" height="55vw" :items="items" scrollspy sticky>
                    <template #content>
                        <van-card   :price="v.price" :desc="v.sales1" :title="v.name"
                            :thumb="v.image" v-if="activeIndex === 0">
                            <template #tags>
                                <van-tag plain type="primary">门店销量第三名</van-tag>
                                <van-tag plain type="primary">90+回头客</van-tag>
                            </template>
                            <template #footer>
                                <van-button size="mini" >选规格</van-button>
                            </template>
                        </van-card>

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
const props = defineProps({
       dish:Array   
   });
const activeIndex = ref(0);
const items = [{ text: '分组 1' }, { text: '分组 2' }]
</script>

<style scoped>
>>>.van-tree-select__nav-item{
    padding: 20px 0px 10px 10px ;
}
>>>.van-tree-select__content{
    flex: 5;
}
>>>.van-card{
    background-color: var(--miao-white-color);
}
>>>.van-button:before{
    height: 100px;
}
>>>.van-tag--primary.van-tag--plain{

}
</style>