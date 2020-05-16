<template>
  <div id="app">
    <p class="title">
      简单视频剪辑功能实现
      <button @click="toggle">切换横竖屏视频</button>
    </p>
    <vue-video-clip
      v-if="videoShow"
      :url="url"
      @getTime="getTime"
      ref="VideoClip"
    ></vue-video-clip>
    <div>
      <div>start：{{ current.start }}</div>
      <div>end：{{ current.end }}</div>
    </div>
  </div>
</template>

<script>
import videoHorizontal from '@/static/media/videoHorizontal.mp4'
import videoPortrait from '@/static/media/videoPortrait.mp4'
export default {
  name: 'Home',
  data () {
    return {
      url: videoHorizontal,
      current: {},
      videoShow: true,
      isPortrait: false
    }
  },
  methods: {
    getTime (val) {
      this.current = val
    },
    toggle () {
      if (this.isPortrait) {
        this.url = videoHorizontal
        this.isPortrait = false
      } else {
        this.url = videoPortrait
        this.isPortrait = true
      }
      this.videoShow = false
      setTimeout(() => {
        this.videoShow = true
        this.$nextTick(() => {
          this.$refs.VideoClip.init()
        })
      }, 100)
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 20px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
