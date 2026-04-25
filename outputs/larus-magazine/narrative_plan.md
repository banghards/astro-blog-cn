## Audience

- 需要快速理解 `astro-blog-cn` 项目定位、内容结构与后续扩展方向的作者本人或协作者

## Objective

- 产出一份 6 页杂志风展示稿，用编辑化版式概括博客品牌、内容骨架、代表文章与下一步动作

## Narrative Arc

1. 用强视觉封面定义博客气质
2. 用关键数字解释这不是零散草稿，而是可持续写作系统
3. 说明内容骨架与站点结构
4. 用代表文章展示主题张力
5. 用编辑视角总结内容密度与可扩展性
6. 收束到下一步行动建议

## Slide List

1. 封面：Larus Blog 的杂志化品牌页
2. 概览：文章数、分类数、内容来源
3. 内容骨架：AI、开发、阅读三条主线
4. 代表文章：Hermes、Obsidian、GPT-Image-2
5. 编辑视角：主题密度、标签覆盖、发布节奏
6. 下一步：如何把博客继续做厚

## Source Plan

- `src/consts.ts`
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/content/blog/welcome.md`
- `src/content/blog/hermes-agent-memory-guide.md`
- `src/content/blog/obsidian-ai-automation-feasibility.md`
- `src/content/blog/soft-black-mist-korean-portrait.md`

## Visual System

- 纸张米白底色、赭红主色、深墨文字
- Serif 标题搭配无衬线正文，强调杂志感而不是企业模板感
- 大面积满版裁切图片 + 半透明阅读层 + 卡片化信息块

## Asset Plan

- 直接复用项目已有封面图与案例图作为各页视觉背景
- 不额外生成图像，以保持主题与项目内容一致

## Editability Plan

- 所有标题、数字、正文、卡片文字都使用可编辑文本对象
- 图片仅承担氛围和封面角色
