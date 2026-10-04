const DASHBOARD_DATA = {
  "quarters": {
    "Q1": {
      "title": "I Квартал 2026",
      "headerSubtitle": "Аналіз ефективності соціальних мереж, вебсайту та регіональних медіа · Січень–Березень 2026",
      "badges": {
        "unique": "✓ Унікальний контент 98%",
        "reposts": "↗ Репости 2%",
        "platforms": "7 платформ",
        "regions": "14 регіональних управлінь"
      },
      "kpi_views": [
        { "platform": "Facebook", "icon": "📘", "val": "1,7 млн", "trend": "▲ +36%", "trendClass": "up", "note": "до Q4 2025", "featured": true },
        { "platform": "FB — О. Потій", "icon": "👤", "val": "42,4 тис.", "trend": "▲ +134,9%", "trendClass": "up", "note": "особиста сторінка" },
        { "platform": "cip.gov.ua", "icon": "🌐", "val": "1,2 млн", "trend": "▲ +422%", "trendClass": "up", "note": "аномальне зростання", "featured": true },
        { "platform": "Telegram", "icon": "✉️", "val": "≈955 тис.", "trend": "▼ ≈−5%", "trendClass": "down", "note": "розрахунковий показник" },
        { "platform": "Instagram", "icon": "📸", "val": "279,7 тис.", "trend": "▼ −50%", "trendClass": "down", "note": "але зросла лояльність" },
        { "platform": "X (Twitter)", "icon": "𝕏", "val": "86 тис.", "trend": "▲ +385%", "trendClass": "up", "note": "міжнародний прорив" },
        { "platform": "LinkedIn", "icon": "💼", "val": "75,8 тис.", "trend": "▲ +4,3%", "trendClass": "up", "note": "до Q4 2025" },
        { "platform": "YouTube", "icon": "▶️", "val": "9,8 тис.", "trend": "▲ +23%", "trendClass": "up", "note": "891 год (+51%) тривалості" }
      ],
      "kpi_interactions": [
        { "platform": "Facebook", "icon": "📘", "val": "20 600", "trend": "▲ +7,8%", "trendClass": "up", "note": "до Q4 2025" },
        { "platform": "FB — О. Потій", "icon": "👤", "val": "1 179", "trend": "▲ +30,7%", "trendClass": "up", "note": "особистий контент" },
        { "platform": "Instagram", "icon": "📸", "val": "6 538", "trend": "▲ +24,3%", "trendClass": "up", "note": "попри падіння охоплення" },
        { "platform": "LinkedIn", "icon": "💼", "val": "2 300", "trend": "▲ +8%", "trendClass": "up", "note": "двомовний контент" },
        { "platform": "Telegram", "icon": "✉️", "val": "—", "trend": "⚠ Метрика відсутня", "trendClass": "neutral", "note": "" },
        { "platform": "X (Twitter)", "icon": "𝕏", "val": "—", "trend": "⚠ Метрика відсутня", "trendClass": "neutral", "note": "" }
      ],
      "kpi_audience": [
        { "platform": "Facebook", "icon": "📘", "val": "70 тис.", "trend": "▲ +1 102", "trendClass": "up", "note": "до Q4 2025" },
        { "platform": "FB — О. Потій", "icon": "👤", "val": "486", "trend": "▲ +78 осіб", "trendClass": "up", "note": "до Q4 2025" },
        { "platform": "Telegram", "icon": "✉️", "val": "62 600", "trend": "▼ −2 400", "trendClass": "down", "note": "відтік аудиторії" },
        { "platform": "X (Twitter)", "icon": "𝕏", "val": "12 800", "trend": "◆", "trendClass": "neutral", "note": "стабільно" },
        { "platform": "Instagram", "icon": "📸", "val": "7 622", "trend": "▲ +616", "trendClass": "up", "note": "до Q4 2025" },
        { "platform": "YouTube", "icon": "▶️", "val": "3 160", "trend": "▲ +135", "trendClass": "up", "note": "до Q4 2025" },
        { "platform": "LinkedIn", "icon": "💼", "val": "2 040", "trend": "▲ +300", "trendClass": "up", "note": "до Q4 2025" }
      ],
      "charts": {
        "audience": {
          "labels": ["Facebook", "Telegram", "X (Twitter)", "Instagram", "YouTube", "LinkedIn", "FB (О.Потій)"],
          "data": [70, 62.6, 12.8, 7.6, 3.1, 2.0, 0.486]
        },
        "views_share": {
          "labels": ["Facebook", "Вебсайт", "Telegram", "Instagram", "X (Twitter)", "LinkedIn", "YouTube"],
          "data": [39.5, 27.9, 22.2, 6.5, 2.0, 1.8, 0.2]
        },
        "growth_audience": {
          "labels": ["FB (О.Потій)", "LinkedIn", "Instagram", "YouTube", "Facebook", "X (Twitter)", "Telegram"],
          "data": [19.1, 17.2, 8.8, 4.5, 1.6, 0, -3.7]
        },
        "growth_views": {
          "labels": ["Вебсайт", "FB (О.Потій)", "Facebook", "YouTube", "LinkedIn", "Telegram", "Instagram"],
          "data": [422, 134.9, 36, 23, 4.3, -5, -50]
        },
        "regions": {
          "labels": ["Закарпатська", "Хмельницька", "Івано-Франківська", "Волинська", "Житомирська", "Кіровоградська", "Інші 8 обл."],
          "data": [12, 7, 6, 6, 3, 3, 13]
        }
      },
      "insights": {
        "audience": "<strong>Facebook та Telegram</strong> — основні майданчики за кількістю підписників.",
        "views": "<strong>Вебсайт наблизився до Facebook</strong> за генерацією переглядів (28% vs 40%), що свідчить про попит на першоджерела.",
        "growth_audience": "<strong>Сторінка О. Потія (+19,1%), LinkedIn (+17,2%) та Instagram (+8,8%)</strong> — лідери за приростом аудиторії.",
        "growth_views": "<strong>Вебсайт (+422%)</strong> та <strong>Сторінка Голови Служби (+134,9%)</strong> — беззаперечні лідери зростання переглядів."
      },
      "platforms_detail": {
        "fb": {
          "readers": "70 тис.", "readersTrend": "▲ +1 102 до Q4",
          "posts": "152", "postsTrend": "▲ +25% до Q1'25",
          "views": "1,7 млн", "viewsTrend": "▲ +36% до Q4",
          "interactions": "20 600", "interactionsTrend": "▲ +7,8% до Q4",
          "top_posts": [
            { "title": "Держспецзв'язку оприлюднила перелік забороненого ПЗ", "views": "161,6 тис.", "engage": "916 взаємодій" },
            { "title": "Уряд ухвалив постанову від 31.12.2025 р. №1799", "views": "62,8 тис.", "engage": "332 взаємодії" },
            { "title": "Стартувала кампанія декларування", "views": "52,1 тис.", "engage": "339 взаємодій" }
          ]
        },
        "potii": {
          "readers": "486", "readersTrend": "▲ +78 осіб",
          "posts": "6", "postsTrend": "▲ +200%",
          "views": "42,4 тис.", "viewsTrend": "▲ +134,9%",
          "interactions": "1 179", "interactionsTrend": "▲ +30,7%",
          "top_posts": [
            { "title": "Форум кіберстійкості #KICRF2026, зустріч з Шарлоттою Сюрен", "views": "11,4 тис.", "engage": "64" },
            { "title": "Підписання Меморандуму з Нац. центром кібербезпеки Швеції (Мюнхен)", "views": "10,5 тис.", "engage": "55" }
          ],
          "note": "<strong>⚠ Висновок:</strong> Попри невелику аудиторію, пости набирають значні перегляди — особливо з особистим компонентом."
        },
        "instagram": {
          "readers": "7 622", "readersTrend": "▲ +616 до Q4",
          "posts": "100", "postsTrend": "▲ +59% до Q1'25",
          "views": "279,7 тис.", "viewsTrend": "▼ −50% до Q4",
          "interactions": "6 538", "interactionsTrend": "▲ +24,3% до Q4",
          "top_posts": [
            { "title": "Перелік забороненого ПЗ", "views": "16,7 тис.", "engage": "162" },
            { "title": "Сертифікати Вищої школи криптології (2-й набір)", "views": "11,6 тис.", "engage": "133" },
            { "title": "Пост до Дня закоханих", "views": "8 тис.", "engage": "456 🔥" }
          ]
        },
        "telegram": {
          "subscribers": "62 600", "subscribersTrend": "▼ −2 400 до Q4",
          "posts": "149", "postsTrend": "▲ +20% до Q1'25",
          "views": "≈955 тис.", "viewsTrend": "▼ ≈−5% до Q4",
          "interactions": "—", "interactionsTrend": "⚠ Немає метрики",
          "calc_note": "* Розраховано на основі середнього перегляду одного допису (≈6,5 тис.)",
          "top_posts": [
            { "title": "Привітання InformNapalm", "views": "18,6 тис.", "engage": "50" },
            { "title": "Кібератака від імені CERT-UA", "views": "17,2 тис.", "engage": "240" },
            { "title": "Держспецзв'язку оприлюднила перелік забороненого ПЗ", "views": "16,3 тис.", "engage": "" }
          ],
          "note": "<strong>Тренд:</strong> Відтік 2 400 підписників відображає загальнонаціональний спад довіри до Telegram."
        },
        "x": {
          "readers": "12 800", "readersTrend": "≈ стабільно",
          "posts": "31", "postsTrend": "▲ +86% до Q1'25",
          "views": "86 тис.", "viewsTrend": "▲ +385% до Q4",
          "interactions": "—", "interactionsTrend": "⚠ Немає метрики",
          "top_posts": [
            { "title": "Виступ О. Потія на Kyiv Cyber Resilience Forum 2026", "views": "16 тис.", "engage": "41" },
            { "title": "Remembrance is not a violation", "views": "3 тис.", "engage": "617 🔥" },
            { "title": "Репост CERT-UA: APT28 exploits CVE-2026-21509", "views": "46 тис. 🔥", "engage": "315" }
          ],
          "note": "<strong>🔥</strong> Зростання кількості переглядів за рахунок окремих вірусних постів."
        },
        "linkedin": {
          "readers": "2 040", "readersTrend": "▲ +300 до Q4",
          "posts": "99", "postsTrend": "▲ +145% до Q1'25",
          "views": "75,8 тис.", "viewsTrend": "▲ +4,3% до Q4",
          "interactions": "2 300", "interactionsTrend": "▲ +8% до Q4",
          "top_posts": [
            { "title": "Кібератака від імені CERT-UA", "views": "2,3 тис.", "engage": "71" },
            { "title": "Delegation from MCF (Myndigheten för civilt försvar)", "views": "1,9 тис.", "engage": "103" },
            { "title": "Виступ В. Стирана на форумі кіберстійкості", "views": "1,8 тис.", "engage": "95" }
          ],
          "note": "<strong>Потенціал:</strong> Платформа успішно охоплює міжнародне ком'юніті."
        },
        "youtube": {
          "subscribers": "3 160", "subscribersTrend": "▲ +135 до Q4",
          "posts": "10", "postsTrend": "▲ +400% до Q1'25",
          "views": "9,8 тис.", "viewsTrend": "▲ +23% до Q4",
          "watch_time": "891 год", "watch_timeTrend": "▲ +51% до Q4",
          "top_video": "Захист держ. інформ. ресурсів, кіберзахист, авторизація з безпеки — роз'яснення (1,1 тис. переглядів)",
          "note": "<strong>🔥</strong> +400% публікацій порівняно з Q1 2025 та +51% тривалості перегляду."
        }
      },
      "site_news_stats": {
        "total_news": "167 (108 UA / 56 EN)",
        "views": "36,7 тис.",
        "unique_readers": "26 тис.",
        "media_mentions": "298",
        "top_articles": [
          { "title": "Оприлюднення переліку забороненого ПЗ та обладнання", "views": "8 614", "mentions": "14" },
          { "title": "Вимоги до захисту інформації для постачальників держсектору", "views": "2 068", "mentions": "1" },
          { "title": "Затверджено каталог заходів та мет. рекомендації з кіберзахисту", "views": "2 018", "mentions": "1" }
        ],
        "note": "<strong>Синдикація контенту:</strong> Новинна стрічка вебсайту ефективно індексується та републікується медіа."
      },
      "viral_table": [
        { "rank": 1, "platform": "Facebook", "topic": "Перелік забороненого ПЗ та обладнання", "views": "161 600", "engage": "916", "type": "Регуляторний", "typeClass": "badge" },
        { "rank": 2, "platform": "X (Twitter)", "topic": "Атака APT28 / UAC-0001 · CVE-2026-21509", "views": "46 000", "engage": "315", "type": "Кіберзагроза", "typeClass": "badge amber" },
        { "rank": 3, "platform": "Вебсайт", "topic": "Перелік забороненого ПЗ (сторінка)", "views": "76 000", "engage": "—", "type": "База знань", "typeClass": "badge green" },
        { "rank": 4, "platform": "Telegram", "topic": "Привітання InformNapalm", "views": "18 600", "engage": "50", "type": "Партнерство", "typeClass": "badge" },
        { "rank": 5, "platform": "Instagram", "topic": "Перелік забороненого ПЗ", "views": "16 700", "engage": "162", "type": "Регуляторний", "typeClass": "badge" },
        { "rank": 6, "platform": "FB (О. Потій)", "topic": "Форум #KICRF2026, зустріч з Ш. Сюрен", "views": "11 400", "engage": "64", "type": "Персональний", "typeClass": "badge green" },
        { "rank": 7, "platform": "LinkedIn", "topic": "Кібератака від імені CERT-UA", "views": "2 300", "engage": "71", "type": "Заходи", "typeClass": "badge amber" }
      ],
      "regional_stats": {
        "social_posts": "20",
        "social_posts_note": "зокрема Управлінь в Закарпатській, Житомирській, Рівненській областях",
        "media_posts": "50",
        "media_posts_note": "14 управлінь",
        "summary": "Усього: <strong style='color:var(--white)'>50 публікацій</strong> від 14 управлінь у регіональних медіа та на сайтах ОВА.",
        "table": [
          { "region": "Закарпатська", "count": 12 },
          { "region": "Хмельницька", "count": 7 },
          { "region": "Івано-Франківська", "count": 6 },
          { "region": "Волинська", "count": 6 },
          { "region": "Житомирська", "count": 3 },
          { "region": "Кіровоградська", "count": 3 },
          { "region": "Решта 8 областей", "count": 13 }
        ],
        "insight": "<strong>Тематика:</strong> навчання, тренінги та лекції з кіберзахисту на місцях. Закарпаття — абсолютний лідер."
      }
    },

    "Q2": {
      "title": "II Квартал 2026",
      "headerSubtitle": "Аналіз ефективності соціальних мереж, вебсайту та регіональних медіа · Квітень–Червень 2026",
      "badges": {
        "unique": "✓ Унікальний контент 98%",
        "reposts": "↗ Репости 2%",
        "platforms": "7 платформ",
        "regions": "23 регіональних управління"
      },
      "kpi_views": [
        { "platform": "Facebook", "icon": "📘", "val": "1,9 млн", "trend": "▲ +11%", "trendClass": "up", "note": "до Q1 2026", "featured": true },
        { "platform": "FB — О. Потій", "icon": "👤", "val": "37,6 тис.", "trend": "▼ -15,2%", "trendClass": "down", "note": "особиста сторінка" },
        { "platform": "cip.gov.ua", "icon": "🌐", "val": "≈1,0 млн", "trend": "◆ стабільно", "trendClass": "neutral", "note": "без аномалій", "featured": true },
        { "platform": "Telegram", "icon": "✉️", "val": "≈951 тис.", "trend": "▼ ≈−5%", "trendClass": "down", "note": "розрахунковий показник" },
        { "platform": "Instagram", "icon": "📸", "val": "497,4 тис.", "trend": "▲ +82%", "trendClass": "up", "note": "відновлення" },
        { "platform": "X (Twitter)", "icon": "𝕏", "val": "—", "trend": "⚠ Метрика відсутня", "trendClass": "neutral", "note": "" },
        { "platform": "LinkedIn", "icon": "💼", "val": "90,9 тис.", "trend": "▲ +26%", "trendClass": "up", "note": "до Q1 2026" },
        { "platform": "YouTube", "icon": "▶️", "val": "11,7 тис.", "trend": "▲ +29%", "trendClass": "up", "note": "822 год (+11%)" }
      ],
      "kpi_interactions": [
        { "platform": "Facebook", "icon": "📘", "val": "25 588", "trend": "▲ +29,2%", "trendClass": "up", "note": "до Q1 2026" },
        { "platform": "FB — О. Потій", "icon": "👤", "val": "1 171", "trend": "▼ -3%", "trendClass": "down", "note": "до Q1 2026" },
        { "platform": "Instagram", "icon": "📸", "val": "11 900", "trend": "▲ +89%", "trendClass": "up", "note": "до Q1 2026" },
        { "platform": "LinkedIn", "icon": "💼", "val": "2 700", "trend": "▲ +22%", "trendClass": "up", "note": "до Q1 2026" },
        { "platform": "Telegram", "icon": "✉️", "val": "—", "trend": "⚠ Метрика відсутня", "trendClass": "neutral", "note": "" },
        { "platform": "X (Twitter)", "icon": "𝕏", "val": "—", "trend": "⚠ Метрика відсутня", "trendClass": "neutral", "note": "" }
      ],
      "kpi_audience": [
        { "platform": "Facebook", "icon": "📘", "val": "71 400", "trend": "▲ +1 400", "trendClass": "up", "note": "до Q1 2026" },
        { "platform": "FB — О. Потій", "icon": "👤", "val": "579", "trend": "▲ +93 особи", "trendClass": "up", "note": "до Q1 2026" },
        { "platform": "Telegram", "icon": "✉️", "val": "60 900", "trend": "▼ −1 700", "trendClass": "down", "note": "відтік аудиторії" },
        { "platform": "X (Twitter)", "icon": "𝕏", "val": "12 767", "trend": "◆", "trendClass": "neutral", "note": "стабільно" },
        { "platform": "Instagram", "icon": "📸", "val": "7 996", "trend": "▲ +374", "trendClass": "up", "note": "до Q1 2026" },
        { "platform": "YouTube", "icon": "▶️", "val": "3 215", "trend": "▲ +55", "trendClass": "up", "note": "до Q1 2026" },
        { "platform": "LinkedIn", "icon": "💼", "val": "2 285", "trend": "▲ +245", "trendClass": "up", "note": "до Q1 2026" }
      ],
      "charts": {
        "audience": {
          "labels": ["Facebook", "Telegram", "X (Twitter)", "Instagram", "YouTube", "LinkedIn", "FB (О.Потій)"],
          "data": [71.4, 60.9, 12.767, 7.996, 3.215, 2.285, 0.579]
        },
        "views_share": {
          "labels": ["Facebook", "Вебсайт", "Telegram", "Instagram", "LinkedIn", "FB (О.Потій)", "YouTube"],
          "data": [42.3, 22.3, 21.2, 11.1, 2.0, 0.8, 0.3]
        },
        "growth_audience": {
          "labels": ["FB (О.Потій)", "LinkedIn", "Instagram", "Facebook", "YouTube", "X (Twitter)", "Telegram"],
          "data": [19.1, 12.0, 4.9, 2.0, 1.7, 0, -2.7]
        },
        "growth_views": {
          "labels": ["Instagram", "YouTube", "LinkedIn", "Facebook", "Telegram", "FB (О.Потій)", "Вебсайт"],
          "data": [82, 29, 26, 15, -0.4, -15.2, -16.7]
        },
        "regions": {
          "labels": ["Рівненська", "Хмельницька", "Закарпатська", "Івано-Франківська", "Чернівецька", "Інші 13 обл."],
          "data": [16, 12, 11, 8, 7, 46]
        }
      },
      "insights": {
        "audience": "<strong>Facebook та Telegram</strong> — залишаються основними майданчиками за кількістю підписників.",
        "views": "<strong>Facebook зберіг лідерство (42%)</strong>, вебсайт є другим джерелом (22%).",
        "growth_audience": "<strong>Сторінка О. Потія (+19,1%), LinkedIn (+12,0%) та Instagram (+4,9%)</strong> — лідери зростання.",
        "growth_views": "Найбільший відносний приріст переглядів продемонстрував <strong>Instagram (+82%)</strong>."
      },
      "platforms_detail": {
        "fb": {
          "readers": "71,4 тис.", "readersTrend": "▲ +1 400 до Q1",
          "posts": "172", "postsTrend": "▲ +13,1% до Q1",
          "views": "1,9 млн", "viewsTrend": "▲ +15% до Q1",
          "interactions": "25 588", "interactionsTrend": "▲ +29,2% до Q1",
          "top_posts": [
            { "title": "Держспецзв’язку розширила перелік забороненого ПЗ", "views": "170,8 тис.", "engage": "617 взаємодій" },
            { "title": "Голові Держспецзв'язку присвоєно звання генерал-майора", "views": "145,4 тис.", "engage": "1 200 взаємодій" }
          ]
        },
        "potii": {
          "readers": "579", "readersTrend": "▲ +93 особи до Q1",
          "posts": "12", "postsTrend": "▲ +100% до Q1",
          "views": "37,6 тис.", "viewsTrend": "▼ -15,2% до Q1",
          "interactions": "1 171", "interactionsTrend": "▼ -3% до Q1",
          "top_posts": [
            { "title": "Привітання до Дня Держспецзв’язку", "views": "10,2 тис.", "engage": "230" }
          ],
          "note": "<strong>⚠ Висновок:</strong> Аудиторія стабільно зростає, пости з особистим компонентом мають високу залученість."
        },
        "instagram": {
          "readers": "7 996", "readersTrend": "▲ +374 до Q1",
          "posts": "113", "postsTrend": "▲ +13% до Q1",
          "views": "497,4 тис.", "viewsTrend": "▲ +82% до Q1",
          "interactions": "11 900", "interactionsTrend": "▲ +89% до Q1",
          "top_posts": [
            { "title": "Голові Держспецзв'язку присвоєно звання генерал-майора", "views": "44,1 тис.", "engage": "641 взаємодія" }
          ]
        },
        "telegram": {
          "subscribers": "60 900", "subscribersTrend": "▼ −1 700 до Q1",
          "posts": "167", "postsTrend": "▲ +12% до Q1",
          "views": "≈951 тис.", "viewsTrend": "▼ −0,4% до Q1",
          "interactions": "—", "interactionsTrend": "⚠ Немає метрики",
          "calc_note": "* Розраховано на основі середнього перегляду одного допису (≈5,7 тис.)",
          "top_posts": [
            { "title": "Середні показники по кварталу", "views": "~5,7 тис.", "engage": "" }
          ],
          "note": "<strong>Тренд:</strong> Відтік ще 1 700 підписників продовжує загальнонаціональний спад."
        },
        "x": {
          "readers": "12 767", "readersTrend": "◆ стабільно",
          "posts": "37", "postsTrend": "▲ +19,3% до Q1",
          "views": "—", "viewsTrend": "⚠ Немає метрики",
          "interactions": "—", "interactionsTrend": "⚠ Немає метрики",
          "top_posts": [
            { "title": "CERT-UA tactical pivot by hacking groups. 'Cyber Threats' report", "views": "11 тис.", "engage": "613 взаємодій (199 кліків)" }
          ],
          "note": "<strong>Тренд:</strong> Англомовні релізи про кіберзагрози тримають високу якість залученості."
        },
        "linkedin": {
          "readers": "2 285", "readersTrend": "▲ +245 до Q1",
          "posts": "94", "postsTrend": "▼ −5% до Q1",
          "views": "90,9 тис.", "viewsTrend": "▲ +26% до Q1",
          "interactions": "2 700", "interactionsTrend": "▲ +22% до Q1",
          "top_posts": [
            { "title": "Президент України відзначив військовослужбовців Служби", "views": "2,6 тис.", "engage": "93" }
          ],
          "note": "<strong>Тренд:</strong> Канал стабільно зростає завдяки якісному двомовному контенту."
        },
        "youtube": {
          "subscribers": "3 215", "subscribersTrend": "▲ +55 до Q1",
          "posts": "6", "postsTrend": "▼ −4 до Q1",
          "views": "11,7 тис.", "viewsTrend": "▲ +29% до Q1",
          "watch_time": "822 год", "watch_timeTrend": "▲ +11% до Q1",
          "top_video": "Роз'яснювальні відеоматеріали та інтерв'ю",
          "note": "<strong>Тренд:</strong> Формується постійне лояльне ядро аудиторії довгого відео."
        }
      },
      "site_news_stats": {
        "total_news": "105",
        "views": "30,5 тис.",
        "unique_readers": "—",
        "media_mentions": "312",
        "top_articles": [
          { "title": "Держспецзв’язку суттєво розширила Перелік забороненого ПЗ...", "views": "8 545", "mentions": "16" },
          { "title": "Держспецзв’язку впроваджує єдині підходи до оцінювання...", "views": "1 623", "mentions": "2" },
          { "title": "Експериментальний проєкт електронного обміну «ДСК»", "views": "1 374", "mentions": "1" }
        ],
        "note": "<strong>Синдикація:</strong> Новинна стрічка залишається основним регуляторним першоджерелом."
      },
      "viral_table": [
        { "rank": 1, "platform": "Facebook", "topic": "Держспецзв’язку розширила перелік забороненого ПЗ", "views": "170,8 тис.", "engage": "617", "type": "Регуляторний", "typeClass": "badge" },
        { "rank": 2, "platform": "Instagram", "topic": "Голові Держспецзв'язку присвоєно звання генерал-майора", "views": "44,1 тис.", "engage": "641", "type": "Персональний", "typeClass": "badge green" },
        { "rank": 3, "platform": "X (Twitter)", "topic": "CERT-UA tactical pivot. 'Cyber Threats' report", "views": "11 тис.", "engage": "613", "type": "Кіберзагроза", "typeClass": "badge amber" },
        { "rank": 4, "platform": "FB (О. Потій)", "topic": "Привітання до Дня Держспецзв’язку", "views": "10,2 тис.", "engage": "230", "type": "Персональний", "typeClass": "badge green" },
        { "rank": 5, "platform": "Вебсайт", "topic": "Держспецзв’язку розширила Перелік забороненого ПЗ", "views": "8,5 тис.", "engage": "—", "type": "База знань", "typeClass": "badge green" },
        { "rank": 6, "platform": "Telegram", "topic": "Середні показники по кварталу", "views": "~5,7 тис.", "engage": "—", "type": "–", "typeClass": "badge" },
        { "rank": 7, "platform": "LinkedIn", "topic": "Президент відзначив військовослужбовців", "views": "2,6 тис.", "engage": "93", "type": "Заходи", "typeClass": "badge amber" }
      ],
      "regional_stats": {
        "social_posts": "8",
        "social_posts_note": "зокрема Управлінь в Рівненській, Чернівецькій, Хмельницькій областях",
        "media_posts": "100",
        "media_posts_note": "18 управлінь",
        "summary": "Усього: <strong style='color:var(--white)'>100 публікацій</strong> від 18 управлінь у регіональних медіа та на сайтах ОВА.",
        "table": [
          { "region": "Рівненська", "count": 16 },
          { "region": "Хмельницька", "count": 12 },
          { "region": "Закарпатська", "count": 11 },
          { "region": "Івано-Франківська", "count": 8 },
          { "region": "Чернівецька", "count": 7 },
          { "region": "Решта 13 областей", "count": 46 }
        ],
        "insight": "<strong>Тематика:</strong> навчання, тренінги та лекції з кіберзахисту на місцях. Рівненщина — лідер."
      }
    },

    "Q3": {
      "title": "III Квартал 2026",
      "headerSubtitle": "Аналіз ефективності соціальних мереж, вебсайту та регіональних медіа · Липень–Вересень 2026",
      "badges": {
        "unique": "✓ Унікальний контент 98%",
        "reposts": "↗ Репости 2%",
        "platforms": "6 активних платформ",
        "regions": "17 регіональних управлінь"
      },
      "kpi_views": [
        { "platform": "Facebook", "icon": "📘", "val": "1,1 млн", "trend": "▼ -39%", "trendClass": "down", "note": "до Q2 2026", "featured": true },
        { "platform": "FB — О. Потій", "icon": "👤", "val": "33,6 тис.", "trend": "▼ -11%", "trendClass": "down", "note": "але +49,6% взаємодій" },
        { "platform": "Telegram", "icon": "✉️", "val": "≈731 тис.", "trend": "▼ -23,1%", "trendClass": "down", "note": "5,5 тис./пост" },
        { "platform": "Instagram", "icon": "📸", "val": "447,5 тис.", "trend": "▼ -5%", "trendClass": "down", "note": "до Q2 2026" },
        { "platform": "LinkedIn", "icon": "💼", "val": "60 тис.", "trend": "▼ -30%", "trendClass": "down", "note": "до Q2 2026" },
        { "platform": "cip.gov.ua (Новини)", "icon": "🌐", "val": "17,5 тис.", "trend": "▼ спад", "trendClass": "down", "note": "12,5 тис. читачів", "featured": true },
        { "platform": "X (Twitter)", "icon": "𝕏", "val": "—", "trend": "⚠ 14 дописів", "trendClass": "neutral", "note": "заг. метрика відсутня" },
        { "platform": "YouTube", "icon": "▶️", "val": "0", "trend": "⏸ на паузі", "trendClass": "neutral", "note": "0 нових відео" }
      ],
      "kpi_interactions": [
        { "platform": "Facebook", "icon": "📘", "val": "16 031", "trend": "▼ -34%", "trendClass": "down", "note": "до Q2 2026" },
        { "platform": "FB — О. Потій", "icon": "👤", "val": "4 161", "trend": "▲ +49,6% 🚀", "trendClass": "up", "note": "висока залученість" },
        { "platform": "Instagram", "icon": "📸", "val": "10 763", "trend": "▼ -6,7%", "trendClass": "down", "note": "до Q2 2026" },
        { "platform": "LinkedIn", "icon": "💼", "val": "1 960", "trend": "▼ -28%", "trendClass": "down", "note": "до Q2 2026" },
        { "platform": "Telegram", "icon": "✉️", "val": "—", "trend": "⚠ Метрика відсутня", "trendClass": "neutral", "note": "" },
        { "platform": "X (Twitter)", "icon": "𝕏", "val": "—", "trend": "⚠ Метрика відсутня", "trendClass": "neutral", "note": "" }
      ],
      "kpi_audience": [
        { "platform": "Facebook", "icon": "📘", "val": "71,9 тис.", "trend": "▲ +494", "trendClass": "up", "note": "до Q2 2026" },
        { "platform": "FB — О. Потій", "icon": "👤", "val": "622", "trend": "▲ +43 особи", "trendClass": "up", "note": "до Q2 2026" },
        { "platform": "Telegram", "icon": "✉️", "val": "59 230", "trend": "▼ −1 670", "trendClass": "down", "note": "відтік аудиторії" },
        { "platform": "X (Twitter)", "icon": "𝕏", "val": "12 705", "trend": "▼ −62", "trendClass": "down", "note": "до Q2 2026" },
        { "platform": "Instagram", "icon": "📸", "val": "8 381", "trend": "▲ +385", "trendClass": "up", "note": "до Q2 2026" },
        { "platform": "YouTube", "icon": "▶️", "val": "3 204", "trend": "▼ −11", "trendClass": "down", "note": "до Q2 2026" },
        { "platform": "LinkedIn", "icon": "💼", "val": "2 474", "trend": "▲ +189", "trendClass": "up", "note": "до Q2 2026" }
      ],
      "charts": {
        "audience": {
          "labels": ["Facebook", "Telegram", "X (Twitter)", "Instagram", "YouTube", "LinkedIn", "FB (О.Потій)"],
          "data": [71.9, 59.23, 12.705, 8.381, 3.204, 2.474, 0.622]
        },
        "views_share": {
          "labels": ["Facebook", "Telegram", "Instagram", "LinkedIn", "FB (О.Потій)", "Вебсайт (Новини)"],
          "data": [46.0, 30.6, 18.7, 2.5, 1.4, 0.8]
        },
        "growth_audience": {
          "labels": ["FB (О.Потій)", "LinkedIn", "Instagram", "Facebook", "YouTube", "X (Twitter)", "Telegram"],
          "data": [7.4, 8.3, 4.8, 0.7, -0.3, -0.5, -2.7]
        },
        "growth_views": {
          "labels": ["Instagram", "FB (О.Потій)", "Telegram", "LinkedIn", "Facebook"],
          "data": [-5.0, -11.0, -23.1, -30.0, -39.0]
        },
        "regions": {
          "labels": ["Дніпропетровська", "Чернівецька", "Закарпатська", "Хмельницька", "Полтавська", "Вінницька", "Інші 11 обл."],
          "data": [13, 13, 12, 12, 10, 7, 42]
        }
      },
      "insights": {
        "audience": "<strong>Instagram (+385) та LinkedIn (+189)</strong> продовжують зростати, тоді як Telegram опустився нижче 60 тис. підписників.",
        "views": "<strong>Facebook та Telegram генерують понад 76%</strong> усіх переглядів кварталу.",
        "growth_audience": "<strong>Особиста сторінка Голови (+7,4%) та LinkedIn (+8,3%)</strong> демонструють найвищий темп залучення нових читачів.",
        "growth_views": "Традиційне літнє сезонне зниження активності спричинило від'ємну динаміку переглядів на всіх платформах."
      },
      "platforms_detail": {
        "fb": {
          "readers": "71,9 тис.", "readersTrend": "▲ +494 до Q2",
          "posts": "136", "postsTrend": "▼ −36 до Q2",
          "views": "1,1 млн", "viewsTrend": "▼ −39% до Q2",
          "interactions": "16 031", "interactionsTrend": "▼ −34% до Q2",
          "top_posts": [
            { "title": "CERT-UA фіксує нові хитрощі угруповання Sandworm", "views": "81,9 тис.", "engage": "855 взаємодій" },
            { "title": "Хакерське угруповання UAC-0099 використовує Notepad++", "views": "63,8 тис.", "engage": "407 взаємодій" },
            { "title": "Перелік забороненого ПЗ розширено з 880 до 1079 позицій", "views": "52,2 тис.", "engage": "372 взаємодії" }
          ]
        },
        "potii": {
          "readers": "622", "readersTrend": "▲ +43 особи до Q2",
          "posts": "8", "postsTrend": "▼ −4 до Q2",
          "views": "33,6 тис.", "viewsTrend": "▼ −11% до Q2",
          "interactions": "4 161", "interactionsTrend": "▲ +49,6% 🚀",
          "top_posts": [
            { "title": "В ІСЗЗІ відбувся 29-й випуск офіцерів", "views": "7,2 тис.", "engage": "117" }
          ],
          "note": "<strong>При публікації контенту</strong> зі сторінкою взаємодіє велика кількість людей, які не є підписниками (+49,6% взаємодій)."
        },
        "instagram": {
          "readers": "8 381", "readersTrend": "▲ +385 до Q2",
          "posts": "104", "postsTrend": "▼ −9 до Q2",
          "views": "447,5 тис.", "viewsTrend": "▼ −5% до Q2",
          "interactions": "10 763", "interactionsTrend": "▼ −6,7% до Q2",
          "top_posts": [
            { "title": "Урочисте складання Військової присяги в ІСЗЗІ КПІ", "views": "38,6 тис.", "engage": "904" },
            { "title": "В ІСЗЗІ КПІ відбувся 29-й випуск офіцерів", "views": "26,5 тис.", "engage": "721" },
            { "title": "Професор А. Олексійчук отримав президентську нагороду", "views": "15,2 тис.", "engage": "282" }
          ]
        },
        "telegram": {
          "subscribers": "59 230", "subscribersTrend": "▼ −1 670 до Q2",
          "posts": "133", "postsTrend": "▼ −34 до Q2",
          "views": "≈731 тис.", "viewsTrend": "▼ −23,1% до Q2",
          "interactions": "—", "interactionsTrend": "⚠ Немає метрики",
          "calc_note": "* Розраховано на основі середнього перегляду одного допису (≈5,5 тис., показник падає)",
          "top_posts": [
            { "title": "ШахрайГудбай: шахраї телефонують від імені СБУ", "views": "18,4 тис.", "engage": "24" },
            { "title": "ШахрайГудбай: фейкові виплати за відключення світла", "views": "12,8 тис.", "engage": "27" },
            { "title": "День Військ зв’язку та кібербезпеки ЗСУ", "views": "10,7 тис.", "engage": "130" }
          ],
          "note": "<strong>Резюме:</strong> Телеграм продовжує поступове зниження аудиторії. Користувачі не хочуть читати 'спокійний' контент."
        },
        "x": {
          "readers": "12 705", "readersTrend": "▼ −62 до Q2",
          "posts": "14", "postsTrend": "▼ −23 до Q2",
          "views": "—", "viewsTrend": "⚠ Немає метрики",
          "interactions": "—", "interactionsTrend": "⚠ Немає метрики",
          "top_posts": [
            { "title": "CERT-UA has detected new tactics employed by Sandworm", "views": "898", "engage": "68 взаємодій (20 кліків)" }
          ],
          "note": "<strong>Особливості:</strong> Канал орієнтований виключно на іноземну професійну аудиторію."
        },
        "linkedin": {
          "readers": "2 474", "readersTrend": "▲ +189 до Q2",
          "posts": "66", "postsTrend": "▼ −28 до Q2",
          "views": "60 тис.", "viewsTrend": "▼ −30% до Q2",
          "interactions": "1 960", "interactionsTrend": "▼ −28% до Q2",
          "top_posts": [
            { "title": "O. Potii met with Matthijs van Amelsfort (NCSC-NL MoU)", "views": "2 966", "engage": "97" },
            { "title": "CERT-UA фіксує нові хитрощі угруповання Sandworm", "views": "2 493", "engage": "56" },
            { "title": "В ІСЗЗІ КПІ відбувся 29-й випуск офіцерів", "views": "2 100", "engage": "53" }
          ],
          "note": "<strong>Особливості:</strong> Професійна аудиторія, двомовний формат, висока якість міжнародних контактів."
        },
        "youtube": {
          "subscribers": "3 204", "subscribersTrend": "▼ −11 до Q2",
          "posts": "0", "postsTrend": "▼ −6 до Q2",
          "views": "—", "viewsTrend": "⏸ на паузі",
          "watch_time": "—", "watch_timeTrend": "—",
          "top_video": "У липні-вересні нові відео не оприлюднювалися",
          "note": "<strong>Резюме:</strong> Відсутність нових публікацій призвела до незначного відтоку підписників (-11 осіб)."
        }
      },
      "site_news_stats": {
        "total_news": "102 (66 UA / 36 EN)",
        "views": "17,5 тис.",
        "unique_readers": "12,5 тис.",
        "media_mentions": "103",
        "top_articles": [
          { "title": "Перелік забороненого ПЗ розширено до 1341 позиції", "views": "1 349", "mentions": "6" },
          { "title": "Перелік забороненого ПЗ розширено до 1079 позицій", "views": "1 101", "mentions": "7" },
          { "title": "Держспецзв’язку затвердила Методику оцінювання ризиків", "views": "946", "mentions": "5" }
        ],
        "note": "<strong>Синдикація:</strong> На 102 опубліковані релізи припадає 103 підтверджені згадки у ЗМІ. Найбільший резонанс — заборонене ПЗ та порядки обміну кіберзагрозами."
      },
      "viral_table": [
        { "rank": 1, "platform": "Facebook", "topic": "CERT-UA фіксує нові хитрощі угруповання Sandworm", "views": "81,9 тис.", "engage": "855", "type": "Кіберзагроза", "typeClass": "badge amber" },
        { "rank": 2, "platform": "Facebook", "topic": "Хакерське угруповання UAC-0099 (Notepad++)", "views": "63,8 тис.", "engage": "407", "type": "Кіберзагроза", "typeClass": "badge amber" },
        { "rank": 3, "platform": "Instagram", "topic": "Військова присяга курсантів ІСЗЗІ КПІ", "views": "38,6 тис.", "engage": "904", "type": "Освіта/Події", "typeClass": "badge green" },
        { "rank": 4, "platform": "Telegram", "topic": "ШахрайГудбай: шахраї телефонують від імені СБУ", "views": "18,4 тис.", "engage": "24", "type": "Кібергігієна", "typeClass": "badge" },
        { "rank": 5, "platform": "Вебсайт", "topic": "Перелік забороненого ПЗ розширено до 1341 позиції", "views": "1,3 тис.", "engage": "6 ЗМІ", "type": "Регуляторний", "typeClass": "badge" },
        { "rank": 6, "platform": "FB (О. Потій)", "topic": "В ІСЗЗІ КПІ відбувся 29-й випуск офіцерів", "views": "7,2 тис.", "engage": "117", "type": "Персональний", "typeClass": "badge green" },
        { "rank": 7, "platform": "LinkedIn", "topic": "Зустріч з Matthijs van Amelsfort (NCSC-NL MoU)", "views": "3,0 тис.", "engage": "97", "type": "Міжнародне", "typeClass": "badge" }
      ],
      "regional_stats": {
        "social_posts": "12",
        "social_posts_note": "зокрема Управлінь у Дніпропетровській, Закарпатській, Чернівецькій областях",
        "media_posts": "109",
        "media_posts_note": "17 активних управлінь",
        "summary": "Усього: <strong style='color:var(--white)'>109 публікацій</strong> від 17 управлінь у регіональних медіа та на сайтах ОВА.",
        "table": [
          { "region": "Дніпропетровська", "count": 13 },
          { "region": "Чернівецька", "count": 13 },
          { "region": "Закарпатська", "count": 12 },
          { "region": "Хмельницька", "count": 12 },
          { "region": "Полтавська", "count": 10 },
          { "region": "Вінницька", "count": 7 },
          { "region": "Решта 11 областей", "count": 42 }
        ],
        "insight": "<strong>Тематика:</strong> посилення кіберстійкості та протидія дезінформації. До традиційних лідерів Заходу додалися Дніпропетровщина та Полтавщина."
      }
    }
  }
};