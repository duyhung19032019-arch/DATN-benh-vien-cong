import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DoctorDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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

  // Dữ liệu chi tiết đồng bộ hoàn toàn 8 bác sĩ quốc tế
  const doctorsData = {
    1: {
      name: 'Prof. Dr. Robert Anderson',
      title: 'Chuyên gia Đầu ngành Tim mạch (Hoa Kỳ)',
      specialty: 'Tim mạch can thiệp',
      position: 'Cố vấn Y khoa Cấp cao',
      workplace: 'Trung tâm Tim mạch',
      experience: 'Hơn 30 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=80',
      bio: 'Prof. Dr. Robert Anderson là chuyên gia hàng đầu từ Hoa Kỳ về lĩnh vực tim mạch can thiệp, trực tiếp thực hiện các ca phẫu thuật mạch vành phức tạp.',
      education: '• Tốt nghiệp Đại học Y Harvard (Hoa Kỳ)\n• Tiến sĩ Y khoa chuyên ngành Tim mạch.',
      experienceList: '• 1992 - 2010: Bác sĩ phẫu thuật tim mạch Bệnh viện Johns Hopkins\n• 2010 - nay: Cố vấn cấp cao tại Bệnh viện Công.',
      awards: '• Huân chương danh dự vì sự phát triển y học quốc tế.',
      research: '• Hơn 40 công trình nghiên cứu về phương pháp nong mạch và đặt stent.'
    },
    2: {
      name: 'Dr. Sarah Jenkins',
      title: 'Chuyên gia Nội tiết & Đái tháo đường (Anh Quốc)',
      specialty: 'Nội tiết chuyển hóa',
      position: 'Trưởng khoa Nội tiết',
      workplace: 'Khoa Nội tổng hợp',
      experience: '25 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1594824813511-236b2857038e?w=800&auto=format&fit=crop&q=80',
      bio: 'Dr. Sarah Jenkins có nhiều đóng góp đột phá trong việc ứng dụng phác đồ điều trị tiên tiến cho bệnh nhân đái tháo đường và rối loạn nội tiết.',
      education: '• Tốt nghiệp Đại học Oxford (Anh Quốc)\n• Chuyên khoa sâu Nội tiết chuyển hóa.',
      experienceList: '• 15 năm làm việc tại các bệnh viện lớn ở London.',
      awards: '• Giải thưởng nghiên cứu y khoa Hoàng gia Anh.',
      research: '• Tác giả sách chuyên khảo về điều trị bệnh tuyến giáp.'
    },
    3: {
      name: 'Dr. Michael Smith',
      title: 'Trưởng khoa Ngoại Chấn thương Chỉnh hình (Đức)',
      specialty: 'Chấn thương Chỉnh hình',
      position: 'Chuyên gia Phẫu thuật Cấp cao',
      workplace: 'Viện Chấn thương chỉnh hình',
      experience: '28 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80',
      bio: 'Chuyên gia hàng đầu nước Đức về thay khớp nhân tạo công nghệ cao và phẫu thuật nội soi khớp tiên tiến.',
      education: '• Tiến sĩ Y khoa tại Đại học Heidelberg (Đức).',
      experienceList: '• 28 năm kinh nghiệm phẫu thuật xương khớp.',
      awards: '• Bằng khen của Hiệp hội Chỉnh hình Châu Âu.',
      research: '• Nghiên cứu vật liệu sinh học trong phẫu thuật thay khớp.'
    },
    4: {
      name: 'Dr. David Muller',
      title: 'Trưởng khoa Hồi sức Cấp cứu & Tích cực (Thụy Sĩ)',
      specialty: 'Hồi sức cấp cứu',
      position: 'Giám đốc Y khoa Hồi sức',
      workplace: 'Khoa Hồi sức tích cực',
      experience: 'Hơn 20 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80',
      bio: 'Chuyên gia Thụy Sĩ chuyên điều trị và quản lý các ca bệnh nặng, sốc đa chấn thương tại khoa ICU.',
      education: '• Tốt nghiệp Đại học Zurich (Thụy Sĩ).',
      experienceList: '• Giám đốc y khoa nhiều trung tâm cấp cứu quốc tế.',
      awards: '• Huy chương vì cộng đồng y tế toàn cầu.',
      research: '• Quy trình chuẩn quốc tế trong cấp cứu ngoại viện.'
    },
    5: {
      name: 'Dr. Elena Rostova',
      title: 'Chuyên gia Thần kinh học (Pháp)',
      specialty: 'Đột quỵ & Thần kinh',
      position: 'Trưởng đơn vị Thần kinh',
      workplace: 'Khoa Thần kinh',
      experience: '22 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1527613426441-2da17477366d?w=800&auto=format&fit=crop&q=80',
      bio: 'Chuyên gia người Pháp có bề dày kinh nghiệm trong điều trị đột quỵ cấp và các bệnh lý hệ thần kinh trung ương.',
      education: '• Tốt nghiệp Đại học Sorbonne (Pháp).',
      experienceList: '• 22 năm nghiên cứu và điều trị thần kinh học.',
      awards: '• Huân chương Hàn lâm Y học Pháp.',
      research: '• Phác đồ vàng trong cấp cứu bệnh nhân đột quỵ giờ đầu.'
    },
    6: {
      name: 'Dr. Hiroshi Tanaka',
      title: 'Chuyên gia Tiêu hóa & Nội soi (Nhật Bản)',
      specialty: 'Tiêu hóa - Gan mật',
      position: 'Cố vấn Kỹ thuật Nội soi',
      workplace: 'Khoa Tiêu hóa',
      experience: '26 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=80',
      bio: 'Tiên phong trong kỹ thuật nội soi chẩn đoán sớm ung thư đường tiêu hóa theo tiêu chuẩn Nhật Bản.',
      education: '• Tiến sĩ Y khoa Đại học Tokyo (Nhật Bản).',
      experienceList: '• 26 năm gắn bó với ngành tiêu hóa và nội soi can thiệp.',
      awards: '• Giải thưởng thành tựu y học Châu Á.',
      research: '• Ứng dụng AI trong nội soi phát hiện tổn thương sớm.'
    },
    7: {
      name: 'Dr. Carlos Mendez',
      title: 'Chuyên gia Ung bướu học (Tây Ban Nha)',
      specialty: 'Ung bướu & Xạ trị',
      position: 'Trưởng khoa Ung thư',
      workplace: 'Trung tâm Ung bướu',
      experience: '24 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=80',
      bio: 'Chuyên gia Tây Ban Nha chuyên sâu về liệu pháp miễn dịch và xạ trị định vị chuẩn xác trong điều trị ung thư.',
      education: '• Đại học Complutense de Madrid (Tây Ban Nha).',
      experienceList: '• 24 năm kinh nghiệm quản lý trung tâm ung bướu.',
      awards: '• Bằng khen hiệp hội ung thư học quốc tế.',
      research: '• Hiệu quả của liệu pháp miễn dịch kết hợp xạ trị.'
    },
    8: {
      name: 'Dr. Emily Watson',
      title: 'Chuyên gia Nhi khoa Quốc tế (Canada)',
      specialty: 'Nhi tổng hợp',
      position: 'Trưởng khoa Nhi',
      workplace: 'Khoa Nhi',
      experience: '19 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      bio: 'Chuyên gia Nhi khoa tận tâm đến từ Canada, chuyên điều trị các bệnh lý hô hấp và miễn dịch nhi khoa.',
      education: '• Tốt nghiệp Đại học Toronto (Canada).',
      experienceList: '• 19 năm chăm sóc sức khỏe trẻ em quốc tế.',
      awards: '• Thầy thuốc ưu tú vì trẻ em thế giới.',
      research: '• Phòng ngừa các bệnh lý hô hấp mãn tính ở trẻ nhỏ.'
    }
  };

  const doc = doctorsData[id] || doctorsData[1];

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

      {/* BREADCRUMB */}
      <div style={{ backgroundColor: '#f4f4f4', padding: '12px 80px', fontSize: '14px', color: '#666' }}>
        <span style={{ cursor: 'pointer', color: '#006633' }} onClick={() => navigate('/patient-dashboard')}>Trang chủ</span> &gt; 
        <span style={{ cursor: 'pointer', color: '#006633' }} onClick={() => navigate('/doctors')}> Đội ngũ bác sĩ</span> &gt; 
        <b> Chi tiết bác sĩ</b>
      </div>

      {/* NỘI DUNG CHI TIẾT BÁC SĨ */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', boxSizing: 'border-box' }}>
        
        <div>
          <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '100%', height: '480px', backgroundColor: '#f0f4f1', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <img 
                src={doc.image} 
                alt={doc.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div style={{ backgroundColor: '#006633', color: '#fff', padding: '25px' }}>
              <span style={{ fontSize: '13px', display: 'block', marginBottom: '6px', opacity: 0.9 }}>{doc.title}</span>
              <h2 style={{ fontSize: '30px', margin: 0, fontWeight: 'bold' }}>{doc.name}</h2>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '25px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #eee' }}>
              <span style={{ color: '#666', fontWeight: 'bold' }}>Chức vụ:</span>
              <span style={{ color: '#333', fontWeight: 'bold' }}>{doc.position}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span style={{ color: '#666', fontWeight: 'bold' }}>Chuyên khoa:</span>
              <span style={{ color: '#006633', fontWeight: 'bold' }}>{doc.specialty}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span style={{ color: '#666', fontWeight: 'bold' }}>Đơn vị công tác:</span>
              <span style={{ color: '#333' }}>{doc.workplace}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px' }}>
              <span style={{ color: '#666', fontWeight: 'bold' }}>Số năm kinh nghiệm:</span>
              <span style={{ color: '#d9534f', fontWeight: 'bold' }}>{doc.experience}</span>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#006633', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Giới thiệu</h3>
            <p style={{ color: '#444', lineHeight: '1.8', fontSize: '15px', margin: 0 }}>
              {doc.bio}
            </p>
          </div>

          <div style={{ backgroundColor: '#fcfcfc', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px' }}>
            <h4 style={{ color: '#006633', margin: '0 0 10px 0', fontSize: '17px', display: 'flex', justifyContent: 'space-between' }}>
              Quá trình đào tạo <span>▼</span>
            </h4>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-line' }}>
              {doc.education}
            </p>
          </div>

          <div style={{ backgroundColor: '#fcfcfc', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px' }}>
            <h4 style={{ color: '#006633', margin: '0 0 10px 0', fontSize: '17px', display: 'flex', justifyContent: 'space-between' }}>
              Kinh nghiệm làm việc <span>▼</span>
            </h4>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-line' }}>
              {doc.experienceList}
            </p>
          </div>

          <div style={{ backgroundColor: '#fcfcfc', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px' }}>
            <h4 style={{ color: '#006633', margin: '0 0 10px 0', fontSize: '17px', display: 'flex', justifyContent: 'space-between' }}>
              Giải thưởng & Danh hiệu <span>▼</span>
            </h4>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-line' }}>
              {doc.awards}
            </p>
          </div>

          <div style={{ backgroundColor: '#fcfcfc', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px' }}>
            <h4 style={{ color: '#006633', margin: '0 0 10px 0', fontSize: '17px', display: 'flex', justifyContent: 'space-between' }}>
              Sách, báo, công trình nghiên cứu <span>▼</span>
            </h4>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-line' }}>
              {doc.research}
            </p>
          </div>

          <div style={{ marginTop: '10px' }}>
            <button 
              onClick={() => navigate('/medical-schedule')}
              style={{ backgroundColor: '#ffcc00', color: '#000', border: 'none', padding: '14px 28px', borderRadius: '6px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', width: '100%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            >
              Đặt lịch khám với Bác sĩ ngay →
            </button>
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

export default DoctorDetail;