import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4;

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

  // Danh sách 8 bác sĩ quốc tế chuẩn xác, đồng bộ hoàn toàn sang DoctorDetail
  const doctorsData = [
    {
      id: 1,
      name: 'Prof. Dr. Robert Anderson',
      title: 'Chuyên gia Đầu ngành Tim mạch (Hoa Kỳ)',
      specialty: 'Tim mạch can thiệp',
      position: 'Cố vấn Y khoa Cấp cao',
      workplace: 'Trung tâm Tim mạch',
      experience: 'Hơn 30 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Dr. Sarah Jenkins',
      title: 'Chuyên gia Nội tiết & Đái tháo đường (Anh Quốc)',
      specialty: 'Nội tiết chuyển hóa',
      position: 'Trưởng khoa Nội tiết',
      workplace: 'Khoa Nội tổng hợp',
      experience: '25 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1594824813511-236b2857038e?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Dr. Michael Smith',
      title: 'Trưởng khoa Ngoại Chấn thương Chỉnh hình (Đức)',
      specialty: 'Chấn thương Chỉnh hình',
      position: 'Chuyên gia Phẫu thuật Cấp cao',
      workplace: 'Viện Chấn thương chỉnh hình',
      experience: '28 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Dr. David Muller',
      title: 'Trưởng khoa Hồi sức Cấp cứu & Tích cực (Thụy Sĩ)',
      specialty: 'Hồi sức cấp cứu',
      position: 'Giám đốc Y khoa Hồi sức',
      workplace: 'Khoa Hồi sức tích cực',
      experience: 'Hơn 20 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      name: 'Dr. Elena Rostova',
      title: 'Chuyên gia Thần kinh học (Pháp)',
      specialty: 'Đột quỵ & Thần kinh',
      position: 'Trưởng đơn vị Thần kinh',
      workplace: 'Khoa Thần kinh',
      experience: '22 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1527613426441-2da17477366d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      name: 'Dr. Hiroshi Tanaka',
      title: 'Chuyên gia Tiêu hóa & Nội soi (Nhật Bản)',
      specialty: 'Tiêu hóa - Gan mật',
      position: 'Cố vấn Kỹ thuật Nội soi',
      workplace: 'Khoa Tiêu hóa',
      experience: '26 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      name: 'Dr. Carlos Mendez',
      title: 'Chuyên gia Ung bướu học (Tây Ban Nha)',
      specialty: 'Ung bướu & Xạ trị',
      position: 'Trưởng khoa Ung thư',
      workplace: 'Trung tâm Ung bướu',
      experience: '24 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 8,
      name: 'Dr. Emily Watson',
      title: 'Chuyên gia Nhi khoa Quốc tế (Canada)',
      specialty: 'Nhi tổng hợp',
      position: 'Trưởng khoa Nhi',
      workplace: 'Khoa Nhi',
      experience: '19 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    }
  ];

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctorsData.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctorsData.length / doctorsPerPage);

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
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Đội Ngũ Chuyên Gia & Bác Sĩ Quốc Tế</h1>
        <p style={{ fontSize: '15px', opacity: 0.9, marginTop: '8px' }}>Y đức toàn cầu - Hợp tác y tế chất lượng cao tại Bệnh viện Công</p>
      </div>

      {/* DANH SÁCH BÁC SĨ */}
      <div style={{ maxWidth: '1200px', margin: '50px auto', padding: '0 20px', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginBottom: '40px' }}>
          {currentDoctors.map((doc) => (
            <div 
              key={doc.id}
              onClick={() => navigate(`/doctor-detail/${doc.id}`)}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'transform 0.2s, border-color 0.2s',
                display: 'flex',
                gap: '20px',
                padding: '20px',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#006633';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ width: '160px', height: '180px', backgroundColor: '#f0f4f1', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center top' 
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flex: 1 }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#d9534f', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>{doc.title}</span>
                  <h3 style={{ fontSize: '20px', color: '#006633', margin: '0 0 6px 0', fontWeight: 'bold' }}>{doc.name}</h3>
                  <p style={{ fontSize: '13px', color: '#555', margin: '0 0 10px 0', lineHeight: '1.4' }}>{doc.experience} chuyên khoa sâu.</p>
                </div>
                <button style={{ backgroundColor: '#006633', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', width: 'fit-content' }}>
                  Xem chi tiết →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PHÂN TRANG */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '40px', marginBottom: '60px' }}>
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '8px',
                  border: currentPage === pageNum ? '2px solid #006633' : '1px solid #ccc',
                  backgroundColor: currentPage === pageNum ? '#006633' : '#fff',
                  color: currentPage === pageNum ? '#fff' : '#333',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: currentPage === pageNum ? '0 4px 10px rgba(0,102,51,0.3)' : 'none',
                  transition: '0.2s'
                }}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

      </div>

      {/* FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default DoctorList;