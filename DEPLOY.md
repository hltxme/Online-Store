# 🚀 Cloudflare Store 部署指南

## 项目结构

```
cf-store/
├── _worker.js              # 后端 API + 路由（根目录）
├── public/
│   ├── template-modern/    # 模板1：现代简约风格
│   │   ├── index.html
│   │   ├── style.css
│   │   └── app.js
│   ├── template-luxury/    # 模板2：奢华品牌风格
│   │   ├── index.html
│   │   ├── style.css
│   │   └── app.js
│   └── admin/              # 后台管理面板
│       ├── index.html
│       ├── style.css
│       └── app.js
├── schema.sql              # D1 数据库结构
├── wrangler.toml           # Wrangler 配置
├── package.json
└── DEPLOY.md               # 本文件
```

---

## 方式一：浏览器界面部署（推荐新手）

### 第 1 步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 **+** → **New repository**
3. 仓库名填 `cf-store`，选 **Public** 或 **Private**
4. 点击 **Create repository**
5. 将本项目所有文件上传到仓库（可以用 GitHub 网页的 **uploading an existing file** 功能）

### 第 2 步：创建 D1 数据库

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 左侧菜单找到 **Workers & Pages**
3. 点击 **D1 SQL Database** 标签
4. 点击 **Create database**
5. 名称填 `store-db`，位置选 **Automatic**
6. 创建后，进入数据库详情页
7. 点击 **Console** 标签
8. 将 `schema.sql` 文件的内容粘贴进去，点击 **Execute**
9. 记下 **Database ID**（在右侧信息栏）

### 第 3 步：创建 KV 命名空间

1. 在 **Workers & Pages** 页面，点击 **KV** 标签
2. 点击 **Create a namespace**
3. 名称填 `store-kv`
4. 记下 **Namespace ID**

### 第 4 步：创建 R2 存储桶

1. 左侧菜单找到 **R2 Object Storage**
2. 点击 **Create bucket**
3. 名称填 `store-assets`
4. 位置选 **Automatic**
5. 点击 **Create bucket**

### 第 5 步：创建 Cloudflare Pages 项目

1. 回到 **Workers & Pages** 页面
2. 点击 **Create application**
3. 选择 **Pages** 标签
4. 点击 **Connect to Git**
5. 选择你的 GitHub 账号，授权 Cloudflare
6. 选择 `cf-store` 仓库
7. 设置：
   - **Production branch**: `main`（或 `master`）
   - **Build command**: 留空（不需要构建）
   - **Build output directory**: `.` （一个点，表示根目录）
8. 点击 **Save and Deploy**

### 第 6 步：绑定 D1 / KV / R2

1. 部署完成后，进入 Pages 项目详情
2. 点击 **Settings** → **Functions**
3. 找到 **D1 Database Bindings**：
   - 点击 **Add binding**
   - Variable name: `db`
   - D1 database: 选择 `store-db`
4. 找到 **KV Namespace Bindings**：
   - 点击 **Add binding**
   - Variable name: `kv`
   - KV namespace: 选择 `store-kv`
5. 找到 **R2 Bucket Bindings**：
   - 点击 **Add binding**
   - Variable name: `r2`
   - R2 bucket: 选择 `store-assets`
6. 点击 **Save**

### 第 7 步：重新部署

1. 回到 Pages 项目的 **Deployments** 页面
2. 点击最新部署右侧的 **...** → **Retry deployment**
3. 等待部署完成

### 第 8 步：初始化数据库

1. 打开你的网站：`https://my-store.pages.dev`
2. 你应该看到一个 **初始化页面**
3. 点击 **Initialize Database** 按钮
4. 等待初始化完成（会创建默认管理员账号）

### 第 9 步：开始使用

- **前台**：`https://my-store.pages.dev`
- **后台**：`https://my-store.pages.dev/admin`
- **默认账号**：`admin` / `123456`
- **⚠️ 请立即在后台 Settings 修改密码！**

