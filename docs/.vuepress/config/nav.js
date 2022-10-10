// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '🅿󠁁🇭🅿后端',
    link: '/frame/',
    items: [
      { text: 'Laravel', link: '/note/laravel/' },
      { text: 'Thinkphp', link: '/note/thinkphp/' },
      { text: 'Swoole', link: '/note/swoole/' },
      { text: 'Workman', link: '/note/workman/' },
      { text: 'php', link: '/note/php/' },
    ],
  },
  // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
  {
    text: '🌈前端',
    items: [
      { text: 'HTML', link: '/web/html/' },
      { text: 'CSS', link: '/web/css/' },
      { text: 'JavaScript', link: '/web/javasript/' },
      { text: 'Vue', link: '/web/vue/' },
      { text: 'ES6', link: '/web/es6/' },
      // { text: 'Node', link: '/web/node/' },
      { text: '小程序', link: '/web/wxapp/' },
    ],
  },
  {
    text: '🗒数据库',
    link: '/database/',
    items: [
      { text: 'Mysql', link: '/database/mysql/' },
      { text: 'Redis', link: '/database/redis/' },
      { text: 'Es', link: '/database/es' },
      { text: 'MongoDb', link: '/database/mongodb' },
    ],
  },
  {
    text: '🌐运维',
    link: '/dev/',
    items: [
      { text: 'Git', link: '/dev/git/' },
      { text: 'Composer', link: '/dev/composer/' },
      { text: 'Linux', link: '/dev/linux/' },
      { text: 'Nginx', link: '/dev/nginx/' },
      { text: 'Docker', link: '/dev/docker/' },
    ],
  },
  {
    text: '🕹️技术总结',
    link: '/technology/',
    items: [
      { text: '开发实战', link: '/technology/skill/' },
      { text: '开发工具类', link: '/technology/tool/' },
      // { text: '其他工具类', link: '/technology/other/' },
    ],
  },
  {
    text: '📌更多',
    link: '/more/',
    items: [
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '💖关于', link: '/about/' },
  {
    text: '💻收藏',
    link: '/pages/beb6c0bd8a66cea6/',
  },
  {
    text: '👣索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
