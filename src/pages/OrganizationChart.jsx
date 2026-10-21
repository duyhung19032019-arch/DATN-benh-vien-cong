import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrganizationChart = () => {
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
        { name: 'Quy trình khám', path: '/examination-process' },
        { name: 'Bảng giá Dịch vụ', path: '/price-list' },
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

  const khoiCoQuan = [
    'Phòng Chính trị', 'Phòng Kế hoạch tổng hợp', 'Cơ quan Ủy ban Kiểm tra Đảng', 'Phòng Điều dưỡng',
    'Phòng Hậu cần - Kỹ thuật', 'Phòng Tham mưu - Hành chính', 'Phòng Tài chính', 'Phòng Khoa học Quân sự',
    'Ban Thanh tra - Pháp chế', 'Ban Quản lý', 'Ban Công nghệ Thông tin', 'Ban Công tác Xã hội',
    'Ban An toàn bức xạ', 'Ban Quản lý chất lượng', 'Ban Quản lý Nhà tang lễ Quốc gia Phía Nam', 'Trung tâm Huấn luyện, Đào tạo và chỉ đạo tuyến'
  ];

  const khoiNgoai = [
    'Khoa Phẫu thuật Gan - Mật - Tụy (B3.a)', 'Khoa Phẫu thuật Ống tiêu hóa (B3.b)', 'Khoa Ngoại lồng ngực (B4)',
    'Khoa Gây mê hồi sức (B5)', 'Khoa Mắt (B7)', 'Khoa Phẫu thuật và Tạo hình hàm mặt (B8)',
    'Khoa Tai - Mũi - Họng (B9)', 'Khoa Răng (B10)', 'Khoa Hồi sức tích cực ngoại (B12)',
    'Khoa Tạo hình - Thẩm mỹ (B14)', 'Khoa Quốc tế (A16)'
  ];

  const khoiCanLamSang = [
    'Khoa Sinh hóa (C3)', 'Khoa Vi sinh (C4)', 'Khoa Giải phẫu bệnh (C5)',
    'Khoa Chẩn đoán chức năng (C7)', 'Khoa Dược (C9)', 'Khoa Trang bị (C10)',
    'Khoa Dinh dưỡng (C11)', 'Khoa Kiểm soát nhiễm khuẩn (C12)'
  ];

  const khoiNoi = [
    'Khoa Nội tiêu hóa (A3)', 'Khoa Nội soi (A3.a)', 'Khoa Truyền nhiễm (A4)',
    'Khoa Nội hô hấp (A5)', 'Khoa Sức khỏe Tâm thần (A6)', 'Khoa Da liễu - Dị ứng (A8)',
    'Khoa Y học cổ truyền (A10)', 'Khoa Hồi sức tích cực - Chống độc (A12)', 'Khoa Nội tiết (A14)',
    'Khoa Nội Cơ - Xương - Khớp (A17)', 'Khoa Bệnh nghề nghiệp (A25)'
  ];

  const donViTrucThuoc = [
    'Trung tâm Y học Việt Đức', 'Trung tâm Huấn luyện cấp cứu chấn thương Quốc tế', 'Trung tâm Điều phối ghép tạng',
    'Trung tâm Ứng phó các tình huống khẩn cấp, cấp cứu biển đảo và cấp cứu ngoại viện', 'Bệnh xá Đảo Trường Sa', 'Ban Quản lý các Dự án'
  ];

  const trungTam = [
    { title: 'TRUNG TÂM TIM MẠCH (A2)', list: ['Khoa Nội Tim mạch (A2.a)', 'Khoa Phẫu thuật Tim mạch (A2.b)', 'Khoa Can thiệp Tim mạch (A2.c)'] },
    { title: 'TRUNG TÂM THẦN KINH (A7)', list: ['Khoa Nội thần kinh (A7.a)', 'Khoa Đột quỵ (A7.b)', 'Khoa Ngoại thần kinh (B6)'] },
    { title: 'TRUNG TÂM THẬN, TIẾT NIỆU VÀ NAM KHOA (A15)', list: ['Khoa Nội thận - Lọc máu (A15.a)', 'Khoa Ngoại thận - Tiết niệu (B2.a)', 'Khoa Nam học (B2.b)'] },
    { title: 'TRUNG TÂM CẤP CỨU (C1.3)', list: ['Khoa Cấp cứu (C1.3a)', 'Khoa Cấp cứu chấn thương (C1.3b)'] },
    { title: 'TRUNG TÂM KHÁM BỆNH VÀ ĐIỀU TRỊ THEO YÊU CẦU (C1)', list: ['Khoa Khám bệnh (C1.a)', 'Khoa Điều trị theo yêu cầu (C1.b)', 'Khoa Điều trị ban ngày (C1.c)'] },
    { title: 'TRUNG TÂM CHẨN ĐOÁN HÌNH ẢNH (C8)', list: ['Khoa Siêu âm (C8.a)', 'Khoa Điện quang (C8.b)', 'Khoa Xét nghiệm huyết học (C2)'] },
    { title: 'TRUNG TÂM HUYẾT HỌC - TRUYỀN MÁU (C16)', list: ['Khoa Truyền máu (C16)', 'Khoa Huyết học lâm sàng (A25.b)', 'Ngân hàng mô'] }
  ];

  const vien = [
    { title: 'VIỆN ĐIỀU TRỊ VÀ CHĂM SÓC SỨC KHỎE CÁN BỘ CAO CẤP (A1)', list: ['Khoa Khám bệnh cán bộ cao cấp (A1.a)', 'Khoa Điều trị cán bộ cao cấp (A1.b)', 'Khoa Điều trị, chăm sóc và bảo vệ sức khỏe cán bộ Trung ương 1A1'] },
    { title: 'VIỆN UNG BƯỚU VÀ Y HỌC HẠT NHÂN (A20)', list: ['Khoa Khám và điều trị ngoại trú (A20.a)', 'Khoa Xạ trị (A20.b)', 'Khoa Hóa trị (A20.c)', 'Khoa Chăm sóc giảm nhẹ (A20.d)', 'Khoa Y học hạt nhân (A20.e)'] },
    { title: 'VIỆN VẬT LÝ Y SINH', list: [] },
    { title: 'VIỆN LÃO KHOA VÀ PHỤC HỒI CHỨC NĂNG (A26)', list: ['Khoa Vật lý trị liệu (A26.a)', 'Khoa Điều dưỡng - Phục hồi chức năng (A26.b)', 'Khoa Lão khoa (A26.c)'] },
    { title: 'VIỆN SẢN - NHI (B11)', list: ['Khoa Sản (B11.a)', 'Khoa Nhi (A9)', 'Khoa Hỗ trợ sinh sản (B11.b)'] },
    { 
      title: 'VIỆN CHẤN THƯƠNG CHỈNH HÌNH', 
      isComplex: true,
      cacKhoa: ['Khoa Chi trên (B1.a)', 'Khoa Chi dưới (B1.b)', 'Khoa Y học thể thao (B1.c)', 'Khoa Cột sống (B1.d)', 'Khoa Bỏng - Tạo hình (B1.e)', 'Khoa Gây mê hồi sức (B1.f)', 'Khoa Hồi sức tích cực (B1.g)', 'Khoa Phục hồi chức năng (B1.h)', 'Khoa Khám bệnh (B1.i)', 'Khoa Chẩn đoán hình ảnh (B1.k)'],
      coQuan: ['Ban Kế hoạch tổng hợp', 'Ban Chính trị - Hành chính', 'Ban Điều dưỡng', 'Ban Dược - Trang bị']
    }
  ];

  const renderSimpleBlock = (title, items) => (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '15px', backgroundColor: '#33b5e5' }}></div>
      <div style={{ backgroundColor: '#008844', color: '#fff', padding: '8px 4px', textAlign: 'center', fontWeight: 'bold', fontSize: '12px', borderRadius: '2px', textTransform: 'uppercase' }}>
        {title}
      </div>
      <div style={{ position: 'relative', marginTop: '10px', paddingLeft: '12px' }}>
        <div style={{ position: 'absolute', top: '12px', bottom: '12px', left: '2px', width: '2px', backgroundColor: '#33b5e5' }}></div>
        {items.map((item, idx) => (
          <div key={idx} style={{ position: 'relative', marginBottom: '6px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '-10px', width: '10px', height: '1px', backgroundColor: '#33b5e5' }}></div>
            <div style={{ border: '1px solid #70b0df', borderRadius: '2px', padding: '5px 4px', fontSize: '10.5px', textAlign: 'center', color: '#1a4b77', backgroundColor: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f0f2f5', margin: 0, padding: 0 }}>
      
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

      {/* 3. TÊN BẢNG SƠ ĐỒ TỔ CHỨC */}
      <div style={{ width: '100%', backgroundColor: '#fff', padding: '18px 50px', borderBottom: '1px solid #e0e0e0', textAlign: 'center', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '24px', margin: 0, color: '#006633', fontWeight: 'bold', textTransform: 'uppercase' }}>Sơ đồ tổ chức Bệnh viện Công</h1>
      </div>

      {/* 4. SƠ ĐỒ TỔ CHỨC */}
      <div style={{ width: '100%', padding: '30px 40px', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', backgroundColor: '#fff', padding: '35px 25px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0', boxSizing: 'border-box' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#ff3333', color: '#fff', padding: '12px 60px', borderRadius: '2px', fontWeight: 'bold', fontSize: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              BAN GIÁM ĐỐC
            </div>
            <div style={{ width: '2px', height: '20px', backgroundColor: '#33b5e5' }}></div>
            <div style={{ width: '95%', height: '2px', backgroundColor: '#33b5e5' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '15px', alignItems: 'start', paddingTop: '15px', width: '100%' }}>
            {renderSimpleBlock('Khối Cơ quan', khoiCoQuan)}
            {renderSimpleBlock('Khối Ngoại', khoiNgoai)}
            {renderSimpleBlock('Khối Cận Lâm Sàng', khoiCanLamSang)}
            {renderSimpleBlock('Khối Nội', khoiNoi)}
            {renderSimpleBlock('Đơn vị trực thuộc', donViTrucThuoc)}

            {/* TRUNG TÂM */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '15px', backgroundColor: '#33b5e5' }}></div>
              <div style={{ backgroundColor: '#008844', color: '#fff', padding: '8px 4px', textAlign: 'center', fontWeight: 'bold', fontSize: '12px', borderRadius: '2px', textTransform: 'uppercase' }}>
                Trung tâm
              </div>

              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {trungTam.map((center, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '8px', alignItems: 'center', position: 'relative' }}>
                    <div style={{ backgroundColor: '#008844', color: '#fff', fontSize: '10px', fontWeight: 'bold', padding: '8px 4px', textAlign: 'center', borderRadius: '2px', lineHeight: '1.3' }}>
                      {center.title}
                    </div>

                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '8px' }}>
                      <div style={{ position: 'absolute', top: '8px', bottom: '8px', left: '0px', width: '2px', backgroundColor: '#33b5e5' }}></div>
                      {center.list.map((sub, sIdx) => (
                        <div key={sIdx} style={{ position: 'relative' }}>
                          <div style={{ position: 'absolute', top: '50%', left: '-8px', width: '8px', height: '1px', backgroundColor: '#33b5e5' }}></div>
                          <div style={{ border: '1px solid #70b0df', borderRadius: '2px', padding: '4px 3px', fontSize: '9.5px', textAlign: 'center', color: '#1a4b77', backgroundColor: '#fff' }}>
                            {sub}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VIỆN */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '15px', backgroundColor: '#33b5e5' }}></div>
              <div style={{ backgroundColor: '#008844', color: '#fff', padding: '8px 4px', textAlign: 'center', fontWeight: 'bold', fontSize: '12px', borderRadius: '2px', textTransform: 'uppercase' }}>
                Viện
              </div>

              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {vien.map((v, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ backgroundColor: '#008844', color: '#fff', fontSize: '10px', fontWeight: 'bold', padding: '6px 4px', textAlign: 'center', borderRadius: '2px', lineHeight: '1.3' }}>
                      {v.title}
                    </div>

                    {v.list && v.list.length > 0 && (
                      <div style={{ position: 'relative', paddingLeft: '12px' }}>
                        <div style={{ position: 'absolute', top: '6px', bottom: '6px', left: '2px', width: '2px', backgroundColor: '#33b5e5' }}></div>
                        {v.list.map((sub, sIdx) => (
                          <div key={sIdx} style={{ position: 'relative', marginBottom: '4px' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '-10px', width: '10px', height: '1px', backgroundColor: '#33b5e5' }}></div>
                            <div style={{ border: '1px solid #70b0df', borderRadius: '2px', padding: '4px 3px', fontSize: '9.5px', textAlign: 'center', color: '#1a4b77', backgroundColor: '#fff' }}>
                              {sub}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {v.isComplex && (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '4px' }}>
                        <div>
                          <div style={{ backgroundColor: '#008844', color: '#fff', fontSize: '9px', fontWeight: 'bold', padding: '3px', textAlign: 'center', marginBottom: '4px' }}>Các khoa</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            {v.cacKhoa.map((k, kIdx) => (
                              <div key={kIdx} style={{ border: '1px solid #70b0df', fontSize: '8.5px', padding: '3px 2px', textAlign: 'center', color: '#1a4b77', backgroundColor: '#fff' }}>{k}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ backgroundColor: '#008844', color: '#fff', fontSize: '9px', fontWeight: 'bold', padding: '3px', textAlign: 'center', marginBottom: '4px' }}>Cơ quan</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            {v.coQuan.map((cq, cqIdx) => (
                              <div key={cqIdx} style={{ border: '1px solid #70b0df', fontSize: '8.5px', padding: '3px 2px', textAlign: 'center', color: '#1a4b77', backgroundColor: '#fff' }}>{cq}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '30px 50px', textAlign: 'center', fontSize: '14px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 5px 0', color: '#fff', fontWeight: 'bold', fontSize: '15px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default OrganizationChart;