# 把简历网页部署到 GitHub（获得可分享链接）

按下面步骤做一遍即可，不需要会代码。

---

## 第一步：在 GitHub 上建仓库

1. 打开：https://github.com/new  
2. **Repository name** 填：`zyh-CV`（建议用英文和连字符；若用空格如 "zyh CV"，GitHub 会生成 zyh-CV 之类的路径）  
3. 选 **Public**  
4. **不要**勾选 “Add a README file”  
5. 点 **Create repository**

---

## 第二步：用 GitHub Desktop 上传项目（推荐，最简单）

1. **安装 GitHub Desktop**  
   打开 https://desktop.github.com/ 下载并安装，用你的 GitHub 账号登录。

2. **把项目加进去**  
   - 打开 GitHub Desktop  
   - 菜单选 **File → Add local repository**  
   - 点 **Choose...**，选你这个简历项目所在的文件夹（例如：`臧雨晗---个人简历`）  
   - 如果提示 “This directory does not appear to be a Git repository”，点 **create a repository**，然后：
     - **Name** 保持默认或填 `zangyuhan-newresume`
     - **Local Path** 保持当前文件夹
     - 点 **Create Repository**

3. **推送到 GitHub**  
   - 左侧会看到很多改动的文件  
   - 左下角 **Summary** 随便写一句，比如：`首次上传简历网站`  
   - 点 **Commit to main**  
   - 再点顶部的 **Publish repository**  
   - **Name** 改成：`zyh-CV`（和第一步仓库名一致）  
   - 勾选 **Keep this code private** 可留空（不勾选就是公开）  
   - 点 **Publish Repository**

上传完成后，代码就已经在 GitHub 上了。

---

## 第三步：开启 GitHub Pages（生成链接）

1. 在浏览器打开你的仓库页面：  
   `https://github.com/你的用户名/zyh-CV`

2. 点顶部的 **Settings**（设置）

3. 左侧找到 **Pages**

4. 在 **Build and deployment** 里：
   - **Source** 选 **GitHub Actions**（不要选 “Deploy from a branch”）

5. 不用再点别的，保存即可。

---

## 第四步：等自动部署完成

1. 点仓库顶部的 **Actions** 标签  
2. 会看到有一个 **Deploy to GitHub Pages** 在工作，等它变成绿色的勾（大约 1～2 分钟）  
3. 部署成功后，**Settings → Pages** 里会显示一行绿色提示和你的网站地址

---

## 你的简历链接

地址格式是：

**https://你的用户名.github.io/zyh-CV/**

例如用户名叫 `zangyuhan`，链接就是：

**https://zangyuhan.github.io/zyh-CV/**

把这个链接发给 HR 或面试官即可。

---

## 以后想更新简历内容

1. 在电脑上改好项目里的文字或图片  
2. 打开 GitHub Desktop，它会自动显示“有改动”  
3. 写一句 **Summary**，点 **Commit to main**，再点 **Push origin**  
4. 等 1～2 分钟，网站会自动更新，链接不变

---

## 如果仓库名不用 zangyuhan-newresume

仓库名如果改了，需要同步改项目里的配置（或告诉我新仓库名）。当前配置的仓库名是 **zyh-CV**。
