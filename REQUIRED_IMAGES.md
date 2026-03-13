# 需要准备的图片列表 (Required Images)

为了让网站看起来专业，你需要准备以下图片并替换到 `public/images/` 目录中。
请确保文件名与下面列出的一致，或者修改 `messages/en.json` 中的路径。

## 0. 网站 Logo

路径: `public/images/`

- **网站 Logo**
  - 文件名: `logo.png`
  - 描述: 公司的标志，建议背景透明 (PNG 格式)。
  - 建议尺寸: 高度 80px - 120px 左右，宽度自适应。

## 1. 首页 (Home)

路径: `public/images/home/`

- **Hero Banner (顶部大图)**
  - 文件名: `hero-tea.jpg`
  - 描述: 高质量的茶园风景、采茶场景或精美的茶席图片。
  - 建议尺寸: 1920x1080 像素或更高。

- **优势展示 (Highlights)**
  - 文件名: `sourcing.jpg` (原厂直采/茶园)
  - 文件名: `logistics.jpg` (物流/包装)
  - 文件名: `quality.jpg` (质检/品茶)
  - 建议尺寸: 800x600 像素。

## 2. 产品图片 (Products)

路径: `public/images/products/`

你需要为每种产品类别准备一张代表性的图片。建议尺寸统一，例如 800x800 或 1000x1000 正方形图片。

- **绿茶 (Green Tea)**: `green-tea-1.png`
- **红茶 (Black Tea)**: `black-tea-1.png`
- **乌龙茶 (Oolong Tea)**: `oolong-tea-1.png`
- **白茶 (White Tea)**: `white-tea-1.png`
- **普洱茶 (Pu-erh Tea)**: `puerh-tea-1.png`
- **工艺花茶 (Blooming Tea)**: `blooming-tea-1.png`
- **陶瓷茶具 (Ceramic Tea Sets)**: `ceramic-set-1.png`
- **紫砂壶 (Purple Clay Tea Sets)**: `purple-clay-set-1.png`
- **玻璃茶具 (Glass Tea Sets)**: `glass-set-1.png`
- **茶盘 (Tea Trays)**: `tea-tray-1.png`
- **茶具配件 (Tea Tools)**: `tea-tools-1.png`
- **礼盒 (Gift Sets)**: `gift-set-1.png`

## 3. 关于我们 (About)

路径: `public/images/about/`

- `tea-garden.jpg`: 茶园或生产基地全景
- `tea-tasting.jpg`: 专业品茶/质检场景
- `tea-packaging.jpg`: 茶叶包装线或精致包装展示
- `tea-storage.jpg`: 专业的茶叶仓储环境
- `export-1.jpg`, `export-2.jpg`: 国际发货、集装箱装载或出口相关图片

## 如何替换

1. 将你的图片重命名为上述文件名。
2. 覆盖 `public/images/` 对应目录下的现有文件。
   - 注意：`export-1.jpg` 和 `export-2.jpg` 建议放到 `public/images/about/` 下。
3. 重新运行 `npm run dev` 查看效果。
4. 运行 `npm run build` 并部署。
