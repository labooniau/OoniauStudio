const products = [
  {
    id: "twus-stockpro",
    status: { zh: "準備上架", en: "Preparing for release" },
    name: { zh: "台美股投資筆記 Pro", en: "TW/US Stock NotePro" },
    menuName: "TWUS StockPro",
    category: { zh: "Apps / 投資記帳與 AI 顧問", en: "Apps / Investment Journal + AI Advisor" },
    tagline: {
      zh: "台股、美股、本機記帳、股利、風險與 AI 顧問整合在同一個投資筆記 App。",
      en: "A private investing journal for Taiwan and US stocks, dividends, risk review, and AI-assisted portfolio notes."
    },
    description: {
      zh: "適合想自己記錄交易、追蹤股利、檢視投資配置與保留資料掌控權的使用者。",
      en: "For users who want to record trades, track dividends, review allocation, and keep control of their data."
    },
    icon: "assets/brand/ooniau-logo.png",
    accent: "#1176f4",
    page: "twusstockpro.html",
    heroShots: {
      zh: [
        "assets/screenshots/twus-zh/TWUSstockprotw01.jpg",
        "assets/screenshots/twus-zh/TWUSstockprotw06.jpg",
        "assets/screenshots/twus-zh/TWUSstockprotw17.jpg"
      ],
      en: [
        "assets/screenshots/twus-en/TWUSstockproen01.jpg",
        "assets/screenshots/twus-en/TWUSstockproen06.jpg",
        "assets/screenshots/twus-en/TWUSstockproen17.jpg"
      ]
    },
    bullets: {
      zh: ["本機記帳，資料留在裝置", "台股與美股持股追蹤", "股利、損益、配置與風險儀表板", "可選雲端或本機 AI 顧問"],
      en: ["Local-first bookkeeping", "Taiwan and US stock tracking", "Dividend, P/L, allocation, and risk dashboards", "Optional cloud or local AI advisor"]
    }
  }
];

