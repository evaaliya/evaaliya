/* =====================================================================
   config.js: ЕДИНСТВЕННЫЙ файл, который тебе нужно редактировать.
   index.html трогать не надо (в нём вшито фото и весь код сайта).

   Правила, чтобы ничего не сломать:
   - каждый текст пишется в кавычках: "вот так";
   - между пунктами списка и между полями стоит запятая;
   - внутри текста не используй двойные кавычки ", используй одинарные ' или «ёлочки»;
   - после последнего пункта запятая необязательна;
   - если сайт показал красную плашку с ошибкой, ищи опечатку рядом с указанной строкой.
   ===================================================================== */

/* =====================================================================
   ЗДЕСЬ ВСЁ, ЧТО НУЖНО РЕДАКТИРОВАТЬ. Остальной код ниже трогать не надо.

   Как это работает: сайт сам заходит в твой GitHub, берёт публичные репозитории,
   читает их README, языки и файлы с зависимостями и сам собирает из этого
   карточки проектов и плоды на бонсае. Тебе нужно только:
     1. вписать свой ник в `github`;
     2. в `exclude` перечислить репозитории, которые показывать не надо;
     3. при желании поправить тексты в `overrides` и `manualProjects`.
   Всё, что написано после // , это просто заметка, код она не меняет.
   ===================================================================== */
const CONFIG = {

  // ---------- GITHUB ----------
  github: "YOUR_GITHUB_USERNAME",   // ← ВПИШИ СВОЙ НИК с GitHub (пока там YOUR_..., показываются демо-проекты)
  maxProjects: 12,                  // сколько репозиториев показывать (сначала самые свежие по последнему push)

  // Репозитории, которые НЕ показывать ни в карточках, ни на дереве.
  // Пиши имена так, как они выглядят на GitHub (регистр не важен). Пример:
  //   exclude: ["constructos", "agent-credit-network"],
  exclude: [],

  // Если НЕ пусто, будут показаны ТОЛЬКО эти репозитории (остальные скрываются). Пример: only: ["my-agent", "my-dapp"]
  only: [],

  // Эти проекты идут первыми (по имени репозитория). Первая карточка на сайте самая большая. Пример: pin: ["my-best-project"]
  pin: [],

  // ---------- ПРАВКИ ДЛЯ КОНКРЕТНЫХ ПРОЕКТОВ ----------
  // Сайт сам пишет описание (первые 3 предложения README), стек и список «что сделано».
  // Если что-то хочешь сказать своими словами, добавь запись с именем репозитория. Все поля необязательные:
  //
  //   "имя-репозитория": {
  //     title: "Красивое название",                    // вместо имени репозитория
  //     desc: "Описание в одно-два предложения.",       // вместо текста из README
  //     event: "AWS hackathon",                        // плашка с названием хакатона / контекстом
  //     role: "Solo: идея, агенты, код",               // строка «My role»
  //     built: ["Что именно я сделала 1", "Пункт 2"],  // список «What I worked on» (вместо автоматического)
  //     stack: ["Strands Agents SDK", "Claude"],       // технологии, которые сайт не смог увидеть сам
  //     tags: ["MCP", "Python"],                       // серые плашки под описанием
  //     demo: "https://my-demo.vercel.app",            // кнопка Live demo
  //   },
  overrides: {
    // "data-governance-agent": {
    //   event: "AWS hackathon",
    //   built: [
    //     "Сделала так, чтобы решения принимал обычный Python-код, а не LLM.",
    //     "Разделила проверки на модули: PII detector, anomaly profiler, risk evaluator."
    //   ]
    // },
  },

  // Проекты, которых нет на GitHub (приватные или без репозитория). Сюда пишешь всё вручную. Пример:
  //   { title: "My private app", desc: "Что это.", event: "Hackathon", built: ["Пункт 1"],
  //     stack: ["Python", "MCP"], languages: [["Python", 90], ["SQL", 10]], url: "", demo: "" },
  manualProjects: [],

  // ---------- ТЕКСТЫ САЙТА ----------
  email: "you@example.com",
  roles: ["autonomous AI agents", "Web3 products", "hackathon MVPs", "things that feel like the future"],   // печатающаяся строка в начале
  lead: "AI and Web3 developer. I turn prompts, agents and smart contracts into working products, and I ship them at hackathons.",
  about: [   // абзацы в блоке About me (каждая строка в кавычках = один абзац)
    "I work with prompt engineering, autonomous AI agents and smart contract integration. Hackathons are where I build my portfolio: a fixed deadline, a real demo and a judge looking at the result.",
    "I came to this field from a call center, learning AI and Web3 by building. IBM-certified, hackathon prize winner, based in Kyrgyzstan. The long-term idea I keep returning to is how humans and AI will coexist."
  ],
  skills: ["Prompt engineering", "Autonomous AI agents", "Smart contract integration", "MCP servers", "Python", "Web3"],   // плашки в About и бегущая строка

  // ---------- КИНОЛЕНТА (раздел Reel) ----------
  // src: файл в репозитории (например "videos/demo.mp4", положи его в папку videos) или ссылка YouTube / Vimeo / Loom.
  // project: имя репозитория или название проекта. Тогда в его карточке появится кнопка Watch video.
  // Пока src пустой, на плёнке показывается заглушка. Лишние кадры просто удали.
  videos: [
    { title: "Demo clip 1", project: "", src: "", poster: "", note: "Замени название, src и project" },
    { title: "Demo clip 2", project: "", src: "", poster: "", note: "" },
    { title: "Demo clip 3", project: "", src: "", poster: "", note: "" },
    { title: "Demo clip 4", project: "", src: "", poster: "", note: "" },
    { title: "Demo clip 5", project: "", src: "", poster: "", note: "" }
  ],

  // ---------- ССЫЛКИ (раздел Find me) ----------
  socials: [
    { label: "GitHub",    handle: "@your-handle", url: "https://github.com/" },
    { label: "X",         handle: "@your-handle", url: "https://x.com/" },
    { label: "Farcaster", handle: "@your-handle", url: "https://warpcast.com/" },
    { label: "Telegram",  handle: "@your-handle", url: "https://t.me/" },
    { label: "LinkedIn",  handle: "your-name",    url: "https://www.linkedin.com/" }
  ]
};
