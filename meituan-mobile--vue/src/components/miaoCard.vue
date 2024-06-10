<template>
    <div>
        <van-swipe-cell v-for="v in list" :key="v.id">
                <van-checkbox v-model="checked">{{ v.shopName }}
                    <div>{{ v.time }}</div>
                    <van-icon name="arrow" />
                </van-checkbox>

            <router-link :to="{ name: 'list', params: { id: v.id } }">
                <van-card num="2" class="goods-card" :price="v.price" :desc="v.spe" :title="v.name" :thumb="v.image" />
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" />
                </template>
            </router-link>

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
const checked = ref(false);
</script>

<style scoped>
>>>.van-swipe-cell__wrapper {
    background-color: var(--miao-white-color);
    border-radius: 10px;
    margin: 10px;
}

.goods-card {
    background-color: var(--miao-white-color);
    margin: 10px;
}

.delete-button {
    padding: 10px;
    height: 100%;
}

>>>.van-swipe-cell__right {
    padding: 0 10px;
}

>>>.van-checkbox {
    margin-left: 10px;
    padding-top: 10px;

}

>>>.van-checkbox__label {
    display: flex;
    align-items: center;
}

>>>.van-checkbox__label>div {
    margin: 0 10px;
    color: var(--miao-font-color);
    border: 1px solid var(--miao-font-color);
    font-size: 5px;
    padding: 1px 5px;
}

>>>.van-card__num {
    color: #000;
    border: 1px solid var(--miao-font-color);
    padding: 1px 4px;
    border-radius: 4px;
    margin-bottom: 20px;
}

>>>.van-card__price {
    color: var(--miao-price-color);
}

>>>.van-card__price-integer {
    font-size: 20px;
}
</style>