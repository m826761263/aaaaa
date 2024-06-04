<template>
    <div>
        <ul class="jlist">
            <li v-for="v in list" :key="v.id">
                <span :class="v.name"></span>
                <p>{{ v.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(
    {
        list: Array
    }
)
</script>

<style scoped>
.jlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.jlist li {
    width: 20%;
    font-size: 30px;
    flex-direction: column;
    text-align: center;
}
.jlist p{
    font-size: 10px;
}
</style>