---
title: Hermes + Notion + GBrain：把任务系统接入你的个人 AI 助手
author: Codex
description: 基于 Hermes、Notion 与 GBrain 集成教程整理：如何让 AI 助手既能执行任务，又能理解项目上下文，并持续沉淀知识。
source: https://x.com/smantena/status/2052483819270521238
---

# Hermes + Notion + GBrain：把任务系统接入你的个人 AI 助手

很多人做个人 AI 助手，最先想到的是聊天能力和自动化能力。但真正难的是上下文不连通：任务在 Notion，自动化在 Hermes，知识沉淀在 GBrain。

这篇集成思路解决的关键问题是：让 AI 助手既能执行任务，又能理解你正在推进的项目，并把日常工作自动沉淀成长期知识。

![标题封面图](./illustrations/01-cover-wide.png)

## 为什么要把三者连起来

`Hermes` 负责执行和自动化，`Notion` 负责项目与任务，`GBrain` 负责知识抽取和上下文联想。

如果三者是断开的，AI 只能在各自的小盒子里工作。连起来以后，你可以用自然语言创建和更新任务，Hermes 负责真实写入 Notion，GBrain 再把一周任务变化沉淀为项目上下文。

![三系统联动图](./illustrations/02-system-bridge.png)

## 先把 Hermes 接到 Notion

这一步的核心不是“做个脚本”，而是确保 Hermes 不再维护一套假的内部任务列表，而是所有任务动作都真实写进 Notion。

关键步骤包括：

- 创建 Notion Integration
- 给数据库和父页面都授权
- 找到正确的 database ID 和 project page ID
- 直接调用 Notion REST API
- 在 Hermes 提示词里强制所有任务操作必须走脚本

## 真正关键的是行为约束

教程里最重要的原则是：凡是和任务、待办、提醒、跟进有关的消息，Hermes 都必须调用脚本，不能自己假装记住，也不能模拟成功。

没有脚本输出，就不算任务已创建；没有脚本返回，就不能口头确认成功。

![任务脚本控制图](./illustrations/03-notion-task-flow.png)

## 让 GBrain 自动吸收任务上下文

第二部分的做法是：每周拉取最近 7 天有变化的 Notion 任务，按项目分组，用 OpenAI 做简要总结，再写回 GBrain，变成每个项目的 active context 页面。

这样沉淀下来的就不只是任务本身，而是任务背后的模式、推进状态、延迟风险和关键关系。

## 三层分工要清楚

`Notion` 是事实数据库，`Hermes` 是执行层与交互层，`GBrain` 是长期上下文和知识联结层。

这三层不要混。混了以后，任务会失真，洞察会变浅，自动化也会变弱。

![知识沉淀循环图](./illustrations/04-weekly-knowledge-loop.png)

## 值得抄的是工程原则

这篇教程真正值得带走的，是几个原则：

- 所有关键动作都必须落真实系统
- 权限、ID、列名必须先验证
- 能直接打 REST API 就不要被脆弱 SDK 拖住
- 任务系统和知识系统要打通，但不要混成一个东西
- 定期自动总结，才能让 AI 助手具备长期积累能力

原文来源：[@smantena](https://x.com/smantena/status/2052483819270521238)
