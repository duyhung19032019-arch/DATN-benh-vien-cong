import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrainingResearch = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

  // State quản lý bài viết đang được chọn xem chi tiết toàn văn
  const [selectedArticle, setSelectedArticle] = useState(null);

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
      path: '/training-research',
      submenu: [{ name: 'Công tác Đào tạo & Hội thảo', path: '/training-research' }]
    },
    {
      name: 'TIN TỨC',
      path: '#',
      submenu: [{ name: 'Tin hoạt động bệnh viện', path: '/news' }]
    },
    { name: 'LIÊN HỆ', path: '/contact' }
  ];

  // Dữ liệu danh sách bài viết chi tiết để khi bấm vào hiện toàn văn đầy đủ
  const articlesList = [
    {
      id: 1,
      title: 'Hội thảo khoa học và dự thảo chiến lược phát triển kỹ thuật cao trong phẫu thuật ngoại khoa năm 2026',
      date: '15/10/2026',
      author: 'Ban Đào tạo & Nghiên cứu khoa học',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop',
      summary: 'Bệnh viện Công vừa tổ chức thành công buổi hội thảo chuyên đề và phiên họp dự thảo các hướng dẫn lâm sàng mới. Sự kiện quy tụ các chuyên gia đầu ngành nhằm trao đổi, đánh giá hiệu quả ứng dụng công nghệ rô-bốt trong phẫu thuật nội soi...',
      content: `
        Bệnh viện Công vừa phối hợp cùng Hội đồng Khoa học Y tế thành phố tổ chức thành công hội thảo chuyên đề: "Chiến lược phát triển kỹ thuật cao và ứng dụng công nghệ số trong phẫu thuật ngoại khoa năm 2026". Tham dự buổi hội thảo có sự góp mặt của hơn 200 giáo sư, bác sĩ, chuyên gia đầu ngành trong và ngoài nước.

        1. Đánh giá kết quả ứng dụng kỹ thuật cao trong thời gian qua:
        Trong giai đoạn vừa qua, Bệnh viện Công đã triển khai thành công hàng loạt kỹ thuật khó như thay khớp nhân tạo bán phần/toàn phần, phẫu thuật nội soi khớp gối phức tạp và ứng dụng hệ thống định vị hình ảnh C-Arm trong kết hợp xương ít xâm lấn. Tỷ lệ thành công đạt trên 98%, đem lại niềm hy vọng lớn cho hàng ngàn người bệnh.

        2. Nội dung phiên họp dự thảo chiến lược 2026 - 2030:
        - Thống nhất mở rộng quy mô phòng mổ thông minh tích hợp trí tuệ nhân tạo (AI).
        - Đẩy mạnh công tác đào tạo chuyển giao kỹ thuật cho các bệnh viện tuyến dưới theo đúng định hướng nâng cao chất lượng y tế công lập.
        - Xây dựng trung tâm mô phỏng phẫu thuật nội soi hiện đại phục vụ công tác huấn luyện cho các bác sĩ nội trú.

        Phát biểu tại buổi lễ, đại diện Ban Giám đốc bệnh viện nhấn mạnh: "Công tác nghiên cứu khoa học và đào tạo liên tục phải luôn đi đôi với thực tiễn lâm sàng. Chúng ta không chỉ chữa bệnh cứu người bằng y đức mà còn phải bằng cả tư duy khoa học đổi mới sáng tạo và sự nhạy bén với công nghệ toàn cầu."
      `
    },
    {
      id: 2,
      title: 'Buổi dự thảo quy chuẩn đánh giá năng lực thực hành cho bác sĩ nội trú và học viên sau đại học',
      date: '10/10/2026',
      author: 'Phòng Quản lý Đào tạo',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
      summary: 'Hội đồng khoa học và đào tạo Bệnh viện Công đã tiến hành phiên họp dự thảo toàn thể nhằm thống nhất các tiêu chí đánh giá lâm sàng, chuẩn hóa giáo trình giảng dạy thực hành lâm sàng cho các bác sĩ trẻ năm học 2026 - 2027...',
      content: `
        Nhằm chuẩn hóa chất lượng đào tạo nguồn nhân lực y tế chất lượng cao, Phòng Quản lý Đào tạo phối hợp cùng các bộ môn lâm sàng đã tổ chức phiên họp dự thảo bộ tiêu chuẩn đánh giá năng lực thực hành y khoa dựa trên chuẩn quốc tế.

        Các điểm cốt lõi trong bản dự thảo bao gồm:
        - Đánh giá năng lực toàn diện qua 4 trụ cột: Kiến thức chuyên môn, Kỹ năng thực hành thủ thuật, Thái độ giao tiếp ứng xử với người bệnh và Tư duy nghiên cứu khoa học.
        - Áp dụng sổ tay nhật ký lâm sàng điện tử (e-Logbook) giúp theo dõi sát sao tiến trình học tập của từng học viên.
        - Tăng cường thời lượng thực hành xử trí các tình huống cấp cứu giả định tại trung tâm mô phỏng trước khi tiếp xúc trực tiếp với người bệnh tại buồng khám.

        Bản dự thảo sẽ tiếp tục được lấy ý kiến đóng góp rộng rãi từ các khoa phòng trong toàn viện trước khi chính thức ban hành áp dụng từ quý tới.
      `
    },
    {
      id: 3,
      title: 'Nghiên cứu ứng dụng trí tuệ nhân tạo (AI) trong chẩn đoán hình ảnh X-quang phổi tại bệnh viện',
      date: '28/09/2026',
      author: 'Khoa Chẩn đoán Hình ảnh',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
      summary: 'Đề tài nghiên cứu khoa học cấp cơ sở do Khoa Chẩn đoán Hình ảnh chủ trì đã công bố những số liệu ấn tượng về độ chính xác khi tích hợp hệ thống AI hỗ trợ phát hiện sớm các tổn thương phổi...',
      content: `
        Tại hội nghị báo cáo kết quả nghiên cứu khoa học định kỳ, nhóm nghiên cứu thuộc Khoa Chẩn đoán Hình ảnh đã trình bày đề tài: "Hiệu quả của việc ứng dụng mô hình học sâu (Deep Learning) hỗ trợ phát hiện các dấu hiệu bất thường trên phim X-quang ngực thẳng".

        Kết quả nghiên cứu thực hiện trên hơn 10.000 ca chụp cho thấy:
        - Hệ thống trợ lý ảo AI giúp giảm tới 35% thời gian đọc phim sơ bộ cho bác sĩ chẩn đoán.
        - Tăng độ nhạy trong việc phát hiện các tổn thương mờ nhỏ, nốt đơn độc hoặc dấu hiệu tràn dịch màng phổi ở giai đoạn sớm.
        - Hỗ trợ đắc lực cho các bác sĩ tuyến cơ sở trong việc sàng lọc nhanh các bệnh lý đường hô hấp cộng đồng.

        Đề tài được hội đồng khoa học đánh giá xuất sắc và được đề xuất nhân rộng mô hình ra toàn hệ thống khám chữa bệnh của bệnh viện.
      `
    },
    {
      id: 4,
      title: 'Bản dự thảo chiến lược hợp tác quốc tế trong nghiên cứu thử nghiệm lâm sàng dược phẩm thế hệ mới',
      date: '15/09/2026',
      author: 'Ban Đối ngoại & Hợp tác Quốc tế',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
      summary: 'Buổi làm việc giữa Ban giám đốc Bệnh viện Công và các phái đoàn y tế quốc tế nhằm thông qua bản dự thảo hợp tác nghiên cứu thử nghiệm lâm sàng giai đoạn 3...',
      content: `
        Nhằm khẳng định vị thế là trung tâm y tế nghiên cứu thử nghiệm lâm sàng đạt chuẩn quốc tế (GCP), Bệnh viện Công đã tiến hành thảo luận và thông qua bản dự thảo thỏa thuận hợp tác chiến lược với các viện nghiên cứu dược phẩm hàng đầu châu Âu và châu Á.

        Nội dung trọng tâm của bản dự thảo:
        - Triển khai thử nghiệm lâm sàng giai đoạn 3 đối với các dòng thuốc điều trị ung thư và bệnh lý tim mạch thế hệ mới.
        - Đảm bảo tuân thủ nghiêm ngặt các quy định về đạo đức trong nghiên cứu y sinh học theo chuẩn mực toàn cầu.
        - Tạo điều kiện cho người bệnh tại Việt Nam được tiếp cận sớm với các liệu pháp điều trị tiên tiến với chi phí được hỗ trợ tối đa từ các quỹ nghiên cứu quốc tế.
      `
    }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fff', margin: 0, padding: 0, fontFamily: 'Roboto, sans-serif' }}>
      
      {/* TOP HEADER */}
      <div style={{ width: '100%', backgroundColor: '#fff', borderBottom: '1px solid #ddd', padding: '12px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }} onClick={() => navigate('/patient-dashboard')}>
          <div style={{ backgroundColor: '#006633', color: '#fff', padding: '8px 15px', fontWeight: 'bold', borderRadius: '4px', fontSize: '18px' }}>BV CÔNG</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '18px', color: '#006633', fontWeight: 'bold' }}>BỆNH VIỆN CÔNG</h2>
            <p style={{ margin: 0, fontSize: '11px', color: '#666' }}>PUBLIC GENERAL HOSPITAL</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '14px', color: '#333' }}>Xin chào, <b style={{ color: '#006633' }}>{hoTenBenhNhan}</b></span>
          <span style={{ color: '#d9534f', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }} onClick={handleLogout}>Đăng xuất</span>
        </div>
      </div>

      {/* NAVIGATION MENU */}
      <div style={{ width: '100%', backgroundColor: '#006633', color: '#fff', padding: '0 50px', display: 'flex', gap: '10px', fontWeight: 'bold', fontSize: '14px', position: 'relative', zIndex: 100, boxSizing: 'border-box' }}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{ position: 'relative', padding: '15px 18px', cursor: 'pointer' }}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span style={{ color: item.name === 'ĐÀO TẠO & NGHIÊN CỨU' ? '#ffcc00' : '#fff' }} onClick={() => item.path !== '#' && navigate(item.path)}>
              {item.name} {item.submenu && ' ▾'}
            </span>
            {item.submenu && activeDropdown === index && (
              <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#fff', color: '#333', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', borderRadius: '0 0 6px 6px', minWidth: '230px', borderTop: '3px solid #ffcc00', zIndex: 999 }}>
                {item.submenu.map((sub, subIdx) => (
                  <div key={subIdx} style={{ padding: '12px 18px', borderBottom: '1px solid #f0f0f0', fontSize: '13px', color: '#333', cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); if (sub.path !== '#') navigate(sub.path); }}>
                    {sub.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BANNER TIÊU ĐỀ */}
      <div style={{ width: '100%', backgroundColor: '#006633', color: '#fff', padding: '50px 0', textAlign: 'center', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '42px', margin: 0, fontWeight: '800' }}>Đào tạo & Nghiên cứu Khoa học</h1>
      </div>

      {/* NỘI DUNG CHÍNH */}
      <div style={{ maxWidth: '1200px', margin: '50px auto', padding: '0 20px', boxSizing: 'border-box' }}>
        
        {/* PHẦN 1: BÀI VIẾT NỔI BẬT (BÀI SỐ 1) */}
        <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', borderBottom: '3px solid #006633', paddingBottom: '10px' }}>
          Hội thảo & Buổi dự thảo chuyên môn nổi bật
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '35px', alignItems: 'center', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '12px', border: '1px solid #eaeaea', marginBottom: '50px' }}>
          <div>
            <img 
              src={articlesList[0].image} 
              alt="Hội thảo y khoa" 
              style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div>
            <span style={{ fontSize: '13px', color: '#666', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>📅 {articlesList[0].date} | {articlesList[0].author}</span>
            <h3 style={{ fontSize: '22px', color: '#006633', margin: '0 0 15px 0', fontWeight: 'bold', lineHeight: '1.4' }}>
              {articlesList[0].title}
            </h3>
            <p style={{ color: '#444', lineHeight: '1.8', fontSize: '15px', marginBottom: '20px' }}>
              {articlesList[0].summary}
            </p>
            <button 
              onClick={() => setSelectedArticle(articlesList[0])}
              style={{ backgroundColor: '#006633', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}
            >
              Xem chi tiết toàn văn →
            </button>
          </div>
        </div>

        {/* PHẦN 2: CÁC BÀI BÁO & DỰ THẢO KHÁC */}
        <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', borderBottom: '3px solid #006633', paddingBottom: '10px' }}>
          Bài báo & Bản dự thảo nghiên cứu khoa học
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
          {articlesList.slice(1).map((item) => (
            <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '25px', backgroundColor: '#fff', border: '1px solid #e0e0e0', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', alignItems: 'center' }}>
              <img 
                src={item.image} 
                alt={item.title} 
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <div>
                <span style={{ fontSize: '12px', color: '#666', fontWeight: 'bold' }}>📅 {item.date} | {item.author}</span>
                <h4 style={{ fontSize: '18px', color: '#006633', margin: '6px 0 10px 0', fontWeight: 'bold' }}>
                  {item.title}
                </h4>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', margin: '0 0 15px 0' }}>
                  {item.summary}
                </p>
                <span 
                  onClick={() => setSelectedArticle(item)}
                  style={{ color: '#d9534f', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Đọc toàn văn bài báo & tài liệu dự thảo →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL HIỂN THỊ TOÀN VĂN BÀI VIẾT KHI BẤM XEM CHI TIẾT */}
      {selectedArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '20px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#fff',
            maxWidth: '850px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '10px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            position: 'relative',
            boxSizing: 'border-box'
          }}>
            {/* Nút đóng modal */}
            <button 
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: '#d9534f',
                color: '#fff',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            <span style={{ fontSize: '13px', color: '#666', fontWeight: 'bold' }}>📅 {selectedArticle.date} — Đăng bởi: {selectedArticle.author}</span>
            <h2 style={{ color: '#006633', fontSize: '26px', fontWeight: 'bold', margin: '12px 0 20px 0', lineHeight: '1.3' }}>
              {selectedArticle.title}
            </h2>

            <img 
              src={selectedArticle.image} 
              alt={selectedArticle.title} 
              style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', marginBottom: '25px' }}
            />

            <div style={{ color: '#333', fontSize: '16px', lineHeight: '1.9', whiteSpace: 'pre-line' }}>
              {selectedArticle.content}
            </div>

            <div style={{ marginTop: '40px', textAlign: 'right', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{ backgroundColor: '#6c757d', color: '#fff', border: 'none', padding: '10px 25px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}
              >
                Đóng bài viết
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '60px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default TrainingResearch;