<template>
    <van-nav-bar title="美团" @click-left="onClickLeft">
        <template #left>
            <van-icon name="cross" size="18" color="#9c9c9c"/>
        </template>
    </van-nav-bar>

    <div class="miao404">
        <img src="https://p0.meituan.net/smartvenus/c35c4245682231c40d17d50e9b1ef62619625.png">
        <p>Not Found</p>
    </div>
</template>

<script setup lang="ts">
 const onClickLeft = () => history.back();
</script>

<style scoped>
p {
    color: var(--miao-font-color);
    padding-top: 50px;
    font-size: 40px;
}

img {
    width: 100%;
}

.miao404 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgba(247 248 249);
    height: 844px;
}
</style>