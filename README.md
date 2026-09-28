# 312 心理学考研智能备考平台

围绕七科知识框架、原创样题与练习反馈，提供一个可在线体验的心理学考研备考页面。

**React · TypeScript · Vite · GitHub Pages**

## 一句话介绍

这是部署在 GitHub Pages 的 312 心理学考研学习站点，当前包含科目导航、原创样题库和本地练习界面。

## 在线体验

[打开备考平台](https://9-getover-9.github.io/)

## 功能矩阵

| 功能 | 说明 |
|---|---|
| 七科框架 | 从科目结构进入备考内容 |
| 原创样题 | 浏览和练习站点内置题目 |
| 练习反馈 | 在页面中查看答题结果 |
| 来源索引 | 展示参考来源，不直接导入未授权内容 |

## 本地运行

```bash
git clone https://github.com/9-GETOVER-9/9-GETOVER-9.github.io.git
cd 9-GETOVER-9.github.io
npm install
npm run dev
```

## 核心工作流

```text
选科目 → 查看知识框架 → 练习原创样题 → 查看反馈
```

## 项目结构

| 路径 | 用途 |
|---|---|
| `dashboard-src/` | React 应用源码 |
| `index.html` | 站点入口 |
| `scripts/` | 构建与本地预览脚本 |
| `.github/` | GitHub 自动化配置 |

## 验证

`npm test` 运行页面测试；`npm run build` 构建站点。
