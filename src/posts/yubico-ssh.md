---
title: 使用 YubiKey 作为 SSH 密钥
description: 暂时没有描述。
date: "2024-2-6"
categories: [技术，笔记]
tags: [YubiKey, Yubico, SSH, 密钥]
published: true
---

最近买了一个 YubiKey 5C NFC，除了用来作为谷歌等网站的二次验证外，还可以用来作为
SSH 密钥。这样原则上可以更加安全的登录服务器。下面首先介绍下 YubiKey 的原理，再
介绍如何使用 YubiKey 作为 SSH 密钥。

## 什么是 YubiKey

YubiKey 是由 Yubico生产的身份认证设备，支持一次性密码（OTP）、公钥加密和身份认
证，以及由 FIDO 联盟（FIDO U2F）开发的通用第二因素（U2F）协议。
