<template>
    <div>
        <ul class="list">
            <li v-for="v in miaolist" :key="v.id">
                <router-link :to="{name:'list',params:{id:v.id}}">
                <div class="miao">
                    <div class="kuang">
                        <img :src="v.image">
                        <div class="pnei">
                            <p class="sp">外卖</p>
                            <p class="time">{{v.times}}</p>
                        </div>
                    </div>
                    <div class="nei1">
                        <h3>{{ v.shopName }}</h3>
                        <div id="nei1">
                            <p>{{ v.score }}</p>
                            <p>{{ v.sales }}</p>
                        </div>
                        <div id="nei2">
                            <p>{{v.tag}}</p>
                        </div>
                    </div>
                </div>
        </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(
    {
        miaolist: Array
    }
)
</script>

<style scoped>
.list>li {
    width: 46%;
    float: left;
    margin: 4px 6px;
    position: relative;
    border-radius: 8px;
    padding-bottom: 3px;
    background-color: var(--miao-white-color);

}
.list>li:nth-child(2n+1) {
    margin-left: 10px;
}
img {
    width: 100%;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
    aspect-ratio: 1 / 1;
}

.pnei{
    height: 13px;
}
.pnei>p{
    position: absolute;
    font-size: 11px;
}
.sp{
    bottom: 89px;;
    left: 0;
    background: var(--miao-main-color);
    padding: 3px 3px 3px 5px;
    color: var(--miao-black-color);  
}
.time{
    bottom: 89px;;
    left: 30px;
    padding: 3px 5px 3px 5px;
    background: rgba(95, 95, 95, 0.702);
    color: var(--miao-white-color);  
}
.nei1{
    padding: 5px 0 5px 5px;
    font-size: 13px;
    border-radius: 0 0 8px 8px;
}
.nei1 h3{
    padding-bottom: 3px;
    font-size: 15px;
}
#nei1{
    display: flex;
    color: var(--miao-font-color);
    padding-bottom: 5px;
}
#nei1 p:nth-child(1){
    padding-right: 5px;
    border-right: 1px solid var(--miao-font-color) ;
}
#nei1 p:nth-child(2){
    padding-left: 5px;
}
#nei2{
    display: flex;
    color: var(--miao-price-color);
}
#nei2 p{
    border: 1px solid var(--miao-price-color);
    border-radius: 5px;
    font-weight: bold;
    font-size: 10px;
    margin-right: 5px;
    padding: 0 3px 0 3px;
    text-align: center;
}
</style>