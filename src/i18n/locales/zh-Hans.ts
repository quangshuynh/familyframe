import type { Dictionary } from '../types';

/** Simplified Chinese, written for a Mandarin-speaking audience. */
const zhHans: Dictionary = {
  meta: {
    title: 'FamilyFrame — 老家庭照片修复与上色',
    description:
      '为老家庭照片提供修复、上色和数字化服务。把黑白照片、褪色照片和纸质照片变成清晰的数字文件，长久保存。',
  },
  skipLink: '跳到主要内容',
  nav: {
    home: 'FamilyFrame，返回顶部',
    primary: '主导航',
    gallery: '修复前后',
    services: '服务',
    pricing: '价格',
    process: '流程',
    faq: '常见问题',
    cta: '发送照片',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    language: '语言',
  },
  compare: {
    before: '原照片',
    after: '修复后',
    slider: '对比原照片和修复后的照片',
    valueText: '当前显示 {value}% 修复后的照片',
    hint: '拖动对比',
    expand: '查看大图：{title}',
  },
  hero: {
    eyebrow: '家庭照片修复',
    title: '留住那些无法重拍的照片。',
    lead: '为老家庭照片修复、上色和数字化：无论是黑白照片、褪色照片，还是随岁月变旧的纸质照片。',
    ctaPrimary: '发送照片，先看效果',
    ctaSecondary: '查看修复前后',
    chipsLabel: '主要服务',
    chips: ['黑白照片上色', '修复褪色和划痕', '纸质照片数字化'],
    caption: '结婚照，已修复并上色',
  },
  gallery: {
    eyebrow: '过往作品',
    title: '修复前后',
    lead: '每张照片都单独处理，保留原照片的面容、构图和感觉。',
    hint: '左右拖动照片中间的分隔线进行对比。',
    immersive: {
      eyebrow: '黑白照片上色',
      title: '色彩回来了，但照片依然属于那一天。',
      body: '茅草屋顶上的阳光、石墙、衣服上的花纹。颜色按照片中的光线逐个区域重建，而不是简单地盖上一层颜色。',
    },
    rephoto: {
      title: '从一张手机翻拍的照片开始',
      body: '很多照片是用手机翻拍的，还能看到相纸边缘和桌面。每一张都会先裁剪、校正，然后再开始修复。',
    },
    more: {
      title: '更多案例',
      showMore: '显示更多照片',
      showLess: '收起',
    },
    open: '查看大图：{title}',
    categories: {
      wedding: '结婚照',
      blackWhite: '黑白照片',
      family: '家庭照片',
      faded: '褪色照片',
      rephotographed: '手机翻拍的纸质照片',
      damaged: '损坏修复',
    },
    techniques: {
      colorization: '上色',
      fadeRestoration: '褪色修复',
      recrop: '重新裁切',
      personRemoval: '移除多余人物',
      objectRemoval: '移除杂物',
      eyeCorrection: '眼神修正',
      cleanup: '清洁修整',
    },
  },
  lightbox: {
    label: '查看大图',
    close: '关闭',
    previous: '上一张',
    next: '下一张',
    counter: '第 {current} 张，共 {total} 张',
  },
  pairs: {
    '01_fairground': {
      title: '游乐场的一天',
      alt: '一位戴帽子的年轻女子站在游乐场摩天轮前的草地上',
    },
    '02_wedding_preparations': {
      title: '婚礼之前',
      alt: '新郎为戴头纱的新娘别上胸花，亲人站在一旁',
    },
    '03_tropical_garden': {
      title: '花园里',
      alt: '一位女子站在种满热带植物的花园里的草亭旁',
    },
    '04_buddha_family': {
      title: '佛像之下',
      alt: '一群人站在大石头上，身后是一尊白色佛像',
    },
    '05_two_friends_full_length': {
      title: '照相馆里的两位好友',
      alt: '两位穿白衬衫的年轻女子在照相馆的花砖地上拍全身照',
    },
    '06_two_women_garden': {
      title: '盆栽之间',
      alt: '两位穿印花上衣的女子站在院子里的盆栽之间',
    },
    '07_group_under_tree': {
      title: '大树下',
      alt: '一群年轻朋友站在大树下的岩石上',
    },
    '08_badminton_portrait_scan_1': {
      title: '照相馆人像',
      alt: '穿花衣的年轻女子坐在格子地砖上的花瓶旁，手拿羽毛球拍',
    },
    '09_two_women_closeup': {
      title: '两位年轻女子',
      alt: '两位短发年轻女子并肩的特写人像',
    },
    '10_chien_thang_group': {
      title: 'Chiến Thắng 工坊门前',
      alt: '大人和孩子排成一排，站在挂着 Chiến Thắng 招牌的门口',
    },
    '11_rooftop_portrait': {
      title: '天台上',
      alt: '穿白色上衣和短裙的年轻女子站在摆着盆花、有瓦屋顶的天台上',
    },
    '12_village_portrait': {
      title: '茅草屋旁',
      alt: '穿奥黛的女子坐在茅草屋前的石墙上',
    },
    '13_badminton_portrait_scan_2': {
      title: '照相馆人像（第二次扫描）',
      alt: '穿花衣的年轻女子坐在格子地砖上的花瓶旁',
    },
    '14_two_girls_studio': {
      title: '照相馆里的两个女孩',
      alt: '两个穿同款花衣的小女孩站在照相馆的格子地砖上',
      description: '为黑白照片上色，清洁画面，并移除右上角分散注意力的物件。',
    },
    '15_mother_and_child': {
      title: '妈妈和孩子',
      alt: '年轻女子抱着穿蓝白条纹衫的小孩',
      description: '修复褪色，清洁画面，并轻微调整孩子的眼神，使其更自然对称。',
    },
    '16_couple_with_baby': {
      title: '小家庭',
      alt: '年轻夫妇在家中抱着婴儿',
      description: '修复褪色，重新裁切构图，移除背景中多余的人物，让一家人位于画面中央。',
    },
    '17_wedding_closeup': {
      title: '新娘和新郎',
      alt: '戴头纱、手捧红玫瑰的新娘与新郎的特写',
    },
    '18_wedding_with_parents': {
      title: '和父母的结婚照',
      alt: '新娘新郎站在两位坐着的长辈身后',
    },
    '19_wedding_four_people': {
      title: '囍字前',
      alt: '新娘、新郎和两位女子站在囍字背景前',
    },
    '20_lakeside_family': {
      title: '湖边',
      alt: '女子抱着小孩坐在湖边的石头上',
    },
    '21_two_boys_hedge': {
      title: '树篱旁的两个男孩',
      alt: '两个男孩坐在草地上的绿色树篱前',
    },
    '22_boy_sky': {
      title: '男孩和天空',
      alt: '穿背心的男孩靠着栏杆，旁边有一盆花',
    },
    '23_elephant_monument': {
      title: '大象雕像旁',
      alt: '两个男孩站在大象雕像旁的石座上',
    },
    '24_smiling_girl': {
      title: '笑容',
      alt: '微笑的小女孩站在柜门旁',
    },
    '25_coastal_woman': {
      title: '海边礁石上',
      alt: '女子坐在海边的礁石上，双脚浸在海水里',
    },
    '26_woman_with_two_boys': {
      title: '白色奥黛',
      alt: '穿白色奥黛的女子站在两个男孩旁边',
    },
    '27_double_happiness_portrait': {
      title: '贴着囍字的房间',
      alt: '穿长款蕾丝裙的女子站在贴着囍字的房间里',
    },
  },
  services: {
    eyebrow: '服务',
    title: '我能为你的照片做些什么？',
    lead: '每张照片需要的处理都不一样。以下是我最常做的四类工作。',
    items: [
      {
        title: '黑白照片上色',
        body: '为黑白照片和泛黄老照片加上自然的颜色，同时保留原照片的韵味。',
      },
      {
        title: '老照片修复',
        body: '减轻褪色、划痕、污渍、折痕和轻微损坏，让照片重新干净清晰。',
      },
      {
        title: '纸质照片数字化',
        body: '裁掉相纸边框、桌面或背景，校正拍摄角度，生成一个整洁的数字文件。',
      },
      {
        title: '细节精修',
        body: '适合更复杂的工作：去除杂乱物体、重建损坏区域、修正眼神，或整体清理。',
      },
    ],
  },
  pricing: {
    eyebrow: '价格',
    title: '价格透明，开始前先报价。',
    lead: '具体价格会根据照片状况有所不同。我会先看照片，报价后再开始。',
    plans: {
      standard: {
        name: '标准',
        unit: '/ 张',
        summary: '适合大多数老家庭照片。',
        features: [
          '上色或基础修复',
          '调整亮度和颜色',
          '裁掉相纸边框',
          '校正照片角度',
          '导出高质量 PNG 文件',
        ],
      },
      advanced: {
        name: '进阶',
        unit: '/ 张',
        summary: '适合需要更多手工处理的照片。',
        features: [
          '严重损坏的照片',
          '去除物体',
          '修复复杂细节',
          '重建缺失区域',
          '修正文字或需要手工处理的部分',
        ],
      },
      bundle: {
        name: '10 张套餐',
        unit: '/ 10 张',
        summary: '适合一整本相册或一盒家庭老照片。',
        features: [
          '10 张照片，按标准级别处理',
          '每张约 $10',
          '整组照片的颜色和亮度统一',
          '如有照片需要进阶处理，我会提前告知',
        ],
      },
    },
    includesLabel: '包括',
    forLabel: '适用于',
    assuranceTitle: '没有意外收费。',
    assuranceBody: '开始之前你就知道价格。双方确认工作内容后才需要付款。',
    cta: '发送照片获取报价',
  },
  process: {
    eyebrow: '流程',
    title: '三个简单步骤，不需要任何技术知识。',
    steps: [
      { title: '发送照片', body: '用手机拍下或扫描老照片，发送你手上最清晰的版本。' },
      { title: '由我修复', body: '按照你的要求进行裁剪、调整、修复和上色。' },
      { title: '接收文件', body: '收到高质量 PNG 文件，可以保存、分享或重新冲印。' },
    ],
    tipTitle: '用手机翻拍照片的小技巧',
    tip: '在光线充足的地方拍摄，手机与照片保持平行，并避开灯光反光。',
  },
  philosophy: {
    eyebrow: '我的修复方式',
    title: '保留老照片，而不是把它变成新照片。',
    body: '目标不是让照片看起来像今天才拍的。我会尽量保留原照片的面容、构图、衣着和感觉，同时让照片更干净、清晰，也更容易保存。',
    notesTitle: '事先需要了解的',
    notes: [
      {
        title: '颜色是重建出来的',
        body: '黑白胶片不会记录颜色。颜色根据照片中的光线、材质和环境来选择，力求自然合理。',
      },
      {
        title: '有些颜色无法确定',
        body: '当年衣服或墙壁的颜色有时无法准确知道。如果家人还记得，请告诉我，我会按照调整。',
      },
      {
        title: '严重损坏需要推断',
        body: '照片撕裂或缺失的地方，细节需要根据剩余部分重新绘制。这些地方我会提前告诉你。',
      },
    ],
  },
  trust: {
    eyebrow: '我的承诺',
    title: '你家人的照片，会被认真对待。',
    items: [
      { title: '细心处理', body: '每张照片都会仔细查看，交付之前再检查一遍。' },
      { title: '未经允许不会公开', body: '只有在你同意后，照片才会用作展示案例。' },
      { title: '可以要求修改', body: '如果有细节不对，比如衣服颜色或面容，告诉我，我会再调整。' },
      { title: '原照片保持不变', body: '你发来的文件不会被替换或覆盖。你会收到一个新的独立文件。' },
    ],
  },
  faq: {
    eyebrow: '常见问题',
    title: '常见问题',
    items: [
      {
        q: '用手机拍的照片可以处理吗？',
        a: '可以。只要照片足够清晰，我可以裁掉周围背景、校正角度，整理成一个干净的图片文件。',
      },
      {
        q: '黑白照片可以上色吗？',
        a: '可以。黑白照片和泛黄的老照片都能上色。颜色会重建得自然，并与照片中的光线相符。',
      },
      {
        q: '撕破或褪色的照片能修复吗？',
        a: '要看损坏程度。大部分褪色、划痕和折痕都可以处理。建议先把照片发给我看看。',
      },
      {
        q: '颜色会和当年百分之百一样吗？',
        a: '原本的颜色不一定能准确确定。目标是根据照片中的信息，还原出自然合理的颜色。',
      },
      { q: '我会收到什么文件？', a: '高质量 PNG 文件，适合保存、分享或冲印。' },
      {
        q: '可以一次处理多张照片吗？',
        a: '可以。10 张套餐价格为 $100。如果你有更多照片，发给我看看再报价。',
      },
      {
        q: '需要多长时间？',
        a: '取决于照片数量和复杂程度。看过照片后，我会在开始前确认所需时间。',
      },
      {
        q: '可以要求修改吗？',
        a: '可以。如果修复或颜色有明显问题，比如肤色或衣服颜色不对，我会帮你修正。',
      },
    ],
  },
  contact: {
    eyebrow: '联系',
    title: '有一张想留住的照片吗？',
    lead: '把照片发给我。我会先看看，再告诉你可以怎样修复。',
    cta: '发送照片，先看效果',
    reassurance: '你现在不需要做任何决定。我先报价，再由你决定是否开始。',
    attachNote: '请在邮件中附上照片。用手机拍一张清晰的照片就够了。',
    zalo: '通过 Zalo 联系',
    messenger: '通过 Messenger 联系',
    emailSubject: '发送照片预览（FamilyFrame）',
    emailBody:
      '你好，\n\n我想修复家庭照片，照片已附在这封邮件中。\n\n我想要：上色 / 修复 / 数字化 / 还不确定\n其他信息（衣服颜色、想保留的细节等）：\n\n谢谢。',
  },
  footer: {
    tagline: '老家庭照片修复、上色与数字化。',
    nav: '页脚链接',
    contact: '联系',
    copyright: '© {year} FamilyFrame.',
  },
};

export default zhHans;
