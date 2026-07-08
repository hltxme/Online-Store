-- D1 Database Schema for Cloudflare Store

-- 管理员用户表
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 商品表
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT DEFAULT '',
  price REAL NOT NULL DEFAULT 0,
  compare_price REAL DEFAULT 0,
  images TEXT DEFAULT '[]',
  category TEXT DEFAULT '',
  stock INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active',
  featured INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 分类表
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT DEFAULT '',
  image TEXT DEFAULT '',
  sort_order INTEGER DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 订单表
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_no TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  customer_email TEXT DEFAULT '',
  customer_phone TEXT DEFAULT '',
  shipping_address TEXT DEFAULT '',
  items TEXT DEFAULT '[]',
  total REAL NOT NULL DEFAULT 0,
  status TEXT DEFAULT 'pending',
  notes TEXT DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 内容页面表
CREATE TABLE IF NOT EXISTS pages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  body TEXT DEFAULT '',
  type TEXT DEFAULT 'page',
  status TEXT DEFAULT 'published',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 设置表
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT DEFAULT ''
);

-- 插入默认管理员 (密码: 123456, 使用 SHA-256 hash)
-- 实际运行时由 worker 代码处理
INSERT OR IGNORE INTO settings (key, value) VALUES ('site_name', 'My Store');
INSERT OR IGNORE INTO settings (key, value) VALUES ('site_description', 'Welcome to our store');
INSERT OR IGNORE INTO settings (key, value) VALUES ('template', 'modern');
INSERT OR IGNORE INTO settings (key, value) VALUES ('currency', 'USD');
INSERT OR IGNORE INTO settings (key, value) VALUES ('contact_email', '');
INSERT OR IGNORE INTO settings (key, value) VALUES ('social_links', '{}');
