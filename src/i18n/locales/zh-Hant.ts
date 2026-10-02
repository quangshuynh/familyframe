import type { Dictionary } from '../types';

/** Traditional Chinese, written for a Cantonese-speaking (Hong Kong style) family audience. */
const zhHant: Dictionary = {
  meta: {
    title: 'FamilyFrame — 舊家庭相片修復及上色',
    description:
      '為舊家庭相片修復、上色及數碼化。將黑白相、褪色相同紙本相片變成清晰的數碼檔案，留給下一代。',
  },
  skipLink: '跳至主要內容',
  nav: {
    home: 'FamilyFrame，返回頁頂',
    primary: '主選單',
    gallery: '修復前後',
    services: '服務',
    pricing: '價錢',
    process: '流程',
    faq: '常見問題',
    cta: '傳送相片',
    openMenu: '打開選單',
    closeMenu: '關閉選單',
    language: '語言',
  },
  compare: {
    before: '原相',
    after: '修復後',
    slider: '比較原相與修復後的相片',
    valueText: '正在顯示 {value}% 修復後的相片',
    hint: '拖動比較',
    expand: '放大查看：{title}',
  },
  hero: {
    eyebrow: '家庭相片修復',
    title: '留住那些無法再影一次的相片。',
    lead: '為舊家庭相片修復、上色及數碼化：無論是黑白相、褪色相，還是隨歲月變舊的紙本相片。',
    ctaPrimary: '傳相片畀我睇吓',
    ctaSecondary: '睇修復前後',
    chipsLabel: '主要服務',
    chips: ['黑白相上色', '修復褪色及刮痕', '紙本相片數碼化'],
    caption: '結婚相，已修復及上色',
  },
  gallery: {
    eyebrow: '過往作品',
    title: '修復前後',
    lead: '每張相片都會逐張處理，保留原相的面容、構圖同感覺。',
    hint: '左右拖動相片中間的線條作比較。',
    immersive: {
      eyebrow: '黑白相上色',
      title: '色彩回來了，但相片依然屬於那一天。',
      body: '茅屋頂上的陽光、石牆、衣服上的花紋。顏色會按相中的光線逐個部分重建，而不是一層顏色蓋過去。',
    },
    rephoto: {
      title: '由一張手機影的相片開始',
      body: '好多相片都是用手機翻影的，仲見到相紙邊同枱面。每張都會先裁剪、拉正，然後才開始修復。',
    },
    more: {
      title: '更多例子',
      showMore: '顯示更多相片',
      showLess: '收起',
    },
    open: '放大查看：{title}',
    categories: {
      wedding: '結婚相',
      blackWhite: '黑白相',
      family: '家庭相',
      faded: '褪色相片',
      rephotographed: '手機翻影紙本相',
      damaged: '損壞修復',
    },
    techniques: {
      colorization: '上色',
      fadeRestoration: '褪色修復',
      recrop: '重新裁切',
      personRemoval: '移除多餘人物',
      objectRemoval: '移除雜物',
      eyeCorrection: '眼神修正',
      cleanup: '清潔修整',
    },
  },
  lightbox: {
    label: '放大查看',
    close: '關閉',
    previous: '上一張',
    next: '下一張',
    counter: '第 {current} 張，共 {total} 張',
  },
  pairs: {
    '01_fairground': {
      title: '遊樂場一日',
      alt: '一位戴帽的年輕女子站在遊樂場摩天輪前的草地上',
    },
    '02_wedding_preparations': {
      title: '婚禮之前',
      alt: '新郎為戴頭紗的新娘別上襟花，親友站在旁邊',
    },
    '03_tropical_garden': {
      title: '花園裏',
      alt: '一位女子站在種滿熱帶植物的花園中的茅亭旁',
    },
    '04_buddha_family': {
      title: '佛像之下',
      alt: '一群人站在大石上，後面是一尊白色佛像',
    },
    '05_two_friends_full_length': {
      title: '影樓裏的兩位好友',
      alt: '兩位穿白恤衫的少女在影樓花紋地磚上影全身相',
    },
    '06_two_women_garden': {
      title: '盆栽之間',
      alt: '兩位穿花襯衫的女子站在庭院的盆栽之間',
    },
    '07_group_under_tree': {
      title: '大樹下',
      alt: '一班年輕朋友站在大樹下的石頭上',
    },
    '08_badminton_portrait_scan_1': {
      title: '影樓人像',
      alt: '穿花衣的少女坐在格仔地磚上的花瓶旁，手持羽毛球拍',
    },
    '09_two_women_closeup': {
      title: '兩位少女',
      alt: '兩位短髮少女並肩的近鏡人像',
    },
    '10_chien_thang_group': {
      title: 'Chiến Thắng 工場門前',
      alt: '大人和小朋友排成一行，站在掛有 Chiến Thắng 招牌的門口',
    },
    '11_rooftop_portrait': {
      title: '天台上',
      alt: '穿白色上衣和短裙的少女站在有盆花和瓦頂的天台上',
    },
    '12_village_portrait': {
      title: '茅屋旁',
      alt: '穿長衫（奧黛）的女子坐在茅屋前的石牆上',
    },
    '13_badminton_portrait_scan_2': {
      title: '影樓人像（第二次掃描）',
      alt: '穿花衣的少女坐在格仔地磚上的花瓶旁',
    },
    '14_two_girls_studio': {
      title: '影樓裏的兩個女孩',
      alt: '兩個穿同款花衣的小女孩站在影樓的格仔地磚上',
      description: '為黑白照片上色，清潔畫面，並移除右上角分散注意力的物件。',
    },
    '15_mother_and_child': {
      title: '媽媽與孩子',
      alt: '年輕女子抱着穿藍白間條衫的小朋友',
      description: '修復褪色，清潔畫面，並輕微調整孩子的眼神，使其更自然對稱。',
    },
    '16_couple_with_baby': {
      title: '小家庭',
      alt: '年輕夫婦在家中抱着嬰兒',
      description: '修復褪色，重新裁切構圖，移除背景中多餘的人物，讓一家人置於畫面中央。',
    },
    '17_wedding_closeup': {
      title: '新娘與新郎',
      alt: '戴頭紗、手捧紅玫瑰的新娘與新郎的近鏡相',
    },
    '18_wedding_with_parents': {
      title: '與父母的結婚相',
      alt: '新娘新郎站在兩位坐着的長輩身後',
    },
    '19_wedding_four_people': {
      title: '囍字前',
      alt: '新娘、新郎和兩位女子站在囍字背景前',
    },
    '20_lakeside_family': {
      title: '湖邊',
      alt: '女子抱着小朋友坐在湖邊的石頭上',
    },
    '21_two_boys_hedge': {
      title: '樹籬旁的兩個男孩',
      alt: '兩個男孩坐在草地上的綠色樹籬前',
    },
    '22_boy_sky': {
      title: '男孩與天空',
      alt: '穿背心的男孩倚着欄杆，旁邊有一盆花',
    },
    '23_elephant_monument': {
      title: '大象雕像旁',
      alt: '兩個男孩站在大象雕像旁的石座上',
    },
    '24_smiling_girl': {
      title: '笑容',
      alt: '微笑的小女孩站在櫃門旁',
    },
    '25_coastal_woman': {
      title: '海邊石上',
      alt: '女子坐在海邊的岩石上，雙腳浸在海水中',
    },
    '26_woman_with_two_boys': {
      title: '白色長衫',
      alt: '穿白色長衫（奧黛）的女子站在兩個男孩旁邊',
    },
    '27_double_happiness_portrait': {
      title: '貼着囍字的房間',
      alt: '穿長身蕾絲裙的女子站在貼有囍字的房間裏',
    },
  },
  services: {
    eyebrow: '服務',
    title: '我可以為你的相片做甚麼？',
    lead: '每張相片需要的處理都唔同。以下是我最常做的四類工作。',
    items: [
      {
        title: '黑白相上色',
        body: '為黑白相及泛黃舊相加上自然的顏色，同時保留原相的味道。',
      },
      {
        title: '舊相修復',
        body: '減輕褪色、刮痕、污漬、摺痕及輕微損壞，令相片重新乾淨清晰。',
      },
      {
        title: '紙本相片數碼化',
        body: '裁走相邊、枱面或背景，拉正拍攝角度，製作一個整齊的數碼檔案。',
      },
      {
        title: '細節修整',
        body: '適合較複雜的工作：移除礙眼的物件、重建損壞部分、修正眼神，或整體清理。',
      },
    ],
  },
  pricing: {
    eyebrow: '價錢',
    title: '價錢清楚，開始前先報價。',
    lead: '實際價錢會因應相片狀況而有所不同。我會先睇相，報價後才開始。',
    plans: {
      standard: {
        name: '標準',
        unit: '/ 張',
        summary: '適合大部分舊家庭相片。',
        features: [
          '上色或基本修復',
          '調整光暗及顏色',
          '裁走相紙邊框',
          '拉正相片',
          '輸出高質素 PNG 檔案',
        ],
      },
      advanced: {
        name: '進階',
        unit: '/ 張',
        summary: '適合需要更多人手處理的相片。',
        features: [
          '嚴重損壞的相片',
          '移除物件',
          '修補複雜細節',
          '重建缺失部分',
          '修正文字或需要人手處理的部分',
        ],
      },
      bundle: {
        name: '10 張套餐',
        unit: '/ 10 張',
        summary: '適合一整本相簿或一盒家庭舊相。',
        features: [
          '10 張相片，按標準程度處理',
          '每張約 $10',
          '整套相片的顏色及光暗一致',
          '如有相片需要進階處理，我會預先通知',
        ],
      },
    },
    includesLabel: '包括',
    forLabel: '適用於',
    assuranceTitle: '沒有額外收費。',
    assuranceBody: '開始之前你已經知道價錢。雙方確定工作內容後才需要付款。',
    cta: '傳送相片報價',
  },
  process: {
    eyebrow: '處理流程',
    title: '四個簡單步驟，唔使識任何技術。',
    steps: [
      {
        title: '傳相片',
        body: '用手機影低或者掃描舊相，再傳最清楚嗰張畀我。我會先睇相片而家嘅狀況。',
      },
      {
        title: '睇相 & 報價',
        body: '我會先話你知張相大概可以修復到咩程度，再報價。你同意價錢之後我先開始做。',
      },
      {
        title: '修復相片',
        body: '我會按照需要幫相片裁切、清理、修復同上色。如果有啲地方需要較多修補，我會先同你講。',
      },
      {
        title: '睇效果 & 收檔案',
        body: '完成之後你可以先睇效果，如果有明顯需要修改嘅地方可以提出，確認後會收到高質素 PNG 檔案。',
      },
    ],
    payment: {
      title: '確認報價後先付款',
      body: '少量相片通常係確認報價後、開始修復前付款。較大嘅訂單可以分訂金同交付前尾數。',
    },
    tip: {
      title: '用手機影舊相嘅小貼士',
      body: '喺光線充足嘅地方影，相機要同相片保持平行，亦要避免燈光反射喺相面。',
    },
    cta: '傳相片畀我睇吓',
  },
  philosophy: {
    eyebrow: '我的修復方式',
    title: ['保留舊相，', '而不是把它變成新相。'],
    body: '目標不是令相片看起來像今日才影。我會盡量保留原相的面容、構圖、衣着同感覺，同時令相片更乾淨、清晰，更容易保存。',
    notesTitle: '事前要知道的事',
    notes: [
      {
        title: '顏色是重建出來的',
        body: '黑白菲林不會記錄顏色。顏色會根據相中的光線、物料同環境去揀，令效果自然合理。',
      },
      {
        title: '有些顏色無法確定',
        body: '當年衫或牆的顏色有時無法準確得知。如果家人仲記得，話我知，我會照住調整。',
      },
      {
        title: '嚴重損壞需要推斷',
        body: '相片撕爛或缺失的位置，部分細節可能要根據餘下部分重建。這些地方我會事先同你講。',
      },
    ],
  },
  trust: {
    eyebrow: '我的承諾',
    title: '你家人的相片，會被小心對待。',
    items: [
      { title: '細心處理', body: '每張相片都會仔細查看，交回給你之前再檢查一次。' },
      { title: '未經同意不會公開', body: '只有在你同意後，相片才會用作示範例子。' },
      {
        title: '可以要求再修改',
        body: '如果有細節不對，例如衫的顏色或樣貌，話我知，我會再調整。',
      },
      { title: '原相保持不變', body: '你傳來的檔案不會被取代或覆蓋。你會收到一個新的獨立檔案。' },
    ],
  },
  faq: {
    eyebrow: '常見問題',
    title: '常見問題',
    items: [
      {
        q: '用手機影的相片可以處理嗎？',
        a: '可以。只要相片夠清晰，我可以裁走周圍背景、拉正，整理成一個乾淨的圖片檔案。',
      },
      {
        q: '黑白相可以上色嗎？',
        a: '可以。黑白相同泛黃的舊相都可以上色。顏色會重建得自然，並配合相中的光線。',
      },
      {
        q: '撕爛或褪色的相片可以修復嗎？',
        a: '視乎損壞程度。大部分褪色、刮痕及摺痕都可以處理。建議先傳相片給我看看。',
      },
      {
        q: '顏色會和當年百分百一樣嗎？',
        a: '原本的顏色不一定能夠準確確定。目標是根據相中的資料，做出自然合理的顏色。',
      },
      { q: '我會收到甚麼檔案？', a: '高質素 PNG 檔案，適合保存、分享或沖印。' },
      {
        q: '可以一次處理多張相片嗎？',
        a: '可以。10 張套餐收費 $100。如果你有更多相片，傳來給我看看再報價。',
      },
      {
        q: '需要多少時間？',
        a: '視乎相片數量及複雜程度。看過相片後，我會在開始前確認所需時間。',
      },
      {
        q: '可以要求修改嗎？',
        a: '可以。如果修復或顏色有明顯問題，例如膚色或衫的顏色不對，我會幫你修正。',
      },
    ],
  },
  contact: {
    eyebrow: '聯絡',
    title: '有一張想留住的相片嗎？',
    lead: '把相片傳給我。我會先看看，再告訴你可以怎樣修復。',
    cta: '傳相片畀我睇吓',
    reassurance: '你暫時唔需要決定任何事。我會先報價，再由你決定做唔做。',
    attachNote: '請在電郵附上相片。用手機影一張清晰的相已經足夠。',
    zalo: '透過 Zalo 聯絡',
    messenger: '透過 Messenger 聯絡',
    emailSubject: 'FamilyFrame 舊相修復查詢',
    emailBody:
      'Hi Quang，\n\n我想修復幾張屋企嘅舊相，相片會附喺呢封電郵度。\n\n麻煩你睇吓邊啲可以修復，開始之前話我知大概價錢。\n\n多謝！',
  },
  footer: {
    tagline: '舊家庭相片修復、上色及數碼化。',
    nav: '頁尾連結',
    contact: '聯絡',
    copyright: '© {year} FamilyFrame.',
  },
};

export default zhHant;
