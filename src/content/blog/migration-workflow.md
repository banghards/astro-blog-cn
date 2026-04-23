---
title: 把现有 Markdown 文稿迁进博客的推荐流程
description: 如果你已经在本地写了很多笔记和草稿，可以用一套很轻的流程批量迁移到 Astro 博客里。
pubDate: 2026-04-22
category: 写作流程
tags:
  - Markdown
  - 内容迁移
  - 工作流
heroImage: ../../assets/blog-placeholder-2.jpg
---

很多人的问题不是“没内容可写”，而是内容散落在很多目录和笔记工具里。

比较稳妥的迁移方式是：

1. 先把文章按主题分目录。
2. 给每篇文章补齐 frontmatter。
3. 统一命名规则，例如使用英文 slug 文件名。
4. 发布前只做轻量校对，不追求一次性完美。

一篇适合迁移进博客的 Markdown，建议最少包含这些字段：

```md
---
title: 文章标题
description: 文章摘要
pubDate: 2026-04-23
category: AI 与科技
tags: ["AI", "工具评测"]
---
```

如果你现在已经有现成的 `WiKi` 文稿，我们下一步可以直接把它们迁进这个博客项目里。
