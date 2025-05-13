# Melodia Studio | 音樂品牌風格電商平台

一個以 React 技術為核心、結合 Next.js App Router、Tailwind CSS 與 TypeScript 打造的響應式電商前端網站。主打清晰優雅的音樂品牌風格設計，目前仍在開發中，後續將逐步串接 API 完成商品與購物功能。

## Demo Link

[ 前往線上體驗（Vercel）](https://melodia-studio-react-next-js-tailwind-typescript.vercel.app/)

## 專案技術

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Vercel 部署**

## 專案目的

主要展示以下能力：

- 掌握 Next.js App Router 架構與元件分離設計
- 掌握 SSR/CSR 的拆分與應用
- 使用 Tailwind CSS 進行響應式與可維護的版型切版
- 使用 TypeScript 定義資料型別，增強開發穩定性
- 清晰的元件結構與頁面資料流規劃

## 目前進度

#環境與模板

- [x] Next.js + Tailwind + TypeScript 開發環境建置 - 5/10
- [x] Router - App Router 設定 - 5/12
- [x] Router - 商品選單、List 分類模板 - 5/12
- [x] Router - header / footer 切版(PC) - 5/12
- [x] tailwind.config.ts 共用樣式設定 - 5/11
- [x] 建立 types/index.ts 集中管理 types - 5/12

#元件拆分

- [x] 輪播 Swiper - 5/12
- [ ] product Card
- [ ] pagination
- [ ] button/input/select/textarea/checkbox/radio

#RWD

- [ ] 首頁
- [ ] 產品列表
- [ ] 產品詳細頁
- [ ] 關於我們
- [ ] 購物車
- [ ] 結帳流程

#串接 RESTful API 資料、資料渲染、CSR/SSR 拆分、Redux 管理跨元件資料

- [ ] 首頁
- [ ] 產品列表
- [ ] 產品詳細頁
- [ ] 關於我們
- [ ] 購物車
- [ ] 結帳流程

#後台

- [ ] 後台系統（第二階段）

## 專案架構

```
src/
├── app/ # App Router 頁面
│ ├── (front)
│ │      ├── page.tsx # 首頁
│ │      ├── about/ # 關於我們
│ │      └── product/ # 產品列表
│ │            ├── layout.tsx # 產品共用layout
│ │            ├── page.tsx # 產品列表
│ │            └── [id] / # 產品詳細頁
│ │                  └── page.tsx # 產品詳細頁
│ └── layout.tsx # 全站共用 Layout
├── components/ # 元件
├── data/ # 資料
├── styles/ # Tailwind CSS 設定與自定義樣式
└── types/ # TypeScript 型別定義

```

## 安裝與啟動

```bash
# 安裝依賴
npm install

# 本地啟動
npm run dev
```
