import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

  // State cho form gửi tin nhắn liên hệ
  const [contactForm, setContactForm] = useState({
    hoTen: '',
    soDienThoai: '',
    email: '',
    ghiChu: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleInputChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    setIsSent(true);
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

  const sidebarLinks = [
    { name: 'Lịch khám bệnh', path: '/medical-schedule' },
    { name: 'Quy trình khám bệnh', path: '/examination-process' },
    { name: 'Bảng giá dịch vụ', path: '/service-price-list' },
    { name: 'Thủ tục nhập - xuất viện', path: '/admission-discharge' },
    { name: 'Liên hệ & Góp ý', path: '/contact', active: true }
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
              style={{ color: item.name === 'LIÊN HỆ' ? '#ffcc00' : '#fff' }}
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
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Thông tin liên hệ & Hỗ trợ</h1>
      </div>

      {/* 4. NỘI DUNG CHÍNH (LAYOUT 2 CỘT) */}
      <div style={{ width: '100%', padding: '50px 80px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px' }}>
          
          {/* CỘT TRÁI: CHI TIẾT LIÊN HỆ, THỜI GIAN LÀM VIỆC & FORM */}
          <div>
            
            {/* PHẦN 1: TƯ VẤN & CHĂM SÓC KHÁCH HÀNG */}
            <div style={{ marginBottom: '50px' }}>
              <h2 style={{ color: '#006633', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
                Tư vấn & Chăm sóc Khách hàng
              </h2>
              <p style={{ textAlign: 'center', color: '#666', marginBottom: '35px', fontSize: '15px' }}>
                Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của quý người bệnh.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                
                {/* Thông tin chữ giả tưởng */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px', color: '#333' }}>
                  <div>
                    <strong style={{ color: '#006633', display: 'block', marginBottom: '4px' }}>📞 Hotline Tổng đài:</strong>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#d9534f' }}>1900 8888 15</span>
                  </div>
                  <div>
                    <strong style={{ color: '#006633', display: 'block', marginBottom: '4px' }}>💬 Đặt khám qua Zalo:</strong>
                    <span>0988 123 456</span>
                  </div>
                  <div>
                    <strong style={{ color: '#006633', display: 'block', marginBottom: '4px' }}>📱 Đặt lịch qua Ứng dụng App:</strong>
                    <span>BV Công Care (iOS & Android)</span>
                  </div>
                  <div>
                    <strong style={{ color: '#006633', display: 'block', marginBottom: '4px' }}>✉️ Hòm thư Điện tử (Email):</strong>
                    <span>cskh@benhviencong.vn<br />banco.benhviencong@gmail.com</span>
                  </div>
                  <div>
                    <strong style={{ color: '#006633', display: 'block', marginBottom: '4px' }}>📍 Địa chỉ Trụ sở chính:</strong>
                    <span>123 Đường Điện Biên Phủ, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh</span>
                  </div>
                </div>

                {/* Hình ảnh quầy thông tin giả tưởng */}
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" 
                    alt="Quầy thông tin bệnh viện" 
                    style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                </div>

              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '40px 0' }} />

            {/* PHẦN 2: THỜI GIAN LÀM VIỆC */}
            <div style={{ marginBottom: '50px' }}>
              <h2 style={{ color: '#006633', fontSize: '24px', fontWeight: 'bold', marginBottom: '25px', textAlign: 'center' }}>
                Thời gian làm việc
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                
                {/* Khối Trực Cấp Cứu */}
                <div style={{ backgroundColor: '#fbfdfb', border: '1px solid #e1efe5', borderRadius: '8px', padding: '25px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <h3 style={{ color: '#006633', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    🚑 Trực cấp cứu
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#444', lineHeight: '1.6', margin: 0 }}>
                    Hoạt động <b>24/24 tất cả các ngày trong tuần</b>, bao gồm cả ngày lễ, Tết. Sẵn sàng tiếp nhận các ca cấp cứu thông tuyến.
                  </p>
                </div>

                {/* Khối Giờ hành chính */}
                <div style={{ backgroundColor: '#fbfdfb', border: '1px solid #e1efe5', borderRadius: '8px', padding: '25px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <h3 style={{ color: '#006633', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    🏥 Giờ hành chính
                  </h3>
                  <div style={{ fontSize: '14.5px', color: '#444', lineHeight: '1.6' }}>
                    <p style={{ margin: '0 0 8px 0' }}><b>Thứ Hai – Thứ Sáu:</b></p>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                      <li>Sáng: 7h00 – 11h30</li>
                      <li>Chiều: 13h30 – 16h30</li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Khối Ngoài giờ hành chính */}
              <div style={{ backgroundColor: '#fbfdfb', border: '1px solid #e1efe5', borderRadius: '8px', padding: '25px', marginTop: '25px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <h3 style={{ color: '#006633', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  👨‍⚕️ Ngoài giờ hành chính
                </h3>
                <div style={{ fontSize: '14.5px', color: '#444', lineHeight: '1.6' }}>
                  <p style={{ margin: '0 0 6px 0' }}><b>Thứ 7:</b> Sáng: 7h00 – 11h30 | Chiều: 13h30 – 16h30</p>
                  <p style={{ margin: '0 0 12px 0' }}><b>Chủ Nhật:</b> Sáng: 7h00 – 11h30</p>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#666', fontStyle: 'italic' }}>
                    📍 Địa điểm khám bệnh ngoài giờ hành chính: Khu khám theo yêu cầu, Tòa nhà trung tâm Bệnh viện Công.
                  </p>
                </div>
              </div>

            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '40px 0' }} />

            {/* PHẦN 3: FORM GỬI LIÊN HỆ & BẢN ĐỒ */}
            <div>
              <h2 style={{ color: '#006633', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
                Hãy liên hệ với chúng tôi
              </h2>
              <p style={{ color: '#666', marginBottom: '25px', fontSize: '14.5px', lineHeight: '1.6' }}>
                Tuyệt vời! Chúng tôi luôn sẵn sàng lắng nghe bạn và đồng hành để tạo nên điều thật ý nghĩa. Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần được hỗ trợ.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px' }}>
                
                {/* Form nhập liệu */}
                <div>
                  {isSent ? (
                    <div style={{ backgroundColor: '#e2f0d9', border: '1px solid #006633', padding: '25px', borderRadius: '8px', textAlign: 'center' }}>
                      <h3 style={{ color: '#006633', margin: '0 0 10px 0' }}>✅ GỬI THÔNG TIN THÀNH CÔNG!</h3>
                      <p style={{ fontSize: '14.5px', color: '#333', margin: 0 }}>Cảm ơn bạn đã liên hệ. Bộ phận chăm sóc khách hàng của Bệnh viện Công sẽ phản hồi lại trong thời gian sớm nhất.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitContact} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Họ và tên</label>
                          <input 
                            type="text" 
                            name="hoTen" 
                            placeholder="Nhập họ và tên..." 
                            value={contactForm.hoTen} 
                            onChange={handleInputChange} 
                            required 
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Số điện thoại</label>
                          <input 
                            type="tel" 
                            name="soDienThoai" 
                            placeholder="Nhập số điện thoại..." 
                            value={contactForm.soDienThoai} 
                            onChange={handleInputChange} 
                            required 
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Nhập địa chỉ email..." 
                          value={contactForm.email} 
                          onChange={handleInputChange} 
                          required 
                          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Ghi chú / Nội dung</label>
                        <textarea 
                          name="ghiChu" 
                          rows="4" 
                          placeholder="Nhập nội dung cần hỗ trợ, góp ý..." 
                          value={contactForm.ghiChu} 
                          onChange={handleInputChange} 
                          required 
                          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        style={{ backgroundColor: '#d9534f', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '5px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', alignSelf: 'flex-start' }}
                      >
                        Gửi cho chúng tôi
                      </button>
                    </form>
                  )}
                </div>

                {/* Bản đồ vị trí mô phỏng Google Maps */}
                <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', height: '330px', backgroundColor: '#f0f0f0', position: 'relative' }}>
                  <iframe 
                    title="Bản đồ Bệnh viện Công"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241778572185!2d106.68783437582736!3d10.783103459174175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f30f5317789%3A0xf63503db45bc900!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2svn!4v1700000000000!5m2!1sen!2svn" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>
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

export default Contact;