import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ziming-ui/' : '/',
  title: 'ZiMing-ui',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        },
        { text: '进阶', items: [{ text: 'xx', link: '/xx' }] }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [{ text: 'Button', link: '/components/button/' }]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/zwm0417/ziming' }]
  }
});
