# 毛孩子网站

营销页、技术支持和隐私政策的静态站点。对应已上架 App「毛孩子 / Pet Care Notes」**1.1**。

站点按语言拆页，不再把中英混在同一份 HTML 里切换：简体中文是默认页，英文在 `en/`。App Store Connect 已填写的三个地址仍然有效。

2026-09-18 按已上架 1.1 全面改过一版：补齐十类记录与医疗类型、适合/不适合、对照表、支持目录与换机 HowTo、隐私政策本站条款，并加强 SEO / GEO。

## 已上架信息

- 中文名：毛孩子（商店名：毛孩子宠物健康记录）
- 英文商店名：Pet Care Notes（桌面名 Care Notes）
- 价格：免费 · 仅 iPhone · iOS 17+
- App Store：https://apps.apple.com/app/id6788202619
- Apple ID：`6788202619`（来自工程 `AppConstants.appleAppID`，商店页已确认可打开）
- 支持邮箱：weizhichao1027@gmail.com
- 开发者：卫智超 / Weizhichao Wei，上海
- App Store 卖家展示名仍是苹果后台的「智超 卫」，网站不要写「魏智超」

若以后换了商店链接，改 `assets/site.js` 里的 `MAOJI.appStoreUrl` / `appleAppId`，并同步各页 CTA、JSON-LD、`llms.txt`、`facts.md`、`sitemap.xml`。

公开托管域名（site origin）写在 `assets/site.js` 的 `MAOJI.siteOrigin`。当前是 GitHub Pages：

`https://weizhichao1027-collab.github.io/maoji-app-store-pages`

换域名时改这个常量，并替换各页 canonical / hreflang / og:url / sitemap / llms.txt 里的绝对地址。

## 本地预览

```bash
python3 -m http.server 4173
```

端口被占用时换一个（例如 4180）。

- 中文营销：http://127.0.0.1:4173/
- 英文营销：http://127.0.0.1:4173/en/
- 中文支持：http://127.0.0.1:4173/support.html
- 英文支持：http://127.0.0.1:4173/en/support.html
- 中文隐私：http://127.0.0.1:4173/privacy-policy.html
- 英文隐私：http://127.0.0.1:4173/en/privacy-policy.html
- SEO / GEO：http://127.0.0.1:4173/robots.txt · `/sitemap.xml` · `/llms.txt` · `/facts.md` · `/humans.txt`

## 发布

源文件在本目录。公开托管在 GitHub Pages 仓库 [maoji-app-store-pages](https://github.com/weizhichao1027-collab/maoji-app-store-pages)，以保持 App Store Connect 已填写的隐私和支持地址不变。

- 营销（zh-Hans，默认）：https://weizhichao1027-collab.github.io/maoji-app-store-pages/
- 营销（en）：https://weizhichao1027-collab.github.io/maoji-app-store-pages/en/
- 支持：https://weizhichao1027-collab.github.io/maoji-app-store-pages/support.html
- 支持（en）：https://weizhichao1027-collab.github.io/maoji-app-store-pages/en/support.html
- 隐私：https://weizhichao1027-collab.github.io/maoji-app-store-pages/privacy-policy.html
- 隐私（en）：https://weizhichao1027-collab.github.io/maoji-app-store-pages/en/privacy-policy.html
- `privacy.html` 仍重定向到 `privacy-policy.html`，避免旧链接失效

更新站点时，把本目录同步到 Pages 仓库的 `main` 并推送。本机克隆在 `AppStore/pages/`：

```bash
rsync -a --delete --exclude '.git' --exclude '.DS_Store' ./ ../AppStore/pages/
cd ../AppStore/pages
# 在 pages 仓库提交、push origin main；不要推本 App 工作区
```

不要把 App 工程里未完成的截图或签名文件拷进去。2026-09-16 已上线提交：`94c6b5d69d1fdc5dddf2d4bb756397e494ac52b9`。**2026-09-18 这版源文件改完后需要再 rsync 并推一次**，Connect 已填的三个 URL 不用改路径。

## SEO / GEO 文件

| 文件 | 用途 |
|---|---|
| 各页 `<title>` / description / canonical / hreflang | 中英分页面，x-default 指向中文 |
| Open Graph + Twitter Card | 分享图 `assets/og-image.png`（1200×630），含 image alt |
| JSON-LD | 首页 `Organization` + `MobileApplication` + `WebSite` + `FAQPage`；支持页 `FAQPage` + `HowTo`；各页 `BreadcrumbList`；隐私页 `WebPage` + `dateModified` |
| `robots.txt` | 允许抓取，并显式允许主要 AI 爬虫 |
| `sitemap.xml` | 6 个公开中英页面 + `llms.txt` + `facts.md`，lastmod 2026-09-18 |
| `llms.txt` | 给生成式引擎引用的产品事实与引用规则 |
| `facts.md` | 更短的键值事实 |
| `humans.txt` | 开发者与站点元数据 |
| `manifest.webmanifest` | 站点名称、主题色、图标 |
| `assets/site.js` | `siteOrigin` / App Store ID，无自动跳转 |

营销页还写了可引用的定义段、适合/不适合、与备忘录/云同步应用对照表。网站只做 zh-Hans 与 en 两套页面。App 另外 11 种界面语言没有单独营销站，避免薄内容。
