---
title: 使用 ESLint 自动在 Markdown 中英文之间添加空格
description: 介绍如何使用 Lint Markdown 的 ESLint 插件来自动在 Markdown 中英文之间添加空格。
date: '2024-2-6'
categories: [技术, 笔记]
tags: [ESLint, Markdown, Prettier]
published: true
---

由于经过讨论 3.x 以上版本的 [Prettier](https://prettier.io/) 已经不再对 Markdown
中的中英文之间添加空格 [#11597](https://github.com/prettier/prettier/pull/11597)，故寻求新的解决方案。

`Lint Markdown` 就是这样一个基于 Node.js
的工具，它的部分默认规则遵守 [中文技术文档的写作规范](https://github.com/ruanyf/document-style-guide)
。本文将介绍基于 `Lint Markdown` 的 [ESLint](https://eslint.org/)
插件 [`@lint-md/eslint-plugin`](https://github.com/lint-md/eslint-plugin)，它可以检查并修复 Markdown 文档的排版问题。

## 安装与配置

## 使用

## 存在的问题
