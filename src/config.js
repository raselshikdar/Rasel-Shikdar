/**
 * 这是我个人的博客配置文件
 * 请根据文档复制 config.sample.js 文件并重命名为 config.js
 * 并修改为对应配置项
 */

export default {
  // 博客基础配置
  title: 'Rasel',
  subtitle: 'Shikdar',
  description: 'Rasels\'s Blog',
  keywords: 'Rasel, blog, Shikdar',
  logo: './logo.svg',
  favicon16: './favicon.ico',
  favicon32: './favicon.ico',
  createdTime: '2019-08-01',
  icp: '赣ICP备20000895号-1',
  icpLink: '//beian.miit.gov.cn/',
  beian: '',
  beianLink: '',
  // 关于页二维码
  alipay_qr: '/images/alipayQr.jpg',
  // GitHub Issues 配置
  username: 'raselshikdar',
  repository: 'myblogs',
  // friendsRepo: 'friends', // 留空则默认使用上方仓库获取
  // 您的信息
  author: 'Rasel',
  email: 'imrasel597@gmail.com',
  link: '//rasel.is-a.dev',
  github: '//github.com/raselshikdar',
  // 友链信息
  name: 'Rasel Shikdar',
  url: '//raselshikdar.ddns.net',
  avatar: '//gravatar.wallleap.cn/avatar/be1ccdcf025a92b98a92e331e1b3662a?size=256',
  desc: 'Rasel\'s blog',
  // 文章相关
  pageSize: 12,
  defaultCover: '/images/cover.jpg',
  // 图片加载失败时显示，请将图片下载至你自己的存储空间，并使用自己的 CDN 引入
  errorImg: '/images/error.gif',
  // Twikoo 评论配置
  twikoo: {
    src: '//cdn.staticfile.org/twikoo/1.6.22/twikoo.all.min.js',
  },
}
