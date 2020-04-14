<template>
  <div class="home">
    <p style="fontSize:20px;">简单视频剪辑功能实现</p>
    <CusVideo></CusVideo>
  </div>
</template>

<script>
// @ is an alias to /src
import CusVideo from '@/components/video.vue'

export default {
  name: 'Home',
  components: {
    CusVideo
  }
}
</script>
