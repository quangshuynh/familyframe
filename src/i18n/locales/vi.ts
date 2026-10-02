/**
 * Vietnamese is the source locale. Its shape defines the Dictionary type that
 * every other locale must satisfy (see ../types.ts).
 */
const vi = {
  meta: {
    title: 'FamilyFrame — Phục hồi & tô màu ảnh gia đình cũ',
    description:
      'Phục hồi, tô màu và số hóa ảnh gia đình cũ. Biến ảnh đen trắng, ảnh phai màu và ảnh giấy thành file kỹ thuật số rõ đẹp để lưu giữ lâu dài.',
  },
  skipLink: 'Bỏ qua, đến nội dung chính',
  nav: {
    home: 'FamilyFrame, về đầu trang',
    primary: 'Điều hướng chính',
    gallery: 'Trước & sau',
    services: 'Dịch vụ',
    pricing: 'Bảng giá',
    process: 'Cách hoạt động',
    faq: 'Câu hỏi',
    cta: 'Gửi ảnh',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    language: 'Ngôn ngữ',
  },
  compare: {
    before: 'Ảnh gốc',
    after: 'Sau phục hồi',
    slider: 'So sánh ảnh gốc và ảnh sau phục hồi',
    valueText: 'Đang hiện {value}% ảnh sau phục hồi',
    hint: 'Kéo để so sánh',
    expand: 'Xem lớn: {title}',
  },
  hero: {
    eyebrow: 'Phục hồi ảnh gia đình',
    title: 'Giữ lại những tấm ảnh không thể chụp lại lần hai.',
    lead: 'Phục hồi, tô màu và số hóa ảnh gia đình cũ: ảnh đen trắng, ảnh phai màu, hay những tấm ảnh giấy đã cũ theo năm tháng.',
    ctaPrimary: 'Gửi ảnh để xem trước',
    ctaSecondary: 'Xem ảnh trước & sau',
    chipsLabel: 'Các dịch vụ chính',
    chips: ['Tô màu ảnh đen trắng', 'Phục hồi ảnh phai, xước', 'Số hóa ảnh giấy'],
    caption: 'Ảnh cưới, phục hồi và tô màu',
  },
  gallery: {
    eyebrow: 'Ví dụ đã làm',
    title: 'Trước và sau',
    lead: 'Mỗi tấm ảnh được xử lý riêng, giữ lại khuôn mặt, bố cục và cảm giác của ảnh gốc.',
    hint: 'Kéo thanh ở giữa ảnh sang trái hoặc phải để so sánh.',
    immersive: {
      eyebrow: 'Tô màu ảnh đen trắng',
      title: 'Màu sắc trở lại, nhưng tấm ảnh vẫn là của ngày ấy.',
      body: 'Nắng trên mái lá, bức tường đá, hoa văn trên tà áo. Màu được dựng lại theo từng vùng để hợp với ánh sáng trong ảnh, thay vì phủ một lớp màu đồng đều.',
    },
    rephoto: {
      title: 'Bắt đầu từ một tấm ảnh chụp bằng điện thoại',
      body: 'Nhiều ảnh gửi đến là ảnh chụp lại, còn thấy mép giấy và mặt bàn. Ảnh được cắt gọn, chỉnh thẳng rồi mới phục hồi.',
    },
    more: {
      title: 'Thêm ví dụ',
      showMore: 'Xem thêm ảnh',
      showLess: 'Thu gọn',
    },
    open: 'Mở ảnh lớn: {title}',
    categories: {
      wedding: 'Ảnh cưới',
      blackWhite: 'Ảnh đen trắng',
      family: 'Ảnh gia đình',
      faded: 'Ảnh bị phai màu',
      rephotographed: 'Ảnh chụp lại từ ảnh giấy',
      damaged: 'Phục hồi hư hỏng',
    },
  },
  lightbox: {
    label: 'Xem ảnh lớn',
    close: 'Đóng',
    previous: 'Ảnh trước',
    next: 'Ảnh tiếp theo',
    counter: 'Ảnh {current} / {total}',
  },
  pairs: {
    '01_fairground': {
      title: 'Dạo khu vui chơi',
      alt: 'người phụ nữ trẻ đội mũ đứng trên bãi cỏ trước một vòng quay ở khu vui chơi',
    },
    '02_wedding_preparations': {
      title: 'Trước giờ cưới',
      alt: 'chú rể cài hoa cho cô dâu đội voan, người thân đứng bên cạnh',
    },
    '03_tropical_garden': {
      title: 'Trong vườn nhà',
      alt: 'người phụ nữ đứng cạnh chòi lá giữa khu vườn nhiều cây nhiệt đới',
    },
    '04_buddha_family': {
      title: 'Bên tượng Phật',
      alt: 'một nhóm người đứng trên tảng đá lớn, phía sau là tượng Phật trắng',
    },
    '05_two_friends_full_length': {
      title: 'Hai người bạn ở tiệm ảnh',
      alt: 'hai cô gái mặc áo sơ mi trắng chụp toàn thân trên nền gạch hoa trong tiệm ảnh',
    },
    '06_two_women_garden': {
      title: 'Giữa những chậu cây',
      alt: 'hai người phụ nữ mặc áo hoa đứng giữa những chậu cây trong sân',
    },
    '07_group_under_tree': {
      title: 'Dưới tán cây',
      alt: 'một nhóm bạn trẻ đứng trên tảng đá dưới tán cây lớn',
    },
    '08_badminton_portrait_scan_1': {
      title: 'Chân dung ở tiệm ảnh',
      alt: 'cô gái mặc đồ hoa ngồi bên bình hoa trên nền gạch caro, cầm vợt cầu lông',
    },
    '09_two_women_closeup': {
      title: 'Hai cô gái',
      alt: 'chân dung cận mặt của hai cô gái tóc ngắn đứng sát bên nhau',
    },
    '10_chien_thang_group': {
      title: 'Trước tổ sản xuất Chiến Thắng',
      alt: 'người lớn và trẻ em đứng thành hàng trước cửa có biển Chiến Thắng',
    },
    '11_rooftop_portrait': {
      title: 'Trên sân thượng',
      alt: 'cô gái mặc áo trắng, váy ngắn đứng trên sân thượng có chậu hoa và mái ngói',
    },
    '12_village_portrait': {
      title: 'Bên nhà mái lá',
      alt: 'người phụ nữ mặc áo dài ngồi trên bờ tường đá trước căn nhà mái lá',
    },
    '13_badminton_portrait_scan_2': {
      title: 'Chân dung ở tiệm ảnh, bản thứ hai',
      alt: 'cô gái mặc đồ hoa ngồi bên bình hoa trên nền gạch caro',
    },
    '14_two_girls_studio': {
      title: 'Hai bé gái ở tiệm ảnh',
      alt: 'hai bé gái mặc bộ đồ hoa giống nhau đứng trên nền gạch caro trong tiệm ảnh',
    },
    '15_mother_and_child': {
      title: 'Mẹ và con',
      alt: 'người phụ nữ trẻ bế em bé mặc áo sọc xanh trắng',
    },
    '16_couple_with_baby': {
      title: 'Gia đình nhỏ',
      alt: 'vợ chồng trẻ bế em bé trong nhà, bên cạnh là một bé gái mặc áo vàng',
    },
    '17_wedding_closeup': {
      title: 'Cô dâu và chú rể',
      alt: 'chân dung cận mặt cô dâu đội voan cầm hoa hồng đỏ bên chú rể',
    },
    '18_wedding_with_parents': {
      title: 'Ảnh cưới cùng cha mẹ',
      alt: 'cô dâu chú rể đứng phía sau hai người lớn tuổi đang ngồi',
    },
    '19_wedding_four_people': {
      title: 'Bên chữ Song Hỷ',
      alt: 'cô dâu, chú rể và hai người phụ nữ đứng trước phông có chữ Song Hỷ',
    },
    '20_lakeside_family': {
      title: 'Bên hồ',
      alt: 'người phụ nữ ôm em bé ngồi trên tảng đá bên mặt hồ',
    },
    '21_two_boys_hedge': {
      title: 'Hai cậu bé bên hàng rào',
      alt: 'hai cậu bé ngồi trước hàng rào cây xanh trên bãi cỏ',
    },
    '22_boy_sky': {
      title: 'Cậu bé và bầu trời',
      alt: 'cậu bé mặc áo ba lỗ đứng tựa lan can cạnh chậu hoa',
    },
    '23_elephant_monument': {
      title: 'Bên tượng voi',
      alt: 'hai cậu bé đứng trên bệ đá cạnh một tượng voi',
    },
    '24_smiling_girl': {
      title: 'Nụ cười',
      alt: 'bé gái mỉm cười đứng cạnh cánh cửa tủ',
    },
    '25_coastal_woman': {
      title: 'Trên ghềnh đá',
      alt: 'người phụ nữ ngồi trên ghềnh đá, chân chạm nước biển',
    },
    '26_woman_with_two_boys': {
      title: 'Áo dài trắng',
      alt: 'người phụ nữ mặc áo dài trắng đứng cạnh hai cậu bé',
    },
    '27_double_happiness_portrait': {
      title: 'Trong căn phòng có chữ Hỷ',
      alt: 'người phụ nữ mặc đầm ren dài đứng trong phòng trang trí chữ Hỷ',
    },
  },
  services: {
    eyebrow: 'Dịch vụ',
    title: 'Tôi có thể làm gì với ảnh của bạn?',
    lead: 'Mỗi tấm ảnh cần một cách xử lý khác nhau. Đây là bốn việc tôi làm thường xuyên nhất.',
    items: [
      {
        title: 'Tô màu ảnh đen trắng',
        body: 'Tô màu tự nhiên cho ảnh đen trắng và ảnh ngả nâu, giữ nguyên nét riêng của tấm ảnh gốc.',
      },
      {
        title: 'Phục hồi ảnh cũ',
        body: 'Giảm phai màu, vết xước, vết ố, nếp gấp và những hư hỏng nhỏ để ảnh sạch và rõ hơn.',
      },
      {
        title: 'Số hóa ảnh giấy',
        body: 'Cắt bỏ viền ảnh, mặt bàn hay nền xung quanh, chỉnh thẳng góc chụp và tạo một file ảnh kỹ thuật số gọn gàng.',
      },
      {
        title: 'Chỉnh sửa chi tiết',
        body: 'Cho những việc cần làm kỹ hơn: xóa vật thể gây rối mắt, dựng lại vùng bị hỏng, chỉnh ánh mắt hoặc làm sạch tổng thể.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Bảng giá',
    title: 'Giá rõ ràng, báo trước khi làm.',
    lead: 'Giá chính xác có thể thay đổi tùy tình trạng ảnh. Tôi sẽ xem ảnh trước và báo giá trước khi làm.',
    plans: {
      standard: {
        name: 'Tiêu chuẩn',
        unit: '/ ảnh',
        summary: 'Phù hợp với phần lớn ảnh gia đình cũ.',
        features: [
          'Tô màu hoặc phục hồi cơ bản',
          'Chỉnh sáng và màu',
          'Cắt viền ảnh giấy',
          'Chỉnh thẳng ảnh',
          'Xuất file PNG chất lượng cao',
        ],
      },
      advanced: {
        name: 'Nâng cao',
        unit: '/ ảnh',
        summary: 'Cho những ảnh cần làm thủ công nhiều hơn.',
        features: [
          'Ảnh hư hỏng nhiều',
          'Xóa vật thể',
          'Sửa chi tiết phức tạp',
          'Phục hồi vùng bị mất',
          'Chỉnh chữ hoặc những phần cần làm tay',
        ],
      },
      bundle: {
        name: 'Gói 10 ảnh',
        unit: '/ 10 ảnh',
        summary: 'Cho cả một album hoặc một hộp ảnh của gia đình.',
        features: [
          '10 ảnh, xử lý như mức Tiêu chuẩn',
          'Khoảng $10 cho mỗi ảnh',
          'Màu và độ sáng đồng đều giữa các ảnh',
          'Nếu có ảnh cần mức Nâng cao, tôi sẽ báo trước',
        ],
      },
    },
    includesLabel: 'Bao gồm',
    forLabel: 'Dành cho',
    assuranceTitle: 'Không có phí bất ngờ.',
    assuranceBody:
      'Bạn biết giá trước khi tôi bắt đầu. Việc thanh toán chỉ diễn ra sau khi hai bên đã thống nhất công việc.',
    cta: 'Gửi ảnh để báo giá',
  },
  process: {
    eyebrow: 'Cách hoạt động',
    title: 'Ba bước đơn giản, không cần biết gì về kỹ thuật.',
    steps: [
      { title: 'Gửi ảnh', body: 'Chụp hoặc scan ảnh cũ và gửi bản rõ nhất bạn có.' },
      {
        title: 'Tôi phục hồi',
        body: 'Ảnh được cắt, chỉnh, phục hồi và tô màu tùy theo yêu cầu.',
      },
      {
        title: 'Nhận file',
        body: 'Nhận lại ảnh PNG chất lượng cao để lưu, chia sẻ hoặc in lại.',
      },
    ],
    tipTitle: 'Mẹo khi chụp ảnh bằng điện thoại',
    tip: 'Chụp ở nơi đủ sáng, đặt điện thoại song song với tấm ảnh và tránh đèn phản chiếu trên mặt ảnh.',
  },
  philosophy: {
    eyebrow: 'Cách tôi phục hồi',
    title: 'Giữ lại ảnh cũ, không biến nó thành ảnh mới.',
    body: 'Mục tiêu không phải làm ảnh trông như được chụp hôm nay. Tôi cố giữ khuôn mặt, bố cục, quần áo và cảm giác của ảnh gốc, đồng thời làm cho ảnh sạch, rõ và dễ lưu giữ hơn.',
    notesTitle: 'Vài điều nên biết trước',
    notes: [
      {
        title: 'Màu sắc là sự dựng lại',
        body: 'Ảnh đen trắng không lưu lại thông tin màu. Màu được chọn dựa trên ánh sáng, chất liệu và bối cảnh trong ảnh để trông tự nhiên và hợp lý.',
      },
      {
        title: 'Không phải màu nào cũng biết chắc',
        body: 'Màu áo hay màu tường ngày ấy đôi khi không thể biết chính xác. Nếu gia đình còn nhớ, bạn cứ cho tôi biết để tôi chỉnh theo.',
      },
      {
        title: 'Chỗ hư nặng cần diễn giải',
        body: 'Ở những vùng bị rách hoặc mất hẳn, chi tiết được vẽ lại dựa trên phần còn lại của ảnh. Tôi sẽ nói trước với bạn những chỗ như vậy.',
      },
    ],
  },
  trust: {
    eyebrow: 'Cam kết',
    title: 'Ảnh của gia đình bạn được giữ gìn cẩn thận.',
    items: [
      {
        title: 'Xử lý cẩn thận',
        body: 'Mỗi tấm ảnh được xem kỹ và kiểm tra lại trước khi gửi cho bạn.',
      },
      {
        title: 'Không đăng khi chưa được phép',
        body: 'Ảnh của bạn chỉ được dùng làm ví dụ khi bạn đồng ý.',
      },
      {
        title: 'Có thể yêu cầu chỉnh lại',
        body: 'Nếu có chi tiết chưa đúng, như màu áo hay nét mặt, bạn cứ nói để tôi chỉnh lại.',
      },
      {
        title: 'Ảnh gốc vẫn còn nguyên',
        body: 'File bạn gửi không bị thay thế hay ghi đè. Bạn nhận một file mới, riêng biệt.',
      },
    ],
  },
  faq: {
    eyebrow: 'Câu hỏi',
    title: 'Những câu hỏi thường gặp',
    items: [
      {
        q: 'Ảnh chụp bằng điện thoại có làm được không?',
        a: 'Có. Miễn là ảnh đủ rõ, tôi có thể cắt bỏ nền xung quanh, chỉnh thẳng và làm thành một file ảnh sạch.',
      },
      {
        q: 'Ảnh đen trắng có thể tô màu không?',
        a: 'Có. Cả ảnh đen trắng và ảnh đã ngả nâu đều tô màu được. Màu được dựng lại sao cho tự nhiên và hợp với ánh sáng trong ảnh.',
      },
      {
        q: 'Ảnh bị rách hoặc phai màu có phục hồi được không?',
        a: 'Tùy mức độ hư hỏng. Phần lớn vết phai, vết xước và nếp gấp đều xử lý được. Bạn nên gửi ảnh để tôi xem trước.',
      },
      {
        q: 'Màu có giống 100% lúc chụp không?',
        a: 'Không phải lúc nào cũng xác định được màu gốc chính xác. Mục tiêu là tạo màu tự nhiên và hợp lý dựa trên thông tin có trong ảnh.',
      },
      {
        q: 'Tôi nhận file gì?',
        a: 'File PNG chất lượng cao, phù hợp để lưu trữ, chia sẻ hoặc mang đi in.',
      },
      {
        q: 'Có thể làm nhiều ảnh cùng lúc không?',
        a: 'Có. Gói 10 ảnh có giá $100. Nếu bạn có nhiều ảnh hơn, cứ gửi để tôi xem và báo giá.',
      },
      {
        q: 'Bao lâu thì xong?',
        a: 'Tùy số lượng và độ phức tạp của ảnh. Sau khi xem ảnh, tôi sẽ báo thời gian cụ thể trước khi bắt đầu.',
      },
      {
        q: 'Tôi có thể yêu cầu chỉnh sửa lại không?',
        a: 'Được. Nếu có lỗi rõ ràng về phục hồi hoặc màu sắc, chẳng hạn màu da hay màu áo chưa đúng, tôi sẽ chỉnh lại cho bạn.',
      },
    ],
  },
  contact: {
    eyebrow: 'Liên hệ',
    title: 'Có một tấm ảnh bạn muốn giữ lại?',
    lead: 'Gửi ảnh cho tôi. Tôi sẽ xem trước và cho bạn biết ảnh có thể phục hồi như thế nào.',
    cta: 'Gửi ảnh để xem trước',
    reassurance: 'Bạn chưa cần quyết định gì. Tôi báo giá trước, rồi bạn chọn có làm hay không.',
    attachNote: 'Đính kèm ảnh vào email. Một bản chụp rõ bằng điện thoại là đủ.',
    zalo: 'Nhắn qua Zalo',
    messenger: 'Nhắn qua Messenger',
    emailSubject: 'Gửi ảnh để xem trước (FamilyFrame)',
    emailBody:
      'Xin chào,\n\nTôi muốn phục hồi ảnh gia đình và đã đính kèm ảnh trong email này.\n\nTôi muốn: tô màu / phục hồi / số hóa / chưa rõ\nGhi chú thêm (màu áo, chi tiết cần giữ...):\n\nCảm ơn bạn.',
  },
  footer: {
    tagline: 'Phục hồi, tô màu và số hóa ảnh gia đình cũ.',
    nav: 'Liên kết cuối trang',
    contact: 'Liên hệ',
    copyright: '© {year} FamilyFrame.',
  },
};

export default vi;
