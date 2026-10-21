import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExaminationProcess = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Trạng thái bật/tắt xem chi tiết cho 2 quy trình
  const [showDetailBHYT, setShowDetailBHYT] = useState(false);
  const [showDetailKhongBHYT, setShowDetailKhongBHYT] = useState(false);

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
        { name: 'Quy trình khám', path: '/examination-process' },
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
    { name: 'Quy trình khám bệnh', path: '/examination-process', active: true },
    { name: 'Bảng giá dịch vụ', path: '/service-price-list' },
     { name: 'Thủ tục nhập - xuất viện', path: '/admission-discharge' },
     { name: 'Liên hệ & Góp ý', path: '/contact' }
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
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Quy trình khám bệnh</h1>
      </div>

      {/* 4. CHÍNH SÁCH VÀ NỘI DUNG (LAYOUT 2 CỘT) */}
      <div style={{ width: '100%', padding: '50px 80px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px' }}>
          
          {/* CỘT TRÁI: NỘI DUNG QUY TRÌNH KHÁM BỆNH */}
          <div>
            <h2 style={{ color: '#006633', fontSize: '26px', fontWeight: 'bold', marginBottom: '20px' }}>
              Quy trình khám bệnh – Bệnh viện Công
            </h2>
            <p style={{ color: '#333', lineHeight: '1.7', fontSize: '15px', marginBottom: '15px' }}>
              Bệnh viện Công xây dựng quy trình khám bệnh khoa học, thống nhất và thuận tiện, nhằm rút ngắn thời gian chờ đợi và đảm bảo người bệnh được tiếp nhận, chẩn đoán và điều trị hiệu quả nhất. Toàn bộ các bước đều có nhân viên hỗ trợ, hướng dẫn cụ thể để người bệnh dễ dàng thực hiện.
            </p>
            <p style={{ color: '#333', lineHeight: '1.7', fontSize: '15px', marginBottom: '10px' }}>
              Hiện tại Bệnh viện có các khu vực khám bệnh ngoại trú (bảo hiểm y tế – dịch vụ) như sau:
            </p>
            <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8', fontSize: '15px', marginBottom: '20px' }}>
              <li>Khám bệnh Cán bộ cao cấp và khám bệnh Đa khoa: Tại tòa nhà 1000 giường</li>
              <li>Khám bệnh Chấn thương, Theo yêu cầu: Tại tòa nhà Viện Chấn thương chỉnh hình</li>
              <li>Khám bệnh Ung bướu: Tại tòa nhà Viện Ung bướu và Y học hạt nhân</li>
            </ul>

            <p style={{ color: '#333', lineHeight: '1.7', fontSize: '15px', marginBottom: '35px' }}>
              Quy trình khám bệnh thường quy (khám bệnh Đa khoa, khám bệnh Chấn thương và Khám bệnh Ung bướu) chia làm 2 nhóm: <b>A. CÓ THỂ BẢO HIỂM Y TẾ</b> và <b>B. KHÔNG CÓ THỂ BẢO HIỂM Y TẾ</b>.
            </p>

            {/* PHẦN A: CÓ THỂ BẢO HIỂM Y TẾ */}
            <div style={{ marginBottom: '50px' }}>
              <h3 style={{ color: '#006633', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
                A. CÓ THỂ BẢO HIỂM Y TẾ
              </h3>

              {/* Sơ đồ quy trình A (Có BHYT) được vẽ giao diện khối chuẩn 100% */}
              <div style={{ width: '100%', backgroundColor: '#fbfdfb', border: '1px solid #e1efe5', borderRadius: '12px', padding: '30px 20px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                
                {/* Bước 1 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 25px', borderRadius: '8px' }}>1</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '280px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>LẤY SỐ THỨ TỰ</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Tại Sảnh tầng trệt</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#1b7538', fontSize: '20px', margin: '-5px 0 10px 0' }}>↓</div>

                {/* Bước 2 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 22px', borderRadius: '8px' }}>2</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '280px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>ĐĂNG KÝ KHÁM BỆNH</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Tại Sảnh tầng trệt</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#1b7538', fontSize: '20px', margin: '-5px 0 10px 0' }}>↓</div>

                {/* Bước 3 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '25px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 22px', borderRadius: '8px' }}>3</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '280px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>KHÁM BỆNH</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Tại Phòng khám</div>
                  </div>
                </div>

                {/* Phân nhánh Có chỉ định & Không chỉ định */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px', borderTop: '2px dashed #1b7538', paddingTop: '20px' }}>
                  
                  {/* Nhánh Trái: Có chỉ định Cận lâm sàng */}
                  <div style={{ borderRight: '1px solid #e0e0e0', paddingRight: '15px' }}>
                    <div style={{ color: '#d9534f', fontWeight: 'bold', fontSize: '13px', marginBottom: '15px', textAlign: 'center' }}>
                      Có chỉ định Cận lâm sàng ➔
                    </div>
                    
                    {/* Bước 4 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '20px', padding: '8px 15px', borderRadius: '6px' }}>4</div>
                      <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '10px 15px', borderRadius: '6px', flex: 1, fontSize: '13px' }}>
                        <div style={{ fontWeight: 'bold' }}>XÁC NHẬN BẢO HIỂM</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Tại Quầy thu phí</div>
                      </div>
                    </div>

                    {/* Bước 5 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '20px', padding: '8px 15px', borderRadius: '6px' }}>5</div>
                      <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '10px 15px', borderRadius: '6px', flex: 1, fontSize: '13px' }}>
                        <div style={{ fontWeight: 'bold' }}>THỰC HIỆN CẬN LÂM SÀNG</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Quay lại phòng khám ban đầu</div>
                      </div>
                    </div>
                  </div>

                  {/* Nhánh Phải: Không có chỉ định Cận lâm sàng */}
                  <div style={{ paddingLeft: '15px' }}>
                    <div style={{ color: '#1b7538', fontWeight: 'bold', fontSize: '13px', marginBottom: '15px', textAlign: 'center' }}>
                      Không có chỉ định Cận lâm sàng ➔
                    </div>

                    {/* Bước 6 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '20px', padding: '8px 15px', borderRadius: '6px' }}>6</div>
                      <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '10px 15px', borderRadius: '6px', flex: 1, fontSize: '13px' }}>
                        <div style={{ fontWeight: 'bold' }}>ĐÓNG TIỀN CHÊNH LỆCH</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Tại Quầy thu phí</div>
                      </div>
                    </div>

                    {/* Bước 7 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '20px', padding: '8px 15px', borderRadius: '6px' }}>7</div>
                      <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '10px 15px', borderRadius: '6px', flex: 1, fontSize: '13px' }}>
                        <div style={{ fontWeight: 'bold' }}>NHẬN THUỐC & RA VỀ</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Tại Quầy tầng trệt</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Nút Xem chi tiết quy trình A */}
              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <button
                  onClick={() => setShowDetailBHYT(!showDetailBHYT)}
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
                  {showDetailBHYT ? 'Thu gọn ˄' : 'Xem chi tiết quy trình ˅'}
                </button>
              </div>

              {showDetailBHYT && (
                <div style={{ backgroundColor: '#fcfcfc', padding: '25px', borderRadius: '8px', border: '1px solid #eee', marginTop: '15px', lineHeight: '1.8', color: '#333', fontSize: '14.5px' }}>
                  <p><b>1. Lấy số thứ tự – Tại sảnh tầng trệt</b><br />
                  Khi đến bệnh viện, người bệnh di chuyển đến khu vực phát số thứ tự tại sảnh tầng trệt.<br />
                  • Nhận số thứ tự để vào quầy đăng ký khám.<br />
                  • Chuẩn bị giấy tờ cần thiết (CCCD, thẻ BHYT, giấy chuyển tuyến nếu có).</p>

                  <p><b>2. Đăng ký khám bệnh – Tại sảnh tầng trệt</b><br />
                  Khi đến lượt số của mình:<br />
                  • Người bệnh tiến hành đăng ký khám (khám thường, khám dịch vụ...).<br />
                  • Nhân viên y tế kiểm tra thông tin, xuất phiếu khám và hướng dẫn đến phòng khám chuyên khoa phù hợp.<br />
                  • Sau khi hoàn tất đăng ký, người bệnh chờ đến lượt vào khám theo số thứ tự tại phòng khám.</p>

                  <p><b>3. Khám bệnh – Tại phòng khám</b><br />
                  Bác sĩ tiến hành thăm khám, hỏi bệnh và đánh giá ban đầu. Tại bước này, có 2 trường hợp:<br />
                  <span style={{ color: '#d9534f', fontWeight: 'bold' }}>Trường hợp 1 – Có chỉ định cận lâm sàng (Chuyển sang bước 4, bước 5)</span><br />
                  Bác sĩ yêu cầu thực hiện thêm các kỹ thuật như xét nghiệm, X-quang, siêu âm, CT, MRI...<br />
                  <span style={{ color: '#d9534f', fontWeight: 'bold' }}>Trường hợp 2 – Không có chỉ định cận lâm sàng (Chuyển sang bước 6, bước 7)</span><br />
                  Bác sĩ chỉ kê đơn thuốc hoặc tư vấn điều trị.</p>

                  <p><span style={{ color: '#d9534f', fontWeight: 'bold' }}>TRƯỜNG HỢP 1: CÓ CHỈ ĐỊNH CẬN LÂM SÀNG</span><br />
                  <b>4. Xác nhận bảo hiểm – Tại quầy thu phí</b><br />
                  • Xác nhận quyền lợi BHYT.<br />
                  • Kiểm tra mức hưởng, mức chi trả.<br />
                  • Tạm ứng hoặc đóng phí theo quy định (nếu có).</p>

                  <p><b>5. Thực hiện cận lâm sàng</b><br />
                  Người bệnh thực hiện các kỹ thuật:<br />
                  • Xét nghiệm<br />
                  • Chẩn đoán hình ảnh (siêu âm, X-quang, CT, MRI...)<br />
                  • Thăm dò chức năng<br />
                  Sau khi hoàn tất, quay lại phòng khám ban đầu để bác sĩ xem kết quả.</p>

                  <p><b>Quay lại phòng khám ban đầu</b><br />
                  Bác sĩ xem kết quả cận lâm sàng và đưa ra chẩn đoán cuối cùng. Sau đó sẽ kê đơn thuốc hoặc tư vấn điều trị &rarr; tiếp tục chuyển sang bước 6, 7.</p>

                  <p><span style={{ color: '#d9534f', fontWeight: 'bold' }}>TRƯỜNG HỢP 2: KHÔNG CÓ CHỈ ĐỊNH CẬN LÂM SÀNG</span><br />
                  <b>6. Đóng tiền chênh lệch – Tại quầy thu phí</b><br />
                  Áp dụng theo quy định BHYT hoặc khám dịch vụ. Người bệnh thanh toán các khoản chênh lệch nếu có (tiền khám, thuốc, vật tư...).</p>

                  <p><b>7. Nhận thuốc – Tại quầy tầng trệt</b><br />
                  Người bệnh mang đơn thuốc đến quầy phát thuốc để nhận thuốc. Nhân viên hướng dẫn cách dùng, liều lượng và lưu ý trong quá trình uống thuốc.</p>
                </div>
              )}
            </div>

            {/* PHẦN B: KHÔNG CÓ THỂ BẢO HIỂM Y TẾ */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#006633', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
                B. KHÔNG CÓ THỂ BẢO HIỂM Y TẾ
              </h3>

              {/* Sơ đồ quy trình B (Không BHYT) được vẽ giao diện khối chuẩn 100% */}
              <div style={{ width: '100%', backgroundColor: '#fbfdfb', border: '1px solid #e1efe5', borderRadius: '12px', padding: '30px 20px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                
                {/* Bước 1 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 25px', borderRadius: '8px' }}>1</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '280px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>LẤY SỐ THỨ TỰ</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Tại Sảnh tầng trệt</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#1b7538', fontSize: '20px', margin: '-5px 0 10px 0' }}>↓</div>

                {/* Bước 2 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 22px', borderRadius: '8px' }}>2</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '280px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>ĐĂNG KÝ KHÁM BỆNH</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Tại Sảnh tầng trệt</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#1b7538', fontSize: '20px', margin: '-5px 0 10px 0' }}>↓</div>

                {/* Bước 3 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', marginBottom: '25px' }}>
                  <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '28px', padding: '15px 22px', borderRadius: '8px' }}>3</div>
                  <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '12px 40px', borderRadius: '8px', textAlign: 'center', minWidth: '280px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>KHÁM BỆNH</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Tại Phòng khám</div>
                  </div>
                </div>

                {/* Phân nhánh Có chỉ định & Không chỉ định */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px', borderTop: '2px dashed #1b7538', paddingTop: '20px' }}>
                  
                  {/* Nhánh Trái: Có chỉ định Cận lâm sàng */}
                  <div style={{ borderRight: '1px solid #e0e0e0', paddingRight: '15px' }}>
                    <div style={{ color: '#d9534f', fontWeight: 'bold', fontSize: '13px', marginBottom: '15px', textAlign: 'center' }}>
                      Có chỉ định Cận lâm sàng ➔
                    </div>
                    
                    {/* Bước 4 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '20px', padding: '8px 15px', borderRadius: '6px' }}>4</div>
                      <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '10px 15px', borderRadius: '6px', flex: 1, fontSize: '13px' }}>
                        <div style={{ fontWeight: 'bold' }}>ĐÓNG TIỀN CẬN LÂM SÀNG</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Tại Quầy thu phí</div>
                      </div>
                    </div>

                    {/* Bước 5 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '20px', padding: '8px 15px', borderRadius: '6px' }}>5</div>
                      <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '10px 15px', borderRadius: '6px', flex: 1, fontSize: '13px' }}>
                        <div style={{ fontWeight: 'bold' }}>THỰC HIỆN CẬN LÂM SÀNG</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Quay lại phòng khám ban đầu</div>
                      </div>
                    </div>
                  </div>

                  {/* Nhánh Phải: Không có chỉ định Cận lâm sàng */}
                  <div style={{ paddingLeft: '15px' }}>
                    <div style={{ color: '#1b7538', fontWeight: 'bold', fontSize: '13px', marginBottom: '15px', textAlign: 'center' }}>
                      Không có chỉ định Cận lâm sàng ➔
                    </div>

                    {/* Bước 6 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ backgroundColor: '#f0f7f2', color: '#1b7538', fontWeight: 'bold', fontSize: '20px', padding: '8px 15px', borderRadius: '6px' }}>6</div>
                      <div style={{ backgroundColor: '#1b7538', color: '#fff', padding: '10px 15px', borderRadius: '6px', flex: 1, fontSize: '13px' }}>
                        <div style={{ fontWeight: 'bold' }}>MUA THUỐC & RA VỀ</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Tại Quầy tầng trệt</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <button
                  onClick={() => setShowDetailKhongBHYT(!showDetailKhongBHYT)}
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
                  {showDetailKhongBHYT ? 'Thu gọn ˄' : 'Xem chi tiết quy trình ˅'}
                </button>
              </div>

              {showDetailKhongBHYT && (
                <div style={{ backgroundColor: '#fcfcfc', padding: '25px', borderRadius: '8px', border: '1px solid #eee', marginTop: '15px', lineHeight: '1.8', color: '#333', fontSize: '14.5px' }}>
                  <p><b>Bước 1. Lấy số thứ tự – Tại sảnh tầng trệt</b><br />
                  Khi đến bệnh viện, người bệnh di chuyển đến khu vực phát số thứ tự tại sảnh tầng trệt.<br />
                  • Nhận số thứ tự để vào quầy đăng ký khám.<br />
                  • Chuẩn bị giấy tờ cần thiết (CCCD).</p>

                  <p><b>Bước 2. Đăng ký khám bệnh – Tại sảnh tầng trệt</b><br />
                  Khi đến lượt số của mình:<br />
                  • Người bệnh tiến hành đăng ký khám (khám thường, khám dịch vụ...).<br />
                  • Nhân viên y tế kiểm tra thông tin, thu phí khám và hướng dẫn đến phòng khám chuyên khoa phù hợp.<br />
                  • Sau khi hoàn tất đăng ký, người bệnh chờ đến lượt vào khám theo số thứ tự tại phòng khám.</p>

                  <p><b>Bước 3. Khám bệnh – Tại phòng khám</b><br />
                  Bác sĩ tiến hành thăm khám, hỏi bệnh và đánh giá ban đầu. Tại bước này, có 2 trường hợp:<br />
                  <span style={{ color: '#d9534f', fontWeight: 'bold' }}>Trường hợp 1 – Có chỉ định cận lâm sàng (Chuyển sang bước 4, bước 5)</span><br />
                  Bác sĩ yêu cầu thực hiện thêm các kỹ thuật như xét nghiệm, X-quang, siêu âm, CT, MRI...<br />
                  <span style={{ color: '#d9534f', fontWeight: 'bold' }}>Trường hợp 2 – Không có chỉ định cận lâm sàng (Chuyển sang bước 6)</span><br />
                  Bác sĩ chỉ kê đơn thuốc hoặc tư vấn điều trị.</p>

                  <p><span style={{ color: '#d9534f', fontWeight: 'bold' }}>TRƯỜNG HỢP 1: CÓ CHỈ ĐỊNH CẬN LÂM SÀNG</span><br />
                  <b>Bước 4. Đóng tiền cận lâm sàng – Tại quầy thu phí</b><br />
                  Người bệnh đến quầy thu phí để thanh toán chi phí cho các dịch vụ cận lâm sàng mà bác sĩ đã chỉ định.</p>

                  <p><b>Bước 5. Thực hiện cận lâm sàng</b><br />
                  Người bệnh di chuyển đến các khu vực xét nghiệm – chẩn đoán hình ảnh – thăm dò chức năng để làm theo chỉ định. Sau khi có kết quả, quay lại phòng khám ban đầu để bác sĩ chẩn đoán.</p>

                  <p><span style={{ color: '#d9534f', fontWeight: 'bold' }}>TRƯỜNG HỢP 2: KHÔNG CÓ CHỈ ĐỊNH CẬN LÂM SÀNG</span><br />
                  <b>Bước 6. Mua thuốc – Tại quầy tầng trệt</b><br />
                  Người bệnh cầm đơn thuốc đến quầy nhà thuốc bệnh viện để mua thuốc theo đơn chỉ định của bác sĩ và hoàn tất quy trình khám bệnh.</p>
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

export default ExaminationProcess;