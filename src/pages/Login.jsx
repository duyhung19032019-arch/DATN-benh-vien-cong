import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !matKhau) {
      setError('Vui lòng nhập Email và Mật khẩu!');
      return;
    }

    // Lấy tên hiện có trong localStorage hoặc gán mặc định nếu chưa có
    const tenSaved = localStorage.getItem('hoTen') || 'Hùng';
    localStorage.setItem('hoTen', tenSaved);

    navigate('/patient-dashboard');
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f6f9', fontFamily: 'Roboto, sans-serif' }}>
      <div style={{ width: '380px', padding: '40px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderTop: '5px solid #006633' }}>
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ color: '#006633', margin: '0 0 5px 0', fontSize: '24px', fontWeight: 'bold' }}>BỆNH VIỆN CÔNG</h2>
          <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Cổng đăng nhập Bệnh nhân</p>
        </div>

        {error && <div style={{ color: '#d9534f', backgroundColor: '#f2dede', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '13px', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Email</label>
            <input 
              type="email" 
              placeholder="Nhập email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Mật khẩu</label>
            <input 
              type="password" 
              placeholder="Nhập mật khẩu" 
              value={matKhau} 
              onChange={(e) => setMatKhau(e.target.value)} 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <button 
            type="submit" 
            style={{ width: '100%', padding: '12px', backgroundColor: '#006633', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}
          >
            ĐĂNG NHẬP
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px', color: '#666' }}>
          Chưa có tài khoản? <span style={{ color: '#006633', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/register')}>Đăng ký ngay</span>
        </div>
      </div>
    </div>
  );
};

export default Login;