<template>
  <div id="app">
    <div class="title">
      <div>简单视频剪辑功能实现</div>
      <div class="btn" @click="toggle">切换横竖屏视频</div>
    </div>
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
import videoHorizontal from '@/static/media/mov_bbb.mp4'
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
  mounted () {
    this.bgInit()
  },
  methods: {
    bgInit () {
      function evanyou () {
        var c = document.getElementById('evanyou-canvas')
        var x = c.getContext('2d')
        var pr = window.devicePixelRatio || 1
        var w = window.innerWidth
        var h = window.innerHeight
        var f = 90
        var q
        var m = Math
        var r = 0
        var u = m.PI * 2
        var v = m.cos
        var z = m.random
        c.width = w * pr
        c.height = h * pr
        x.scale(pr, pr)
        x.globalAlpha = 0.6
        function i () {
          x.clearRect(0, 0, w, h)
          q = [
            { x: 0, y: h * 0.7 + f },
            { x: 0, y: h * 0.7 - f }
          ]
          while (q[1].x < w + f) d(q[0], q[1])
        }
        function d (i, j) {
          x.beginPath()
          x.moveTo(i.x, i.y)
          x.lineTo(j.x, j.y)
          var k = j.x + (z() * 2 - 0.25) * f
          var n = y(j.y)
          x.lineTo(k, n)
          x.closePath()
          r -= u / -50
          x.fillStyle =
            '#' +
            (
              ((v(r) * 127 + 128) << 16) |
              ((v(r + u / 3) * 127 + 128) << 8) |
              (v(r + (u / 3) * 2) * 127 + 128)
            ).toString(16)
          x.fill()
          q[0] = q[1]
          q[1] = { x: k, y: n }
        }
        function y (p) {
          var t = p + (z() * 2 - 1.1) * f
          return t > h || t < 0 ? y(p) : t
        }
        i()
        return i
      }

      const canvas = document.createElement('canvas')
      canvas.id = 'evanyou-canvas'
      canvas.style.position = 'absolute'
      canvas.style.top = 0
      canvas.style.left = 0
      canvas.style.zIndex = 0
      canvas.style.width = '100%'
      canvas.style.width = '100%'
      canvas.style.pointerEvents = 'none'
      document.body.appendChild(canvas)
      var listener = evanyou()
      document.addEventListener('click', listener)
    },
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

<style lang="scss" scoped>
.evanyou-canvas{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 0;
}
* {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
.btn {
  cursor: pointer;
  font-size: 14px;
  background: #ffc7d1;
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  margin: 10px auto;
  &:active {
    opacity: .8;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  z-index: 10;
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
