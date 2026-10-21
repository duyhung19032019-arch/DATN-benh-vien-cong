import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Cấu hình mặc định ban đầu là 0 sao cho tất cả các tiêu chí
  const [ratingOverall, setRatingOverall] = useState(0);
  const [ratingDoctor, setRatingDoctor] = useState(0);
  const [ratingFacility, setRatingFacility] = useState(0);
  const [ratingTime, setRatingTime] = useState(0);

  // Nội dung đóng góp ý kiến
  const [comments, setComments] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    { name: 'ĐÁNH GIÁ DỊCH VỤ', path: '/feedback' },
    { name: 'LIÊN HỆ', path: '/contact' }
  ];

  const starLabels = {
    0: 'Chưa đánh giá ☆',
    1: 'Rất thất vọng 😞',
    2: 'Không hài lòng 🙁',
    3: 'Bình thường 😐',
    4: 'Hài lòng 🙂',
    5: 'Rất hài lòng 😃'
  };

  // Component hiển thị hàng sao chọn lựa (Mặc định 0 sao)
  const StarRating = ({ value, onChange }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => onChange(star)}
            style={{
              fontSize: '28px',
              cursor: 'pointer',
              color: star <= value ? '#ffcc00' : '#ccc',
              transition: 'color 0.2s'
            }}
          >
            ★
          </span>
        ))}
        <span style={{ fontSize: '13px', color: value === 0 ? '#999' : '#666', fontWeight: 'bold', marginLeft: '10px' }}>
          {starLabels[value]}
        </span>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ratingOverall === 0 || ratingDoctor === 0 || ratingFacility === 0 || ratingTime === 0) {
      alert('Vui lòng chọn đánh giá số sao (từ 1 đến 5 sao) cho tất cả các tiêu chí trước khi gửi!');
      return;
    }
    setIsSubmitted(true);
  };

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
            <span style={{ color: item.name === 'ĐÁNH GIÁ DỊCH VỤ' ? '#ffcc00' : '#fff' }} onClick={() => item.path !== '#' && navigate(item.path)}>
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
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Khảo Sát Ý Kiến & Đánh Giá Dịch Vụ</h1>
        <p style={{ fontSize: '15px', opacity: 0.9, marginTop: '8px' }}>Chung tay nâng cao chất lượng khám chữa bệnh tại Bệnh viện Công</p>
      </div>

      {/* KHU VỰC KHẢO SÁT & GÓP Ý */}
      <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 20px', boxSizing: 'border-box' }}>
        
        {isSubmitted ? (
          <div style={{ backgroundColor: '#fff', border: '1px solid #c8e6c9', borderRadius: '12px', padding: '50px 30px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '60px', marginBottom: '15px' }}>🎉</div>
            <h2 style={{ color: '#006633', margin: '0 0 10px 0', fontSize: '26px' }}>Cảm ơn bạn đã gửi đánh giá!</h2>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 25px auto' }}>
              Ý kiến đóng góp của bạn là động lực vô cùng quý giá giúp Ban Giám đốc và toàn thể y bác sĩ Bệnh viện Công liên tục cải thiện và nâng cao chất lượng phục vụ.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setComments('');
                setRatingOverall(0);
                setRatingDoctor(0);
                setRatingFacility(0);
                setRatingTime(0);
              }}
              style={{ backgroundColor: '#006633', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '6px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}
            >
              Gửi phản hồi khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '35px 40px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            
            <h3 style={{ color: '#006633', margin: '0 0 20px 0', fontSize: '20px', borderBottom: '2px solid #006633', paddingBottom: '10px' }}>
              ⭐ Khảo sát mức độ hài lòng (Bấm sao để chọn)
            </h3>

            {/* TIÊU CHÍ 1 */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#333', marginBottom: '8px', fontSize: '15px' }}>
                1. Đánh giá chất lượng dịch vụ tổng quan:
              </label>
              <StarRating value={ratingOverall} onChange={setRatingOverall} />
            </div>

            {/* TIÊU CHÍ 2 */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#333', marginBottom: '8px', fontSize: '15px' }}>
                2. Thái độ phục vụ của Bác sĩ & Điều dưỡng:
              </label>
              <StarRating value={ratingDoctor} onChange={setRatingDoctor} />
            </div>

            {/* TIÊU CHÍ 3 */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#333', marginBottom: '8px', fontSize: '15px' }}>
                3. Cơ sở vật chất, vệ sinh & Thiết bị y tế:
              </label>
              <StarRating value={ratingFacility} onChange={setRatingFacility} />
            </div>

            {/* TIÊU CHÍ 4 */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#333', marginBottom: '8px', fontSize: '15px' }}>
                4. Thời gian làm thủ tục & Chờ đợi khám bệnh:
              </label>
              <StarRating value={ratingTime} onChange={setRatingTime} />
            </div>

            {/* PHẦN Ý KIẾN ĐÓNG GÓP BẰNG CHỮ */}
            <h3 style={{ color: '#006633', margin: '30px 0 15px 0', fontSize: '20px', borderBottom: '2px solid #006633', paddingBottom: '10px' }}>
              ✍️ Ý kiến góp ý chi tiết & Đề xuất cải thiện
            </h3>

            <div style={{ marginBottom: '25px' }}>
              <textarea
                rows="5"
                placeholder="Vui lòng nhập chi tiết trải nghiệm hoặc đóng góp ý kiến của bạn tại đây (Ví dụ: Thái độ phục vụ, quy trình khám, vệ sinh phòng bệnh...)..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                style={{ width: '100%', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }}
                required
              />
            </div>

            {/* NÚT GỬI PHẢN HỒI */}
            <div style={{ textAlign: 'right' }}>
              <button
                type="submit"
                style={{ backgroundColor: '#d9534f', color: '#fff', border: 'none', padding: '14px 35px', borderRadius: '6px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(217,83,79,0.3)' }}
              >
                Gửi phản hồi ngay 🚀
              </button>
            </div>

          </form>
        )}

      </div>

      {/* FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '60px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default Feedback;