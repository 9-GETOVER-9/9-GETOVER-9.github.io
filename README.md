<div align="center">

# 312 心理学考研备考平台

**从七科知识框架进入原创样题练习，在反馈中找到下一步。**

`七科导航` · `原创样题` · `练习反馈` · `React`

[![GitHub Stars](https://img.shields.io/github/stars/9-GETOVER-9/9-GETOVER-9.github.io?style=for-the-badge&color=839778)](https://github.com/9-GETOVER-9/9-GETOVER-9.github.io/stargazers)

[功能矩阵](#section-3) · [本地运行](#section-4)

</div>

---

<a id="section-1"></a>

## 一句话介绍

这是部署在 GitHub Pages 的 312 心理学考研学习站点，当前包含科目导航、原创样题库和本地练习界面。

<a id="section-2"></a>

## 在线体验

[打开备考平台](https://9-getover-9.github.io/)

<a id="section-3"></a>

## 功能矩阵

| 功能 | 说明 |
|---|---|
| 七科框架 | 从科目结构进入备考内容 |
| 原创样题 | 浏览和练习站点内置题目 |
| 练习反馈 | 在页面中查看答题结果 |
| 来源索引 | 展示参考来源，不直接导入未授权内容 |

<a id="section-4"></a>

## 本地运行

```bash
git clone https://github.com/9-GETOVER-9/9-GETOVER-9.github.io.git
cd 9-GETOVER-9.github.io
npm install
npm run dev
```

<a id="section-5"></a>

## 核心工作流

```text
选科目 → 查看知识框架 → 练习原创样题 → 查看反馈
```

<a id="section-6"></a>

## 项目结构

| 路径 | 用途 |
|---|---|
| `dashboard-src/` | React 应用源码 |
| `index.html` | 站点入口 |
| `scripts/` | 构建与本地预览脚本 |
| `.github/` | GitHub 自动化配置 |

<a id="section-7"></a>

## 验证

`npm test` 运行页面测试；`npm run build` 构建站点。
