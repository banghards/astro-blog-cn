# Larus Blog

一个基于 `Astro` 的中文个人博客，适合写技术文章、AI 工具评测、资源整理和长期随笔。

现在这个项目使用本地 Markdown 作为唯一内容来源：

- 本地 Markdown：放在 [src/content/blog](D:/AI/astro-blog-cn/src/content/blog)

## 本地开发

```bash
npm install
npm run dev
```

本地访问：

```text
http://localhost:4321/
```

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动本地开发环境 |
| `npm run build` | 构建静态站点到 `dist/` |
| `npm run preview` | 本地预览构建结果 |

## 内容目录

```text
src/
  components/        公共组件
  content/blog/      本地 Markdown 文章
  layouts/           页面布局
  pages/             路由页面
  utils/             统一内容聚合工具
```

你以后最常改的文件：

- `src/consts.ts`：站点名称、描述、作者信息
- `src/content/blog/`：新增和修改 Markdown 文章
- `src/pages/index.astro`：首页内容
- `src/styles/global.css`：全局视觉风格

## 新文章格式

```md
---
title: 文章标题
description: 一句话摘要
pubDate: 2026-04-23
category: AI与科技
tags:
  - AI
  - 工具评测
draft: false
---

正文开始。
```

## 排查建议

如果构建失败，常见原因是：

1. 某篇文章的 slug 与现有文章重复
2. 某篇文章的日期字段格式异常
3. `heroImage` 路径错误或图片资源不存在

## 部署到 Vercel

这个项目已经做好了 Vercel 部署准备：

- `Astro` 输出为静态站点
- `astro.config.mjs` 会优先读取 `SITE_URL`
- 如果在 Vercel 上构建，也会自动读取 `VERCEL_URL`

### 方式一：网页连接 GitHub

1. 把项目推到 GitHub。
2. 打开 Vercel，选择 `Add New Project`。
3. 导入这个仓库。
4. Framework 识别为 `Astro` 即可。
5. 在环境变量里补上 `SITE_URL`。
6. 点击部署。

### 方式二：命令行部署

如果你本机已经登录了 Vercel：

```bash
vercel
vercel --prod
```

## 当前已具备的页面

- 首页
- 文章列表页
- 文章详情页
- 分类页
- 标签页
- 归档页
- 关于页
- RSS
- Sitemap

## 下一步可以继续做

- 统一分类和标签命名
- 批量迁移更多 Markdown 文稿