const featureScreens = [
  { zh: ["持股總覽", "快速切換台股持股，查看總損益、年度股利、持有部位與每檔股票的市值、成本、股利收入。"], en: ["TW Holdings Overview", "Switch to Taiwan holdings and review total return, annual dividends, open positions, market value, cost, and dividend income."] },
  { zh: ["美股持股總覽", "檢視美股 ETF 與個股持倉，包含股數、平均成本、市值、持股占比與損益表現。"], en: ["US Holdings Overview", "Review US ETF and stock positions with shares, average cost, market value, allocation, and P/L."] },
  { zh: ["新增交易", "用分步表單輸入市場、股票代號、名稱、日期、交易類型、價格與股數，降低記帳漏填。"], en: ["Add Transaction", "Enter market, ticker, name, date, trade type, price, and shares with a guided transaction form."] },
  { zh: ["交易歷史", "依股票查看買進、賣出、股利筆數與分頁紀錄，方便回溯每次交易。"], en: ["Trade History", "Check buy, sell, dividend counts and paginated records for each holding."] },
  { zh: ["單股投資分析", "整合單檔股票總損益、平均成本、淨成本、股利收入與價格復盤圖。"], en: ["Holding Analysis", "Combine total P/L, average cost, net cost, dividend income, and price review for one holding."] },
  { zh: ["投資儀表板", "彙整總市值、總報酬、投入成本、未實現損益、已實現損益、股利與市場配置。"], en: ["Investment Dashboard", "Summarize market value, total return, cost, unrealized P/L, realized P/L, dividends, and market allocation."] },
  { zh: ["記帳復盤與持股配置", "用圖表看台股持股集中度，辨識最大部位與配置是否過度集中。"], en: ["Bookkeeping Review", "Visualize Taiwan stock concentration and identify the largest holding exposure."] },
  { zh: ["風險總覽", "依 Beta 風險係數列出每檔持股風險分數，分辨低、中、高風險部位。"], en: ["Risk Overview", "Rank holdings by beta risk coefficient and label low, medium, and high risk positions."] },
  { zh: ["風險屬性測驗", "用問卷評估緊急預備金、投資目標、波動承受度等個人風險偏好。"], en: ["Risk Profile Test", "Assess emergency funds, goals, volatility tolerance, and personal risk preference through a questionnaire."] },
  { zh: ["整體風險與個人承受度", "比較持股整體風險與個人風險分數，協助判斷投資組合是否符合自己。"], en: ["Portfolio vs Personal Risk", "Compare weighted portfolio risk with personal tolerance to see whether the portfolio fits the user."] },
  { zh: ["語言設定", "支援系統預設、繁體中文與英文，方便同一 App 面向不同語系使用者。"], en: ["Language Settings", "Support system default, Traditional Chinese, and English for bilingual users."] },
  { zh: ["字體大小設定", "提供標準、大、特大與長輩友善模式，提升閱讀舒適度。"], en: ["Font Size Settings", "Offer standard, large, extra large, and senior friendly text modes."] },
  { zh: ["報價 API 設定", "設定美股報價與台股券商 API Key，金鑰以本機加密儲存，不上傳到工作室伺服器。"], en: ["Quote API Settings", "Configure US quote and Taiwan broker API keys with encrypted local storage."] },
  { zh: ["資料管理與關於", "匯出、匯入、還原預設與系統還原，並標示報價資料來源與版本資訊。"], en: ["Data Management", "Export, import, restore defaults, system restore, quote sources, and app version information."] },
  { zh: ["AI 顧問快速設定", "選擇 AI 服務商，照步驟取得 API Key、貼上、測試並儲存。"], en: ["AI Quick Setup", "Choose an AI provider, follow the API key guide, paste the key, test it, and save."] },
  { zh: ["AI 進階設定與本機模型", "支援連線測試、本機 GGUF 模型、回覆長度上限、使用者筆記與系統提示詞。"], en: ["AI Advanced Settings", "Configure connection testing, local GGUF models, reply limits, user notes, and system prompts."] },
  { zh: ["AI 顧問對話", "以持股、市場、資產配置與技術指標分類提問，取得投資紀錄的整理與提醒。"], en: ["AI Advisor Chat", "Ask categorized questions about holdings, markets, portfolio allocation, and indicators."] },
  { zh: ["交易紀錄", "依日期整理收入與支出，快速查看買進與股利事件。"], en: ["Transaction History", "Group income and expenses by date and review buy and dividend events quickly."] }
];

