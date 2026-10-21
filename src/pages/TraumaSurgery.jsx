import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TraumaSurgery = () => {
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
        { name: 'Khoa Ngoại chấn thương', path: '/trauma-surgery' }
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

  const sidebarLinks = [

    { name: 'Khoa Nội tổng hợp', path: '/internal-medicine' },
    { name: 'Khoa Ngoại chấn thương', path: '/trauma-surgery', active: true }
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
            <span style={{ color: item.name === 'CHUYÊN KHOA' ? '#ffcc00' : '#fff' }} onClick={() => item.path !== '#' && navigate(item.path)}>
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
        <h1 style={{ fontSize: '42px', margin: 0, fontWeight: '800' }}>Khoa Ngoại Chấn Thương Chỉnh Hình</h1>
      </div>

      {/* LAYOUT 2 CỘT */}
      <div style={{ width: '100%', padding: '50px 80px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px' }}>
          
          {/* CỘT TRÁI */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '35px' }}>
              <div style={{ backgroundColor: '#f0f7f2', borderLeft: '5px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '14px', color: '#666', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>📅 NGÀY THÀNH LẬP</span>
                <strong style={{ fontSize: '20px', color: '#006633' }}>19/05/2012</strong>
              </div>
              <div style={{ backgroundColor: '#f0f7f2', borderLeft: '5px solid #d9534f', padding: '20px 25px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '14px', color: '#666', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>👥 CƠ CẤU NHÂN SỰ</span>
                <strong style={{ fontSize: '20px', color: '#d9534f' }}>10 Bác sĩ phẫu thuật, 18 Điều dưỡng</strong>
              </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" 
                alt="Tập thể Khoa Ngoại Chấn Thương" 
                style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
              />
            </div>

            <div style={{ marginBottom: '45px' }}>
              <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '3px solid #006633', paddingBottom: '10px' }}>Giới thiệu chung</h2>
              <p style={{ color: '#333', lineHeight: '1.9', fontSize: '16px', marginBottom: '18px' }}>
                Khoa Ngoại Chấn Thương Chỉnh Hình là đơn vị ngoại khoa tuyến đầu chuyên điều trị chuyên sâu các tổn thương phức tạp của hệ thống cơ - xương - khớp, cột sống và các bệnh lý hệ vận động do tai nạn giao thông, tai nạn lao động, sinh hoạt cũng như các bệnh lý bẩm sinh, thoái hóa ở người cao tuổi.
              </p>
              <p style={{ color: '#333', lineHeight: '1.9', fontSize: '16px', marginBottom: '18px' }}>
                Trải qua hành trình phát triển đầy tự hào, khoa đã tiếp nhận và phẫu thuật thành công cho hàng chục ngàn ca bệnh nặng, cứu sống và phục hồi khả năng vận động kỳ diệu cho nhiều bệnh nhân tưởng chừng phải mang thương tật suốt đời. Khoa sở hữu hệ thống phòng mổ áp lực dương vô khuẩn một chiều hiện đại bậc nhất, cùng các trang thiết bị tiên tiến như máy C-Arm tăng sáng, hệ thống nội soi khớp cao cấp và vật liệu kết hợp xương thế hệ mới.
              </p>
              <p style={{ color: '#333', lineHeight: '1.9', fontSize: '16px' }}>
                Bên cạnh chuyên môn điều trị ngoại khoa xuất sắc, khoa luôn chú trọng đến công tác phối hợp chặt chẽ với các đơn vị Vật lý trị liệu - Phục hồi chức năng ngay từ những ngày đầu sau mổ, giúp bệnh nhân lấy lại biên độ vận động tối đa, sớm hòa nhập trở lại với cuộc sống và công việc hàng ngày.
              </p>
            </div>

            <div style={{ marginBottom: '45px' }}>
              <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '3px solid #006633', paddingBottom: '10px' }}>Ban Chủ nhiệm Khoa</h2>
              <div style={{ backgroundColor: '#fbfdfb', border: '1px solid #e1efe5', padding: '25px 30px', borderRadius: '8px', lineHeight: '2', fontSize: '16px' }}>
                <p style={{ margin: '0 0 12px 0' }}>• <b>Trưởng khoa:</b> BSCKII. Trần Đình Trọng — Chuyên gia hàng đầu về phẫu thuật khớp và chấn thương chỉnh hình.</p>
                <p style={{ margin: 0 }}>• <b>Trưởng nhóm điều dưỡng:</b> CN. Phạm Thị Thu Thảo — Điều dưỡng trưởng tận tâm, chuyên nghiệp trong chăm sóc hậu phẫu.</p>
              </div>
            </div>

            <div>
              <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '3px solid #006633', paddingBottom: '10px' }}>Chức năng & Nhiệm vụ trọng tâm</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ backgroundColor: '#f9f9f9', borderLeft: '4px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#006633', margin: '0 0 8px 0', fontSize: '18px' }}>1. Phẫu thuật cấp cứu và điều trị chấn thương hệ vận động</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                    Thực hiện trực cấp cứu 24/7, xử trí nhanh chóng các ca đa chấn thương, gãy xương hở/kín phức tạp, tổn thương mạch máu - thần kinh ngoại biên, đứt gân cơ và các chấn thương thể thao cấp tính.
                  </p>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', borderLeft: '4px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#006633', margin: '0 0 8px 0', fontSize: '18px' }}>2. Triển khai các kỹ thuật cao về thay khớp và nội soi</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                    Thường quy thực hiện các kỹ thuật khó như phẫu thuật nội soi tái tạo dây chằng khớp gối, nội soi khuyết sụn chêm, phẫu thuật thay toàn phần/bán phần khớp háng và khớp gối nhân tạo bằng vật liệu sinh học cao cấp.
                  </p>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', borderLeft: '4px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#006633', margin: '0 0 8px 0', fontSize: '18px' }}>3. Nghiên cứu khoa học và phát triển kỹ thuật mới</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                    Nghiên cứu ứng dụng các phương pháp kết hợp xương ít xâm lấn (MIPO), sinh học xương trong liền xương, góp phần nâng cao tỷ lệ thành công và giảm thiểu biến chứng cho người bệnh phẫu thuật ngoại khoa.
                  </p>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', borderLeft: '4px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#006633', margin: '0 0 8px 0', fontSize: '18px' }}>4. Phục hồi chức năng sớm và hợp tác đào tạo chuyên sâu</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                    Áp dụng mô hình điều trị toàn diện kết hợp giữa phẫu thuật đỉnh cao và tập luyện phục hồi vận động sớm. Đào tạo chuyển giao kỹ thuật mổ nội soi và kết hợp xương cho các bác sĩ tuyến dưới theo đúng định hướng phát triển của ngành y tế.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* CỘT PHẢI (SIDEBAR) */}
          <div>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eaeaea', padding: '25px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '18px', color: '#222', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #006633', paddingBottom: '10px' }}>
                Dành cho khách hàng
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {sidebarLinks.map((link, idx) => (
                  <div
                    key={idx}
                    onClick={() => link.path !== '#' && navigate(link.path)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      color: link.active ? '#006633' : '#444',
                      fontWeight: link.active ? 'bold' : 'normal',
                      backgroundColor: link.active ? '#f0f7f2' : 'transparent',
                      borderLeft: link.active ? '3px solid #006633' : 'none',
                      cursor: 'pointer',
                      transition: '0.2s'
                    }}
                  >
                    {link.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

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

export default TraumaSurgery;