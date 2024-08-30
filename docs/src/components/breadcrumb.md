# 面包屑导航
## 基础用法
<preview path="../example/breadcrumb/breadcrumb-base.vue" title="基本使用"></preview>
## 图标分割符
<preview path="../example/breadcrumb/breadcrumb-icon.vue" title="图标分隔符"></preview>
# Breadcrumb API
## Breadcrumb Attribute
| 属性名            | 说明           | 类型                       | 默认值 |
|----------------|--------------|--------------------------|-----|
| separator      | 分隔符          | ^[string]                | /   |
| separator-icon | 图标分隔符的组件或组件名 | ^[string] / ^[Component] | —   |
# Breadcrumb Slots
| 插槽名     | 说明          | 子标签             |
|---------|-------------|-----------------|
| default | 自定义默认内容     | Breadcrumb Item |

# BreadcrumbItem API
## BreadcrumbItem Attributes
| 属性名    | 说明                            | 类型                        | 默认值        |
| ------- |-------------------------------|---------------------------|------------|
| to      | 路由跳转目标，同 vue-router 的 to 属性   | ^[string] / ^[object] | ''         |
| replace | 如果设置该属性为 true, 导航将不会留下历史记录    | ^[boolean]                | false      |
# BreadcrumbItem Slots
| 插槽名     | 说明          |
|---------|-------------|
| default | 自定义默认内容     | 
