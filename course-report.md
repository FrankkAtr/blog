# 北京信息科技大学课程报告

## 实践1：使用开源软件建立个人 Blog

| 项目 | 内容 |
|---|---|
| 课程名称 | 开源软件开发 |
| 任课教师 | 李宁 |
| 姓名 | 付建行 |
| 学号 | 2025012139 |
| 学院专业 | 计算机学院－信息安全 |

## 1. 基本信息

| 项目 | 内容 |
|---|---|
| GitHub 用户名 | FrankkAtr |
| 使用的工具 | GitHub Pages / VitePress / GitHub Actions / Markdown |

## 2. 成果链接（审查字段，请不要修改字段名称）

GitHub 仓库地址： https://github.com/FrankkAtr/blog

Blog 网站地址： https://frankkatr.github.io/blog/

第一篇 Blog 文章地址： https://frankkatr.github.io/blog/posts/github-pages-practice.html

GitHub Actions 成功运行记录地址： https://github.com/FrankkAtr/blog/actions/runs/28644215807

## 3. 完成过程简述

我使用 GitHub 账号 `FrankkAtr` 创建了名为 `blog` 的公开仓库。  
我在本地安装 VitePress 1.6.4，并使用 Markdown 编写首页、关于页和第一篇 Blog 文章。  
我把站点基础路径设置为 `/blog/`，使样式、脚本和站内链接能够在项目站点中正确加载。  
我在 `.github/workflows/deploy.yml` 中配置了 GitHub Actions 自动构建和部署流程。  
我将 GitHub Pages 的发布来源设置为 GitHub Actions，并把项目文件推送到 `main` 分支。  
工作流运行成功后，我分别打开仓库、Blog 首页、文章直链和 Actions 运行记录，确认所有成果均可公开访问。

## 4. 遇到的问题及解决方法

### 问题一：项目站点的资源路径

GitHub Pages 项目站点位于 `https://frankkatr.github.io/blog/`，而不是域名根目录。如果 VitePress 保持默认基础路径 `/`，部署后的页面会从错误位置加载脚本和样式，可能出现无样式页面或链接 404。解决方法是在 `docs/.vitepress/config.mts` 中设置 `base: '/blog/'`，并在本地预览与线上环境中直接访问文章深层链接进行验证。

### 问题二：仓库尚未启用 GitHub Pages

首次工作流在 `Setup Pages` 阶段提示找不到 Pages 站点，说明新仓库尚未启用 GitHub Pages。解决方法是在仓库的 `Settings → Pages` 中把发布来源设置为 `GitHub Actions`，然后重新运行失败的工作流。重新运行后，构建与部署任务均成功，网站首页和第一篇文章可以正常访问。
