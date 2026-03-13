# Chao Xiong Tea Website (English Only)

一个用于**中国茶叶外贸**的英文官网骨架（Next.js + Tailwind + next-intl）。

## 项目简介

本项目是从之前的钢铁网站架构复用而来，专为 **Chao Xiong Trading Co., Ltd.** 打造。
主要功能包括：
- 首页（Home）：展示公司优势、茶叶文化
- 产品页（Products）：展示各类茶叶和茶具
- 关于我们（About）：公司介绍
- 联系我们（Contact）：询盘表单（目前使用 mailto 方式）

## 本地运行

在项目根目录执行：

```bash
npm run dev
```

**如果遇到 PowerShell 报错 (UnauthorizedAccess):**
这是因为 Windows 默认禁止运行脚本。你可以尝试使用以下命令代替：

```powershell
# 方法 1 (推荐): 直接调用 npm.cmd
& "C:\Program Files\nodejs\npm.cmd" run dev
```

或者更改当前用户的执行策略（一次性设置）：
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

启动后访问：
- `http://localhost:3000/en`

## 部署流程（GitHub Pages + Namecheap）

本项目的部署方式与之前的钢铁网站完全一致。

### 1. 准备工作
确保你已经安装了 Node.js 和 Git。

### 2. 构建静态文件
执行以下命令生成静态网站文件（输出到 `out/` 目录）：

```bash
npm run build
```

### 3. 推送到 GitHub
将代码推送到你的新 GitHub 仓库（例如 `teawebsite`）：

```bash
git add .
git commit -m "update tea website content"
git push
```

### 4. GitHub Pages 设置
1. 进入 GitHub 仓库 -> Settings -> Pages。
2. Source 选择 "GitHub Actions"。
3. 等待 Action 运行完成。

### 5. 绑定域名 (Namecheap)
1. 在 Namecheap 购买域名。
2. 在 GitHub Pages 设置 Custom Domain。
3. 在 Namecheap 设置 DNS（CNAME 指向 `<username>.github.io`）。
4. 勾选 "Enforce HTTPS"。

## 图片替换说明

目前网站使用的是旧的钢铁图片或占位符。你需要准备茶叶相关的图片并替换它们。
详细的图片需求列表请查看：[REQUIRED_IMAGES.md](./REQUIRED_IMAGES.md)

## 内容修改

- **文案**：所有文字内容都在 `messages/en.json` 中。
- **联系邮箱**：修改 `env.example.txt` 和 `.github/workflows/deploy-pages.yml` 中的 `NEXT_PUBLIC_INQUIRY_TO`。
