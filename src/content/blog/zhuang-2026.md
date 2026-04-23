---
title: 装了啥 2026：一份 AI Coding 工具栈清单
description: 基于 sorrycc 的 2026 年工具清单整理，覆盖 Cursor、Claude Code、Tailscale、LM Studio、Raycast 等常用工具。
pubDate: 2026-04-16
category: 工具与工作流
tags:
  - AI Coding
  - Cursor
  - Claude Code
  - Raycast
  - Tailscale
draft: false
author: sorrycc
source: https://blog.sorrycc.com/zhuang-2026
heroImage: ../../assets/blog-placeholder-2.jpg
---

> 原文：[https://blog.sorrycc.com/zhuang-2026](https://blog.sorrycc.com/zhuang-2026)
> 作者：sorrycc
> 发布日期：2026-04-16

去年《装了啥 2025》的开头里，作者提到自己刚更新了一批 AI 相关工具。到了 2026，这批工具已经从“新增”变成了完整工作流，尤其是 AI Coding 几乎单独长成了一个大类。

## 这一年最大的变化

- Alfred 让位给 Raycast。
- ZeroTier 换成 Tailscale。
- Thor 和 Espanso 被作者自研的 HotApp、EspansoX 替代。
- Screens 被 macOS 自带屏幕共享替代。
- SetApp 正式离场。
- Surge 付费升级到 6.x。
- 语音输入直接转向微信 Mac 自带方案。

## AI Coding

这是 2026 版里新增出来的独立分类。

- **IDE 主力**：Cursor，但传统 IDE 在 AI 编程场景中的地位正在下降。
- **命令行主力**：Claude Code，辅以 Codex。作者提到 90% 的代码是在命令行里写出来的。
- **Claude Code 桌面端**：Anthropic 新近推出，已经开始纳入工作流。
- **多会话管理**：cmux，用来并行开启多个 Claude Code 会话。
- **本地模型**：LM Studio。

## Raycast 启动器配置教程

### 安装

官网：https://raycast.com/

### 基本配置

1. 首次启动后按 `Option + Space` 打开。
2. 在偏好设置里自定义 Hotkey。
3. 如果要替换 Spotlight，可在系统设置里修改快捷键。

### 常用功能

| 命令 | 说明 |
|------|------|
| 计算 | 直接输入数学表达式 |
| 翻译 | `define word` |
| 窗口管理 | `window` |
| 文件搜索 | `file search` |
| 剪切板历史 | `clipboard history` |

## Tailscale VPN 配置教程

### 安装

**macOS/Linux/WSL**
```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

**Windows**

下载安装包：https://tailscale.com/download

### 启动并登录

```bash
sudo tailscale up
```

### 查看状态

```bash
tailscale status
tailscale ip
```

### 常用命令

```bash
tailscale up
tailscale down
tailscale logout
tailscale netcheck
tailscale ping <IP>
```

## Claude Code 配置教程

### 安装

**macOS/Linux/WSL**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell**
```powershell
irm https://claude.ai/install.ps1 | iex
```

### 国内配置（使用中转）

```bash
export ANTHROPIC_AUTH_TOKEN=sk-your-token
export ANTHROPIC_BASE_URL=https://your-mirror-url.com
```

### 基本使用

```bash
cd /your/project
claude
claude -c
claude -p "这段代码有什么问题" < src/utils.ts
```

### 常用命令

| 命令 | 说明 |
|------|------|
| `/init` | 初始化项目，创建 `CLAUDE.md` |
| `/compact` | 压缩会话历史 |
| `/model` | 切换模型 |
| `/rename` | 重命名会话 |
| `/resume` | 查看历史会话 |

## Cursor AI IDE 配置教程

### 安装

官网：https://www.cursor.com/

### 核心快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + L` | AI 助手对话 |
| `Ctrl + I` | Composer |
| `Tab` | 代码补全 |
| `Ctrl + K` | 命令面板 |

### 自定义 API 配置

```json
{
  "cursor.apiKey": "your-api-key",
  "cursor.model": "claude-sonnet",
  "cursor.baseUrl": "https://your-mirror.com/v1"
}
```

## LM Studio 本地大模型配置教程

### 安装

官网：https://lmstudio.ai/

### 基本使用

1. 打开 LM Studio。
2. 搜索模型，例如 `qwen`、`deepseek`。
3. 下载 GGUF 格式模型。
4. 切换到 Chat 标签后加载模型即可对话。

### 启动本地 API 服务

```python
from openai import OpenAI
client = OpenAI(base_url="http://localhost:1234/v1", api_key="not-needed")
response = client.chat.completions.create(
    model="local-model",
    messages=[{"role": "user", "content": "Hello"}]
)
```

## cmux 多会话管理

### 简介

cmux 是终端多会话管理工具，可同时运行多个 Claude Code 会话。

### 常见操作

```bash
cmux
```

- `Ctrl+b` 后按方向键：切换面板
- `Ctrl+b` 后按 `c`：新建面板
- `Ctrl+b` 后按 `n`：切到下一个面板

如果不想用 cmux，也可以直接用 tmux 作为替代。

## Espanso 文本扩展

### 安装

官网：https://espanso.org/

### 基本配置示例

```yaml
matches:
  - trigger: ":date"
    replace: "{{mydate}}"
    vars:
      - name: mydate
        type: date
        params:
          format: "%Y-%m-%d"
```

## 工具地址汇总

| 工具 | 地址 | 说明 |
|------|------|------|
| Raycast | https://raycast.com/ | 启动器，Alfred 替代 |
| Tailscale | https://tailscale.com/ | VPN 组网 |
| Claude Code | https://github.com/anthropics/claude-code | 命令行编程工具 |
| Cursor | https://www.cursor.com/ | AI IDE |
| Codex | https://github.com/openai/codex | OpenAI 编程工具 |
| LM Studio | https://lmstudio.ai/ | 本地大模型 |
| cmux | https://cmux.com/ | 多会话管理 |
| Espanso | https://espanso.org/ | 文本扩展 |

## 已移除或离开的工具

- SetApp
- ZeroTier，换成 Tailscale
- Thor，换成 HotApp
- Espanso，换成 EspansoX
- Screens，被 macOS 内置屏幕共享替代
- ChatWise，不再使用