---

## 方式二：CLI 命令行部署

### 前置条件

```bash
# 安装 Node.js (>=18)
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login
```

### 部署步骤

```bash
# 1. 进入项目目录
cd cf-store

# 2. 安装依赖
npm install

# 3. 创建 D1 数据库
wrangler d1 create store-db
# 记下输出的 database_id，填入 wrangler.toml

# 4. 创建 KV 命名空间
wrangler kv namespace create kv
# 记下输出的 id，填入 wrangler.toml

# 5. 创建 R2 存储桶
wrangler r2 bucket create store-assets

# 6. 更新 wrangler.toml 中的 ID
# 将 YOUR_D1_DATABASE_ID 替换为实际 ID
# 将 YOUR_KV_NAMESPACE_ID 替换为实际 ID

# 7. 初始化数据库表结构
wrangler d1 execute store-db --file=./schema.sql

# 8. 部署到 Cloudflare Pages
npm run deploy
# 或者：wrangler pages deploy .

# 9. 绑定变量（如果 CLI 部署后需要手动绑定）
# 去 Cloudflare Dashboard → Pages → Settings → Functions 绑定
```

---

## 使用指南

### 后台功能

| 功能 | 说明 |
|------|------|
| **Dashboard** | 查看商品数、订单数、页面数、待处理订单 |
| **Products** | 添加/编辑/删除商品，支持图片上传（自动转 WebP），**TinyMCE 富文本编辑器** |
| **Categories** | 管理商品分类 |
| **Orders** | 查看/处理/删除订单，可更改订单状态 |
| **Pages** | 管理自定义页面（关于我们、联系方式等） |
| **Payment Settings** | 💳 支付宝当面付配置（App ID、私钥、回调地址） |
| **Settings** | 站点名称、模板切换、货币设置、修改密码、**Logo/Favicon 设置**、**订单通知（Telegram + 邮件）** |

### 模板切换

在后台 **Settings** → **Template** 下拉选择：
- **Modern** - 现代简约风格（渐变色、圆角卡片、清爽布局）
- **Luxury** - 奢华品牌风格（金色点缀、衬线字体、优雅排版）

### 前台页面路由

每个模板都支持以下页面（通过 Hash 路由实现）：

| 路由 | 说明 |
|------|------|
| `/#home` | 首页（默认） |
| `/#products` | 商品列表 |
| `/#product/{id}` | **商品详情页**（新增） |
| `/#checkout` | **购物车结算页**（新增） |
| `/#payment/{order_no}` | **支付页面**（新增） |

### 支付宝当面付接入