const copy = {
  zh: {
    navProducts: "產品",
    navFeatures: "功能",
    navAbout: "關於",
    navPrivacy: "隱私",
    navContact: "聯絡",
    featuresLabel: "功能代表圖",
    featuresTitle: "每張截圖都對應一個明確功能。",
    privacyLabel: "隱私",
    privacyTitle: "預設以本機資料為核心。",
    policyLabel: "政策",
    policyTitle: "投資與 AI 的界線說清楚。",
    contactLabel: "支援",
    contactTitle: "需要 Ooniau Studio App 的協助嗎？",
    emailTitle: "Email 支援",
    supportPageTitle: "支援中心",
    supportPageDesc: "疑難排解、使用提醒與聯絡前準備資料。",
    privacyPageTitle: "獨立隱私頁",
    privacyPageDesc: "如果商店要求專用隱私 URL，可使用此頁。",
    footerText: "專注、可靠、重視隱私的產品。",
    aboutEyebrow: "黑貓工作室",
    aboutHero: "為日常投資記錄、個人資料整理與長期生產力打造安靜可靠的 App。",
    aboutCardTitle: "關於",
    aboutCardBody: "這個頁面之後可以擴充為更完整的工作室簡介、產品理念、開發者故事、商店審核資訊與媒體素材。",
    aboutContactTitle: "聯絡",
    supportHero: "TW/US Stock NotePro 與其他 Ooniau Studio 產品，聯絡支援前可先參考下列檢查項目。",
    supportProductTitle: "TW/US Stock NotePro",
    supportProductItems: [
      "投資組合資料保存在本機。更換裝置或重新安裝前，請先使用匯出功能備份資料。",
      "報價與券商功能需要有效的服務商 API Key 與網路連線。",
      "雲端 AI 需要支援的 AI 服務商金鑰。本機 AI 需要匯入相容的 GGUF 模型。",
      "App 用於記錄與檢視，不提供保證獲利的投資建議。"
    ],
    supportFixesTitle: "常見排除方式",
    supportFixesItems: [
      "確認設定中的語言、顯示模式與字體大小。",
      "市場資料失敗時，請重新測試報價服務商金鑰並確認額度。",
      "AI 回覆失敗時，請測試 AI 連線並確認模型名稱或 API URL。",
      "本機模型異常時，可選擇較小的量化 GGUF 模型並保持手機電量。"
    ],
    supportContactBody: "來信請附上裝置型號、作業系統版本、App 版本、截圖，以及造成問題的操作步驟。",
    privacyPageHero: "Ooniau Studio 盡可能讓個人紀錄保留在你的裝置上。除非產品有專屬政策，本政策適用於 TW/US Stock NotePro 與未來 Ooniau Studio 產品。",
    privacyDataTitle: "資料保存在裝置上",
    privacyDataBody: "TW/US Stock NotePro 會將交易紀錄、投資組合備註、設定與加密 API Key 保存在你的裝置上。App 不營運 Ooniau Studio 帳號伺服器來上傳你的記帳資料。",
    privacyExternalTitle: "選用的外部服務",
    privacyExternalBody: "如果你啟用報價服務商、券商 API 或 AI 服務，App 可能會將必要的最少請求資料傳送給你選擇的服務商。這些服務商會依照自己的條款與隱私政策處理資料。",
    privacyAiTitle: "AI 顧問",
    privacyAiBody: "AI 顧問為選用功能。設定雲端 AI 時，提示內容可能包含回答所需的投資組合摘要、使用者備註與 App 情境。請不要輸入你不想傳送給所選 AI 服務商的秘密或資訊。可用時，本機 AI 模型會在裝置上執行。",
    privacyDisclaimerTitle: "財務免責聲明",
    privacyDisclaimerBody: "Ooniau Studio App 是記帳與分析工具，不提供保證獲利、個人化財務建議或券商服務。投資決策仍由你自行負責。",
    privacyChildrenTitle: "兒童",
    privacyChildrenBody: "Ooniau Studio App 並非面向兒童。我們不會明知而收集兒童個人資訊。",
    privacyChangesTitle: "變更",
    privacyChangesBody: "產品或平台要求變更時，本政策可能會更新。提交 App 商店前，最新版本應發布於本網站。",
    privacyLastUpdated: "最後更新：2026-06-29",
    viewProduct: "查看產品",
    viewPrivacy: "隱私政策",
    featuredLabel: "TWUS StockPro",
    screenshotAlt: "功能截圖",
    privacyItems: [
      ["本機優先", "交易紀錄、設定、備註與匯出資料預設保存在使用者裝置。"],
      ["API Key 保護", "報價、券商或 AI 金鑰儲存在裝置安全儲存區，App 不會上傳到 Ooniau Studio 伺服器。"],
      ["外部服務", "使用者選擇報價、券商或雲端 AI 時，請求會送到對應服務商，並受該服務商條款約束。"]
    ],
    policyItems: [
      ["非投資建議", "App 用於記帳、整理與檢視，不保證獲利，也不是證券投資顧問服務。"],
      ["AI 顧問限制", "AI 回覆僅供整理與思考參考，可能出錯；重大投資決策仍需自行判斷。"],
      ["資料備份", "更換手機或重新安裝前，請先使用匯出功能備份資料。"]
    ]
  },
  en: {
    navProducts: "Products",
    navFeatures: "Features",
    navAbout: "About",
    navPrivacy: "Privacy",
    navContact: "Contact",
    featuresLabel: "Feature Screens",
    featuresTitle: "Each screenshot maps to a clear app capability.",
    privacyLabel: "Privacy",
    privacyTitle: "Local-first by default.",
    policyLabel: "Policy",
    policyTitle: "Clear boundaries for finance and AI.",
    contactLabel: "Support",
    contactTitle: "Need help with an Ooniau Studio app?",
    emailTitle: "Email Support",
    supportPageTitle: "Support Center",
    supportPageDesc: "Troubleshooting notes and what to prepare before contact.",
    privacyPageTitle: "Standalone Privacy Page",
    privacyPageDesc: "Use this page when a store requires a dedicated privacy URL.",
    footerText: "Focused, privacy-minded products.",
    aboutEyebrow: "Black Cat Studio",
    aboutHero: "Quiet, reliable apps built for everyday investment journaling, personal data organization, and long-term productivity.",
    aboutCardTitle: "About",
    aboutCardBody: "This page will expand into a full studio profile, product philosophy, developer story, App Store review info, and press materials.",
    aboutContactTitle: "Contact",
    supportHero: "For TW/US Stock NotePro and other Ooniau Studio products, use the checklist below before contacting support.",
    supportProductTitle: "TW/US Stock NotePro",
    supportProductItems: [
      "Portfolio data is stored locally. Use export data before changing devices or reinstalling.",
      "Quote and broker features require valid provider API keys and network access.",
      "Cloud AI requires a supported AI provider key. Local AI requires importing a compatible GGUF model.",
      "The app is for recordkeeping and review, not guaranteed investment advice."
    ],
    supportFixesTitle: "Common Fixes",
    supportFixesItems: [
      "Confirm the selected language, display mode, and font size in Settings.",
      "If market data fails, test the quote provider key again and check the provider quota.",
      "If AI replies fail, test the AI connection and verify the model name or API URL.",
      "For local model issues, choose a smaller quantized GGUF model and keep the phone charged."
    ],
    supportContactBody: "Please include device model, OS version, app version, screenshots, and the steps that caused the issue.",
    privacyPageHero: "Ooniau Studio designs apps to keep personal records on your device whenever possible. This policy applies to TW/US Stock NotePro and future Ooniau Studio products unless a product-specific policy says otherwise.",
    privacyDataTitle: "Data Stored On Device",
    privacyDataBody: "TW/US Stock NotePro stores transaction records, portfolio notes, settings, and encrypted API keys locally on your device. The app does not operate an Ooniau Studio account server for uploading your bookkeeping data.",
    privacyExternalTitle: "Optional External Services",
    privacyExternalBody: "If you enable quote providers, broker APIs, or AI services, the app may send the minimum required request data to the provider you selected. Those providers process data under their own terms and privacy policies.",
    privacyAiTitle: "AI Advisor",
    privacyAiBody: "The AI advisor is optional. When cloud AI is configured, prompts may include portfolio summaries, user notes, and app context needed to answer. Do not enter secrets or information you do not want sent to the selected AI provider. Local AI models run on device when available.",
    privacyDisclaimerTitle: "Financial Disclaimer",
    privacyDisclaimerBody: "Ooniau Studio apps are bookkeeping and analysis tools. They do not provide guaranteed returns, personalized financial advice, or broker-dealer services. Investment decisions remain your responsibility.",
    privacyChildrenTitle: "Children",
    privacyChildrenBody: "Ooniau Studio apps are not directed to children. We do not knowingly collect personal information from children.",
    privacyChangesTitle: "Changes",
    privacyChangesBody: "This policy may be updated when products or platform requirements change. The latest version should be published on this website before app store submission.",
    privacyLastUpdated: "Last updated: 2026-06-29",
    viewProduct: "View Product",
    viewPrivacy: "Privacy Policy",
    featuredLabel: "TWUS StockPro",
    screenshotAlt: "Feature screenshot",
    privacyItems: [
      ["Local-first", "Transactions, settings, notes, and exports are stored on the user device by default."],
      ["API key protection", "Quote, broker, and AI keys are stored in secure local storage and are not uploaded to Ooniau Studio servers."],
      ["External services", "When a user chooses quote, broker, or cloud AI providers, requests are sent to that provider under its own terms."]
    ],
    policyItems: [
      ["Not financial advice", "The app is for bookkeeping, organization, and review. It does not guarantee profit or provide broker-dealer services."],
      ["AI advisor limits", "AI output is for organization and reflection. It can be wrong, and major decisions remain the user's responsibility."],
      ["Backups", "Before changing phones or reinstalling, use export data to back up records."]
    ]
  }
};

