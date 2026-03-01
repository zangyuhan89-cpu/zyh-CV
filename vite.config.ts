import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 部署到 GitHub Pages 时，页面在 https://用户名.github.io/仓库名/ ，资源路径必须是 /仓库名/
// CI 会设置 GITHUB_REPOSITORY；本地构建可设 BUILD_REPO=仓库名；否则默认 zyh-CV
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || process.env.BUILD_REPO || 'zyh-CV'
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  plugins: [react(), tailwindcss()],
})