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
        { text: "Icon图标", link: "icon" },
        { text: "Button按钮", link: "button" },
        { text: "Message信息框", link: "message" },
      ],
    },
    {
      text: "导航",
      collapsed: false,
      items: [
        { text: "Breadcrumb面包屑", link: "breadcrumb" },
        { text: "DropDown下拉菜单", link: "dropdown" },
        { text: "Pagination分页", link: "dropdown" },
      ],
    },
    {
      text: "表单",
      collapsed: false,
      items: [
        { text: "Input输入框", link: "input" },
        { text: "Upload上传", link: "upload" },
      ],
    },

  ];
}
