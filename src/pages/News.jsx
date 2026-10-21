import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const News = () => {
  const navigate = useNavigate();
  const hoTenBenhNhan = localStorage.getItem('hoTen') || 'Bệnh nhân';
  const [activeDropdown, setActiveDropdown] = useState(null);

  // State quản lý trang hiện tại (6 bài / trang)
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // State quản lý bài viết đang mở xem chi tiết toàn văn
  const [selectedArticle, setSelectedArticle] = useState(null);

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

  // Danh sách bài viết với nội dung cực kỳ dài và chuyên sâu
  const allArticles = [
    {
      id: 1,
      title: 'Mưa lớn, ngập nước: Chủ động phòng tránh tai nạn, chấn thương và các bệnh lý truyền nhiễm',
      date: '30/09/2026',
      author: 'Trung tá, BSCKII Bùi Văn Phúc – Phó Chủ nhiệm Khoa Chi trên',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      summary: 'Bài viết được tư vấn chuyên môn bởi Trung tá, BSCKII Bùi Văn Phúc – Phó Chủ nhiệm Khoa Chi trên, Viện Chấn thương chỉnh hình...',
      content: `Trong những ngày mưa lớn và ngập úng diện rộng tại khu vực đô thị, môi trường sống bị đảo lộn, tiềm ẩn vô số nguy cơ gây hại cho sức khỏe cộng đồng. Các bác sĩ tại Viện Chấn thương chỉnh hình và Khoa Cấp cứu Bệnh viện Công đưa ra những cảnh báo và hướng dẫn chi tiết nhằm giúp người dân phòng tránh tai nạn và dịch bệnh.

      1. Nguy cơ tai nạn giao thông và chấn thương ngoại khoa do ngập lụt
      Khi các tuyến đường ngập sâu trong nước, tầm nhìn của người tham gia giao thông bị hạn chế tối đa. Hơn nữa, mặt đường bị che khuất tạo ra những cái bẫy nguy hiểm như hố ga không nắp, ổ gà lớn, gạch đá rơi vãi hoặc các vật sắc nhọn trôi nổi. Rất nhiều trường hợp người dân đi xe máy bị sụp ổ gà, ngã xe dẫn đến gãy xương chi, trật khớp, rách da sâu hoặc chấn thương sọ não.
      Bên cạnh đó, việc lội nước ngập kéo dài khiến da bị ngâm trong nước ô nhiễm chứa nhiều vi khuẩn, virus, chất thải sinh hoạt. Các vết trầy xước nhỏ ngoài da nếu không được xử lý ngay lập tức sẽ rất dễ tiến triển thành viêm loét, nhiễm trùng huyết hoặc uốn ván.

      2. Các bệnh lý truyền nhiễm phổ biến mùa mưa lũ
      - Bệnh do Leptospira (Bệnh xoắn khuẩn vàng da): Lây truyền qua các vùng da tổn thương khi tiếp xúc với nước ngập có lẫn nước tiểu của chuột hoặc động vật nhiễm bệnh. Triệu chứng ban đầu dễ nhầm lẫn với cảm cúm nhưng có thể nhanh chóng biến chứng suy thận, suy gan cấp.
      - Các bệnh đường tiêu hóa: Tiêu chảy cấp, tả, lỵ, thương hàn do nguồn nước sinh hoạt bị nhiễm bẩn. Người dân tuyệt đối không sử dụng nước ngập để rửa rau củ hay nấu ăn khi chưa được đun sôi khử trùng.
      - Các bệnh về da liễu: Nước ăn chân (nấm kẽ chân), viêm da tiếp xúc, hắc lào, lang ben do ẩm ướt kéo dài.

      3. Khuyến cáo và hướng dẫn xử trí từ chuyên gia y tế
      - Hạn chế tối đa việc di chuyển qua các vùng ngập sâu. Nếu bắt buộc phải đi qua, cần mặc đồ bảo hộ, mang ủng cao su và kiểm tra kỹ phương tiện.
      - Khi bị trầy xước hoặc va đập trong nước ngập, cần nhanh chóng di chuyển đến nơi khô ráo, rửa sạch vết thương dưới vòi nước sạch tối thiểu 10 phút, sát trùng bằng cồn y tế hoặc povidone iod và đến ngay cơ sở y tế gần nhất để được thăm khám, tư vấn tiêm huyết thanh kháng uốn ván (SAT) nếu cần thiết.
      - Tuyệt đối tuân thủ nguyên tắc "ăn chín uống sôi", sử dụng nguồn nước sạch đã qua lọc hoặc đun sôi để nguội phục vụ sinh hoạt hàng ngày.`
    },
    {
      id: 2,
      title: 'Khoa Chi dưới – Viện Chấn thương chỉnh hình: Nỗ lực bảo tồn chi thể, phục hồi vận động tối đa',
      date: '21/09/2026',
      author: 'Đình Ninh & Tổ Truyền thông',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
      summary: 'Bài và ảnh: Đình Ninh và Tổ Truyền thông Viện CTCH. Nỗ lực không ngừng nghỉ của đội ngũ y bác sĩ trong việc cứu chữa các ca bệnh phức tạp...',
      content: `Tại Khoa Chi dưới – Viện Chấn thương chỉnh hình Bệnh viện Công, mỗi ngày các y bác sĩ phải đối mặt với vô số ca bệnh nặng, từ những vụ tai nạn lao động nghiêm trọng đến các tổn thương khớp gối, khớp háng phức tạp ở người cao tuổi.

      1. Cột mốc thành tựu trong phẫu thuật vi phẫu và tái tạo xương
      Trước đây, những trường hợp gãy xương hở độ III kèm dập nát phần mềm rộng thường có nguy cơ phải cắt cụt chi rất cao nhằm bảo toàn tính mạng cho người bệnh. Tuy nhiên, với sự tiến bộ vượt bậc của y học hiện đại và sự đầu tư đồng bộ về trang thiết bị vi phẫu tại Bệnh viện Công, các bác sĩ đã thực hiện thành công nhiều ca ghép vạt da cơ vi phẫu, kết hợp xương bên trong vững chắc, giúp hàng trăm bệnh nhân giữ lại được đôi chân nguyên vẹn.

      2. Quy trình điều trị toàn diện và phục hồi chức năng sớm
      Thành công của một ca phẫu thuật không chỉ nằm ở kỹ thuật mổ tinh xảo mà còn phụ thuộc lớn vào giai đoạn hậu phẫu và tập luyện phục hồi chức năng:
      - Ngay từ ngày đầu tiên sau phẫu thuật, các kỹ thuật viên vật lý trị liệu sẽ hướng dẫn người bệnh thực hiện các bài tập vận động thụ động tại giường nhằm ngăn ngừa tình trạng cứng khớp, tắc mạch chi do nằm lâu.
      - Chế độ dinh dưỡng giàu canxi, đạm và vitamin được thiết kế riêng biệt cho từng thể trạng bệnh nhân giúp đẩy nhanh quá trình liền xương sinh học.

      3. Chia sẻ từ người bệnh
      Nhiều bệnh nhân sau khi bình phục đã quay trở lại gửi lời tri ân sâu sắc đến tập thể y bác sĩ Khoa Chi dưới. Đó chính là nguồn động lực lớn lao giúp đội ngũ thầy thuốc áo trắng tiếp tục bám trụ với nghề, không ngừng trau dồi y đức và chuyên môn để phục vụ nhân dân ngày một tốt hơn.`
    },
    {
      id: 3,
      title: 'Cứu mạch độc: Phương pháp ôn dương, thông lạc đặc sắc trong tinh hoa Y học cổ truyền',
      date: '16/09/2026',
      author: 'Khoa Y học Cổ truyền',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
      summary: 'Trong Y học cổ truyền, Đốc mạch chạy dọc đường giữa phía sau cơ thể, có vai trò điều hòa dương khí và dược ví là "bể của các kinh dương"...',
      content: `Y học cổ truyền từ lâu đã đóng vai trò quan trọng trong việc chăm sóc sức khỏe toàn diện, kết hợp điều trị và dự phòng bệnh tật. Tại Khoa Y học Cổ truyền Bệnh viện Công, phương pháp cứu mạch độc ôn ấm đang khẳng định giá trị vượt trội trong điều trị các bệnh lý cơ xương khớp mạn tính.

      1. Bản chất và vai trò của Đốc mạch theo quan niệm cổ phương
      Đốc mạch xuất phát từ bào cung, chạy xuống hội tụ ở hội âm, đi dọc theo xương cùng, cột sống lên đỉnh đầu rồi đổ xuống nướu răng trên. Đốc mạch được xem là "dương mạch chi hải" (bể chứa của tất cả các đường kinh dương trong cơ thể). Khi Đốc mạch thông suốt, dương khí đầy đủ thì toàn thân ấm áp, sức đề kháng tăng cao, tà khí (phong, hàn, thấp, nhiệt) không thể xâm nhập.

      2. Kỹ thuật cứu mạch độc và ôn thông kinh lạc thực tế
      Phương pháp cứu mạch độc kết hợp giữa châm cứu truyền thống và việc sử dụng ngải cứu thượng hạng hơ ấm dọc theo chuỗi huyệt đạo từ đại chùy đến mệnh môn, trường cường:
      - Tác dụng nhiệt dược kết hợp tinh chất ngải cứu thẩm thấu sâu qua da, làm giãn mạch máu tại chỗ, tăng cường tuần hoàn vi mạch nuôi dưỡng các đốt sống.
      - Giúp xua tan hàn thấp, làm mềm các cơ vùng thắt lưng và cổ gáy bị co cứng lâu ngày.

      3. Chỉ định và lưu ý khi điều trị
      Phương pháp này đặc biệt hiệu quả đối với các trường hợp:
      - Đau lưng do thoái hóa cột sống thắt lưng, thoát vị đĩa đệm giai đoạn ổn định.
      - Chứng sợ lạnh, tay chân lạnh, suy giảm chức năng sinh lý do thận dương hư.
      - Người cao tuổi bị đau nhức xương khớp mỗi khi thời tiết thay đổi, trời chuyển lạnh.
      Lưu ý: Quá trình thực hiện phải do các bác sĩ y học cổ truyền trực tiếp thăm khám, chẩn đoán loại trừ các chống chỉ định ngoại khoa trước khi tiến hành.`
    },
    {
      id: 4,
      title: 'Chăm sóc cứu biến chứng điều trị mất ngủ: Giải pháp đa mô thức từ Y học hiện đại',
      date: '04/10/2026',
      author: 'Khoa Nội thần kinh',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=800&auto=format&fit=crop',
      summary: 'Nhận diện nguyên nhân mất ngủ kéo dài và các giải pháp điều trị không dùng thuốc kết hợp tâm lý liệu pháp hiệu quả cao.',
      content: `Mất ngủ kinh niên (mạn tính) hiện đang trở thành căn bệnh của thời đại hiện đại, xuất hiện ở mọi lứa tuổi từ người cao tuổi đến giới trẻ làm việc văn phòng chịu nhiều áp lực căng thẳng.

      1. Tác hại khôn lường của mất ngủ kéo dài đối với cơ thể
      Giấc ngủ là khoảng thời gian duy nhất để não bộ và các cơ quan nội tạng tự hồi phục, đào thải độc tố. Mất ngủ kéo dài dẫn đến:
      - Suy giảm trí nhớ nghiêm trọng, mất tập trung trong công việc, dễ cáu gắt, trầm cảm.
      - Tăng nguy cơ mắc bệnh cao huyết áp, nhồi máu cơ tim, đột quỵ và rối loạn chuyển hóa đái tháo đường.
      - Suy giảm hệ miễn dịch, làm lão hóa da nhanh chóng và giảm tuổi thọ.

      2. Phác đồ điều trị mất ngủ toàn diện tại Bệnh viện Công
      Thay vì lạm dụng thuốc ngủ gây nhiều tác dụng phụ và lệ thuộc thuốc, Khoa Nội thần kinh áp dụng phác đồ điều trị khoa học:
      - Liệu pháp nhận thức hành vi (CBT-I): Giúp người bệnh thay đổi những suy nghĩ tiêu cực về giấc ngủ, thiết lập lại đồng hồ sinh học tự nhiên.
      - Kết hợp các bài tập thiền, yoga trị liệu, châm cứu thư giãn thần kinh và điều chỉnh chế độ dinh dưỡng khoa học (bổ sung các thực phẩm giàu tryptophan, magie, vitamin nhóm B).
      - Tầm soát và điều trị triệt để các nguyên nhân gây mất ngủ thứ phát như hội chứng chân không yên, ngưng thở khi ngủ hoặc đau nhức mạn tính do bệnh lý cơ xương khớp.`
    },
    {
      id: 5,
      title: 'Cẩm nang nâng cao: Pháp châm và vật lý trị liệu điều trị đau cổ vai gáy hiệu quả',
      date: '03/10/2026',
      author: 'Khoa Phục hồi chức năng',
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop',
      summary: 'Tổng hợp các bài tập vận động tại chỗ và phương pháp vật lý trị liệu giúp giảm nhanh cơn đau mỏi cổ vai gáy cho nhân viên văn phòng.',
      content: `Hội chứng cổ vai gáy là nỗi ám ảnh của dân văn phòng, tài xế lái xe và những người phải ngồi làm việc sai tư thế trong thời gian dài. Bệnh nếu để lâu có thể chèn ép rễ thần kinh cánh tay, gây tê bì và yếu cơ tay.

      1. Nguyên nhân cốt lõi gây bệnh
      - Ngồi làm việc sai tư thế, cúi đầu xem điện thoại di động liên tục trong nhiều giờ.
      - Thoái hóa các đốt sống cổ C5-C6, thoát vị đĩa đệm cột sống cổ hoặc co cứng cơ thang do nhiễm lạnh điều hòa.

      2. Các phương pháp điều trị tiên tiến đang áp dụng
      - Điện châm kết hợp ôn cứu giúp kích thích các huyệt phong trì, kiên tỉnh, giáp tích cột sống cổ, làm giãn mạch và giải phóng sự chèn ép thần kinh.
      - Kéo giãn cột sống cổ bằng máy tự động giúp mở rộng lỗ liên hợp, đưa đĩa đệm về vị trí giải phẫu ban đầu.
      - Sóng ngắn trị liệu, siêu âm trị liệu tầng sâu giúp tiêu viêm, giảm đau nhanh chóng mà không cần dùng thuốc giảm đau hại dạ dày.`
    },
    {
      id: 6,
      title: 'Chuyên mục "Bác sĩ 175 giải đáp" | Số 2 - Gia đình có người cao tuổi bị tăng huyết áp',
      date: '01/09/2026',
      author: 'ThS.BSCKI Trương Như Quản',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop',
      summary: 'Trung tá, ThS.BSCKI Trương Như Quản chia sẻ cách theo dõi huyết áp tại nhà và xử trí khẩn cấp khi huyết áp tăng cao đột ngột.',
      content: `Tăng huyết áp ở người cao tuổi là căn bệnh mạn tính đòi hỏi quá trình điều trị kiên trì suốt đời. Trong số phát sóng chuyên mục giải đáp sức khỏe cộng đồng, các chuyên gia tim mạch đã đưa ra những hướng dẫn hết sức thiết thực.

      1. Nguyên tắc vàng trong quản lý huyết áp tại nhà
      - Đo huyết áp vào một khung giờ cố định mỗi ngày (buổi sáng sau khi thức dậy và buổi tối trước khi đi ngủ), ngồi nghỉ ngơi ít nhất 15 phút trước khi đo.
      - Ghi chép số liệu huyết áp vào sổ theo dõi để bác sĩ dễ dàng đánh giá hiệu quả dùng thuốc trong các kỳ tái khám định kỳ.
      - Xây dựng chế độ ăn nhạt (giảm lượng muối dưới 5g/ngày), tăng cường rau xanh, trái cây tươi giàu kali (chuối, cam, khoai lang) và kiêng tuyệt đối thuốc lá, rượu bia.

      2. Cách xử trí khi người nhà bất ngờ cơn tăng huyết áp cấp tính
      - Giữ người bệnh nghỉ ngơi ở tư thế thoải mái (nửa nằm nửa ngồi), nới lỏng quần áo cổ áo.
      - Tuyệt đối giữ bình tĩnh, không hoảng loạn làm người bệnh thêm lo lắng.
      - Cho người bệnh ngậm hoặc uống thuốc hạ huyết áp nhanh theo đúng chỉ định bác sĩ điều trị từ trước.
      - Nếu xuất hiện các dấu hiệu nguy hiểm như đau tức ngực dữ dội, khó thở, nói đớ, méo miệng hoặc liệt nửa người, cần gọi ngay xe cấp cứu đưa đến bệnh viện gần nhất.`
    },
    {
      id: 7,
      title: 'Chủ động phòng ngừa bệnh Zona thần kinh và biến chứng đau sau zona bằng vắc xin',
      date: '26/08/2026',
      author: 'Trung tâm Tiêm chủng Bệnh viện Công',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop',
      summary: 'Zona thần kinh không chỉ gây tổn thương da mà còn có thể để lại những biến chứng đau dây thần kinh sau zona rất dai dẳng.',
      content: `Bệnh Zona thần kinh (giời leo) do sự tái hoạt động của virus Varicella-Zoster (loại virus gây bệnh thủy đậu) trú ẩn trong các hạch thần kinh nhiều năm. Khi hệ miễn dịch suy giảm (do tuổi già, căng thẳng, bệnh mạn tính), virus sẽ bùng phát dọc theo các đường dây thần kinh.

      Biến chứng đáng sợ nhất của zona là hội chứng đau sau zona (Post-herpetic neuralgia), gây ra những cơn đau rát buốt kéo dài hàng tháng, thậm chí hàng năm trời sau khi các tổn thương da đã lành, khiến người bệnh mất ăn mất ngủ, suy kiệt thể lực.
      Việc tiêm phòng vắc xin phòng ngừa zona thần kinh đầy đủ là giải pháp khoa học an toàn, hiệu quả cao giúp bảo vệ sức khỏe cho người từ 50 tuổi trở lên.`
    },
    {
      id: 8,
      title: 'Phẫu thuật nội soi cắt u tuyến thượng thận – Giải pháp điều trị căn nguyên tận gốc',
      date: '25/08/2026',
      author: 'Khoa Ngoại Tiết niệu',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
      summary: 'Ca lâm sàng thành công cứu chữa bệnh nhân 60 tuổi bị hội chứng Cushing do u tuyến thượng thận nhờ phẫu thuật nội soi sau phúc mạc.',
      content: `U tuyến thượng thận là khối u xuất phát từ tuyến nội tiết nằm trên thận, có thể gây rối loạn tiết hormone dẫn đến tăng huyết áp nặng, đái tháo đường hoặc hội chứng Cushing (béo bệu mặt tròn như mặt trăng, teo cơ chi, rạn da bụng).

      Nhờ ứng dụng công nghệ phẫu thuật nội soi sau phúc mạc độc quyền, các bác sĩ Khoa Ngoại Tiết niệu đã bóc tách chính xác khối u mà không làm ảnh hưởng đến chức năng thận lân cận. Bệnh nhân hồi phục nhanh chóng, đi lại được sau 24h và xuất viện chỉ sau 3 ngày phẫu thuật.`
    },
    {
      id: 9,
      title: 'Đừng xem nhẹ tiếng ngáy: Dấu hiệu cảnh báo hội chứng ngưng thở khi ngủ nguy hiểm',
      date: '15/08/2026',
      author: 'Khoa Tai Mũi Họng',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
      summary: 'Ngáy to kèm ngưng thở khi ngủ là căn bệnh nguy hiểm dẫn đến đột quỵ nếu không được chẩn đoán và điều trị kịp thời.',
      content: `Nhiều người lầm tưởng tiếng ngáy to là dấu hiệu của giấc ngủ sâu, mệt mỏi sau ngày dài làm việc. Tuy nhiên, dưới góc độ y học, ngáy kèm theo những khoảng ngưng thở ngắn ban đêm là triệu chứng kinh điển của hội chứng ngưng thở khi ngủ do tắc nghẽn (OSA).

      Tình trạng này làm gián đoạn nguồn cung cấp oxy cho não bộ, gây tăng huyết áp đột ngột ban đêm, nhồi máu cơ tim và đột quỵ tử vong trong giấc ngủ. Người dân có triệu chứng ngáy to, thức dậy mệt mỏi, buồn ngủ ban ngày nên đến Bệnh viện Công để đo đa ký giấc ngủ tầm soát sớm.`
    },
    {
      id: 10,
      title: 'Trí tuệ tập thể của nhân viên y tế, cứu mẹ con sản phụ mắc COVID-19 nặng kịch tính',
      date: '07/08/2026',
      author: 'Khoa Phụ sản & Hồi sức tích cực',
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop',
      summary: 'Sự phối hợp liên chuyên khoa thần tốc trong 60 phút đã cứu sống cả mẹ lẫn con trong tình trạng suy hô hấp nguy kịch.',
      content: `Một ca cấp cứu sản khoa đặc biệt ghi nhận sự phối hợp nhịp nhàng, thần tốc giữa các y bác sĩ Khoa Phụ sản và Khoa Hồi sức tích cực (ICU). Sản phụ mang thai tuần thứ 34 bị suy hô hấp cấp nặng do viêm phổi chuyển biến nhanh.

      Đứng trước lằn ranh sinh tử, hội đồng hội chẩn viện lập tức quyết định mổ lấy thai cấp cứu ngay tại phòng hồi sức tích cực đồng thời hỗ trợ hô hấp chuyên sâu cho sản phụ. Em bé cất tiếng khóc chào đời khỏe mạnh trong niềm xúc động vỡ òa của toàn thể ê-kíp điều trị.`
    },
    {
      id: 11,
      title: 'Hưởng ứng Ngày phòng chống Viêm gan Thế giới 28/7: Tầm soát sớm để bảo vệ lá gan',
      date: '28/07/2026',
      author: 'Khoa Truyền nhiễm',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop',
      summary: 'Tầm soát sớm viêm gan B và C để ngăn ngừa xơ gan, ung thư gan. Khuyến cáo từ các chuyên gia truyền nhiễm.',
      content: `Viêm gan virus B và C được ví là những "kẻ sát nhân thầm lặng" bởi bệnh diễn biến âm thầm trong nhiều năm không có triệu chứng rõ rệt cho đến khi chuyển thành xơ gan hoặc ung thư gan nguyên phát.

      Nhân dịp Ngày phòng chống Viêm gan Thế giới, Bệnh viện Công tổ chức chương trình tư vấn và ưu đãi xét nghiệm sàng lọc kháng an-ti viêm gan nhằm giúp người dân nâng cao ý thức bảo vệ lá gan khỏe mạnh, tiêm phòng vắc xin đầy đủ cho các thành viên trong gia đình.`
    }
  ];

  // Tính toán phân trang
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

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
            <span style={{ color: item.name === 'TIN TỨC' ? '#ffcc00' : '#fff' }} onClick={() => item.path !== '#' && navigate(item.path)}>
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
      <div style={{ width: '100%', backgroundColor: '#006633', color: '#fff', padding: '50px 0', textAlign: 'center', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '42px', margin: 0, fontWeight: '800' }}>Tin tức & Hoạt động Bệnh viện</h1>
      </div>

      {/* NỘI DUNG CHÍNH - DANH SÁCH BÀI VIẾT (GRID 3 CỘT) */}
      <div style={{ maxWidth: '1200px', margin: '50px auto', padding: '0 20px', boxSizing: 'border-box' }}>
        
        <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', borderBottom: '3px solid #006633', paddingBottom: '10px' }}>
          Bài viết mới nhất (Trang {currentPage} / {totalPages})
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '50px' }}>
          {currentArticles.map((item) => (
            <div key={item.id} style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '20px' }}>
                  <span style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>📅 {item.date}</span>
                  <h3 
                    onClick={() => setSelectedArticle(item)}
                    style={{ fontSize: '17px', color: '#006633', margin: '0 0 12px 0', fontWeight: 'bold', lineHeight: '1.4', cursor: 'pointer' }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }}>
                    {item.summary}
                  </p>
                </div>
              </div>
              <div style={{ padding: '0 20px 20px 20px' }}>
                <span 
                  onClick={() => setSelectedArticle(item)}
                  style={{ color: '#006633', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                >
                  Xem chi tiết →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* THANH PHÂN TRANG (PAGINATION) Ở DƯỚI CÙNG */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '60px' }}>
          {/* Nút lùi trang */}
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{ padding: '8px 14px', backgroundColor: currentPage === 1 ? '#f0f0f0' : '#006633', color: currentPage === 1 ? '#aaa' : '#fff', border: 'none', borderRadius: '4px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >
            ← Trước
          </button>

          {/* Các nút số trang */}
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                style={{
                  padding: '8px 14px',
                  backgroundColor: currentPage === pageNum ? '#006633' : '#fff',
                  color: currentPage === pageNum ? '#fff' : '#333',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Nút tiến trang */}
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{ padding: '8px 14px', backgroundColor: currentPage === totalPages ? '#f0f0f0' : '#006633', color: currentPage === totalPages ? '#aaa' : '#fff', border: 'none', borderRadius: '4px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >
            Tiếp →
          </button>
        </div>

      </div>

      {/* MODAL HIỂN THỊ TOÀN VĂN BÀI VIẾT (KÉO CHUỘT XUỐNG ĐỌC) */}
      {selectedArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '20px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#fff',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '10px',
            padding: '45px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            position: 'relative',
            boxSizing: 'border-box'
          }}>
            <button 
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: '#d9534f',
                color: '#fff',
                border: 'none',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            <span style={{ fontSize: '13px', color: '#666', fontWeight: 'bold' }}>📅 {selectedArticle.date} — Tác giả / Tư vấn chuyên môn: {selectedArticle.author}</span>
            <h2 style={{ color: '#006633', fontSize: '28px', fontWeight: 'bold', margin: '15px 0 20px 0', lineHeight: '1.35' }}>
              {selectedArticle.title}
            </h2>

            <img 
              src={selectedArticle.image} 
              alt={selectedArticle.title} 
              style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '8px', marginBottom: '30px' }}
            />

            {/* PHẦN NỘI DUNG RẤT DÀI, CẦN KÉO CHUỘT ĐỂ ĐỌC HẾT */}
            <div style={{ color: '#333', fontSize: '16.5px', lineHeight: '2', whiteSpace: 'pre-line' }}>
              {selectedArticle.content}

              {/* Bổ sung thêm đoạn kết luận chi tiết để bài viết cực kỳ dài */}
              {`\n\n---
              [THÔNG TIN BỔ SUNG TỪ HỘI ĐỒNG Y KHOA BỆNH VIỆN CÔNG]
              Mọi thắc mắc, tư vấn chi tiết về phác đồ điều trị hoặc đặt lịch khám chuyên gia, quý người bệnh và thân nhân vui lòng liên hệ trực tiếp tổng đài chăm sóc khách hàng hoặc đến trực tiếp các khoa phòng chuyên môn của Bệnh viện Công để được hỗ trợ tận tình nhất. Sự hài lòng và sức khỏe của quý vị là sứ mệnh hàng đầu của chúng tôi.`}
            </div>

            <div style={{ marginTop: '50px', textAlign: 'right', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{ backgroundColor: '#6c757d', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}
              >
                Đóng bài viết
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

export default News;