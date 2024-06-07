<template>
  <main>
    <h2>苗桐菲的首页</h2>
    <section>
      <router-link to="/index">首页</router-link>
      <router-link to="/list">二级页面</router-link>
      <router-link to="/detail">三级页面</router-link>
      <router-link to="/my">我的</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/settings">设置</router-link>
      <router-link to="/massage">消息</router-link>
      <router-link to="/test">测试</router-link>
      <router-link to="/menu">测试</router-link>
    </section>
  </main>
</template>
<style scoped>
h2 {
  line-height: 100px;
  font-size: 33px;
  background-color: #333;
  color: #fff;
  text-align: center;
}
section {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin: 10px;
}
a {
  line-height: 33px;
  font-size: 20px;
  color: #fff;
  background-color: #333;
  transition: all 0.4s;
  margin: 8px;
  padding: 5px 40px;
  overflow: hidden;
}
a:hover {
  letter-spacing: 5px;
  background-color: #033;
}
</style>
