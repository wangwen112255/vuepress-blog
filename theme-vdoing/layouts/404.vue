<template>
  <div class="theme-container">
    <div class="theme-vdoing-content">
      <div class="img-box">
        <img src="https://cdn.jsdelivr.net/gh/Chubby-Duner/image-hosting@master/blog/gif_404.gif" alt="404" class="img-style">
      </div>
      <div style="margin-left: 100px;margin-top: 60px">
          <h1 class="color-main">NOT FOUND!</h1>
          <h2 style="color: #606266">很抱歉，页面它不小心迷路了！</h2>
          <div style="color:#909399;font-size: 14px">请检查您输入的网址是否正确，点击以下按钮可返回首页</div>
          <div style="margin-top: 20px" class="backBtn">
            <router-link to="/">返回首页</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这里什么都没有。`,
  `我是谁？我在哪？`,
  `这是一个Four-Oh-Four.`,
  `看来我们的链接坏掉了~`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus" scoped>
.theme-vdoing-content
  margin 0 auto
  padding 1.5rem
  width 100vw
  display flex
  justify-content center
  
  .img-box
    width 600px

.img-style
  width auto
  height auto
  max-width 100%
  max-height 100%

.backBtn
  width 100px
  height 25px
  border-radius 5px
  background rgb(67,160,182)
  text-align center
  padding 5px
</style>
