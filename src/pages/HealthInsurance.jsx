import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HealthInsurance = () => {
  const navigate = useNavigate();

  // Lấy dữ liệu thông tin cá nhân từ localStorage (hoặc dùng giá trị mặc định giả lập)
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'BÙI QUỐC DUY HÙNG';
  const ngaySinh = localStorage.getItem('ngaySinh') || '01/10/2002';
  const gioiTinh = localStorage.getItem('gioiTinh') || 'Nam';
  const cccd = localStorage.getItem('cccd') || '079202001234';
  const diaChi = localStorage.getItem('diaChi') || '786 Nguyễn Kiệm, Phường 3, Quận Gò Vấp, TP. Hồ Chí Minh';
  
  // Thông tin BHYT giả tưởng chuẩn Việt Nam
  const maTheBHYT = 'DN4797932100888';
  const thoiHanTu = '01/01/2026';
  const thoiHanDen = '31/12/2026';
  const thoiDiem5Nam = '01/01/2021';
  const maDKKCB = '79-055';
  const tenDKKCB = 'Bệnh viện Công - TP. Hồ Chí Minh';

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
      <div style={{ width: '100%', backgroundColor: '#006633', color: '#fff', padding: '45px 0', textAlign: 'center', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Thông tin Thẻ Bảo Hiểm Y Tế Điện Tử</h1>
        <p style={{ fontSize: '15px', opacity: 0.9, marginTop: '8px' }}>Tra cứu thông tin quyền lợi khám chữa bệnh BHYT chính thức</p>
      </div>

      {/* KHUNG HIỂN THỊ THẺ BHYT MÔ PHỎNG */}
      <div style={{ maxWidth: '900px', margin: '50px auto', padding: '0 20px', boxSizing: 'border-box' }}>
        
        {/* MẪU THẺ BHYT VỚI TÔNG MÀU XÀ CỪ / XANH LÁ ĐỒNG BỘ */}
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #e1efe5 100%)',
          border: '2px solid #006633',
          borderRadius: '16px',
          boxShadow: '0 8px 25px rgba(0, 102, 51, 0.15)',
          padding: '35px',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}>

          {/* Header của Thẻ */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #006633', paddingBottom: '15px', marginBottom: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: '#006633', color: '#fff', padding: '10px 14px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px' }}>
                BHYT
              </div>
              <div>
                <h3 style={{ margin: 0, color: '#006633', fontSize: '16px', fontWeight: 'bold' }}>BẢO HIỂM XÃ HỘI VIỆT NAM</h3>
                <p style={{ margin: 0, fontSize: '12px', color: '#555' }}>THẺ BẢO HIỂM Y TẾ ĐIỆN TỬ</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ backgroundColor: '#d9534f', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                ĐÃ XÁC THỰC VSSID
              </span>
            </div>
          </div>

          {/* Nội dung chi tiết trên thẻ */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15px', color: '#333' }}>
              <div>
                <span style={{ fontSize: '12px', color: '#666', display: 'block', textTransform: 'uppercase', fontWeight: 'bold' }}>1. Mã số thẻ BHYT:</span>
                <strong style={{ fontSize: '22px', color: '#d9534f', letterSpacing: '1px' }}>{maTheBHYT}</strong>
              </div>

              <div>
                <span style={{ fontSize: '12px', color: '#666', display: 'block', textTransform: 'uppercase', fontWeight: 'bold' }}>2. Họ và tên người tham gia:</span>
                <strong style={{ fontSize: '19px', color: '#006633', textTransform: 'uppercase' }}>{hoTenBenhNhan}</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#666', display: 'block', textTransform: 'uppercase', fontWeight: 'bold' }}>3. Ngày sinh:</span>
                  <span style={{ fontSize: '16px', fontWeight: '500' }}>{ngaySinh} ({gioiTinh})</span>
                </div>
                <div>
                  <span style={{ fontSize: '12px', color: '#666', display: 'block', textTransform: 'uppercase', fontWeight: 'bold' }}>Mã CCCD / Định danh:</span>
                  <span style={{ fontSize: '16px', fontWeight: '500' }}>{cccd}</span>
                </div>
              </div>

              <div>
                <span style={{ fontSize: '12px', color: '#666', display: 'block', textTransform: 'uppercase', fontWeight: 'bold' }}>4. Địa chỉ thường trú:</span>
                <span style={{ fontSize: '15px', lineHeight: '1.5' }}>{diaChi}</span>
              </div>
            </div>

            {/* Cột phải: Mã vạch giả lập & Thời hạn */}
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #c8e6c9', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <div>
                <span style={{ fontSize: '11px', color: '#666', display: 'block', fontWeight: 'bold' }}>MÃ QUÉT QR BHYT</span>
                {/* QR code giả lập bằng khung hình */}
                <div style={{ width: '110px', height: '110px', margin: '8px auto', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', borderRadius: '6px' }}>
                  [QR VSSID]
                </div>
              </div>

              <div style={{ fontSize: '13px', textAlign: 'left', borderTop: '1px dashed #ddd', paddingTop: '10px' }}>
                <p style={{ margin: '0 0 4px 0' }}>⏳ <b>Thời hạn sử dụng:</b></p>
                <p style={{ margin: '0 0 6px 0', color: '#006633' }}>Từ {thoiHanTu} đến {thoiHanDen}</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#555' }}>⭐ <b>5 năm liên tục từ:</b> {thoiDiem5Nam}</p>
              </div>
            </div>

          </div>

          {/* Dưới thẻ: Nơi đăng ký KCB ban đầu */}
          <div style={{ marginTop: '25px', borderTop: '1px solid #006633', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
            <span>🏥 <b>Nơi ĐKKCB ban đầu:</b> [{maDKKCB}] {tenDKKCB}</span>
            <span style={{ color: '#006633', fontWeight: 'bold' }}>Được quỹ BHYT chi trả 80% - 100% theo quy định</span>
          </div>

        </div>

        {/* Nút hành động */}
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <button 
            onClick={() => alert('Đã tải hình ảnh thẻ BHYT điện tử về thiết bị thành công!')}
            style={{ backgroundColor: '#006633', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}
          >
            Tải thẻ BHYT (.PDF / .PNG)
          </button>
          <button 
            onClick={() => navigate('/medical-schedule')}
            style={{ backgroundColor: '#ffcc00', color: '#000', border: 'none', padding: '12px 25px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}
          >
            Sử dụng đặt lịch khám ngay →
          </button>
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

export default HealthInsurance;