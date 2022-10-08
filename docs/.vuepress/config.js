const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  base: '/blog/',  // 服务器打包前需要注释掉因为是根目录，github是部署在blog下
  // theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "窝窝侠",
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,vue,css3,html5,git,github等技术文章。',
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
