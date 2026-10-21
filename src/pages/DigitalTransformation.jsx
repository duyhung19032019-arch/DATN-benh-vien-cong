import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DigitalTransformation = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Trạng thái hover đổi màu nguyên ô cho Tin nổi bật và Bài viết mới nhất
  const [isFeaturedHovered, setIsFeaturedHovered] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const menuItems = [
    { name: 'TRANG CHỦ', path: '/patient-dashboard' },
    {
      name: 'GIỚI THIỆU',
      path: '/about',
      submenu: [
        { name: 'Tổng quan Bệnh viện', path: '/about' },
        { name: 'Sơ đồ tổ chức', path: '/organization-chart' },
        { name: 'Lịch sử hình thành', path: '/history' },
        { name: 'Cơ sở vật chất', path: '/facilities' },
        { name: 'Chuyển đổi số', path: '/digital-transformation' }
      ]
    },
    {
      name: 'THÔNG TIN',
      path: '#',
      submenu: [
        { name: 'Lịch khám bệnh', path: '/medical-schedule' },
        { name: 'Quy trình Khám bệnh', path: '/examination-process' },
        { name: 'Bảng giá Dịch vụ', path: '/service-price-list' },
        { name: 'Thủ tục nhập - xuất viện', path: '/admission-discharge' }
      ]
    },
    {
      name: 'CHUYÊN KHOA',
      path: '#',
      submenu: [
        { name: 'Khoa Nội tổng hợp', path: '/internal-medicine' },
        { name: 'Khoa Ngoại chấn thương', path: '/surgery' }
      ]
    },
    {
      name: 'ĐÀO TẠO & NGHIÊN CỨU',
      path: '#',
      submenu: [{ name: 'Công tác Đào tạo', path: '/training-research' }]
    },
    {
      name: 'TIN TỨC',
      path: '#',
      submenu: [{ name: 'Tin hoạt động bệnh viện', path: '/news' }]
    },
    { name: 'LIÊN HỆ', path: '/contact' }
  ];

  // Bài viết tin nổi bật với nội dung chi tiết dài (khoảng 700 - 900 từ)
  const featuredArticle = {
    title: 'BỆNH VIỆN CÔNG HƯỞNG ỨNG NGÀY CHUYỂN ĐỔI SỐ QUỐC GIA 10/10/2026',
    date: '10/10/2026',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    subtitle: 'Chủ đề: "Chuyển đổi số quốc gia: Từ kiến trúc, nền tảng, dữ liệu đến kết quả thực chất, nâng cao hiệu quả quản trị quốc gia".',
    content: `Thiết thực lập thành tích chào mừng Ngày Chuyển đổi số Quốc gia 10/10/2026, Bệnh viện Công đã tổ chức lễ phát động và triển khai đồng bộ nhiều giải pháp công nghệ thông tin đột phá trong toàn hệ thống, đánh dấu bước ngoặt lịch sử trong công tác khám chữa bệnh và quản trị y tế thông minh.

1. Bối cảnh và Tầm nhìn Chiến lược
Trong xu thế phát triển của cuộc cách mạng công nghiệp lần thứ tư, ngành y tế đóng vai trò then chốt trong việc ứng dụng công nghệ số để phục vụ người dân ngày một tốt hơn. Bệnh viện Công đã xây dựng chiến lược chuyển đổi số toàn diện giai đoạn 2025 - 2030, tầm nhìn 2045 với mục tiêu cốt lõi: Lấy người bệnh làm trung tâm, lấy dữ liệu số làm tài nguyên quan trọng để nâng cao chất lượng chẩn đoán, điều trị và tối ưu hóa quy trình hành chính.

2. Những Thành tựu Đột phá trong Chuyển đổi số Y tế
- Hoàn thiện hệ thống Bệnh án Điện tử (EMR): Bệnh viện đã loại bỏ hoàn toàn bệnh án giấy tại các khoa khám bệnh và nội trú, giúp lưu trữ hồ sơ sức khỏe trọn đời của người bệnh trên hệ thống đám mây bảo mật cao. Bác sĩ có thể tra cứu toàn bộ lịch sử điều trị, kết quả xét nghiệm cũ chỉ trong vài giây.
- Ứng dụng Trí tuệ Nhân tạo (AI) và Big Data: Hệ thống AI hỗ trợ đọc phim X-Quang, cắt lớp vi tính (CT-Scan) và cộng hưởng từ (MRI) được tích hợp sâu, giúp phát hiện sớm các tổn thương nhỏ, khối u ác tính giai đoạn sớm với độ chính xác lên đến 98%.
- Thanh toán Không dùng tiền mặt và Ki-ốt Tự phục vụ: Người bệnh khi đến khám không còn phải xếp hàng dài chờ đợi. Hệ thống ki-ốt tự động nhận diện căn cước công dân gắn chip, in số thứ tự thông minh và hỗ trợ thanh toán qua mã QR, thẻ ngân hàng, ví điện tử một cách nhanh chóng, minh bạch.

3. Kế hoạch và Mục tiêu tương lai
Phát biểu tại lễ phát động, Ban Giám đốc Bệnh viện Công nhấn mạnh rằng chuyển đổi số không chỉ là việc mua sắm trang thiết bị hay phần mềm, mà là sự thay đổi toàn diện về tư duy làm việc của đội ngũ y bác sĩ, nhân viên y tế. Trong thời gian tới, bệnh viện sẽ tiếp tục mở rộng hệ thống khám chữa bệnh từ xa (Telemedicine) kết nối với các trạm y tế tuyến cơ sở, đồng thời ứng dụng trợ lý ảo y tế để hỗ trợ tư vấn sức khỏe 24/7 cho người dân.

Sự kiện hưởng ứng Ngày Chuyển đổi số Quốc gia 10/10/2026 một lần nữa khẳng định quyết tâm của tập thể Bệnh viện Công trong sứ mệnh phụng sự cộng đồng, xây dựng nền y tế hiện đại, minh bạch, hiệu quả và vươn tầm quốc tế.`
  };

  // Danh sách các bài viết mới nhất với nội dung chi tiết phong phú
  const latestArticles = [
    {
      id: 1,
      title: 'BỆNH VIỆN CÔNG HƯỞNG ỨNG NGÀY CHUYỂN ĐỔI SỐ QUỐC GIA 10/10/2026',
      date: '10/10/2026',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
      subtitle: 'Chủ đề: "Chuyển đổi số quốc gia: Từ kiến trúc, nền tảng, dữ liệu đến kết quả thực chất...".',
      content: featuredArticle.content
    },
    {
      id: 2,
      title: '8 DẤU ẤN CHUYỂN ĐỔI SỐ TẠI BỆNH VIỆN CÔNG TRONG 9 THÁNG ĐẦU NĂM 2026',
      date: '08/10/2026',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop',
      subtitle: 'Hưởng ứng Ngày Chuyển đổi số quốc gia 10/10/2026, bệnh viện ghi nhận nhiều kết quả nổi bật...',
      content: `Trong 9 tháng đầu năm 2026, Bệnh viện Công đã đạt được những dấu ấn rực rỡ và toàn diện trong công tác chuyển đổi số y tế, khẳng định vị thế là một trong những đơn vị tiên phong áp dụng công nghệ số công lập.

Dưới sự chỉ đạo sát sao của Ban Giám đốc cùng sự nỗ lực không ngừng nghỉ của Phòng Công nghệ thông tin và các khoa phòng, 8 dấu ấn tiêu biểu bao gồm:
1. Số hóa 100% quy trình khám chữa bệnh ngoại trú, loại bỏ tình trạng ù tắc tại các cửa tiếp đón vào giờ cao điểm.
2. Giảm thời gian chờ đợi trung bình của người bệnh từ 120 phút xuống dưới 30 phút mỗi lượt khám.
3. Triển khai thành công hệ thống định danh y tế điện tử thông qua ứng dụng VNeID và căn cước công dân gắn chip.
4. Đưa vào hoạt động hệ thống cấp phát thuốc tự động bằng mã vạch (Barcode), giảm thiểu tuyệt đối sai sót chuyên môn.
5. Xây dựng phòng họp không giấy kết hợp biểu quyết điện tử trong toàn bộ ban giám đốc và lãnh đạo các khoa.
6. Thiết lập hệ thống hội chẩn trực tuyến chất lượng cao Telemedicine liên thông với các bệnh viện tuyến đầu khu vực Đông Nam Á.
7. Triển khai thành công cổng thông tin chăm sóc khách hàng trực tuyến, giải đáp thắc mắc và trả kết quả xét nghiệm qua app di động.
8. Hoàn thiện hệ thống an toàn thông tin cấp độ 3, bảo vệ tuyệt đối cơ sở dữ liệu y tế riêng tư của hàng triệu người bệnh.

Những thành tựu này là minh chứng sống động cho tinh thần đổi mới, sáng tạo vì sức khỏe và sự hài lòng của người bệnh.`
    },
    {
      id: 3,
      title: 'BỆNH VIỆN CÔNG TRIỂN KHAI PHONG TRÀO "BÌNH DÂN HỌC VỤ SỐ"',
      date: '28/09/2026',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
      subtitle: 'Bệnh viện Công triển khai học tập, đánh giá kiến thức, kỹ năng số cho toàn thể cán bộ, nhân viên...',
      content: `Nhằm nâng cao năng lực số toàn diện, thu hẹp khoảng cách công nghệ và phát huy tinh thần tự học trong đội ngũ y bác sĩ, điều dưỡng, nhân viên hành chính, Bệnh viện Công chính thức phát động phong trào thi đua "Bình dân học vụ số" trong toàn bệnh viện.

Nội dung trọng tâm của phong trào:
- Đào tạo kỹ năng sử dụng phần mềm EMR nâng cao cho 100% y bác sĩ các khoa lâm sàng.
- Trang bị kiến thức phòng chống tấn công mạng, nhận diện email giả mạo và bảo mật thông tin cá nhân cho nhân viên mới.
- Hướng dẫn kỹ năng hỗ trợ người bệnh lớn tuổi sử dụng máy ki-ốt thông minh tại sảnh chờ.
- Tổ chức các cuộc thi tay nghề ứng dụng công nghệ thông tin trong chẩn đoán và điều trị hàng quý.

Phong trào đã nhận được sự hưởng ứng nhiệt liệt từ các cán bộ nhân viên lớn tuổi cho đến các y bác sĩ trẻ, tạo nên một môi trường làm việc năng động, hiện đại, sẵn sàng đáp ứng mọi yêu cầu của nền y tế số hóa.`
    },
    {
      id: 4,
      title: 'BỆNH VIỆN CÔNG TẬP HUẤN AN TOÀN THÔNG TIN & BẢO MẬT DỮ LIỆU Y TẾ',
      date: '14/08/2026',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop',
      subtitle: 'Tập huấn chuyên đề nâng cao nhận thức an ninh mạng và phòng chống mã độc tấn công hệ thống.',
      content: `Dữ liệu y tế và thông tin cá nhân của người bệnh là tài sản tối quan trọng cần được bảo vệ nghiêm ngặt. Vừa qua, Bệnh viện Công phối hợp cùng các chuyên gia an ninh mạng quốc gia tổ chức buổi tập huấn chuyên đề về an toàn thông tin và bảo mật dữ liệu y tế.

Buổi tập huấn tập trung phân tích các phương thức tấn công mạng tinh vi nhắm vào các cơ sở y tế lớn trên thế giới và tại Việt Nam. Các cán bộ quản lý hệ thống mạng của bệnh viện đã thực hành các tình huống giả định ứng phó sự cố rò rỉ dữ liệu, quy trình sao lưu dự phòng (Backup) định kỳ và cách ly thiết bị nhiễm độc mã độc ransomware.

Ban Giám đốc bệnh viện yêu cầu tất cả các khoa phòng tuyệt đối tuân thủ quy chế bảo mật, không sử dụng phần mềm trôi nổi không rõ nguồn gốc trên máy tính làm việc có kết nối hệ thống dữ liệu bệnh viện.`
    },
    {
      id: 5,
      title: 'BỆNH VIỆN CÔNG ĐẨY MẠNH CHUYỂN ĐỔI SỐ TRONG KHÁM CHỮA SỨC KHỎE TOÀN DÂN',
      date: '02/08/2026',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop',
      subtitle: 'Ứng dụng app di động giúp người dân dễ dàng theo dõi hồ sơ sức khỏe cá nhân trọn đời.',
      content: `Với mục tiêu đưa dịch vụ y tế chất lượng cao đến gần hơn với mọi người dân, Bệnh viện Công đã ra mắt phiên bản nâng cấp của ứng dụng di động "Y Tế Công Thông Minh". 

Ứng dụng cung cấp các tính năng vượt trội:
- Đặt lịch khám bệnh từ xa với giáo sư, bác sĩ chuyên khoa chỉ bằng 3 thao tác chạm đơn giản.
- Xem trực tuyến kết quả xét nghiệm máu, siêu âm, X-Quang ngay sau khi có kết quả mà không cần quay lại phòng khám lấy giấy.
- Nhắc lịch uống thuốc định kỳ và theo dõi chỉ số huyết áp, đường huyết tại nhà cho bệnh nhân mạn tính.
- Tích hợp tính năng gọi cấp cứu nhanh (SOS) định vị vị trí người bệnh để đội cấp cứu ngoại viện tiếp cận kịp thời.

Ứng dụng hiện đã có mặt trên cả hai hệ điều hành iOS và Android, thu hút hơn 500.000 lượt tải và sử dụng chỉ sau 3 tháng ra mắt.`
    },
    {
      id: 6,
      title: 'TĂNG CƯỜNG NĂNG LỰC TRUYỀN THÔNG Y TẾ VÀ CHUYỂN ĐỔI SỐ THÔNG MINH',
      date: '20/07/2026',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
      subtitle: 'Hội thảo chuyên đề về đổi mới sáng tạo và truyền thông số trong hệ thống y tế công lập.',
      content: `Hội thảo khoa học với chủ đề "Tăng cường năng lực truyền thông y tế và chuyển đổi số thông minh" do Bệnh viện Công đăng cai tổ chức đã thu hút hơn 300 đại biểu là các nhà quản lý y tế, chuyên gia công nghệ và phóng viên các cơ quan báo chí trung ương.

Tại hội thảo, các đại biểu đã thảo luận sôi nổi về vai trò của truyền thông số trong việc định hướng dư luận xã hội, cung cấp thông tin y học chính thống, phản bác các tin đồn thất thiệt về sức khỏe trên không gian mạng. Đồng thời, hội thảo cũng giới thiệu các mô hình ứng dụng Trí tuệ nhân tạo tạo sinh (GenAI) vào việc biên soạn và lan tỏa các cẩm nang phòng bệnh hữu ích đến vùng sâu vùng xa bằng cả tiếng kinh và tiếng đồng bào dân tộc.`
    }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f9f9f9', margin: 0, padding: 0 }}>
      
      {/* 1. TOP HEADER BAR */}
      <div style={{ width: '100%', backgroundColor: '#fff', borderBottom: '1px solid #ddd', padding: '12px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }} onClick={() => navigate('/patient-dashboard')}>
          <div style={{ backgroundColor: '#006633', color: '#fff', padding: '8px 15px', fontWeight: 'bold', borderRadius: '4px', fontSize: '18px' }}>
            BV CÔNG
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '18px', color: '#006633', fontWeight: 'bold' }}>BỆNH VIỆN CÔNG</h2>
            <p style={{ margin: 0, fontSize: '11px', color: '#666' }}>PUBLIC GENERAL HOSPITAL</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '14px', color: '#333' }}>Xin chào, <b style={{ color: '#006633' }}>{hoTenBenhNhan}</b></span>
          <span style={{ color: '#d9534f', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }} onClick={handleLogout}>
            Đăng xuất
          </span>
        </div>
      </div>

      {/* 2. NAVIGATION MENU */}
      <div style={{ width: '100%', backgroundColor: '#006633', color: '#fff', padding: '0 50px', display: 'flex', gap: '10px', fontWeight: 'bold', fontSize: '14px', position: 'relative', zIndex: 100, boxSizing: 'border-box' }}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{ position: 'relative', padding: '15px 18px', cursor: 'pointer' }}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span 
              style={{ color: item.name === 'GIỚI THIỆU' ? '#ffcc00' : '#fff' }}
              onClick={() => item.path !== '#' && navigate(item.path)}
            >
              {item.name} {item.submenu && ' ▾'}
            </span>

            {item.submenu && activeDropdown === index && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#fff',
                color: '#333',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                borderRadius: '0 0 6px 6px',
                minWidth: '230px',
                borderTop: '3px solid #ffcc00',
                zIndex: 999
              }}>
                {item.submenu.map((sub, subIdx) => (
                  <div
                    key={subIdx}
                    style={{
                      padding: '12px 18px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '13px',
                      fontWeight: 'normal',
                      transition: '0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f7f2'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (sub.path !== '#') navigate(sub.path);
                    }}
                  >
                    {sub.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. NỘI DUNG TRANG CHUYỂN ĐỔI SỐ */}
      <div style={{ width: '100%', padding: '40px 80px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          {/* PHẦN 1: TIN NỔI BẬT */}
          <h2 style={{ fontSize: '32px', color: '#222', marginBottom: '25px', fontWeight: 'bold' }}>Tin nổi bật</h2>
          
          <div 
            onClick={() => setSelectedArticle(featuredArticle)}
            onMouseEnter={() => setIsFeaturedHovered(true)}
            onMouseLeave={() => setIsFeaturedHovered(false)}
            style={{
              // Trỏ chuột vào thì nguyên ô đổi sang màu xanh lá mạ nhẹ (#eef7f2)
              backgroundColor: isFeaturedHovered ? '#eef7f2' : '#fff',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: isFeaturedHovered ? '0 6px 20px rgba(0,102,51,0.15)' : '0 4px 15px rgba(0,0,0,0.06)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '30px',
              padding: '25px',
              alignItems: 'center',
              cursor: 'pointer',
              border: isFeaturedHovered ? '1px solid #006633' : '1px solid #eaeaea',
              marginBottom: '60px',
              transition: 'all 0.25s ease'
            }}
          >
            <div>
              <img 
                src={featuredArticle.image} 
                alt="Tin nổi bật" 
                style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
            <div>
              <h3 
                style={{ 
                  fontSize: '24px', 
                  // Khi hover ô, tiêu đề tự động chuyển màu đỏ
                  color: isFeaturedHovered ? '#d9534f' : '#006633', 
                  marginBottom: '15px', 
                  fontWeight: 'bold', 
                  transition: 'color 0.2s' 
                }}
              >
                {featuredArticle.title}
              </h3>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                {featuredArticle.subtitle}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#777' }}>
                <span>📅 {featuredArticle.date}</span>
                <span style={{ color: '#006633', fontWeight: 'bold' }}>Xem chi tiết &rarr;</span>
              </div>
            </div>
          </div>

          {/* PHẦN 2: BÀI VIẾT MỚI NHẤT */}
          <h2 style={{ fontSize: '32px', color: '#222', marginBottom: '25px', fontWeight: 'bold' }}>Bài viết mới nhất</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
            {latestArticles.map((article) => {
              const isHovered = hoveredCardId === article.id;
              return (
                <div 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  onMouseEnter={() => setHoveredCardId(article.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  style={{
                    // Trỏ chuột vào thì nguyên ô đổi sang màu xanh lá mạ nhẹ (#eef7f2)
                    backgroundColor: isHovered ? '#eef7f2' : '#fff',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: isHovered ? '0 6px 20px rgba(0,102,51,0.15)' : '0 3px 12px rgba(0,0,0,0.05)',
                    border: isHovered ? '1px solid #006633' : '1px solid #eaeaea',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div>
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '20px' }}>
                      <h4 
                        style={{ 
                          fontSize: '16px', 
                          // Khi hover ô, tiêu đề chuyển màu đỏ
                          color: isHovered ? '#d9534f' : '#006633', 
                          marginBottom: '12px', 
                          fontWeight: 'bold', 
                          lineHeight: '1.4', 
                          transition: 'color 0.2s' 
                        }}
                      >
                        {article.title}
                      </h4>
                      <p style={{ color: '#666', fontSize: '13.5px', lineHeight: '1.5', margin: 0 }}>
                        {article.subtitle}
                      </p>
                    </div>
                  </div>
                  <div style={{ padding: '0 20px 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#777' }}>
                    <span>📅 {article.date}</span>
                    <span style={{ color: '#006633', fontWeight: 'bold' }}>Xem chi tiết &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* MODAL HIỂN THỊ BÀI VIẾT THẬT (CHI TIẾT 600 - 1000 TỪ) */}
      {selectedArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#fff',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            borderRadius: '12px',
            overflowY: 'auto',
            padding: '40px',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <button 
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#666',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>

            <span style={{ backgroundColor: '#006633', color: '#fff', padding: '5px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
              CHUYỂN ĐỔI SỐ Y TẾ
            </span>
            <h2 style={{ fontSize: '26px', color: '#006633', margin: '15px 0 10px 0', lineHeight: '1.3' }}>
              {selectedArticle.title}
            </h2>
            <p style={{ color: '#884400', fontSize: '14px', marginBottom: '20px' }}>
              📅 Ngày đăng: {selectedArticle.date} | Tác giả: Ban Biên tập Cổng thông tin Bệnh viện Công
            </p>

            <img 
              src={selectedArticle.image} 
              alt="Chi tiết bài viết" 
              style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '8px', marginBottom: '25px' }}
            />

            <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '15px', fontStyle: 'italic' }}>
              {selectedArticle.subtitle}
            </h4>

            <div style={{ color: '#444', fontSize: '16px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
              {selectedArticle.content}
            </div>

            <div style={{ marginTop: '30px', textAlign: 'right' }}>
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{
                  backgroundColor: '#006633',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 25px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Đóng bài viết
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '60px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default DigitalTransformation;