import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Facilities = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);

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

  const slideData = [
    {
      img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1000&auto=format&fit=crop',
      title: 'Hệ thống cơ sở vật chất đồng bộ, hiện đại',
      content1: 'Bệnh viện Công là bệnh viện đa khoa tuyến cuối, được đầu tư cơ sở vật chất đồng bộ, hiện đại, đáp ứng yêu cầu khám chữa bệnh chất lượng cao cho nhân dân.',
      content2: 'Bệnh viện tọa lạc tại khu đất rộng rãi, các khối nhà chức năng được quy hoạch khoa học, thuận tiện cho công tác chuyên môn và người bệnh đến khám, điều trị.',
      facilitiesList: [
        'Các khối nhà khám bệnh, điều trị nội trú và ngoại trú khang trang',
        'Khu điều trị chuyên sâu, hồi sức tích cực (ICU)',
        'Khu khám bệnh theo yêu cầu và dịch vụ y tế chất lượng cao',
        'Hệ thống phòng mổ, phòng thủ thuật đạt tiêu chuẩn vô trùng khắt khe'
      ],
      detailArticle: `Bệnh viện Công được xây dựng theo mô hình y tế thông minh, xanh - sạch - đẹp và thân thiện với người bệnh. Toàn bộ khuôn viên được bố trí hệ thống cây xanh điều hòa không khí, các khu vực đỗ xe rộng rãi, hệ thống bảng chỉ dẫn điện tử thông minh giúp người dân dễ dàng di chuyển giữa các khoa phòng.\n\nĐặc biệt, hệ thống xử lý nước thải y tế và rác thải nguy hại được đầu tư công nghệ tiên tiến nhất hiện nay, đảm bảo tiêu chuẩn môi trường khắt khe. Các khối nhà được kết nối liên hoàn bằng hệ thống hành lang có mái che, thang máy tốc độ cao và hệ thống cấp điện dự phòng liên tục 24/7, đảm bảo an toàn tuyệt đối cho mọi hoạt động chuyên môn cứu chữa người bệnh.`
    },
    {
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
      title: 'Khu khám bệnh đa khoa & Cận lâm sàng',
      content1: 'Khu vực tiếp đón và khám bệnh được thiết kế thông thoáng, rộng rãi, áp dụng công nghệ số hóa giúp giảm thiểu thời gian chờ đợi của người bệnh.',
      content2: 'Hệ thống các phòng xét nghiệm, chẩn đoán hình ảnh được trang bị các thiết bị y tế nhập khẩu trực tiếp từ các nước phát triển như Đức, Mỹ, Nhật Bản.',
      facilitiesList: [
        'Hệ thống máy chụp cắt lớp vi tính (CT-Scan) 512 lát cắt',
        'Máy chụp cộng hưởng từ (MRI) 3.0 Tesla siêu nét',
        'Hệ thống xét nghiệm tự động robot tốc độ cao',
        'Khu vực ghế chờ rộng rãi, tiện nghi, điều hòa 2 chiều'
      ],
      detailArticle: `Khu khám bệnh được ứng dụng triệt để mô hình lấy người bệnh làm trung tâm. Quy trình đăng ký khám bệnh được số hóa hoàn toàn thông qua cây kiosk tự phục vụ, ứng dụng đặt lịch trực tuyến và căn cước công dân gắn chip.\n\nHệ thống cận lâm sàng hoạt động khép kín với các trang thiết bị tối tân giúp phát hiện sớm và chính xác các tổn thương nhỏ nhất. Các bác sĩ có thể hội chẩn trực tuyến ngay tại phòng khám với các chuyên gia đầu ngành trong và ngoài nước thông qua hệ thống Telemedicine.`
    },
    {
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop',
      title: 'Khu điều trị nội trú tiêu chuẩn quốc tế',
      content1: 'Các phòng bệnh nội trú được thiết kế theo mô hình khách sạn bệnh viện, mang lại cảm giác thư thái, thoải mái như ở nhà cho người bệnh trong suốt quá trình lưu trú.',
      content2: 'Mỗi giường bệnh đều được trang bị hệ thống oxy trung tâm, chuông gọi điều dưỡng khẩn cấp và các tiện ích sinh hoạt hiện đại.',
      facilitiesList: [
        'Phòng bệnh dịch vụ đơn, phòng VIP tiêu chuẩn cao cấp',
        'Hệ thống điều hòa không khí vô trùng kháng khuẩn',
        'Đội ngũ điều dưỡng chăm sóc túc trực 24/7',
        'Không gian xanh sạch, yên tĩnh hỗ trợ tối đa quá trình hồi phục'
      ],
      detailArticle: `Khu nội trú của bệnh viện bao gồm nhiều phân khúc từ tiêu chuẩn đến cao cấp và VIP, đáp ứng đa dạng nhu cầu của người bệnh. Mỗi phòng bệnh đều được thiết kế tối ưu hóa ánh sáng tự nhiên, trang bị tivi, tủ lạnh, nhà vệ sinh riêng biệt có nước nóng lạnh.\n\nChế độ dinh dưỡng cho người bệnh nội trú được thiết kế riêng biệt theo từng bệnh lý bởi các chuyên gia dinh dưỡng hàng đầu và được phục vụ tận giường, đảm bảo an toàn vệ sinh thực phẩm và hỗ trợ hiệu quả phác đồ điều trị của bác sĩ.`
    },
    {
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
      title: 'Trung tâm Phẫu thuật & Hồi sức Tích cực (ICU)',
      content1: 'Khu vực phẫu thuật gồm hệ thống phòng mổ áp lực dương hiện đại bậc nhất, đảm bảo môi trường vô trùng tuyệt đối cho các ca đại phẫu phức tạp.',
      content2: 'Khoa Hồi sức tích cực được trang bị đầy đủ các máy thở cao cấp, thiết bị tuần hoàn ngoài cơ thể (ECMO) và hệ thống theo dõi trung tâm.',
      facilitiesList: [
        'Phòng mổ thông minh tích hợp hệ thống nội soi 4K/8K',
        'Hệ thống lọc khí Hepa tiêu chuẩn phòng sạch quốc tế',
        'Trang thiết bị hỗ trợ duy trì sự sống thế hệ mới nhất',
        'Đảm bảo an toàn tối đa cho các ca phẫu thuật tim mạch, thần kinh, ghép tạng'
      ],
      detailArticle: `Trung tâm Phẫu thuật và Hồi sức tích cực là hạt nhân chuyên môn cao cấp của Bệnh viện Công. Hệ thống phòng mổ thông minh tích hợp camera truyền hình trực tuyến phục vụ công tác đào tạo và hội chẩn chuyên sâu.\n\nKhu vực ICU áp dụng quy trình kiểm soát nhiễm khuẩn nghiêm ngặt tuyệt đối, hạn chế tối đa nguy cơ nhiễm trùng chéo. Đội ngũ y bác sĩ hồi sức cấp cứu túc trực 24/24, làm chủ các kỹ thuật hồi sức tiên tiến nhất thế giới như lọc máu liên tục, ECMO, thở máy nhân tạo nâng cao.`
    }
  ];

  useEffect(() => {
    if (!showFullContent) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideData.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slideData.length, showFullContent]);

  // Khi đổi slide thì thu gọn bài viết chi tiết lại
  const handleSlideChange = (idx) => {
    setCurrentSlide(idx);
    setShowFullContent(false);
  };

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
          <span style={{ fontSize: '14px', color: '#333' }}>Xin chào, <b>{hoTenBenhNhan}</b></span>
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

      {/* 3. BANNER TIÊU ĐỀ TRANG */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(135deg, #006633 0%, #004d26 100%)',
        color: '#fff',
        padding: '40px 50px',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ fontSize: '36px', margin: '0 0 10px 0', fontWeight: '800' }}>CƠ SỞ VẬT CHẤT BỆNH VIỆN CÔNG</h1>
        <p style={{ fontSize: '16px', opacity: '0.9', maxWidth: '900px', margin: '0 auto' }}>
          Hệ thống hạ tầng đồng bộ, trang thiết bị tiên tiến phục vụ công tác khám chữa bệnh chất lượng cao
        </p>
      </div>

      {/* 4. NỘI DUNG CHÍNH */}
      <div style={{ width: '100%', padding: '50px 80px', boxSizing: 'border-box' }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* CỘT TRÁI: HÌNH ẢNH SLIDER VÀ NÚT CHUYỂN MÀU XÁM NHẠT */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '380px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <img 
                src={slideData[currentSlide].img} 
                alt="Cơ sở vật chất" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s ease-in-out' }}
              />
            </div>

            {/* Nút chuyển hình dạng chấm xám nhạt */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', alignItems: 'center' }}>
              {slideData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSlideChange(idx)}
                  style={{
                    width: currentSlide === idx ? '30px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    backgroundColor: currentSlide === idx ? '#006633' : '#ccc',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  title={`Xem slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: BÀI VIẾT NỘI DUNG VÀ CHI TIẾT KHI BẤM XEM THÊM */}
          <div>
            <h2 style={{ color: '#006633', fontSize: '24px', marginBottom: '15px', fontWeight: 'bold' }}>
              {slideData[currentSlide].title}
            </h2>
            <p style={{ color: '#444', lineHeight: '1.7', fontSize: '15px', marginBottom: '15px' }}>
              {slideData[currentSlide].content1}
            </p>
            <p style={{ color: '#444', lineHeight: '1.7', fontSize: '15px', marginBottom: '20px' }}>
              {slideData[currentSlide].content2}
            </p>

            <h4 style={{ color: '#222', fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>
              Hệ thống tòa nhà và khu chức năng:
            </h4>
            <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: '1.6', fontSize: '14px', marginBottom: '20px' }}>
              {slideData[currentSlide].facilitiesList.map((item, i) => (
                <li key={i} style={{ marginBottom: '6px' }}>{item}</li>
              ))}
            </ul>

            {/* PHẦN NỘI DUNG MỞ RỘNG KHI BẤM XEM THÊM */}
            {showFullContent && (
              <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px dashed #ddd', animation: 'fadeIn 0.4s ease' }}>
                <h4 style={{ color: '#006633', fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>
                  Thông tin chi tiết chuyên sâu:
                </h4>
                <p style={{ color: '#444', lineHeight: '1.8', fontSize: '14.5px', whiteSpace: 'pre-line' }}>
                  {slideData[currentSlide].detailArticle}
                </p>
              </div>
            )}

            <div style={{ textAlign: 'right', marginTop: '15px' }}>
              <span 
                style={{ color: '#006633', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}
                onClick={() => setShowFullContent(!showFullContent)}
              >
                {showFullContent ? 'Thu gọn' : 'Xem thêm'}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 5. FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '40px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default Facilities;