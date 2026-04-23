---
title: The Ultimate Open-Source Dev Stack
description: 一份围绕 Kimi K2.6、Hermes Agent、LLM Wiki、GBrain、GStack 的开源开发栈整理，适合做 AI 编程工作流选型参考。
pubDate: 2026-04-22
category: AI与科技
tags:
  - AI
  - 开源
  - 开发栈
  - Agent
  - Hermes
draft: false
heroImage: ../../assets/posts/covers/dev-stack-cover.png
---

> 这篇整理把当下流行的一套 AI 编程工作流拆成了五六层组件，适合拿来做“架构地图”而不是单点教程。

## 它想解决什么问题

作者认为，当前 AI 编程工具普遍有四个结构性缺陷：

- 健忘症：上下文和经验容易丢失。
- 单线程执行：很难同时并行推进多个子任务。
- 通用行为：缺少角色化、专业化分工。
- 知识衰减：经验难以沉淀和更新。

## 这套栈的主要组件

| 组件 | 用途 | 类型 |
|------|------|------|
| Hermes Agent | 代理框架 | 框架 |
| Kimi K2.6 | 大模型 | 模型 |
| Karpathy Skills | 编码规范 | 技能/规则 |
| LLM Wiki | 知识管理 | 方法论 |
| GBrain | 记忆系统 | 工具 |
| GStack | 团队工具栈 | 工作流工具 |

## 1. Kimi K2.6

亮点包括：

- 上下文长度 256K
- 最多支持 300 个并行子 Agent
- 适合承担主力模型角色

## 2. Hermes Agent

主打“会学习的代理框架”，常见能力包括：

- 多平台接入
- 工具调用
- 定时任务
- 子代理并行执行
- 从经验中沉淀技能

## 3. Karpathy Skills

可以理解成一套“写代码前先想清楚”的工作方式约束，核心强调：

- 先思考，再编码
- 优先简单方案
- 只改必要部分
- 设定目标后持续验证

## 4. LLM Wiki

它不是某个具体产品，更像一种知识管理方法：

- `Raw Sources` 保存原始资料
- `Wiki` 保存整理后的结构化 Markdown
- `Query` 从 Wiki 中带引用地回答问题

## 5. GBrain

更偏记忆系统和知识图谱：

- 混合搜索
- 自动关系连接
- 时间线结构化
- Agent 持续运行能力

## 6. GStack

更像“给 Claude Code 配一整个虚拟团队”，包括：

- CEO / 创始人视角
- 工程经理
- 设计师
- QA
- 安全官
- 发布工程师

## 适合谁

| 场景 | 推荐组合 |
|------|----------|
| 个人效率 | Hermes Agent + Karpathy Skills + LLM Wiki |
| 团队协作 | GStack + GBrain + LLM Wiki |
| 追求最强编码能力 | Kimi K2.6 作为主力模型 |

## 总结

这套“终极开源开发栈”并不是拿来一次装满的，更适合作为选型地图：先搭最小可用组合，再按需求补记忆、知识管理和多角色协作。
