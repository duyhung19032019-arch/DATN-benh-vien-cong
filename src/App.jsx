import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import toàn bộ các trang trong hệ thống Bệnh viện Công
import Login from './pages/Login';
import Register from './pages/Register';
import PatientDashboard from './pages/PatientDashboard';
import About from './pages/About';
import OrganizationChart from './pages/OrganizationChart';
import History from './pages/History';
import Facilities from './pages/Facilities';
import DigitalTransformation from './pages/DigitalTransformation';
import DoctorList from './pages/DoctorList';
import DoctorDetail from './pages/DoctorDetail';
import TrainingResearch from './pages/TrainingResearch';
import News from './pages/News';
import HealthInsurance from './pages/HealthInsurance';
import TestResults from './pages/TestResults';
import HospitalMap from './pages/HospitalMap';
import MedicalSchedule from './pages/MedicalSchedule';
import ExaminationProcess from './pages/ExaminationProcess';
import ServicePriceList from './pages/ServicePriceList';
import AdmissionDischarge from './pages/AdmissionDischarge';
import InternalMedicine from './pages/InternalMedicine';
import TraumaSurgery from './pages/TraumaSurgery';
import Payment from './pages/Payment';         // Trang Thanh toán viện phí
import Feedback from './pages/Feedback';       // Trang Đánh giá dịch vụ
import MedicineInfo from './pages/MedicineInfo'; // Trang Thông tin thuốc & Xuất hóa đơn đỏ
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang mặc định / Đăng nhập & Đăng ký */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Trang chủ / Dashboard của Bệnh nhân */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />

        {/* Các trang Giới thiệu & Cơ sở */}
        <Route path="/about" element={<About />} />
        <Route path="/organization-chart" element={<OrganizationChart />} />
        <Route path="/history" element={<History />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/digital-transformation" element={<DigitalTransformation />} />

        {/* Các trang Đội ngũ Bác sĩ */}
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/doctor-detail/:id" element={<DoctorDetail />} />

        {/* Các trang Đào tạo, Tin tức & Bản đồ */}
        <Route path="/training-research" element={<TrainingResearch />} />
        <Route path="/news" element={<News />} />
        <Route path="/hospital-map" element={<HospitalMap />} />

        {/* Các trang Tra cứu, Bảo hiểm, Lịch khám, Thanh toán, Thuốc & Đánh giá */}
        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/test-results" element={<TestResults />} />
        <Route path="/medical-schedule" element={<MedicalSchedule />} />
        <Route path="/examination-process" element={<ExaminationProcess />} />
        <Route path="/service-price-list" element={<ServicePriceList />} />
        <Route path="/admission-discharge" element={<AdmissionDischarge />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/medicine-info" element={<MedicineInfo />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* Các trang Chuyên khoa */}
        <Route path="/internal-medicine" element={<InternalMedicine />} />
        <Route path="/surgery" element={<TraumaSurgery />} />
        <Route path="/trauma-surgery" element={<TraumaSurgery />} />

        {/* Trang Liên hệ & Hỗ trợ */}
        <Route path="/contact" element={<Contact />} />

        {/* Điều hướng mặc định về trang đăng nhập nếu nhập sai URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;