import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Trạng thái giả lập: true nếu Bác sĩ đã xác nhận đã khám, false nếu chưa khám
  const [doctorConfirmed, setDoctorConfirmed] = useState(true);

  // Phương thức thanh toán được chọn ('cash', 'momo', 'bank')
  const [paymentMethod, setPaymentMethod] = useState('momo');
  const [isPaidSuccess, setIsPaidSuccess] = useState(false);

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
        { name: 'Đội ngũ Bác sĩ', path: '/doctors' },
        { name: 'Lịch khám bệnh', path: '/medical-schedule' },
        { name: 'Quy trình Khám bệnh', path: '/examination-process' },
        { name: 'Bảng giá Dịch vụ', path: '/service-price-list' },
        { name: 'Thẻ Bảo hiểm y tế', path: '/health-insurance' }
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
    { name: 'THANH TOÁN', path: '/payment' },
    { name: 'LIÊN HỆ', path: '/contact' }
  ];

  // Chi tiết các khoản phí viện phí
  const invoiceDetails = {
    maHoaDon: 'HD2026-98214',
    ngayKham: '24/10/2026',
    bacSiKham: 'Prof. Dr. Robert Anderson',
    phieuKham: 150000,          // Phí khám thông thường
    phiNgoaiGio: 100000,        // Phí khám ngoài giờ / yêu cầu
    xetNghiem: 250000,          // Phí xét nghiệm cận lâm sàng
    phiKeDonThuoc: 450000,      // Phí kê đơn thuốc điều trị
    baoHiemChiTra: 200000       // BHYT hỗ trợ trừ trực tiếp
  };

  const tongTien = invoiceDetails.phieuKham + invoiceDetails.phiNgoaiGio + invoiceDetails.xetNghiem + invoiceDetails.phiKeDonThuoc - invoiceDetails.baoHiemChiTra;

  const handleProcessPayment = (e) => {
    e.preventDefault();
    setIsPaidSuccess(true);
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
            <span style={{ color: item.name === 'THANH TOÁN' ? '#ffcc00' : '#fff' }} onClick={() => item.path !== '#' && navigate(item.path)}>
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
        <h1 style={{ fontSize: '36px', margin: 0, fontWeight: '800' }}>Cổng Thanh Toán Viện Phí Trực Tuyến</h1>
        <p style={{ fontSize: '15px', opacity: 0.9, marginTop: '6px' }}>Nhanh chóng - An toàn - Tiện lợi</p>
      </div>

      {/* NỘI DUNG CHÍNH */}
      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px', boxSizing: 'border-box' }}>
        
        {/* Nút mô phỏng bật/tắt trạng thái bác sĩ đã khám */}
        <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeeba', padding: '12px 20px', borderRadius: '8px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#856404' }}>
            🧪 <b>Chế độ kiểm tra:</b> Trạng thái bác sĩ xác nhận khám: <b>{doctorConfirmed ? 'Đã khám xong ✅' : 'Chưa khám ⏳'}</b>
          </span>
          <button 
            onClick={() => setDoctorConfirmed(!doctorConfirmed)}
            style={{ backgroundColor: '#d39e00', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
          >
            Đổi trạng thái
          </button>
        </div>

        {!doctorConfirmed ? (
          /* TRƯỜNG HỢP BÁC SĨ CHƯA XÁC NHẬN KHÁM */
          <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '60px 30px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>⏳</div>
            <h2 style={{ color: '#333', margin: '0 0 10px 0', fontSize: '24px' }}>Chưa có hóa đơn thanh toán</h2>
            <p style={{ color: '#666', fontSize: '15px', maxWidth: '550px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
              Hệ thống ghi nhận bạn chưa hoàn tất quy trình khám bệnh hoặc Bác sĩ chưa cập nhật kết quả chẩn đoán và đơn thuốc. Vui lòng quay lại sau khi hoàn tất khám.
            </p>
            <button 
              onClick={() => navigate('/patient-dashboard')}
              style={{ backgroundColor: '#006633', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}
            >
              Về trang chủ
            </button>
          </div>
        ) : isPaidSuccess ? (
          /* TRƯỜNG HỢP THANH TOÁN THÀNH CÔNG */
          <div style={{ backgroundColor: '#fff', border: '1px solid #c8e6c9', borderRadius: '12px', padding: '50px 30px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '60px', marginBottom: '15px' }}>✅</div>
            <h2 style={{ color: '#006633', margin: '0 0 10px 0', fontSize: '26px' }}>Thanh toán viện phí thành công!</h2>
            <p style={{ color: '#555', fontSize: '15px', maxWidth: '550px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
              Cảm ơn bạn đã thanh toán. Mã giao dịch của bạn đã được ghi nhận vào hệ thống Bệnh viện Công. Bạn có thể mang biên lai điện tử này đến quầy thuốc để nhận thuốc.
            </p>
            <button 
              onClick={() => { setIsPaidSuccess(false); setDoctorConfirmed(false); }}
              style={{ backgroundColor: '#006633', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '6px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}
            >
              Hoàn tất & Quay lại
            </button>
          </div>
        ) : (
          /* TRƯỜNG HỢP HIỆN HÓA ĐƠN KHI BÁC SĨ ĐÃ XÁC NHẬN */
          <form onSubmit={handleProcessPayment} style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #006633', paddingBottom: '15px', marginBottom: '25px' }}>
              <h2 style={{ color: '#006633', margin: 0, fontSize: '22px' }}>Hóa Đơn Viện Phí & Dịch Vụ</h2>
              <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
                Bác sĩ đã xác nhận hoàn tất khám ✅
              </span>
            </div>

            {/* THÔNG TIN KHÁCH HÀNG */}
            <div style={{ backgroundColor: '#fcfcfc', border: '1px solid #eaeaea', borderRadius: '8px', padding: '20px', marginBottom: '30px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#333' }}>👤 Thông tin khách hàng</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14px', color: '#555' }}>
                <div><b>Họ tên bệnh nhân:</b> {hoTenBenhNhan}</div>
                <div><b>Mã hóa đơn:</b> {invoiceDetails.maHoaDon}</div>
                <div><b>Bác sĩ điều trị:</b> {invoiceDetails.bacSiKham}</div>
                <div><b>Ngày khám:</b> {invoiceDetails.ngayKham}</div>
              </div>
            </div>

            {/* CHI TIẾT CÁC LOẠI PHÍ */}
            <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>📋 Chi tiết các khoản phí</h3>
            <div style={{ marginBottom: '30px', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', backgroundColor: '#f4f6f4', fontWeight: 'bold', fontSize: '14px', color: '#333' }}>
                <span>Nội dung chi phí</span>
                <span>Thành tiền (VNĐ)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '14px', color: '#444' }}>
                <span>Phí khám bệnh tiêu chuẩn</span>
                <span>{invoiceDetails.phieuKham.toLocaleString()} đ</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '14px', color: '#444' }}>
                <span>Phí khám ngoài giờ / Yêu cầu chuyên gia</span>
                <span style={{ color: '#d9534f' }}>+{invoiceDetails.phiNgoaiGio.toLocaleString()} đ</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '14px', color: '#444' }}>
                <span>Phí xét nghiệm & Cận lâm sàng</span>
                <span>{invoiceDetails.xetNghiem.toLocaleString()} đ</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '14px', color: '#444' }}>
                <span>Phí kê đơn thuốc điều trị</span>
                <span>{invoiceDetails.phiKeDonThuoc.toLocaleString()} đ</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '14px', color: '#2e7d32', backgroundColor: '#fafafa' }}>
                <span>Bảo hiểm y tế (BHYT) chi trả</span>
                <span>-{invoiceDetails.baoHiemChiTra.toLocaleString()} đ</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px', backgroundColor: '#fff3cd', fontWeight: 'bold', fontSize: '18px', color: '#856404' }}>
                <span>TỔNG SỐ TIỀN CẦN THANH TOÁN</span>
                <span style={{ color: '#d9534f' }}>{tongTien.toLocaleString()} VNĐ</span>
              </div>
            </div>

            {/* CHỌN PHƯƠNG THỨC THANH TOÁN */}
            <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>💳 Chọn phương thức thanh toán</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '25px' }}>
              
              {/* O 1: MoMo */}
              <div 
                onClick={() => setPaymentMethod('momo')}
                style={{
                  border: paymentMethod === 'momo' ? '2px solid #a50064' : '1px solid #ddd',
                  borderRadius: '10px', padding: '18px 12px', textAlign: 'center', cursor: 'pointer',
                  backgroundColor: paymentMethod === 'momo' ? '#fff0f6' : '#fff',
                  boxShadow: paymentMethod === 'momo' ? '0 4px 12px rgba(165,0,100,0.15)' : 'none',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <div style={{ width: '45px', height: '45px', backgroundColor: '#a50064', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontWeight: '900', fontSize: '15px', marginBottom: '8px' }}>
                  M
                </div>
                <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#a50064' }}>Ví điện tử MoMo</div>
              </div>

              {/* O 2: Ngân hàng lớn (VietQR) */}
              <div 
                onClick={() => setPaymentMethod('bank')}
                style={{
                  border: paymentMethod === 'bank' ? '2px solid #006633' : '1px solid #ddd',
                  borderRadius: '10px', padding: '18px 12px', textAlign: 'center', cursor: 'pointer',
                  backgroundColor: paymentMethod === 'bank' ? '#f4f9f6' : '#fff',
                  boxShadow: paymentMethod === 'bank' ? '0 4px 12px rgba(0,102,51,0.15)' : 'none',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <div style={{ width: '45px', height: '45px', backgroundColor: '#006633', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ffcc00', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
                  QR
                </div>
                <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#006633' }}>Ngân hàng lớn (QR)</div>
              </div>

              {/* O 3: Tiền mặt tại quầy */}
              <div 
                onClick={() => setPaymentMethod('cash')}
                style={{
                  border: paymentMethod === 'cash' ? '2px solid #d9534f' : '1px solid #ddd',
                  borderRadius: '10px', padding: '18px 12px', textAlign: 'center', cursor: 'pointer',
                  backgroundColor: paymentMethod === 'cash' ? '#fff5f5' : '#fff',
                  boxShadow: paymentMethod === 'cash' ? '0 4px 12px rgba(217,83,79,0.15)' : 'none',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <div style={{ fontSize: '26px', lineHeight: '45px', marginBottom: '8px' }}>💵</div>
                <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#d9534f' }}>Tiền mặt tại quầy</div>
              </div>

            </div>

            {/* HIỆN MÃ QR RIÊNG BIỆT KHI CHỌN MOMO HOẶC BANK */}
            {paymentMethod === 'momo' && (
              <div style={{ backgroundColor: '#fff0f6', border: '1px solid #f8bbd0', padding: '25px', borderRadius: '10px', marginBottom: '25px', textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold', color: '#880e4f', fontSize: '16px', marginBottom: '15px' }}>
                  📱 Quét mã QR qua Ví điện tử MoMo
                </div>
                {/* Khung chứa ảnh mã QR MoMo riêng */}
                <div style={{ backgroundColor: '#fff', padding: '15px', display: 'inline-block', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=MOMO_PAY_BV_CONG_${invoiceDetails.maHoaDon}_${tongTien}`} 
                    alt="Mã QR MoMo" 
                    style={{ width: '160px', height: '160px', display: 'block' }}
                  />
                </div>
                <p style={{ fontSize: '13px', color: '#880e4f', marginTop: '12px', marginBottom: 0 }}>
                  Mở ứng dụng <b>MoMo</b> để quét mã thanh toán số tiền: <b>{tongTien.toLocaleString()} đ</b>
                </p>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div style={{ backgroundColor: '#e8f5e9', border: '1px solid #c8e6c9', padding: '25px', borderRadius: '10px', marginBottom: '25px', textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold', color: '#1b5e20', fontSize: '16px', marginBottom: '15px' }}>
                  🏛️ Quét mã VietQR (Hỗ trợ tất cả Ngân hàng)
                </div>
                {/* Khung chứa ảnh mã QR Ngân hàng riêng */}
                <div style={{ backgroundColor: '#fff', padding: '15px', display: 'inline-block', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=VIETQR_BANK_BV_CONG_${invoiceDetails.maHoaDon}_${tongTien}`} 
                    alt="Mã QR Ngân hàng" 
                    style={{ width: '160px', height: '160px', display: 'block' }}
                  />
                </div>
                <p style={{ fontSize: '13px', color: '#1b5e20', marginTop: '12px', marginBottom: 0 }}>
                  Dùng app Ngân hàng bất kỳ quét mã VietQR để thanh toán: <b>{tongTien.toLocaleString()} đ</b>
                </p>
              </div>
            )}

            {paymentMethod === 'cash' && (
              <div style={{ backgroundColor: '#e8f4fd', border: '1px solid #bbe1fa', padding: '15px 20px', borderRadius: '8px', marginBottom: '25px', fontSize: '14px', color: '#01579b' }}>
                ℹ️ <b>Hướng dẫn thanh toán tiền mặt:</b> Vui lòng mang theo mã hóa đơn hoặc căn cước công dân đến <b>Quầy dịch vụ số 04</b> (Tầng trệt) để thực hiện thanh toán trực tiếp với nhân viên thu ngân.
              </div>
            )}

            {/* NÚT XÁC NHẬN */}
            <div style={{ textAlign: 'right' }}>
              <button
                type="submit"
                style={{ backgroundColor: '#d9534f', color: '#fff', border: 'none', padding: '14px 35px', borderRadius: '6px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(217,83,79,0.3)' }}
              >
                Xác nhận thanh toán {tongTien.toLocaleString()} đ 🚀
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

export default Payment;