function normalizeLang(value) {
  return value === "zh" || value === "en" ? value : null;
}

function browserLang() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((language) => language?.toLowerCase().startsWith("zh")) ? "zh" : "en";
}

function urlLang() {
  return normalizeLang(new URLSearchParams(window.location.search).get("lang"));
}

function preferredLang() {
  return urlLang() || browserLang();
}

let lang = preferredLang();
let shotLocale = lang === "zh" ? "zh" : "en";
let activeProductIndex = 0;

function t(key) {
  return copy[lang][key] || copy.en[key] || key;
}

function localized(value) {
  return value?.[lang] || value?.en || value?.zh || "";
}

function byId(id) {
  return document.getElementById(id);
}

function syncUrlLang() {
  const url = new URL(window.location.href);
  if (url.searchParams.get("lang") === lang) return;
  url.searchParams.set("lang", lang);
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

function withLang(href) {
  if (!href || href.startsWith("#") || /^(mailto:|tel:|https?:)/i.test(href)) return href;
  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin || !url.pathname.endsWith(".html")) return href;
  url.searchParams.set("lang", lang);
  return `${url.pathname.split("/").pop()}${url.search}${url.hash}`;
}

function updateLocalizedLinks() {
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    link.setAttribute("href", withLang(href));
  });
}

