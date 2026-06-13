---
title: 让 Hermes Agent 真正变强的 9 个 GitHub 仓库
author: Codex
description: 基于一条 Hermes Agent 生态仓库清单整理：基础 Agent 只是起点，真正能跑起来的 Hermes 工作流，需要核心框架、技能库、Workspace、技能进化、生态索引和 Docker 部署一起组成操作栈。
source: https://x.com/mikenevermiss/status/2065083227069349901
---

# 让 Hermes Agent 真正变强的 9 个 GitHub 仓库

很多人第一次装 `Hermes Agent`，都会有一个落差。

明明大家都说 Agent 很强。

但自己装完以后，感觉好像只是一个更复杂的聊天工具。

能对话。

能跑命令。

能接一些平台。

但离“真正替我干活的 AI 员工”，还有一段距离。

这其实很正常。

因为基础 Agent 只是起点。

真正让 Hermes 变强的，不是只装一个核心仓库，而是围绕它搭起一套生态栈：

- 核心 Agent
- 技能库
- 操作面板
- 技能市场
- MCP 管理
- 多 Agent 控制
- 技能进化
- 部署模板
- 生产环境隔离

下面这 9 个 GitHub 仓库，就是理解 Hermes 生态时最值得先看的那一组。

![标题封面图](./illustrations/01-cover-wide.png)

---

## 1. NousResearch/hermes-agent：整个生态的核心

项目地址：

