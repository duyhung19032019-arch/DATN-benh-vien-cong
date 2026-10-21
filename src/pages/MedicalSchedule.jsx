import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicalSchedule = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const soDienThoaiBenhNhan = localStorage.getItem('soDienThoai') || '0912345678'; // Lấy SĐT nếu đã lưu hoặc hiển thị mặc định
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Bộ lọc chuyên khoa và ngày trong tuần
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [selectedDay, setSelectedDay] = useState('ALL');

  // Trạng thái lưu lịch hẹn đã đặt gần nhất (mô phỏng hoặc từ form đặt lịch)
  const [bookedAppointments, setBookedAppointments] = useState([
    {
      id: 101,
      dept: 'KHOA NỘI TỔNG HỢP',
      room: 'Phòng 101 - Tòa nhà 1000 giường',
      day: 'Thứ 2',
      date: '19/10/2026',
      shift: 'Sáng (07:00 - 11:30)',
      type: 'BHYT & Khám thường',
      status: 'Đã xác nhận'
    }
  ]);

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

  const sidebarLinks = [
    { name: 'Lịch khám bệnh', path: '/medical-schedule', active: true },
    { name: 'Quy trình khám bệnh', path: '/examination-process' },
    { name: 'Bảng giá dịch vụ', path: '/service-price-list' },
    { name: 'Thủ tục nhập - xuất viện', path: '/admission-discharge' },
        { name: 'Liên hệ & Góp ý', path: '/contact',  }
  ];

  const scheduleData = [
    { id: 1, dept: 'KHOA NỘI TỔNG HỢP', room: 'Phòng 101 - Tòa nhà 1000 giường', day: 'Thứ 2 - Thứ 6', shift: 'Sáng (07:00 - 11:30)', type: 'BHYT & Khám thường', status: 'Đang mở' },
    { id: 2, dept: 'KHOA NỘI TỔNG HỢP', room: 'Phòng 102 - Tòa nhà 1000 giường', day: 'Thứ 2 - Thứ 6', shift: 'Chiều (13:00 - 16:30)', type: 'BHYT & Khám thường', status: 'Đang mở' },
    { id: 3, dept: 'KHOA NỘI TỔNG HỢP', room: 'Phòng 105 - Tòa nhà 1000 giường', day: 'Thứ 7 & Chủ Nhật', shift: 'Sáng (07:30 - 11:30)', type: 'Khám Dịch vụ / Theo yêu cầu', status: 'Đang mở' },
    { id: 4, dept: 'KHOA NGOẠI CHẤN THƯƠNG', room: 'Phòng 201 - Viện Chấn thương', day: 'Thứ 2 - Thứ 6', shift: 'Sáng (07:00 - 11:30)', type: 'BHYT & Khám thường', status: 'Đang mở' },
    { id: 5, dept: 'KHOA NGOẠI CHẤN THƯƠNG', room: 'Phòng 203 - Viện Chấn thương', day: 'Thứ 2 - Thứ 6', shift: 'Chiều (13:00 - 16:30)', type: 'Khám Chuyên gia / Theo yêu cầu', status: 'Đang mở' },
    { id: 6, dept: 'KHOA TIM MẠCH', room: 'Phòng 301 - Tòa nhà 1000 giường', day: 'Thứ 2 - Thứ 6', shift: 'Sáng (07:00 - 11:30)', type: 'BHYT & Khám thường', status: 'Đang mở' },
    { id: 7, dept: 'KHOA NHI', room: 'Phòng 108 - Tòa nhà 1000 giường', day: 'Thứ 2 - Chủ Nhật', shift: 'Sáng (07:00 - 11:30)', type: 'BHYT & Khám Dịch vụ', status: 'Đang mở' },
    { id: 8, dept: 'KHOA UNG BƯỚU', room: 'Phòng 101 - Viện Ung Bướu', day: 'Thứ 2 - Thứ 6', shift: 'Cả ngày (07:00 - 16:30)', type: 'BHYT & Khám Chuyên khoa', status: 'Đang mở' }
  ];

  const filteredSchedule = scheduleData.filter((item) => {
    const matchesDept = selectedDept === 'ALL' || item.dept === selectedDept;
    const matchesDay = selectedDay === 'ALL' || item.day.includes(selectedDay);
    return matchesDept && matchesDay;
  });

  const handleBookNow = (item) => {
    const newAppointment = {
      id: Date.now(),
      dept: item.dept,
      room: item.room,
      day: item.day,
      date: '20/10/2026',
      shift: item.shift,
      type: item.type,
      status: 'Đã xác nhận'
    };
    setBookedAppointments([newAppointment, ...bookedAppointments]);
    alert(`Đăng ký thành công lịch khám tại ${item.dept}! Thông tin đã được cập nhật vào hồ sơ của bạn.`);
  };

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
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Lịch khám bệnh & Hồ sơ đặt lịch</h1>
      </div>

      {/* 4. CHÍNH SÁCH VÀ NỘI DUNG (LAYOUT 2 CỘT) */}
      <div style={{ width: '100%', padding: '50px 80px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px' }}>
          
          {/* CỘT TRÁI: THÔNG TIN BỆNH NHÂN & LỊCH ĐÃ ĐẶT + BẢNG LỊCH KHÁM */}
          <div>
            
            {/* KHUNG THÔNG TIN NGƯỜI BỆNH & LỊCH ĐÃ ĐẶT */}
            <div style={{ backgroundColor: '#f0f7f2', border: '1px solid #006633', borderRadius: '8px', padding: '25px', marginBottom: '35px', boxShadow: '0 2px 10px rgba(0,102,51,0.08)' }}>
              <h3 style={{ color: '#006633', fontSize: '18px', fontWeight: 'bold', marginTop: 0, marginBottom: '15px', borderBottom: '2px solid #006633', paddingBottom: '8px' }}>
                📋 Hồ sơ & Lịch hẹn đã đặt của bạn
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px', fontSize: '14.5px', color: '#333' }}>
                <div>• <b>Họ và tên bệnh nhân:</b> <span style={{ color: '#006633', fontWeight: 'bold' }}>{hoTenBenhNhan}</span></div>
                <div>• <b>Số điện thoại:</b> <span>{soDienThoaiBenhNhan}</span></div>
              </div>

              <h4 style={{ color: '#333', fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>Danh sách lịch khám đã đăng ký:</h4>
              
              {bookedAppointments.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {bookedAppointments.map((appt) => (
                    <div key={appt.id} style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '6px', border: '1px solid #c8e6c9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 'bold', color: '#006633', fontSize: '15px' }}>{appt.dept}</div>
                        <div style={{ fontSize: '13px', color: '#555', marginTop: '3px' }}>📍 {appt.room} | 📅 Ngày khám: <b>{appt.date}</b> ({appt.shift})</div>
                        <div style={{ fontSize: '12.5px', color: '#d9534f', fontWeight: 'bold', marginTop: '2px' }}>Hình thức: {appt.type}</div>
                      </div>
                      <div>
                        <span style={{ backgroundColor: '#e2f0d9', color: '#006633', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                          {appt.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: '#666', fontStyle: 'italic', fontSize: '14px', margin: 0 }}>Bạn chưa có lịch hẹn khám nào được đặt.</p>
              )}
            </div>

            {/* BẢNG TRA CỨU LỊCH KHÁM BỆNH */}
            <h2 style={{ color: '#006633', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
              Tra cứu lịch làm việc các Khoa & Phòng khám
            </h2>
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '14.5px', marginBottom: '25px' }}>
              Chọn chuyên khoa và ngày khám bên dưới để xem chi tiết lịch trực của bác sĩ và bấm nút <b>Đặt lịch</b> để đăng ký khám ngay.
            </p>

            {/* THANH LỌC */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '25px', display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: 1, minWidth: '220px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '6px' }}>
                  Chọn Chuyên khoa:
                </label>
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px', outline: 'none' }}
                >
                  <option value="ALL">-- Tất cả chuyên khoa --</option>
                  <option value="KHOA NỘI TỔNG HỢP">Khoa Nội tổng hợp</option>
                  <option value="KHOA NGOẠI CHẤN THƯƠNG">Khoa Ngoại Chấn thương</option>
                  <option value="KHOA TIM MẠCH">Khoa Tim mạch</option>
                  <option value="KHOA NHI">Khoa Nhi</option>
                  <option value="KHOA UNG BƯỚU">Khoa Ung bướu</option>
                </select>
              </div>

              <div style={{ flex: 1, minWidth: '180px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '6px' }}>
                  Chọn Ngày khám:
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px', outline: 'none' }}
                >
                  <option value="ALL">-- Tất cả các ngày --</option>
                  <option value="Thứ 2">Thứ 2</option>
                  <option value="Thứ 3">Thứ 3</option>
                  <option value="Thứ 4">Thứ 4</option>
                  <option value="Thứ 5">Thứ 5</option>
                  <option value="Thứ 6">Thứ 6</option>
                  <option value="Thứ 7">Thứ 7</option>
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                <button
                  onClick={() => { setSelectedDept('ALL'); setSelectedDay('ALL'); }}
                  style={{ marginTop: '22px', padding: '9px 16px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
                >
                  Đặt lại
                </button>
              </div>
            </div>

            {/* BẢNG LỊCH KHÁM */}
            <div style={{ overflowX: 'auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#006633', color: '#fff' }}>
                    <th style={{ padding: '14px 16px', borderBottom: '1px solid #ddd', width: '28%' }}>Khoa / Vị trí phòng khám</th>
                    <th style={{ padding: '14px 16px', borderBottom: '1px solid #ddd', width: '18%' }}>Ngày trong tuần</th>
                    <th style={{ padding: '14px 16px', borderBottom: '1px solid #ddd', width: '22%' }}>Khung giờ khám</th>
                    <th style={{ padding: '14px 16px', borderBottom: '1px solid #ddd', width: '20%' }}>Hình thức dịch vụ</th>
                    <th style={{ padding: '14px 16px', borderBottom: '1px solid #ddd', width: '12%', textAlign: 'center' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule.length > 0 ? (
                    filteredSchedule.map((item, index) => (
                      <tr 
                        key={item.id} 
                        style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9fdfa', transition: '0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f7f2'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f9fdfa'}
                      >
                        <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', color: '#222' }}>
                          <div style={{ fontWeight: 'bold', color: '#006633', fontSize: '14px', marginBottom: '3px' }}>{item.dept}</div>
                          <div style={{ fontSize: '12.5px', color: '#666' }}>📍 {item.room}</div>
                        </td>
                        <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#333' }}>
                          📅 {item.day}
                        </td>
                        <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', color: '#222' }}>
                          ⏰ {item.shift}
                        </td>
                        <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee' }}>
                          <span style={{ 
                            display: 'inline-block',
                            fontSize: '12px', 
                            fontWeight: 'bold', 
                            padding: '4px 10px', 
                            borderRadius: '4px',
                            backgroundColor: item.type.includes('Chuyên gia') || item.type.includes('Dịch vụ') ? '#fbe2e2' : '#e2f0d9',
                            color: item.type.includes('Chuyên gia') || item.type.includes('Dịch vụ') ? '#d9534f' : '#006633'
                          }}>
                            {item.type}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
                          <button
                            onClick={() => handleBookNow(item)}
                            style={{
                              backgroundColor: '#006633',
                              color: '#fff',
                              border: 'none',
                              padding: '7px 12px',
                              borderRadius: '4px',
                              fontWeight: 'bold',
                              fontSize: '12px',
                              cursor: 'pointer'
                            }}
                          >
                            Đặt lịch
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={{ padding: '30px', textAlign: 'center', color: '#888' }}>
                        Không có lịch khám bệnh phù hợp với điều kiện tìm kiếm.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
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

export default MedicalSchedule;