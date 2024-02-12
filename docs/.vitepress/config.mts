import { defineConfig } from 'vitepress'
import demoblock from 'vitepress-demoblock';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import DefaultTheme from "vitepress/theme";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "merikle-ui",
  description: "一个vue3组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      '/vitepress/guid/': { base: '/vitepress/guid/', items: sidebarGuide() },
      '/vitepress/components/': { base: '/vitepress/components/', items: sidebarComponents() }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})


function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '首页',
      link: '/',
    },
    {
      text: '文档',
      link: '/vitepress/guid/getting-start',
      activeMatch: '/vitepress/guid/'
    },{
      text: '组件',
      link: '/vitepress/components/button',
      activeMatch: '/vitepress/components/'
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return  [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '快速开始', link: 'getting-start' },
        { text: '安装', link: 'install' }
      ]
    }
  ]
}

function sidebarComponents():DefaultTheme.SiderbarItem[]{
  return [
    {
      text: '组件',
      collapsed: false,
      items: [
        {text: 'icon',link: 'icon'},
        { text: 'button', link: 'button' }
      ]
    }
  ]
}
