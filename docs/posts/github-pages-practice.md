---
title: 使用 VitePress 与 GitHub Actions 搭建个人 Blog
description: 从公开仓库、Markdown 内容到 GitHub Pages 自动发布的完整实践记录
date: 2026-07-03
---

# 使用 VitePress 与 GitHub Actions 搭建个人 Blog

本次实践的目标是建立一个公开的个人 Blog：文章源文件保存在 GitHub 仓库中，每次提交后由 GitHub Actions 自动构建，并发布到 GitHub Pages。整个过程不需要单独购买服务器，也不需要手工上传构建后的网页文件。

## 为什么选择 VitePress

VitePress 是一个基于 Vue 和 Vite 的静态站点生成器，可以把 Markdown 文件转换成结构清晰的网页。它提供默认主题、导航、侧边栏和代码高亮，适合用较少配置完成技术 Blog。

本项目固定使用 VitePress 1.6.4，并通过以下命令完成本地开发和构建：

```bash
npm install
npm run docs:dev
npm run docs:build
```

文章保存在 `docs/posts/` 目录中。VitePress 根据文件路径生成对应网页，因此 `docs/posts/github-pages-practice.md` 会生成文章页面 `posts/github-pages-practice.html`。

## 创建公开仓库

我在 GitHub 账号 `FrankkAtr` 下创建了公开仓库 `blog`，并将 VitePress 配置、Markdown 文章和 GitHub Actions 工作流提交到 `main` 分支。公开仓库使老师可以直接查看 Blog 源文件和自动发布配置，而不是只能看到截图。

## 配置项目站点路径

这个 Blog 是 GitHub Pages 的项目站点，访问地址位于用户名域名下的 `/blog/` 子路径。为确保脚本、样式和站内链接指向正确位置，需要在 VitePress 配置中设置：

```ts
export default {
  base: '/blog/',
}
```

如果仍使用默认的根路径 `/`，本地预览可能正常，但部署后浏览器会到域名根目录寻找资源，导致页面没有样式或链接无法访问。这是项目站点部署中最关键的配置点。

## 使用 GitHub Actions 自动发布

仓库中的 `.github/workflows/deploy.yml` 监听 `main` 分支的推送。工作流依次检出代码、安装 Node.js 22、执行 `npm install`、运行 VitePress 构建、上传静态文件，最后部署到 GitHub Pages。

部署任务只使用 GitHub 提供的临时令牌，并授予最小必要权限：

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

只要修改 Markdown 文件并推送，GitHub Actions 就会重新生成并发布网站，所以仓库内容和线上 Blog 能够保持同步。

## 验证发布结果

提交代码前，我先运行结构测试和生产构建，确认配置、文章和工作流文件完整，并检查生成目录中存在首页与文章 HTML。随后在桌面和窄屏视口中打开本地预览，检查导航、文章直链和页面排版。推送后，再分别访问公开仓库、Blog 首页、第一篇文章和 Actions 成功运行记录，确认四项链接都可以独立打开。

## 实践收获

这次实践把 Git 仓库、Markdown 写作、持续集成和静态网站发布连接成了一个完整流程。相比手工上传网页，自动化工作流更容易复现，也能从 Actions 日志中定位构建或部署问题。
