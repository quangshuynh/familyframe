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
    process: 'Các bước',
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
    lead: 'Tấm nào cũng được làm riêng, giữ lại khuôn mặt, bố cục và cảm giác của ảnh gốc.',
    hint: 'Kéo thanh ở giữa ảnh sang trái hoặc phải để so sánh.',
    immersive: {
      eyebrow: 'Tô màu ảnh đen trắng',
      title: 'Màu sắc trở lại, nhưng tấm ảnh vẫn là của ngày ấy.',
      body: 'Nắng trên mái lá, bức tường đá, hoa văn trên tà áo. Màu được tô lại theo từng vùng cho hợp với ánh sáng trong ảnh, chứ không phủ một lớp màu chung chung.',
    },
    rephoto: {
      title: 'Bắt đầu từ một tấm ảnh chụp bằng điện thoại',
      body: 'Nhiều người gửi ảnh chụp lại bằng điện thoại, còn thấy mép giấy với mặt bàn. Tôi cắt gọn, chỉnh thẳng rồi mới phục hồi.',
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
    techniques: {
      colorization: 'Tô màu',
      fadeRestoration: 'Phục hồi màu',
      recrop: 'Cắt lại bố cục',
      personRemoval: 'Xóa người thừa',
      objectRemoval: 'Xóa vật thể',
      eyeCorrection: 'Chỉnh ánh mắt',
      cleanup: 'Làm sạch ảnh',
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
      description: 'Tô màu ảnh đen trắng, làm sạch ảnh và xóa vật thừa ở góc trên bên phải.',
    },
    '15_mother_and_child': {
      title: 'Mẹ và con',
      alt: 'người phụ nữ trẻ bế em bé mặc áo sọc xanh trắng',
      description: 'Phục hồi màu bị phai, làm sạch ảnh và chỉnh lại ánh mắt của bé cho cân hơn.',
    },
    '16_couple_with_baby': {
      title: 'Gia đình nhỏ',
      alt: 'vợ chồng trẻ bế em bé đứng trong nhà',
      description:
        'Phục hồi màu bị phai, cắt lại bố cục, xóa người thừa phía sau và đưa gia đình vào giữa ảnh.',
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
    lead: 'Giá còn tùy tình trạng ảnh. Tôi sẽ xem ảnh và báo giá trước khi làm.',
    plans: {
      standard: {
        name: 'Tiêu chuẩn',
        unit: '/ ảnh',
        summary: 'Hợp với hầu hết ảnh gia đình cũ.',
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
        summary: 'Cho những ảnh cần làm tay kỹ hơn.',
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
      'Bạn biết giá trước khi tôi bắt đầu làm. Hai bên thống nhất xong rồi mới tính chuyện thanh toán.',
    cta: 'Gửi ảnh để tôi báo giá',
  },
  process: {
    eyebrow: 'Các bước',
    title: 'Bốn bước đơn giản, không cần rành kỹ thuật.',
    steps: [
      {
        title: 'Gửi ảnh',
        body: 'Chụp hoặc scan ảnh cũ rồi gửi bản rõ nhất bạn có. Tôi sẽ xem tình trạng ảnh trước.',
      },
      {
        title: 'Xem ảnh & báo giá',
        body: 'Tôi sẽ cho bạn biết ảnh làm được tới đâu và báo giá trước khi bắt đầu. Chỉ khi bạn đồng ý thì tôi mới làm.',
      },
      {
        title: 'Phục hồi ảnh',
        body: 'Tôi cắt, chỉnh, phục hồi và tô màu theo yêu cầu của bạn. Nếu ảnh cần xử lý thêm chi tiết, tôi sẽ nói trước.',
      },
      {
        title: 'Xem lại & nhận file',
        body: 'Bạn được xem lại kết quả và yêu cầu chỉnh những chi tiết chưa đúng trước khi nhận file PNG chất lượng cao.',
      },
    ],
    payment: {
      title: 'Thanh toán sau khi đồng ý giá',
      body: 'Với đơn nhỏ, thanh toán sau khi bạn đồng ý báo giá và trước khi tôi bắt đầu làm. Với đơn lớn, tôi có thể chia thành đặt trước và thanh toán phần còn lại trước khi giao file cuối.',
    },
    tip: {
      title: 'Mẹo khi chụp ảnh bằng điện thoại',
      body: 'Chụp ở chỗ đủ sáng, để điện thoại song song với tấm ảnh và tránh bị lóe đèn trên mặt ảnh.',
    },
    cta: 'Gửi ảnh để xem trước',
  },
  philosophy: {
    eyebrow: 'Cách tôi làm',
    /** One sentence per line on wider screens. */
    title: ['Giữ lại tấm ảnh cũ.', 'Đừng biến nó thành một tấm ảnh mới.'],
    body: 'Mục tiêu không phải là làm cho ảnh nhìn như mới chụp hôm nay. Tôi cố giữ lại khuôn mặt, bố cục, quần áo và cảm giác của ảnh gốc, rồi làm ảnh sạch hơn, rõ hơn và dễ lưu giữ hơn.',
    notesTitle: 'Có vài điều nên biết',
    notes: [
      {
        title: 'Màu sắc là phần được phục dựng',
        body: 'Ảnh đen trắng không ghi lại màu thật. Tôi chọn màu dựa trên ánh sáng, chất liệu, quần áo và bối cảnh trong ảnh để kết quả nhìn tự nhiên và hợp lý.',
      },
      {
        title: 'Có những màu không thể biết chính xác',
        body: 'Màu thật của áo, tường hoặc đồ vật đôi khi không còn cách nào biết chắc. Nếu gia đình còn nhớ, cứ nói tôi biết để tôi chỉnh lại cho gần đúng hơn.',
      },
      {
        title: 'Ảnh hư nhiều sẽ cần phục dựng thêm chi tiết',
        body: 'Nếu ảnh bị rách, mất góc hoặc mất chi tiết, một số phần sẽ phải làm lại dựa trên những gì còn thấy được. Tôi sẽ nói rõ trước nếu ảnh cần xử lý kiểu này.',
      },
    ],
  },
  trust: {
    eyebrow: 'Cam kết',
    title: 'Ảnh của gia đình bạn được giữ gìn cẩn thận.',
    items: [
      {
        title: 'Xử lý cẩn thận',
        body: 'Tấm nào tôi cũng xem kỹ và kiểm tra lại trước khi gửi cho bạn.',
      },
      {
        title: 'Không đăng khi chưa được phép',
        body: 'Tôi chỉ dùng ảnh của bạn làm ví dụ khi bạn đồng ý.',
      },
      {
        title: 'Có thể yêu cầu chỉnh lại',
        body: 'Nếu có chi tiết chưa đúng, như màu áo hay nét mặt, bạn cứ nói để tôi chỉnh lại.',
      },
      {
        title: 'Ảnh gốc vẫn còn nguyên',
        body: 'Tôi không sửa đè lên file bạn gửi. Bạn sẽ nhận lại một file mới, để riêng.',
      },
    ],
  },
  faq: {
    eyebrow: 'Câu hỏi',
    title: 'Những câu hỏi thường gặp',
    items: [
      {
        q: 'Ảnh chụp bằng điện thoại có làm được không?',
        a: 'Được. Miễn ảnh đủ rõ là tôi cắt bỏ nền xung quanh, chỉnh thẳng và làm thành một file ảnh sạch.',
      },
      {
        q: 'Ảnh đen trắng tô màu được không?',
        a: 'Được. Ảnh đen trắng hay ảnh đã ngả nâu đều tô màu được. Tôi chọn màu sao cho tự nhiên và hợp với ánh sáng trong ảnh.',
      },
      {
        q: 'Ảnh bị rách hoặc phai màu có phục hồi được không?',
        a: 'Ảnh làm được tới đâu còn tùy tình trạng ảnh. Phần lớn vết phai, vết xước và nếp gấp đều xử lý được. Bạn cứ gửi ảnh để tôi xem trước nha.',
      },
      {
        q: 'Màu có giống 100% lúc chụp không?',
        a: 'Không phải lúc nào cũng biết chắc màu gốc. Tôi chọn màu sao cho tự nhiên và hợp lý, dựa trên những gì còn thấy trong ảnh.',
      },
      {
        q: 'Tôi sẽ nhận file gì?',
        a: 'File PNG chất lượng cao, để lưu, chia sẻ hay đem đi in đều được.',
      },
      {
        q: 'Làm nhiều ảnh một lần được không?',
        a: 'Được. Gói 10 ảnh giá $100. Nếu bạn có nhiều ảnh hơn, cứ gửi để tôi xem và báo giá.',
      },
      {
        q: 'Bao lâu thì xong?',
        a: 'Còn tùy số lượng và độ khó của ảnh. Xem ảnh xong, tôi sẽ báo thời gian cụ thể trước khi bắt đầu.',
      },
      {
        q: 'Tôi nhờ chỉnh lại được không?',
        a: 'Được. Nếu chỗ phục hồi hay màu sắc chưa đúng, như màu da hay màu áo, bạn cứ nói, tôi chỉnh lại cho.',
      },
    ],
  },
  contact: {
    eyebrow: 'Liên hệ',
    title: 'Bạn có tấm ảnh nào muốn giữ lại không?',
    lead: 'Gửi ảnh cho tôi xem trước. Tôi sẽ cho bạn biết ảnh phục hồi được tới đâu.',
    cta: 'Gửi ảnh để xem trước',
    reassurance:
      'Bạn chưa cần quyết định gì hết. Tôi báo giá trước, rồi bạn coi có muốn làm hay không.',
    attachNote: 'Đính kèm ảnh vào email. Ảnh chụp bằng điện thoại, miễn rõ là được.',
    zalo: 'Nhắn qua Zalo',
    messenger: 'Nhắn qua Messenger',
    /** Pre-filled draft for the main CTA, built by buildMailtoHref. */
    emailSubject: 'Yêu cầu phục hồi ảnh FamilyFrame',
    emailBody:
      'Chào Quang,\n\nTôi muốn nhờ phục hồi một số ảnh gia đình cũ. Tôi sẽ đính kèm ảnh trong email này.\n\nBạn xem giúp tôi ảnh có thể phục hồi như thế nào và báo giá trước khi làm nha.\n\nCảm ơn!',
  },
  footer: {
    tagline: 'Phục hồi, tô màu và số hóa ảnh gia đình cũ.',
    nav: 'Liên kết cuối trang',
    contact: 'Liên hệ',
    copyright: '© {year} FamilyFrame.',
  },
};

export default vi;
