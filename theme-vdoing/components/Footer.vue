<template>
  <div class="footer">
    <div class="icons" v-if="social && social.icons">
      <a
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        v-for="(item, index) in social.icons"
        :key="index"
        target="_blank"
      ></a>
    </div>

    <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
    <template>
      <div class="footer-text">
        <span>🖥️ {{ runtimeText }}</span>
      </div>
      <div class="footer-info">
        <p>
          © {{ new Date().getFullYear() }}窝窝侠 💌
          <a href="https://beian.miit.gov.cn" target="_blank"
            >豫ICP备20005263号-2</a
          >
          🛀 Theme by 💝
          <a
            href="https://github.com/xugaoyi/vuepress-theme-vdoing"
            target="_blank"
            title="本站主题"
            >Vdoing && 小胖墩er
          </a>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      runtimeText: "",
      timer: null,
    };
  },
  computed: {
    social() {
      return this.$themeConfig.social;
    },
    footer() {
      return this.$themeConfig.footer;
    },
  },
  mounted() {
    // 先清除再重新开启，避免定时器叠加的bug
    clearInterval(this.timer);
    this.timer = null;

    this.timer = setInterval(this.runtime, 1000);
  },
  methods: {
    runtime() {
      // 初始化时间，日/月/年 时:分:秒
      const X = new Date("08/09/2020 16:00:00");
      const Y = new Date();
      const T = Y.getTime() - X.getTime();
      const M = 24 * 60 * 60 * 1000;
      const a = T / M;
      const A = Math.floor(a);
      const b = (a - A) * 24;
      const B = Math.floor(b);
      const c = (b - B) * 60;
      const C = Math.floor((b - B) * 60);
      const D = Math.floor((c - C) * 60);
      this.runtimeText = `小破站已坚强运行 ${A} 天 ${B} 小时 ${C} 分 ${D} 秒`;
    },
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="stylus">
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
  padding 5rem 1.5rem 2.5rem
  text-align center
  color #b9b9b9
  box-sizing border-box
  font-size 0.85rem
  transition all 0.2s ease
  .icons
    margin-bottom 12px
    .iconfont
      padding 0 10px
      font-size 1.3rem
  a
    color inherit
    &:hover
      color $accentColor
@media (min-width ($MQMobile + 1px))
  .sidebar-open .footer
    width auto
    padding-left ($sidebarWidth + 1.5rem)
@media (min-width 1520px)
  .have-rightmenu .footer
    padding-right ($rightMenuWidth + 1.5rem)
.no-sidebar .footer
  width auto
  padding-left 1.5rem
.footer-text, .footer-info
  font-size 13px
  text-align center
  color #b9b9b9
  font-family ''Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif'
</style>