1. 在后台 **Payment Settings** 页面配置支付宝参数
2. 在 [open.alipay.com](https://open.alipay.com) 注册开发者账号
3. 创建应用并开通 **当面付** 能力
4. 生成 RSA2 密钥对，填入 App ID 和应用私钥
5. 设置支付回调通知地址
6. 客户下单后会自动生成付款二维码，扫码即可支付
7. 支付状态通过回调自动更新

### 订单通知

在后台 **Settings** → **Order Notifications** 配置：

**Telegram 通知：**
1. 通过 [@BotFather](https://t.me/BotFather) 创建 Bot，获取 Token
2. 获取目标 Chat ID（可使用 [@userinfobot](https://t.me/userinfobot)）
3. 填入 Token 和 Chat ID，点击「测试 Telegram」验证

**邮件通知（微软 Graph API）：**
1. 在 Azure AD 注册应用，获取 access token
2. 填入 Graph API Token、发件人邮箱、接收通知邮箱
3. 点击「测试邮件」验证

### Logo 与网站图标

在后台 **Settings** → **Logo & Favicon** 上传：
- **网站 Logo**：显示在前台页面左上角
- **网站图标 (Favicon)**：浏览器标签页图标
- 支持 JPG/PNG/SVG/ICO 格式

### 多语言支持

前台页面支持 10 种语言切换：
- 🇬🇧 English / 🇨🇳 中文 / 🇯🇵 日本語 / 🇰🇷 한국어
- 🇫🇷 Français / 🇩🇪 Deutsch / 🇪🇸 Español / 🇧🇷 Português
- 🇸🇦 العربية / 🇷🇺 Русский

### 日夜模式

每个模板都支持 Light/Dark 模式切换，点击右上角的 ☀️/🌙 图标。

### 图片上传

1. 在后台添加/编辑商品时，点击图片上传区域
2. 选择图片文件（支持拖拽）
3. 图片自动在浏览器端转换为 WebP 格式
4. 上传到 R2 存储
5. 缩略图信息存储在 KV 中

### TinyMCE 富文本编辑器

商品管理的描述字段使用 TinyMCE 编辑器，支持：
- 文本格式化（加粗、斜体、下划线、删除线）
- 标题/段落样式
- 有序/无序列表
- 链接、图片插入
- 表格、代码块
- 全屏编辑、预览

---

## API 端点

### 核心 API

| Method | Path | 说明 |
|--------|------|------|
| POST | `/api/init` | 初始化数据库 |
| POST | `/api/auth/login` | 管理员登录 |
| POST | `/api/auth/change-password` | 修改密码 |
| GET | `/api/products` | 获取商品列表 |
| GET | `/api/products/all` | 获取所有商品（需认证） |
| GET | `/api/products/:id` | 获取单个商品详情 |
| POST | `/api/products` | 创建商品（需认证） |
| PUT | `/api/products/:id` | 更新商品（需认证） |
| DELETE | `/api/products/:id` | 删除商品（需认证） |
| GET | `/api/categories` | 获取分类列表 |
| POST | `/api/categories` | 创建分类（需认证） |
| DELETE | `/api/categories/:id` | 删除分类（需认证） |
| GET | `/api/orders` | 获取订单列表（需认证） |
| POST | `/api/orders` | 创建订单（自动触发通知） |
| PUT | `/api/orders/:id` | 更新订单状态（需认证） |
| DELETE | `/api/orders/:id` | 删除订单（需认证） |
| GET | `/api/pages` | 获取已发布页面 |
| GET | `/api/pages/all` | 获取所有页面（需认证） |
| POST | `/api/pages` | 创建页面（需认证） |
| PUT | `/api/pages/:id` | 更新页面（需认证） |
| DELETE | `/api/pages/:id` | 删除页面（需认证） |
| GET | `/api/settings` | 获取设置 |
| PUT | `/api/settings` | 更新设置（需认证） |
| POST | `/api/upload` | 上传图片（需认证） |
| GET | `/api/files/:key` | 获取 R2 文件 |
| GET | `/api/stats` | 获取统计数据（需认证） |

### 支付 API（新增）

| Method | Path | 说明 |
|--------|------|------|
| POST | `/api/payment/alipay/create` | 创建支付宝当面付订单 |
| GET | `/api/payment/alipay/query` | 查询支付宝支付状态 |

### 通知 API（新增）

| Method | Path | 说明 |
|--------|------|------|
| POST | `/api/notifications/test` | 测试通知发送（Telegram/Email） |

---

## 自定义域名

1. 在 Cloudflare Dashboard → Pages → 项目详情
2. 点击 **Custom domains** 标签
3. 点击 **Set up a custom domain**
4. 输入你的域名（需已托管在 Cloudflare）
5. 按提示完成 DNS 配置

---

## 安全建议

1. ⚠️ **立即修改默认密码**：登录后台后第一时间在 Settings 修改
2. 定期备份 D1 数据库
3. 考虑启用 Cloudflare 的 WAF 规则
4. 生产环境建议修改 `_worker.js` 中的 `JWT_SECRET`
5. 支付宝私钥等敏感信息存储在 D1 中，确保数据库安全
6. 微软 Graph API Token 有有效期，需要定期更新
