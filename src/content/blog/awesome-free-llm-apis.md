---
title: awesome-free-llm-apis：免费 LLM API 列表整理
description: 一份适合开发者收藏的免费 LLM API 速查表，覆盖 Gemini、Mistral、OpenRouter、Groq、Cloudflare Workers AI 等常见提供商。
pubDate: 2026-04-21
category: AI与科技
tags:
  - LLM API
  - AI
  - 开发资源
  - 免费额度
  - OpenAI 兼容
draft: false
heroImage: ../../assets/posts/covers/llm-apis-cover.png
---

## 适合什么时候看

当你需要快速验证一个 AI 产品原型，又不想一开始就付 API 费用时，这类清单非常实用。

![免费 LLM API 清单配图](../../assets/posts/covers/llm-apis-cover.png)

## Provider APIs

| 提供商 | 免费额度 | Base URL |
|--------|----------|----------|
| Cohere | 1,000 次/月 | `api.cohere.com/v2` |
| Google Gemini | 10 RPM, 250 RPD | `generativelanguage.googleapis.com/v1beta` |
| Mistral AI | 约 10 亿 tokens/月 | `api.mistral.ai/v1` |
| Z AI (智谱) | 永久免费 | `open.bigmodel.cn/api/paas/v4` |

## Inference Providers

| 提供商 | 免费额度 | 特点 |
|--------|----------|------|
| Cerebras | 100 万 tokens/天 | 推理速度极快 |
| Cloudflare Workers AI | 10,000 Neurons/天 | 模型多 |
| GitHub Models | 8K 输入 / 4K 输出 | 集成 GitHub |
| Groq | 14,400 RPD | LPU 超快推理 |
| Hugging Face | 少量免费额度 | 模型生态最大 |
| ModelScope | 2,000 RPD | 国内可用 |
| NVIDIA NIM | 无每日限制 | 官方推理服务 |
| OpenRouter | 20 RPM, 200 RPD | 免费模型丰富 |
| SiliconFlow | 注册积分 | 国内用户常用 |

## 几个注意点

1. 很多服务都兼容 OpenAI SDK，但细节并不完全一样。
2. 免费额度会变，真正接入前最好再次确认官方文档。
3. 区域可用性会影响体验，比如 Gemini 免费版在部分地区有限制。

## 术语速查

- `RPM`：每分钟请求数
- `RPD`：每日请求数
- `TPM`：每分钟 Token 数
- `TPD`：每日 Token 数
- `RPS`：每秒请求数
