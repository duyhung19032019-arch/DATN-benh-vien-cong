import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = () => {
  const navigate = useNavigate();
  
  // Lấy tên người dùng từ localStorage đã lưu ở bước Đăng ký/Đăng nhập
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const danhSachBaiViet = [
    { id: 1, title: '🔥 Thông báo: Lịch khám bệnh dịp lễ và thứ 7, Chủ Nhật hàng tuần' },
    { id: 2, title: '⭐ Bệnh viện Công triển khai dịch vụ Khám bệnh chất lượng cao theo yêu cầu' },
    { id: 3, title: '💊 Hướng dẫn tra cứu kết quả xét nghiệm và đơn thuốc trực tuyến' },
    { id: 4, title: '🛡️ Khám chữa bệnh Bảo hiểm y tế thông tuyến toàn quốc không cần giấy chuyển viện' },
    { id: 5, title: '💉 Lịch tiêm chủng vắc xin phòng bệnh mùa đông xuân cho người cao tuổi và trẻ em' }
  ];

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

  const quickActions = [
    {
      title: 'Đặt lịch khám',
      desc: 'Đăng ký khám theo chuyên khoa & bác sĩ',
      path: '/medical-schedule',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#006633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="#d9534f" strokeWidth="3"></path>
        </svg>
      )
    },
    {
      title: 'Tìm Bác sĩ',
      desc: 'Tra cứu thông tin chuyên gia y tế',
      path: '/doctors', // <-- Đã sửa từ '/DoctorList' thành '/doctors' cho đúng với App.jsx
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d9534f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4" stroke="#006633"></circle>
          <path d="M12 11v3M10.5 12.5h3" stroke="#d9534f" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: 'Tìm Chuyên khoa',
      desc: 'Xem danh sách các khoa phòng',
      path: '#',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#006633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
          <path d="M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"></path>
          <path d="M10 9h4M12 7v4" stroke="#d9534f" strokeWidth="2.5"></path>
        </svg>
      )
    },
    {
      title: 'Xem bản đồ',
      desc: 'Chỉ dẫn vị trí trong bệnh viện',
      path: '/hospital-map',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d9534f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18" stroke="#006633"></line>
          <line x1="16" y1="6" x2="16" y2="22" stroke="#006633"></line>
        </svg>
      )
    }
  ];

  const servicesList = [
    {
      name: 'Lịch khám bệnh',
      path: '/medical-schedule',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006633" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13" stroke="#d9534f"></line>
          <line x1="16" y1="17" x2="8" y2="17" stroke="#d9534f"></line>
        </svg>
      )
    },
    {
      name: 'Quy trình khám',
      path: '/examination-process',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d9534f" strokeWidth="2">
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" stroke="#006633"></path>
        </svg>
      )
    },
    {
      name: 'Bảng giá dịch vụ',
      path: '/service-price-list',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006633" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#d9534f"></path>
        </svg>
      )
    },
    {
      name: 'Bảo hiểm y tế',
      path: '/health-insurance',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d9534f" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(217,83,79,0.1)"></path>
          <path d="M12 8v8M8 12h8" stroke="#006633" strokeWidth="2.5"></path>
        </svg>
      )
    },
    {
      name: 'Thủ tục xuất viện',
      path: '/admission-discharge',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006633" strokeWidth="2">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
          <polyline points="13 2 13 9 20 9"></polyline>
          <path d="M9 15l2 2 4-4" stroke="#d9534f" strokeWidth="2.5"></path>
        </svg>
      )
    },
    {
      name: 'Thanh toán viện phí',
      path: '/payment',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="#006633"></rect>
          <circle cx="12" cy="12" r="3" stroke="#d9534f" strokeWidth="2"></circle>
          <line x1="6" y1="12" x2="6.01" y2="12" stroke="#006633" strokeWidth="2.5"></line>
          <line x1="18" y1="12" x2="18.01" y2="12" stroke="#006633" strokeWidth="2.5"></line>
        </svg>
      )
    },
    {
      name: 'Thông tin thuốc',
      path: '/medicine-info',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006633" strokeWidth="2">
          <path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"></path>
          <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" stroke="#d9534f"></line>
        </svg>
      )
    },
    {
      name: 'Tra cứu kết quả',
      path: '/test-results',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d9534f" strokeWidth="2">
          <circle cx="11" cy="11" r="8" stroke="#006633"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <path d="M11 8v6M8 11h6" stroke="#d9534f" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      name: 'Góc tri ân',
      path: '/feedback',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#006633" stroke="#d9534f" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      name: 'Hỏi đáp',
      path: '/contact',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006633" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#d9534f" strokeWidth="2.5"></path>
          <line x1="12" y1="17" x2="12.01" y2="17" stroke="#d9534f" strokeWidth="3"></line>
        </svg>
      )
    },
    {
      name: 'Chăm sóc khách hàng',
      path: '/contact',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d9534f" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0_0 6 6l1.27-1.27a2 2 0_0_1 2.11-.45 12.84_12.84_0_0_0_2.81.7A2_2_0_0_1_22_16.92z" stroke="#006633"></path>
        </svg>
      )
    },
    {
      name: 'Tổng quan Bệnh viện',
      path: '/about',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006633" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22" stroke="#d9534f"></polyline>
        </svg>
      )
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

      {/* 2. MAIN NAVIGATION MENU */}
      <div style={{ width: '100%', backgroundColor: '#006633', color: '#fff', padding: '0 50px', display: 'flex', gap: '10px', fontWeight: 'bold', fontSize: '14px', position: 'relative', zIndex: 100, boxSizing: 'border-box' }}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{ position: 'relative', padding: '15px 18px', cursor: 'pointer' }}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span 
              style={{ color: item.name === 'TRANG CHỦ' ? '#ffcc00' : '#fff' }}
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

      {/* 3. THANH BÀI VIẾT CHẠY CHẬM */}
      <div style={{
        width: '100%',
        backgroundColor: '#fff3cd',
        borderBottom: '1px solid #ffeeba',
        color: '#856404',
        padding: '10px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: '#d39e00',
          color: '#fff',
          fontWeight: 'bold',
          padding: '6px 20px',
          fontSize: '13px',
          zIndex: 2,
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          marginLeft: '30px',
          borderRadius: '4px'
        }}>
          TIN MỚI
        </div>

        <div className="marquee-track" style={{
          display: 'inline-flex',
          gap: '80px',
          paddingLeft: '100%',
          animation: 'marquee 50s linear infinite'
        }}>
          {danhSachBaiViet.map((item) => (
            <span 
              key={item.id} 
              style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
              onClick={() => alert(`Bạn vừa chọn bài viết: ${item.title}`)}
            >
              {item.title}
            </span>
          ))}
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      {/* 4. HERO BANNER */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(135deg, #006633 0%, #004d26 100%)',
        color: '#fff',
        padding: '60px 30px 60px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '60%' }}>
          <h1 style={{ fontSize: '42px', margin: '0 0 20px 0', fontWeight: '800', lineHeight: '1.2' }}>
            Tận tâm - Thấu hiểu - Chất lượng
          </h1>
          <p style={{ fontSize: '18px', opacity: '0.9', lineHeight: '1.6', margin: 0 }}>
            Hệ thống y tế công lập hỗ trợ đặt lịch khám bệnh trực tuyến nhanh chóng, tra cứu kết quả chẩn đoán và theo dõi sức khỏe toàn diện.
          </p>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.12)', padding: '30px 35px', borderRadius: '12px', backdropFilter: 'blur(5px)', textAlign: 'center', width: '320px' }}>
            <h3 style={{ margin: '0 0 18px 0', fontSize: '19px', fontWeight: 'bold' }}>Cổng thông tin Bệnh nhân</h3>
            <button 
              onClick={() => navigate('/medical-schedule')}
              style={{ backgroundColor: '#ffcc00', color: '#000', border: 'none', padding: '14px 28px', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', width: '100%', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}
            >
              Đặt lịch khám ngay
            </button>
          </div>
        </div>
      </div>

      {/* 5. QUICK ACTION CARDS */}
      <div style={{ width: '100%', padding: '40px 50px', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', width: '100%' }}>
          {quickActions.map((item, index) => (
            <div 
              key={index} 
              onClick={() => item.path !== '#' && navigate(item.path)}
              style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center', cursor: 'pointer', borderTop: '4px solid #006633' }}
            >
              <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#006633', fontSize: '18px' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. DỊCH VỤ VÀ TIỆN ÍCH */}
      <div style={{ width: '100%', padding: '20px 50px 50px 50px', boxSizing: 'border-box' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '35px', fontSize: '28px' }}>Dịch vụ và Tiện ích</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', width: '100%' }}>
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => service.path !== '#' && navigate(service.path)}
              style={{ backgroundColor: '#fff', padding: '25px 15px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.04)', cursor: 'pointer' }}
            >
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{service.icon}</div>
              <span style={{ fontSize: '14px', color: '#333', fontWeight: '500' }}>{service.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '40px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default PatientDashboard;