<template>
<div class="miao">
        <div class="top">
            <van-icon name="cross"  size="34" @click="returnback"/>
            <p>帮助</p>
        </div>
        <h1>欢迎注册美团</h1>
        <van-form @submit="onSubmit">
            <van-cell-group inset class="van-hairline--bottom">
                <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 36px; font-size: 8px;margin-left: 65px;margin-bottom: 0;">
                <van-checkbox v-model="checked" checked-color="rgb(255, 204, 0)" shape="square" icon-size="15">
                    <div style="padding-left: 10px; color: #9c9c9c;">
                        我已阅读并同意<a href="https://www.meituan.com/help/agreement" target="_blank">《美团用户协议》</a>
                        <a href="https://www.meituan.com/help/privacy" target="_blank">《隐私政<br/>策》</a>
                        ,并授权美团使用该美团账号信息（如昵<br/>称、头像、收货地址）进行统一管理。
                    </div>
                </van-checkbox>
            </div>
            <div style="margin: 5px 80px;">
                <van-button  block type="primary" native-type="submit" color="rgb(255, 204, 0)">
                    注册
                </van-button>
            </div>
        </van-form>

    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { inject } from 'vue';
//引入router
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
// 初始化router
const router = useRouter();

// 定义组件 emits
const axios = inject("$axios");
const username = ref("");
const password = ref("");
const checked = ref(false);
const returnback =() => history.back();
const onSubmit = async (values) => {
  console.log("submit", values);
  await sendRequest(values);
  showToast("注册成功");
    // 两秒后跳转到登录页面
    setTimeout(() => {
        router.push("/login");
    }, 2000);
    }
// 使用inject引入axios，发送一个axios的post请求
      // 发送axios请求
const sendRequest = (values) => {
  axios.post("http://localhost:3000/users", values).then(res=>{
        console.log(1111+res);
    })
}
</script>


<style scoped>
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
.top p{
    font-weight: bold;
    font-size: 20px;
}
.miao{
    background-color: var(--miao-bgc-color);
    height: 844px;
}
.miao h1{
    padding: 30px;
}
>>>.van-form{
    background-color: unset;
}
.van-hairline--bottom .van-field{
    border-bottom: 1px solid #d9d9d9;
    margin: 0 20px 0 20px;
    padding: 5px;
    width: 90%;
}
>>>.van-hairline--bottom .van-field__control{
    margin-right: 30px;
}
>>>.van-hairline--bottom .van-field__label{
    text-align: center;
}
>>>.van-checkbox__icon{
    border-radius: 10px;
}
>>>.van-checkbox{
    align-items: normal;
}
a{
    color: #007aff;
}
>>>.van-button:before{
    width: 60px;
}</style>