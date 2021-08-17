<template>
  <van-cell :title="name" :label="author + ' - ' + name" :key="id" center>
    <template #right-icon>
      <van-icon name="play-circle-o" size="0.8rem" @click="playFn" />
    </template>
  </van-cell>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  methods: {
    playFn() {
      console.log("click");
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>