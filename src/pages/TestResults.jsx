import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TestResults = () => {
  const navigate = useNavigate();

  // Lấy dữ liệu bệnh nhân từ localStorage (hoặc dùng mặc định)
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'BÙI QUỐC DUY HÙNG';
  const ngaySinh = localStorage.getItem('ngaySinh') || '01/10/2002';
  const cccd = localStorage.getItem('cccd') || '079202001234';
  const diaChi = localStorage.getItem('diaChi') || '786 Nguyễn Kiệm, Phường 3, Quận Gò Vấp, TP. Hồ Chí Minh';

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Mặc định bác sĩ CHƯA điền phiếu bệnh (isDiagnosed = false) -> Hiển thị khoảng trắng/chờ
  const [isDiagnosed, setIsDiagnosed] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

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
        { name: 'Thẻ Bảo hiểm y tế', path: '/health-insurance' },
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

  // Danh mục hóa đơn thuốc
  const danhSachThuoc = [
    { tenThuoc: 'Paracetamol 500mg', soLuong: '20 viên', lieudung: 'Sáng 1, Chiều 1 sau ăn', donGia: 1500, thanhTien: 30000 },
    { tenThuoc: 'Augmentin 625mg', soLuong: '14 viên', lieudung: 'Sáng 1, Tối 1 sau ăn', donGia: 12000, thanhTien: 168000 },
    { tenThuoc: 'Sorbitol 5g', soLuong: '10 gói', lieudung: 'Hòa nước uống mỗi sáng', donGia: 3500, thanhTien: 35000 },
    { tenThuoc: 'Vitamin C 500mg', soLuong: '20 viên', lieudung: 'Uống 1 viên sau ăn sáng', donGia: 1000, thanhTien: 20000 }
  ];

  const tongTienThuoc = danhSachThuoc.reduce((acc, cur) => acc + cur.thanhTien, 0);
  const bhytThanhToan = Math.round(tongTienThuoc * 0.8);
  const benhNhanThanhToan = tongTienThuoc - bhytThanhToan;

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
      <div style={{ width: '100%', backgroundColor: '#006633', color: '#fff', padding: '40px 0', textAlign: 'center', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Tra Cứu Kết Quả Khám & Đơn Thuốc</h1>
        <p style={{ fontSize: '15px', opacity: 0.9, marginTop: '8px' }}>Hệ thống quản lý bệnh án điện tử và thanh toán chi phí khám chữa bệnh</p>
      </div>

      {/* NỘI DUNG CHÍNH */}
      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', boxSizing: 'border-box' }}>

        {/* NÚT TẢI GIẢ LẬP TRẠNG THÁI BÁC SĨ (DÀNH CHO ĐỒ ÁN / KIỂM THỬ) */}
        <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeeba', padding: '15px 20px', borderRadius: '8px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#856404' }}>
            ⚙️ <b>Chế độ kiểm thử Demo:</b> {isDiagnosed ? "Bác sĩ ĐÃ điền phiếu khám." : "Bác sĩ CHƯA điền phiếu khám (hiển thị khoảng trắng)."}
          </span>
          <button 
            onClick={() => setIsDiagnosed(!isDiagnosed)}
            style={{ backgroundColor: isDiagnosed ? '#6c757d' : '#006633', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}
          >
            {isDiagnosed ? "Chuyển về trạng thái CHỜ" : "Giả lập: Bác sĩ đã nhập kết quả"}
          </button>
        </div>

        {/* PHẦN 1: THÔNG TIN BỆNH NHÂN & BHYT */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
          <h2 style={{ color: '#006633', fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '20px', borderBottom: '2px solid #006633', paddingBottom: '10px' }}>
             Thông tin bệnh nhân & Thẻ BHYT
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '15px', color: '#333' }}>
            <div>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Họ và tên:</b> <span style={{ color: '#006633', fontWeight: 'bold', textTransform: 'uppercase' }}>{hoTenBenhNhan}</span></p>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Ngày sinh:</b> {ngaySinh}</p>
              <p style={{ margin: 0 }}>• <b>Số CCCD/Định danh:</b> {cccd}</p>
            </div>
            <div>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Mã số BHYT:</b> <span style={{ color: '#d9534f', fontWeight: 'bold' }}>DN4797932100888</span></p>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Nơi ĐKKCB ban đầu:</b> [79-055] Bệnh viện Công</p>
              <p style={{ margin: 0 }}>• <b>Mức hưởng BHYT:</b> <span style={{ color: '#006633', fontWeight: 'bold' }}>80% chi phí khám chữa bệnh</span></p>
            </div>
            <div style={{ gridColumn: '1 / -1', borderTop: '1px dashed #eee', paddingTop: '10px', marginTop: '5px' }}>
              <p style={{ margin: 0 }}>• <b>Địa chỉ thường trú:</b> {diaChi}</p>
            </div>
          </div>
        </div>

        {/* PHẦN 2: THÔNG TIN LỊCH ĐẶT KHÁM & BÁC SĨ ĐẢM NHẬN */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
          <h2 style={{ color: '#006633', fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '20px', borderBottom: '2px solid #006633', paddingBottom: '10px' }}>
             Lịch khám & Bác sĩ phụ trách
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '15px', color: '#333' }}>
            <div>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Ngày khám:</b> <span style={{ fontWeight: 'bold' }}>21/10/2026</span></p>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Chuyên khoa:</b> Khoa Nội tổng hợp</p>
              <p style={{ margin: 0 }}>• <b>Phòng khám:</b> Phòng 101 - Tòa nhà 1000 giường</p>
            </div>
            <div>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Bác sĩ khám:</b> <span style={{ color: '#006633', fontWeight: 'bold' }}>ThS.BSCKII. Nguyễn Văn Hùng</span></p>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Khoa trực:</b> Khoa Nội tổng hợp - Bệnh viện Công</p>
              <p style={{ margin: 0 }}>• <b>Số thứ tự khám:</b> <b style={{ color: '#d9534f', fontSize: '18px' }}>STT 18</b></p>
            </div>
          </div>
        </div>

        {/* PHẦN 3: THÔNG TIN BỆNH NGHỆ & CHẨN ĐOÁN (NẾU BÁC SĨ CHƯA ĐIỀN SẼ HIỆN KHỎANG TRẮNG CHỜ) */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
          <h2 style={{ color: '#006633', fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '20px', borderBottom: '2px solid #006633', paddingBottom: '10px' }}>
             Chẩn đoán & Kết luận của Bác sĩ
          </h2>

          {!isDiagnosed ? (
            /* KHOẢNG TRẮNG CHỜ BÁC SĨ ĐIỀN PHIẾU KHÁM */
            <div style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', border: '2px dashed #ccc', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>⌛</div>
              <h3 style={{ margin: '0 0 8px 0', color: '#666', fontSize: '18px' }}>Chưa có kết quả chẩn đoán</h3>
              <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>Bác sĩ phụ trách đang tiến hành thăm khám hoặc chưa cập nhật phiếu bệnh. Vui lòng quay lại sau!</p>
            </div>
          ) : (
            /* KHI BÁC SĨ ĐÃ ĐIỀN KẾT QUẢ KHÁM */
            <div style={{ backgroundColor: '#f0f7f2', padding: '20px 25px', borderRadius: '8px', borderLeft: '5px solid #006633', fontSize: '15px', lineHeight: '1.8', color: '#333' }}>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Tình trạng lâm sàng:</b> Bệnh nhân tỉnh táo, mệt mỏi nhẹ, ho hắng kéo dài 3 ngày, sốt nhẹ 37.8°C.</p>
              <p style={{ margin: '0 0 10px 0' }}>• <b>Chẩn đoán chính:</b> <span style={{ color: '#d9534f', fontWeight: 'bold', fontSize: '16px' }}>Viêm phế quản cấp / Tăng huyết áp độ 1 (ICD-10: J20)</span></p>
              <p style={{ margin: 0 }}>• <b>Lời khuyên của bác sĩ:</b> Tăng cường uống nhiều nước, ăn đồ ấm, nghỉ ngơi hợp lý và tái khám sau 7 ngày hoặc khi có dấu hiệu bất thường.</p>
            </div>
          )}
        </div>

        {/* PHẦN 4: HÓA ĐƠN THUỐC & NÚT THANH TOÁN (CHỈ HIỆN KHI CÓ KẾT QUẢ KHÁM) */}
        {isDiagnosed && (
          <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', marginBottom: '50px' }}>
            <h2 style={{ color: '#006633', fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '20px', borderBottom: '2px solid #006633', paddingBottom: '10px' }}>
               Hóa đơn thuốc & Chi phí khám
            </h2>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginBottom: '25px' }}>
              <thead>
                <tr style={{ backgroundColor: '#006633', color: '#fff' }}>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #006633' }}>STT</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #006633' }}>Tên thuốc / Vật tư</th>
                  <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #006633' }}>Số lượng</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #006633' }}>Liều dùng & Cách dùng</th>
                  <th style={{ padding: '12px', textAlign: 'right', border: '1px solid #006633' }}>Đơn giá</th>
                  <th style={{ padding: '12px', textAlign: 'right', border: '1px solid #006633' }}>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {danhSachThuoc.map((thuoc, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{idx + 1}</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold', color: '#006633' }}>{thuoc.tenThuoc}</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>{thuoc.soLuong}</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>{thuoc.lieudung}</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'right' }}>{thuoc.donGia.toLocaleString()} VNĐ</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'right', fontWeight: 'bold' }}>{thuoc.thanhTien.toLocaleString()} VNĐ</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* BẢNG TỔNG TÍNH TIỀN */}
            <div style={{ backgroundColor: '#f0f7f2', padding: '20px 25px', borderRadius: '8px', border: '1px solid #c8e6c9', fontSize: '15px', maxWidth: '450px', marginLeft: 'auto', marginBottom: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Tổng chi phí đơn thuốc:</span>
                <b>{tongTienThuoc.toLocaleString()} VNĐ</b>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#006633' }}>
                <span>BHYT chi trả (80%):</span>
                <b>- {bhytThanhToan.toLocaleString()} VNĐ</b>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #006633', paddingTop: '10px', fontSize: '18px', color: '#d9534f' }}>
                <b>Số tiền bệnh nhân cần trả:</b>
                <b>{benhNhanThanhToan.toLocaleString()} VNĐ</b>
              </div>
            </div>

            {/* NÚT THANH TOÁN */}
            <div style={{ textAlign: 'right' }}>
              {isPaid ? (
                <div style={{ display: 'inline-block', backgroundColor: '#28a745', color: '#fff', padding: '12px 30px', borderRadius: '6px', fontWeight: 'bold', fontSize: '16px' }}>
                  ✓ ĐÃ THANH TOÁN THÀNH CÔNG (MÃ GD: BV20261021)
                </div>
              ) : (
                <button 
                  onClick={() => {
                    alert(`Xác nhận thanh toán ${benhNhanThanhToan.toLocaleString()} VNĐ qua ví MoMo/Thẻ ngân hàng!`);
                    setIsPaid(true);
                  }}
                  style={{ backgroundColor: '#d9534f', color: '#fff', border: 'none', padding: '14px 35px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', boxShadow: '0 4px 12px rgba(217,83,79,0.3)' }}
                >
                  💳 Thanh toán tiền thuốc ngay ({benhNhanThanhToan.toLocaleString()} VNĐ)
                </button>
              )}
            </div>

          </div>
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

export default TestResults;