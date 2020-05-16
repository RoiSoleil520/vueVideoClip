
import vueVideoClip from './vueVideoClip.vue'

const VideoClip = {
  install (Vue, options) {
    Vue.component(vueVideoClip.name, vueVideoClip)
  }
}

// if Vue is the window object, auto install it
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VideoClip)
}

export default VideoClip
