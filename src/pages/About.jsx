import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
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

  const doiNguBacSi = [
    {
      id: 1,
      name: 'Prof. Dr. Robert Anderson',
      title: 'Chuyên gia Đầu ngành Tim mạch (Hoa Kỳ)',
      desc: 'Hơn 30 năm kinh nghiệm trong chẩn đoán, phẫu thuật can thiệp và điều trị các bệnh lý tim mạch phức tạp.',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Dr. Sarah Jenkins',
      title: 'Chuyên gia Nội tiết & Đái tháo đường (Anh Quốc)',
      desc: 'Cố vấn y khoa quốc tế với nhiều công trình nghiên cứu đột phá về điều trị rối loạn chuyển hóa.',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Dr. Michael Smith',
      title: 'Trưởng khoa Ngoại Chấn thương Chỉnh hình (Đức)',
      desc: 'Tiên phong trong phẫu thuật nội soi khớp vi phẫu và thay khớp nhân tạo công nghệ cao.',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Dr. David Muller',
      title: 'Trưởng khoa Hồi sức Cấp cứu & Tích cực (Thụy Sĩ)',
      desc: 'Hơn 20 năm kinh nghiệm cấp cứu lâm sàng quốc tế và hồi sức tích cực cho các ca bệnh nguy kịch.',
      img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop'
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

      {/* 3. BANNER GIỚI THIỆU */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(135deg, #006633 0%, #004d26 100%)',
        color: '#fff',
        padding: '50px 50px',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ fontSize: '40px', margin: '0 0 15px 0', fontWeight: '800' }}>GIỚI THIỆU BỆNH VIỆN CÔNG</h1>
        <p style={{ fontSize: '18px', opacity: '0.9', maxWidth: '1000px', margin: '0 auto' }}>
          Hệ thống Y tế Công lập Hợp tác Quốc tế - Nơi hội tụ Đội ngũ Chuyên gia Y tế Hàng đầu
        </p>
      </div>

      {/* 4. TỔNG QUAN VÀ SỨ MỆNH */}
      <div style={{ width: '100%', padding: '50px 50px', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', width: '100%', boxSizing: 'border-box' }}>
          <div>
            <h2 style={{ color: '#006633', fontSize: '28px', marginBottom: '20px' }}>Về Bệnh viện Công</h2>
            <p style={{ color: '#444', lineHeight: '1.8', fontSize: '16px', marginBottom: '15px' }}>
              Được thành lập với sứ mệnh chăm sóc và bảo vệ sức khỏe nhân dân, <b>Bệnh viện Công</b> không ngừng mở rộng hợp tác y khoa quốc tế, trao đổi chuyên môn với các bệnh viện và viện nghiên cứu hàng đầu trên thế giới.
            </p>
            <p style={{ color: '#444', lineHeight: '1.8', fontSize: '16px' }}>
              Quy tụ đội ngũ Giáo sư, Bác sĩ và Chuyên gia y tế quốc tế giàu kinh nghiệm cùng hệ thống trang thiết bị chẩn đoán & điều trị tiên tiến đạt chuẩn Châu Âu, bệnh viện luôn cam kết mang lại dịch vụ y tế <b>"Tận tâm - Thấu hiểu - Chất lượng"</b>.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop" 
              alt="Bệnh viện Công" 
              style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        </div>

        {/* CÁC CON SỐ ẤN TƯỢNG */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginTop: '40px', width: '100%' }}>
          {[
            { num: '50+', label: 'Năm hình thành & phát triển' },
            { num: '100+', label: 'Chuyên gia & Bác sĩ Quốc tế' },
            { num: '1.200+', label: 'Giường bệnh tiêu chuẩn quốc tế' },
            { num: '2.000.000+', label: 'Lượt khám bệnh mỗi năm' }
          ].map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderTop: '4px solid #006633' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#006633', marginBottom: '8px' }}>{item.num}</div>
              <div style={{ fontSize: '15px', color: '#666' }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* 5. ĐỘI NGŨ Y BÁC SĨ NƯỚC NGOÀI */}
        <div style={{ marginTop: '60px', width: '100%' }}>
          <h2 style={{ textAlign: 'center', color: '#006633', fontSize: '30px', marginBottom: '12px' }}>ĐỘI NGŨ CHUYÊN GIA - BÁC SĨ QUỐC TẾ</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px', fontSize: '16px' }}>
            Hội tụ các bác sĩ và chuyên gia y tế nước ngoài uy tín, giàu kinh nghiệm tận tụy vì sức khỏe người bệnh
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', width: '100%' }}>
            {doiNguBacSi.map((doctor) => (
              <div key={doctor.id} style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                <img 
                  src={doctor.img} 
                  alt={doctor.name} 
                  style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                />
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#006633' }}>{doctor.name}</h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#d39e00', fontWeight: 'bold' }}>{doctor.title}</p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#666', lineHeight: '1.5' }}>{doctor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '60px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default About;