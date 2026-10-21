import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InternalMedicine = () => {
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

    { name: 'Khoa Nội tổng hợp', path: '/internal-medicine', active: true },
    { name: 'Khoa Ngoại chấn thương', path: '/trauma-surgery' }
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
        <h1 style={{ fontSize: '42px', margin: 0, fontWeight: '800' }}>Khoa Nội Tổng Hợp</h1>
      </div>

      {/* LAYOUT 2 CỘT */}
      <div style={{ width: '100%', padding: '50px 80px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px' }}>
          
          {/* CỘT TRÁI */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '35px' }}>
              <div style={{ backgroundColor: '#f0f7f2', borderLeft: '5px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '14px', color: '#666', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>📅 NGÀY THÀNH LẬP</span>
                <strong style={{ fontSize: '20px', color: '#006633' }}>10/05/2010</strong>
              </div>
              <div style={{ backgroundColor: '#f0f7f2', borderLeft: '5px solid #d9534f', padding: '20px 25px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '14px', color: '#666', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>👥 CƠ CẤU NHÂN SỰ</span>
                <strong style={{ fontSize: '20px', color: '#d9534f' }}>12 Bác sĩ, 20 Điều dưỡng</strong>
              </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop" 
                alt="Tập thể Khoa Nội Tổng Hợp" 
                style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
              />
            </div>

            <div style={{ marginBottom: '45px' }}>
              <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '3px solid #006633', paddingBottom: '10px' }}>Giới thiệu chung</h2>
              <p style={{ color: '#333', lineHeight: '1.9', fontSize: '16px', marginBottom: '18px' }}>
                Khoa Nội Tổng Hợp tự hào là một trong những khoa lâm sàng trọng điểm và có bề dày lịch sử phát triển vững chắc tại Bệnh viện Công. Kể từ những ngày đầu thành lập cho đến nay, tập thể y bác sĩ và điều dưỡng viên trong khoa luôn giữ vững ngọn lửa y đức, tận tâm cống hiến cho sự nghiệp chăm sóc, bảo vệ và nâng cao sức khỏe cho cộng đồng nhân dân thành phố cũng như các tỉnh thành lân cận.
              </p>
              <p style={{ color: '#333', lineHeight: '1.9', fontSize: '16px', marginBottom: '18px' }}>
                Trải qua hơn một thập kỷ không ngừng nỗ lực vươn lên, Khoa Nội Tổng Hợp đã khẳng định được uy tín chuyên môn vững vàng trong việc tiếp nhận, chẩn đoán, thu dung và điều trị hiệu quả các mặt bệnh nội khoa đa dạng, phức tạp. Các chuyên sâu mũi nhọn hiện đang được triển khai thành công tại khoa bao gồm: Tim mạch học can thiệp, Nội tiết - Đái tháo đường, Hô hấp học, Tiêu hóa - Gan mật và Thận - Tiết niệu.
              </p>
              <p style={{ color: '#333', lineHeight: '1.9', fontSize: '16px' }}>
                Với phương châm <i>"Lấy người bệnh làm trung tâm, sự hồi phục của người bệnh là hạnh phúc của chúng tôi"</i>, khoa liên tục cập nhật các phác đồ điều trị tiên tiến trên thế giới, kết hợp hài hòa giữa y học hiện đại và y học cổ truyền, đồng thời chú trọng đầu tư hệ thống trang thiết bị y tế đồng bộ, hiện đại nhằm mang lại kết quả điều trị tối ưu nhất cho từng người bệnh.
              </p>
            </div>

            <div style={{ marginBottom: '45px' }}>
              <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '3px solid #006633', paddingBottom: '10px' }}>Ban Chủ nhiệm Khoa</h2>
              <div style={{ backgroundColor: '#fbfdfb', border: '1px solid #e1efe5', padding: '25px 30px', borderRadius: '8px', lineHeight: '2', fontSize: '16px' }}>
                <p style={{ margin: '0 0 12px 0' }}>• <b>Trưởng khoa:</b> ThS.BSCKII. Nguyễn Văn Hùng — Chuyên gia đầu ngành Nội tổng quát và Tim mạch.</p>
                <p style={{ margin: 0 }}>• <b>Trưởng nhóm điều dưỡng:</b> CN. Lê Thị Hồng Mai — Cử nhân điều dưỡng trưởng giàu kinh nghiệm quản lý chăm sóc người bệnh.</p>
              </div>
            </div>

            <div>
              <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '3px solid #006633', paddingBottom: '10px' }}>Chức năng & Nhiệm vụ trọng tâm</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ backgroundColor: '#f9f9f9', borderLeft: '4px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#006633', margin: '0 0 8px 0', fontSize: '18px' }}>1. Khám bệnh, cấp cứu và điều trị nội trú chuyên sâu</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                    Tổ chức thường trực khám bệnh 24/7, tiếp nhận và xử trí cấp cứu kịp thời các trường hợp bệnh nhân nặng, bệnh cấp tính hoặc đợt cấp của bệnh mạn tính thuộc chuyên khoa Nội. Thực hiện điều trị nội trú toàn diện, chuẩn hóa theo các phác đồ y khoa tiên tiến nhất.
                  </p>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', borderLeft: '4px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#006633', margin: '0 0 8px 0', fontSize: '18px' }}>2. Đào tạo liên tục và phát triển nguồn nhân lực y tế</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                    Là cơ sở thực hành uy tín cho các bác sĩ trẻ, sinh viên các trường đại học và cao đẳng y dược trên địa bàn. Thường xuyên tổ chức các buổi sinh hoạt khoa học kỹ thuật, cập nhật kiến thức chuyên môn mới nhằm nâng cao tay nghề cho đội ngũ y bác sĩ và điều dưỡng trong khoa.
                  </p>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', borderLeft: '4px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#006633', margin: '0 0 8px 0', fontSize: '18px' }}>3. Nghiên cứu khoa học và ứng dụng công nghệ y học</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                    Chủ trì và tham gia thực hiện các đề tài nghiên cứu khoa học cấp cơ sở và cấp bộ, ứng dụng các phương pháp chẩn đoán sớm, liệu pháp điều trị mới nhằm nâng cao chất lượng chăm sóc sức khỏe, rút ngắn thời gian nằm viện và tiết kiệm chi phí cho người bệnh.
                  </p>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', borderLeft: '4px solid #006633', padding: '20px 25px', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#006633', margin: '0 0 8px 0', fontSize: '18px' }}>4. Chỉ đạo tuyến và truyền thông giáo dục sức khỏe cộng đồng</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                    Hỗ trợ chuyên môn kỹ thuật cho các tuyến y tế cơ sở theo sự phân công của Ban Giám đốc Bệnh viện. Đồng thời tích cực tổ chức các chương trình tư vấn sức khỏe, hướng dẫn người bệnh cách tự quản lý bệnh mạn tính tại nhà (như tiểu đường, cao huyết áp).
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

export default InternalMedicine;