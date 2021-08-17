<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="10">
      <van-col span="8" v-for="value in recommdL" :key="value.id">
        <van-image width="100%" height="3rem" fit="cover" :src="value.picUrl" />
        <p class="song_name">{{ value.name }}</p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>

    <van-cell-group inset>
      <SongItem
        v-for="obj in newestL"
        :key="obj.id"
        :name="obj.name"
        :author="obj.song.artists[0].name"
        :id="obj.id"
      ></SongItem>
    </van-cell-group>
  </div>
</template>
<script>
import { recommendMusicAPI, newestMusicAPI } from "@/api";
import SongItem from "@/components/SongItem";

export default {
  components: {
    SongItem,
  },
  data() {
    return {
      recommdL: [],
      newestL: [],
    };
  },
  async created() {
    // 5. 发起请求，铺设首页推荐歌单
    const res = await recommendMusicAPI({
      limit: 6,
    });
    this.recommdL = res.data.result;

    // 6. 发起请求，铺设首页最新音乐
    const res2 = await newestMusicAPI({
      limit: 20,
    });
    this.newestL = res2.data.result;
  },
};
</script>
<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>