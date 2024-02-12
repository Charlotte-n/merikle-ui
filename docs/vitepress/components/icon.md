# 图标
merikle-ui以[xicons](https://www.xicons.org/#/)作为图标库
## 安装
```
pnpm i @vicons/ionicons5
```
## 演示
<preview path="../example/icon/icon.vue" title="基本使用"></preview>
## API
### Attributes
| 属性名   | 说明                         | 类型                    | 默认                     |
|-------|----------------------------|-----------------------|------------------------|
| color | SVG tag's fill attribute   | ^[string]             | inherit from color     |
| size  | SVG icon size, size x size | ^[number] / ^[string] | inherit from font size |
### Slots

| 属性名     | 说明                        |
|---------|---------------------------|
| default | customize default content |
