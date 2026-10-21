import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

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
        { name: 'Khoa Ngoại chấn thương', path: '/surgery' },
      ]
    },
    {
      name: 'ĐÀO TẠO & NGHIÊN CỨU',
      path: '#',
      submenu: [
        { name: 'Công tác Đào tạo', path: '/training-research' },

      ]
    },
    {
      name: 'TIN TỨC',
      path: '#',
      submenu: [
        { name: 'Tin hoạt động bệnh viện', path: '/news' },

      ]
    },
    { name: 'LIÊN HỆ', path: '/contact' }
  ];

  // Các cột mốc lịch sử phát triển
  const milestones = [
    {
      year: '1975',
      title: 'Thành lập Bệnh viện & Đặt nền móng ban đầu',
      desc: 'Bệnh viện Công được chính thức thành lập nhằm đáp ứng nhu cầu khám chữa bệnh khẩn thiết cho chiến sĩ và nhân dân. Những ngày đầu thành lập, bệnh viện hoạt động với quy mô 200 giường bệnh cùng trang thiết bị y tế thô sơ.',
      img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop'
    },
    {
      year: '1995',
      title: 'Mở rộng quy mô & Hiện đại hóa kỹ thuật lâm sàng',
      desc: 'Đánh dấu bước ngoặt 20 năm xây dựng và phát triển, bệnh viện nâng quy mô lên 600 giường bệnh, thành lập thêm các khoa mũi nhọn như Phẫu thuật Tim mạch, Ngoại Chấn thương Chỉnh hình và Hồi sức Tích cực.',
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
    },
    {
      year: '2010',
      title: 'Hợp tác Y khoa Quốc tế & Tiếp nhận công nghệ tiên tiến',
      desc: 'Ký kết hợp tác chiến lược với các viện nghiên cứu và bệnh viện hàng đầu từ Hoa Kỳ, Đức, Thụy Sĩ. Đưa vào vận hành hệ thống máy chụp MRI, CT-Scan 128 lát cắt và triển khai thành công các ca phẫu thuật vi phẫu phức tạp.',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
    },
    {
      year: '2020',
      title: 'Khởi công xây dựng Tổ hợp Y tế Kỹ thuật cao',
      desc: 'Đầu tư nâng cấp toàn diện cơ sở hạ tầng với tòa nhà trung tâm đạt tiêu chuẩn khách sạn - bệnh viện 5 sao, nâng tổng số giường bệnh lên 1.200 giường, đáp ứng hơn 2 triệu lượt khám chữa bệnh mỗi năm.',
      img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop'
    },
    {
      year: 'Hiện nay',
      title: 'Chuyển đổi số toàn diện & Hướng tới Trung tâm Y tế hàng đầu khu vực',
      desc: 'Ứng dụng trí tuệ nhân tạo (AI), bệnh án điện tử (EMR), hệ thống đặt lịch khám trực tuyến và quản lý bệnh viện thông minh, khẳng định vị thế Bệnh viện Công - Nơi gửi trọn niềm tin sức khỏe của cộng đồng.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f9f9f9', margin: 0, padding: 0 }}>
      
      {/* 1. TOP HEADER BAR - FULL WIDTH */}
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

      {/* 2. NAVIGATION MENU - FULL WIDTH */}
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

      {/* 3. BANNER TIÊU ĐỀ - FULL WIDTH */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(135deg, #006633 0%, #004d26 100%)',
        color: '#fff',
        padding: '50px 50px',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ fontSize: '40px', margin: '0 0 15px 0', fontWeight: '800' }}>LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN</h1>
        <p style={{ fontSize: '18px', opacity: '0.9', maxWidth: '1000px', margin: '0 auto' }}>
          Hơn 50 năm tự hào đồng hành cùng sức khỏe nhân dân và sự phát triển của nền Y học nước nhà
        </p>
      </div>

      {/* 4. DÒNG THỜI GIAN LỊCH SỬ (TIMELINE) - FULL WIDTH */}
      <div style={{ width: '100%', padding: '60px 50px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          
          {/* Trục kẻ dọc trung tâm timeline */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '4px',
            backgroundColor: '#006633',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}></div>

          {milestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                style={{
                  display: 'flex',
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                  marginBottom: '50px',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* Điểm mốc hình tròn trên trục */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#ffcc00',
                  border: '4px solid #006633',
                  borderRadius: '50%',
                  zIndex: 3
                }}></div>

                {/* Thẻ nội dung mốc lịch sử */}
                <div style={{
                  width: '45%',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  border: '1px solid #e0e0e0'
                }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '25px' }}>
                    <span style={{ 
                      display: 'inline-block',
                      backgroundColor: '#006633',
                      color: '#fff',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      marginBottom: '12px'
                    }}>
                      NĂM {item.year}
                    </span>
                    <h3 style={{ fontSize: '20px', color: '#006633', marginBottom: '12px', fontWeight: 'bold' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#555', lineHeight: '1.7', fontSize: '14px', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* 5. FOOTER - FULL WIDTH */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '40px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default History;