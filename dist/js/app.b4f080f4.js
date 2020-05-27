(function(t){function e(e){for(var n,s,d=e[0],a=e[1],u=e[2],l=0,h=[];l<d.length;l++)s=d[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);c&&c(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,d=1;d<i.length;d++){var a=i[d];0!==o[a]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],a=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var c=a;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"title"},[i("div",[t._v("简单视频剪辑功能实现")]),i("div",{staticClass:"btn",on:{click:t.toggle}},[t._v("切换横竖屏视频")])]),t.videoShow?i("vue-video-clip",{ref:"VideoClip",attrs:{url:t.url},on:{getTime:t.getTime}}):t._e(),i("div",[i("div",[t._v("start："+t._s(t.current.start))]),i("div",[t._v("end："+t._s(t.current.end))])])],1)},r=[],s=(i("cb29"),i("d3b7"),i("25f0"),i("a0d0")),d=i.n(s),a=i("98ff"),u=i.n(a),c={name:"Home",data:function(){return{url:d.a,current:{},videoShow:!0,isPortrait:!1}},mounted:function(){this.bgInit()},methods:{bgInit:function(){function t(){var t,e=document.getElementById("evanyou-canvas"),i=e.getContext("2d"),n=window.devicePixelRatio||1,o=window.innerWidth,r=window.innerHeight,s=90,d=Math,a=0,u=2*d.PI,c=d.cos,l=d.random;function h(){i.clearRect(0,0,o,r),t=[{x:0,y:.7*r+s},{x:0,y:.7*r-s}];while(t[1].x<o+s)v(t[0],t[1])}function v(e,n){i.beginPath(),i.moveTo(e.x,e.y),i.lineTo(n.x,n.y);var o=n.x+(2*l()-.25)*s,r=f(n.y);i.lineTo(o,r),i.closePath(),a-=u/-50,i.fillStyle="#"+(127*c(a)+128<<16|127*c(a+u/3)+128<<8|127*c(a+u/3*2)+128).toString(16),i.fill(),t[0]=t[1],t[1]={x:o,y:r}}function f(t){var e=t+(2*l()-1.1)*s;return e>r||e<0?f(t):e}return e.width=o*n,e.height=r*n,i.scale(n,n),i.globalAlpha=.6,h(),h}var e=document.createElement("canvas");e.id="evanyou-canvas",e.style.position="absolute",e.style.top=0,e.style.left=0,e.style.zIndex=0,e.style.width="100%",e.style.width="100%",e.style.pointerEvents="none",document.body.appendChild(e);var i=t();document.addEventListener("click",i)},getTime:function(t){this.current=t},toggle:function(){var t=this;this.isPortrait?(this.url=d.a,this.isPortrait=!1):(this.url=u.a,this.isPortrait=!0),this.videoShow=!1,setTimeout((function(){t.videoShow=!0,t.$nextTick((function(){t.$refs.VideoClip.init()}))}),100)}}},l=c,h=(i("5dbd"),i("2877")),v=Object(h["a"])(l,o,r,!1,null,"cc7d4f3c",null),f=v.exports,m=(i("b0c0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.videoShow?i("div",{staticClass:"custom-video"},[i("div",{ref:"custom-video_container",staticClass:"custom-video_container"},[i("div",{staticClass:"custom-video_video"},[i("video",{ref:"custom-video",attrs:{src:t.blobURL}},[i("p",[t._v("设备不支持")])])])]),i("div",{staticClass:"video-controls",on:{mousedown:t.handleClick}},[i("div",{ref:"thumbs",staticClass:"thumbs"},[t.thumbCount?i("div",{ref:"thumbs-inner",staticClass:"inner"},t._l(t.thumbArr,(function(e,n){return i("div",{key:n,staticClass:"inner-item",style:"width:"+t.videoUnitWidth+"px;"},[i("video",{attrs:{width:"100%",preload:"metadata",src:e.url},on:{canplay:function(t){e.loading=!1}}}),e.loading?i("div",{staticClass:"inner-loading"},[t._m(0,!0)]):t._e()])})),0):t._e()]),i("div",{ref:"control-bars",staticClass:"control-bars"},[i("div",{staticClass:"control-bars-mask left",style:"width:"+t.leftMovePercentage+"%;",attrs:{"data-direction":"left"}}),i("div",{staticClass:"control-bars-mask right",style:"width:"+t.rightMovePercentage+"%;",attrs:{"data-direction":"right"}}),i("div",{staticClass:"control-bars-progress",class:{animate:t.videoEdit.play},style:"left:"+t.videoEdit.currentPosition+"%;"},[i("svg",{attrs:{width:"54px",height:"24px",viewBox:"0 0 54 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("path",{attrs:{d:"M27,23 L27,24 L26,24 L26,23 C26,20.2385763 23.7614237,18 21,18 L9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 L45,0 C49.9705627,0 54,4.02943725 54,9 C54,13.9705627 49.9705627,18 45,18 L32,18 L32,18 C29.2385763,18 27,20.2385763 27,23 Z",id:"time_bg",fill:"#FFFFFF"}})])]),i("span",{staticClass:"text"},[t._v(t._s(t.timeTranslate(t.currentTime)))])]),i("div",{staticClass:"control-bars-wrapper",style:"left:"+t.leftMovePercentage+"%;right:"+t.rightMovePercentage+"%;"},[i("div",{ref:"move-left-icon",staticClass:"control-bars-move left",on:{mousedown:function(e){return t.handleMoveDown(e,"left")}}}),i("div",{ref:"move-right-icon",staticClass:"control-bars-move right",on:{mousedown:function(e){return t.handleMoveDown(e,"right")}}})])])]),i("div",{staticClass:"video-btn"},[i("div",{staticClass:"toggle",on:{click:t.togglePlayStatus}},[i("div",{staticClass:"toggle-icon",class:{playing:t.videoEdit.play}})]),i("div",{staticClass:"crop-range"},[i("div",{staticClass:"crop-input crop-start"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputStartLeftTime,expression:"inputStartLeftTime",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"00",maxlength:"2",id:"range-0"},domProps:{value:t.inputStartLeftTime},on:{input:function(e){e.target.composing||(t.inputStartLeftTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),i("span",[t._v("：")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputStartRightTime,expression:"inputStartRightTime",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"00",maxlength:"2",id:"range-1"},domProps:{value:t.inputStartRightTime},on:{input:function(e){e.target.composing||(t.inputStartRightTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("span",{staticStyle:{color:"#fff",margin:"0 10px"}},[t._v("一")]),i("div",{staticClass:"crop-input crop-end"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputEndLeftTime,expression:"inputEndLeftTime",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"00",maxlength:"2",id:"range-2"},domProps:{value:t.inputEndLeftTime},on:{input:function(e){e.target.composing||(t.inputEndLeftTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),i("span",[t._v("：")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputEndRightTime,expression:"inputEndRightTime",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"00",maxlength:"2",id:"range-3"},domProps:{value:t.inputEndRightTime},on:{input:function(e){e.target.composing||(t.inputEndRightTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])]):t._e()}),p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading"},[i("div",{staticClass:"loading-con"})])}],g=(i("99af"),i("fb6a"),i("b680"),i("ac1f"),i("3ca3"),i("1276"),i("ddb0"),i("2b3d"),{name:"vueVideoClip",props:{url:{type:String,required:!0}},data:function(){return{blobURL:"",videoState:{play:!1,currentPosition:0},videoEdit:{start:0,end:0,duration:0,play:!1,currentPosition:0},videoDom:null,duration:0,currentTime:0,objectURL:"",videoUnit:0,videoUnitWidth:0,videoRatio:0,isPortraitVideo:!1,thumbCount:0,thumbArr:[],leftMovePercentage:0,leftMoveInit:0,rightMovePercentage:0,rightMoveInit:0,videoShow:!0}},mounted:function(){var t=this;this.init(),window.onresize=function(){t.throttle(t.init(),300)}},computed:{inputStartLeftTime:{set:function(t){t=60*t+this.toInt(document.getElementById("range-1").value),t>=this.videoEdit.end&&(t=0),this.videoEdit.start=t},get:function(){return this.timeTranslate(this.videoEdit.start).split(":")[0]}},inputStartRightTime:{set:function(t){t=60*this.toInt(document.getElementById("range-0").value)+t,t>=this.videoEdit.end&&(t=0),this.videoEdit.start=t},get:function(){return this.timeTranslate(this.videoEdit.start).split(":")[1]}},inputEndLeftTime:{set:function(t){t=60*t+this.toInt(document.getElementById("range-3").value),t<=this.videoEdit.start&&(t=this.videoEdit.duration),this.videoEdit.end=t},get:function(){return this.timeTranslate(this.videoEdit.end).split(":")[0]}},inputEndRightTime:{set:function(t){t=60*this.toInt(document.getElementById("range-2").value)+t,t<=this.videoEdit.start&&(t=this.videoEdit.duration),this.videoEdit.end=t},get:function(){return this.timeTranslate(this.videoEdit.end).split(":")[1]}}},watch:{"videoEdit.start":{handler:function(t){this.currentTime=t,this.videoEdit.currentPosition=this.currentTime/this.videoEdit.duration*100,this.leftMovePercentage=this.videoEdit.currentPosition,this.$emit("getTime",{start:t,end:this.videoEdit.end})},deep:!0},"videoEdit.end":{handler:function(t){this.currentTime=t,this.videoEdit.currentPosition=this.currentTime/this.videoEdit.duration*100,this.rightMovePercentage=100-this.videoEdit.currentPosition,this.$emit("getTime",{start:this.videoEdit.start,end:t})},deep:!0}},methods:{throttle:function(t,e,i){var n;return function(){var o=i||this,r=arguments;n||(n=setTimeout((function(){t.apply(o,r),n=null}),e))}},init:function(){var t=this;this.videoDom=this.$refs["custom-video"],this.leftIconDom=this.$refs["move-left-icon"],this.rightIconDom=this.$refs["move-right-icon"],this.thumbsWidth=this.$refs.thumbs.clientWidth,this.leftMoveInit=this.getOffset(this.leftIconDom).left+5,this.rightMoveInit=this.getOffset(this.rightIconDom).left+5,this.minWidthPercentage=(20/this.thumbsWidth*100).toFixed(4),this.initMedaData(),this.transformBlob(),document.addEventListener("mouseup",(function(e){t.handleMoveStatus=!1})),document.addEventListener("mousemove",(function(e){if(t.handleMoveStatus){if("left"===t.handleMoveDirection){var i=e.clientX-t.leftMoveInit;t.leftMovePercentage=i>0?(i/(t.thumbsWidth-20)*100).toFixed(4):0,t.leftMovePercentage>100-t.rightMovePercentage-t.minWidthPercentage&&(t.leftMovePercentage=100-t.rightMovePercentage-t.minWidthPercentage),t.videoEdit.start=(t.videoEdit.duration*t.leftMovePercentage/100).toFixed(4)}if("right"===t.handleMoveDirection){var n=t.rightMoveInit-e.clientX;t.rightMovePercentage=n>0?(n/(t.thumbsWidth-20)*100).toFixed(4):0,t.rightMovePercentage>100-t.leftMovePercentage-t.minWidthPercentage&&(t.rightMovePercentage=100-t.leftMovePercentage-t.minWidthPercentage),t.videoEdit.end=(t.videoEdit.duration*(1-t.rightMovePercentage/100)).toFixed(4)}t.handleClick(e,t.handleMoveDirection)}}))},toInt:function(t){return parseInt(t)||0},togglePlayStatus:function(){this.videoEdit.play?this.toggleVideoPause():this.toggleVideoPlay()},toggleVideoPlay:function(){var t=this;this.videoEdit.end-this.currentTime<.01&&(this.videoDom.currentTime=this.videoEdit.start),setTimeout((function(){t.videoDom.play(),t.videoEdit.play=!0}),50)},toggleVideoPause:function(){this.videoDom.pause(),this.videoEdit.play=!1},playEnd:function(){this.videoDom.currentTime=this.videoEdit.start,this.videoDom.pause(),this.videoEdit.play=!1},transformBlob:function(){var t=this,e=new XMLHttpRequest;e.open("GET",this.url,!0),e.responseType="blob",e.onload=function(e){if(200===this.status){var i=this.response;t.blobURL=URL.createObjectURL(i)}else alert("视频转换失败")},e.send()},initMedaData:function(){var t=this;this.videoDom.addEventListener("loadedmetadata",(function(){t.videoEdit.duration=t.videoDom.duration,t.videoEdit.end=t.videoEdit.duration}));var e=this;this.videoDom.addEventListener("canplay",(function(){if(e.videoRatio=this.videoHeight/this.videoWidth,e.isPortraitVideo=e.videoRatio>1.5,e.videoUnitWidth=e.isPortraitVideo?28:88,e.thumbCount=Math.ceil(e.thumbsWidth/e.videoUnitWidth),e.videoUnit=e.videoEdit.duration/e.thumbCount,e.thumbArr.length!==e.thumbCount){e.thumbArr=[];for(var t=0;t<e.thumbCount;t++)e.thumbArr.push({url:"".concat(e.blobURL,"#t=").concat(e.videoUnit*t),loading:!0})}var i=Math.round((e.thumbCount*e.videoUnitWidth-e.thumbsWidth)/2);e.$nextTick((function(){e.$refs["thumbs-inner"].style.marginLeft="".concat(-i,"px")}))})),this.videoDom.addEventListener("timeupdate",(function(){t.videoEdit.currentPosition=t.videoDom.currentTime/t.videoEdit.duration*100,t.currentTime=t.videoDom.currentTime,t.videoEdit.end-t.currentTime<.01&&t.videoEdit.play&&t.playEnd()}))},handleMoveDown:function(t,e){this.handleMoveStatus=!0,this.handleMoveDirection=e,this.toggleVideoPause(),this.handleClick(t,e)},handleClick:function(t,e){this.videoEdit.currentPosition="left"===e?this.leftMovePercentage:"right"===e?100-this.rightMovePercentage:(t.clientX-this.leftMoveInit)/this.thumbsWidth*100,this.currentTime=(this.videoEdit.currentPosition*this.videoEdit.duration/100).toFixed(4),this.videoDom.currentTime=this.currentTime,"left"!==t.target.dataset.direction||this.handleMoveStatus||(this.leftMovePercentage=this.videoEdit.currentPosition,this.videoEdit.start=this.currentTime),"right"!==t.target.dataset.direction||this.handleMoveStatus||(this.rightMovePercentage=100-this.videoEdit.currentPosition,this.videoEdit.end=this.currentTime),this.videoEdit.currentPosition=this.videoEdit.currentPosition>100?100:this.videoEdit.currentPosition,this.videoEdit.currentPosition=this.videoEdit.currentPosition<0?0:this.videoEdit.currentPosition},getOffset:function(t,e){return e||(e={},e.left=0,e.top=0),t===document.body||null===t?e:(e.top+=t.offsetTop,e.left+=t.offsetLeft,this.getOffset(t.offsetParent,e))},timeTranslate:function(t){var e=Math.floor(t/60);return e<10&&(e="0"+e),e+":"+(t%60/100).toFixed(2).slice(-2)}}}),b=g,E=(i("d5e6"),Object(h["a"])(b,m,p,!1,null,"440890c0",null)),P=E.exports,y={install:function(t,e){t.component(P.name,P)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(y);var w=y;n["a"].config.productionTip=!1,n["a"].use(w),new n["a"]({render:function(t){return t(f)}}).$mount("#app")},"5dbd":function(t,e,i){"use strict";var n=i("ea5c"),o=i.n(n);o.a},"98ff":function(t,e,i){t.exports=i.p+"media/videoPortrait.81062a31.mp4"},"9b42":function(t,e,i){},a0d0:function(t,e,i){t.exports=i.p+"media/mov_bbb.198918f4.mp4"},d5e6:function(t,e,i){"use strict";var n=i("9b42"),o=i.n(n);o.a},ea5c:function(t,e,i){}});
//# sourceMappingURL=app.b4f080f4.js.map