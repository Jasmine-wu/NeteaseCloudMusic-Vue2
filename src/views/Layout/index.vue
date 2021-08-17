<template>
  <div>
    <!-- 3. NavBar标题切换 -->
    <!-- 10. nabar固定不动 -->
    <van-nav-bar :title="title" fixed />
    <!-- 1.2: 路由挂载,layout下二级路由挂载 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 2.底部tabbar集成路由功能 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: this.$route.meta.title,
    };
  },
  watch: {
    // 3,2 监听路由对象
    $route() {
      this.title = this.$route.meta.title;
    },
  },
};
</script>
<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>