# 臧雨晗 - 个人简历网页

聚焦降本增效的 B 端 / AI 产品经理 - 交互式个人简历展示页面。

## 功能特性

- **Hero 首屏**：鼠标跟随微光、呼吸灯头像、能力标签云动态轮播
- **关于我**：教育背景时间轴、技能仪表盘（动画进度条）、兴趣矩阵（Hover 翻转 + 找到同好提示）
- **项目集**：Tab 筛选、16:9 封面、简介数字高亮、Modal 展示 STAR 详情
- **获奖记录**：Lightbox 灯箱查看大图
- **联系我**：邮箱 mailto、电话 tel、一键复制到剪贴板
- **响应式**：PC 12 栅格、移动端汉堡菜单

## 技术栈

React 19 + Vite + TypeScript + Tailwind CSS + Motion

## 本地运行

**前置要求：** Node.js 18+

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev
```

浏览器访问 http://localhost:3000

## 构建与预览

```bash
# 构建生产版本
npm run build

# 本地预览构建结果
npm run preview
```

## GitHub Pages 部署（一键上线）

项目已配置 GitHub Actions，按以下步骤即可让 HR/面试官通过 URL 访问：

### 1. 创建 GitHub 仓库

- 打开 [github.com/new](https://github.com/new)
- 仓库名随意（如 `resume`、`portfolio`、`臧雨晗简历` 等）
- 选 **Public**，可不勾选「Add a README」
- 点击 **Create repository**

### 2. 推送代码到 GitHub

在项目目录下执行（将 `你的用户名` 和 `仓库名` 替换为实际值）：

```bash
cd /Users/zyh/Downloads/臧雨晗---个人简历

# 初始化 git（若尚未初始化）
git init

# 添加所有文件
git add .
git commit -m "首次提交：个人简历网站"

# 关联远程仓库并推送（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

### 3. 开启 GitHub Pages

- 进入仓库 → **Settings** → 左侧 **Pages**
- 在 **Build and deployment** 下，Source 选择 **GitHub Actions**
- 保存后等待约 1–2 分钟，首次部署会自动完成

### 4. 访问你的网站

- **项目站点**：`https://你的用户名.github.io/仓库名/`
- 例如：仓库名为 `resume`，则地址为 `https://xxx.github.io/resume/`

之后每次 `git push` 到 `main` 分支，网站会自动更新。

## 视觉规范

- 主色：#4CAF50（清新绿）
- 辅助色：#2196F3（科技蓝）
- 背景：#F9FAFB
- 文字：#1F2937