[`NousResearch/hermes-agent`](https://github.com/NousResearch/hermes-agent)

这是 Hermes 生态的底座。

如果只看一个仓库，就先看它。

它承担的是最核心的 Agent 运行能力：

- 消息平台接入
- 执行后端
- 技能系统
- 记忆与长期任务
- 自我改进循环

其他很多仓库，本质上都是围绕它做增强：

有的给它补技能。

有的给它补工作台。

有的给它补部署方式。

有的给它补生态索引。

所以 `hermes-agent` 可以理解成主机。

后面所有东西，都是插在这台主机上的能力模块。

---

## 2. wondelai/skills：最快补能力的技能库

项目地址：

[`wondelai/skills`](https://github.com/wondelai/skills)

如果你装了 Hermes，却不知道让它具体做什么，最该先看的就是技能库。

`wondelai/skills` 这类仓库的价值很直接：

它把很多已经写好的 skill 放在一起，让你不用什么都从零开始。

Agent 的能力，不只是模型决定的。

很大程度上取决于它手里有没有现成的 SOP。

研究怎么做。

文件怎么处理。

自动化怎么跑。

报告怎么写。

这些都不应该每次重新 prompt。

它们应该变成可安装、可复用的技能卡。

![核心能力栈图](./illustrations/02-core-stack.png)

---

## 3. outsourc-e/hermes-workspace：完整操作面板

项目地址：

[`outsourc-e/hermes-workspace`](https://github.com/outsourc-e/hermes-workspace)

基础 Hermes 能跑，但如果你想真正长期操作它，一个完整 dashboard 会很有价值。

`hermes-workspace` 的方向，就是把 Agent 的核心操作集中到一个工作台里：

- chat
- memory browser
- skill marketplace
- MCP manager
- kanban board
- multi-agent controls

这类项目真正解决的问题是可操作性。

命令行很强。

但当 Agent 越来越多、技能越来越多、记忆越来越多、任务越来越多时，人类需要一个更可视化的控制台。

否则你不是在管理 Agent。

你是在终端里追着状态跑。

---

## 4. AMAP-ML/SkillClaw：让技能库自己进化

项目地址：

[`AMAP-ML/SkillClaw`](https://github.com/AMAP-ML/SkillClaw)

Hermes 本身已经有技能系统。

但真正长期使用以后，你会遇到另一个问题：

技能越来越多以后，怎么整理？

哪些技能真的有用？

哪些需要合并？

哪些已经过时？

哪些可以从真实会话里继续提炼？

`SkillClaw` 这类项目关注的是技能库的自动改进和组织。

它把 Agent 使用过程里的真实数据，反过来用于改善 skill library。

这很关键。

因为 Agent 最终不是只靠“装技能”变强。

而是靠持续把使用经验沉淀回技能系统。

---

## 5. awesome-hermes-skills：先找已有方案，再自己造轮子

项目地址：

[`ZeroPointRepo/awesome-hermes-skills`](https://github.com/ZeroPointRepo/awesome-hermes-skills)

很多人一遇到新需求，就想自己写 skill。

这不一定错。

但更高效的做法，应该是先看社区有没有现成方案。

`awesome-hermes-skills` 这类 curated list 的价值，就是帮你快速扫一遍已有技能生态。

它通常会按状态、用途、质量或来源做分类。

这样你可以先判断：

- 有没有已有 skill
- 这个 skill 是否还在维护
- 它适不适合当前任务
- 是否值得 fork 后改成自己的版本

这能省下很多重复造轮子的时间。

---

## 6. awesome-hermes-agent：操作者参考手册

项目地址：

[`SamurAIGPT/awesome-hermes-agent`](https://github.com/SamurAIGPT/awesome-hermes-agent)

如果 `awesome-hermes-skills` 更偏 skill，那 `awesome-hermes-agent` 更像操作者参考手册。

它关心的不只是某个技能，而是整套 Hermes 运行栈：

- 工具
- 集成
- 部署模板
- 多 Agent 方案
- 运维建议
- 生态项目

这种仓库适合在你准备真正搭一套 Hermes 工作流时翻。

它不是让你一次全装。

而是帮你知道，生态里都有哪些拼图。

---

## 7. hermes-ecosystem：看清更大的生态地图

项目地址：

[`ksimback/hermes-ecosystem`](https://github.com/ksimback/hermes-ecosystem)

当项目越来越多时，最麻烦的不是找不到东西。

而是你不知道哪些值得看。

`hermes-ecosystem` 这类仓库的价值，是把更大的 Hermes 生态按类别整理起来。

它不只是技能列表。

而是把工具、插件、部署、集成、监控、安全、工作流等方向放到一张更大的地图里。

如果你已经不满足于“装几个 skill”，而是想理解 Hermes 生态怎么展开，这类地图很值得长期关注。

![生态索引图](./illustrations/03-ecosystem-map.png)

---

## 8. 0xNyk/awesome-hermes-agent：更偏部署和迁移的 curated list

项目地址：

[`0xNyk/awesome-hermes-agent`](https://github.com/0xNyk/awesome-hermes-agent)

同样叫 awesome list，不同维护者的侧重点会不一样。

`0xNyk/awesome-hermes-agent` 更偏向：

- deployment hardening
- multi-agent execution
- 从 OpenClaw 迁移到 Hermes
- 更工程化的部署路径

这类仓库适合有一定基础以后再看。

如果你只是个人玩，先把核心 Agent、技能库和 workspace 跑起来。

如果你要长期运行、多 Agent、生产化部署，再去看这些更硬的方向。

---

## 9. hermes-agent/docker：生产部署的基础模板

项目地址：

[`NousResearch/hermes-agent/tree/main/docker`](https://github.com/NousResearch/hermes-agent/tree/main/docker)

最后一个不是独立仓库，而是 `hermes-agent` 里的 Docker 部署目录。

但它很重要。

因为真正长期跑 Agent，迟早会遇到部署问题：

- 环境隔离
- sandbox
- secrets 管理
- gateway
- rootless setup
- 生产环境稳定性

本地跑起来只是第一步。

长期稳定运行，才是第二步。

Docker 部署模板的价值就在这里：

它把 Hermes 从“我电脑里能跑”，往“可重复部署、可隔离、可维护”的方向推进。

![生产部署图](./illustrations/04-production-deploy.png)

---

## 项目链接清单

这类文章最关键的是源链接，9 个项目集中放这里：

- [`NousResearch/hermes-agent`](https://github.com/NousResearch/hermes-agent)：Hermes 核心 Agent
- [`wondelai/skills`](https://github.com/wondelai/skills)：预构建技能库
- [`outsourc-e/hermes-workspace`](https://github.com/outsourc-e/hermes-workspace)：操作面板和 workspace
- [`AMAP-ML/SkillClaw`](https://github.com/AMAP-ML/SkillClaw)：技能库自动进化
- [`ZeroPointRepo/awesome-hermes-skills`](https://github.com/ZeroPointRepo/awesome-hermes-skills)：Hermes skills curated list
- [`SamurAIGPT/awesome-hermes-agent`](https://github.com/SamurAIGPT/awesome-hermes-agent)：Hermes 操作者参考
- [`ksimback/hermes-ecosystem`](https://github.com/ksimback/hermes-ecosystem)：Hermes 生态地图
- [`0xNyk/awesome-hermes-agent`](https://github.com/0xNyk/awesome-hermes-agent)：部署和迁移方向 curated list
- [`hermes-agent/docker`](https://github.com/NousResearch/hermes-agent/tree/main/docker)：Hermes Docker 部署模板

---

## 最后：base agent 只是起点，生态栈才是战斗力

如果只装一个基础 Hermes，你很可能会觉得它还不够强。

这不是错觉。

因为 base agent 本来就只是起点。

真正让它变强的，是后面这一整套生态：

技能库让它有能力。

workspace 让它可操作。

SkillClaw 让技能能进化。

awesome list 让你少走弯路。

ecosystem map 让你看清全局。

Docker 部署让它能长期稳定运行。

所以这 9 个仓库的价值，不只是“收藏链接”。

它们更像一张 Hermes 操作栈地图。

你不需要一次全部装上。

但你要知道：

当你觉得 Hermes 还不够强时，问题可能不是 Agent 本体不行。

而是你还没把它该接的生态能力接上。

---

原文来源：[@mikenevermiss](https://x.com/mikenevermiss/status/2065083227069349901)
