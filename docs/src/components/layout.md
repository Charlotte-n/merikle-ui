# 布局
通过基础的 24 分栏，迅速简便地创建布局。
>组件默认使用 Flex 布局，不需要手动设置 type="flex"。
> 
>请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。


## 基础布局
通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。
<preview path="../example/layout/base.vue" title="基本使用"></preview>
## 分栏间隔
支持列间距。

行提供 gutter 属性来指定列之间的间距，其默认值为0。
<preview path="../example/layout/gutter.vue" title="分栏间隔"></preview>
## 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
<preview path="../example/layout/mix.vue" title="分栏间隔"></preview>
## 列偏移
您可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。
<preview path="../example/layout/offset.vue" title="列偏移"></preview>
## 对齐方式
默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。
<preview path="../example/layout/align.vue" title="对齐方式"></preview>