function screenshotPath(index) {
  const n = String(index + 1).padStart(2, "0");
  return shotLocale === "zh"
    ? `assets/screenshots/twus-zh/TWUSstockprotw${n}.jpg`
    : `assets/screenshots/twus-en/TWUSstockproen${n}.jpg`;
}

function renderStaticText() {
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-list]").forEach((node) => {
    node.innerHTML = t(node.dataset.i18nList).map((item) => `<li>${item}</li>`).join("");
  });
  const toggle = byId("langToggle");
  if (toggle) toggle.textContent = lang === "zh" ? "EN" : "繁";
  document.title = document.body.classList.contains("product-page")
    ? `${localized(products[activeProductIndex].name)} | Ooniau Studio`
    : "Ooniau Studio";
  updateLocalizedLinks();
}

function renderCarousel() {
  const stage = byId("productCarousel");
  if (!stage) return;
  const product = products[activeProductIndex];
  const shots = product.heroShots[lang === "zh" ? "zh" : "en"];
  stage.innerHTML = `
    <article class="carousel-card" style="--product-accent: ${product.accent}">
      <div class="carousel-copy">
        <div class="product-kicker">
          <img src="${product.icon}" alt="">
          <span>${localized(product.category)}</span>
        </div>
        <span class="status">${localized(product.status)}</span>
        <h1>${localized(product.name)}</h1>
        <p>${localized(product.tagline)}</p>
        <p class="carousel-description">${localized(product.description)}</p>
        <div class="hero-actions">
          <a class="primary-action" href="${withLang(product.page)}">${t("viewProduct")}</a>
          <a class="secondary-action" href="${withLang(`${product.page}#privacy`)}">${t("viewPrivacy")}</a>
        </div>
      </div>
      <div class="carousel-media">
        ${shots.map((src, index) => `<img class="carousel-phone shot-${index + 1}" src="${src}" alt="${t("screenshotAlt")}">`).join("")}
      </div>
    </article>
  `;

  const dots = byId("carouselDots");
  if (!dots) return;
  dots.innerHTML = products.map((productItem, index) => `
    <button type="button" class="${index === activeProductIndex ? "active" : ""}" data-product-index="${index}" aria-label="${localized(productItem.name)}"></button>
  `).join("");
}

function moveCarousel(direction) {
  activeProductIndex = (activeProductIndex + direction + products.length) % products.length;
  renderCarousel();
}

function renderFeaturedProduct() {
  const host = byId("featuredProduct");
  if (!host) return;
  const product = products[activeProductIndex];
  const shots = product.heroShots[shotLocale];
  host.innerHTML = `
    <div class="feature-copy">
      <p class="eyebrow">${t("featuredLabel")}</p>
      <h2>${localized(product.name)}</h2>
      <p>${localized(product.tagline)}</p>
      <ul>${localized(product.bullets).map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="feature-shots">
      ${shots.map((src) => `<img src="${src}" alt="${t("screenshotAlt")}">`).join("")}
    </div>
  `;
}

function renderFeatureScreens() {
  const grid = byId("featureScreenGrid");
  if (!grid) return;
  grid.innerHTML = featureScreens.map((screen, index) => {
    const [title, description] = screen[shotLocale];
    return `
      <article class="feature-screen-card">
        <img src="${screenshotPath(index)}" loading="lazy" alt="${t("screenshotAlt")} ${index + 1}">
        <div>
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-shot-locale]").forEach((button) => {
    button.classList.toggle("active", button.dataset.shotLocale === shotLocale);
  });

  updateFeatureScreenControls();
}

