# 华师匣子官网 (CCNU Box Website)

基于 Figma 设计稿复原的华师匣子 3.0 官方网站，展示了完整的产品功能和品牌形象。

## ✨ 特性

- 🎨 **高保真设计复原**: 基于 Figma 设计稿 1:1 复原
- 🚀 **流畅动画效果**: 使用 Framer Motion 实现丝滑的交互动画
- 📱 **响应式设计**: 支持桌面端、平板和移动端
- 🎯 **现代技术栈**: React 19 + TypeScript + Tailwind CSS
- ⚡ **性能优化**: Vite 构建，快速开发和部署

## 🛠️ 技术栈

- **React 19** - 前端框架
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 原子化 CSS
- **Framer Motion** - 动画库
- **Lucide React** - 图标库
- **Vite** - 构建工具
- **pnpm** - 包管理器

## 📱 页面结构

### 1. Hero 区域

- 紫色渐变背景与动态波浪装饰
- 3D 手机和铃铛模型展示
- "BRAND NEW | MUXI TEAM" 品牌标识
- 华师匣子 3.0 版本信息

### 2. 课表功能区域

- 焕新课表功能介绍
- 手机界面模拟展示
- 网络拓扑背景装饰
- 功能特性详细说明

### 3. 成绩查询区域

- 模糊标题艺术效果
- 成绩界面交互展示
- 功能卡片布局
- 玻璃态效果设计

### 4. 图书馆预约区域

- 彩色功能图标网格
- 弹性动画交互
- 网络连接线装饰
- 功能介绍文案

### 5. 页脚区域

- 导航链接集合
- 品牌信息展示
- 浮动装饰元素
- 版权信息

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

## 🎨 设计资源

项目基于 Figma 设计稿开发，包含：

- 完整的页面布局设计
- 3D 模型和图标资源
- 品牌色彩规范
- 动画效果规范

## 📁 项目结构

```
src/
├── sections/          # 页面区域组件
│   ├── HeroSection.tsx
│   ├── ScheduleSection.tsx
│   ├── GradesSection.tsx
│   ├── LibrarySection.tsx
│   └── FooterSection.tsx
├── assets/           # 静态资源
│   ├── mobile-3d.png
│   ├── bell-3d.png
│   ├── logo-circle.png
│   ├── burst-icon.svg
│   └── ...
├── App.tsx          # 主应用组件
├── main.tsx         # 应用入口
└── index.css        # 全局样式
```

## 🎯 核心功能

### 动画效果

- 页面滚动视差动画
- 元素进入动画
- 悬停交互效果
- 浮动装饰动画

### 响应式设计

- 桌面端 (≥1024px)
- 平板端 (768px-1023px)
- 移动端 (<768px)

### 性能优化

- 图片懒加载
- 动画性能优化
- 代码分割
- 资源预加载

## 📄 许可证

© 2024 木犀团队 · 华中师范大学

---

**华师匣子** - 让校园生活更从容 🎓
