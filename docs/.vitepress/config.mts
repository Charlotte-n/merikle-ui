import { defineConfig } from "vitepress";
import { DefaultTheme } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "merikle-ui",
  description: "一个vue3组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      "src/guid/": { base: "src/guid/", items: sidebarGuide() },
      "src/components/": {
        base: "src/components/",
        items: sidebarComponents(),
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "首页",
      link: "/",
    },
    {
      text: "文档",
      link: "/src/guid/getting-start",
      activeMatch: "/src/guid/",
    },
    {
      text: "组件",
      link: "/src/components/button",
      activeMatch: "/src/components/",
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "简介",
      collapsed: false,
      items: [
        { text: "快速开始", link: "getting-start" },
        { text: "安装", link: "install" },
      ],
    },
  ];
}

function sidebarComponents(): any {
  return [
    {
      text: "布局组件",
      collapsed: false,
      items: [
        { text: "layout", link: "layout" },
      ],
    },
    {
      text: "组件",
      collapsed: false,
      items: [
        { text: "icon", link: "icon" },
        { text: "button", link: "button" },
        { text: "input", link: "input" },
        { text: "upload", link: "upload" },
      ],
    },

  ];
}
