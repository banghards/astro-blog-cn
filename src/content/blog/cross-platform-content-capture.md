---
title: 多平台内容抓取方法汇总
description: 一份面向内容工作者和自动化用户的抓取方法清单，覆盖 X、微信公众号、小红书、即刻和抖音。
pubDate: 2026-04-20
category: AI与科技
tags:
  - 爬虫
  - 数据抓取
  - 内容自动化
  - X（Twitter）
  - 微信公众号
draft: false
heroImage: ../../assets/posts/covers/content-capture-cover.png
---

> 一份偏实操取向的整理稿，重点在于用低门槛方式抓取公开内容，并尽量避免依赖私有 token。

## X（Twitter）推文和长文章

- 工具：`nitter + xcrawl`
- 思路：先把动态页面转为静态页面，再抓取结构化内容。
- 适用场景：推文、长帖、公开时间线内容。

## X 书签内容抓取

- 工具：`fieldtheory`
- 特点：适合个人书签内容的导出和再处理。

## 微信公众号文章

- 工具：公开抓取接口
- 核心步骤：
  1. 获取公众号文章链接。
  2. 对链接做 URL 编码。
  3. 调用抓取接口输出 Markdown。

示例：

```bash
curl -s "https://down.mptext.top/api/public/v1/download?url=<URL_ENCODED_LINK>&format=markdown"
```

## 小红书图文笔记

- 方法：直接抓网页 HTML。
- 流程：
  1. 抓取 HTML。
  2. 先提取 meta 信息。
  3. 再解析 `window.INITIAL_STATE`。
  4. 获取结构化 note 数据。
  5. 提取图片直链。
  6. 必要时再做视觉分析。

## 即刻文章

| 工具 | 能否抓取互动数据 | 费用 |
|------|------------------|------|
| jina | 否 | 免费 |
| camoufox | 否 | 免费 |
| xcrawl | 是 | 免费 |
| curl + 解析 | 是 | 免费 |

## 抖音视频

- 工具：无头 Chromium + 请求拦截。
- 核心思路：
  1. 用浏览器真实加载页面。
  2. 让页面自动生成签名参数。
  3. 拦截 `aweme/detail` API 响应。
  4. 从响应 JSON 中提取视频直链。
  5. 带 `Referer` 下载视频文件。

## 总结

| 平台 | 工具/方法 | 特点 |
|------|-----------|------|
| X 推文/长文 | nitter + xcrawl | 免费，无需 token |
| X 书签 | fieldtheory | 免费 |
| 微信公众号 | URL 编码 + 抓取接口 | 免费 |
| 小红书 | HTML 解析 | 灵活 |
| 即刻 | jina/camoufox/xcrawl/curl | 方案多 |
| 抖音 | 无头 Chromium | 稳定但稍重 |
