import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdmissionDischarge = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Trạng thái mở rộng xem chi tiết thủ tục nhập/xuất viện
  const [showAdmissionDetail, setShowAdmissionDetail] = useState(false);
  const [showDischargeDetail, setShowDischargeDetail] = useState(false);

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
        { name: 'Thủ tục nhập - xuất viện', path: '/admission-discharge' },
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

  const sidebarLinks = [
    { name: 'Lịch khám bệnh', path: '/medical-schedule' },
    { name: 'Quy trình khám bệnh', path: '/examination-process' },
    { name: 'Bảng giá dịch vụ', path: '/service-price-list' },
    { name: 'Thủ tục nhập - xuất viện', path: '/admission-discharge', active: true },
        { name: 'Liên hệ & Góp ý', path: '/contact', }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fff', margin: 0, padding: 0, fontFamily: 'Roboto, sans-serif' }}>
      
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
              style={{ color: item.name === 'THÔNG TIN' ? '#ffcc00' : '#fff' }}
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
        backgroundColor: '#006633',
        color: '#fff',
        padding: '35px 0',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Thủ tục nhập – xuất viện</h1>
      </div>

      {/* 4. CHÍNH SÁCH VÀ NỘI DUNG (LAYOUT 2 CỘT) */}
      <div style={{ width: '100%', padding: '50px 80px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px' }}>
          
          {/* CỘT TRÁI: QUY TRÌNH THỦ TỤC NHẬP VÀ XUẤT VIỆN */}
          <div>
            <h2 style={{ color: '#006633', fontSize: '26px', fontWeight: 'bold', marginBottom: '20px' }}>
              Quy trình nhập viện & xuất viện điều trị nội trú
            </h2>
            <p style={{ color: '#333', lineHeight: '1.7', fontSize: '15px', marginBottom: '25px' }}>
              Nhằm tạo điều kiện thuận lợi nhất cho bệnh nhân và người nhà trong quá trình điều trị nội trú, Bệnh viện Công chuẩn hóa quy trình tiếp nhận nhập viện và thanh toán xuất viện minh bạch, nhanh chóng.
            </p>

            {/* PHẦN 1: THỦ TỤC NHẬP VIỆN */}
            <div style={{ marginBottom: '50px' }}>
              <h3 style={{ color: '#006633', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
                A. THỦ TỤC NHẬP VIỆN ĐIỀU TRỊ NỘI TRÚ
              </h3>

              {/* Sơ đồ khối thủ tục Nhập viện */}
              <div style={{ width: '100%', backgroundColor: '#fbfdfb', border: '1px solid #e1efe5', borderRadius: '12px', padding: '30px 20px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                
                {/* Bước 1 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 25px', borderRadius: '8px' }}>1</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '320px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>CHỈ ĐỊNH NHẬP VIỆN</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Bác sĩ khám cấp Giấy nhập viện</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#1b7538', fontSize: '20px', margin: '-5px 0 10px 0' }}>↓</div>

                {/* Bước 2 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 22px', borderRadius: '8px' }}>2</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '320px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>ĐĂNG KÝ & TẠM ỨNG VIỆN PHÍ</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Quầy Thu phí & Bảo hiểm y tế</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#1b7538', fontSize: '20px', margin: '-5px 0 10px 0' }}>↓</div>

                {/* Bước 3 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 22px', borderRadius: '8px' }}>3</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '320px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>BÀN GIAO VỀ KHOA ĐIỀU TRỊ</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Điều dưỡng đưa người bệnh nhận giường bệnh</div>
                  </div>
                </div>

              </div>

              {/* Nút Xem chi tiết Nhập viện */}
              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <button
                  onClick={() => setShowAdmissionDetail(!showAdmissionDetail)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#d9534f',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {showAdmissionDetail ? 'Thu gọn ˄' : 'Xem chi tiết hướng dẫn nhập viện ˅'}
                </button>
              </div>

              {showAdmissionDetail && (
                <div style={{ backgroundColor: '#fcfcfc', padding: '25px', borderRadius: '8px', border: '1px solid #eee', marginTop: '15px', lineHeight: '1.8', color: '#333', fontSize: '14.5px' }}>
                  <p><b>Giấy tờ người bệnh/người nhà cần chuẩn bị khi làm thủ tục nhập viện:</b><br />
                  1. Giấy chỉ định nhập viện do Bác sĩ khám chữa bệnh cấp.<br />
                  2. Căn cước công dân (CCCD) gắn chip hoặc ứng dụng định danh VNeID mức độ 2.<br />
                  3. Thẻ Bảo hiểm y tế (BHYT) còn giá trị sử dụng và Giấy chuyển tuyến (nếu có).<br />
                  4. Các hồ sơ bệnh án cũ, đơn thuốc hoặc kết quả xét nghiệm trong vòng 1 tháng gần nhất.</p>

                  <p><b>Quy trình nộp tiền tạm ứng viện phí:</b><br />
                  • Đối với bệnh nhân BHYT đúng tuyến: Mức tạm ứng theo quy định từng loại bệnh lý.<br />
                  • Đối với bệnh nhân khám Dịch vụ / Theo yêu cầu: Nộp tiền tạm ứng chi phí giường nằm và phẫu thuật (nếu có) theo bảng giá niêm yết.</p>
                </div>
              )}
            </div>

            {/* PHẦN 2: THỦ TỤC XUẤT VIỆN */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#006633', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
                B. THỦ TỤC XUẤT VIỆN & THANH TOÁN
              </h3>

              {/* Sơ đồ khối thủ tục Xuất viện */}
              <div style={{ width: '100%', backgroundColor: '#fbfdfb', border: '1px solid #e1efe5', borderRadius: '12px', padding: '30px 20px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                
                {/* Bước 1 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 25px', borderRadius: '8px' }}>1</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '320px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>IN BẢNG KÊ CHI PHÍ</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Bác sĩ thông báo ra viện & khoa xuất bảng kê</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#1b7538', fontSize: '20px', margin: '-5px 0 10px 0' }}>↓</div>

                {/* Bước 2 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 22px', borderRadius: '8px' }}>2</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '320px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>THANH TOÁN VIỆN PHÍ</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Quầy Thu phí nhận lại tiền dư hoặc nộp thêm</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#1b7538', fontSize: '20px', margin: '-5px 0 10px 0' }}>↓</div>

                {/* Bước 3 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 22px', borderRadius: '8px' }}>3</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '320px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>NHẬN GIẤY RA VIỆN & THUỐC</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Nhận hồ sơ, giấy hẹn tái khám & thuốc ra viện</div>
                  </div>
                </div>

              </div>

              {/* Nút Xem chi tiết Xuất viện */}
              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <button
                  onClick={() => setShowDischargeDetail(!showDischargeDetail)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#d9534f',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {showDischargeDetail ? 'Thu gọn ˄' : 'Xem chi tiết hướng dẫn xuất viện ˅'}
                </button>
              </div>

              {showDischargeDetail && (
                <div style={{ backgroundColor: '#fcfcfc', padding: '25px', borderRadius: '8px', border: '1px solid #eee', marginTop: '15px', lineHeight: '1.8', color: '#333', fontSize: '14.5px' }}>
                  <p><b>Giấy tờ bàn giao cho người bệnh khi xuất viện:</b><br />
                  1. Giấy ra viện có dấu đỏ của Bệnh viện.<br />
                  2. Bảng kê chi tiết chi phí điều trị nội trú (có xác nhận của BHXH nếu dùng BHYT).<br />
                  3. Đơn thuốc xuất viện kèm lời dặn của Bác sĩ điều trị.<br />
                  4. Phiếu hẹn tái khám (nếu có) và thẻ BHYT gốc (trả lại cho bệnh nhân).</p>

                  <p><b>Hình thức thanh toán:</b><br />
                  Bệnh viện Công hỗ trợ thanh toán đa dạng qua tiền mặt, thẻ ATM/Credit, chuyển khoản qua mã QR ngân hàng hoặc ví điện tử MoMo.</p>
                </div>
              )}
            </div>

          </div>

          {/* CỘT PHẢI: BAR DÀNH CHO KHÁCH HÀNG */}
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
                    onMouseEnter={(e) => {
                      if (!link.active) e.currentTarget.style.backgroundColor = '#f9f9f9';
                    }}
                    onMouseLeave={(e) => {
                      if (!link.active) e.currentTarget.style.backgroundColor = 'transparent';
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

      {/* 5. FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '60px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default AdmissionDischarge;