function updateFeatureScreenControls() {
  const viewport = byId("featureScreenViewport");
  const prev = byId("featureScreenPrev");
  const next = byId("featureScreenNext");
  if (!viewport || !prev || !next) return;

  const maxScroll = viewport.scrollWidth - viewport.clientWidth;
  prev.disabled = viewport.scrollLeft <= 1;
  next.disabled = viewport.scrollLeft >= maxScroll - 1;
}

function moveFeatureScreens(direction) {
  const viewport = byId("featureScreenViewport");
  const card = viewport?.querySelector(".feature-screen-card");
  if (!viewport || !card) return;

  const styles = window.getComputedStyle(byId("featureScreenGrid"));
  const gap = Number.parseFloat(styles.columnGap) || 0;
  viewport.scrollBy({
    left: direction * (card.getBoundingClientRect().width + gap),
    behavior: "smooth"
  });
}

function renderPolicyList(id, items) {
  const host = byId(id);
  if (!host) return;
  host.innerHTML = items.map(([title, body]) => `
    <article>
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `).join("");
}

function setupMenus() {
  document.querySelectorAll("[data-menu-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.menuTrigger;
      const panel = document.querySelector(`[data-menu-panel="${key}"]`);
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      panel?.classList.toggle("open", !expanded);
    });
  });

  document.querySelectorAll("[data-submenu-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.submenuTrigger;
      const panel = document.querySelector(`[data-submenu-panel="${key}"]`);
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      panel?.classList.toggle("open", !expanded);
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".menu-tree")) return;
    document.querySelectorAll(".menu-panel.open, .submenu-panel.open").forEach((panel) => panel.classList.remove("open"));
    document.querySelectorAll("[data-menu-trigger], [data-submenu-trigger]").forEach((button) => button.setAttribute("aria-expanded", "false"));
  });
}

function render() {
  renderStaticText();
  renderCarousel();
  renderFeaturedProduct();
  renderFeatureScreens();
  renderPolicyList("privacyList", t("privacyItems"));
  renderPolicyList("policyList", t("policyItems"));
  const year = byId("year");
  if (year) year.textContent = new Date().getFullYear();
}

byId("langToggle")?.addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  shotLocale = lang === "zh" ? "zh" : "en";
  syncUrlLang();
  render();
});

byId("carouselPrev")?.addEventListener("click", () => moveCarousel(-1));
byId("carouselNext")?.addEventListener("click", () => moveCarousel(1));
byId("featureScreenPrev")?.addEventListener("click", () => moveFeatureScreens(-1));
byId("featureScreenNext")?.addEventListener("click", () => moveFeatureScreens(1));
byId("featureScreenViewport")?.addEventListener("scroll", updateFeatureScreenControls);

document.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-product-index]");
  if (!dot) return;
  activeProductIndex = Number(dot.dataset.productIndex);
  renderCarousel();
});

document.querySelectorAll("[data-shot-locale]").forEach((button) => {
  button.addEventListener("click", () => {
    shotLocale = button.dataset.shotLocale;
    renderFeaturedProduct();
    renderFeatureScreens();
  });
});

setupMenus();
syncUrlLang();
render();
