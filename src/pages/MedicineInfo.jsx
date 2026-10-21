import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicineInfo = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Trạng thái hiển thị modal / giao diện xuất hóa đơn đỏ
  const [showRedInvoice, setShowRedInvoice] = useState(false);

  // Thông tin mã số thuế & xuất hóa đơn đỏ
  const [taxInfo, setTaxInfo] = useState({
    tenCongTy: hoTenBenhNhan,
    maSoThue: '0316888999',
    diaChi: 'Quận 1, Thành phố Hồ Chí Minh',
    emailNhanHD: 'benhnhan@gmail.com'
  });

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

  // Dữ liệu đơn thuốc bác sĩ kê
  const prescriptionData = [
    {
      id: 1,
      tenThuoc: 'Amoxicillin + Clavulanic acid 1000mg',
      hoatChất: kháng_sinh_chính => 'Kháng sinh nhóm Beta-lactam',
      soLuong: '20 viên',
      lieuLuong: 'Uống 1 viên/lần x 2 lần/ngày (Sáng / Tối sau khi ăn no)',
      tacDungPhu: 'Có thể gây buồn nôn nhẹ, tiêu chảy nhẹ hoặc rối loạn tiêu hóa thoáng qua.',
      donGia: 12000,
      thanhTien: 240000
    },
    {
      id: 2,
      tenThuoc: 'Paracetamol 500mg (Hapacol)',
      hoatChất: 'Giảm đau, hạ sốt',
      soLuong: '15 viên',
      lieuLuong: 'Uống 1 viên/lần khi sốt trên 38.5 độ C (Cách nhau ít nhất 4-6 tiếng)',
      tacDungPhu: 'Hiếm gặp, có thể dị ứng phát ban ngoài da đối với cơ địa nhạy cảm.',
      donGia: 3000,
      thanhTien: 45000
    },
    {
      id: 3,
      tenThuoc: 'Alpha Choay (Chymotrypsin)',
      hoatChất: 'Kháng viêm dạng enzyme',
      soLuong: '30 viên',
      lieuLuong: 'Ngậm dưới lưỡi hoặc uống 1 viên/lần x 3 lần/ngày',
      tacDungPhu: 'Thay đổi màu sắc phân tạm thời, đôi khi rối loạn tiêu hóa nhẹ.',
      donGia: 5500,
      thanhTien: 165000
    }
  ];

  const tongTienThuoc = prescriptionData.reduce((acc, item) => acc + item.thanhTien, 0);
  const thueVAT = tongTienThuoc * 0.05; // Thuế VAT dược phẩm 5%
  const tongThanhToanVAT = tongTienThuoc + thueVAT;

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
        <h1 style={{ fontSize: '36px', margin: 0, fontWeight: '800' }}>Tra Cứu Thông Tin Thuốc & Đơn Thuốc</h1>
        <p style={{ fontSize: '15px', opacity: 0.9, marginTop: '6px' }}>Liều lượng chuẩn xác - An toàn hiệu quả - Hỗ trợ xuất hóa đơn đỏ nhanh chóng</p>
      </div>

      {/* NỘI DUNG CHÍNH */}
      <div style={{ maxWidth: '950px', margin: '40px auto', padding: '0 20px', boxSizing: 'border-box' }}>
        
        {/* THÔNG TIN CHUNG ĐƠN THUỐC */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #006633', paddingBottom: '15px', marginBottom: '20px' }}>
            <div>
              <h2 style={{ color: '#006633', margin: '0 0 5px 0', fontSize: '20px' }}>💊 Đơn Thuốc Ngoại Trú Bác Sĩ Kê</h2>
              <span style={{ fontSize: '13px', color: '#666' }}>Mã đơn: <b>DT2026-8841</b> | Ngày kê: 24/10/2026</span>
            </div>
            <button
              onClick={() => setShowRedInvoice(true)}
              style={{ backgroundColor: '#d9534f', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', boxShadow: '0 3px 8px rgba(217,83,79,0.3)' }}
            >
              📄 Yêu cầu xuất Hóa đơn đỏ (VAT)
            </button>
          </div>

          {/* DANH SÁCH CHI TIẾT CÁC LOẠI THUỐC */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {prescriptionData.map((thuoc, index) => (
              <div key={thuoc.id} style={{ border: '1px solid #e8e8e8', borderRadius: '8px', padding: '20px', backgroundColor: '#fcfcfc' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div>
                    <span style={{ backgroundColor: '#006633', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', marginRight: '10px' }}>
                      #{index + 1}
                    </span>
                    <span style={{ fontSize: '17px', fontWeight: 'bold', color: '#222' }}>{thuoc.tenThuoc}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#d9534f' }}>Số lượng: {thuoc.soLuong}</span>
                    <div style={{ fontSize: '13px', color: '#666' }}>Thành tiền: <b>{thuoc.thanhTien.toLocaleString()} đ</b></div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '13.5px', marginTop: '12px', background: '#fff', padding: '12px 15px', borderRadius: '6px', border: '1px solid #eee' }}>
                  <div>
                    <span style={{ color: '#006633', fontWeight: 'bold' }}>⏰ Liều lượng & Cách dùng:</span>
                    <p style={{ margin: '4px 0 0 0', color: '#333' }}>{thuoc.lieuLuong}</p>
                  </div>
                  <div>
                    <span style={{ color: '#d9534f', fontWeight: 'bold' }}>⚠️ Tác dụng phụ & Lưu ý:</span>
                    <p style={{ margin: '4px 0 0 0', color: '#555' }}>{thuoc.tacDungPhu}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* TỔNG KẾT TIỀN THUỐC */}
          <div style={{ marginTop: '25px', padding: '15px 20px', backgroundColor: '#f4f6f4', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '14px', color: '#444' }}>Tổng tiền thuốc: <b>{tongTienThuoc.toLocaleString()} đ</b> | Thuế VAT dược phẩm (5%): <b>{thueVAT.toLocaleString()} đ</b></span>
            </div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#006633' }}>
              Tổng cộng: <span style={{ color: '#d9534f' }}>{tongThanhToanVAT.toLocaleString()} đ</span>
            </div>
          </div>

        </div>

      </div>

      {/* MODAL XUẤT HÓA ĐƠN ĐỎ (VAT) */}
      {showRedInvoice && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#fff', width: '650px', borderRadius: '12px', padding: '35px', boxShadow: '0 8px 25px rgba(0,0,0,0.2)', boxSizing: 'border-box', position: 'relative' }}>
            
            <h2 style={{ color: '#006633', margin: '0 0 5px 0', fontSize: '22px', textAlign: 'center' }}>HÓA ĐƠN GIÁ TRỊ GIA TĂNG (HÓA ĐƠN ĐỎ)</h2>
            <p style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginBottom: '20px' }}>BỆNH VIỆN CÔNG - Mẫu số: 1/001 - Ký hiệu: BV/26E</p>

            <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#fafafa', fontSize: '13.5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div><b>Đơn vị bán hàng:</b> Bệnh viện Công (MST: 0300112233)</div>
              <div><b>Địa chỉ:</b> 123 Đường Y Tế, Phường 10, Quận 5, TP.HCM</div>
              <hr style={{ border: 'none', borderTop: '1px dashed #ccc', margin: '4px 0' }} />
              <div><b>Họ tên người mua hàng / Bệnh nhân:</b> <input type="text" value={taxInfo.tenCongTy} onChange={(e) => setTaxInfo({...taxInfo, tenCongTy: e.target.value})} style={{ padding: '4px 8px', width: '250px', border: '1px solid #ccc', borderRadius: '4px' }} /></div>
              <div><b>Mã số thuế (nếu có):</b> <input type="text" value={taxInfo.maSoThue} onChange={(e) => setTaxInfo({...taxInfo, maSoThue: e.target.value})} style={{ padding: '4px 8px', width: '200px', border: '1px solid #ccc', borderRadius: '4px' }} /></div>
              <div><b>Địa chỉ công ty / cơ quan:</b> <input type="text" value={taxInfo.diaChi} onChange={(e) => setTaxInfo({...taxInfo, diaChi: e.target.value})} style={{ padding: '4px 8px', width: '320px', border: '1px solid #ccc', borderRadius: '4px' }} /></div>
              <div><b>Email nhận hóa đơn điện tử:</b> <input type="text" value={taxInfo.emailNhanHD} onChange={(e) => setTaxInfo({...taxInfo, emailNhanHD: e.target.value})} style={{ padding: '4px 8px', width: '250px', border: '1px solid #ccc', borderRadius: '4px' }} /></div>
            </div>

            <div style={{ marginBottom: '20px', fontSize: '13.5px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>Nội dung hàng hóa / dịch vụ: Tiền thuốc điều trị ngoại trú</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: '#f0f4f0', fontWeight: 'bold' }}>
                <span>Cộng tiền hàng chưa VAT:</span>
                <span>{tongTienThuoc.toLocaleString()} đ</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: '#fff' }}>
                <span>Thuế suất GTGT (5%):</span>
                <span>{thueVAT.toLocaleString()} đ</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', backgroundColor: '#fff3cd', fontWeight: 'bold', color: '#856404' }}>
                <span>Tổng cộng tiền thanh toán:</span>
                <span style={{ color: '#d9534f' }}>{tongThanhToanVAT.toLocaleString()} đ</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                onClick={() => setShowRedInvoice(false)}
                style={{ backgroundColor: '#ccc', color: '#333', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  alert(`Đã gửi yêu cầu xuất hóa đơn đỏ thành công về email: ${taxInfo.emailNhanHD}!\nHệ thống cơ quan thuế đã ghi nhận.`);
                  setShowRedInvoice(false);
                }}
                style={{ backgroundColor: '#006633', color: '#fff', border: 'none', padding: '10px 25px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Xác nhận xuất & Gửi hóa đơn 🚀
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ width: '100%', backgroundColor: '#222', color: '#aaa', padding: '35px 50px', textAlign: 'center', fontSize: '14px', marginTop: '60px', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>BỆNH VIỆN CÔNG - HỆ THỐNG Y TẾ PHỤC VỤ CỘNG ĐỒNG</p>
        <p style={{ margin: 0 }}>Hệ thống quản lý bệnh viện tích hợp phục vụ học tập và đồ án tốt nghiệp.</p>
      </div>

    </div>
  );
};

export default MedicineInfo;