import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HospitalMap = () => {
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
      path: '/news',
      submenu: [{ name: 'Tin hoạt động bệnh viện', path: '/news' }]
    },
    { name: 'LIÊN HỆ', path: '/contact' }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f9f9f9', margin: 0, padding: 0, fontFamily: 'Roboto, sans-serif' }}>
      
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
            <span style={{ color: item.name === 'THÔNG TIN' ? '#ffcc00' : '#fff' }} onClick={() => item.path !== '#' && navigate(item.path)}>
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
      <div style={{ width: '100%', backgroundColor: '#006633', color: '#fff', padding: '40px 0', textAlign: 'center', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Bản Đồ & Chỉ Dẫn Đường Đi</h1>
        <p style={{ fontSize: '15px', opacity: 0.9, marginTop: '8px' }}>Hướng dẫn vị trí chi tiết đến cơ sở khám chữa bệnh</p>
      </div>

      {/* NỘI DUNG CHÍNH - BẢN ĐỒ GOOGLE MAPS */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', boxSizing: 'border-box' }}>
        
        {/* KHUNG THÔNG TIN ĐỊA CHỈ */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '25px 30px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ color: '#006633', margin: '0 0 8px 0', fontSize: '20px', fontWeight: 'bold' }}>
              📍 Phân hiệu Trường Đại học Thủy Lợi (Miền Nam)
            </h3>
            <p style={{ margin: 0, color: '#555', fontSize: '15px' }}>
              <b>Địa chỉ:</b> Số 2 Trường Sa, Phường 17, Bình Thạnh, Thành phố Hồ Chí Minh
            </p>
          </div>
          <div>
            <a 
              href="https://maps.google.com/?q=Phân+hiệu+Đại+học+Thủy+Lợi+Miền+Nam" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ backgroundColor: '#006633', color: '#fff', padding: '12px 22px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', boxShadow: '0 3px 8px rgba(0,0,0,0.15)' }}
            >
              Mở trên Google Maps ↗
            </a>
          </div>
        </div>

        {/* GOOGLE MAPS IFRAME CHÍNH XÁC */}
        <div style={{ width: '100%', height: '550px', backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', border: '2px solid #006633', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
          <iframe 
            title="Google Map Dai Hoc Thuy Loi Mien Nam"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3243101683415!2d106.708899!3d10.791599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528baf3d693ff%3A0x86f4a56973f7396a!2zUGjDom4gaGnhu4d1IMSQ4bqhaSBI4buNYyBUaOG7pXkgTOG7o2kgKE1p4buBbiBOYW0p!5e0!3m2!1svi!2svn!4v1650000000000!5m2!1svi!2svn"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>

      {/* FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '60px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default HospitalMap;