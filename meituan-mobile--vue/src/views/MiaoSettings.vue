<template>
  <div class="miao">
    <van-nav-bar class="title" title="设置" left-arrow @click-left="onClickLeft" />
    <div class="nr1">
      <div class="one">
        <div>个人信息</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
      <div class="one">
        <div>收货地址</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
    </div>
    <div class="nr2">
      <div class="one">
        <div>账号安全</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
      <div class="one">
        <div>隐私设置</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
    </div>
    <div class="nr3">
      <div class="one">
        <div>支付设置</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
      <div class="one">
        <div>消息通知</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
      <div class="one">
        <div>通用设置</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
      <div class="one">
        <div>清理缓存</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
    </div>
    <div class="nr4">
      <div class="one">
        <div>长辈版</div>
        <div class="one-1">未开启</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
    </div>
    <div class="nr5">
      <div class="one">
        <div>意见反馈</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
      <div class="one">
        <div>关于美团</div>
        <van-icon name="arrow" color="#e1e1e1" />
      </div>
    </div>
    <div class="nr6">
      <div class="one">
        <div>切换账号</div>
      </div>
    </div>
    <div class="nr7">
      <div class="one">
        <div @click="onClickExit">退出登录</div>
      </div>
    </div>
    <div class="nr8">
      <p class="one-2">《个人信息收集单》 《但三方信息数据共享》</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createApp } from "vue";
import { NavBar } from "vant";
import { showConfirmDialog } from 'vant';
const onClickLeft = () => history.back();
const onClickExit = () => {
// 在用户退出时执行退出操作
// 例如：当用户点击退出按钮时调用 logout 函数


showConfirmDialog({
  message:
    '退出后将不能查看订单\n确认退出吗？',
})
  .then(() => {
    localStorage.removeItem('token')
    console.log(localStorage.removeItem('token'))
     setTimeout(() => {
        window.location.href = "/";
      }, 1000);
  })
  .catch(() => {
     console.log('取消');
  });

}
</script>

<style scoped>
.miao {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 843px;
  background-color:var(--miao-bgc-color);
}

/* 将整个页面背景颜色换为淡灰色 */

.nr1 {
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  background-color: #ffffffe5;
  border-radius: 15px;
  margin: 10px;
}
.nr2 {
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  background-color: #ffffffe5;
  border-radius: 15px;
  margin: 10px;
}
.nr3 {
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  background-color: #ffffffe5;
  border-radius: 15px;
  margin: 10px;
}
.nr4 {
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  background-color: #ffffffe5;
  border-radius: 15px;
  margin: 10px;
}
.nr5 {
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  background-color: #ffffffe5;
  border-radius: 15px;
  margin: 10px;
}
.nr6 {
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  background-color: #ffffffe5;
  border-radius: 15px;
  margin: 20px 10px 10px 10px;
}
.nr7 {
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  background-color: #ffffffe5;
  color: #c5c5c5;
  border-radius: 15px;
  margin: 10px;
}
.nr8 {
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px;
}
.one {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.one:nth-child(1) {
  padding-bottom: 10px;
}
.nr3 .one:nth-child(2),
:nth-child(3) {
  padding-bottom: 10px;
}
.nr4 .one {
  padding-bottom: 0;
}
.nr6 .one {
  padding-bottom: 0;
  justify-content: center;
}
.nr7 .one {
  padding-bottom: 0;
  justify-content: center;
}
.one-1 {
  top: 10px;
  right: 10px;
  font-size: 12px;
  padding-left: 220px;
  color: #999;
}
.one-2{
  text-align: center;
  font-size: 10px;
  color: #348afc;
  margin-top: 15px;
}
>>> .van-nav-bar__arrow {
  color: var(--miao-black-color);
}
>>> .van-popup .van-popup--center .van-dialog .van-dialog__message{
  font-weight: bold;
}
</style>