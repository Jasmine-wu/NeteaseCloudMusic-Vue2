<template>
  <div>
    <van-search
      v-model="searchVal"
      placeholder="请输入搜索关键词"
      shape="round"
      @input="iptChange"
    />
    <!-- 7.1 展示热搜关键字 -->
    <div class="search_wrap" v-if="searchResL.length === 0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span
          class="hot_item"
          v-for="(value, index) in searchKws"
          :key="index"
          @click="clickKw(value.first)"
        >
          {{ value.first }}
        </span>
      </div>
    </div>

    <!-- 7.2 展示搜索结果 -->
    <div v-else class="search_wrap">
      <p class="hot_title">最佳匹配</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell-group inset>
          <SongItem
            v-for="obj in searchResL"
            :key="obj.id"
            :name="obj.name"
            :author="obj.artists[0].name"
            :id="obj.id"
          ></SongItem>
        </van-cell-group>
      </van-list>
    </div>
  </div>
</template>
<script>
import { searchHotKwAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem";

export default {
  components: {
    SongItem,
  },
  // 7.1
  async created() {
    const res = await searchHotKwAPI();
    this.searchKws = res.data.result.hots;
  },
  data() {
    return {
      searchVal: "",
      searchKws: [],
      searchResL: [],
      loading: false,
      finished: false,
      page: 1,
      timer: null,
    };
  },
  methods: {
    // 技术点：
    // 1.async修饰的函数返回的是Promise对象
    // 2.Promise对象的返回值,是await修饰的函数的返回结果
    // 3.提取Promise对象的结果，用await
    // 获取搜索结果
    async getSearchRes() {
      return await searchResultAPI({
        keywords: this.searchVal,
        limit: 20,
        // 8.2
        offset: (this.page - 1) * 20,
      });
    },
    // 7.2.1 点击关键字展示搜索结果
    async clickKw(kw) {
      // 10. bug fix
      this.page = 1;
      // 8.6 假如this.finished已经设置为true了,点击和所有加载更多时onload事件不会被触发
      this.finished = false;

      this.searchVal = kw;
      const res = await this.getSearchRes();
      if (res.data.result.songs === undefined) {
        return (this.searchResL = []);
      }
      this.searchResL = res.data.result.songs;
      // 8.7 通知加载完成
      this.loading = false;
    },
    // 7.2.1 监听输入框内容改变,展示搜索结果
    async iptChange() {
      // 10. bug fix
      this.page = 1;

      // 9. 输入框防抖(用户在n秒内不输入才会执行定时器里的代码)
      // 9.1 需要注意的是定时器里的匿名函数要用async修饰，因为函数体用await修饰了
      if (this.timer) clearInterval(this.timer);

      this.timer = setInterval(async () => {
        // 8.6 假如this.finished已经设置为true了,点击和所有加载更多时onload事件不会被触发
        this.finished = false;
        // 细节：
        if (this.searchVal.length === 0) {
          return (this.searchResL = []);
        }
        const res = await this.getSearchRes();
        // 细节：
        if (res.data.result.songs === undefined) {
          return (this.searchResL = []);
        }
        this.searchResL = res.data.result.songs;
        // 8.7 通知加载完成
        this.loading = false;
      }, 900);
    },
    // 8. 滑动到底部触发时onLoad事件,此时loading内部设置为true
    async onLoad() {
      // 8.1 重新发起网络请求，请求下一页数据
      this.page++;
      const res = await this.getSearchRes();

      if (res.data.result.songs === undefined) {
        // 8.5 通知没有更多数据了,注意finished
        this.finished = true;
        // 8.7 通知加载完成
        this.loading = false;

        return;
      }
      // 8.3 两数组拼接
      this.searchResL = [...this.searchResL, ...res.data.result.songs];
      // 8.4 加载完毕
      this.loading = false;
    },
  },
};
</script>
<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>