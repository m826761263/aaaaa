<template>
    <miao-message :list="arr"></miao-message>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, inject } from "vue";
import MiaoMessage from "../components/miaoMessage.vue";
const axios = inject("$axios");
const arr = ref([]);
onBeforeMount(() => {
    const url = `http://localhost:3000/message`;
    axios
        .get(url)
        .then((res) => {
            console.log(res.data);
            arr.value = res.data;
        })
        .catch((err) => {
            alert("网络问题或其他：" + err);
            console.log(err);
        });
});
</script>

<style scoped>

</style>