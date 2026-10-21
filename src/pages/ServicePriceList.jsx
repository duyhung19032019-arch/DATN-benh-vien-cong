import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicePriceList = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

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
    { name: 'Quy trình khám bệnh', path: '/examination-process' },
    { name: 'Bảng giá dịch vụ', path: '/service-price-list', active: true },
    { name: 'Thủ tục nhập - xuất viện', path: '/admission-discharge',  },
        { name: 'Liên hệ & Góp ý', path: '/contact', }
  ];

  const priceListData = [
    { id: 1, category: 'KHÁM BỆNH', name: 'Khám bệnh Chuyên khoa (Khám thường)', priceBHYT: '42.100 đ', priceService: '150.000 đ' },
    { id: 2, category: 'KHÁM BỆNH', name: 'Khám bệnh Theo yêu cầu / Khám Chuyên gia', priceBHYT: '42.100 đ', priceService: '300.000 đ' },
    { id: 3, category: 'KHÁM BỆNH', name: 'Khám bệnh Cấp cứu (24/7)', priceBHYT: '42.100 đ', priceService: '200.000 đ' },
    { id: 4, category: 'KHÁM BỆNH', name: 'Khám Tái khám theo hẹn', priceBHYT: '42.100 đ', priceService: '100.000 đ' },
    { id: 5, category: 'CĐHA', name: 'Chụp X-quang kỹ thuật số (1 tư thế)', priceBHYT: '65.400 đ', priceService: '110.000 đ' },
    { id: 6, category: 'CĐHA', name: 'Siêu âm màu tổng quát ổ bụng (3D/4D)', priceBHYT: '181.000 đ', priceService: '250.000 đ' },
    { id: 7, category: 'CĐHA', name: 'Siêu âm tim màu Doppler', priceBHYT: '222.000 đ', priceService: '300.000 đ' },
    { id: 8, category: 'CĐHA', name: 'Chụp Cắt lớp vi tính CT-Scanner (không tiêm thuốc)', priceBHYT: '522.000 đ', priceService: '850.000 đ' },
    { id: 9, category: 'CĐHA', name: 'Chụp Cộng hưởng từ MRI 1.5 Tesla', priceBHYT: '1.300.000 đ', priceService: '2.200.000 đ' },
    { id: 10, category: 'CĐHA', name: 'Nội soi dạ dày chẩn đoán (không gây mê)', priceBHYT: '231.000 đ', priceService: '600.000 đ' },
    { id: 11, category: 'CĐHA', name: 'Nội soi dạ dày có gây mê (không đau)', priceBHYT: '1.164.000 đ', priceService: '1.800.000 đ' },
    { id: 12, category: 'CĐHA', name: 'Nội soi đại tràng toàn bộ có gây mê', priceBHYT: '1.450.000 đ', priceService: '2.400.000 đ' },
    { id: 13, category: 'XÉT NGHIỆM', name: 'Tổng phân tích tế bào máu ngoại vi (25 thông số)', priceBHYT: '45.000 đ', priceService: '80.000 đ' },
    { id: 14, category: 'XÉT NGHIỆM', name: 'Định lượng Glucose máu (Đường huyết)', priceBHYT: '40.000 đ', priceService: '60.000 đ' },
    { id: 15, category: 'XÉT NGHIỆM', name: 'Đo hoạt độ men gan (AST/ALT/GGT)', priceBHYT: '44.000 đ', priceService: '85.000 đ' },
    { id: 16, category: 'XÉT NGHIỆM', name: 'Định lượng Urea & Creatinine (Chức năng thận)', priceBHYT: '40.000 đ', priceService: '75.000 đ' },
    { id: 17, category: 'XÉT NGHIỆM', name: 'Bộ mỡ máu (Cholesterol, Triglyceride, HDL, LDL)', priceBHYT: '140.000 đ', priceService: '220.000 đ' },
    { id: 18, category: 'XÉT NGHIỆM', name: 'Xét nghiệm HbA1c (Theo dõi đái tháo đường)', priceBHYT: '150.000 đ', priceService: '230.000 đ' },
    { id: 19, category: 'XÉT NGHIỆM', name: 'Xét nghiệm Viêm gan B (HBsAg test nhanh)', priceBHYT: '116.000 đ', priceService: '180.000 đ' },
    { id: 20, category: 'XÉT NGHIỆM', name: 'Tổng phân tích nước tiểu (10 thông số)', priceBHYT: '50.000 đ', priceService: '75.000 đ' },
    { id: 21, category: 'THỦ THUẬT', name: 'Nắn bó bột gãy xương đòn / xương cẳng tay', priceBHYT: '221.000 đ', priceService: '350.000 đ' },
    { id: 22, category: 'THỦ THUẬT', name: 'Khâu vết thương phần mềm phức tạp', priceBHYT: '185.000 đ', priceService: '300.000 đ' },
    { id: 23, category: 'PHẪU THUẬT', name: 'Phẫu thuật nội soi cắt ruột thừa viêm', priceBHYT: '2.850.000 đ', priceService: '4.500.000 đ' },
    { id: 24, category: 'PHẪU THUẬT', name: 'Phẫu thuật vá nhĩ qua nội soi', priceBHYT: '3.040.000 đ', priceService: '4.200.000 đ' }
  ];

  const filteredData = priceListData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800' }}>Bảng giá dịch vụ y tế</h1>
      </div>

      {/* 4. CHÍNH SÁCH VÀ NỘI DUNG (LAYOUT 2 CỘT) */}
      <div style={{ width: '100%', padding: '50px 80px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px' }}>
          
          {/* CỘT TRÁI: BẢNG GIÁ VÀ BỘ LỌC TÌM KIẾM */}
          <div>
            <h2 style={{ color: '#006633', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
              Bảng giá dịch vụ khám chữa bệnh niêm yết
            </h2>
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '14.5px', marginBottom: '25px' }}>
              Bệnh viện Công công khai, minh bạch bảng giá dịch vụ khám bệnh, chẩn đoán hình ảnh, xét nghiệm và thủ thuật kỹ thuật theo quy định của Bộ Y tế và Bảo hiểm Xã hội.
            </p>

            {/* THANH TÌM KIẾM & BỘ LỌC */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '25px', display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
              <input 
                type="text" 
                placeholder="🔍 Nhập tên dịch vụ (ví dụ: Siêu âm, Nội soi, Xét nghiệm...)" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ flex: 1, padding: '10px 15px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', outline: 'none' }}
              />

              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={() => setSelectedCategory('ALL')} 
                  style={{ padding: '8px 14px', borderRadius: '4px', border: 'none', backgroundColor: selectedCategory === 'ALL' ? '#006633' : '#e0e0e0', color: selectedCategory === 'ALL' ? '#fff' : '#333', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
                >
                  Tất cả
                </button>
                <button 
                  onClick={() => setSelectedCategory('KHÁM BỆNH')} 
                  style={{ padding: '8px 14px', borderRadius: '4px', border: 'none', backgroundColor: selectedCategory === 'KHÁM BỆNH' ? '#006633' : '#e0e0e0', color: selectedCategory === 'KHÁM BỆNH' ? '#fff' : '#333', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
                >
                  Khám bệnh
                </button>
                <button 
                  onClick={() => setSelectedCategory('CĐHA')} 
                  style={{ padding: '8px 14px', borderRadius: '4px', border: 'none', backgroundColor: selectedCategory === 'CĐHA' ? '#006633' : '#e0e0e0', color: selectedCategory === 'CĐHA' ? '#fff' : '#333', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
                >
                  CĐHA & Nội soi
                </button>
                <button 
                  onClick={() => setSelectedCategory('XÉT NGHIỆM')} 
                  style={{ padding: '8px 14px', borderRadius: '4px', border: 'none', backgroundColor: selectedCategory === 'XÉT NGHIỆM' ? '#006633' : '#e0e0e0', color: selectedCategory === 'XÉT NGHIỆM' ? '#fff' : '#333', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
                >
                  Xét nghiệm
                </button>
              </div>
            </div>

            {/* BẢNG GIÁ DỊCH VỤ HIỂN THỊ */}
            <div style={{ overflowX: 'auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#006633', color: '#fff' }}>
                    <th style={{ padding: '14px 18px', borderBottom: '1px solid #ddd', width: '50%' }}>Tên Dịch Vụ Y Tế</th>
                    <th style={{ padding: '14px 18px', borderBottom: '1px solid #ddd', width: '25%', textAlign: 'right' }}>Giá BHYT Thanh Toán</th>
                    <th style={{ padding: '14px 18px', borderBottom: '1px solid #ddd', width: '25%', textAlign: 'right' }}>Giá Khám Dịch Vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr 
                        key={item.id} 
                        style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9fdfa', transition: '0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f7f2'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f9fdfa'}
                      >
                        <td style={{ padding: '12px 18px', borderBottom: '1px solid #eee', color: '#222', fontWeight: '500' }}>
                          <span style={{ fontSize: '11px', backgroundColor: '#e2f0d9', color: '#385723', padding: '2px 8px', borderRadius: '3px', marginRight: '10px', fontWeight: 'bold' }}>
                            {item.category}
                          </span>
                          {item.name}
                        </td>
                        <td style={{ padding: '12px 18px', borderBottom: '1px solid #eee', color: '#006633', fontWeight: 'bold', textAlign: 'right' }}>
                          {item.priceBHYT}
                        </td>
                        <td style={{ padding: '12px 18px', borderBottom: '1px solid #eee', color: '#d9534f', fontWeight: 'bold', textAlign: 'right' }}>
                          {item.priceService}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" style={{ padding: '30px', textAlign: 'center', color: '#888' }}>
                        Không tìm thấy dịch vụ y tế phù hợp với từ khóa "{searchTerm}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '13px', color: '#777', fontStyle: 'italic', marginTop: '15px' }}>
              * Ghi chú: Bảng giá đã bao gồm chi phí vật tư y tế tiêu hao đi kèm theo quy định. Đối với người bệnh có thẻ BHYT đúng tuyến sẽ được Quỹ BHYT chi trả theo tỷ lệ mức hưởng (80%, 95% hoặc 100%).
            </p>
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

export default ServicePriceList;