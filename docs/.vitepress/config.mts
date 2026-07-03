import { defineConfig } from 'vitepress'

const base = process.env.SITE_BASE ?? '/blog/'

export default defineConfig({
  lang: 'zh-CN',
  title: '付建行的个人 Blog',
  description: '记录开源软件开发与信息安全学习实践',
  base,
  lastUpdated: true,
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` },
    ],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Blog', link: '/posts/github-pages-practice' },
      { text: '关于', link: '/about' },
    ],

    sidebar: [
      {
        text: 'Blog 文章',
        items: [
          {
            text: '使用 VitePress 与 GitHub Actions 搭建个人 Blog',
            link: '/posts/github-pages-practice',
          },
        ],
      },
      {
        text: '关于',
        items: [{ text: '关于我', link: '/about' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FrankkAtr/blog' },
    ],

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    footer: {
      message: '使用 VitePress 构建，通过 GitHub Actions 自动发布',
      copyright: 'Copyright © 2026 付建行',
    },
  },
})
