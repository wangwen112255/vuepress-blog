<template>
  <div class="custom-page archives-page">
    <div class="theme-vdoing-wrapper">
      <h1>
        <img
          :src="currentBadge"
          v-if="$themeConfig.titleBadge === false ? false : true"
        />
        {{ this.$page.title }}
      </h1>
      <div id="archives-temp">
        <div id="archives-content">
          <div class="archives-wrapper" ref="archives">
            <div class="archives-title" v-for="(item, index) in postsList" :key="index">
              <div v-if="(year = getYear(index)) !== getYear(index - 1)" style="position: relative" class="year" @click="changeContentState">
                <span class="calendar-logo">
                  <img src="https://cdn.jsdelivr.net/gh/Chubby-Duner/image-hosting@master/blog/calendar.png" alt="calendar">
                </span>
                <h3 class="yearText">{{ year }}</h3>
              </div>
              <div class="archives" style="display: block; overflow: hidden">
                <span class="ar-circle"></span>
                <div class="arrow-left"></div>
                <div class="brick">
                  <router-link :to="item.path">
                    {{ item.title }}
                    <span class="clock">
                      <img src="https://cdn.jsdelivr.net/gh/Chubby-Duner/image-hosting@master/blog/clock1.png" alt="clock">
                      <span class="right-time">{{ getDate(item) }}</span>
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import { type } from '../util'
import TitleBadgeMixin from '../mixins/titleBadge'

export default {
  mixins: [TitleBadgeMixin],
  data () {
    return {
      postsList: [],

      perPage: 80, // 每页长
      currentPage: 1// 当前页
    }
  },
  created () {
    this.getPageData()
  },
  mounted () {

    window.addEventListener('scroll', debounce(() => {
      if (this.postsList.length < this.$sortPostsByDate.length) {
        const docEl = document.documentElement
        const docBody = document.body
        const scrollTop = docEl.scrollTop || docBody.scrollTop;
        const clientHeight = docEl.clientHeight || docBody.clientHeight;
        const scrollHeight = docEl.scrollHeight || docBody.scrollHeight;

        if (scrollHeight > clientHeight && scrollTop + clientHeight >= scrollHeight - 250) {
          this.loadmore()
        }
      }

    }, 200))
  },
  methods: {
    getPageData () {
      const currentPage = this.currentPage
      const perPage = this.perPage
      this.postsList = this.postsList.concat(this.$sortPostsByDate.slice((currentPage - 1) * perPage, currentPage * perPage))
    },
    loadmore () {
      this.currentPage = this.currentPage + 1
      this.getPageData()
    },
    getYear (index) {
      const item = this.postsList[index]
      if (!item) {
        return
      }
      const { frontmatter: { date } } = item
      if (date && type(date) === 'string') {
        return date.split(" ")[0].slice(0, 4)
      }
    },
    getDate (item) {
      const { frontmatter: { date } } = item
      if (date && type(date) === 'string') {
        return date.split(" ")[0].slice(5, 10)
      }
    },
    changeContentState() {
      const dom = this.$refs.archives
    }
  }
}
</script>

<style lang='stylus'>
@require '../styles/wrapper.styl'

.archives-page
  .theme-vdoing-wrapper
    @extend $vdoing-wrapper
    position relative
    @media (min-width $contentWidth + 80)
      margin-top 1.5rem !important
    ul, li
      margin 0
      padding 0
    li
      list-style none
      &.year
        position sticky
        top $navbarHeight
        background var(--mainBg)
        z-index 1
      &.year:not(:first-child)
        margin-top 3.5rem
      h2
        margin-bottom 0.8rem
        font-weight 400
        padding 0.5rem 0
      a
        display block
        color var(--textColor)
        transition padding 0.3s
        padding 0.5rem 2rem
        line-height 1.2rem
        &:hover
          padding-left 2.5rem
          color $accentColor
          background #f9f9f9
        @media (max-width $contentWidth + 80)
          padding 0.5rem 1rem
          font-weight normal
          &:hover
            padding-left 1.5rem
        span
          opacity 0.6
          font-size 0.85rem
          font-weight 400
          margin-right 0.3rem
    .loadmore
      text-align center
      margin-top 1rem
      opacity 0.5
.theme-mode-dark .archives-page .theme-vdoing-wrapper li a:hover, .theme-mode-read .archives-page .theme-vdoing-wrapper li a:hover
  background var(--customBlockBg)
.hide-navbar
  .archives-page
    .theme-vdoing-wrapper
      li.year
        top 0
.theme-vdoing-wrapper
  #archives-temp
    #archives-content
      .archives-title
        &.year
          position sticky
          top $navbarHeight
          background var(--mainBg)
          z-index 1
        &:hover
          cursor pointer
        &.year:not(:first-child)
          margin-top 3.5rem
#archives-temp
  margin-top 50px
  margin-bottom 100px
  h3
    letter-spacing 2px
    font-style italic
    font-size 20px
    font-weight 400
    color orange
    margin-left 36px
    margin-top 50px
    &:hover
      color #ddd
#archives-content 
  position relative
  border-left 1px dashed #f5f5f5
.calendar-logo
  display inline-block
  width 40px
  height 40px
  position absolute
  top -7px
  left -10px
  img
    width 100%
    height 100%
.archives
  span.ar-circle
    height 10px
    width 10px
    background orange
    display inline-block
    position absolute
    left -5px
    margin-top 22px
    border-radius 100px
.arrow-left
  width 0
  height 0
  display block
  float left
  margin-top 10px
  border-left 20px solid transparent
  border-bottom 20px solid #f5f5f5
  margin-left 11px
.brick
  margin-left 30px
  transition all .4s
  &:hover
    .arrow-left
      box-shadow 0 10px 20px -10px #999
      transform translateY(-5px)
      z-index 999
  a
    color #7d7d7d
    padding 20px
    background #f5f5f5
    margin-bottom 20px
    display block
    letter-spacing 0
.clock
  float right
  position relative
  width 32px
  height 32px
  margin-right 30px
  margin-top -4px
.right-time
  display inline-block
  position absolute
  width 45px
  top 50%
  transform translateY(-57%)
  margin-left 5px
</style>
