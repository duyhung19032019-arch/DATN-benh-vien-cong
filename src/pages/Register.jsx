import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hoTen: '',
    email: '',
    soDienThoai: '',
    matKhau: '',
    xacNhanMatKhau: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.hoTen || !formData.email || !formData.matKhau) {
      setError('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    if (formData.matKhau !== formData.xacNhanMatKhau) {
      setError('Mật khẩu xác nhận không khớp!');
      return;
    }

    // Lưu tên người dùng vào localStorage
    localStorage.setItem('hoTen', formData.hoTen);
    
    alert('Đăng ký tài khoản thành công!');
    navigate('/patient-dashboard');
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f6f9', fontFamily: 'Roboto, sans-serif' }}>
      <div style={{ width: '420px', padding: '40px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderTop: '5px solid #006633' }}>
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ color: '#006633', margin: '0 0 5px 0', fontSize: '24px', fontWeight: 'bold' }}>BỆNH VIỆN CÔNG</h2>
          <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Đăng ký tài khoản Bệnh nhân</p>
        </div>

        {error && <div style={{ color: '#d9534f', backgroundColor: '#f2dede', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '13px', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Họ và tên</label>
            <input 
              type="text" 
              name="hoTen" 
              placeholder="Nhập họ và tên (ví dụ: Hùng)" 
              value={formData.hoTen} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Nhập địa chỉ email" 
              value={formData.email} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Số điện thoại</label>
            <input 
              type="text" 
              name="soDienThoai" 
              placeholder="Nhập số điện thoại" 
              value={formData.soDienThoai} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Mật khẩu</label>
            <input 
              type="password" 
              name="matKhau" 
              placeholder="Nhập mật khẩu" 
              value={formData.matKhau} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Xác nhận mật khẩu</label>
            <input 
              type="password" 
              name="xacNhanMatKhau" 
              placeholder="Nhập lại mật khẩu" 
              value={formData.xacNhanMatKhau} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <button 
            type="submit" 
            style={{ width: '100%', padding: '12px', backgroundColor: '#006633', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}
          >
            ĐĂNG KÝ
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px', color: '#666' }}>
          Đã có tài khoản? <span style={{ color: '#006633', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/')}>Đăng nhập ngay</span>
        </div>
      </div>
    </div>
  );
};

export default Register;