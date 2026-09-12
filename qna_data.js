// qna_data.js
// Chuyển đổi từ bộ tài liệu trong file RAR do người dùng cung cấp.
// ID đã được đánh lại liên tục từ 1 đến 1024 để tránh trùng số câu trong tài liệu nguồn.
// Không tự tạo phương án sai: tài liệu nào chỉ có đáp án đúng thì chỉ lưu phương án đúng.
// Các trường source và source_id được giữ để truy vết về tài liệu gốc khi cần.

var qaList = [
  {
    "id": 1,
    "q": "Khái quát truyền thống của Quân đội nhân dân Việt Nam là gì?",
    "options": {
      "A": "Trung với Đảng, hiếu với dân, sẵn sàng chiến đấu, hy sinh, vì độc lập tự do của Tổ quốc, vì chủ nghĩa xã hội. Nhiệm vụ nào cũng hoàn thành, khó khăn nào cũng vượt qua, kẻ thù nào cũng đánh thắng."
    },
    "correct": "A",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 1
  },
  {
    "id": 2,
    "q": "Chủ đề phong trào thi đua Quyết thắng năm 2026?",
    "options": {
      "C": "Đoàn kết, kỷ cương, đột phá, sáng tạo, quyết thắng."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 2
  },
  {
    "id": 3,
    "q": "Bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa từ sớm, từ xa, trên tất cả các yếu tố cấu thành Tổ quốc gồm?",
    "options": {
      "C": "Đất liền, biển đảo, trên không, vũ trụ và không gian mạng."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 3
  },
  {
    "id": 4,
    "q": "Trong quan hệ đối tác xếp theo cấp độ từ thấp đến cao là?",
    "options": {
      "B": "Đối tác toàn diện; đối tác chiến lược; đối tác chiến lược toàn diện."
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 4
  },
  {
    "id": 5,
    "q": "Theo Nghị quyết số 847-NQ/QUTW ngày 28/12/2021 của Quân ủy Trung ương giải pháp quan trọng hàng đầu để giữ vững và phát huy phẩm chất “Bộ đội Cụ Hồ”; kiên quyết chống chủ nghĩa cá nhân trong tình hình mới?",
    "options": {
      "D": "Tăng cường công tác lãnh đạo tư tưởng, giáo dục chính trị, nâng cao nhận thức, trách nhiệm cho cán bộ, đảng viên và quần chúng tiếp tục phát huy phẩm chất “Bộ đội Cụ Hồ”, kiên quyết chống chủ nghĩa cá nhân."
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 5
  },
  {
    "id": 6,
    "q": "Theo Quy định số 144-QĐ/TW, ngày 09/5/2024 của Bộ Chính trị, đâu là chuẩn mực đạo đức cách mạng của cán bộ, đảng viên?",
    "options": {
      "D": "Gương mẫu, khiêm tốn, tu dưỡng rèn luyện, học tập suốt đời."
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 6
  },
  {
    "id": 7,
    "q": "Đấu tranh trên không gian mạng trong Quân đội nhân dân Việt Nam là nhiệm vụ của ai?",
    "options": {
      "C": "Là nhiệm vụ của cấp ủy, chỉ huy và của mọi tổ chức, mọi lực lượng trong toàn quân."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 7
  },
  {
    "id": 8,
    "q": "Quy định số 85-QĐ/TW ngày 07/10/2022 của Ban Bí thư về việc cán bộ, đảng viên thiết lập và sử dụng trang thông tin điện tử cá nhân trên Internet áp dụng đối tượng nào?",
    "options": {
      "B": "Áp dụng đối với các cấp ủy, tổ chức đảng, cán bộ, đảng viên."
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 8
  },
  {
    "id": 9,
    "q": "Đâu là trách nhiệm của cán bộ, đảng viên trong việc thiết lập và sử dụng trang thông tin điện tử cá nhân trên Internet, mạng xã hội theo Quy định số 85-QĐ/TW ngày 07/10/2022 của Ban Bí thư?",
    "options": {
      "A": "Khai báo thông tin chính danh;"
    },
    "correct": "A",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 9
  },
  {
    "id": 10,
    "q": "Lực lượng vũ trang Quân khu 5 được thành lập vào ngày tháng năm nào?",
    "options": {
      "B": "16 tháng 10 năm 1945"
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 10
  },
  {
    "id": 11,
    "q": "Tổ chức vũ trang tiền thân của Lực lượng vũ trang Quân khu 5 ngày nay là:",
    "options": {
      "A": "Đội Du kích Vũ Hùng",
      "B": "Đội Du kích Ba Tơ",
      "C": "Đội tự vệ Hỏa xa Diêu Trì",
      "D": "Tất cả các đáp án trên"
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 11
  },
  {
    "id": 12,
    "q": "Truyền thống vẻ vang của LLVT Quân khu 5 là gì?",
    "options": {
      "C": "Tự lực tự cường, khắc phục khó khăn, chịu đựng gian khổ, mưu trí sáng tạo, chiến đấu kiên cường, chiến thắng vẻ vang."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 12
  },
  {
    "id": 13,
    "q": "Ngày, tháng, năm nào, Chủ tịch Nước đã ký quyết định phong tặng Danh hiệu Anh hùng Lực lượng vũ trang nhân dân cho Quân khu 5?",
    "options": {
      "D": "Ngày 13/02/2026"
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 13
  },
  {
    "id": 14,
    "q": "Đảng bộ Quân khu 5 được thành lập ngày tháng năm nào, với tên gọi ban đầu là gì?",
    "options": {
      "A": "Ngày 22/11/1944, với tên gọi Đảng bộ Khu 5"
    },
    "correct": "A",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 14
  },
  {
    "id": 15,
    "q": "Đến nay, Đảng bộ Quân khu 5 đã trải qua mấy kỳ đại hội?",
    "options": {
      "B": "11"
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 15
  },
  {
    "id": 16,
    "q": "“Chiến dịch 500 ngày đêm đẩy mạnh thực hiện tìm kiếm, quy tập và xác định danh tính hài cốt liệt sĩ” đặt mục tiêu tìm kiếm, quy tập khoảng bao nhiêu hài cốt liệt sĩ?",
    "options": {
      "B": "7.000 hài cốt"
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 16
  },
  {
    "id": 17,
    "q": "“Chiến dịch 500 ngày đêm đẩy mạnh thực hiện tìm kiếm, quy tập và xác định danh tính hài cốt liệt sĩ” đặt mục tiêu giám định ADN khoảng bao nhiêu mẫu hài cốt liệt sĩ?",
    "options": {
      "D": "18.000 mẫu"
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 17
  },
  {
    "id": 18,
    "q": "Lễ phát động \"Chiến dịch 500 ngày đêm...\" được tổ chức vào thời gian và địa điểm nào?",
    "options": {
      "B": "Sáng ngày 02/4/2026 tại Thành cổ Quảng Trị, tỉnh Quảng Trị"
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 18
  },
  {
    "id": 19,
    "q": "Chiến dịch tập trung đẩy mạnh công tác rà phá bom mìn, vật liệu nổ phục vụ tìm kiếm, quy tập tại các địa bàn trọng điểm nào?",
    "options": {
      "B": "Tuyên Quang (Vị Xuyên), tỉnh Lào Cai, tỉnh Lạng Sơn"
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 19
  },
  {
    "id": 20,
    "q": "Thời gian thực hiện tổng thể của \"Chiến dịch 500 ngày đêm...\" là từ ngày nào đến ngày nào?",
    "options": {
      "B": "Từ ngày 15/3/2026 đến ngày 27/7/2027"
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 20
  },
  {
    "id": 21,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định” gồm những nội dung nào?",
    "options": {
      "B": "Kiên định đường lối quân sự, quốc phòng của Đảng; kiên định xây dựng Quân đội vững mạnh về chính trị."
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 1
  },
  {
    "id": 22,
    "q": "Nội hàm “kiên định đường lối quân sự, quốc phòng của Đảng” trong chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội là gì?",
    "options": {
      "C": "Quán triệt và thực hiện đúng quan điểm, đường lối, chính sách của Đảng, Nhà nước về quân sự, quốc phòng."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 2
  },
  {
    "id": 23,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, khi thực hiện “kiên định đường lối quân sự, quốc phòng của Đảng” cần quán triệt nội dung nào?",
    "options": {
      "A": "Quốc phòng toàn dân, chiến tranh nhân dân và chính sách “bốn không”."
    },
    "correct": "A",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 3
  },
  {
    "id": 24,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, phương châm nào là nền tảng quan trọng trong thực hiện “kiên định đường lối quân sự, quốc phòng của Đảng”?",
    "options": {
      "D": "Dựa vào dân, lấy dân làm gốc và phát huy sức mạnh của Nhân dân"
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 4
  },
  {
    "id": 25,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, trong đó “Kiên định xây dựng Quân đội vững mạnh về chính trị” trước hết nhằm?",
    "options": {
      "B": "Tăng cường sự lãnh đạo của Đảng đối với Quân đội."
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 5
  },
  {
    "id": 26,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, trong đó một nội dung quan trọng của kiên định xây dựng Quân đội vững mạnh về chính trị là gì?",
    "options": {
      "C": "Kiên định Chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh, quan điểm, đường lối quân sự của Đảng, mục tiêu độc lập dân tộc và chủ nghĩa xã hội."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 6
  },
  {
    "id": 27,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về phương châm “5 vững”, cụm từ “không ngừng phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới” phản ánh nội dung nào?",
    "options": {
      "A": "Chính trị vững."
    },
    "correct": "A",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 7
  },
  {
    "id": 28,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 đẩy mạnh” gồm:",
    "options": {
      "C": "Đẩy mạnh xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại; đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 8
  },
  {
    "id": 29,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại”, từ “Hiện đại” được hiểu như thế nào?",
    "options": {
      "D": "Đặt trong tương quan với trình độ quân sự của khu vực và thế giới."
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 9
  },
  {
    "id": 30,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại”, nhân tố tiên quyết là gì?",
    "options": {
      "A": "Đẩy mạnh xây dựng con người hiện đại trong Quân đội."
    },
    "correct": "A",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 10
  },
  {
    "id": 31,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại”, giải pháp căn cơ để xây dựng Quân đội hiện đại là gì?",
    "options": {
      "C": "Đẩy mạnh xây dựng công nghiệp quốc phòng tự chủ, tự lực, tự cường, lưỡng dụng, hiện đại."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 11
  },
  {
    "id": 32,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 đẩy mạnh”, trong đó “Đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng” nhằm?",
    "options": {
      "B": "Giữ vững môi trường hòa bình, ổn định và bảo vệ Tổ quốc từ sớm, từ xa."
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 12
  },
  {
    "id": 33,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 ngăn ngừa” gồm:",
    "options": {
      "C": "Ngăn ngừa các nguy cơ chiến tranh, xung đột; ngăn ngừa suy thoái, “tự diễn biến”, “tự chuyển hóa”."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 13
  },
  {
    "id": 34,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 ngăn ngừa”, trong đó “Ngăn ngừa mọi biểu hiện suy thoái về tưtưởng chính trị, đạo đức, lối sống, “tự điễn biển”, “tự chuyễn hóa”...” cần thực hiện theo tinh thần nào?",
    "options": {
      "D": "Ngăn ngừa từ sớm, từ khi còn là mầm mống."
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 14
  },
  {
    "id": 35,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững” gồm những gì?",
    "options": {
      "B": "Chính trị, kỷ luật, công nghệ, nghệ thuật quân sự, đời sống bộ đội."
    },
    "correct": "B",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 15
  },
  {
    "id": 36,
    "q": "Theo tinh thần chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững” được xác định là gì?",
    "options": {
      "C": "Tiêu chí rèn luyện và thước đo kết quả."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 16
  },
  {
    "id": 37,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, trong đó “Chính trị vững” thể hiện rõ nhất ở yêu cầu nào?",
    "options": {
      "C": "Tuyệt đối trung thành với Tổ quốc, Đảng, Nhà nước và Nhân dân; vững vàng về mục tiêu, lý tưởng."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 17
  },
  {
    "id": 38,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, nội dung nào không thuộc “Kỷ luật vững”?",
    "options": {
      "D": "Làm chủ nền tảng số và trí tuệ nhân tạo."
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 18
  },
  {
    "id": 39,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, trong đó “Công nghệ vững” nhấn mạnh yêu cầu:",
    "options": {
      "C": "Làm chủ công nghệ quân sự, khai thác tốt trang bị hiện đại và hình thành “chiến sĩ số”."
    },
    "correct": "C",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 19
  },
  {
    "id": 40,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, trong đó “Nghệ thuật quân sự vững” đòi hỏi?",
    "options": {
      "D": "Nắm vững đường lối quân sự, nghệ thuật đánh giặc và vận dụng sáng tạo trong điều kiện mới."
    },
    "correct": "D",
    "source": "Cau hoi kiến thức chung (40).docx",
    "source_id": 20
  },
  {
    "id": 41,
    "q": "Phương châm của Đại hội XIV của Đảng được xác định là gì?",
    "options": {
      "B": "Đoàn kết – Dân chủ – Kỷ cương – Đột phá – Phát triển"
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 1
  },
  {
    "id": 42,
    "q": "Đại hội XIV của Đảng xác định mục tiêu phát triển đến năm 2030 của Việt Nam là gì?",
    "options": {
      "C": "Nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 2
  },
  {
    "id": 43,
    "q": "Tầm nhìn đến năm 2045 được Nghị quyết Đại hội XIV xác định là gì?",
    "options": {
      "B": "Trở thành nước phát triển, thu nhập cao"
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 3
  },
  {
    "id": 44,
    "q": "Đại hội XIV của Đảng xác định chỉ tiêu tăng trưởng GDP bình quân giai đoạn 2026–2030?",
    "options": {
      "D": "Từ 10%/năm trở lên"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 4
  },
  {
    "id": 45,
    "q": "Đại hội XIV của Đảng xác định một trong các ngành công nghiệp, công nghệ chiến lược được ưu tiên phát triển là gì?",
    "options": {
      "C": "Chip bán dẫn và trí tuệ nhân tạo"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 5
  },
  {
    "id": 46,
    "q": "Một trong ba đột phá chiến lược được Đại hội XIV của Đảng xác định là gì?",
    "options": {
      "C": "Đột phá mạnh mẽ về thể chế phát triển"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 6
  },
  {
    "id": 47,
    "q": "Đại hội XIV của Đảng, quan điểm xuyên suốt trong các định hướng phát triển 2026–2030 là gì?",
    "options": {
      "B": "Lấy phát triển để ổn định, ổn định để thúc đẩy phát triển"
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 7
  },
  {
    "id": 48,
    "q": "Một nhiệm vụ trọng tâm về xây dựng Đảng trong nhiệm kỳ Đại hội XIV của Đảng là gì?",
    "options": {
      "C": "Kiểm soát quyền lực, phòng chống tham nhũng, tiêu cực"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 8
  },
  {
    "id": 49,
    "q": "Đại hội XIV của Đảng, đột phá chiến lược về thể chế phát triển nhằm mục tiêu trực tiếp nào?",
    "options": {
      "C": "Khơi thông, giải phóng và phát huy hiệu quả các nguồn lực"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 9
  },
  {
    "id": 50,
    "q": "Đại hội XIV của Đảng xác định việc nhấn mạnh phát triển nguồn nhân lực chất lượng cao gắn chặt nhất với mục tiêu nào?",
    "options": {
      "B": "Nâng cao năng suất, chất lượng lao động"
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 10
  },
  {
    "id": 51,
    "q": "Đại hội XIV của Đảng xác định phát triển văn hóa và con người trong chiến lược phát triển đất nước là gì?",
    "options": {
      "C": "Nền tảng tinh thần, sức mạnh nội sinh, động lực to lớn cho sự phát triển nhanh, bền vững của đất nước"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 11
  },
  {
    "id": 52,
    "q": "Đại hội XIV của Đảng, trong các loại hình kinh tế được nhấn mạnh, đâu là trọng tâm mới nổi bật?",
    "options": {
      "C": "Kinh tế số, kinh tế xanh, kinh tế tuần hoàn, xây dựng xã hội số, thân thiện với môi trường."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 12
  },
  {
    "id": 53,
    "q": "Đại hội XIV của Đảng, chỉ số phát triển con người (HDI) đến năm 2030 phấn đấu đạt khoảng bao nhiêu?",
    "options": {
      "C": "0,8"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 13
  },
  {
    "id": 54,
    "q": "Đại hội XIV của Đảng xác định tỷ trọng kinh tế số trong GDP đến năm 2030 phấn đấu đạt khoảng bao nhiêu phần trăm?",
    "options": {
      "C": "30%"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 14
  },
  {
    "id": 55,
    "q": "Đại hội XIV của Đảng đặt ra chỉ tiêu GDP bình quân đầu người đến năm 2030 dự kiến đạt khoảng bao nhiêu USD?",
    "options": {
      "C": "8.500 USD"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 15
  },
  {
    "id": 56,
    "q": "Đại hội XIV của Đảng bầu Ban Chấp hành Trung ương Đảng gồm bao nhiêu đồng chí?",
    "options": {
      "A": "200 đồng chí"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 16
  },
  {
    "id": 57,
    "q": "Nghị quyết Đại hội XIV xác định vị thế của đất nước ta sau 40 năm tiến hành công cuộc Đổi mới là gì?",
    "options": {
      "C": "Mở ra bước ngoặt lịch sử mới, kỷ nguyên vươn mình của dân tộc."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 17
  },
  {
    "id": 58,
    "q": "“Kỷ nguyên vươn mình của dân tộc” theo tinh thần Đại hội XIV được hiểu cốt lõi là gì?",
    "options": {
      "B": "Giai đoạn bứt phá để đạt mục tiêu quốc gia phát triển, thu nhập cao."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 18
  },
  {
    "id": 59,
    "q": "Điểm mới đột phá trong quan điểm về kinh tế tư nhân tại Đại hội XIV là gì?",
    "options": {
      "C": "Kinh tế tư nhân là một động lực quan trọng nhất của nền kinh tế."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 19
  },
  {
    "id": 60,
    "q": "Trong nhiệm kỳ XIV, Đảng xác định yếu tố nào là “động lực chính” của sự phát triển bứt phá?",
    "options": {
      "C": "Khoa học, công nghệ, đổi mới sáng tạo và công cuộc chuyển đổi số."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 20
  },
  {
    "id": 61,
    "q": "Đại hội XIV của Đảng coi cuộc cách mạng về sắp xếp tổ chức bộ máy có ý nghĩa như thế nào?",
    "options": {
      "A": "Tạo ra bước chuyển chiến lược để hệ thống chính trị hoạt động hiệu quả."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 21
  },
  {
    "id": 62,
    "q": "Nghị quyết Đại hội XIV nhấn mạnh việc xây dựng “lực lượng sản xuất mới” dựa trên yếu tố nào?",
    "options": {
      "C": "Nguồn nhân lực chất lượng cao gắn liền với công nghệ trí tuệ nhân tạo."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 22
  },
  {
    "id": 63,
    "q": "Trong lĩnh vực đối ngoại, “Tự chủ chiến lược” theo Nghị quyết Đại hội XIV có nghĩa là gì?",
    "options": {
      "A": "Giữ vững độc lập, chủ động lựa chọn hướng đi có lợi cho dân tộc."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 23
  },
  {
    "id": 64,
    "q": "Điểm mới trong công tác đấu tranh phòng, chống tham nhũng, tiêu cực tại Đại hội XIV của Đảng là gì?",
    "options": {
      "C": "Đẩy mạnh đấu tranh phòng, chống lãng phí ngang với chống tham nhũng."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 24
  },
  {
    "id": 65,
    "q": "Nghị quyết Đại hội XIV định hướng việc phát triển văn hóa, con người Việt Nam như thế nào?",
    "options": {
      "A": "Văn hóa là sức mạnh nội sinh, động lực mạnh mẽ để phát triển đất nước."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 25
  },
  {
    "id": 66,
    "q": "Về nhiệm vụ bảo vệ Tổ quốc, Nghị quyết Đại hội XIV xác định phương châm cốt lõi là gì?",
    "options": {
      "C": "Bảo vệ Tổ quốc từ sớm, từ xa, giữ vững môi trường hòa bình để phát triển."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 26
  },
  {
    "id": 67,
    "q": "“Chuyển đổi xanh” trong định hướng phát triển kinh tế của Đại hội XIV của Đảng bao hàm ý nghĩa gì?",
    "options": {
      "C": "Phát triển kinh tế gắn với bảo vệ môi trường và sử dụng năng lượng sạch."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 27
  },
  {
    "id": 68,
    "q": "Đại hội XIV của Đảng, một trong những “nút thắt” lớn nhất cần tháo gỡ để phát triển đất nước hiện nay là gì?",
    "options": {
      "C": "Những điểm nghẽn về thể chế, chính sách chưa bắt kịp yêu cầu thực tiễn."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 28
  },
  {
    "id": 69,
    "q": "Tinh thần khởi nghiệp trong học sinh, sinh viên được Nghị quyết Đại hội XIV khuyến khích như thế nào?",
    "options": {
      "C": "Thúc đẩy tư duy sáng tạo, khởi nghiệp dựa trên nền tảng công nghệ số."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 29
  },
  {
    "id": 70,
    "q": "Để xây dựng “thế trận lòng dân” vững chắc, Nghị quyết Đại hội XIV nhấn mạnh nội dung nào?",
    "options": {
      "A": "Thực hiện tốt dân chủ, bảo đảm quyền làm chủ thực chất của nhân dân."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 30
  },
  {
    "id": 71,
    "q": "Hệ thống chính trị nhiệm kỳ XIV của Đảng hướng tới mô hình tổ chức như thế nào?",
    "options": {
      "C": "Tinh gọn, thông suốt, hoạt động hiệu lực, hiệu quả, vì nhân dân phục vụ."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 31
  },
  {
    "id": 72,
    "q": "Tại sao Đại hội XIV của Đảng coi chuyển đổi số là một “cuộc cách mạng” thực sự?",
    "options": {
      "A": "Vì nó thay đổi hoàn toàn phương thức sản xuất và đời sống xã hội."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 32
  },
  {
    "id": 73,
    "q": "Điểm mới về mô hình tăng trưởng kinh tế trong Nghị quyết Đại hội XIV là gì?",
    "options": {
      "C": "Tăng trưởng dựa trên năng suất, chất lượng và đổi mới sáng tạo số."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 33
  },
  {
    "id": 74,
    "q": "Đại hội XIV của Đảng, xác định trong kỷ nguyên vươn mình, nhiệm vụ nào được coi là “then chốt” của xây dựng Đảng?",
    "options": {
      "A": "Công tác cán bộ, xây dựng đội ngũ đủ phẩm chất, năng lực và uy tín."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 34
  },
  {
    "id": 75,
    "q": "Đối với lĩnh vực giáo dục phổ thông, Đại hội XIV của Đảng nhấn mạnh hướng đi nào?",
    "options": {
      "B": "Đổi mới căn bản, toàn diện, chú trọng phát triển kỹ năng và tư duy sáng tạo."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 35
  },
  {
    "id": 76,
    "q": "Đại hội XIV của Đảng, quốc phòng, an ninh trong kỷ nguyên mới được gắn kết chặt chẽ với yếu tố nào?",
    "options": {
      "A": "Gắn kết chặt chẽ, hài hòa giữa phát triển kinh tế, xã hội với quốc phòng, an ninh."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 36
  },
  {
    "id": 77,
    "q": "Nghị quyết Đại hội XIV xác định “nguồn lực nội sinh” của dân tộc bao gồm những gì?",
    "options": {
      "C": "Giá trị văn hóa, sức mạnh con người và khối đại đoàn kết toàn dân tộc."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 37
  },
  {
    "id": 78,
    "q": "Tư duy phát triển bền vững Đại hội XIV của Đảng thể hiện qua việc xử lý mối quan hệ nào?",
    "options": {
      "A": "Giữa tăng trưởng kinh tế với phát triển văn hóa và bảo vệ môi trường."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 38
  },
  {
    "id": 79,
    "q": "Một điểm mới trong phương thức lãnh đạo của Đảng được nêu tại Nghị quyết Đại hội XIV là gì?",
    "options": {
      "B": "Đổi mới mạnh mẽ phương thức lãnh đạo theo hướng cầm quyền khoa học."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 39
  },
  {
    "id": 80,
    "q": "Đại hội XIV của Đảng, để thúc đẩy khởi nghiệp trong học sinh, nhà trường cần đóng vai trò gì theo định hướng mới?",
    "options": {
      "A": "Là môi trường nuôi dưỡng ý tưởng, kết nối học sinh với các hệ sinh thái số."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 40
  },
  {
    "id": 81,
    "q": "Vấn đề “chống lãng phí” được Nghị quyết Đại hội XIV đặc biệt nhấn mạnh vì lý do gì?",
    "options": {
      "C": "Vì lãng phí làm suy yếu nguồn lực đất nước và niềm tin của Nhân dân."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 41
  },
  {
    "id": 82,
    "q": "Nghị quyết Đại hội XIV xác định việc trọng dụng nhân tài có vai trò như thế nào?",
    "options": {
      "B": "Là khâu đột phá để phát triển lực lượng sản xuất mới của đất nước."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 42
  },
  {
    "id": 83,
    "q": "Trong đối ngoại đa phương, Việt Nam hướng tới vai trò gì theo Nghị quyết Đại hội XIV?",
    "options": {
      "A": "Là thành viên có trách nhiệm, chủ động tham gia dẫn dắt các sáng kiến."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 43
  },
  {
    "id": 84,
    "q": "Đại hội XIV của Đảng, “Chủ quyền quốc gia trên không gian mạng” được bảo vệ như thế nào?",
    "options": {
      "B": "Bằng cách xây dựng hệ thống phòng thủ mạng và pháp luật mạng vững mạnh."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 44
  },
  {
    "id": 85,
    "q": "Nghị quyết Đại hội XIV định hướng việc phát triển nông nghiệp theo hướng nào?",
    "options": {
      "B": "Phát triển nông nghiệp sinh thái, nông thôn hiện đại, nông dân văn minh."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 45
  },
  {
    "id": 86,
    "q": "Điểm mới về quyền làm chủ của Nhân dân tại Đại hội XIV của Đảng là gì?",
    "options": {
      "A": "Thể chế hóa đầy đủ phương châm “Dân biết, dân bàn, dân làm, dân kiểm tra, dân thụ hưởng”."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 46
  },
  {
    "id": 87,
    "q": "Đại hội XIV của Đảng, khát vọng phát triển của dân tộc Việt Nam đến năm 2045 nhằm khẳng định và vươn tới điều gì?",
    "options": {
      "B": "Ý chí tự lực, tự cường và khát vọng xây dựng đất nước phồn vinh, hạnh phúc."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 47
  },
  {
    "id": 88,
    "q": "Một trong những nhiệm vụ trọng tâm về môi trường trong nhiệm kỳ Đại hội XIV là gì?",
    "options": {
      "C": "Chủ động ứng phó biến đổi khí hậu, ngăn chặn tình trạng ô nhiễm môi trường."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 48
  },
  {
    "id": 89,
    "q": "Văn kiện Đại hội XIV của Đảng, những nguyên nhân chính của những thách thức đặt ra trong tình hình hiện nay?",
    "options": {
      "C": "Điểm nghẽn nội tại; yêu cầu phát triển nhanh và bền vững; sức ép cạnh tranh gay gắt; rủi ro tụt hậu về công nghệ và chất lượng nguồn nhân lực; tác động ngày càng nặng nề của biến đổi khí hậu."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 49
  },
  {
    "id": 90,
    "q": "Những dự báo dịch chuyển của thế giới trong giai đoạn hiện nay được xác định trong Văn kiện Đại hội XIV?",
    "options": {
      "A": "Cấu trúc quyền lực, mô hình tăng trưởng và trật tự kinh tế."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 50
  },
  {
    "id": 91,
    "q": "Văn kiện Đại hội XIV của Đảng, việc xây dựng mô hình tăng trưởng phải dựa chủ yếu vào những yếu tốt nào?",
    "options": {
      "D": "Năng suất, chất lượng, hiệu quả, đổi mới sáng tạo."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 51
  },
  {
    "id": 92,
    "q": "Văn kiện Đại hội XIV của Đảng, động lực then chốt của tăng trưởng?",
    "options": {
      "A": "Khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 52
  },
  {
    "id": 93,
    "q": "Trong công tác xây dựng, chỉnh đốn Đảng, Đại hội XIV xác định nội dung nào là điều kiện quyết định mọi thắng lợi?",
    "options": {
      "C": "Xây dựng Đảng trong sạch, vững mạnh toàn diện."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 53
  },
  {
    "id": 94,
    "q": "Nội dung, yêu cầu xây dựng xã hội Việt Nam theo Đại hội XIV của Đảng, nhằm tạo điều kiện, nền tảng để đất nước, dân tộc phát triển bền vững là gì?",
    "options": {
      "B": "Xây dựng một xã hội lành mạnh về đạo đức, kỷ cương về pháp luật, văn hoá trong ứng xử, văn minh trong quản trị, an toàn trong đời sống, tiến bộ trong phát triển."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 54
  },
  {
    "id": 95,
    "q": "Văn kiện Đại hội XIV của Đảng, tầm quan trọng các yếu tố thể chế, nhân lực, hạ tầng?",
    "options": {
      "A": "Thể chế mở đường; nhân lực quyết định tốc độ và chất lượng; hạ tầng tạo không gian và sức bật."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 55
  },
  {
    "id": 96,
    "q": "Đại hội đại biểu toàn quốc lần thứ XIV của Đảng xác định cục diện thế giới hiện nay đang chuyển biến theo xu hướng nào?",
    "options": {
      "B": "Đa cực, phân tuyến, nhiều tầng nấc"
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 56
  },
  {
    "id": 97,
    "q": "Báo cáo tổng kết công tác xây dựng Đảng tại Đại hội XIV đã bổ sung 2 nguyên tắc tổ chức, hoạt động nào?",
    "options": {
      "A": "Đảng giữ mối liên hệ mật thiết với Nhân dân và Đảng hoạt động trong khuôn khổ Hiến pháp và pháp luật."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 57
  },
  {
    "id": 98,
    "q": "Điểm mới của Đại hội XIV trong gắn Chương trình hành động thực hiện Nghị quyết trực tiếp vào Báo cáo chính trị trình Đại hội theo tinh thần như thế nào?",
    "options": {
      "C": "Nói đi đôi với làm, mục tiêu gắn với giải pháp, giải pháp gắn với trách nhiệm, trách nhiệm gắn với thời hạn và nguồn lực."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 58
  },
  {
    "id": 99,
    "q": "Một trong những kết quả đạt được trong nhiệm kỳ Đại hội XIII về kinh tế, xã hội?",
    "options": {
      "C": "Thu nhập bình quân đầu người của Việt Nam tiệm cận mức trung bình cao."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 59
  },
  {
    "id": 100,
    "q": "Kết quả đạt được về chỉ số hạnh phúc của Nhân dân trong nhiệm kỳ Đại hội XIII được xác định tăng bao nhiêu bậc (từ năm 2020 - 2025)?",
    "options": {
      "C": "Tăng 37 bậc."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 60
  },
  {
    "id": 101,
    "q": "Sự thay đổi về tư duy phát triển về kinh tế, xã hội trong nhiệm kỳ Đại hội XIII được thể hiện như thế nào?",
    "options": {
      "B": "Từ “tăng trưởng bằng mọi giá” sang “tăng trưởng có chất lượng”, từ “quản lý bằng mệnh lệnh hành chính” sang “quản trị phát triển dựa trên pháp luật và dữ liệu”, từ cơ chế “xin – cho” sang “minh bạch, cạnh tranh, trách nhiệm giải trình”."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 61
  },
  {
    "id": 102,
    "q": "Trước bối cảnh mới, vận hội mới, Đại hội XIV xác định phải đột phá tư duy phát triển theo nguyên tắc nào?",
    "options": {
      "A": "Đặt lợi ích quốc gia - dân tộc lên trên hết; Nhân dân là trung tâm; khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số là động lực; thể chế hiện đại là nền tảng; kỷ luật thực thi làm bảo đảm; lấy sức mạnh đại đoàn kết là điểm tựa."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 62
  },
  {
    "id": 103,
    "q": "Đại hội XIV xác định mục đích của cải cách tổ chức bộ máy và sắp xếp lại đơn vị hành chính?",
    "options": {
      "B": "Mở rộng không gian phát triển, phân bổ lại nguồn lực, tăng hiệu quả phục vụ Nhân dân, giảm chi phí xã hội, giảm thủ tục hành chính và tăng kỷ luật thực thi."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 63
  },
  {
    "id": 104,
    "q": "Đại hội đại biểu toàn quốc lần thứ XIV của Đảng xác định yếu tố nào là nền tảng, động lực, sức mạnh nội sinh bảo đảm cho sự phát triển bền vững?",
    "options": {
      "C": "Văn hoá và con người Việt Nam"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 64
  },
  {
    "id": 105,
    "q": "Đại hội đại biểu toàn quốc lần thứ XIV của Đảng xác định nội dung đột phá nào là “Đột phá của đột phá” để thúc đẩy phát triển?",
    "options": {
      "A": "Thể chế phát triển"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 65
  },
  {
    "id": 106,
    "q": "Đại hội XIV của Đảng xác định thành phần kinh tế nào giữ vai trò chủ đạo?",
    "options": {
      "A": "Kinh tế nhà nước"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 66
  },
  {
    "id": 107,
    "q": "Để đẩy mạnh khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số, Đại hội XIV xác định cần thực hiện những cơ chế gì?",
    "options": {
      "C": "Trọng dụng nhân tài, đánh giá dựa trên sản phẩm, tài chính linh hoạt, hợp tác công tư, đặt hàng nhiệm vụ khoa học gắn với yêu cầu phát triển."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 67
  },
  {
    "id": 108,
    "q": "Một trong những định hướng về xây dựng văn hóa và con người tại Đại hội XIV?",
    "options": {
      "D": "Xây dựng và phát triển nền văn hoá Việt Nam tiên tiến, đậm đà bản sắc dân tộc, đồng bộ trên nền tảng hệ giá trị quốc gia, hệ giá trị văn hoá và chuẩn mực con người Việt Nam đáp ứng yêu cầu phát triển trong giai đoạn mới."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 68
  },
  {
    "id": 109,
    "q": "Vị trí, vai trò, tầm quan trọng của nhiệm vụ tăng cường quốc phòng, an ninh và đẩy mạnh đối ngoại, hội nhập quốc tế được xác định trong Đại hội XIV?",
    "options": {
      "A": "Trọng yếu, thường xuyên."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 69
  },
  {
    "id": 110,
    "q": "Đại hội XIV của Đảng, những nội dung trong bảo đảm an ninh quốc gia trong giai đoạn mới?",
    "options": {
      "C": "An ninh biên giới, lãnh thổ, an ninh chế độ, an ninh văn hoá tư tưởng, an ninh kinh tế, an ninh tài chính, an ninh dữ liệu, an ninh năng lượng, an ninh nguồn nước, an ninh lương thực...."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 70
  },
  {
    "id": 111,
    "q": "Công tác nào tiếp tục được Đại hội XIV xác định là “then chốt của then chốt”?",
    "options": {
      "A": "Công tác cán bộ."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 71
  },
  {
    "id": 112,
    "q": "Đại hội XIV xác định vị trí, vai trò của các thành tố. Người dân, nhà nước pháp quyền, văn hoá và đoàn kết toàn dân tộc như thế nào?",
    "options": {
      "C": "Người dân là trung tâm, chủ thể, mục tiêu và động lực; nhà nước pháp quyền là trụ cột; văn hoá là nền tảng tinh thần; đoàn kết toàn dân tộc là sức mạnh nội sinh."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 72
  },
  {
    "id": 113,
    "q": "Đại hội XIV xác định tầm quan trọng của đại đoàn kết toàn dân tộc trong xây dựng và phát triển đất nước?",
    "options": {
      "D": "Là nền tảng hội tụ và phát huy cao nhất sức mạnh của Nhân dân, tạo nên sức mạnh vô địch để đất nước vượt qua mọi khó khăn, thử thách và vươn tới phát triển phồn vinh, hùng cường."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 73
  },
  {
    "id": 114,
    "q": "Quá trình phát triển nhận thức lý luận, Đại hội XIV của Đảng đã xác định mô hình chủ nghĩa xã hội Việt Nam với các trụ cột chính?",
    "options": {
      "D": "Tất cả các phương án đã nêu."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 74
  },
  {
    "id": 115,
    "q": "Yêu cầu xây dựng nền ngoại giao Việt Nam trong Báo cáo Chính trị tại Đại hội XIV của Đảng xác định như thế nào?",
    "options": {
      "B": "Toàn diện, hiện đại"
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 75
  },
  {
    "id": 116,
    "q": "Đại hội XIV của Đảng xác định cấu trúc công tác xây dựng Đảng vững mạnh thành những mặt cơ bản nào?",
    "options": {
      "D": "Chính trị, tư tưởng, đạo đức, tổ chức và cán bộ."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 76
  },
  {
    "id": 117,
    "q": "Nhiệm vụ đấu tranh phòng, chống tham nhũng, lãng phí, tiêu cực được xác định như thế nào trong xây dựng Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam?",
    "options": {
      "C": "Nhiệm vụ quan trọng, kiên trì, lâu dài."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 77
  },
  {
    "id": 118,
    "q": "Các văn kiện Đại hội XIV đổi mới cách tiếp cận như thế nào so với văn kiện các kỳ Đại hội trước?",
    "options": {
      "C": "Chuyển mạnh sang tư duy thiết kế chiến lược phát triển dài hạn"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 78
  },
  {
    "id": 119,
    "q": "Những kết quả đã đạt được sau chặng đường gần 40 năm đổi mới?",
    "options": {
      "A": "Đất nước đã ra khỏi nhóm nước nghèo; trở thành nền kinh tế có quy mô ngày càng lớn; hội nhập sâu rộng vào kinh tế thế giới; đời sống Nhân dân được cải thiện rõ rệt; vị thế và uy tín quốc tế ngày càng được nâng cao."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 79
  },
  {
    "id": 120,
    "q": "Hệ quan điểm phát triển đất nước được xây dựng như thế nào trong các văn kiện Đại hội XIV?",
    "options": {
      "B": "Tư duy hệ thống, đa trụ cột, đa động lực, gắn chặt kinh tế với văn hóa, xã hội, môi trường, quốc phòng, an ninh và đối ngoại."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 80
  },
  {
    "id": 121,
    "q": "Chương trình hành động thực hiện Nghị quyết Đại hội XIV xác định bao nhiêu nhiệm vụ trọng tâm và đột phá chiến lược?",
    "options": {
      "A": "06 nhiệm vụ trọng tâm và 03 đột phá chiến lược."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 81
  },
  {
    "id": 122,
    "q": "Chương trình hành động thực hiện Nghị quyết Đại hội XIV xác định mục tiêu đẩy mạnh chuyển đổi xanh, giảm phát thải khí nhà kính như thế nào?",
    "options": {
      "C": "Phát thải ròng bằng “0” vào năm 2050."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 82
  },
  {
    "id": 123,
    "q": "Đại hội XIV xác định tiềm lực quốc phòng cần xây dựng đồng bộ, thống nhất trên cơ sở nào?",
    "options": {
      "C": "Tiềm lực chính trị, tiềm lực kinh tế, văn hoá, xã hội; tiềm lực khoa học - công nghệ; tiềm lực quân sự."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 83
  },
  {
    "id": 124,
    "q": "Bảo đảm an ninh quốc gia trong giai đoạn mới xác định yếu tố nào là trọng yếu nhằm bảo vệ sự lãnh đạo và vai trò cầm quyền của Đảng Cộng sản, chế độ xã hội chủ nghĩa?",
    "options": {
      "D": "An ninh chế độ, an ninh cầm quyền."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 84
  },
  {
    "id": 125,
    "q": "Đại hội XIV xác định vai trò tầm quan trọng của an ninh kinh tế, an ninh năng lượng, an ninh môi trường, an ninh nguồn nước, an ninh lương thực là cơ sở; an ninh mạng, an ninh dữ liệu?",
    "options": {
      "A": "Là trung tâm, điều kiện tiên quyết"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 85
  },
  {
    "id": 126,
    "q": "Tư duy, phương pháp bảo vệ an ninh quốc gia trong kỷ nguyên mới được xác định trong Đại hội XIV?",
    "options": {
      "C": "An ninh chủ động, an ninh bao trùm, an ninh kiến tạo, kỷ luật thực thi."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 86
  },
  {
    "id": 127,
    "q": "Đại hội XIV của Đảng xác định công tác kiểm tra, giám sát phải được tiến hành như thế nào?",
    "options": {
      "C": "Chủ động, kịp thời, toàn diện, đồng bộ, công khai, dân chủ, khách quan, công tâm, thận trọng, chặt chẽ, chính xác, nghiêm minh theo đúng nguyên tắc, quy trình, thủ tục, thẩm quyền, phương pháp công tác đảng."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 87
  },
  {
    "id": 128,
    "q": "Văn kiện Đại hội XIV của Đảng, giai đoạn hiện nay, trên cơ sở những kết quả, thành tựu nào đã đạt được đặt ra cho Việt Nam những thời cơ, thuận lợi mới như thế nào?",
    "options": {
      "A": "Từ thành quả đổi mới, từ vị thế quốc tế ngày càng được củng cố, từ thị trường rộng mở, từ sự phát triển của khoa học, công nghệ, từ khát vọng vươn lên mạnh mẽ của Nhân dân."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 88
  },
  {
    "id": 129,
    "q": "Thông điệp cốt lõi mà Đại hội XIV của Đảng muốn gửi tới toàn thể dân tộc Việt Nam là gì?",
    "options": {
      "A": "Đoàn kết, chung sức, đồng lòng vươn mình đưa đất nước vào kỷ nguyên mới."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 89
  },
  {
    "id": 130,
    "q": "Chương trình hành động thực hiện Nghị quyết Đại hội đã chỉ rõ những nội dung gì để triển khai thực hiện Nghị quyết Đại hội XIV?",
    "options": {
      "D": "“Chủ thể, lộ trình, nguồn lực, đích đến”."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 90
  },
  {
    "id": 131,
    "q": "Phương châm Đại hội Đảng bộ Quân đội lần thứ XII là gì?",
    "options": {
      "C": "Đoàn kết - Dân chủ - Kỷ cương - Kiên định - Đột phá - Phát triển"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 1
  },
  {
    "id": 132,
    "q": "Chủ đề của Đại hội Đảng bộ Quân đội lần thứ XII là gì?",
    "options": {
      "D": "Cả a và b đều đúng."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 2
  },
  {
    "id": 133,
    "q": "Trong nhiệm kỳ 2020-2025, lực lượng dân quân tự vệ đạt tỷ lệ bao nhiêu % so với dân số?",
    "options": {
      "D": "2,0%."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 3
  },
  {
    "id": 134,
    "q": "Trong nhiệm kỳ 2020 - 2025 kết quả xây dựng Đảng bộ về tư tưởng đã được Đại hội Đảng bộ Quân đội lần thứ XII đánh giá như thế nào?",
    "options": {
      "A": "Tiếp tục được đổi mới mạnh mẽ, đi vào chiều sâu, góp phần nâng cao nhận thức, tăng cường đoàn kết, thống nhất trong cấp uỷ, tổ chức đảng và cơ quan, đơn vị."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 4
  },
  {
    "id": 135,
    "q": "Những kết quả nổi bật về xây dựng và phát triển công nghiệp quốc phòng trong nhiệm kỳ 2020 – 2025?",
    "options": {
      "D": "Tất cả các đáp án trên đều đúng."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 5
  },
  {
    "id": 136,
    "q": "Một trong những nhiệm vụ trọng tâm của nhiệm kỳ 2020-2025 là hoàn thành điều chỉnh tổ chức Quân đội theo hướng nào?",
    "options": {
      "A": "Tinh, gọn, mạnh."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 6
  },
  {
    "id": 137,
    "q": "Kết quả nổi bật xây dựng Đảng bộ về công tác cán bộ trong nhiệm kỳ 2020 - 2025 được Đại hội Đảng bộ Quân đội đánh giá như thế nào?",
    "options": {
      "D": "Tất cả các đáp án đều đúng."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 7
  },
  {
    "id": 138,
    "q": "Trong nhiệm kỳ 2020-2025, tỷ lệ sản phẩm vũ khí, trang bị kỹ thuật do công nghiệp quốc phòng trong nước sản xuất và trang bị cho Quân đội là bao nhiêu?",
    "options": {
      "C": "Trên 80%."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 20
  },
  {
    "id": 139,
    "q": "Trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII, hạn chế, khuyết điểm trong nhiệm kỳ 2020 - 2025 về công tác quán triệt và triển khai các nghị quyết, chỉ thị của Đảng là gì?",
    "options": {
      "A": "Ở một số nơi, việc quán triệt, triển khai các nghị quyết, chỉ thị, quy định của Đảng và pháp luật của Nhà nước về quốc phòng chưa đầy đủ, kịp thời."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 8
  },
  {
    "id": 140,
    "q": "Hạn chế, khuyết điểm về công tác thanh tra, kiểm tra, giám sát trong nhiệm kỳ 2020 - 2025 được nêu ra trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII là.",
    "options": {
      "B": "Công tác thanh tra, kiểm tra, giám sát có nội dung còn hạn chế, có vụ việc phát hiện chậm."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 9
  },
  {
    "id": 141,
    "q": "Hạn chế, khuyết điểm về chấp hành kỷ luật Quân đội và pháp luật Nhà nước được nêu ra trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII là.",
    "options": {
      "D": "Việc chấp hành kỷ luật Quân đội, pháp luật nhà nước tuy có chuyển biến nhưng chưa thực sự vững chắc, vụ việc nghiêm trọng còn xảy ra ảnh hưởng đến uy tín, truyền thống của Quân đội, hình ảnh “Bộ đội Cụ Hồ”."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 10
  },
  {
    "id": 142,
    "q": "Hạn chế, khuyết điểm về cải cách hành chính, chuyển đổi số được nêu ra trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII là.",
    "options": {
      "A": "Có nội dung chưa đáp ứng được yêu cầu."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 11
  },
  {
    "id": 143,
    "q": "Hạn chế, khuyết điểm về công nghiệp quốc phòng nhiệm kỳ 2020 - 2025 được nêu ra trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII là.",
    "options": {
      "A": "Khả năng nghiên cứu, chế tạo, sản xuất và khai thác, làm chủ vũ khí trang bị mới, công nghệ cao có mặt còn hạn chế như làm chủ công nghệ nền, công nghệ lõi."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 12
  },
  {
    "id": 144,
    "q": "Nguyên nhân chủ quan để xảy ra các vụ việc vi phạm kỷ luật trong nhiệm kỳ 2020 - 2025 được nêu ra trong Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII là.",
    "options": {
      "B": "Công tác giáo dục chính trị, quản lý tư tưởng và các mối quan hệ của cán bộ, chiến sĩ có cấp uỷ, chi bộ chưa chủ động, nhạy bén."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 13
  },
  {
    "id": 145,
    "q": "Những nội dung nào sau đây được xem là bài học kinh nghiệm rút ra sau 5 năm thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XI, góp phần nâng cao sức mạnh tổng hợp của Quân đội?",
    "options": {
      "D": "Tất cả các đáp án đều đúng"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 14
  },
  {
    "id": 146,
    "q": "Những nội dung nào sau đây phản ánh bài học kinh nghiệm về xây dựng khối đoàn kết, phát huy sức mạnh tổng hợp trong Quân đội và sự ủng hộ quốc tế trong thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XI?",
    "options": {
      "D": "Tăng cường đoàn kết thống nhất trong toàn quân và đoàn kết, gắn bó máu thịt quân-dân; phát huy sức mạnh tổng hợp của khối đại đoàn kết toàn dân tộc, kết hợp sự ủng hộ của bạn bè quốc tế đối với sự nghiệp quốc phòng."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 15
  },
  {
    "id": 147,
    "q": "Những nội dung nào sau đây phản ánh bài học kinh nghiệm về chủ động nghiên cứu, dự báo tình hình và nâng cao chất lượng lãnh đạo, chỉ đạo trong thực hiện nhiệm vụ quân sự, quốc phòng được nghị quyết Đại hội Đảng bộ quân đội lần thứ XII chỉ ra?",
    "options": {
      "D": "Tất cả các đáp án đều đúng."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 16
  },
  {
    "id": 148,
    "q": "Nội dung nào sau đây phản ánh bài học kinh nghiệm về kiểm soát quyền lực, giữ vững kỷ luật và nguyên tắc lãnh đạo trong Quân sau 5 năm thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XI?",
    "options": {
      "D": "Chủ động kiểm tra, giám sát và kiểm soát quyền lực, giữ vững nguyên tắc lãnh đạo, kỷ luật, kỷ cương."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 17
  },
  {
    "id": 149,
    "q": "Mục tiêu chủ yếu về phát triển KHCN, đổi mới sáng tạo và chuyển đổi số đến năm 2030 thuộc nhóm nước nào?",
    "options": {
      "A": "Thuộc nhóm dẫn đầu quốc gia, một số lĩnh vực đạt trình độ quốc tế."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 18
  },
  {
    "id": 150,
    "q": "Mục tiêu cốt lõi trong xây dựng công nghiệp quốc phòng 5 năm tới là gì?",
    "options": {
      "A": "Làm chủ công nghệ nền, công nghệ lõi, công nghệ tiên tiến, lưỡng dụng"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 19
  },
  {
    "id": 151,
    "q": "Nội dung nào phản ánh đúng định hướng phát triển sản phẩm công nghiệp quốc phòng được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "D": "Sản xuất vũ khí trang bị có ý nghĩa chiến lược, hiện đại, hàm lượng công nghệ cao"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 20
  },
  {
    "id": 152,
    "q": "Công nghệ nào được xác định cần tích hợp vào vũ khí, trang bị được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "A": "Công nghệ phân tích dữ liệu lớn (Big Data)"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 21
  },
  {
    "id": 153,
    "q": "Một trong những mục tiêu về hệ thống chỉ huy trong công nghiệp quốc phòng được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "C": "Xây dựng hệ thống tự động hoá chỉ huy các cấp (C4ISR)"
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 22
  },
  {
    "id": 154,
    "q": "Nội dung nào thuộc định hướng làm chủ công nghệ chuyên sâu được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "A": "Từng bước làm chủ công nghệ thuỷ âm, sonar, viễn thám"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 23
  },
  {
    "id": 155,
    "q": "Đại hội Đảng bộ Quân đội lần thứ XII xác định mục đích hằng năm có bao nhiêu tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và xuất sắc nhiệm vụ?",
    "options": {
      "D": "Hằng năm có trên 90% tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và xuất sắc nhiệm vụ"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 24
  },
  {
    "id": 156,
    "q": "Mục tiêu chung về huấn luyện, giáo dục và đào tạo trong nhiệm kỳ 2025 -20230 được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "A": "Đáp ứng yêu cầu nhiệm vụ trong tình hình mới, chiến tranh công nghệ cao; phát triển nguồn nhân lực chất lượng cao"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 25
  },
  {
    "id": 157,
    "q": "Chỉ tiêu về chất lượng huấn luyện được Đại hội Đảng bộ Quân đội lần thứ XII xác định như thế nào?",
    "options": {
      "A": "70% trở lên đơn vị đạt tiêu chuẩn huấn luyện giỏi"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 26
  },
  {
    "id": 158,
    "q": "Mục tiêu xây dựng hệ thống nhà trường trong Quân đội được Đại hội Đảng bộ Quân đội lần thứ XII xác định như thế nào?",
    "options": {
      "D": "Xây dựng nhà trường thông minh, hiện đại, chính quy, mẫu mực"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 27
  },
  {
    "id": 159,
    "q": "Yêu cầu đối với học viên các nhà trường Quân đội sau khi ra trường được Đại hội Đảng bộ Quân đội lần thứ XII xác định như thế nào?",
    "options": {
      "A": "100% học viên hoàn thành chức trách, nhiệm vụ"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 28
  },
  {
    "id": 160,
    "q": "Nghị quyết Đại hội đảng bộ Quân đội lần thứ XII xác định tỷ lệ vi phạm kỷ luật trong toàn quân trong nhiệm kỳ mới là gì?",
    "options": {
      "B": "Tỉ lệ vi phạm kỷ luật dưới 0,2%."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 29
  },
  {
    "id": 161,
    "q": "Nghị quyết Đại hội đảng bộ Quân đội lần thứ XII xác định mục tiêu sản xuất vật tư kỹ thuật như thế nào?",
    "options": {
      "A": "Sản xuất được 30% vật tư kỹ thuật đặc chủng; 60% vật tư kỹ thuật thông dụng."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 30
  },
  {
    "id": 162,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định mục tiêu bảo đảm, bảo quản vũ khí, trang bị như thế nào?",
    "options": {
      "A": "Bảo đảm 100% vũ khí, trang bị có nhà che; 50% nhà kho cấp chiến lược được xây dựng, quản lý theo mô hình ứng dụng công nghệ cao."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 31
  },
  {
    "id": 163,
    "q": "Chỉ tiêu quân số khỏe hằng năm mà Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định đó là.",
    "options": {
      "A": "Trên 98,5%"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 32
  },
  {
    "id": 164,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định thực hiện những đột phá nào trong nhiệm kỳ 2025 – 2030?",
    "options": {
      "D": "Tất cả đáp án trên đều đúng."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 33
  },
  {
    "id": 165,
    "q": "Phương hướng nào trong nhiệm kỳ 2025-2030 đề cập trực tiếp đến chỉ đạo của Tổng Bí thư được Nghị quyết Đại hội đại biểu Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "A": "Thực hiện chỉ đạo “2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa”"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 34
  },
  {
    "id": 166,
    "q": "Nội dung nào thể hiện nguyên tắc lãnh đạo của Đảng đối với Quân đội được Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII tiếp tục xác định?",
    "options": {
      "A": "Giữ vững và tăng cường sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng đối với Quân đội"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 35
  },
  {
    "id": 167,
    "q": "Nội dung nào phản ánh vai trò quản lý của Nhà nước đối với Quân đội được Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII tiếp tục xác định?",
    "options": {
      "A": "Bảo đảm sự quản lý, điều hành tập trung, thống nhất của Nhà nước đối với Quân đội và sự nghiệp quốc phòng"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 36
  },
  {
    "id": 168,
    "q": "Phương hướng được Đại hội đại biểu Đảng bộ Quân đội lần thứ XII xác định trong nhiệm kỳ 2025-2030 về xây dựng lực lượng dự bị động viên, dân quân tự vệ?",
    "options": {
      "A": "Xây dựng lực lượng dự bị động viên hùng hậu, dân quân tự vệ vững mạnh, rộng khắp."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 37
  },
  {
    "id": 169,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định một trong những nhiệm vụ, giải pháp chủ yếu lãnh đạo thực hiện tốt nhiệm vụ sẵn sàng chiến đấu, tổ chức lực lượng tinh, gọn, mạnh, cần tiến hành như thế nào?",
    "options": {
      "D": "Tất cả đáp án trên đều đúng"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 38
  },
  {
    "id": 170,
    "q": "Đại hội Đảng bộ Quân đội lần thứ XII xác định nhiệm vụ, giải pháp nào trong lãnh đạo thực hiện chức năng nghiên cứu, tham mưu về quân sự, quốc phòng?",
    "options": {
      "D": "Tất cả các đáp án trên đều đúng"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 39
  },
  {
    "id": 171,
    "q": "Yêu cầu nào trong xử lý các tình huống về quân sự, quốc phòng được xác định trong phương hướng được Đại hội Đảng bộ Quân đội lần thứ XII xác định ?",
    "options": {
      "D": "Tất cả các đáp án trên đều đúng"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 40
  },
  {
    "id": 172,
    "q": "Giải pháp chủ yếu lãnh đạo thực hiện chức năng nghiên cứu, tham mưu trong phòng ngừa nguy cơ chiến tranh, xung đột được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "D": "Tất cả các đáp án trên đều đúng"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 41
  },
  {
    "id": 173,
    "q": "Giải pháp chủ yếu đối với việc hoàn thiện hệ thống chính sách quốc phòng được Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "A": "Tiếp tục bổ sung, hoàn thiện thể chế, cơ chế phù hợp thực tiễn"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 42
  },
  {
    "id": 174,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định phương hướng xử lý khó khăn trong thực hiện chức năng nghiên cứu, tham mưu về quân sự, quốc phòng là gì?",
    "options": {
      "A": "Chủ động phát hiện và tháo gỡ kịp thời các vướng mắc"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 43
  },
  {
    "id": 175,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định phương hướng phát triển công nghiệp quốc phòng?",
    "options": {
      "A": "Phát triển theo hướng lưỡng dụng, hiện đại"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 44
  },
  {
    "id": 176,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định phương hướng xây dựng tiềm lực quốc phòng?",
    "options": {
      "A": "Tạo tiềm lực vững mạnh, sẵn sàng đáp ứng các tình huống quốc phòng và phòng thủ dân sự"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 45
  },
  {
    "id": 177,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định Quân đội có vai trò như thế nào trong bảo vệ nền tảng tư tưởng của Đảng?",
    "options": {
      "B": "Tiếp tục là lực lượng nòng cốt, tiên phong trong bảo vệ nền tảng tư tưởng của Đảng."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 46
  },
  {
    "id": 178,
    "q": "Nhiệm vụ, giải pháp nào được xác định nhằm tăng cường công tác tư tưởng, thông tin, tuyên truyền trong Quân đội được Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "D": "Tất cả đáp án trên đều đúng"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 47
  },
  {
    "id": 179,
    "q": "Nhiệm vụ, giải pháp nào được xác định nhằm tăng cường công tác bảo đảm an ninh, an toàn trong Quân đội được Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "D": "Tất cả đáp án đều đúng"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 48
  },
  {
    "id": 180,
    "q": "Để nâng cao khả năng tác chiến hiện đại trong thực hiện nhiệm vụ sẵn sàng chiến đấu Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định ưu tiên nguồn lực nào?",
    "options": {
      "A": "Ưu tiên nguồn lực để tăng cường sức mạnh, nâng cao khả năng tác chiến trên không, trên biển"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 49
  },
  {
    "id": 181,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định để nâng cao năng lực tác chiến trong môi trường hiện đại, cần tập trung vào nội dung nào?",
    "options": {
      "A": "Tăng cường khả năng tác chiến điện tử, xây dựng “Vòm phòng không bền vững”, hình thành những đơn vị tác chiến mới"
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 50
  },
  {
    "id": 182,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định những nhiệm vụ, giải pháp chủ yếu lãnh đạo nâng cao chất lượng huấn luyện, diễn tập?",
    "options": {
      "D": "Tất cả các đáp án đều đúng"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 51
  },
  {
    "id": 183,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định nhiệm vụ, giải pháp chủ yếu lãnh đạo đẩy mạnh ứng dụng công nghệ vào những hoạt động nào?",
    "options": {
      "D": "Các hoạt động chỉ đạo, quản lý, chỉ huy, điều hành, giải quyết thủ tục hành chính và xử lý công việc trên môi trường điện tử."
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 52
  },
  {
    "id": 184,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định nhiệm vụ, giải pháp chủ yếu lãnh đạo xây dựng đội ngũ cán bộ nhân viên hậu cần, kỹ thuật như thế nào?",
    "options": {
      "A": "Có đủ số lượng, cơ cấu hợp lý, chất lượng cao."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 53
  },
  {
    "id": 185,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định nhiệm vụ, giải pháp lãnh đạo đột phá phát triển công nghiệp quốc phòng ưu tiên vào lĩnh vực nào?",
    "options": {
      "A": "Các lĩnh vực mới, hiện đại phù hợp với đối tượng tác chiến và thực tế chiến tranh."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 54
  },
  {
    "id": 186,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định giải pháp chủ yếu lãnh đạo đột phá phát triển các sản phẩm công nghiệp quốc phòng như thế nào?",
    "options": {
      "A": "Đẩy mạnh sản xuất các sản phẩm có giá trị, hàm lượng khoa học công nghệ cao và tham gia chuỗi cung ứng toàn cầu."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 55
  },
  {
    "id": 187,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định nội dung nào là khâu đột phá trong công tác cán bộ?",
    "options": {
      "A": "Đột phá đẩy mạnh thu hút, trọng dụng nhân tài, xây dựng đội ngũ cán bộ Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 56
  },
  {
    "id": 188,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định đối tượng cán bộ nào cần được quan tâm đào tạo?",
    "options": {
      "A": "Cán bộ nữ, cán bộ trẻ, cán bộ người dân tộc thiểu số."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 57
  },
  {
    "id": 189,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định giải pháp xử lý cán bộ năng lực yếu, uy tín thấp, mắc sai phạm như thế nào?",
    "options": {
      "A": "Kịp thời miễn nhiệm, cho từ chức, thay thế những cán bộ năng lực yếu, trách nhiệm, uy tín thấp, mắc sai phạm mà không chờ hết nhiệm kỳ, hết thời hạn bổ nhiệm."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 58
  },
  {
    "id": 190,
    "q": "Chương trình hành động thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII, nhiệm kỳ 2025-2030 xác định công nghiệp quốc phòng tập trung nghiên cứu thiết kế, sản xuất những dòng tên lửa chiến lược nào?",
    "options": {
      "D": "Tất cả đáp án đã nêu"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 59
  },
  {
    "id": 191,
    "q": "Chương trình hành động thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII, nhiệm kỳ 2025-2030 xác định công nghiệp quốc phòng tập trung nghiên cứu thiết kế, sản xuất những loại UAV nào để phục vụ tác chiến?",
    "options": {
      "D": "Tất cả đáp án đã nêu"
    },
    "correct": "D",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 60
  },
  {
    "id": 192,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định phương châm là gì?",
    "options": {
      "C": "Dân chủ - Đoàn kết - Kỷ cương - Sáng tạo - Đổi mới."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 1
  },
  {
    "id": 193,
    "q": "Khi đánh giá về những hạn chế, Đại hội Đảng bộ Quân khu lần thứ XI chỉ ra điểm yếu nào trong công tác nắm tình hình và tuyển quân?",
    "options": {
      "C": "Công tác phối hợp nắm tình hình có thời điểm chưa kịp thời; tuyển chọn, gọi công dân nhập ngũ có địa phương chưa chặt chẽ."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 2
  },
  {
    "id": 194,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI đánh giá như thế nào về việc thực hiện đột phá xây dựng chính quy, chấp hành pháp luật, kỷ luật?",
    "options": {
      "A": "Chuyển biến chưa vững chắc, còn xảy ra vi phạm pháp luật, kỷ luật, có vụ việc nghiêm trọng."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 3
  },
  {
    "id": 195,
    "q": "Trong phần đánh giá khuyết điểm, Đại hội Đảng bộ Quân khu lần thứ XI chỉ ra năng lực lãnh đạo, sức chiến đấu của một số cấp ủy cơ sở có mặt còn hạn chế ở nội dung nào?",
    "options": {
      "C": "Năng lực lãnh đạo, sức chiến đấu có mặt còn hạn chế; công tác giám sát thường xuyên chưa hiệu quả."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 4
  },
  {
    "id": 196,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI đánh giá công tác giáo dục, quản lý, rèn luyện, bồi dưỡng đội ngũ cán bộ hiện nay như thế nào?",
    "options": {
      "C": "Công tác giáo dục, quản lý, rèn luyện, bồi dưỡng đội ngũ cán bộ chưa toàn diện; một số cán bộ trách nhiệm, năng lực còn hạn chế, chưa gương mẫu trong đạo đức, lối sống."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 5
  },
  {
    "id": 197,
    "q": "Khi đánh giá về hạn chế trong công tác huấn luyện, Đại hội Đảng bộ Quân khu lần thứ XI chỉ ra điểm yếu nào cần khắc phục?",
    "options": {
      "C": "Công tác huấn luyện, diễn tập có nội dung còn hạn chế; thực hiện quy định trong diễn tập chưa nghiêm, có đơn vị để xảy ra mất an toàn."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 6
  },
  {
    "id": 198,
    "q": "Đánh giá về công tác hậu cần, Đại hội Đảng bộ Quân khu lần thứ XI chỉ ra điểm yếu nào cần rút kinh nghiệm trong nhiệm kỳ qua?",
    "options": {
      "C": "Công tác hậu cần một số chỉ tiêu, nhiệm vụ chưa đạt; một số mô hình tăng gia sản xuất chưa hiệu quả; xử lý các tồn đọng để chuyển sang công ty cổ phần còn gặp nhiều khó khăn."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 7
  },
  {
    "id": 199,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu xây dựng sở chỉ huy cơ bản cấp tỉnh đạt tỷ lệ bao nhiêu trong nhiệm kỳ?",
    "options": {
      "C": "Hoàn thành 100% sở chỉ huy cơ bản cấp tỉnh."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 8
  },
  {
    "id": 200,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định tỷ lệ đảng viên trong lực lượng Dân quân thường trực đạt chỉ tiêu bao nhiêu?",
    "options": {
      "C": "Đạt tỷ lệ 26% trở lên."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 9
  },
  {
    "id": 201,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định mục tiêu xây dựng trụ sở làm việc riêng cho Ban Chỉ huy quân sự cấp xã đạt tỷ lệ bao nhiêu?",
    "options": {
      "C": "100% Ban Chỉ huy quân sự cấp xã có trụ sở làm việc riêng."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 10
  },
  {
    "id": 202,
    "q": "Trong công tác tuyển quân, Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu công dân nhập ngũ đã tốt nghiệp cao đẳng, đại học đạt tỷ lệ nào?",
    "options": {
      "C": "Phấn đấu đạt tỷ lệ từ 9,0% trở lên."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 11
  },
  {
    "id": 203,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu tỷ lệ đảng viên trong lực lượng Dự bị động viên đạt bao nhiêu?",
    "options": {
      "A": "Đạt tỷ lệ 10% trở lên."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 12
  },
  {
    "id": 204,
    "q": "Về xây dựng đơn vị an toàn, Đại hội Đảng bộ Quân khu lần thứ XI đề ra mục tiêu cụ thể như thế nào?",
    "options": {
      "C": "100% cơ quan, đơn vị an toàn tuyệt đối về chính trị."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 13
  },
  {
    "id": 205,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu hàng năm số đơn vị đạt danh hiệu huấn luyện giỏi như thế nào?",
    "options": {
      "C": "Hằng năm có trên 70% đơn vị đạt huấn luyện giỏi."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 14
  },
  {
    "id": 206,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu cán bộ, nhân viên sử dụng được một ngoại ngữ hoặc tiếng dân tộc thiểu số đến cuối nhiệm kỳ như thế nào?",
    "options": {
      "C": "Phấn đấu đạt trên 30% cán bộ, nhân viên."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 15
  },
  {
    "id": 207,
    "q": "Để tăng cường kỷ luật quân đội, Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu tỷ lệ vi phạm kỷ luật quân đội như thế nào?",
    "options": {
      "B": "Tỷ lệ vi phạm kỷ luật dưới 0,2%."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 16
  },
  {
    "id": 208,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định giá trị thu từ tăng gia sản xuất, chế biến và dịch vụ hậu cần bình quân đạt bao nhiêu?",
    "options": {
      "A": "Bình quân đạt trên 1,6 triệu đồng/người/năm."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 17
  },
  {
    "id": 209,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định mục tiêu quân số khỏe trong Lực lượng vũ trang Quân khu phải đạt tỷ lệ như thế nào?",
    "options": {
      "C": "Đạt từ 99,2% trở lên."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 18
  },
  {
    "id": 210,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định lộ trình đến năm 2030, tỷ lệ cơ quan, đơn vị được sử dụng nước sạch là bao nhiêu?",
    "options": {
      "C": "100% cơ quan, đơn vị được sử dụng nước sạch theo tiêu chuẩn."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 19
  },
  {
    "id": 211,
    "q": "Về công tác kỹ thuật, Đại hội Đảng bộ Quân khu lần thứ XI xác định hệ số kỹ thuật (Kt) đối với nhóm Sẵn sàng chiến đấu, cứu hộ cứu nạn bằng bao nhiêu?",
    "options": {
      "C": "Hệ số kỹ thuật bằng 1,0."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 20
  },
  {
    "id": 212,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định hệ số kỹ thuật (Kt) đối với nhóm huấn luyện chiến đấu phải đạt mức như thế nào?",
    "options": {
      "A": "Đạt từ 0,95 đến 1,0."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 21
  },
  {
    "id": 213,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu bảo đảm nhà che cho vũ khí, trang bị hiện có đạt tỷ lệ như thế nào?",
    "options": {
      "C": "Bảo đảm 100% vũ khí, trang bị có nhà che."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 22
  },
  {
    "id": 214,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định tỷ lệ tổ chức đảng, cán bộ, đảng viên hoàn thành tốt và hoàn thành xuất sắc nhiệm vụ hàng năm là bao nhiêu?",
    "options": {
      "B": "Đạt 90% trở lên."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 23
  },
  {
    "id": 215,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu kiểm tra, giám sát đối với tổ chức đảng và đảng viên trong nhiệm kỳ là bao nhiêu?",
    "options": {
      "C": "Kiểm tra, giám sát 100% tổ chức đảng, đảng viên."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 24
  },
  {
    "id": 216,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định nội dung đột phá thứ nhất tập trung vào vấn đề gì?",
    "options": {
      "A": "Đổi mới, nâng cao chất lượng huấn luyện đáp ứng yêu cầu nhiệm vụ trong tình hình mới; tập trung xây dựng chính quy, chấp hành nghiêm pháp luật, kỷ luật và bảo đảm an toàn."
    },
    "correct": "A",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 25
  },
  {
    "id": 217,
    "q": "Nội dung đột phá thứ hai được Đại hội Đảng bộ Quân khu lần thứ XI xác định tập trung vào yếu tố nào để thực hiện nhiệm vụ?",
    "options": {
      "C": "Đẩy mạnh ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong thực hiện các nhiệm vụ của LLVT Quân khu."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 26
  },
  {
    "id": 218,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định mục tiêu đột phá thứ ba về xây dựng đội ngũ cán bộ như thế nào?",
    "options": {
      "C": "Xây dựng đội ngũ cán bộ các cấp, nhất là cán bộ chủ trì có đủ phẩm chất, năng lực, uy tín đáp ứng yêu cầu, nhiệm vụ trong tình hình mới."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 27
  },
  {
    "id": 219,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định tỷ lệ huy động, tiếp nhận, huấn luyện lực lượng Dự bị động viên đạt chỉ tiêu bao nhiêu?",
    "options": {
      "B": "Đạt 95% chỉ tiêu đề ra."
    },
    "correct": "B",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 28
  },
  {
    "id": 220,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu tổ chức diễn tập cho các cấp trong nhiệm kỳ như thế nào?",
    "options": {
      "C": "Tổ chức diễn tập đạt 100% chỉ tiêu ở các cấp."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 29
  },
  {
    "id": 221,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu thực hiện các nhiệm vụ nghiên cứu khoa học và cải cách hành chính như thế nào?",
    "options": {
      "C": "Hoàn thành 100% nhiệm vụ nghiên cứu khoa học; ứng dụng khoa học, chuyển đổi số, thực hiện Đề án 06 và cải cách hành chính theo kế hoạch."
    },
    "correct": "C",
    "source": "Cau_hoi_va_Dap_an_Dung_Dai_hoi_Dang.docx",
    "source_id": 30
  },
  {
    "id": 222,
    "q": "Theo Luật Phòng thủ dân sự, nội dung nào không thuộc biện pháp khắc phục hậu quả thảm họa, sự cố?",
    "options": {
      "C": "Tổ chức diễn tập phòng thủ dân sự."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 1
  },
  {
    "id": 223,
    "q": "Theo Luật Phòng thủ dân sự, mục tiêu cao nhất của hoạt động phòng thủ dân sự là gì?",
    "options": {
      "C": "Bảo vệ tính mạng, sức khỏe, tài sản của Nhân dân."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 2
  },
  {
    "id": 224,
    "q": "Theo Luật Phòng thủ dân sự, lực lượng phòng thủ dân sự gồm?",
    "options": {
      "B": "Lực lượng nòng cốt và lực lượng rộng rãi."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 3
  },
  {
    "id": 225,
    "q": "Luật Phòng thủ dân sự áp dụng đối với đối tượng nào?",
    "options": {
      "D": "Tổ chức, cá nhân Việt Nam, tổ chức quốc tế và cá nhân nước ngoài hoạt động trên lãnh thổ Việt Nam."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 4
  },
  {
    "id": 226,
    "q": "Theo Luật Phòng thủ dân sự, nguyên tắc quan trọng trong hoạt động phòng thủ dân sự là gì?",
    "options": {
      "B": "Chuẩn bị từ sớm, từ xa, phòng là chính."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 5
  },
  {
    "id": 227,
    "q": "Theo Luật Phòng thủ dân sự, phương châm được thực hiện trong phòng thủ dân sự là gì?",
    "options": {
      "C": "Bốn tại chỗ."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 6
  },
  {
    "id": 228,
    "q": "Theo Luật Phòng thủ dân sự, cấp độ phòng thủ dân sự gồm?",
    "options": {
      "B": "03 cấp độ."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 7
  },
  {
    "id": 229,
    "q": "Theo Luật Phòng thủ dân sự, phòng thủ dân sự cấp độ 1 được áp dụng chủ yếu trong phạm vi nào?",
    "options": {
      "D": "Cấp xã."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 8
  },
  {
    "id": 230,
    "q": "Theo Luật Phòng thủ dân sự, phòng thủ dân sự cấp độ 3 được áp dụng khi nào?",
    "options": {
      "C": "Sự cố vượt khả năng ứng phó của cấp tỉnh."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 9
  },
  {
    "id": 231,
    "q": "Theo Luật Phòng thủ dân sự, hành vi nào sau đây bị nghiêm cấm trong hoạt động phòng thủ dân sự?",
    "options": {
      "C": "Đưa tin sai sự thật về sự cố, thảm họa."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 10
  },
  {
    "id": 232,
    "q": "Theo Luật Phòng thủ dân sự, Cơ quan thường trực của Ban Chỉ đạo Phòng thủ dân sự quốc gia là cơ quan nào?",
    "options": {
      "B": "Bộ Quốc phòng."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 12
  },
  {
    "id": 233,
    "q": "Theo Luật Phòng thủ dân sự, Ban Chỉ đạo Phòng thủ dân sự quốc gia có chức năng gì?",
    "options": {
      "B": "Tham mưu cho Chính phủ, Thủ tướng Chính phủ về phòng thủ dân sự."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 13
  },
  {
    "id": 234,
    "q": "Theo Luật Phòng thủ dân sự, Cơ quan thường trực của Ban Chỉ huy phòng thủ dân sự địa phương là ai?",
    "options": {
      "C": "Cơ quan quân sự cùng cấp."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 14
  },
  {
    "id": 235,
    "q": "Theo Luật Phòng thủ dân sự, lực lượng nòng cốt của phòng thủ dân sự gồm?",
    "options": {
      "B": "Dân quân tự vệ và dân phòng."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 15
  },
  {
    "id": 236,
    "q": "Theo Luật Phòng thủ dân sự, một trong các quyền của cá nhân trong hoạt động phòng thủ dân sự là gì?",
    "options": {
      "B": "Được tiếp cận thông tin về phòng thủ dân sự theo quy định của pháp luật."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 16
  },
  {
    "id": 237,
    "q": "Theo Luật Phòng thủ dân sự, một trong các nghĩa vụ của cá nhân là gì?",
    "options": {
      "C": "Tham gia đào tạo, huấn luyện, diễn tập khi có yêu cầu của cơ quan có thẩm quyền"
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 17
  },
  {
    "id": 238,
    "q": "Theo Luật Phòng thủ dân sự, tổ chức, cá nhân nước ngoài tham gia cứu trợ tại Việt Nam phải làm gì?",
    "options": {
      "A": "Đăng ký hoạt động với cơ quan có thẩm quyền của Việt Nam."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 18
  },
  {
    "id": 239,
    "q": "Theo Luật Phòng thủ dân sự, chính quyền cấp tỉnh được áp dụng biện pháp nào sau đây khi xảy ra sự cố, thảm họa?",
    "options": {
      "A": "Giãn cách xã hội phù hợp với mức độ sự cố."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 19
  },
  {
    "id": 240,
    "q": "Theo Luật Phòng thủ dân sự, một trong những chính sách của Nhà nước về phòng thủ dân sự là gì?",
    "options": {
      "B": "Khuyến khích, tạo điều kiện ủng hộ vật chất, tài chính, tinh thần cho hoạt động phòng thủ dân sự trên nguyên tắc tự nguyện."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 20
  },
  {
    "id": 241,
    "q": "Theo Luật Phòng thủ dân sự, hoạt động phòng ngừa sự cố, thảm họa bao gồm nội dung nào sau đây?",
    "options": {
      "D": "Xây dựng chiến lược, kế hoạch, công trình, trang thiết bị và tổ chức huấn luyện, diễn tập."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 21
  },
  {
    "id": 242,
    "q": "Theo Luật Phòng thủ dân sự, một trong những căn cứ xác định cấp độ phòng thủ dân sự là gì?",
    "options": {
      "C": "Khả năng ứng phó, khắc phục hậu quả của chính quyền địa phương và lực lượng phòng thủ dân sự."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 22
  },
  {
    "id": 243,
    "q": "Theo Luật Phòng thủ dân sự, hành vi nào bị nghiêm cấm trong hoạt động phòng thủ dân sự?",
    "options": {
      "D": "Sử dụng trang thiết bị phòng thủ dân sự chuyên dụng không đúng mục đích."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 23
  },
  {
    "id": 244,
    "q": "Theo Luật Phòng thủ dân sự, khi tham gia hoạt động phòng thủ dân sự theo quyết định huy động của người có thẩm quyền, cá nhân được hưởng quyền nào?",
    "options": {
      "B": "Được hưởng tiền công lao động theo quy định."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 24
  },
  {
    "id": 245,
    "q": "Theo Luật Phòng thủ dân sự, cơ quan, tổ chức có quyền nào sau đây?",
    "options": {
      "A": "Được tiếp cận thông tin về phòng thủ dân sự theo quy định của pháp luật."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 25
  },
  {
    "id": 246,
    "q": "Theo Luật Phòng thủ dân sự, một trong những nghĩa vụ của cơ quan, tổ chức là gì?",
    "options": {
      "B": "Xây dựng và tổ chức thực hiện phương án phòng ngừa, ứng phó, khắc phục hậu quả sự cố, thảm họa."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 26
  },
  {
    "id": 247,
    "q": "Theo Luật Phòng thủ dân sự, lực lượng rộng rãi trong phòng thủ dân sự được hình thành từ đâu?",
    "options": {
      "A": "Toàn dân tham gia."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 32
  },
  {
    "id": 248,
    "q": "Theo Luật Phòng thủ dân sự, Nhà nước khuyến khích hoạt động nào sau đây?",
    "options": {
      "C": "Ủng hộ vật chất, tài chính, tinh thần cho hoạt động phòng thủ dân sự trên nguyên tắc tự nguyện."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 27
  },
  {
    "id": 249,
    "q": "Theo Luật Phòng thủ dân sự, nguồn lực thi hành Luật được bảo đảm từ đâu?",
    "options": {
      "D": "Tất cả các nguồn đã nêu."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 28
  },
  {
    "id": 250,
    "q": "Theo Luật Phòng thủ dân sự, Bộ trưởng Bộ Quốc phòng có trách nhiệm nào sau đây?",
    "options": {
      "A": "Giúp Thủ tướng Chính phủ theo dõi, hướng dẫn, kiểm tra việc triển khai thực hiện Luật."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 29
  },
  {
    "id": 251,
    "q": "Theo Luật Phòng thủ dân sự, phương châm xuyên suốt trong hoạt động phòng thủ dân sự là gì?",
    "options": {
      "C": "Chuẩn bị từ sớm, từ xa, phòng là chính."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 30
  },
  {
    "id": 252,
    "q": "Theo Luật Phòng thủ dân sự, đâu là các nguyên tắc trong hoạt động phòng thủ dân sự?",
    "options": {
      "D": "Tất cả các phương án đã nêu."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 31
  },
  {
    "id": 253,
    "q": "Theo Luật Phòng thủ dân sự, lực lượng phòng thủ dân sự bao gồm những thành phần nào?",
    "options": {
      "C": "Lực lượng nòng cốt và lực lượng rộng rãi."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 32
  },
  {
    "id": 254,
    "q": "Theo Luật Phòng thủ dân sự, cơ quan chỉ đạo cao nhất về phòng thủ dân sự ở cấp quốc gia là cơ quan nào?",
    "options": {
      "B": "Ban Chỉ đạo Phòng thủ dân sự quốc gia."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 33
  },
  {
    "id": 255,
    "q": "Theo Luật Phòng thủ dân sự, nguyên tắc hợp tác quốc tế trong phòng thủ dân sự là gì?",
    "options": {
      "D": "Tất cả các nội dung đã nêu."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 34
  },
  {
    "id": 256,
    "q": "Theo Luật Phòng thủ dân sự, quỹ phòng thủ dân sự là quỹ tài chính có đặc điểm gì?",
    "options": {
      "A": "Quỹ tài chính nhà nước ngoài ngân sách."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 35
  },
  {
    "id": 257,
    "q": "Theo Luật Phòng thủ dân sự, nguồn tài chính nào không dùng để hình thành Quỹ phòng thủ dân sự?",
    "options": {
      "C": "Thuế thu nhập cá nhân của người lao động."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 36
  },
  {
    "id": 258,
    "q": "Theo Luật Phòng thủ dân sự, một trong những biện pháp được áp dụng trong phòng thủ dân sự Cấp độ 1 là gì?",
    "options": {
      "A": "Sơ tán người, tài sản ra khỏi khu vực nguy hiểm."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 37
  },
  {
    "id": 259,
    "q": "Theo Luật Phòng thủ dân sự, người làm nhiệm vụ phòng thủ dân sự trực đêm (từ 22h đến 6h sáng hôm sau) được hưởng chế độ đặc thù gì?",
    "options": {
      "C": "Được hưởng tiền ăn thêm."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 38
  },
  {
    "id": 260,
    "q": "Theo Luật Phòng thủ dân sự, công dân có nghĩa vụ gì trong phòng thủ dân sự?",
    "options": {
      "D": "Tất cả các ý trên."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 39
  },
  {
    "id": 261,
    "q": "Theo Luật Phòng thủ dân sự, đâu không phải là biện pháp phòng thủ dân sự được áp dụng trong tình trạng chiến tranh?",
    "options": {
      "C": "Huấn luyện cho lực lượng chuyên trách."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 40
  },
  {
    "id": 262,
    "q": "Việt Nam chính thức cử lực lượng tham gia hoạt động gìn giữ hòa bình Liên hợp quốc từ thời điểm nào?",
    "options": {
      "C": "Tháng 6/2014."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 1
  },
  {
    "id": 263,
    "q": "Đến nay, Việt Nam đã cử gần bao nhiêu lượt sĩ quan, quân nhân chuyên nghiệp tham gia thực hiện nhiệm vụ gìn giữ hòa bình Liên hợp quốc?",
    "options": {
      "D": "Gần 1.100 lượt."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 2
  },
  {
    "id": 264,
    "q": "Một điểm mới quan trọng của Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc năm 2025 so với Nghị quyết số 130/2020/QH14 của Quốc hội là gì?",
    "options": {
      "B": "Bổ sung đối tượng dân sự tham gia lực lượng gìn giữ hòa bình Liên hợp quốc."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 3
  },
  {
    "id": 265,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, hình thức tham gia hoạt động gìn giữ hòa bình Liên hợp quốc gồm những hình thức nào?",
    "options": {
      "B": "Cá nhân và đơn vị."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 4
  },
  {
    "id": 266,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những chức năng của lực lượng Việt Nam tham gia hoạt động gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": {
      "B": "Duy trì, bảo vệ hòa bình khu vực và thế giới."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 5
  },
  {
    "id": 267,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, lực lượng Việt Nam tham gia hoạt động gìn giữ hòa bình Liên hợp quốc gồm?",
    "options": {
      "B": "Lực lượng vũ trang và lực lượng dân sự."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 6
  },
  {
    "id": 268,
    "q": "Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc đã mở rộng đối tượng tham gia lực lượng gìn giữ hòa bình Liên hợp quốc bằng việc bổ sung nhóm đối tượng nào?",
    "options": {
      "A": "Cán bộ, công chức, viên chức."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 7
  },
  {
    "id": 269,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, cơ quan chủ trì, phối hợp với các bộ, ngành, địa phương chịu trách nhiệm trước Chính phủ về quản lý nhà nước đối với hoạt động này là.",
    "options": {
      "C": "Bộ Quốc phòng."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 8
  },
  {
    "id": 270,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, cơ quan nào quyết định việc cử, điều chỉnh, gia hạn nhiệm kỳ công tác và rút lực lượng vũ trang tham gia gìn giữ hòa bình Liên hợp quốc?",
    "options": {
      "D": "Hội đồng Quốc phòng và An ninh."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 9
  },
  {
    "id": 271,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, Thủ tướng Chính phủ quyết định việc cử, điều chỉnh, gia hạn nhiệm kỳ công tác và rút đối tượng nào?",
    "options": {
      "D": "Lực lượng dân sự."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 10
  },
  {
    "id": 272,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, trong trường hợp khẩn cấp, Bộ trưởng Bộ Quốc phòng và Bộ trưởng Bộ Công an có thẩm quyền nào?",
    "options": {
      "B": "Quyết định rút lực lượng thuộc quyền về nước."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 11
  },
  {
    "id": 273,
    "q": "Theo Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, khi có nguy cơ mất an toàn, lực lượng Việt Nam có trách nhiệm báo cáo cấp có thẩm quyền để quyết định việc gì?",
    "options": {
      "B": "Từ chối nhiệm vụ."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 12
  },
  {
    "id": 274,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những nội dung huấn luyện, đào tạo đối với lực lượng tham gia gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": {
      "B": "Ngoại ngữ, bình đẳng giới và các kỹ năng khác."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 13
  },
  {
    "id": 275,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, chính sách của Nhà nước đối với nữ giới tham gia hoạt động gìn giữ hòa bình Liên hợp quốc được quy định như thế nào?",
    "options": {
      "A": "Khuyến khích và ưu tiên nữ giới tham gia."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 14
  },
  {
    "id": 276,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những yêu cầu quan trọng khi Việt Nam tham gia lực lượng gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": {
      "B": "Phù hợp với Hiến chương Liên hợp quốc, pháp luật quốc tế, pháp luật Việt Nam và điều ước quốc tế mà Việt Nam là thành viên."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 15
  },
  {
    "id": 277,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, việc tham gia lực lượng gìn giữ hòa bình Liên hợp quốc góp phần trực tiếp thực hiện đường lối đối ngoại nào của Đảng và Nhà nước ta?",
    "options": {
      "C": "Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 16
  },
  {
    "id": 278,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, việc cử lực lượng tham gia hoạt động gìn giữ hòa bình Liên hợp quốc phải bảo đảm yêu cầu nào?",
    "options": {
      "A": "Không làm ảnh hưởng đến khả năng sẵn sàng chiến đấu và thực hiện nhiệm vụ của cơ quan, đơn vị."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 17
  },
  {
    "id": 279,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, đối với đơn vị tham gia hoạt động gìn giữ hòa bình Liên hợp quốc, việc tổ chức lực lượng phải đáp ứng yêu cầu gì?",
    "options": {
      "B": "Theo đề xuất của Liên hợp quốc và khả năng bảo đảm của Việt Nam."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 18
  },
  {
    "id": 280,
    "q": "Một trong những mục tiêu quan trọng của việc ban hành Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc là gì?",
    "options": {
      "C": "Hoàn thiện cơ sở pháp lý cho việc tham gia lực lượng gìn giữ hòa bình Liên hợp quốc."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 19
  },
  {
    "id": 281,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, trong quản lý nhà nước về tham gia hoạt động gìn giữ hòa bình Liên hợp quốc, Bộ Quốc phòng giữ vai trò gì?",
    "options": {
      "C": "Cơ quan chủ trì giúp Chính phủ thực hiện quản lý nhà nước."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 20
  },
  {
    "id": 282,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những nhiệm vụ của lực lượng Việt Nam tại phái bộ gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": {
      "B": "Hỗ trợ thực hiện nhiệm vụ theo sự phân công của Liên hợp quốc."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 21
  },
  {
    "id": 283,
    "q": "Theo Luật tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, việc sử dụng vũ khí của lực lượng Việt Nam tại phái bộ phải tuân thủ như thế nào?",
    "options": {
      "C": "Quy định của Liên hợp quốc và thỏa thuận giữa Việt Nam với Liên hợp quốc."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 22
  },
  {
    "id": 284,
    "q": "Một trong những điểm mới của Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc năm 2025 là gì?",
    "options": {
      "A": "Bổ sung quy định về lực lượng dân sự tham gia hoạt động gìn giữ hòa bình Liên hợp quốc."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 23
  },
  {
    "id": 285,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, nội dung đào tạo, huấn luyện lực lượng tham gia gìn giữ hòa bình Liên hợp quốc phải bảo đảm như thế nào?",
    "options": {
      "C": "Toàn diện về chuyên môn, ngoại ngữ, pháp luật quốc tế, kỹ năng thực hiện nhiệm vụ."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 24
  },
  {
    "id": 286,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, chức năng của lực lượng Việt Nam tham gia hoạt động gìn giữ hòa bình được xác định chủ yếu là gì?",
    "options": {
      "B": "Duy trì, bảo vệ hòa bình."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 25
  },
  {
    "id": 287,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình Liên hợp quốc, trong trường hợp cần thiết phải rút lực lượng về nước trước thời hạn, cơ sở xem xét chủ yếu là gì?",
    "options": {
      "C": "Tình hình nhiệm vụ, an ninh, an toàn hoặc yêu cầu cấp bách liên quan đến lợi ích quốc gia."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 26
  },
  {
    "id": 288,
    "q": "Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, hoạt động hợp tác quốc tế trong lĩnh vực gìn giữ hòa bình Liên hợp quốc nhằm mục đích gì?",
    "options": {
      "A": "Tăng cường năng lực tham gia hoạt động gìn giữ hòa bình Liên hợp quốc của Việt Nam."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 27
  },
  {
    "id": 289,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những hình thức hợp tác quốc tế về gìn giữ hòa bình là gì?",
    "options": {
      "A": "Đào tạo, tập huấn và trao đổi kinh nghiệm."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 28
  },
  {
    "id": 290,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, chế độ chính sách đối với lực lượng tham gia hoạt động gìn giữ hòa bình Liên hợp quốc được bảo đảm trên cơ sở nào”",
    "options": {
      "C": "Pháp luật Việt Nam, quy định của Liên hợp quốc và các thỏa thuận có liên quan."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 29
  },
  {
    "id": 291,
    "q": "Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những ý nghĩa quan trọng của việc Việt Nam tham gia hoạt động gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": {
      "A": "Khẳng định vai trò, vị thế và trách nhiệm của Việt Nam đối với cộng đồng quốc tế."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 30
  },
  {
    "id": 292,
    "q": "Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, việc tuyển chọn lực lượng tham gia hoạt động gìn giữ hòa bình Liên hợp quốc phải căn cứ vào đâu?",
    "options": {
      "B": "Tiêu chuẩn, điều kiện, yêu cầu vị trí việc làm và nhiệm vụ được giao."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 31
  },
  {
    "id": 293,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình Liên hợp quốc, một trong những điểm mới quan trọng của Luật so với Nghị quyết số 130/2020/QH14 là gì?",
    "options": {
      "B": "Bổ sung hành vi bị nghiêm cấm."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 32
  },
  {
    "id": 294,
    "q": "Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, lực lượng dân sự tham gia hoạt động gìn giữ hòa bình Liên hợp quốc có thể được tuyển chọn từ đâu?",
    "options": {
      "A": "Các bộ, ngành, địa phương theo yêu cầu nhiệm vụ."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 33
  },
  {
    "id": 295,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình Liên hợp quốc, một trong những yêu cầu đối với công tác quản lý lực lượng Việt Nam tại phái bộ là gì?",
    "options": {
      "A": "Bảo đảm chấp hành nghiêm pháp luật Việt Nam và quy định của Liên hợp quốc."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 34
  },
  {
    "id": 296,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình Liên hợp quốc, nội dung nào sau đây không thuộc lĩnh vực tham gia được nêu trong Luật?",
    "options": {
      "C": "Phát triển kinh tế đối ngoại."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 35
  },
  {
    "id": 297,
    "q": "Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, khi thực hiện nhiệm vụ tại phái bộ, thành viên lực lượng Việt Nam phải đề cao yếu tố nào?",
    "options": {
      "B": "Danh dự, uy tín quốc gia và hình ảnh đất nước, con người Việt Nam."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 36
  },
  {
    "id": 298,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, lực lượng Việt Nam tham gia hoạt động gìn giữ hòa bình được chia như thế nào?",
    "options": {
      "C": "Lực lượng vũ trang và dân sự."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 37
  },
  {
    "id": 299,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, lực lượng Việt Nam tham gia hoạt động gìn giữ hòa bình Liên hợp quốc gồm những lực lượng nào?",
    "options": {
      "D": "Lực lượng vũ trang và lực lượng dân sự."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 38
  },
  {
    "id": 300,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình Liên hợp quốc, điểm nào sau đây thể hiện rõ nhất sự mở rộng đối tượng tham gia của Luật so với quy định trước đây?",
    "options": {
      "A": "Bổ sung lực lượng dân sự."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 39
  },
  {
    "id": 301,
    "q": "Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, nội dung nào sau đây thuộc quyền hạn của lực lượng Việt Nam tham gia hoạt động gìn giữ hòa binh?",
    "options": {
      "C": "Sử dụng vũ khí theo quy định."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 40
  },
  {
    "id": 302,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan chỉ đạo, chỉ huy hoạt động trong tình trạng khẩn cấp về thảm họa là ai?",
    "options": {
      "C": "Ban Chỉ đạo Phòng thủ dân sự quốc gia và hệ thống Ban Chỉ huy Phòng thủ dân sự các cấp."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 1
  },
  {
    "id": 303,
    "q": "Loại nào dưới đây không thuộc các loại tình trạng khẩn cấp được Luật Tình trạng khẩn cấp năm 2025 quy định?",
    "options": {
      "D": "Tình trạng khẩn cấp về kinh tế."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 2
  },
  {
    "id": 304,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, người ra quyết định ứng phó trong tình trạng khẩn cấp không phải chịu trách nhiệm khi nào?",
    "options": {
      "C": "Khi quyết định dựa trên thông tin có được tại thời điểm ra quyết định, đúng thẩm quyền và không có động cơ vụ lợi."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 3
  },
  {
    "id": 305,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan có thẩm quyền quyết định ban bố tình trạng khẩn cấp là ai?",
    "options": {
      "C": "Ủy ban Thường vụ Quốc hội."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 4
  },
  {
    "id": 306,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, chủ thể có thẩm quyền công bố tình trạng khẩn cấp căn cứ vào nghị quyết của Ủy ban Thường vụ Quốc hội là ai?",
    "options": {
      "D": "Chủ tịch nước."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 5
  },
  {
    "id": 307,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, thông tin về tình trạng khẩn cấp phải được thực hiện như thế nào?",
    "options": {
      "C": "Thông báo ngay trên phương tiện thông tin đại chúng và niêm yết công khai tại địa bàn được đặt trong tình trạng khẩn cấp."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 6
  },
  {
    "id": 308,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, chủ thể có thẩm quyền quyết định áp dụng các biện pháp trong tình trạng khẩn cấp là gì?",
    "options": {
      "C": "Thủ tướng Chính phủ."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 7
  },
  {
    "id": 309,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, Thủ tướng Chính phủ được ủy quyền cho Chủ tịch UBND cấp tỉnh áp dụng biện pháp trong trường hợp nào?",
    "options": {
      "C": "Tình trạng khẩn cấp do thảm họa."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 8
  },
  {
    "id": 310,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, đối tượng nào được ưu tiên trong cứu trợ, hỗ trợ khẩn cấp?",
    "options": {
      "C": "Người có nguy cơ bị ảnh hưởng đến tính mạng, sức khỏe, đặc biệt là đối tượng dễ bị tổn thương"
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 9
  },
  {
    "id": 311,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan chỉ đạo, chỉ huy hoạt động trong tình trạng khẩn cấp về thảm họa là gì?",
    "options": {
      "C": "Ban Chỉ đạo Phòng thủ dân sự quốc gia và hệ thống Ban Chỉ huy Phòng thủ dân sự các cấp."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 10
  },
  {
    "id": 312,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, quy định bao nhiêu loại tình trạng khẩn cấp?",
    "options": {
      "B": "03 loại."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 10
  },
  {
    "id": 313,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, trong tình trạng khẩn cấp về an ninh quốc gia, trật tự, an toàn xã hội, cơ quan chỉ huy, điều hành là gì?",
    "options": {
      "B": "Ban Chỉ huy Bảo vệ an ninh quốc gia."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 11
  },
  {
    "id": 314,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, việc ra quyết định ứng phó trong tình trạng khẩn cấp gây thiệt hại nhưng dựa trên thông tin có được tại thời điểm ra quyết định, đúng thẩm quyền và không có động cơ vụ lợi thì như thế nào?",
    "options": {
      "B": "Người ra quyết định không phải chịu trách nhiệm."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 12
  },
  {
    "id": 315,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, trường hợp cần thiết, Thủ tướng Chính phủ được ủy quyền cho Chủ tịch UBND cấp tỉnh quyết định áp dụng biện pháp trong loại tình trạng khẩn cấp nào?",
    "options": {
      "C": "Tình trạng khẩn cấp do thảm họa."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 13
  },
  {
    "id": 316,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan nào là đầu mối chịu trách nhiệm trước Chính phủ thực hiện quản lý nhà nước về tình trạng khẩn cấp?",
    "options": {
      "D": "Bộ Quốc phòng."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 14
  },
  {
    "id": 317,
    "q": "Theo Hiến pháp năm 2013, quyền con người, quyền công dân chỉ có thể bị hạn chế bằng?",
    "options": {
      "B": "Quy định của luật."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 15
  },
  {
    "id": 318,
    "q": "Quan điểm nào sau đây được xác định trong quá trình xây dựng Luật Tình trạng khẩn cấp?",
    "options": {
      "B": "Kế thừa những quy định đã được thực tiễn kiểm nghiệm."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 16
  },
  {
    "id": 319,
    "q": "Trường hợp nào sau đây không thuộc các loại tình trạng khẩn cấp theo Luật Tình trạng khẩn cấp năm 2025?",
    "options": {
      "B": "Tình trạng khẩn cấp về tài chính."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 17
  },
  {
    "id": 320,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, người ra quyết định ứng phó trong tình trạng khẩn cấp không phải chịu trách nhiệm khi nào?",
    "options": {
      "A": "Quyết định đúng thẩm quyền và không vụ lợi."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 18
  },
  {
    "id": 321,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, trong trường hợp cần thiết, Thủ tướng Chính phủ có thể ủy quyền cho Chủ tịch UBND cấp tỉnh quyết định áp dụng biện pháp như thế nào?",
    "options": {
      "C": "Tình trạng khẩn cấp do thảm họa."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 19
  },
  {
    "id": 322,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, đối tượng nào được ưu tiên trong hoạt động cứu trợ, hỗ trợ khẩn cấp?",
    "options": {
      "C": "Đối tượng dễ bị tổn thương."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 20
  },
  {
    "id": 323,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, người được huy động làm nhiệm vụ trong tình trạng khẩn cấp được hưởng gì?",
    "options": {
      "A": "Chính sách đặc thù và chế độ theo quy định pháp luật."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 21
  },
  {
    "id": 324,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, Ban Chỉ đạo Phòng thủ dân sự quốc gia chỉ đạo, chỉ huy hoạt động trong tình trạng nào?",
    "options": {
      "B": "Tình trạng khẩn cấp về thảm họa"
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 22
  },
  {
    "id": 325,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan chỉ huy, điều hành hoạt động trong tình trạng khẩn cấp về an ninh quốc gia, trật tự, an toàn xã hội là gì?",
    "options": {
      "C": "Ban Chỉ huy Bảo vệ an ninh quốc gia."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 23
  },
  {
    "id": 326,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, trong phạm vi ngành, lĩnh vực được giao, trách nhiệm quản lý nhà nước về tình trạng khẩn cấp thuộc về ai?",
    "options": {
      "A": "Các bộ liên quan."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 24
  },
  {
    "id": 327,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, một trong những trách nhiệm của cơ quan, tổ chức trong tình trạng khẩn cấp là gì?",
    "options": {
      "B": "Chấp hành quyết định huy động của người có thẩm quyền."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 25
  },
  {
    "id": 328,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, cá nhân trong điều kiện có thể phải làm gì?",
    "options": {
      "A": "Tham gia hỗ trợ cộng đồng."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 26
  },
  {
    "id": 329,
    "q": "Một trong những nguyên nhân cần xây dựng Luật Tình trạng khẩn cấp là gì?",
    "options": {
      "A": "Tình hình thế giới, khu vực diễn biến phức tạp."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 27
  },
  {
    "id": 330,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, Việt Nam thuộc nhóm các quốc gia như thế nào?",
    "options": {
      "B": "05 quốc gia chịu ảnh hưởng nghiêm trọng nhất của biến đổi khí hậu."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 28
  },
  {
    "id": 331,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, một trong các loại tình trạng khẩn cấp là gì?",
    "options": {
      "D": "Tình trạng khẩn cấp về quốc phòng."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 29
  },
  {
    "id": 332,
    "q": "Khi áp dụng Luật Tình trạng khẩn cấp, yêu cầu bảo đảm tính tương thích với quy định nào?",
    "options": {
      "C": "Điều ước quốc tế mà Việt Nam là thành viên."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 30
  },
  {
    "id": 333,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, trong tình trạng khẩn cấp, quyết định gây thiệt hại nhưng vẫn được xem xét miễn trách nhiệm khi người ra quyết định như thế nào?",
    "options": {
      "D": "Quyết định đúng thẩm quyền, không vụ lợi."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 31
  },
  {
    "id": 334,
    "q": "Việc ban hành Luật Tình trạng khẩn cấp góp phần trực tiếp nhất vào yếu tố nào?",
    "options": {
      "A": "Hoàn thiện hành lang pháp lý và bảo đảm tính thống nhất của hệ thống pháp luật."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 32
  },
  {
    "id": 335,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, trong các nội dung dưới đây, nội dung nào phản ánh đúng trách nhiệm của cá nhân khi xảy ra tình trạng khẩn cấp?",
    "options": {
      "B": "Chủ động bảo đảm an toàn cho bản thân và gia đình."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 33
  },
  {
    "id": 336,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, việc thông báo ban bố hoặc bãi bỏ tình trạng khẩn cấp không chỉ thực hiện trong nước mà còn phải.",
    "options": {
      "C": "Thông báo cho các quốc gia thành viên Công ước quốc tế về các quyền dân sự và chính trị."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 34
  },
  {
    "id": 337,
    "q": "Một trong những nguyên nhân làm cho việc nâng Pháp lệnh Tình trạng khẩn cấp lên thành Luật trở nên cần thiết là gì?",
    "options": {
      "A": "Pháp lệnh có hiệu lực pháp lý thấp hơn nhiều luật chuyên ngành."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 35
  },
  {
    "id": 338,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, đâu không phải là nguyên tắc hoạt động trong tình trạng khẩn cấp?",
    "options": {
      "D": "Đặt dưới sự lãnh đạo và quản lý của Mặt trận tổ quốc Việt nam."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 36
  },
  {
    "id": 339,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, nội dung nào sau đây không bắt buộc phải có trong Lệnh công bố tình trạng khẩn cấp?",
    "options": {
      "C": "Danh sách tên các nạn nhân cụ thể."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 37
  },
  {
    "id": 340,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, trong khu vực thiết lập tình trạng khẩn cấp về an ninh quốc gia, chính quyền có thể áp dụng biện pháp nào sau đây?",
    "options": {
      "A": "Cấm tụ tập đông người."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 38
  },
  {
    "id": 341,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, có thể ban bố tình trạng khẩn cấp cục bộ tại một xã/tỉnh thay vì cả nước được không?",
    "options": {
      "B": "Có, tùy thuộc vào phạm vi ảnh hưởng của thảm họa, sự cố."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 39
  },
  {
    "id": 342,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, nội dung nào sau đây không nằm trong quy định về đào tạo, huấn luyện tình trạng khẩn cấp?",
    "options": {
      "D": "Ủy ban nhân dân cấp xã chỉ đạo công tác huấn luyện về tình trạng khẩn cấp cho lực lượng thuộc quyền."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 40
  },
  {
    "id": 343,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nhiệm vụ nào được xác định là nhiệm vụ chính trị đặc biệt?",
    "options": {
      "C": "Giữ gìn lâu dài, bảo vệ tuyệt đối an toàn thi hài Chủ tịch Hồ Chí Minh và quản lý, bảo vệ Khu Di tích Lăng."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 1
  },
  {
    "id": 344,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, công trình nào được xác định là trung tâm của Khu Di tích Lăng Chủ tịch Hồ Chí Minh?",
    "options": {
      "D": "Lăng Chủ tịch Hồ Chí Minh."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 2
  },
  {
    "id": 345,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, Khu Di tích Lăng Chủ tịch Hồ Chí Minh có ý nghĩa đặc biệt trên những lĩnh vực nào?",
    "options": {
      "B": "Chính trị - lịch sử - văn hóa."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 3
  },
  {
    "id": 346,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, quản lý, bảo vệ Khu Di tích Lăng phải gắn với nội dung nào?",
    "options": {
      "B": "Phát huy ý nghĩa chính trị, văn hóa của Khu Di tích Lăng."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 4
  },
  {
    "id": 347,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nội dung giữ gìn lâu dài, bảo vệ tuyệt đối an toàn thi hài Chủ tịch Hồ Chí Minh bao gồm?",
    "options": {
      "A": "Hoạt động y tế - kỹ thuật."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 5
  },
  {
    "id": 348,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, cơ quan nào quyết định thành lập Hội đồng khoa học cấp Nhà nước về bảo quản thi hài Chủ tịch Hồ Chí Minh?",
    "options": {
      "C": "Thủ tướng Chính phủ."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 6
  },
  {
    "id": 349,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, Ban Quản lý Lăng có thẩm quyền gì?",
    "options": {
      "B": "Ban hành các quy trình nội bộ về giữ gìn thi hài Chủ tịch Hồ Chí Minh."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 7
  },
  {
    "id": 350,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, mục tiêu bảo vệ trong Khu Di tích Lăng bao gồm?",
    "options": {
      "C": "Các công trình, khu vực và hoạt động chính trị, văn hóa."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 8
  },
  {
    "id": 351,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, lực lượng trực tiếp quản lý, bảo vệ Khu Di tích Lăng thuộc ai?",
    "options": {
      "A": "Bộ Tư lệnh Lăng Chủ tịch Hồ Chí Minh."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 9
  },
  {
    "id": 352,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, chức năng, nhiệm vụ của lực lượng quản lý, bảo vệ Khu Di tích Lăng do ai quy định?",
    "options": {
      "C": "Bộ trưởng Bộ Quốc phòng."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 10
  },
  {
    "id": 353,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, ngân sách nhà nước bảo đảm cho nhiệm vụ quản lý, bảo vệ Khu Di tích Lăng được bố trí như thế nào?",
    "options": {
      "A": "Theo pháp luật về ngân sách nhà nước."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 11
  },
  {
    "id": 354,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, quân nhân làm nhiệm vụ quản lý, bảo vệ Khu Di tích Lăng được hưởng gì?",
    "options": {
      "A": "Chế độ như quân nhân và các chế độ đặc thù phù hợp nhiệm vụ."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 12
  },
  {
    "id": 355,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, công chức, viên chức thuộc Ban Quản lý Lăng được hưởng gì?",
    "options": {
      "A": "Phụ cấp phục vụ quốc phòng, an ninh."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 13
  },
  {
    "id": 356,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một chính sách quan trọng đối với nguồn nhân lực là gì?",
    "options": {
      "B": "Ưu tiên thu hút người có tài năng và nhà khoa học chuyên môn sâu."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 14
  },
  {
    "id": 357,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những hoạt động chính trị tại Khu Di tích Lăng là gì?",
    "options": {
      "A": "Lễ viếng Chủ tịch Hồ Chí Minh."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 15
  },
  {
    "id": 358,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nhà nước ưu tiên đẩy mạnh nội dung nào trong quản lý, bảo vệ Khu Di tích Lăng?",
    "options": {
      "A": "Nghiên cứu, ứng dụng khoa học công nghệ hiện đại."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 16
  },
  {
    "id": 359,
    "q": "Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh quy định hợp tác quốc tế nhằm phục vụ gì?",
    "options": {
      "A": "Quản lý, bảo vệ Khu Di tích Lăng."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 17
  },
  {
    "id": 360,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, việc quản lý, bảo vệ Khu Di tích Lăng phải gắn với gì?",
    "options": {
      "A": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 18
  },
  {
    "id": 361,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những trách nhiệm của cấp ủy các cấp là gì?",
    "options": {
      "A": "Đưa nội dung Pháp lệnh vào nghị quyết lãnh đạo."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 19
  },
  {
    "id": 362,
    "q": "Cấp ủy các cấp phải tăng cường công tác nào đối với việc thực hiện Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh?",
    "options": {
      "A": "Kiểm tra, giám sát."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 20
  },
  {
    "id": 363,
    "q": "Ý nghĩa quan trọng của việc triển khai Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh là gì?",
    "options": {
      "B": "Bảo vệ tuyệt đối an toàn thi hài Chủ tịch Hồ Chí Minh và phát huy giá trị chính trị, lịch sử, văn hóa của Khu Di tích Lăng"
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 21
  },
  {
    "id": 364,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, công trình nào được xác định là trung tâm của Khu Di tích Lăng Chủ tịch Hồ Chí Minh?",
    "options": {
      "C": "Lăng Chủ tịch Hồ Chí Minh"
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 22
  },
  {
    "id": 365,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, Khu Di tích Lăng Chủ tịch Hồ Chí Minh có ý nghĩa nổi bật nào dưới đây?",
    "options": {
      "C": "Có giá trị đặc biệt về chính trị, lịch sử, văn hóa và quốc phòng - an ninh."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 23
  },
  {
    "id": 366,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những nội dung quản lý, bảo vệ Khu Di tích Lăng là gì?",
    "options": {
      "B": "Quản lý, tổ chức các hoạt động chính trị, văn hóa trong Khu Di tích Lăng."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 24
  },
  {
    "id": 367,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, đặc điểm nổi bật của công tác bảo vệ Khu Di tích Lăng so với nhiều công trình quốc phòng khác là gì?",
    "options": {
      "C": "Vừa bảo đảm an ninh tuyệt đối, vừa phục vụ đông đảo Nhân dân và khách quốc tế."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 25
  },
  {
    "id": 368,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, việc quản lý, bảo vệ Khu Di tích Lăng phải gắn với nội dung nào?",
    "options": {
      "B": "Phát huy giá trị chính trị, lịch sử, văn hóa của Khu Di tích Lăng."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 26
  },
  {
    "id": 369,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nghi lễ nào được xác định là hoạt động thường xuyên trong Khu Di tích Lăng?",
    "options": {
      "B": "Chào cờ, hạ cờ hằng ngày tại Quảng trường Ba Đình."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 27
  },
  {
    "id": 370,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, mục tiêu bảo vệ trong Khu Di tích Lăng bao gồm?",
    "options": {
      "C": "Các công trình, khu vực và các hoạt động chính trị, văn hóa trong Khu Di tích Lăng."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 28
  },
  {
    "id": 371,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những yêu cầu đối với việc quản lý các công trình thuộc Khu Di tích Lăng là gì?",
    "options": {
      "B": "Duy trì không gian, cảnh quan, kiến trúc và bảo vệ môi trường."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 29
  },
  {
    "id": 372,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, việc tổ chức các hoạt động tại Khu Di tích Lăng phải bảo đảm yêu cầu nào?",
    "options": {
      "B": "Kết hợp chặt chẽ giữa nhiệm vụ chính trị với bảo đảm an ninh, an toàn."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 30
  },
  {
    "id": 373,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, ý nghĩa quan trọng của Khu Di tích Lăng Chủ tịch Hồ Chí Minh đối với các thế hệ người Việt Nam là gì?",
    "options": {
      "B": "Biểu tượng của di sản tư tưởng, đạo đức, phong cách Hồ Chí Minh; giáo dục truyền thống cách mạng."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 31
  },
  {
    "id": 374,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, các công trình lưu giữ lâu dài thi hài Chủ tịch Hồ Chí Minh (trong đó có công trình Lăng) được xếp thuộc các công trình quốc phòng và khu quân sự Nhóm mấy?",
    "options": {
      "C": "Nhóm I."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 32
  },
  {
    "id": 375,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nội dung quản lý, bảo vệ Khu Di tích Lăng?",
    "options": {
      "D": "Tất cả đáp án đã nêu."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 33
  },
  {
    "id": 376,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những chính sách đặc biệt nhằm phát huy ý nghĩa chính trị, văn hóa của Khu Di tích Lăng?",
    "options": {
      "A": "Ưu tiên bảo đảm phát triển nguồn nhân lực, kinh phí, cơ sở hạ tầng, hệ thống trang thiết bị hiện đại."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 34
  },
  {
    "id": 377,
    "q": "Điều kiện bảo đảm cho việc thi hành Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh là gì?",
    "options": {
      "D": "Tất cả các đáp án đã nêu."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 35
  },
  {
    "id": 378,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nội dung nào sau đây không thuộc hoạt động giữ gìn lâu dài, bảo vệ tuyệt đối an toàn thi hài chủ tịch Hồ Chí Minh?",
    "options": {
      "D": "Tổ chức tham quan, hướng dẫn khách tại Lăng."
    },
    "correct": "D",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 36
  },
  {
    "id": 379,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, trong trường hợp pháp luật hiện hành đã có quy định cụ thể liên quan đến quản lý, bảo vệ Khu Di tích Lăng thì nguyên tắc áp dụng nào đúng?",
    "options": {
      "B": "Áp dụng pháp luật đó."
    },
    "correct": "B",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 37
  },
  {
    "id": 380,
    "q": "Phương án nào phản ánh đúng nhất về Khi Di tích Lăng theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh?",
    "options": {
      "C": "Gồm các công trình, khu vực có tính chất đặc biệt."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 38
  },
  {
    "id": 381,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, điểm nào sau đây không phải là một nội dung thuộc bảo vệ an ninh, an toàn Khu Di tích Lăng?",
    "options": {
      "C": "Xác định nguồn kinh phí."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 39
  },
  {
    "id": 382,
    "q": "Một nội dung quan trọng được Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh thể chế hóa nhưng trước đó chủ yếu được thực hiện trên cơ sở các văn bản hành chính là?",
    "options": {
      "C": "Một số nội dung nghi lễ."
    },
    "correct": "C",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 40
  },
  {
    "id": 383,
    "q": "Luật Thanh tra (sửa đổi) năm 2025 đã kết thúc hoạt động của những cơ quan thanh tra nào ở các Bộ, cơ quan thuộc Chính phủ và địa phương?",
    "options": {
      "A": "Kết thúc hoạt động của Thanh tra Bộ, Thanh tra Tổng cục, Cục thuộc Bộ, Thanh tra sở và Thanh tra huyện."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 1
  },
  {
    "id": 384,
    "q": "Sự thay đổi quan trọng nào về mặt khái niệm đã được thực hiện trong Luật Thanh tra năm 2025 (sửa đổi)?",
    "options": {
      "A": "Sửa đổi khái niệm “thanh tra”, không quy định riêng các khái niệm thanh tra hành chính, thanh tra chuyên ngành."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 2
  },
  {
    "id": 385,
    "q": "Theo khoản 1 Điều 2 Luật Thanh tra năm 2025 (sửa đổi), khái niệm “Thanh tra” được định nghĩa chuẩn xác như thế nào?",
    "options": {
      "A": "Là hoạt động xem xét, đánh giá, kết luận, kiến nghị xử lý đối với việc thực hiện chính sách, pháp luật, nhiệm vụ."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 3
  },
  {
    "id": 386,
    "q": "Theo Điều 7 Luật Thanh tra năm 2025 (sửa đổi), hệ thống các cơ quan thanh tra bao gồm những cơ quan nào?",
    "options": {
      "A": "Thanh tra Chính phủ; Thanh tra tỉnh; Thanh tra Quân đội, Công an, Ngân hàng Nhà nước, Cơ yếu; Điều ước quốc tế."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 4
  },
  {
    "id": 387,
    "q": "Khi thực hiện sắp xếp tinh gọn bộ máy, Thanh tra Chính phủ sẽ tiếp nhận thêm chức năng, nhiệm vụ của những cơ quan nào?",
    "options": {
      "A": "Tiếp nhận thêm chức năng, nhiệm vụ thanh tra của 12 Thanh tra Bộ không tiếp tục duy trì cơ quan thanh tra."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 5
  },
  {
    "id": 388,
    "q": "Khi thực hiện sắp xếp tinh gọn bộ máy, Thanh tra tỉnh sẽ tiếp nhận thêm chức năng, nhiệm vụ của những cơ quan nào?",
    "options": {
      "A": "Tiếp nhận thêm chức năng, nhiệm vụ thanh tra của Thanh tra cấp huyện và Thanh tra các sở trên địa bàn tỉnh."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 6
  },
  {
    "id": 389,
    "q": "Luật Thanh tra năm 2025 bổ sung nhiệm vụ, quyền hạn nào cho Tổng Thanh tra Chính phủ nhằm tăng cường mối quan hệ công tác khi tiến hành thanh tra?",
    "options": {
      "A": "Đề nghị Bộ trưởng, Thủ trưởng cơ quan ngang Bộ cử công chức có chuyên môn phù hợp tham gia Đoàn thanh tra."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 7
  },
  {
    "id": 390,
    "q": "Luật Thanh tra năm 2025 bổ sung nhiệm vụ, quyền hạn nào cho Chánh Thanh tra tỉnh nhằm bảo đảm năng lực cho Đoàn thanh tra?",
    "options": {
      "A": "Đề nghị Giám đốc Sở, Chủ tịch UBND cấp cơ sở cử công chức có chuyên môn phù hợp tham gia Đoàn thanh tra."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 8
  },
  {
    "id": 391,
    "q": "Quy định mới về chuyển thông tin cho cơ quan điều tra trong hoạt động thanh tra tại điểm d khoản 2 Điều 39 Luật Thanh tra 2025 được nêu như thế nào?",
    "options": {
      "A": "Trường hợp phát hiện có dấu hiệu tội phạm nhưng chưa xác định hậu quả thì kết luận rõ và chuyển thông tin."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 9
  },
  {
    "id": 392,
    "q": "Luật Thanh tra năm 2025 cắt giảm bao nhiêu phần trăm các thủ tục hành chính trong hoạt động thanh tra so với trước đây?",
    "options": {
      "A": "Cắt giảm trên 40% các thủ tục hành chính trong tổ chức và hoạt động thanh tra so với Luật Thanh tra 2022."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 10
  },
  {
    "id": 393,
    "q": "Luật Thanh tra 2025 quy định cơ chế phân cấp như thế nào đối với việc thanh tra quản lý, sử dụng vốn, tài sản nhà nước tại doanh nghiệp?",
    "options": {
      "A": "Thanh tra Chính phủ và Thanh tra tỉnh chủ động thanh tra sau khi báo cáo Thủ trưởng cơ quan quản lý cùng cấp."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 11
  },
  {
    "id": 394,
    "q": "Nội dung nào sau đây thuộc về thẩm quyền phân quyền cho Chính phủ quy định chi tiết theo Luật Thanh tra năm 2025?",
    "options": {
      "A": "Quy định quản lý, sử dụng kinh phí trích cho cơ quan thanh tra và chế độ, trang phục đối với Thanh tra viên."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 12
  },
  {
    "id": 395,
    "q": "Nghị định số 216/2025/NĐ-CP được Chính phủ ban hành ngày 05/8/2025 quy định về nội dung cơ bản nào?",
    "options": {
      "A": "Quy định chi tiết một số điều và hướng dẫn thi hành Luật Thanh tra nhằm triển khai đồng bộ Luật Thanh tra."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 13
  },
  {
    "id": 396,
    "q": "Nghị định số 217/2025/NĐ-CP được Chính phủ ban hành ngày 05/8/2025 quy định về vấn đề gì?",
    "options": {
      "A": "Quy định chi tiết về hoạt động kiểm tra chuyên ngành áp dụng thống nhất trong cơ quan hành chính nhà nước."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 14
  },
  {
    "id": 397,
    "q": "Nghị định số 284/2025/NĐ-CP do Chính phủ ban hành ngày 03/11/2025 quy định về tổ chức và hoạt động của cơ quan nào?",
    "options": {
      "A": "Quy định về tổ chức và hoạt động của Thanh tra quốc phòng, thay thế cho Nghị định số 33/2014/NĐ-CP trước đây."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 15
  },
  {
    "id": 398,
    "q": "Nghị định số 273/2025/NĐ-CP do Chính phủ ban hành ngày 16/10/2025 quy định về nội dung nào?",
    "options": {
      "A": "Quy định về tổ chức và hoạt động thanh tra Công an nhân dân triển khai thi hành Luật Thanh tra năm 2025."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 16
  },
  {
    "id": 399,
    "q": "Theo Nghị định số 284/2025/NĐ-CP, cơ quan Thanh tra quốc phòng bao gồm những cấp tổ chức nào?",
    "options": {
      "A": "Cơ quan Thanh tra Bộ Quốc phòng; Thanh tra quốc phòng Quân khu; Thanh tra Bộ Tư lệnh Thủ đô Hà Nội."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 17
  },
  {
    "id": 400,
    "q": "Theo Điều 3 Nghị định số 284/2025/NĐ-CP, Thanh tra quốc phòng có chức năng cơ bản nào sau đây?",
    "options": {
      "A": "Giúp Thủ trưởng cơ quan cùng cấp quản lý nhà nước về thanh tra, tiếp công dân, giải quyết KNTC, phòng chống TNC."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 18
  },
  {
    "id": 401,
    "q": "Thanh tra Bộ Quốc phòng là cơ quan có vị trí pháp lý như thế nào theo Nghị định số 284/2025/NĐ-CP?",
    "options": {
      "A": "Là cơ quan trực thuộc Bộ Quốc phòng, giúp Bộ trưởng Bộ Quốc phòng quản lý nhà nước về công tác thanh tra."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 19
  },
  {
    "id": 402,
    "q": "Trong hoạt động thanh tra, Thanh tra Bộ Quốc phòng có nhiệm vụ, quyền hạn nào đối với các doanh nghiệp trong Quân đội?",
    "options": {
      "A": "Thanh tra đối với các doanh nghiệp do Bộ trưởng quyết định thành lập hoặc được giao trực tiếp quản lý."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 20
  },
  {
    "id": 403,
    "q": "Thanh tra Bộ Quốc phòng có thẩm quyền gì đối với các kết luận thanh tra do Chánh Thanh tra Quân khu ban hành khi cần thiết?",
    "options": {
      "A": "Kiểm tra tính chính xác, hợp pháp của các kết luận thanh tra và quyết định xử lý sau thanh tra đó."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 21
  },
  {
    "id": 404,
    "q": "Chánh Thanh tra Bộ Quốc phòng có quyền hạn nào sau đây đối với các văn bản, quy định trái pháp luật phát hiện qua thanh tra?",
    "options": {
      "A": "Kiến nghị Bộ trưởng Bộ Quốc phòng đình chỉ thi hành quyết định trái pháp luật trong lĩnh vực quản lý."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 22
  },
  {
    "id": 405,
    "q": "Thanh tra Quân khu là cơ quan có vị trí và chức năng như thế nào theo Điều 9 Nghị định số 284/2025/NĐ-CP?",
    "options": {
      "A": "Là cơ quan trực thuộc Quân khu, giúp Tư lệnh Quân khu quản lý, chỉ đạo về công tác thanh tra, tiếp công dân."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 23
  },
  {
    "id": 406,
    "q": "Trước khi trình Tư lệnh Quân khu cho ý kiến về chủ trương kế hoạch thanh tra, Thanh tra Quân khu phải thực hiện bước nào?",
    "options": {
      "A": "Xây dựng dự thảo kế hoạch thanh tra, báo cáo Thanh tra Bộ Quốc phòng xem xét, cho ý kiến trước."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 24
  },
  {
    "id": 407,
    "q": "Chánh Thanh tra Quân khu có quyền hạn nào sau đây khi phát hiện việc thi hành kỷ luật gây trở ngại cho việc thanh tra?",
    "options": {
      "A": "Kiến nghị cấp có thẩm quyền quyết định đình chỉ thi hành kỷ luật, điều chuyển công tác người đang bị thanh tra."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 25
  },
  {
    "id": 408,
    "q": "Theo Điều 13 Nghị định số 284/2025/NĐ-CP, Thanh tra viên quốc phòng là ai?",
    "options": {
      "A": "Là sĩ quan Quân đội nhân dân Việt Nam được bổ nhiệm vào các ngạch Thanh tra để thực hiện nhiệm vụ thanh tra."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 26
  },
  {
    "id": 409,
    "q": "Hệ thống các ngạch Thanh tra viên quốc phòng bao gồm những ngạch nào?",
    "options": {
      "A": "Gồm các ngạch. Thanh tra viên; Thanh tra viên chính; Thanh tra viên cao cấp theo quy định pháp luật."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 27
  },
  {
    "id": 410,
    "q": "Ai có thẩm quyền bổ nhiệm, miễn nhiệm các ngạch Thanh tra viên quốc phòng?",
    "options": {
      "A": "Bộ trưởng Bộ Quốc phòng bổ nhiệm, miễn nhiệm theo đề nghị của Hội đồng xét duyệt chức danh sĩ quan cấp Bộ."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 28
  },
  {
    "id": 411,
    "q": "Một trong những tiêu chuẩn bắt buộc về trình độ đào tạo đối với ngạch Thanh tra viên quốc phòng là gì?",
    "options": {
      "A": "Là sĩ quan QĐND Việt Nam, tốt nghiệp trình độ đại học trở lên phù hợp với chuyên môn thuộc ngành, lĩnh vực."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 29
  },
  {
    "id": 412,
    "q": "Yêu cầu về thời gian công tác để được bổ nhiệm ngạch Thanh tra viên quốc phòng đối với sĩ quan chuyển từ cơ quan khác sang là bao nhiêu?",
    "options": {
      "A": "Có ít nhất 05 năm công tác trở lên đối với sĩ quan Quân đội công tác ở cơ quan, đơn vị khác chuyển sang."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 30
  },
  {
    "id": 413,
    "q": "Tiêu chuẩn về trình độ đào tạo quân sự đối với ngạch Thanh tra viên chính quốc phòng được quy định như thế nào?",
    "options": {
      "A": "Tốt nghiệp đào tạo cán bộ cấp trung, lữ đoàn tại các học viện chuyên ngành quân sự hoặc tốt nghiệp sau đại học."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 31
  },
  {
    "id": 414,
    "q": "Để được bổ nhiệm ngạch Thanh tra viên chính quốc phòng, sĩ quan đã giữ ngạch Thanh tra viên phải có thời hạn tối thiểu là bao nhiêu năm?",
    "options": {
      "A": "Đã được bổ nhiệm ngạch thanh tra viên ít nhất 04 năm hoặc đã qua chỉ huy cấp trung đoàn (hoặc tương đương)."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 32
  },
  {
    "id": 415,
    "q": "Tiêu chuẩn về trình độ đào tạo quân sự đặc thù dành riêng cho ngạch Thanh tra viên cao cấp quốc phòng là gì?",
    "options": {
      "A": "Tốt nghiệp đào tạo tham mưu tác chiến chiến dịch - chiến lược tại Học viện Quốc phòng."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 33
  },
  {
    "id": 416,
    "q": "Yêu cầu về lý luận chính trị đối với sĩ quan để xem xét bổ nhiệm ngạch Thanh tra viên cao cấp quốc phòng là gì?",
    "options": {
      "A": "Phải có trình độ cao cấp lý luận chính trị theo quy định của Đảng và Pháp luật nhà nước."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 34
  },
  {
    "id": 417,
    "q": "Cấp ủy, chỉ huy cơ quan, đơn vị có trách nhiệm gì trong việc lãnh đạo, chỉ đạo triển khai Luật Thanh tra năm 2025?",
    "options": {
      "A": "Đưa nội dung chấp hành Luật Thanh tra vào kế hoạch công tác hằng năm, gắn với xây dựng Đảng, đơn vị VMTD."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 35
  },
  {
    "id": 418,
    "q": "Trong công tác phối hợp thanh tra, trách nhiệm của cấp ủy, chỉ huy cơ quan, đơn vị được quy định như thế nào?",
    "options": {
      "A": "Phối hợp, cung cấp đầy đủ, kịp thời, trung thực thông tin, tài liệu và chịu trách nhiệm về tính chính xác."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 36
  },
  {
    "id": 419,
    "q": "Trách nhiệm của cán bộ, chiến sĩ khi tham gia hoạt động thanh tra với tư cách là đối tượng thanh tra hoặc liên quan là gì?",
    "options": {
      "A": "Trung thực trong việc cung cấp thông tin, tài liệu; chịu trách nhiệm trước pháp luật về nội dung cung cấp."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 37
  },
  {
    "id": 420,
    "q": "Một trong những trách nhiệm quan trọng của cán bộ, chiến sĩ nhằm nâng cao hiệu quả quản lý, phòng ngừa vi phạm là gì?",
    "options": {
      "A": "Chủ động tự kiểm tra, tự chấn chỉnh việc thực hiện nhiệm vụ; kịp thời báo cáo khi phát hiện vi phạm."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 38
  },
  {
    "id": 421,
    "q": "Ý nghĩa đặc biệt quan trọng của việc ban hành và triển khai Luật Thanh tra năm 2025 (sửa đổi) là gì?",
    "options": {
      "A": "Hoàn thiện thể chế, nâng cao hiệu lực công tác thanh tra; phòng ngừa, phát hiện, xử lý kịp thời vi phạm."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 39
  },
  {
    "id": 422,
    "q": "Việc chấp hành nghiêm các quy định của Luật Thanh tra năm 2025 được xác định là tiêu chí như thế nào trong cơ quan, đơn vị?",
    "options": {
      "A": "Là tiêu chí quan trọng trong đánh giá hoàn thành nhiệm vụ, bình xét thi đua, khen thưởng và xem xét trách nhiệm."
    },
    "correct": "A",
    "source": "Cau_hoi_va_dap_an_dung_GDPL_2026.docx",
    "source_id": 40
  },
  {
    "id": 423,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, Quy định áp dụng đối với đối tượng nào?",
    "options": {
      "B": "Các tổ chức đảng và cán bộ, đảng viên trong Đảng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 1
  },
  {
    "id": 424,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, mục đích quan trọng của công tác chính trị, tư tưởng là gì?",
    "options": {
      "B": "Giữ vững định hướng chính trị, tư tưởng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 2
  },
  {
    "id": 425,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, công tác chính trị, tư tưởng được xác định là gì?",
    "options": {
      "B": "Nhiệm vụ quan trọng hàng đầu trong công tác xây dựng Đảng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 3
  },
  {
    "id": 426,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, trong mối quan hệ giữa “xây” và “chống”, nội dung nào được xác định là nhiệm vụ cơ bản, chiến lược, lâu dài?",
    "options": {
      "A": "“Xây”"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 4
  },
  {
    "id": 427,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, công tác chính trị, tư tưởng phải lấy nội dung nào làm định hướng hành động?",
    "options": {
      "B": "“4 kiên định”"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 5
  },
  {
    "id": 428,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, nội dung nào sau đây thuộc “4 kiên định”?",
    "options": {
      "B": "Kiên định đường lối đổi mới của Đảng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 6
  },
  {
    "id": 429,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, “chính trị, tư tưởng trong Đảng” được hiểu là trạng thái thống nhất về:",
    "options": {
      "B": "Nhận thức, niềm tin, ý chí và hành động"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 7
  },
  {
    "id": 430,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, “công tác chính trị, tư tưởng” là tổng thể hoạt động của:",
    "options": {
      "B": "Cấp ủy, tổ chức đảng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 8
  },
  {
    "id": 431,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, bảo vệ nền tảng tư tưởng của Đảng bao gồm nội dung nào?",
    "options": {
      "B": "Giữ vững, phát triển giá trị khoa học, cách mạng của Chủ nghĩa Mác Lê Nin, tư tưởng Hồ Chí Minh, đường lối của Đảng và đấu tranh phản bác quan điểm sai trái, thù địch"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 9
  },
  {
    "id": 432,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, “dư luận xã hội” được hiểu là gi?",
    "options": {
      "B": "Ý kiến, thái độ và tâm trạng của các nhóm xã hội trước những vấn đề liên quan"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 10
  },
  {
    "id": 433,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, một yêu cầu quan trọng trong công tác chính trị là:",
    "options": {
      "A": "Đi trước, mở đường, dẫn dắt, chỉ đạo thực tiễn"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 11
  },
  {
    "id": 434,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, công tác chính trị, tư tưởng phải gắn chặt với những công tác nào?",
    "options": {
      "A": "Tổ chức, cán bộ, kiểm tra, giám sát và dân vận"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 12
  },
  {
    "id": 435,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, ai chịu trách nhiệm cao nhất trong đánh giá về chính trị, tư tưởng của tổ chức đảng và cán bộ, đảng viên thuộc quyền quản lý?",
    "options": {
      "B": "Cấp ủy, tập thể lãnh đạo, người đứng đầu"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 13
  },
  {
    "id": 436,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, cấp ủy các cấp phải tổ chức nghiên cứu, học tập, quán triệt nghị quyết nhằm bảo đảm:",
    "options": {
      "A": "100% cán bộ, đảng viên thuộc phạm vi quản lý được học tập, quán triệt"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 14
  },
  {
    "id": 437,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, phương châm nghiên cứu, học tập nghị quyết là:",
    "options": {
      "B": "Hiểu sâu, hành động đúng, làm đến cùng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 15
  },
  {
    "id": 438,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, việc bảo vệ nền tảng tư tưởng của Đảng và đấu tranh phản bác quan điểm sai trái, thù địch được xác định là:",
    "options": {
      "B": "Nhiệm vụ trọng yếu, thường xuyên"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 16
  },
  {
    "id": 439,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, khi tham gia mạng xã hội, cán bộ, đảng viên phải:",
    "options": {
      "B": "Tuân thủ kỷ luật phát ngôn và quy định về thông tin"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 17
  },
  {
    "id": 440,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, cán bộ, đảng viên không được:",
    "options": {
      "B": "Chia sẻ, bình luận thông tin chưa kiểm chứng, sai sự thật"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 18
  },
  {
    "id": 441,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, kết quả thực hiện công tác chính trị, tư tưởng được xác định là:",
    "options": {
      "A": "Một tiêu chí quan trọng trong đánh giá, xếp loại tổ chức đảng và cán bộ, đảng viên hằng năm"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 19
  },
  {
    "id": 442,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, cơ quan chủ trì hướng dẫn thực hiện Quy định, xây dựng bộ tiêu chí và quy trình đánh giá là:",
    "options": {
      "C": "Ban Tuyên giáo và Dân vận Trung ương"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 20
  },
  {
    "id": 443,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát được xác định là:",
    "options": {
      "A": "Một phương thức lãnh đạo quan trọng của Đảng"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 1
  },
  {
    "id": 444,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát là cơ chế để:",
    "options": {
      "B": "Kiểm soát quyền lực"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 2
  },
  {
    "id": 445,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát là nhiệm vụ:",
    "options": {
      "C": "Thường xuyên, liên tục"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 3
  },
  {
    "id": 446,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, đổi mới công tác kiểm tra, giám sát phải gắn chặt với:",
    "options": {
      "A": "Công tác chính trị, tư tưởng, tổ chức, cán bộ"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 4
  },
  {
    "id": 447,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát phải được tiến hành theo yêu cầu nào?",
    "options": {
      "A": "Chủ động, kịp thời, toàn diện"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 5
  },
  {
    "id": 448,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, tổ chức đảng và đảng viên phải thường xuyên:",
    "options": {
      "A": "Tự soi, tự sửa"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 6
  },
  {
    "id": 449,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, phương châm trong kiểm tra, giám sát và kỷ luật đảng là:",
    "options": {
      "B": "Không có vùng cấm, không có ngoại lệ"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 7
  },
  {
    "id": 450,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, việc xử lý vi phạm phải bảo đảm:",
    "options": {
      "B": "Nghiêm minh, kịp thời"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 8
  },
  {
    "id": 451,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, mục tiêu của công tác kiểm tra, giám sát là góp phần:",
    "options": {
      "C": "Xây dựng Đảng trong sạch, vững mạnh"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 9
  },
  {
    "id": 452,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, để tạo chuyển biến về nhận thức, cần chú trọng công tác kiểm tra, giám sát ngay từ:",
    "options": {
      "C": "Cấp cơ sở"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 10
  },
  {
    "id": 453,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, việc công khai kết quả kiểm tra, giám sát và thi hành kỷ luật nhằm:",
    "options": {
      "A": "Tăng tính minh bạch"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 11
  },
  {
    "id": 454,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, việc hoàn thiện hệ thống quy định về kiểm tra, giám sát phải bảo đảm:",
    "options": {
      "A": "Đồng bộ, thống nhất, liên thông"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 12
  },
  {
    "id": 455,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, cấp ủy, tổ chức đảng và Ủy ban Kiểm tra các cấp phải chủ động xây dựng:",
    "options": {
      "B": "Chương trình kiểm tra, giám sát"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 13
  },
  {
    "id": 456,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, nhiệm vụ trọng tâm của Ủy ban Kiểm tra các cấp là:",
    "options": {
      "A": "Kiểm tra khi có dấu hiệu vi phạm"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 14
  },
  {
    "id": 457,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, một điểm đổi mới quan trọng trong phương pháp kiểm tra, giám sát là chuyển trọng tâm:",
    "options": {
      "C": "Sang phòng ngừa, cảnh báo vi phạm"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 15
  },
  {
    "id": 458,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, giám sát thường xuyên cần được tăng cường thông qua:",
    "options": {
      "C": "Dữ liệu và thông tin"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 16
  },
  {
    "id": 459,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, chuyển đổi số trong ngành Kiểm tra Đảng nhằm:",
    "options": {
      "A": "Rút ngắn thời gian, nâng cao chất lượng kiểm tra"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 17
  },
  {
    "id": 460,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, mô hình tổ chức cơ quan Ủy ban Kiểm tra được định hướng từ:",
    "options": {
      "C": "Trung ương đến xã, phường, đặc khu và tương đương"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 18
  },
  {
    "id": 461,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, cần tăng cường phối hợp giữa cơ quan kiểm tra của Đảng với:",
    "options": {
      "A": "Cơ quan tham mưu, giúp việc cấp ủy và cơ quan liên quan"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 19
  },
  {
    "id": 462,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, cơ quan chủ trì hướng dẫn, theo dõi, đôn đốc, kiểm tra việc thực hiện Nghị quyết là:",
    "options": {
      "C": "Ủy ban Kiểm tra Trung ương"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 20
  },
  {
    "id": 463,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, mục tiêu tổng quát của công tác phòng, chống tham nhũng, lãng phí, tiêu cực là:",
    "options": {
      "B": "Kiên quyết, kiên trì phòng ngừa, kiểm soát, ngăn chặn, đẩy lùi"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 1
  },
  {
    "id": 464,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, công tác phòng, chống tham nhũng, lãng phí, tiêu cực phải đặt dưới:",
    "options": {
      "B": "Sự lãnh đạo trực tiếp, toàn diện của Đảng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 2
  },
  {
    "id": 465,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, cùng với sự lãnh đạo của Đảng, yếu tố nào được nhấn mạnh trong phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": {
      "A": "Giám sát của Nhân dân"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 3
  },
  {
    "id": 466,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, công tác phòng, chống tham nhũng, lãng phí, tiêu cực phải được tiến hành:",
    "options": {
      "C": "Thường xuyên, liên tục, từ cơ sở"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 4
  },
  {
    "id": 467,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, các biện pháp phòng, chống tham nhũng, lãng phí, tiêu cực phải hướng tới:",
    "options": {
      "A": "“Không thể, không dám, không muốn, không cần”"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 5
  },
  {
    "id": 468,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, lợi ích nào phải được đặt lên trên hết trong phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": {
      "C": "Lợi ích quốc gia - dân tộc và Nhân dân"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 6
  },
  {
    "id": 469,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, quan điểm xử lý mối quan hệ giữa đấu tranh phòng, chống tham nhũng và phát triển là:",
    "options": {
      "B": "Vừa đấu tranh, vừa kiến tạo phát triển"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 7
  },
  {
    "id": 470,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, nội dung nào được xác định là cốt lõi trong phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": {
      "C": "Kiểm soát quyền lực"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 8
  },
  {
    "id": 471,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, nội dung nào được xác định là trọng tâm để nâng cao hiệu quả phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": {
      "B": "Khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 9
  },
  {
    "id": 472,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, phương châm xử lý vi phạm là gì?",
    "options": {
      "B": "Nghiêm minh, kịp thời, nhân văn, thuyết phục"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 10
  },
  {
    "id": 473,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, khi xử lý tham nhũng, lãng phí, tiêu cực, cần ưu tiên:",
    "options": {
      "B": "Thu hồi tối đa tài sản"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 11
  },
  {
    "id": 474,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, một trong những yêu cầu đối với người đứng đầu là:",
    "options": {
      "A": "Trực tiếp lãnh đạo, chỉ đạo công tác phòng, chống tham nhũng, lãng phí, tiêu cực"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 12
  },
  {
    "id": 475,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, văn hóa liêm chính được xác định là:",
    "options": {
      "B": "Giá trị cốt lõi, chuẩn mực ứng xử và đạo đức"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 13
  },
  {
    "id": 476,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, quốc gia và xã hội liêm chính được xây dựng trên 3 trụ cột là:",
    "options": {
      "A": "Thể chế liêm chính - nền công vụ liêm chính - đội ngũ cán bộ, đảng viên, công chức, viên chức liêm chính"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 14
  },
  {
    "id": 477,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, một yêu cầu quan trọng trong hoàn thiện thể chế là:",
    "options": {
      "B": "Xóa bỏ cơ chế xin - cho"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 15
  },
  {
    "id": 478,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, việc xử lý cán bộ yếu kém, thiếu trách nhiệm, uy tín thấp cần:",
    "options": {
      "B": "Kịp thời thay thế, cho từ chức"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 16
  },
  {
    "id": 479,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, thực hành tiết kiệm, chống lãng phí cần chú trọng các loại lãng phí nào?",
    "options": {
      "B": "Nguồn lực, thời gian và cơ hội phát triển"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 17
  },
  {
    "id": 480,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, trong phòng, chống tham nhũng, lãng phí, tiêu cực, cần chủ động:",
    "options": {
      "A": "Nhận diện, dự báo, cảnh báo từ sớm, từ xa"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 18
  },
  {
    "id": 481,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, cơ quan nào chủ trì theo dõi, đôn đốc, hướng dẫn, kiểm tra, giám sát việc thực hiện Nghị quyết?",
    "options": {
      "B": "Ban Nội chính Trung ương"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 19
  },
  {
    "id": 482,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, văn bản này thay thế những văn bản nào?",
    "options": {
      "B": "Nghị quyết 04-NQ/TW năm 2006 và các kết luận liên quan"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 20
  },
  {
    "id": 483,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 của Ban Chấp hành Trung ương về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, mục tiêu tăng trưởng GDP bình quân giai đoạn 2026–2030 là:",
    "options": {
      "C": "Từ 10%/năm trở lên"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 1
  },
  {
    "id": 484,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, mục tiêu tăng trưởng “2 con số” phải gắn với yêu cầu nào?",
    "options": {
      "B": "Ổn định kinh tế vĩ mô"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 2
  },
  {
    "id": 485,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, mục tiêu đến năm 2030 của Việt Nam là:",
    "options": {
      "B": "Trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 3
  },
  {
    "id": 486,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, một trong những yêu cầu xuyên suốt là:",
    "options": {
      "A": "Đổi mới quản trị thể chế"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 4
  },
  {
    "id": 487,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phương thức quản lý nhà nước cần chuyển mạnh từ:",
    "options": {
      "A": "Tiền kiểm sang hậu kiểm"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 5
  },
  {
    "id": 488,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, trong phát triển kinh tế - xã hội cần:",
    "options": {
      "A": "Đẩy mạnh phân cấp, phân quyền"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 6
  },
  {
    "id": 489,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, một nhiệm vụ trọng tâm là chuyển sang mô hình tăng trưởng dựa chủ yếu vào:",
    "options": {
      "B": "Khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 7
  },
  {
    "id": 490,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, công nghiệp quốc gia cần được xây dựng theo hướng:",
    "options": {
      "B": "Hiện đại, tự chủ"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 8
  },
  {
    "id": 491,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, đối với kinh tế nhà nước, trọng tâm đổi mới là:",
    "options": {
      "B": "Quản trị doanh nghiệp theo chuẩn mực quốc tế"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 9
  },
  {
    "id": 492,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phát triển kinh tế tư nhân phải bảo đảm:",
    "options": {
      "B": "Bình đẳng trong tiếp cận nguồn lực"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 10
  },
  {
    "id": 493,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, chính sách thu hút FDI cần chuyển từ:",
    "options": {
      "B": "Ưu đãi thuế sang ưu đãi theo kết quả"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 11
  },
  {
    "id": 494,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, một yêu cầu quan trọng đối với khu vực FDI là:",
    "options": {
      "B": "Thúc đẩy chuyển giao công nghệ"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 12
  },
  {
    "id": 495,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phát triển thị trường trong nước được xác định là:",
    "options": {
      "A": "Điểm tựa quan trọng cho tăng trưởng"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 13
  },
  {
    "id": 496,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phát triển thị trường vốn trong nước nhằm:",
    "options": {
      "B": "Làm kênh huy động vốn dài hạn"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 14
  },
  {
    "id": 497,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, quản lý tài chính quốc gia phải bảo đảm:",
    "options": {
      "B": "Cân đối bền vững, an toàn tài chính quốc gia"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 15
  },
  {
    "id": 498,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, đối với vay và trả nợ công, yêu cầu được nhấn mạnh là:",
    "options": {
      "B": "Quản lý rủi ro và bảo đảm an toàn nợ công"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 16
  },
  {
    "id": 499,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, vốn đầu tư công trung hạn 2026–2030 cần:",
    "options": {
      "B": "Tập trung, tránh dàn trải"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 17
  },
  {
    "id": 500,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, số lượng dự án đầu tư công giai đoạn 2026–2030 so với giai đoạn 2021–2025 như thế nào?",
    "options": {
      "C": "Giảm tối thiểu 30%"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 18
  },
  {
    "id": 501,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, đến năm 2030 phấn đấu đưa vào sử dụng trên:",
    "options": {
      "C": "5.000 km đường bộ cao tốc"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 19
  },
  {
    "id": 502,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, cơ quan chủ trì theo dõi, đôn đốc, đánh giá kết quả thực hiện và định kỳ báo cáo Bộ Chính trị, Ban Bí thư là:",
    "options": {
      "C": "Đảng ủy Chính phủ"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/1. Cau hoi TW2 (80).docx",
    "source_id": 20
  },
  {
    "id": 503,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến chủ trương, quy định của Đảng và pháp luật Nhà nước?",
    "options": {
      "C": "Nói, viết, làm trái hoặc không thực hiện"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 1
  },
  {
    "id": 504,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến nguyên tắc tổ chức và hoạt động của Đảng?",
    "options": {
      "A": "Không chấp hành hoặc chấp hành không đúng, không đầy đủ"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 2
  },
  {
    "id": 505,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh?",
    "options": {
      "D": "Phản bác, phủ định, xuyên tạc"
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 3
  },
  {
    "id": 506,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến thông tin, tài liệu bí mật của Đảng và Nhà nước?",
    "options": {
      "C": "Cung cấp, làm lộ, làm mất hoặc viết bài, đăng thông tin"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 4
  },
  {
    "id": 507,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, điểm mới nào sau đây được bổ sung liên quan đến việc phát tán thông tin sai sự thật?",
    "options": {
      "A": "Sử dụng hạ tầng Internet, mạng xã hội, nền tảng số, trí tuệ nhân tạo"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 5
  },
  {
    "id": 508,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến đơn tố cáo?",
    "options": {
      "B": "Tố cáo có nội dung mang tính bịa đặt; viết đơn tố cáo giấu tên, mạo tên"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 6
  },
  {
    "id": 509,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến hoạt động bè phái?",
    "options": {
      "B": "Tổ chức, xúi giục, tham gia các hoạt động bè phái, cục bộ gây mất đoàn kết nội bộ"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 7
  },
  {
    "id": 510,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến các tổ chức trái quy định?",
    "options": {
      "B": "Tổ chức, tham gia, tài trợ, giúp tổ chức, hội trái quy định của Đảng, pháp luật Nhà nước"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 8
  },
  {
    "id": 511,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến báo cáo, kê khai?",
    "options": {
      "C": "Báo cáo, lập hồ sơ, kê khai lý lịch, kê khai tài sản, thu nhập không trung thực"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 9
  },
  {
    "id": 512,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, điểm mới nào sau đây được bổ sung về việc sử dụng văn bằng, chứng chỉ?",
    "options": {
      "A": "Sử dụng văn bằng, chứng chỉ, chứng nhận không hợp pháp"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 10
  },
  {
    "id": 513,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến đạo đức công vụ?",
    "options": {
      "B": "Vi phạm đạo đức công vụ, đạo đức nghề nghiệp; vi phạm quy tắc ứng xử của người có chức vụ, quyền hạn"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 11
  },
  {
    "id": 514,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến chạy chức, chạy quyền?",
    "options": {
      "B": "Có hành vi chạy chức, chạy quyền, bao che, tiếp tay, can thiệp, tác động để bản thân hoặc người khác được tiếp nhận, tuyển dụng, bổ nhiệm"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 12
  },
  {
    "id": 515,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến tham ô, hối lộ?",
    "options": {
      "B": "Tham ô, đưa, nhận, môi giới hối lộ hoặc lợi dụng vị trí công tác để môi giới, hối lộ dưới mọi hình thức"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 13
  },
  {
    "id": 516,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến việc tặng, nhận quà?",
    "options": {
      "C": "Tặng, nhận quà dưới mọi hình thức để tác động đến tổ chức, người có trách nhiệm dẫn đến việc quyết định sai, có lợi ích riêng"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 14
  },
  {
    "id": 517,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến thực hành tiết kiệm?",
    "options": {
      "B": "Không thực hành tiết kiệm; để xảy ra thất thoát, lãng phí trong việc quản lý, khai thác, sử dụng các nguồn lực"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 15
  },
  {
    "id": 518,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến việc đi du lịch, học tập, chữa bệnh?",
    "options": {
      "B": "Can thiệp, tác động để bản thân, người thân thích, người khác đi du lịch, học tập, chữa bệnh bằng nguồn tài trợ của các tổ chức, cá nhân có liên quan đến ngành, lĩnh vực, địa phương được giao theo dõi, quản lý"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 16
  },
  {
    "id": 519,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến hoạt động kiểm tra, giám sát, thanh tra?",
    "options": {
      "B": "Cản trở, can thiệp, tác động, áp đặt vào hoạt động kiểm tra, giám sát, thanh tra, kiểm toán, điều tra, truy tố, xét xử, thi hành án nhằm làm sai lệch, bao che, tiếp tay cho các hành vi vi phạm"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 17
  },
  {
    "id": 520,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến đánh bạc, sử dụng chất ma túy?",
    "options": {
      "B": "Tổ chức, tham gia đánh bạc dưới mọi hình thức; sử dụng các chất ma túy; sử dụng rượu, bia không đúng quy định"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 18
  },
  {
    "id": 521,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến mê tín, tôn giáo?",
    "options": {
      "B": "Mê tín, hoạt động mê tín; ủng hộ hoặc tham gia các tôn giáo bất hợp pháp hoặc lợi dụng các hoạt động tôn giáo, tín ngưỡng để trục lợi"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 19
  },
  {
    "id": 522,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, Quy định này thay thế Quy định nào sau đây?",
    "options": {
      "A": "Quy định số 37-QĐ/TW ngày 25/10/2021"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 20
  },
  {
    "id": 523,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, hệ thống tổ chức của Đảng hiện nay được thống nhất theo mô hình mấy cấp?",
    "options": {
      "C": "3 cấp"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 1
  },
  {
    "id": 524,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, điểm mới trong thí điểm tổ chức cơ sở đảng được xác định là gì?",
    "options": {
      "B": "Gồm đảng bộ trực thuộc cơ sở và chi bộ"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 2
  },
  {
    "id": 525,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, tên gọi chung được thống nhất sử dụng cho các loại hình chi bộ (không còn phân biệt chi bộ cơ sở hay chi bộ trực thuộc) là gì?",
    "options": {
      "A": "Chi bộ"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 3
  },
  {
    "id": 526,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, thẩm quyền quyết định thành lập tổ chức đảng ở xã, phường, đặc khu là đảng bộ cơ sở trực thuộc cấp ủy cấp nào?",
    "options": {
      "B": "Cấp tỉnh"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 4
  },
  {
    "id": 527,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, nội dung nào sau đây là điểm mới được thí điểm thành lập ở cấp tỉnh, thành phố?",
    "options": {
      "B": "Đảng bộ hội đồng nhân dân, Mặt trận Tổ quốc và các đoàn thể"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 5
  },
  {
    "id": 528,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, việc thành lập các cơ quan tham mưu, giúp việc chuyên trách (hoặc kiêm nhiệm) của đảng ủy cơ sở và đảng ủy trực thuộc cơ sở do cấp nào xem xét, quyết định?",
    "options": {
      "B": "Cấp ủy cấp tỉnh"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 6
  },
  {
    "id": 529,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, độ tuổi quy định của người vào Đảng tại thời điểm chi bộ xét kết nạp là bao nhiêu?",
    "options": {
      "A": "Từ đủ 18 tuổi đến đủ 60 tuổi"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 7
  },
  {
    "id": 530,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, trình độ học vấn tối thiểu của người vào Đảng theo quy định chung là gì?",
    "options": {
      "B": "Hoàn thành chương trình giáo dục bậc trung học cơ sở trở lên"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 8
  },
  {
    "id": 531,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, trong thời hạn bao lâu kể từ ngày cấp ủy có thẩm quyền ban hành quyết định kết nạp, chi bộ phải tổ chức lễ kết nạp cho đảng viên?",
    "options": {
      "B": "30 ngày làm việc"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 9
  },
  {
    "id": 532,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, nếu chi bộ họp chậm và cấp ủy chuẩn y chậm, đảng viên dự bị đủ điều kiện vẫn được công nhận chính thức đúng vào thời điểm nào?",
    "options": {
      "B": "Ngày hết 12 tháng dự bị"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 10
  },
  {
    "id": 533,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, thẩm quyền quyết định kết nạp đảng viên đối với đảng ủy cơ sở thuộc về ai?",
    "options": {
      "B": "Ban thường vụ đảng ủy cơ sở"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 11
  },
  {
    "id": 534,
    "q": "Theo Quy định số 208-QĐ/TW về thi hành Điều lệ Đảng, tuổi Đảng của đảng viên được tính từ thời điểm nào?",
    "options": {
      "B": "Ngày cấp có thẩm quyền ban hành quyết định kết nạp"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 12
  },
  {
    "id": 535,
    "q": "Theo Quy định số 208-QĐ/TW về thi hành Điều lệ Đảng, thời hạn hoàn thành thủ tục chuyển sinh hoạt đảng chính thức khi đảng viên thay đổi nơi công tác hoặc cư trú là bao lâu?",
    "options": {
      "C": "60 ngày làm việc"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 13
  },
  {
    "id": 536,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, thời gian tối thiểu kể từ khi ra khỏi Đảng để được xem xét kết nạp lại là bao lâu?",
    "options": {
      "C": "Ít nhất 36 tháng"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 14
  },
  {
    "id": 537,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, nghị quyết của các cơ quan lãnh đạo của Đảng chỉ có giá trị thi hành khi có bao nhiêu số thành viên trong cơ quan đó tán thành?",
    "options": {
      "B": "Hơn một nửa"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 15
  },
  {
    "id": 538,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, số lượng ủy viên ban thường vụ cấp ủy mỗi cấp theo quy định chung không được vượt quá tỷ lệ nào?",
    "options": {
      "A": "Một phần ba tổng số cấp ủy viên"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 16
  },
  {
    "id": 539,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, đảng viên được miễn công tác và sinh hoạt đảng vẫn được hưởng quyền lợi nào sau đây?",
    "options": {
      "B": "Được xét tặng Huy hiệu Đảng khi đủ tiêu chuẩn"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 17
  },
  {
    "id": 540,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, đảng viên bỏ sinh hoạt đảng hoặc không đóng đảng phí trong thời gian bao lâu trong năm mà không có lý do chính đáng thì bị xem xét xóa tên?",
    "options": {
      "B": "Ba tháng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 18
  },
  {
    "id": 541,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, khi tổ chức đảng bị kỷ luật giải tán, cấp ủy cấp trên trực tiếp phải làm thủ tục chuyển sinh hoạt đảng cho đảng viên trong thời hạn bao lâu?",
    "options": {
      "B": "30 ngày làm việc"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 19
  },
  {
    "id": 542,
    "q": "Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng được ban hành để thay thế cho quy định nào trước đây?",
    "options": {
      "C": "Quy định số 20-QĐ/TW"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 20
  },
  {
    "id": 543,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, tư duy quản trị xã hội cần chuyển dịch mạnh mẽ theo hướng nào?",
    "options": {
      "A": "Từ \"quản lý xã hội\" sang \"quản trị và kiến tạo xã hội\"."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 1
  },
  {
    "id": 544,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, yếu tố nào được xác định là mục tiêu, yêu cầu xuyên suốt của quá trình phát triển, thể hiện bản chất tốt đẹp của chế độ xã hội chủ nghĩa?",
    "options": {
      "B": "An ninh con người."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 2
  },
  {
    "id": 545,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, mục tiêu cụ thể đến năm 2030 về phòng, chống tội phạm và tệ nạn xã hội là gì?",
    "options": {
      "B": "Phấn đấu hằng năm giảm 10% số vụ phạm tội về trật tự xã hội; đến năm 2030 đạt ít nhất 50% số địa bàn cấp xã và 20% địa bàn cấp tỉnh không có ma túy."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 3
  },
  {
    "id": 546,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, Việt Nam phấn đấu thuộc nhóm bao nhiêu nước dẫn đầu thế giới về Chỉ số an ninh mạng toàn cầu (GCI) vào năm 2030?",
    "options": {
      "B": "Tốp 15 nước."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 4
  },
  {
    "id": 547,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, chỉ số hài lòng của người dân đối với sự phục vụ của cơ quan hành chính nhà nước (SIPAS) phấn đấu đạt giá trị trung bình cả nước là bao nhiêu vào năm 2030?",
    "options": {
      "C": "Trên 88%."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 5
  },
  {
    "id": 548,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, tầm nhìn đến năm 2045, điều gì sẽ được hình thành vững chắc trong xã hội?",
    "options": {
      "A": "\"Trật tự tự thân\" của xã hội."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 6
  },
  {
    "id": 549,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, trong nền quản trị xã hội hiện đại, yếu tố nào được xác định là nguồn tài nguyên chiến lược, tư liệu sản xuất mới?",
    "options": {
      "C": "Dữ liệu."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 7
  },
  {
    "id": 550,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, hệ thống y tế cần chuyển dịch căn bản theo hướng nào?",
    "options": {
      "B": "Từ \"chữa bệnh\" sang chủ động phòng bệnh, chăm sóc sức khỏe toàn diện và quản lý sức khỏe."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 8
  },
  {
    "id": 551,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, tư duy về dân số cần chuyển căn bản từ quản lý quy mô, cơ cấu sang phát triển gì?",
    "options": {
      "B": "Vốn dân số quốc gia."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 9
  },
  {
    "id": 552,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, 3 nhóm nhiệm vụ, giải pháp đột phá được xác định là gì?",
    "options": {
      "B": "(1) Xây dựng văn hoá thượng tôn pháp luật, văn hoá Đảng, văn hoá công vụ và kỷ cương xã hội; (2) Xây dựng con người Việt Nam thời kỳ mới; (3) Xây dựng nền quản trị xã hội hiện đại, kiến tạo phát triển từ cơ sở."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 10
  },
  {
    "id": 553,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, nguyên tắc phát triển nào sau đây được nhấn mạnh để không đánh đổi các giá trị cốt lõi?",
    "options": {
      "B": "Không đánh đổi trật tự, kỷ cương, tiến bộ, công bằng xã hội, môi trường và các giá trị văn hoá lấy tăng trưởng kinh tế đơn thuần."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 11
  },
  {
    "id": 554,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, chỉ số phát triển con người (HDI) và tuổi thọ trung bình tính từ lúc sinh phấn đấu đạt mức nào vào năm 2030?",
    "options": {
      "B": "HDI đạt khoảng 0,8; tuổi thọ đạt khoảng 75,5 tuổi (trong đó thời gian sống khỏe mạnh đạt tối thiểu 68 năm)."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 12
  },
  {
    "id": 555,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, hệ thống an sinh xã hội cần được phát triển theo hướng nào?",
    "options": {
      "B": "Đa dạng, đa tầng, toàn diện, hiện đại, bao trùm, bền vững."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 13
  },
  {
    "id": 556,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, cơ quan nào được giao chủ trì, phối hợp với Ban Chính sách, chiến lược Trung ương để theo dõi, hướng dẫn, đôn đốc, kiểm tra, giám sát việc thực hiện Nghị quyết?",
    "options": {
      "B": "Đảng ủy Công an Trung ương."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 14
  },
  {
    "id": 557,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, văn hóa được xác định giữ vai trò gì trong mô hình phát triển mới?",
    "options": {
      "B": "Là nền tảng tinh thần, nguồn lực và động lực nội sinh, năng lực sáng tạo, sức mạnh mềm cho phát triển."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 15
  },
  {
    "id": 558,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, chỉ số chênh lệch thu nhập (GINI) phấn đấu duy trì ở mức nào vào năm 2030?",
    "options": {
      "B": "Dưới mức 0,38."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 16
  },
  {
    "id": 559,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, công tác bảo đảm an ninh con người cần chuyển mạnh từ tư duy nào sang tư duy nào?",
    "options": {
      "B": "Từ \"ứng phó, xử lý\" sang \"chủ động phòng ngừa, quản trị rủi ro, lấy chủ động phòng ngừa từ sớm, từ xa, từ cơ sở là cơ bản\"."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 17
  },
  {
    "id": 560,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, mục tiêu về tỷ lệ đô thị hóa cả nước đến năm 2030 là gì?",
    "options": {
      "C": "Đạt trên 50%."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 18
  },
  {
    "id": 561,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, cơ quan nào được giao chủ trì, phối hợp thường xuyên tuyên truyền về việc triển khai, kết quả thực hiện Nghị quyết?",
    "options": {
      "A": "Ban Tuyên giáo và Dân vận Trung ương."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 19
  },
  {
    "id": 562,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, việc xây dựng con người Việt Nam thời kỳ mới cần kết hợp chặt chẽ giữa những yếu tố nào?",
    "options": {
      "B": "Kết hợp chặt chẽ giữa pháp quyền, đạo đức và niềm tin xã hội, giữa \"xây\" và \"chống\", giữa giáo dục, thuyết phục với kỷ luật, kỷ cương và thượng tôn pháp luật."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 20
  },
  {
    "id": 563,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mục tiêu đến năm 2045 là gì?",
    "options": {
      "B": "Hoàn thành chuyển đổi sang mô hình phát triển đất nước tự cường, sáng tạo, nhân văn, bền vững, hội nhập và trở thành quốc gia phát triển, thu nhập cao."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 1
  },
  {
    "id": 564,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, động lực chính của sự phát triển được xác định là gì?",
    "options": {
      "C": "Khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và trí tuệ nhân tạo quốc gia."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 2
  },
  {
    "id": 565,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mô hình phát triển mới được vận hành đồng bộ theo cơ chế nào?",
    "options": {
      "B": "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 3
  },
  {
    "id": 566,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mô hình kinh tế đến năm 2035 chuyển mạnh từ tăng trưởng chủ yếu dựa vào vốn, lao động, tài nguyên sang tăng trưởng dựa trên yếu tố nào?",
    "options": {
      "B": "Khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và năng suất lao động cao."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 4
  },
  {
    "id": 567,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, quản trị phát triển xã hội chuyển từ phương thức quản lý hành chính truyền thống và xử lý hậu quả sang hướng nào?",
    "options": {
      "B": "Kết hợp hài hòa, hiệu quả với quản trị phát triển và kiến tạo xã hội chủ động, dựa trên dữ liệu, dự báo và phòng ngừa từ sớm, từ xa."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 5
  },
  {
    "id": 568,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, văn hóa được xác định giữ vai trò gì trong mô hình phát triển mới?",
    "options": {
      "B": "Là nền tảng tinh thần, nguồn lực và động lực nội sinh, năng lực sáng tạo, sức mạnh mềm cho phát triển."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 6
  },
  {
    "id": 569,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mục tiêu phát thải ròng bằng \"0\" được thực hiện vào năm nào?",
    "options": {
      "C": "2050"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 7
  },
  {
    "id": 570,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, công nghiệp quốc phòng, an ninh được phát triển theo hướng nào?",
    "options": {
      "B": "Chủ động, tự lực, tự cường, tự chủ chiến lược, lưỡng dụng, hiện đại với sự tham gia phù hợp của khu vực tư nhân trong nước."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 8
  },
  {
    "id": 571,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, lĩnh vực nào được xác định là trọng tâm trong hoạt động đối ngoại?",
    "options": {
      "B": "Ngoại giao kinh tế."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 9
  },
  {
    "id": 572,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, khâu đột phá về thể chế và quản trị quốc gia yêu cầu chuyển từ tư duy nào sang tư duy nào?",
    "options": {
      "B": "Từ \"quản lý, kiểm soát\" sang \"kiến tạo, dẫn dắt phát triển\"."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 10
  },
  {
    "id": 573,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, yếu tố nào được xác định là tư liệu sản xuất mới và tài nguyên chiến lược?",
    "options": {
      "C": "Dữ liệu."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 11
  },
  {
    "id": 574,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, ngành công nghiệp nào sau đây được ưu tiên phát triển thành ngành công nghiệp nền tảng, cốt lõi?",
    "options": {
      "B": "Công nghiệp vật liệu."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 12
  },
  {
    "id": 575,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, hệ thống y tế được chuyển dịch từ mô hình nào sang mô hình nào?",
    "options": {
      "B": "Từ \"chữa bệnh\" sang \"phòng bệnh và chăm sóc sức khỏe toàn diện\"."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 13
  },
  {
    "id": 576,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, tư duy về dân số được chuyển căn bản từ quản lý quy mô, cơ cấu sang phát triển cái gì?",
    "options": {
      "A": "Vốn dân số quốc gia."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 14
  },
  {
    "id": 577,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, cơ chế huy động, phân bổ và sử dụng nguồn lực quốc gia chuyển từ tư duy phân bổ sang tư duy nào?",
    "options": {
      "B": "Tư duy kiến tạo, phát huy hiệu quả nguồn lực."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 15
  },
  {
    "id": 578,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, trong việc tái cấu trúc hệ sinh thái đổi mới sáng tạo quốc gia, ai được xác định là trung tâm?",
    "options": {
      "B": "Doanh nghiệp."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 16
  },
  {
    "id": 579,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, tư duy xây dựng pháp luật cần chấm dứt tư duy nào?",
    "options": {
      "A": "\"Không quản được thì cấm\"."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 17
  },
  {
    "id": 580,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, không gian phát triển quốc gia được tổ chức lại theo hướng nào?",
    "options": {
      "B": "Đa tầng, đa cực, liên kết đồng bộ đất liền - vùng biển - vùng trời - lòng đất - không gian số."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 18
  },
  {
    "id": 581,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, cơ quan nào được giao chủ trì phối hợp theo dõi, hướng dẫn, đôn đốc, kiểm tra, giám sát kết quả thực hiện Nghị quyết?",
    "options": {
      "C": "Ban Chính sách, chiến lược Trung ương."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 19
  },
  {
    "id": 582,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, tầm nhìn đến năm 2130, Việt Nam trở thành quốc gia như thế nào?",
    "options": {
      "B": "Quốc gia xã hội chủ nghĩa phát triển trình độ cao, văn minh, hiện đại, bản sắc, có năng lực sáng tạo và sức sống trường tồn."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 20
  },
  {
    "id": 583,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tổng GRDP của các tỉnh, thành phố ven biển đóng góp vào GDP cả nước phấn đấu đạt mức nào vào năm 2030?",
    "options": {
      "C": "Trên 70%"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 1
  },
  {
    "id": 584,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, chi phí logistics phấn đấu giảm còn dưới mức nào vào năm 2030?",
    "options": {
      "B": "12% GDP"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 2
  },
  {
    "id": 585,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tư duy phát triển cần chuyển mạnh theo hướng nào?",
    "options": {
      "A": "Từ khai thác biển sang quản trị biển hiện đại, tổng hợp, thống nhất."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 3
  },
  {
    "id": 586,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, mục tiêu phát triển các dự án điện gió ngoài khơi có công suất bao nhiêu vào năm 2030?",
    "options": {
      "C": "6-10 GW"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 4
  },
  {
    "id": 587,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tỷ trọng nuôi biển trong tổng giá trị sản xuất thủy sản phấn đấu đạt mức nào vào năm 2030?",
    "options": {
      "B": "15%"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 5
  },
  {
    "id": 588,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, đến năm 2030 phấn đấu hoàn thành bao nhiêu phần trăm tuyến đường bộ ven biển theo quy hoạch?",
    "options": {
      "D": "100%"
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 6
  },
  {
    "id": 589,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, động lực chính cho phát triển quốc gia biển mạnh được xác định là gì?",
    "options": {
      "B": "Khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và nguồn nhân lực chất lượng cao."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 7
  },
  {
    "id": 590,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, diện tích các khu bảo tồn biển, ven biển đạt tối thiểu bao nhiêu phần trăm diện tích tự nhiên vùng biển quốc gia vào năm 2030?",
    "options": {
      "C": "6%"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 8
  },
  {
    "id": 591,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, ngành kinh tế nào được xác định là trụ cột quan trọng của kinh tế biển, tạo tiền đề để Việt Nam vươn lên trở thành cường quốc hàng hải?",
    "options": {
      "A": "Kinh tế hàng hải."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 9
  },
  {
    "id": 592,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tốc độ tăng trưởng tổng thu du lịch biển, đảo bình quân phấn đấu đạt mức nào vào năm 2030?",
    "options": {
      "C": "14%/năm"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 10
  },
  {
    "id": 593,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, mục tiêu đến năm 2030 đối với chất thải nhựa ven biển là gì?",
    "options": {
      "B": "Thu gom, xử lý 100%."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 11
  },
  {
    "id": 594,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, lực lượng nào được xác định là nòng cốt, kiểu mẫu, làm chỗ dựa cho phát triển đội tàu cá hiện đại và bảo vệ, hỗ trợ ngư dân bám biển dài ngày?",
    "options": {
      "C": "Dân quân biển, hải đội dân quân thường trực."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 12
  },
  {
    "id": 595,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tỷ lệ số hóa, tích hợp và chia sẻ dữ liệu tài nguyên, môi trường, hạ tầng và hoạt động biển trong hệ thống quản lý nhà nước đạt mức nào vào năm 2030?",
    "options": {
      "D": "100%"
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 13
  },
  {
    "id": 596,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, chủ thể trực tiếp tham gia xây dựng và bảo vệ Tổ quốc từ hướng biển được xác định là ai?",
    "options": {
      "B": "Ngư dân, cư dân biển."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 14
  },
  {
    "id": 597,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tỷ lệ lao động qua đào tạo có bằng cấp, chứng chỉ, có kỹ năng trong các ngành, nghề, lĩnh vực biển phấn đấu đạt trên mức nào vào năm 2030?",
    "options": {
      "C": "45%"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 15
  },
  {
    "id": 598,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, nội dung cốt lõi, mang tính đột phá trong hoàn thiện thể chế phát triển quốc gia biển mạnh là gì?",
    "options": {
      "B": "Đổi mới quản trị không gian biển quốc gia."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 16
  },
  {
    "id": 599,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, mục tiêu đến năm 2030 sẽ hình thành bao nhiêu trung tâm kinh tế biển mạnh?",
    "options": {
      "B": "5-6 trung tâm"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 17
  },
  {
    "id": 600,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, ngành, lĩnh vực biển mới nào sau đây được ưu tiên phát triển mạnh?",
    "options": {
      "B": "Nuôi biển công nghệ cao, y-dược biển, công nghệ sinh học biển, khử mặn nước biển, điện sóng, hydro và amoniac xanh."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 18
  },
  {
    "id": 601,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, cơ quan nào được giao chủ trì, phối hợp với Văn phòng Trung ương Đảng, Ủy ban Kiểm tra Trung ương và các cơ quan liên quan thường xuyên theo dõi, kiểm tra, đôn đốc, sơ kết, tổng kết và định kỳ báo cáo kết quả thực hiện Nghị quyết?",
    "options": {
      "B": "Ban Chính sách, chiến lược Trung ương."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 19
  },
  {
    "id": 602,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tầm nhìn đến năm 2045, Việt Nam sẽ trở thành quốc gia như thế nào?",
    "options": {
      "B": "Quốc gia biển mạnh, giàu từ biển, phát triển bền vững từ biển, có vị thế, uy tín quan trọng trong hợp tác quốc tế, quản trị biển và đại dương toàn cầu."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 20
  },
  {
    "id": 603,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, Nghị quyết này thay thế văn bản nào trước đây?",
    "options": {
      "A": "Nghị quyết số 18-NQ/TW ngày 16/6/2022."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 1
  },
  {
    "id": 604,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, đất đai thuộc sở hữu của ai?",
    "options": {
      "B": "Toàn dân do Nhà nước đại diện chủ sở hữu."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 2
  },
  {
    "id": 605,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, quyền sử dụng đất được xác định là gì?",
    "options": {
      "B": "Là một loại tài sản và hàng hóa đặc biệt nhưng không phải là quyền sở hữu."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 3
  },
  {
    "id": 606,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, tư duy về bồi thường khi thu hồi đất cần chuyển mạnh từ \"bồi thường tài sản bị thu hồi\" sang tư duy nào?",
    "options": {
      "B": "Tái thiết cuộc sống cho người dân."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 4
  },
  {
    "id": 607,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, mục tiêu cụ thể đến hết năm 2026 là gì?",
    "options": {
      "C": "Hoàn thành xây dựng cơ sở dữ liệu số đối với toàn bộ các thửa đất đã được thu thập thông tin, dữ liệu."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 5
  },
  {
    "id": 608,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, mục tiêu đến hết năm 2027 là gì?",
    "options": {
      "A": "Cơ bản hoàn thành công tác đo đạc lập bản đồ địa chính và xây dựng cơ sở dữ liệu đất đai đối với diện tích chưa có."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 6
  },
  {
    "id": 609,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, định hướng đổi mới về quy hoạch sử dụng đất là gì?",
    "options": {
      "B": "Tiến tới chỉ xây dựng một quy hoạch thống nhất trong phạm vi một đơn vị hành chính."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 7
  },
  {
    "id": 610,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, việc giao đất, cho thuê đất đối với quỹ đất do Nhà nước quản lý được thực hiện chủ yếu qua hình thức nào?",
    "options": {
      "B": "Đấu giá quyền sử dụng đất, đấu thầu dự án có sử dụng đất."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 8
  },
  {
    "id": 611,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, đối với các dự án bồi thường, hỗ trợ, tái định cư, Nghị quyết chủ trương thực hiện như thế nào?",
    "options": {
      "B": "Tách thành dự án độc lập để thực hiện trước."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 9
  },
  {
    "id": 612,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, nguyên tắc xác định, thẩm định, quyết định giá đất được phân định như thế nào?",
    "options": {
      "C": "Trung ương xây dựng tiêu chí khung, địa phương quyết định giá đất."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 10
  },
  {
    "id": 613,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, Nhà nước khuyến khích giao dịch bất động sản qua hình thức nào để minh bạch hóa thị trường?",
    "options": {
      "B": "Giao dịch qua sàn giao dịch, thanh toán qua ngân hàng, không dùng tiền mặt."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 11
  },
  {
    "id": 614,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, chính sách đối với đất nông nghiệp hướng tới việc gì?",
    "options": {
      "B": "Mở rộng đối tượng, hạn mức nhận chuyển quyền sử dụng đất nông nghiệp."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 12
  },
  {
    "id": 615,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, cơ chế nào được thí điểm để xử lý các dự án nhà ở thương mại của chủ đầu tư không còn khả năng thực hiện?",
    "options": {
      "A": "Nhà nước mua lại dự án."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 13
  },
  {
    "id": 616,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, cơ quan nào chủ trì, phối hợp với Đảng ủy Quốc hội sửa đổi Luật Đất đai năm 2024 và các luật có liên quan?",
    "options": {
      "B": "Đảng ủy Chính phủ."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 14
  },
  {
    "id": 617,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, cơ quan nào có trách nhiệm theo dõi, đôn đốc, hướng dẫn việc thực hiện Nghị quyết và định kỳ báo cáo Bộ Chính trị, Ban Bí thư?",
    "options": {
      "A": "Ban Chính sách, chiến lược Trung ương."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 15
  },
  {
    "id": 618,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, tư duy quản lý đất đai cần chuyển mạnh từ quản lý hành chính sang tư duy nào?",
    "options": {
      "B": "Quản trị hiện đại trên nền tảng số, dữ liệu số."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 16
  },
  {
    "id": 619,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, việc quản lý đất đai phải đảm bảo nguyên tắc gì về lãnh thổ?",
    "options": {
      "B": "Thống nhất quản lý theo lãnh thổ quốc gia."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 17
  },
  {
    "id": 620,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, đối với đất trồng lúa, Nghị quyết nghiên cứu đổi mới chính sách theo hướng nào?",
    "options": {
      "B": "Cho phép chuyển đổi diện tích đất trồng lúa kém hiệu quả, đảm bảo an ninh lương thực."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 18
  },
  {
    "id": 621,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, thời hạn sử dụng đất đối với nhà ở cho thuê, nhà ở chính sách, nhà công vụ thuộc sở hữu Nhà nước là bao lâu?",
    "options": {
      "C": "Lâu dài."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 19
  },
  {
    "id": 622,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, mục tiêu tổng quát của việc hoàn thiện thể chế, chính sách về quản lý và sử dụng đất là gì?",
    "options": {
      "D": "Đưa đất đai thực sự trở thành nguồn lực chiến lược, lợi thế cạnh tranh và động lực phát triển đất nước."
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 20
  },
  {
    "id": 623,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, công tác bảo vệ an ninh quốc gia được đặt dưới sự lãnh đạo như thế nào?",
    "options": {
      "A": "Tuyệt đối, trực tiếp về mọi mặt của Đảng."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 1
  },
  {
    "id": 624,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, mối quan hệ giữa an ninh và phát triển được xác định như thế nào?",
    "options": {
      "A": "An ninh là điều kiện tiên quyết, phát triển là nền tảng của an ninh bền vững."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 2
  },
  {
    "id": 625,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, an ninh trong kỷ nguyên mới mở rộng phạm vi bảo vệ sang những yếu tố nào?",
    "options": {
      "B": "Bảo vệ các yếu tố cấu thành năng lực phát triển quốc gia, sự vận hành ổn định của toàn bộ hệ thống kinh tế, xã hội, công nghệ."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 3
  },
  {
    "id": 626,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, loại hình an ninh nào được xác định là \"trung tâm\" trong thực hiện an ninh tổng thể?",
    "options": {
      "C": "An ninh mạng, an ninh dữ liệu, an ninh công nghệ."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 4
  },
  {
    "id": 627,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, tư duy bảo vệ an ninh cần chuyển dịch từ \"quản lý từng nguy cơ\" sang hướng nào?",
    "options": {
      "B": "Quản trị tương tác giữa các nguy cơ."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 5
  },
  {
    "id": 628,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, mục tiêu tổng quát là ngăn ngừa, đẩy lùi từ sớm các nhân tố gây mất ổn định chính trị từ những đâu?",
    "options": {
      "A": "Từ bên trong, từ không gian mạng, không gian vũ trụ, không gian tâm pháp, không gian biển và đại dương."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 6
  },
  {
    "id": 629,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, đến năm 2030, hạ tầng số trong yếu tố nào sẽ được hoàn thành chuyển đổi mật mã kháng lượng tử?",
    "options": {
      "A": "Hạ tầng số trong yếu."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 7
  },
  {
    "id": 630,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, tầm nhìn đến năm 2045, bảo vệ an ninh con người sẽ đạt mức độ nào?",
    "options": {
      "A": "Thuộc nhóm dẫn đầu của khu vực và thế giới."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 8
  },
  {
    "id": 631,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, bảo vệ an ninh chế độ được xác định là nhiệm vụ gì?",
    "options": {
      "B": "Nhiệm vụ chiến lược, sống còn của quốc gia."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 9
  },
  {
    "id": 632,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, để chủ động đẩy lùi nguy cơ, thách thức, cần hình thành hệ thống gì?",
    "options": {
      "A": "Hệ thống thu thập, phân tích xử lý thông tin hiện đại, kết nối dữ liệu đa ngành, đa tầng."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 10
  },
  {
    "id": 633,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, công tác phát hiện, ngăn chặn yếu tố tiềm ẩn phức tạp về an ninh, trật tự cần được thực hiện từ đâu?",
    "options": {
      "B": "Từ cơ sở, trên các lĩnh vực, địa bàn."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 11
  },
  {
    "id": 634,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, việc bảo đảm an ninh trong các không gian mới (vũ trụ, tâm pháp, ngầm, biển và đại dương) cần được làm gì trong các chương trình quốc gia?",
    "options": {
      "B": "Bổ sung nội dung bảo vệ an ninh vào các chương trình quốc gia, chiến lược, quy hoạch."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 12
  },
  {
    "id": 635,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, quy định về bảo đảm an ninh trong nghiên cứu, phát triển và ứng dụng trí tuệ nhân tạo (AI) cần tích hợp yếu tố an ninh từ khâu nào?",
    "options": {
      "B": "Khâu thiết kế, phát triển và triển khai."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 13
  },
  {
    "id": 636,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, tư duy bảo đảm an ninh năng lượng cần chuyển mạnh từ \"đảm bảo cung ứng\" sang hướng nào?",
    "options": {
      "A": "\"An toàn - ổn định - tự chủ - bền vững\"."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 14
  },
  {
    "id": 637,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, yếu tố nào được xác định là trụ cột của Chiến lược An ninh quốc gia?",
    "options": {
      "A": "Sức mạnh lòng dân thật sự."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 15
  },
  {
    "id": 638,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, Việt Nam cần chủ động tham vấn, phối hợp với các nước thành viên ASEAN để thúc đẩy thiết lập cơ chế gì?",
    "options": {
      "B": "Bảo đảm an ninh khu vực đối với các vấn đề an ninh mới nổi."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 16
  },
  {
    "id": 639,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, công nghiệp quốc phòng, công nghiệp an ninh cần phát triển theo hướng nào?",
    "options": {
      "A": "Tự chủ, tự lực, tự cường, lưỡng dụng, hiện đại.",
      "B": "Phụ thuộc hoàn toàn vào chuyển giao công nghệ nước ngoài.",
      "C": "Chỉ tập trung sản xuất vũ khí hạng nặng.",
      "D": "Giải thể các doanh nghiệp nhà nước trong lĩnh vực này."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 17
  },
  {
    "id": 640,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, Nghị quyết này thay thế văn bản nào?",
    "options": {
      "A": "Nghị quyết số 51-NQ/TW ngày 05/9/2019 của Bộ Chính trị."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 18
  },
  {
    "id": 641,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, cơ quan nào chủ trì, phối hợp với các cơ quan liên quan thường xuyên theo dõi, đôn đốc, kiểm tra, giám sát việc thực hiện Nghị quyết?",
    "options": {
      "A": "Đảng ủy Công an Trung ương."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 19
  },
  {
    "id": 642,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, để chủ động đẩy lùi nguy cơ, thách thức, cần kiên định đường lối đối ngoại độc lập, tự chủ, tự cường, đa phương hóa, đa dạng hóa và kiên trì, nhất quán nguyên tắc nào?",
    "options": {
      "A": "\"Không chọn bên\"."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 20
  },
  {
    "id": 643,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, chủ trương đổi mới, sắp xếp tổ chức bộ máy của hệ thống chính trị theo hướng tinh gọn, hoạt động hiệu năng, hiệu lực, hiệu quả được khẳng định là gì?",
    "options": {
      "A": "Hoàn toàn đúng đắn, phù hợp."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 1
  },
  {
    "id": 644,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, quá trình vận hành mô hình mới đã tạo chuyển biến rõ nét trong tư duy quản lý, chuyển mạnh từ tư duy quản lý hành chính sang hướng nào?",
    "options": {
      "A": "Quản trị phát triển."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 2
  },
  {
    "id": 645,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, đối với những lĩnh vực liên ngành, giao thoa, phải thực hiện nguyên tắc nào sau đây?",
    "options": {
      "B": "Một việc có một cơ quan chủ trì, một đầu mối chịu trách nhiệm chính."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 3
  },
  {
    "id": 646,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, cấp xã được xác định là tuyến đầu của cái gì trong mô hình chính quyền địa phương 2 cấp?",
    "options": {
      "B": "Quản trị công, trực tiếp phục vụ người dân, doanh nghiệp."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 4
  },
  {
    "id": 647,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, cấp tỉnh giữ vai trò gì trong mô hình chính quyền địa phương 2 cấp?",
    "options": {
      "B": "Trung tâm trong quản trị, tổ chức không gian phát triển, liên kết vùng."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 5
  },
  {
    "id": 648,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, công tác đánh giá cán bộ cần đổi mới theo hướng gắn với tiêu chí nào?",
    "options": {
      "C": "Sản phẩm cụ thể, kết quả đầu ra."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 6
  },
  {
    "id": 649,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, việc xử lý dứt điểm nhà, đất, trụ sở, tài sản công dôi dư sau sắp xếp phải tuân theo nguyên tắc nào?",
    "options": {
      "B": "Công khai, minh bạch, đúng pháp luật, không để lãng phí, thất thoát."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 7
  },
  {
    "id": 650,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, dữ liệu phải trở thành nền tảng của chỉ đạo, điều hành, giám sát, đánh giá cán bộ và phục vụ người dân, doanh nghiệp dựa trên nguyên tắc nào?",
    "options": {
      "A": "Đúng, đủ, sạch, sống, thống nhất, dùng chung."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 8
  },
  {
    "id": 651,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, việc ứng dụng trí tuệ nhân tạo (AI) trong tham mưu, điều hành và phục vụ người dân phải đảm bảo điều kiện gì?",
    "options": {
      "B": "Có kiểm soát và xác định rõ trách nhiệm của con người trong quyết định cuối cùng."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 9
  },
  {
    "id": 652,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, chức năng, nhiệm vụ tham mưu về công tác dân vận được chuyển từ Ban Tuyên giáo và Dân vận Trung ương về đâu?",
    "options": {
      "B": "Đảng ủy Mặt trận Tổ quốc, các đoàn thể Trung ương."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 10
  },
  {
    "id": 653,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, kiểm soát quyền lực phải đi đôi với nguyên tắc nào để không làm cán bộ sợ trách nhiệm, né tránh công việc?",
    "options": {
      "B": "Khuyến khích đổi mới, sáng tạo."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 11
  },
  {
    "id": 654,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, thước đo trọng tâm trong đánh giá hiệu năng, hiệu lực, hiệu quả vận hành của mô hình mới là gì?",
    "options": {
      "B": "Sự hài lòng của người dân, doanh nghiệp và tiến độ xử lý công việc."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 12
  },
  {
    "id": 655,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, năng lực thực thi của cán bộ cấp nào được xác định là thước đo quan trọng kiểm định sự thành công của mô hình mới?",
    "options": {
      "A": "Cấp xã."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 13
  },
  {
    "id": 656,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, việc bàn giao, tiếp nhận, quản lý, chỉnh lý và số hóa hồ sơ, tài liệu sau sắp xếp phải đảm bảo điều gì?",
    "options": {
      "C": "Tuyệt đối không để thất lạc, hư hỏng, phân tán hồ sơ ảnh hưởng đến quyền, lợi ích hợp pháp của người dân."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 14
  },
  {
    "id": 657,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, để đảm bảo cơ sở có đủ điều kiện vận hành, phục vụ người dân, cần có cơ chế phân bổ ngân sách như thế nào cho cấp xã?",
    "options": {
      "B": "Tăng tỷ lệ để lại nguồn thu phù hợp."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 15
  },
  {
    "id": 658,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, việc nghiên cứu xây dựng khu kinh tế đặc biệt nhằm mục đích gì ở cấp xã?",
    "options": {
      "A": "Tạo không gian phát triển mới với cơ chế vượt trội, mô hình quản lý tinh gọn, hiệu năng."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 16
  },
  {
    "id": 659,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, để nâng cao năng lực thực thi, cần tăng cường đào tạo, bồi dưỡng, luân chuyển, bố trí cán bộ có năng lực, chuyên môn sâu về đâu?",
    "options": {
      "A": "Về cơ sở."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 17
  },
  {
    "id": 660,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội phải đổi mới mạnh mẽ nội dung, phương thức hoạt động, hướng mạnh về đâu?",
    "options": {
      "A": "Về cơ sở."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 18
  },
  {
    "id": 661,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, cần kiên quyết khắc phục tình trạng nào trong quản lý dữ liệu để thiết lập kiến trúc dữ liệu thống nhất từ Trung ương đến cấp xã?",
    "options": {
      "C": "Cát cứ dữ liệu, phần mềm, đầu tư manh mún, thiếu kết nối."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 19
  },
  {
    "id": 662,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, người đứng đầu cấp ủy, chính quyền, cơ quan, đơn vị phải chịu trách nhiệm như thế nào về hiệu quả vận hành của bộ máy thuộc phạm vi quản lý?",
    "options": {
      "C": "Trách nhiệm toàn diện."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/2. Cau hoi TW3 (160).docx",
    "source_id": 20
  },
  {
    "id": 663,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, văn hóa Việt Nam được xác định là gì?",
    "options": {
      "C": "Nguồn lực nội sinh quan trọng"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 1
  },
  {
    "id": 664,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, phát triển văn hóa, con người được xác định là gì?",
    "options": {
      "A": "Nền tảng và động lực"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 2
  },
  {
    "id": 665,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, các giá trị văn hóa phải thực sự trở thành?",
    "options": {
      "B": "Sức mạnh mềm quốc gia"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 3
  },
  {
    "id": 666,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, phát triển văn hóa nhằm trước hết?",
    "options": {
      "B": "Hoàn thiện nhân cách con người xã hội chủ nghĩa"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 4
  },
  {
    "id": 667,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, Nhân dân trong sự nghiệp phát triển văn hóa được xác định là gì?",
    "options": {
      "B": "Chủ thể sáng tạo và thụ hưởng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 5
  },
  {
    "id": 668,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong phát triển văn hóa, Nhà nước giữ vai trò gì?",
    "options": {
      "B": "Quản lý"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 6
  },
  {
    "id": 669,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đầu tư cho văn hóa là gì?",
    "options": {
      "A": "Đầu tư cho phát triển bền vững"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 7
  },
  {
    "id": 670,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nguồn lực nhà nước trong phát triển văn hóa giữ vai trò gì?",
    "options": {
      "B": "Dẫn dắt"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 8
  },
  {
    "id": 671,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nguồn lực xã hội và khu vực tư nhân được xác định là gì?",
    "options": {
      "B": "Động lực quan trọng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 9
  },
  {
    "id": 672,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong huy động nguồn lực phát triển văn hóa, thể chế giữ vai trò như thế nào?",
    "options": {
      "C": "Then chốt"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 10
  },
  {
    "id": 673,
    "q": "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam yêu cầu xử lý hài hòa mối quan hệ nào?",
    "options": {
      "A": "Bảo tồn và phát triển"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 11
  },
  {
    "id": 674,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, một mối quan hệ nội tại khác cần được xử lý hài hòa là gì?",
    "options": {
      "A": "Truyền thống và hiện đại"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 12
  },
  {
    "id": 675,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, mục tiêu chung đến năm 2030 là xây dựng nền văn hóa gì?",
    "options": {
      "A": "Tiên tiến, đậm đà bản sắc dân tộc"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 13
  },
  {
    "id": 676,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nền văn hóa Việt Nam đến năm 2030 được xác định là gì?",
    "options": {
      "A": "Thống nhất trong đa dạng"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 14
  },
  {
    "id": 677,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, môi trường văn hóa lành mạnh được xây dựng từ đâu?",
    "options": {
      "C": "Gia đình, nhà trường, xã hội và không gian số"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 15
  },
  {
    "id": 678,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, đặt mục tiêu cơ bản hoàn thành?",
    "options": {
      "B": "Tu bổ, tôn tạo di tích quốc gia đặc biệt"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 16
  },
  {
    "id": 679,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, công nghiệp văn hóa phấn đấu đóng góp bao nhiêu % GDP?",
    "options": {
      "C": "7% GDP"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 17
  },
  {
    "id": 680,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, số thương hiệu quốc gia về công nghiệp văn hóa phấn đấu hình thành là bao nhiêu?",
    "options": {
      "B": "5–10"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 18
  },
  {
    "id": 681,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, phấn đấu thành lập thêm?",
    "options": {
      "A": "1–3 trung tâm văn hóa Việt Nam ở nước ngoài"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 19
  },
  {
    "id": 682,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, tầm nhìn đến năm 2045 xác định con người là gì?",
    "options": {
      "B": "Trung tâm, chủ thể, mục tiêu, động lực"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 20
  },
  {
    "id": 683,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2045, công nghiệp văn hóa, kinh tế sáng tạo phấn đấu đóng góp như thế nào?",
    "options": {
      "C": "9% GDP"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 21
  },
  {
    "id": 684,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2045, phấn đấu có bao nhiêu thương hiệu liên hoan quốc tế?",
    "options": {
      "C": "10 thương hiệu"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 22
  },
  {
    "id": 685,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2045, Việt Nam phấn đấu nằm trong Top 3 ASEAN và Top bao nhiêu thế giới về Chỉ số Sức mạnh mềm?",
    "options": {
      "B": "Top 30"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 23
  },
  {
    "id": 686,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, một nhiệm vụ quan trọng là đổi mới tư duy theo hướng nào?",
    "options": {
      "A": "Phát triển văn hóa ngang tầm chính trị, kinh tế, xã hội"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 24
  },
  {
    "id": 687,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong công tác tuyên truyền, giáo dục về văn hóa, lực lượng nào giữ vai trò nòng cốt?",
    "options": {
      "B": "Báo chí, xuất bản"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 25
  },
  {
    "id": 688,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, truyền thông hiện đại cần đặc biệt chú trọng?",
    "options": {
      "B": "Truyền thông số"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 26
  },
  {
    "id": 689,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, một yêu cầu về hoàn thiện thể chế văn hóa là xây dựng nội dung gì?",
    "options": {
      "A": "Bộ chỉ số văn hóa quốc gia"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 27
  },
  {
    "id": 690,
    "q": "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam yêu cầu chuyển đổi phương thức quản lý văn hóa theo hướng nào?",
    "options": {
      "B": "Kiến tạo, phục vụ"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 28
  },
  {
    "id": 691,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong quản trị văn hóa hiện đại, yêu cầu chuyển từ?",
    "options": {
      "B": "Tiền kiểm sang hậu kiểm"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 29
  },
  {
    "id": 692,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nội dung nào là nền tảng của phương thức quản trị văn hóa hiện đại?",
    "options": {
      "A": "Minh bạch, trách nhiệm giải trình"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 30
  },
  {
    "id": 693,
    "q": "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam yêu cầu chuẩn hóa và số hóa toàn diện?",
    "options": {
      "C": "Di sản và tác phẩm có giá trị"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 31
  },
  {
    "id": 694,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, một trong những công nghệ được khuyến khích ứng dụng trong phát triển văn hóa là gì?",
    "options": {
      "A": "Trí tuệ nhân tạo"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 32
  },
  {
    "id": 695,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong hệ sinh thái văn hóa, doanh nghiệp được xác định là gì?",
    "options": {
      "B": "Động lực then chốt"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 33
  },
  {
    "id": 696,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, người dân trong hệ sinh thái văn hóa vừa là gì?",
    "options": {
      "A": "Chủ thể vừa là trung tâm"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 34
  },
  {
    "id": 697,
    "q": "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam xác định tài nguyên văn hóa số là gì?",
    "options": {
      "B": "Thế mạnh"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 35
  },
  {
    "id": 698,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nội dung nào thuộc nhóm ngành công nghiệp văn hóa được ưu tiên?",
    "options": {
      "A": "Điện ảnh, âm nhạc, mỹ thuật"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 36
  },
  {
    "id": 699,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, du lịch Việt Nam được định hướng phát triển theo hướng nào?",
    "options": {
      "B": "Thông minh, xanh, sạch, giảm phát thải"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 37
  },
  {
    "id": 700,
    "q": "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam yêu cầu “biến di sản thành”?",
    "options": {
      "B": "Tài sản"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 38
  },
  {
    "id": 701,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, chương trình mục tiêu quốc gia về phát triển văn hóa được thực hiện trong giai đoạn nào?",
    "options": {
      "B": "2025–2035"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 39
  },
  {
    "id": 702,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, ngày 24/11 hằng năm được thống nhất chọn là gì?",
    "options": {
      "B": "Ngày Văn hóa Việt Nam"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/3. Cau hoi Nghi quyet so 80 ve van hoa (40).docx",
    "source_id": 40
  },
  {
    "id": 703,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, kinh tế nhà nước được xác định là gì?",
    "options": {
      "C": "Giữ vai trò chủ đạo trong nền kinh tế quốc dân"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 1
  },
  {
    "id": 704,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, mục tiêu phát triển kinh tế nhà nước nhằm góp phần xây dựng nền kinh tế?",
    "options": {
      "C": "Độc lập, tự chủ, hội nhập quốc tế sâu rộng"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 2
  },
  {
    "id": 705,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, kinh tế nhà nước phải phát huy vai trò gì?",
    "options": {
      "A": "Điều tiết, dẫn dắt, mở đường"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 3
  },
  {
    "id": 706,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước phải tập trung vào?",
    "options": {
      "B": "Các lĩnh vực then chốt, thiết yếu"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 4
  },
  {
    "id": 707,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong những yêu cầu đối với doanh nghiệp nhà nước là gì?",
    "options": {
      "B": "Hoạt động theo cơ chế thị trường"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 5
  },
  {
    "id": 708,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các nguyên tắc quản lý vốn nhà nước là gì?",
    "options": {
      "B": "Công khai, minh bạch"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 6
  },
  {
    "id": 709,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, phải hoàn thiện nội dung gì?",
    "options": {
      "B": "Thể chế quản lý vốn nhà nước"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 7
  },
  {
    "id": 710,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước phải lấy yếu tố nào làm trung tâm?",
    "options": {
      "B": "Hiệu quả sản xuất kinh doanh"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 8
  },
  {
    "id": 711,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, kinh tế nhà nước phải giữ vai trò chủ đạo trong việc gì?",
    "options": {
      "A": "Bình ổn kinh tế vĩ mô"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 9
  },
  {
    "id": 712,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong những mục tiêu đến năm 2030 là gì?",
    "options": {
      "A": "Hình thành doanh nghiệp nhà nước có năng lực cạnh tranh khu vực"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 10
  },
  {
    "id": 713,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, đổi mới quản trị doanh nghiệp theo chuẩn mực nào?",
    "options": {
      "B": "Quốc tế"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 11
  },
  {
    "id": 714,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các lĩnh vực ưu tiên đầu tư là gì?",
    "options": {
      "A": "Công nghệ cao"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 12
  },
  {
    "id": 715,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước phải đi đầu trong nội dung nào?",
    "options": {
      "A": "Chuyển đổi xanh"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 13
  },
  {
    "id": 716,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các yêu cầu đối với đầu tư công là gì?",
    "options": {
      "B": "Trọng tâm, trọng điểm"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 14
  },
  {
    "id": 717,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, cần hoàn thiện thị trường nào?",
    "options": {
      "A": "Lao động",
      "B": "Vốn",
      "C": "Khoa học và công nghệ",
      "D": "Bao gồm các phương án được nêu"
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 15
  },
  {
    "id": 718,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các nhiệm vụ là gì?",
    "options": {
      "A": "Hoàn thiện pháp luật"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 16
  },
  {
    "id": 719,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, phải tăng cường gì?",
    "options": {
      "A": "Kiểm tra, giám sát"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 17
  },
  {
    "id": 720,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các nguyên tắc quản trị là gì?",
    "options": {
      "A": "Minh bạch"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 18
  },
  {
    "id": 721,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, phải phòng chống gì?",
    "options": {
      "A": "Tham nhũng, tiêu cực"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 19
  },
  {
    "id": 722,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước cần phát triển gì?",
    "options": {
      "A": "Khoa học, công nghệ"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 20
  },
  {
    "id": 723,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các yếu tố quyết định năng lực cạnh tranh là gì?",
    "options": {
      "A": "Đổi mới sáng tạo"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 21
  },
  {
    "id": 724,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước cần phát triển theo hướng nào?",
    "options": {
      "A": "Hiện đại"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 22
  },
  {
    "id": 725,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, cần thúc đẩy gì?",
    "options": {
      "A": "Liên kết vùng"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 23
  },
  {
    "id": 726,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các yêu cầu là gì?",
    "options": {
      "A": "Tăng sức chống chịu của nền kinh tế"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 24
  },
  {
    "id": 727,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, phải phát triển gì?",
    "options": {
      "A": "Hạ tầng chiến lược"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 25
  },
  {
    "id": 728,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các nhiệm vụ là gì?",
    "options": {
      "A": "Hoàn thiện cơ chế phân cấp"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 26
  },
  {
    "id": 729,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các nhiệm vụ là gì?",
    "options": {
      "A": "Phát triển các tập đoàn kinh tế mạnh"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 27
  },
  {
    "id": 730,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước phải làm gì?",
    "options": {
      "A": "Hội nhập quốc tế"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 28
  },
  {
    "id": 731,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, quản trị doanh nghiệp phải gắn với nội dung nào?",
    "options": {
      "A": "Trách nhiệm giải trình"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 29
  },
  {
    "id": 732,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các yêu cầu là gì?",
    "options": {
      "A": "Bảo toàn và phát triển vốn nhà nước"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 30
  },
  {
    "id": 733,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, phải tăng cường gì?",
    "options": {
      "A": "Kiểm toán và thanh tra"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 31
  },
  {
    "id": 734,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, đến năm 2045, mục tiêu là xây dựng kinh tế như thế nào?",
    "options": {
      "A": "Kinh tế nhà nước hiện đại, hiệu quả"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 32
  },
  {
    "id": 735,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, kinh tế nhà nước phải góp phần bảo đảm gì?",
    "options": {
      "A": "Quốc phòng, an ninh"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 33
  },
  {
    "id": 736,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, cơ quan, tổ chức đảng các cấp có trách nhiệm gì?",
    "options": {
      "A": "Tổ chức quán triệt và thực hiện Nghị quyết"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 34
  },
  {
    "id": 737,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, yêu cầu xuyên suốt trong thực hiện Nghị quyết là gì?",
    "options": {
      "A": "Đổi mới, hiệu quả, phát triển bền vững"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/4. Cau hoi NQ 79 ve phat trien kinh te nha nuoc (35).docx",
    "source_id": 35
  },
  {
    "id": 738,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, định hướng chiến lược thu hút đầu tư nước ngoài có sự chuyển dịch quan trọng nào dưới đây?",
    "options": {
      "A": "Chuyển từ chú trọng số lượng, quy mô vốn sang chất lượng, hiệu quả, công nghệ và giá trị gia tăng."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 1
  },
  {
    "id": 739,
    "q": "Các lĩnh vực ưu tiên thu hút đầu tư nước ngoài theo tinh thần đổi mới của Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài bao gồm ngành nào sau đây?",
    "options": {
      "A": "Công nghệ bán dẫn, trí tuệ nhân tạo (AI), năng lượng xanh."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 2
  },
  {
    "id": 740,
    "q": "Mục tiêu cốt lõi khi gắn kết kinh tế có vốn đầu tư nước ngoài với nền kinh tế trong nước theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài là gì?",
    "options": {
      "A": "Giúp doanh nghiệp Việt Nam tham gia sâu hơn vào chuỗi giá trị toàn cầu và nâng cao năng lực cạnh tranh."
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 3
  },
  {
    "id": 741,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, kinh tế có vốn đầu tư nước ngoài được xác định là gì?",
    "options": {
      "B": "Bộ phận quan trọng của nền kinh tế quốc gia"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 4
  },
  {
    "id": 742,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, Nhà nước khuyến khích kinh tế có vốn đầu tư nước ngoài phát triển theo hướng nào?",
    "options": {
      "C": "Phát triển lâu dài"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 5
  },
  {
    "id": 743,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, phát triển kinh tế có vốn đầu tư nước ngoài phải gắn với yêu cầu nào sau đây?",
    "options": {
      "B": "Nâng cao năng lực tự chủ chiến lược"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 6
  },
  {
    "id": 744,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, yêu cầu chuyển mạnh từ tư duy chủ yếu thu hút vốn sang…?",
    "options": {
      "B": "Phát triển nền tảng đầu tư chiến lược quốc gia"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 7
  },
  {
    "id": 745,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, tiêu chí chủ yếu trong thu hút đầu tư là gì?",
    "options": {
      "C": "Chất lượng, hiệu quả và chuyển giao công nghệ"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 8
  },
  {
    "id": 746,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, Nhà nước bảo đảm môi trường đầu tư theo yêu cầu nào?",
    "options": {
      "A": "Minh bạch, ổn định, nhất quán"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 9
  },
  {
    "id": 747,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, kết quả đóng góp thực chất được lấy làm gì?",
    "options": {
      "B": "Thước đo chủ yếu trong thu hút và quản lý đầu tư nước ngoài"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 10
  },
  {
    "id": 748,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, mục tiêu tổng quát đến năm 2030 là đưa Việt Nam trở thành?",
    "options": {
      "B": "Điểm đến có sức cạnh tranh thu hút nguồn vốn nước ngoài chất lượng cao"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 11
  },
  {
    "id": 749,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, giai đoạn 2026-2030 phấn đấu thu hút vốn FDI đăng ký khoảng?",
    "options": {
      "C": "200–300 tỷ USD"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 11
  },
  {
    "id": 750,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, vốn FDI thực hiện giai đoạn 2026-2030 khoảng?",
    "options": {
      "C": "150–200 tỷ USD"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 12
  },
  {
    "id": 751,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2030, bao nhiêu phần trăm vốn đầu tư nước ngoài đến từ các nền kinh tế phát triển?",
    "options": {
      "C": "75%"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 13
  },
  {
    "id": 752,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, ít nhất bao nhiêu tập đoàn công nghệ hàng đầu thế giới đặt trung tâm nghiên cứu và phát triển (R&D) tại Việt Nam?",
    "options": {
      "B": "3"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 14
  },
  {
    "id": 753,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2030, tỷ lệ nội địa hóa trung bình trong các ngành công nghiệp chủ lực đạt bao nhiêu %?",
    "options": {
      "C": "45–50%"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 15
  },
  {
    "id": 754,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2030 phấn đấu có khoảng bao nhiêu doanh nghiệp Việt Nam tham gia chuỗi giá trị của doanh nghiệp FDI?",
    "options": {
      "C": "10.000"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 16
  },
  {
    "id": 755,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, tỷ lệ khu công nghiệp sinh thái đạt khoảng bao nhiêu %?",
    "options": {
      "B": "10%"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 17
  },
  {
    "id": 756,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, phấn đấu trước năm 2030, thị trường chứng khoán Việt Nam đạt được gì?",
    "options": {
      "B": "MSCI nâng hạng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 18
  },
  {
    "id": 757,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2045, khu vực FDI đóng góp khoảng bao nhiêu GDP?",
    "options": {
      "C": "30%"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 19
  },
  {
    "id": 758,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2045, FDI chiếm khoảng bao nhiêu tổng vốn đầu tư toàn xã hội?",
    "options": {
      "C": "25%"
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 20
  },
  {
    "id": 759,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài kiên quyết không đánh đổi điều gì để lấy tăng trưởng kinh tế đơn thuần?",
    "options": {
      "B": "Môi trường và an sinh xã hội"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 21
  },
  {
    "id": 760,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, quản trị đầu tư được thực hiện trên nền tảng nào?",
    "options": {
      "B": "Dữ liệu số và trí tuệ nhân tạo"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 22
  },
  {
    "id": 761,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, các cơ sở đào tạo nghề được tổ chức lại nhằm hình thành?",
    "options": {
      "B": "Trung tâm đào tạo nghề chất lượng cao"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 23
  },
  {
    "id": 762,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, một trong các loại hạ tầng được ưu tiên là gì?",
    "options": {
      "B": "Hạ tầng logistics"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 24
  },
  {
    "id": 763,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, một lĩnh vực cốt lõi ưu tiên thu hút đầu tư là gì?",
    "options": {
      "A": "Chip bán dẫn"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 25
  },
  {
    "id": 764,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, ưu tiên phát triển gì?",
    "options": {
      "B": "Trí tuệ nhân tạo"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 26
  },
  {
    "id": 765,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, doanh nghiệp FDI được khuyến khích cam kết về gì?",
    "options": {
      "B": "Chuyển giao công nghệ"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 27
  },
  {
    "id": 766,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, khuyến khích tổ chức tín dụng hỗ trợ gì?",
    "options": {
      "B": "Dự án xanh"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 28
  },
  {
    "id": 767,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, cổng một cửa đầu tư quốc gia được xây dựng theo hướng nào?",
    "options": {
      "B": "Số hóa toàn trình"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 29
  },
  {
    "id": 768,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, bộ tiêu chí đánh giá hiệu quả FDI lấy tiêu chí chủ yếu là gì?",
    "options": {
      "B": "Chất lượng và hiệu quả"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/5. Cau hoi NQ 10 ve phat trien kinh te co von dau tu nuoc ngoai (30).docx",
    "source_id": 30
  },
  {
    "id": 769,
    "q": "Nội dung trọng tâm của Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng là gì?",
    "options": {
      "B": "Giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật, bảo đảm an toàn"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 1
  },
  {
    "id": 770,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn được xác định là gì?",
    "options": {
      "B": "Nhiệm vụ chính trị trọng tâm"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 2
  },
  {
    "id": 771,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, toàn quân tổ chức hoạt động gì?",
    "options": {
      "B": "Đợt sinh hoạt chính trị và “chỉnh huấn” sâu rộng"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 3
  },
  {
    "id": 772,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, nội dung nào được yêu cầu quán triệt sâu sắc?",
    "options": {
      "A": "“7 dám”",
      "B": "“5 vững”",
      "C": "“6 rõ”",
      "D": "Các phương án đã nêu"
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 4
  },
  {
    "id": 773,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, người chỉ huy, chính ủy, chính trị viên các cấp chịu trách nhiệm chính về nội dung nào?",
    "options": {
      "B": "Chất lượng giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật, bảo đảm an toàn"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 5
  },
  {
    "id": 774,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, chỉ huy từ cấp trung đoàn trở lên phải làm gì?",
    "options": {
      "A": "Tăng cường kiểm tra cấp dưới"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 6
  },
  {
    "id": 775,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, chỉ huy cấp tiểu đoàn, đại đội phải làm gì?",
    "options": {
      "A": "Thường xuyên bám sát hoạt động của bộ đội"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 7
  },
  {
    "id": 776,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, việc quản lý quân nhân cần chú trọng cả nội dung nào?",
    "options": {
      "A": "Ngày nghỉ, giờ nghỉ"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 8
  },
  {
    "id": 777,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, khi có vụ việc xảy ra, đơn vị phải tránh biểu hiện gì?",
    "options": {
      "B": "Bao che, giấu giếm khuyết điểm"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 9
  },
  {
    "id": 778,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, một yêu cầu quan trọng trong tuyển chọn, đào tạo và sử dụng cán bộ là gì?",
    "options": {
      "A": "Đúng người, đúng việc"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 10
  },
  {
    "id": 779,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, công tác bảo vệ chính trị nội bộ phải gắn với gì?",
    "options": {
      "A": "Bảo vệ bí mật nhà nước, an ninh, an toàn"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 11
  },
  {
    "id": 780,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, một trong những biện pháp xây dựng môi trường văn hóa quân sự là gì?",
    "options": {
      "A": "Tăng cường dân chủ, kỷ luật, kỷ cương"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 12
  },
  {
    "id": 781,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, cơ quan thông tấn, báo chí trong Quân đội cần chú trọng gì?",
    "options": {
      "B": "Tuyên truyền gương người tốt, việc tốt, mô hình hay"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 13
  },
  {
    "id": 782,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, phương hướng trọng tâm là gì?",
    "options": {
      "B": "Tạo chuyển biến vững chắc về nhận thức, trách nhiệm và hành động"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 14
  },
  {
    "id": 783,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, quản lý tư tưởng bộ đội cần được thực hiện theo tư duy như thế nào?",
    "options": {
      "B": "Quản trị nhận thức"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 15
  },
  {
    "id": 784,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, cùng với “quản trị nhận thức”, cần đẩy mạnh gì?",
    "options": {
      "A": "Chủ động kiến tạo thông tin"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 16
  },
  {
    "id": 785,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, phương châm xử lý các vấn đề về tư tưởng, kỷ luật và an toàn là gì?",
    "options": {
      "B": "Phòng ngừa là chính, phát hiện sớm, ngăn ngừa từ xa, giải quyết từ cơ sở"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 17
  },
  {
    "id": 786,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, phương châm nào xác định rõ vị trí của bốn mặt công tác?",
    "options": {
      "A": "Giáo dục chính trị là nền tảng; quản lý tư tưởng là trọng tâm; duy trì kỷ luật là khâu then chốt; bảo đảm an toàn là yêu cầu xuyên suốt"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 18
  },
  {
    "id": 787,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, một trong những chỉ tiêu về mô hình quản lý tư tưởng, kỷ luật là gì?",
    "options": {
      "B": "Mỗi trung đoàn, lữ đoàn và tương đương trở lên có ít nhất 1 mô hình"
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 19
  },
  {
    "id": 788,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, “6 rõ” gồm?",
    "options": {
      "A": "Rõ người, rõ việc, rõ thời gian, rõ trách nhiệm, rõ sản phẩm, rõ thẩm quyền"
    },
    "correct": "A",
    "source": "Chi thi, nghi quyet (380)/6. Cau hoi Chi thi so 76 (20).docx",
    "source_id": 20
  },
  {
    "id": 789,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc phát huy phẩm chất “Bộ đội Cụ Hồ” thời gian qua đã gắn chặt với nội dung nào sau đây?",
    "options": {
      "B": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 1
  },
  {
    "id": 790,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, chỉ đạo của Tổng Bí thư, Chủ tịch nước Tô Lâm được quán triệt gồm?",
    "options": {
      "B": "“2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa” và phương châm “5 vững”."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 2
  },
  {
    "id": 791,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, kết quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới là gì?",
    "options": {
      "B": "Tiêu chí bắt buộc đánh giá kết quả hoàn thành nhiệm vụ."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 3
  },
  {
    "id": 792,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc tu dưỡng, rèn luyện theo chuẩn mực “Bộ đội Cụ Hồ” phải trở thành?",
    "options": {
      "C": "Nhu cầu tự thân, ý thức tự giác, việc làm thường xuyên hằng ngày."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 4
  },
  {
    "id": 793,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải được cụ thể hóa phù hợp với nội dung nào sau đây?",
    "options": {
      "B": "Chức năng, nhiệm vụ của từng cơ quan, đơn vị và chức trách của mỗi quân nhân."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 5
  },
  {
    "id": 794,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, cán bộ, đảng viên trong toàn quân phải duy trì thường xuyên nội dung nào?",
    "options": {
      "C": "Đăng ký, cam kết tu dưỡng, rèn luyện, phấn đấu."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 6
  },
  {
    "id": 795,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, kết quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải được đánh giá bằng:",
    "options": {
      "B": "Bản lĩnh chính trị, lòng trung thành và kết quả hoàn thành nhiệm vụ."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 7
  },
  {
    "id": 796,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải kết hợp chặt chẽ với:",
    "options": {
      "B": "Công tác xây dựng, chỉnh đốn Đảng và xây dựng đơn vị vững mạnh toàn diện “mẫu mực, tiêu biểu”."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 8
  },
  {
    "id": 797,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, phương châm nêu gương của đội ngũ cán bộ là gì?",
    "options": {
      "B": "Trên trước, dưới sau."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 9
  },
  {
    "id": 798,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, nội dung nào được chú trọng trong xây dựng môi trường văn hóa quân sự?",
    "options": {
      "B": "Xây dựng các mối quan hệ chuẩn mực, đề cao dân chủ, giữ nghiêm kỷ luật."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 10
  },
  {
    "id": 799,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, cần kiên quyết đấu tranh phản bác?",
    "options": {
      "B": "Các luận điệu xuyên tạc, phủ nhận giá trị văn hóa \"Bộ đội Cụ Hồ\"."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 11
  },
  {
    "id": 800,
    "q": "Theo tinh thần Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, yếu tố quyết định chất lượng, hiệu quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới là:",
    "options": {
      "B": "Vai trò lãnh đạo của cấp ủy, tổ chức đảng và trách nhiệm của người chỉ huy, chính ủy, chính trị viên."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 12
  },
  {
    "id": 801,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, yêu cầu đối với công tác lãnh đạo là phải làm gì?",
    "options": {
      "B": "Chủ động, quyết liệt và sát thực tiễn."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 13
  },
  {
    "id": 802,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, nhiệm vụ đấu tranh trên không gian mạng nhằm mục tiêu trực tiếp nào?",
    "options": {
      "B": "Bảo vệ nền tảng tư tưởng của Đảng và giá trị văn hóa “Bộ đội Cụ Hồ”."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 14
  },
  {
    "id": 803,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, yêu cầu đối với công tác kiểm tra, giám sát là gì?",
    "options": {
      "B": "Tiến hành thường xuyên, kịp thời phát hiện và chấn chỉnh hạn chế."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 15
  },
  {
    "id": 804,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, việc đánh giá kết quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” cần bảo đảm yêu cầu nào?",
    "options": {
      "B": "Thực chất, khách quan, gắn với kết quả thực hiện nhiệm vụ."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 16
  },
  {
    "id": 805,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, việc biểu dương, khen thưởng điển hình tiên tiến nhằm mục đích chủ yếu nào?",
    "options": {
      "B": "Lan tỏa, nhân rộng những giá trị tốt đẹp."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 17
  },
  {
    "id": 806,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, nội dung nào thể hiện rõ yêu cầu nâng cao trách nhiệm của người đứng đầu?",
    "options": {
      "B": "Thực hiện nêu gương trong mọi hoạt động."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 18
  },
  {
    "id": 807,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, nội dung nào cần được coi là giải pháp quan trọng để xây dựng môi trường văn hóa quân sự lành mạnh?",
    "options": {
      "B": "Phát huy dân chủ đi đôi với giữ nghiêm kỷ luật."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 19
  },
  {
    "id": 808,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải được thực hiện theo yêu cầu nào?",
    "options": {
      "C": "Thường xuyên, liên tục, đồng bộ và hiệu quả."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/7. Cau hoi Chỉ thị 676 (20).docx",
    "source_id": 20
  },
  {
    "id": 809,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, việc học tập, thực hành tư tưởng, đạo đức, phương pháp, phong cách Hồ Chí Minh được xác định là nhiệm vụ như thế nào?",
    "options": {
      "C": "Là nhiệm vụ trọng yếu, thường xuyên của cả hệ thống chính trị và mỗi cán bộ, đảng viên."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 1
  },
  {
    "id": 810,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, di sản Chủ tịch Hồ Chí Minh để lại được xác định là gì?",
    "options": {
      "D": "Tài sản tinh thần vô giá của Đảng và dân tộc, là nguồn sức mạnh và động lực phát triển."
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 2
  },
  {
    "id": 811,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, quan điểm nào sau đây cần được thực hiện trong quá trình học tập và thực hành theo Bác?",
    "options": {
      "C": "Dân là gốc."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 3
  },
  {
    "id": 812,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, biểu hiện nào dưới đây cần được phát huy trong đội ngũ cán bộ, đảng viên?",
    "options": {
      "D": "Dám nghĩ, dám làm, dám chịu trách nhiệm vì lợi ích chung."
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 4
  },
  {
    "id": 813,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, đội ngũ cán bộ nào cần được kịp thời thay thế?",
    "options": {
      "C": "Cán bộ né tránh, đùn đẩy trách nhiệm, không dám quyết, không dám làm vì lợi ích chung."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 5
  },
  {
    "id": 814,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, một trong những yêu cầu quan trọng nhằm bảo vệ nền tảng tư tưởng của Đảng là gì?",
    "options": {
      "D": "Tích cực đấu tranh, phản bác các quan điểm sai trái, thù địch."
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 6
  },
  {
    "id": 815,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, trách nhiệm nêu gương phải trở thành phương thức lãnh đạo nhằm mục đích chủ yếu nào?",
    "options": {
      "C": "Tạo uy tín, lan tỏa trách nhiệm và củng cố niềm tin của Nhân dân đối với Đảng và hệ thống chính trị."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 7
  },
  {
    "id": 816,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, lực lượng nào phải đi đầu trong thực hiện trách nhiệm nêu gương?",
    "options": {
      "D": "Cán bộ, đảng viên, nhất là người đứng đầu và cán bộ lãnh đạo các cấp."
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 8
  },
  {
    "id": 817,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, nhóm tiêu chí đầu tiên trong đánh giá trách nhiệm nêu gương của cán bộ là gì?",
    "options": {
      "D": "Bản lĩnh chính trị, tư duy đổi mới và năng lực tổ chức thực hiện."
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 9
  },
  {
    "id": 818,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, yêu cầu “chủ động nắm bắt tình hình, dự báo chính xác, quyết sách kịp thời” thuộc nhóm tiêu chí nào?",
    "options": {
      "C": "Bản lĩnh chính trị, tư duy đổi mới và năng lực tổ chức thực hiện."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 10
  },
  {
    "id": 819,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, nội dung nào sau đây thuộc nhóm tiêu chí về đạo đức công vụ và kỷ luật thực thi?",
    "options": {
      "B": "Nói đi đôi với làm, làm việc khoa học, sâu sát thực tiễn, có kết quả và sản phẩm cụ thể."
    },
    "correct": "B",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 11
  },
  {
    "id": 820,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, tinh thần phục vụ Nhân dân của cán bộ, đảng viên được thể hiện rõ nhất qua yêu cầu nào?",
    "options": {
      "D": "Gần dân, trọng dân, hiểu dân, học dân, dựa vào dân và vì dân."
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 12
  },
  {
    "id": 821,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, việc nghiên cứu về tư tưởng, đạo đức, phương pháp, phong cách HCM cần tập trung làm rõ nội dung nào?",
    "options": {
      "C": "Giá trị lý luận và thực tiễn của Di sản Hồ Chí Minh trước yêu cầu mới."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 13
  },
  {
    "id": 822,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, nội dung nào cần được chú trọng để lan tỏa việc học tập, thực hành theo Bác?",
    "options": {
      "D": "Nhân rộng mô hình hay, cách làm sáng tạo, hiệu quả và biểu dương kịp thời điển hình tiên tiến."
    },
    "correct": "D",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 14
  },
  {
    "id": 823,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, một trong những căn cứ quan trọng để đánh giá hiệu quả học tập, thực hành theo Bác là gì?",
    "options": {
      "C": "Mức độ hài lòng của Nhân dân."
    },
    "correct": "C",
    "source": "Chi thi, nghi quyet (380)/8. Cau hoi Chỉ thị 07 (15).docx",
    "source_id": 15
  },
  {
    "id": 824,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội trong Quân đội ta được xác định như thế nào?",
    "options": {
      "C": "Sợi chỉ đỏ xuyên suốt, vừa là thuộc tính bản chất của quân đội cách mạng, vừa là cơ sở tạo nên giá trị văn hóa quân sự tốt đẹp."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 1
  },
  {
    "id": 825,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội là phẩm chất đặc biệt trong nhân cách của ai?",
    "options": {
      "B": "Người quân nhân cách mạng - “Bộ đội Cụ Hồ”."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 2
  },
  {
    "id": 826,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, Di chúc của Chủ tịch Hồ Chí Minh, cách tốt nhất để củng cố và phát triển sự đoàn kết, thống nhất của Đảng là gì?",
    "options": {
      "C": "Thực hành dân chủ rộng rãi, thường xuyên và nghiêm chỉnh tự phê bình và phê bình."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 3
  },
  {
    "id": 827,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội không chỉ cần có động cơ đúng mà còn phải có gì?",
    "options": {
      "B": "Phương pháp đúng."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 4
  },
  {
    "id": 828,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, theo Chủ tịch Hồ Chí Minh, “Thương yêu là giúp họ học tập thêm, tiến bộ thêm...” còn bao gồm nội dung nào?",
    "options": {
      "B": "Luôn chú ý công tác của họ, thấy khuyết điểm thì giúp sửa chữa ngay."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 5
  },
  {
    "id": 829,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, theo Chủ tịch Hồ Chí Minh, sống tình nghĩa trong quân đội luôn gắn liền với nội dung nào?",
    "options": {
      "B": "Đấu tranh tự phê bình và phê bình."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 6
  },
  {
    "id": 830,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, trong sự nghiệp đấu tranh giải phóng dân tộc, tình thương yêu đồng chí, đồng đội có ý nghĩa như thế nào?",
    "options": {
      "B": "Là động lực tinh thần to lớn giúp cán bộ, chiến sĩ vượt qua mọi khó khăn, gian khổ, hiểm nguy."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 7
  },
  {
    "id": 831,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, trong sự nghiệp xây dựng và bảo vệ Tổ quốc hiện nay, tình thương yêu đồng chí, đồng đội góp phần bảo đảm quân đội hoàn thành tốt chức năng nào?",
    "options": {
      "C": "Đội quân chiến đấu, đội quân công tác và đội quân lao động sản xuất."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 8
  },
  {
    "id": 832,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội hướng tới mục tiêu cao nhất là gì?",
    "options": {
      "B": "Phục vụ mục đích, lý tưởng cách mạng của Đảng, lợi ích dân tộc và hạnh phúc của nhân dân."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 9
  },
  {
    "id": 833,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, cán bộ các cấp cần thực hiện phương châm nào sau đây trong quản lý bộ đội?",
    "options": {
      "B": "Gần bộ đội, hiểu bộ đội, giúp đỡ bộ đội."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 10
  },
  {
    "id": 834,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, việc phát huy trách nhiệm nêu gương của cán bộ, đảng viên nhằm mục đích gì?",
    "options": {
      "B": "Tạo sức lan tỏa trong học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 11
  },
  {
    "id": 835,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, cán bộ chủ trì các cấp phải thực hiện tốt yêu cầu nào trong quan hệ với cấp dưới?",
    "options": {
      "B": "Gương mẫu, gần gũi, tôn trọng, yêu thương và giúp đỡ cấp dưới."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 12
  },
  {
    "id": 836,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, một trong những giải pháp quan trọng để củng cố tình thương yêu đồng chí, đồng đội là gì?",
    "options": {
      "B": "Kịp thời phát hiện, giải quyết các mâu thuẫn ngay từ cơ sở."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 13
  },
  {
    "id": 837,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, mục tiêu cuối cùng của các giải pháp đẩy mạnh học tập và làm theo tư tưởng Hồ Chí Minh về tình thương yêu đồng chí, đồng đội là gì?",
    "options": {
      "B": "Xây dựng Quân đội nhân dân Việt Nam vững mạnh về chính trị, tuyệt đối trung thành với Đảng, Nhà nước và Nhân dân, hoàn thành thắng lợi mọi nhiệm vụ được giao."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 14
  },
  {
    "id": 838,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, trong xây dựng tình thương yêu đồng chí, đồng đội, người cán bộ phải kiên quyết đấu tranh với biểu hiện gì?",
    "options": {
      "B": "Quan liêu, vô cảm, thiếu trách nhiệm đối với bộ đội."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 15
  },
  {
    "id": 839,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, biểu hiện cụ thể của nhu cầu tự thân là ý thức chủ động tự hoàn thiện mình và phát triển một cách bền vững. Theo đó, nội dung nào dưới đây phản ánh đầy đủ nhất biểu hiện của nhu cầu tự thân?",
    "options": {
      "B": "Sống có mục đích, có lý tưởng; ý thức tự học tập, tự rèn luyện; điều chỉnh hành vi theo chuẩn mực đạo đức, pháp luật; khát vọng vươn lên bằng lao động, cống hiến và tự chịu trách nhiệm về suy nghĩ, lời nói, hành động."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 16
  },
  {
    "id": 840,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, theo tư tưởng Hồ Chí Minh, việc học tập không phải để đối phó, lấy hình thức hay “đủ thủ tục”, mà trước hết nhằm mục đích gì?",
    "options": {
      "B": "Vì sự trưởng thành của bản thân, vì trách nhiệm trước Đảng, trước Nhân dân và mục tiêu của cách mạng."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 17
  },
  {
    "id": 841,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, Chủ tịch Hồ Chí Minh khẳng định: “Học hỏi là một việc phải tiếp tục suốt đời. Suốt đời phải gắn liền lý luận với công tác thực tế...”. Nội dung trên nhấn mạnh yêu cầu nào đối với mỗi cán bộ, đảng viên?",
    "options": {
      "B": "Học tập phải diễn ra thường xuyên, suốt đời và gắn lý luận với thực tiễn công tác."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 18
  },
  {
    "id": 842,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, nhu cầu tự thân chính là động lực nội sinh để mỗi cán bộ, đảng viên tự giác rèn luyện đạo đức cách mạng. Theo đồng chí, việc rèn luyện đó trước hết phải bắt đầu từ đâu?",
    "options": {
      "B": "Từ suy nghĩ, động cơ và việc làm hằng ngày."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 19
  },
  {
    "id": 843,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân góp phần xây dựng Đảng ta như thế nào?",
    "options": {
      "B": "Ngày càng trong sạch, vững mạnh, đáp ứng yêu cầu sự nghiệp cách mạng trong tình hình mới."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 20
  },
  {
    "id": 844,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân cần kiên quyết đấu tranh chống biểu hiện nào trong nội bộ?",
    "options": {
      "B": "Chủ nghĩa cá nhân, suy thoái tư tưởng chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa”."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 21
  },
  {
    "id": 845,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân cần gắn chặt với nhiệm vụ nào?",
    "options": {
      "A": "Xây dựng đội ngũ cán bộ, đảng viên có phẩm chất, năng lực, uy tín ngang tầm nhiệm vụ."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 22
  },
  {
    "id": 846,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo Bác trở thành nhu cầu tự thân, cấp ủy các cấp cần duy trì thường xuyên nội dung nào?",
    "options": {
      "B": "Duy trì tự phê bình, phê bình và thực hiện tốt việc “tự soi, tự sửa” trong cán bộ, đảng viên."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 23
  },
  {
    "id": 847,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân phải được cụ thể hóa vào đâu?",
    "options": {
      "A": "Từng vị trí công tác, chức trách, nhiệm vụ và quá trình học tập, rèn luyện của cán bộ, đảng viên."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 24
  },
  {
    "id": 848,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo Bác trở thành nhu cầu tự thân, cán bộ chủ trì đơn vị giữ vai trò như thế nào?",
    "options": {
      "B": "Gương mẫu trong học tập, tu dưỡng, rèn luyện và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/1. Cau hoi chuyen de Học tập theo Bac (25).docx",
    "source_id": 25
  },
  {
    "id": 849,
    "q": "Qua nghiên cứu chuyên đề năm 2026, để việc thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại đạt hiệu quả, yêu cầu có tính nguyên tắc đầu tiên là gì?",
    "options": {
      "B": "Bảo đảm sự lãnh đạo, chỉ đạo thống nhất của cấp ủy, tổ chức đảng, chính ủy, chính trị viên, người chỉ huy và cơ quan chính trị các cấp."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 1
  },
  {
    "id": 850,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu trực tiếp của việc nâng cao nhận thức, trách nhiệm của quân nhân trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "B": "Hình thành sự thống nhất về nhận thức, ý chí và hành động trong tổ chức thực hiện Bộ tiêu chí."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 2
  },
  {
    "id": 851,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải được tiến hành theo yêu cầu nào dưới đây?",
    "options": {
      "B": "Thực hiện thường xuyên, liên tục, gắn với mọi hoạt động của cơ quan, đơn vị."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 3
  },
  {
    "id": 852,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yếu tố nào quyết định chất lượng tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại ở mỗi cơ quan, đơn vị?",
    "options": {
      "B": "Nhận thức và trách nhiệm của cấp ủy, chỉ huy cùng toàn thể quân nhân."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 4
  },
  {
    "id": 853,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại cần tránh biểu hiện nào sau đây?",
    "options": {
      "B": "Giao khoán trách nhiệm cho cơ quan chính trị hoặc một bộ phận thực hiện."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 5
  },
  {
    "id": 854,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu quan trọng trong tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải bảo đảm mối quan hệ như thế nào giữa nhận thức và hành động?",
    "options": {
      "B": "Nhận thức đúng phải được chuyển hóa thành hành động cụ thể trong thực hiện chức trách, nhiệm vụ."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 6
  },
  {
    "id": 855,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải được gắn chặt với nội dung nào để bảo đảm tính thiết thực?",
    "options": {
      "B": "Thực hiện nhiệm vụ chính trị trung tâm của cơ quan, đơn vị."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 7
  },
  {
    "id": 856,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cấp ủy, tổ chức đảng cần tập trung lãnh đạo nội dung nào để bảo đảm Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại được triển khai thống nhất?",
    "options": {
      "B": "Quán triệt, cụ thể hóa nghị quyết và tổ chức thực hiện chặt chẽ, đồng bộ."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 8
  },
  {
    "id": 857,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại, trách nhiệm của người đứng đầu được thể hiện rõ nhất ở nội dung nào?",
    "options": {
      "B": "Nêu gương, trực tiếp lãnh đạo, tổ chức, kiểm tra và chịu trách nhiệm về kết quả thực hiện"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 9
  },
  {
    "id": 858,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại chỉ đạt hiệu quả khi bảo đảm yêu cầu nào sau đây?",
    "options": {
      "B": "Phát huy sức mạnh tổng hợp của các tổ chức, lực lượng và từng quân nhân trong toàn đơn vị."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 10
  },
  {
    "id": 859,
    "q": "Qua nghiên cứu chuyên đề năm 2026, để bảo đảm thực hiện hiệu quả Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại, cấp ủy, tổ chức đảng cần tập trung đổi mới nội dung nào trong công tác lãnh đạo?",
    "options": {
      "B": "Ban hành nghị quyết chuyên đề, cụ thể hóa mục tiêu, chỉ tiêu và giải pháp phù hợp với đặc điểm, nhiệm vụ của từng cơ quan, đơn vị."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 11
  },
  {
    "id": 860,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu đặt ra đối với cấp ủy trong lãnh đạo thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "B": "Kết hợp chặt chẽ giữa ban hành nghị quyết, tổ chức thực hiện, kiểm tra và sơ kết, tổng kết."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 12
  },
  {
    "id": 861,
    "q": "Qua nghiên cứu chuyên đề năm 2026, vì sao việc cụ thể hóa nội dung Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại trong nghị quyết lãnh đạo của cấp ủy có ý nghĩa đặc biệt quan trọng như thế nào?",
    "options": {
      "B": "Để chuyển yêu cầu của Bộ tiêu chí thành mục tiêu, nhiệm vụ và biện pháp phù hợp với thực tiễn của từng đơn vị."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 13
  },
  {
    "id": 862,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong quá trình lãnh đạo thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại, cấp ủy cần tránh biểu hiện nào?",
    "options": {
      "B": "Buông lỏng lãnh đạo hoặc khoán trắng cho cơ quan chức năng."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 14
  },
  {
    "id": 863,
    "q": "Qua nghiên cứu chuyên đề năm 2026, người chỉ huy phát huy vai trò trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại chủ yếu thông qua nội dung nào?",
    "options": {
      "B": "Tổ chức, điều hành, kiểm tra và trực tiếp chịu trách nhiệm về kết quả thực hiện trong đơn vị."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 15
  },
  {
    "id": 864,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu đối với chính ủy, chính trị viên trong tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "B": "Chủ trì công tác đảng, công tác chính trị; phối hợp với người chỉ huy tạo sự thống nhất trong lãnh đạo và tổ chức thực hiện."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 16
  },
  {
    "id": 865,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cơ quan chính trị các cấp cần tập trung tham mưu nội dung nào để nâng cao chất lượng thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại?",
    "options": {
      "B": "Tham mưu công tác đảng, công tác chính trị; đẩy mạnh tuyên truyền, giáo dục, kiểm tra và hướng dẫn tổ chức thực hiện Bộ tiêu chí."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 17
  },
  {
    "id": 866,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc kiểm tra thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại cần tập trung vào yêu cầu nào?",
    "options": {
      "B": "Kịp thời phát hiện hạn chế, xác định nguyên nhân và đề ra biện pháp khắc phục, nâng cao chất lượng thực hiện Bộ tiêu chí."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 18
  },
  {
    "id": 867,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc sơ kết, tổng kết thực hiện Bộ tiêu chí nhằm mục đích chủ yếu nào?",
    "options": {
      "B": "Đánh giá đúng thực chất kết quả, rút kinh nghiệm và bổ sung giải pháp nâng cao chất lượng thực hiện."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 19
  },
  {
    "id": 868,
    "q": "Qua nghiên cứu chuyên đề năm 2026, thước đo quan trọng nhất đánh giá hiệu quả lãnh đạo, chỉ đạo thực hiện Bộ tiêu chí là gì?",
    "options": {
      "B": "Mức độ chuyển biến về nhận thức, trách nhiệm và kết quả hoàn thành nhiệm vụ của cơ quan, đơn vị."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 20
  },
  {
    "id": 869,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu xuyên suốt trong đổi mới công tác tuyên truyền, giáo dục về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "B": "Không ngừng đổi mới, hoàn thiện và nhân rộng các hình thức, phương pháp tuyên truyền theo hướng phong phú, hấp dẫn, dễ hiểu, dễ vận dụng."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 21
  },
  {
    "id": 870,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc đưa nội dung thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại vào giáo dục chính trị có ý nghĩa chủ yếu nào?",
    "options": {
      "B": "Hình thành nhận thức thường xuyên, liên tục của quân nhân thông qua các hoạt động giáo dục chính trị, tư tưởng."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 22
  },
  {
    "id": 871,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tại sao việc giáo dục về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại không chỉ tiến hành trong giờ học chính trị?",
    "options": {
      "B": "Vì nhận thức về Bộ tiêu chí cần được củng cố thường xuyên thông qua quá trình thực hiện chức trách, nhiệm vụ và các hoạt động thực tiễn của đơn vị."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 23
  },
  {
    "id": 872,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu đối với việc sử dụng các phương tiện thông tin hiện đại trong tuyên truyền thực hiện Bộ tiêu chí là gì?",
    "options": {
      "B": "Tăng sức thuyết phục, định hướng đúng nhận thức và trách nhiệm của quân nhân."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 24
  },
  {
    "id": 873,
    "q": "Qua nghiên cứu chuyên đề năm 2026, vì sao việc tuyên truyền về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải gắn với Phong trào Thi đua Quyết thắng và các cuộc vận động?",
    "options": {
      "B": "Tạo sự lan tỏa rộng rãi, thu hút quân nhân tham gia, đồng thời chuyển yêu cầu của Bộ tiêu chí từ nhận thức thành động lực và hành động cụ thể trong thực hiện nhiệm vụ."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 25
  },
  {
    "id": 874,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc thường xuyên cổ vũ, động viên quân nhân trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại nhằm mục đích chủ yếu nào?",
    "options": {
      "B": "Khơi dậy tinh thần trách nhiệm, phát huy tính tích cực, chủ động, sáng tạo và tự giác của quân nhân trong thực hiện các yêu cầu của Bộ tiêu chí."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 26
  },
  {
    "id": 875,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tiêu chí đánh giá hiệu quả của công tác tuyên truyền, giáo dục về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "B": "Mức độ chuyển biến về nhận thức, trách nhiệm và hành động của quân nhân trong thực hiện nhiệm vụ."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 27
  },
  {
    "id": 876,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu cốt lõi của việc phát huy sức mạnh tổng hợp trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "B": "Phát huy đầy đủ vai trò, trách nhiệm của mọi tổ chức, mọi lực lượng và từng quân nhân trong tổ chức thực hiện."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 28
  },
  {
    "id": 877,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc phát huy sức mạnh tổng hợp trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải bảo đảm nguyên tắc nào?",
    "options": {
      "B": "Phát huy đầy đủ vai trò, trách nhiệm của mọi tổ chức, mọi lực lượng và từng quân nhân trong tổ chức thực hiện."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 29
  },
  {
    "id": 878,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yếu tố nào bảo đảm việc thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại đạt hiệu quả bền vững?",
    "options": {
      "C": "Sự kết hợp đồng bộ giữa lãnh đạo, tổ chức thực hiện, kiểm tra, đánh giá và phát huy tính tự giác của quân nhân."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/2. Cau hoi chuyen de bo tieu chi Quan doi (30).docx",
    "source_id": 30
  },
  {
    "id": 879,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu sâu xa của việc giúp Nhân dân phát triển kinh tế, giảm nghèo không chỉ nhằm cải thiện đời sống mà còn nhằm làm gì?",
    "options": {
      "D": "Củng cố niềm tin của Nhân dân, xây dựng mối quan hệ gắn bó máu thịt giữa Nhân dân với LLVT."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 1
  },
  {
    "id": 880,
    "q": "Qua nghiên cứu chuyên đề năm 2026, ý nghĩa chiến lược của việc xây dựng hệ thống chính trị cơ sở vững mạnh là gì?",
    "options": {
      "C": "Tạo “lá chắn” chính trị từ cơ sở, chủ động phòng ngừa nguy cơ mất ổn định ngay từ địa bàn."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 2
  },
  {
    "id": 881,
    "q": "Qua nghiên cứu chuyên đề năm 2026, bản chất của các mô hình “Dân vận khéo” là gì?",
    "options": {
      "C": "Gắn công tác dân vận với giải quyết trực tiếp nhu cầu, lợi ích thiết thực của Nhân dân."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 3
  },
  {
    "id": 882,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc hỗ trợ sinh kế lâu dài cho đồng bào có ý nghĩa nổi bật nào sau đây?",
    "options": {
      "D": "Góp phần làm thất bại âm mưu lợi dụng đói nghèo để kích động, chia rẽ khối đại đoàn kết toàn dân tộc."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 4
  },
  {
    "id": 883,
    "q": "Qua nghiên cứu chuyên đề năm 2026, để giải quyết các điểm nóng về an ninh nông thôn đạt hiệu quả bền vững cần thực hiện biện pháp nào sau đây?",
    "options": {
      "D": "Kết hợp giữa công tác dân vận với các biện pháp quốc phòng, an ninh và phát huy vai trò của Nhân dân."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 5
  },
  {
    "id": 884,
    "q": "Qua nghiên cứu chuyên đề năm 2026, bản chất của “thế trận lòng dân” nhằm mục đích nào sau đây?",
    "options": {
      "C": "Xây dựng niềm tin, sự đồng thuận và mối quan hệ gắn bó giữa Nhân dân với Đảng, Nhà nước và Quân đội."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 6
  },
  {
    "id": 885,
    "q": "Qua nghiên cứu chuyên đề năm 2026, ý nghĩa lớn nhất của hoạt động giúp dân trong thiên tai, dịch bệnh là gì?",
    "options": {
      "D": "Củng cố niềm tin của Nhân dân, tăng cường đoàn kết quân - dân và khẳng định bản chất “Đội quân công tác”."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 7
  },
  {
    "id": 886,
    "q": "Qua nghiên cứu chuyên đề năm 2026, hạn chế về năng lực nói tiếng dân tộc của một bộ phận cán bộ ảnh hưởng trực tiếp đến nội dung gì?",
    "options": {
      "D": "Hiệu quả tuyên truyền, vận động, nắm bắt tâm tư và tạo dựng niềm tin với đồng bào dân tộc thiểu số."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 8
  },
  {
    "id": 887,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu nâng cao chất lượng công tác dân vận trên địa bàn trọng điểm về quốc phòng, an ninh trước hết phải hướng vào mục tiêu nào?",
    "options": {
      "C": "Tăng cường mối quan hệ mật thiết giữa Đảng với Nhân dân, xây dựng khối đại đoàn kết toàn dân tộc và “thế trận lòng dân” vững chắc."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 9
  },
  {
    "id": 888,
    "q": "Qua nghiên cứu chuyên đề năm 2026, vì sao việc quán triệt đường lối, chủ trương của Đảng được xác định là yêu cầu có ý nghĩa quyết định đối với công tác dân vận?",
    "options": {
      "D": "Vì là cơ sở để xác định đúng chủ trương, nội dung và phương thức tiến hành công tác dân vận phù hợp với đặc điểm từng địa bàn."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 10
  },
  {
    "id": 889,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc nghiên cứu, nắm chắc đặc điểm từng địa bàn nhằm mục đích chủ yếu nào?",
    "options": {
      "C": "Lựa chọn chủ trương, biện pháp lãnh đạo, chỉ đạo và nội dung dân vận sát với thực tiễn."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 11
  },
  {
    "id": 890,
    "q": "Qua nghiên cứu chuyên đề năm 2026, công tác dân vận chỉ thực sự phát huy hiệu quả khi nào?",
    "options": {
      "A": "Khi được tổ chức với lực lượng phù hợp, bảo đảm đầy đủ cán bộ và các điều kiện cần thiết D. Khi xuất phát từ thực tiễn, phù hợp với đặc điểm từng địa bàn và từng nhóm đối tượng, bảo đảm thiết thực, hiệu quả."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 12
  },
  {
    "id": 891,
    "q": "Qua nghiên cứu chuyên đề năm 2026, điều gì sẽ xảy ra nếu cán bộ làm công tác dân vận thiếu hiểu biết về phong tục, tập quán của đồng bào?",
    "options": {
      "D": "Hiệu quả tuyên truyền, vận động và tạo dựng niềm tin với đồng bào sẽ giảm sút."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 13
  },
  {
    "id": 892,
    "q": "Qua nghiên cứu chuyên đề năm 2026, xây dựng “thế trận lòng dân” vững chắc được coi là nền tảng trực tiếp để làm gì?",
    "options": {
      "D": "Giữ vững ổn định chính trị, củng cố quốc phòng, an ninh từ cơ sở."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 14
  },
  {
    "id": 893,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung nào phản ánh đúng nhất tư tưởng Hồ Chí Minh về cán bộ làm công tác dân vận?",
    "options": {
      "D": "Cán bộ làm công tác dân vận phải sâu sát thực tiễn, gần dân, hiểu dân và trực tiếp hành động, không chỉ dừng ở lời nói."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 15
  },
  {
    "id": 894,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu đổi mới công tác dân vận trong tình hình mới trước hết đòi hỏi cấp ủy, chỉ huy các cấp phải thay đổi theo hướng nào?",
    "options": {
      "D": "Đổi mới tư duy lãnh đạo, lựa chọn nội dung, hình thức và phương pháp dân vận phù hợp với đặc điểm từng địa bàn, từng đối tượng."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 16
  },
  {
    "id": 895,
    "q": "Qua nghiên cứu chuyên đề năm 2026, bản chất của việc phát huy vai trò người có uy tín trong đồng bào dân tộc, tôn giáo là gì?",
    "options": {
      "D": "Tạo sức lan tỏa trong cộng đồng, nâng cao hiệu quả tuyên truyền, vận động và củng cố khối đại đoàn kết toàn dân tộc."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 17
  },
  {
    "id": 896,
    "q": "Qua nghiên cứu chuyên đề năm 2026, vì sao công tác dân vận phải gắn chặt với nhiệm vụ phát triển kinh tế - xã hội của địa phương?",
    "options": {
      "D": "Vì lợi ích thiết thực của Nhân dân là cơ sở quan trọng để củng cố niềm tin, tăng cường sự đồng thuận xã hội và xây dựng mối quan hệ gắn bó quân - dân."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 18
  },
  {
    "id": 897,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong xử lý các vấn đề phức tạp về dân tộc, tôn giáo, yêu cầu nào cần được ưu tiên?",
    "options": {
      "C": "Kiên trì tuyên truyền, đối thoại, giải quyết hài hòa giữa yêu cầu quản lý nhà nước và quyền, lợi ích hợp pháp của Nhân dân."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 19
  },
  {
    "id": 898,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yếu tố nào quyết định tính bền vững của “thế trận lòng dân”?",
    "options": {
      "D": "Sự đồng thuận của Nhân dân, niềm tin đối với Đảng, Nhà nước và Quân đội được xây dựng bằng những việc làm thiết thực, lâu dài."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 20
  },
  {
    "id": 899,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc phối hợp giữa lực lượng vũ trang với cấp ủy, chính quyền địa phương cần bảo đảm yêu cầu nào?",
    "options": {
      "D": "Thường xuyên, đồng bộ, thống nhất, phát huy sức mạnh tổng hợp của cả hệ thống chính trị."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 21
  },
  {
    "id": 900,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong điều kiện các thế lực thù địch gia tăng chống phá trên không gian mạng, nội dung cần ưu tiên trong công tác dân vận?",
    "options": {
      "C": "Nâng cao khả năng định hướng dư luận, tuyên truyền, đấu tranh phản bác thông tin sai trái và củng cố niềm tin của Nhân dân."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 22
  },
  {
    "id": 901,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nếu cấp ủy, chỉ huy đơn vị chỉ coi công tác dân vận là nhiệm vụ của cơ quan chính trị thì hệ quả nào dễ xảy ra nhất?",
    "options": {
      "D": "Không phát huy được sức mạnh tổng hợp của cả hệ thống, làm giảm hiệu quả công tác dân vận và xây dựng \"thế trận lòng dân\"."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 23
  },
  {
    "id": 902,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong lãnh đạo công tác dân vận, nguyên tắc nào bảo đảm tính bền vững để đạt được kết quả cao nhất?",
    "options": {
      "D": "Kết hợp giải quyết những vấn đề trước mắt với chăm lo xây dựng cơ sở chính trị và phát triển địa bàn lâu dài."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 24
  },
  {
    "id": 903,
    "q": "Qua nghiên cứu chuyên đề năm 2026, vì sao việc nắm chắc tình hình Nhân dân được coi là khâu mở đầu của công tác dân vận?",
    "options": {
      "D": "Để chủ động dự báo tình hình, lựa chọn đúng nội dung, đối tượng và biện pháp vận động phù hợp."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 25
  },
  {
    "id": 904,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khi xuất hiện vụ việc phức tạp liên quan đến dân tộc, tôn giáo, giải pháp nào cần được ưu tiên?",
    "options": {
      "D": "Phối hợp chặt chẽ giữa các lực lượng, kiên trì đối thoại, tuyên truyền, giải quyết đúng chính sách, đúng pháp luật, không để hình thành điểm nóng."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 26
  },
  {
    "id": 905,
    "q": "Qua nghiên cứu chuyên đề năm 2026, điểm khác biệt cơ bản giữa công tác dân vận trong tình hình mới với trước đây là gì?",
    "options": {
      "D": "Phải chủ động thích ứng với những biến đổi về xã hội, không gian mạng và phương thức chống phá của các thế lực thù địch."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 27
  },
  {
    "id": 906,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong xây dựng “thế trận lòng dân”, yếu tố nào giữ vai trò quyết định lâu dài?",
    "options": {
      "D": "Niềm tin của Nhân dân đối với sự lãnh đạo của Đảng và vai trò của Quân đội được củng cố bằng kết quả thực tiễn."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 28
  },
  {
    "id": 907,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khi đánh giá chất lượng công tác dân vận, tiêu chí quan trọng nhất?",
    "options": {
      "D": "Mức độ chuyển biến về nhận thức, sự đồng thuận của Nhân dân và sự ổn định chính trị - xã hội trên địa bàn."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 29
  },
  {
    "id": 908,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trước sự chống phá ngày càng tinh vi của các thế lực thù địch, yêu cầu đặt ra đối với công tác dân vận là?",
    "options": {
      "D": "Chủ động dự báo tình hình, phát hiện sớm, xử lý từ cơ sở và kết hợp chặt chẽ giữa công tác dân vận với nhiệm vụ quốc phòng, an ninh."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/3. Cau hoi chuyen de tang cuong cong tac dan van(30).docx",
    "source_id": 30
  },
  {
    "id": 909,
    "q": "Qua nghiên cứu chuyên đề năm 2026, bên cạnh nhiệm vụ huấn luyện, sẵn sàng chiến đấu để giữ vững độc lập, chủ quyền, Quân đội còn giữ vai trò nòng cốt trong việc thực hiện nhiệm vụ nào sau đây?",
    "options": {
      "A": "Tiên phong thực hiện kết hợp quốc phòng với phát triển kinh tế - xã hội, xem đây là phương thức quan trọng xây dựng tiềm lực quốc phòng toàn dân."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 1
  },
  {
    "id": 910,
    "q": "Qua nghiên cứu chuyên đề năm 2026, quan niệm về việc Quân đội tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế - xã hội trong kỷ nguyên mới được hiểu như thế nào?",
    "options": {
      "A": "Là tổng thể hoạt động thực hiện chức năng, nhiệm vụ cơ bản nhằm gắn kết và phát huy sức mạnh quốc phòng, gia tăng tiềm lực cho quốc gia."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 2
  },
  {
    "id": 911,
    "q": "Qua nghiên cứu chuyên đề năm 2026, xuyên suốt tiến trình lịch sử từ khi thành lập đến nay, việc tham gia lao động sản xuất của Quân đội mang lại ý nghĩa thiết thực nào?",
    "options": {
      "A": "Tự bảo đảm một phần nhu cầu vật chất, giảm bớt gánh nặng cho nền kinh tế, nâng cao sức mạnh chiến đấu của Quân đội trong mọi tình huống."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 3
  },
  {
    "id": 912,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong những năm qua, việc các Đoàn KT-QP tổ chức quy hoạch, bố trí lại dân cư, hình thành các cụm dân cư tập trung trên vành đai biên giới mang lại giá trị chiến lược gì?",
    "options": {
      "A": "Tạo thế bố trí chiến lược mới, củng cố “thế trận lòng dân”, tạo nền tảng vững chắc để xây dựng nền quốc phòng toàn dân trên địa bàn."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 4
  },
  {
    "id": 913,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc phát triển các ngành dịch vụ, doanh nghiệp lưỡng dụng trong Quân đội đóng góp vai trò quan trọng như thế nào?",
    "options": {
      "A": "Tránh lãng phí nguồn lực, giảm chi ngân sách nhà nước, đồng thời tiếp nhận, chuyển giao công nghệ để tăng cường tiềm lực quốc phòng."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 5
  },
  {
    "id": 914,
    "q": "Theo tư tưởng Hồ Chí Minh về mối quan hệ biện chứng giữa kinh tế và quốc phòng, Người đã khẳng định kinh tế là nền tảng vật chất quyết định sức mạnh quốc phòng, còn quốc phòng là điều kiện bảo đảm cho kinh tế phát triển. Mối quan hệ này được Bác tóm gọn qua câu nói nào?",
    "options": {
      "A": "“Cung cấp đủ súng đạn, đủ cơm áo cho bộ đội thì bộ đội mới đánh thắng trận, điều đó rất rõ ràng dễ hiểu” và “Đánh giặc, trước hết phải có vũ khí”."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 6
  },
  {
    "id": 915,
    "q": "Báo cáo chính trị trình Đại hội đại biểu toàn quốc lần thứ XIV của Đảng (năm 2026) tiếp tục khẳng định nhiệm vụ trọng tâm nào trong việc kết hợp phát triển kinh tế với củng cố quốc phòng, an ninh trong bối cảnh đất nước bước vào kỷ nguyên mới?",
    "options": {
      "A": "Tăng cường tiềm lực quốc gia; kết hợp chặt chẽ, hiệu quả giữa quốc phòng, an ninh với phát triển kinh tế, văn hóa, xã hội và đối ngoại."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 7
  },
  {
    "id": 916,
    "q": "Nghị quyết số 44-NQ/TW ngày 24/11/2023 của Ban Chấp hành Trung ương Đảng khóa XIII về “Chiến lược bảo vệ Tổ quốc trong tình hình mới” đã xác định quan điểm chỉ đạo nào sau đây về mối quan hệ giữa kinh tế và quốc phòng?",
    "options": {
      "A": "Xây dựng nền kinh tế độc lập, tự chủ, bền vững; kết hợp chặt chẽ phát triển kinh tế - xã hội với tăng cường quốc phòng, an ninh."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 8
  },
  {
    "id": 917,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong cuộc kháng chiến chống thực dân Pháp, thực tiễn Quân đội ta tham gia lao động sản xuất và xây dựng kinh tế kết hợp với quốc phòng đã được thể hiện sinh động qua những hoạt động cơ bản nào?",
    "options": {
      "A": "Bộ đội vừa chiến đấu vừa tăng gia sản xuất, xây dựng hàng trăm cơ sở quân giới, công binh xưởng để tự bảo đảm hậu cần, vũ khí."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 9
  },
  {
    "id": 918,
    "q": "Sau thắng lợi của cuộc kháng chiến chống Mỹ, cứu nước (năm 1975), Quân đội ta đã tiếp tục phát huy mạnh mẽ vai trò tiên phong trên mặt trận lao động sản xuất qua việc đảm nhận các công trình trọng điểm nào của đất nước?",
    "options": {
      "A": "Trực tiếp tham gia khai hoang, xây dựng các nông trường và thi công các công trình như đường sắt Thống Nhất, thủy điện Hòa Bình."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 10
  },
  {
    "id": 919,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung thứ nhất về Quân đội tham gia lao động sản xuất trong tình hình mới được tài liệu xác định là tiên phong trong xây dựng mô hình nào dưới đây nhằm kết hợp phát triển kinh tế - xã hội với củng cố quốc phòng?",
    "options": {
      "A": "Tiên phong trong xây dựng các khu kinh tế - quốc phòng trên các địa bàn chiến lược, biên giới, hải đảo của Tổ quốc."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 11
  },
  {
    "id": 920,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung thứ hai trong nhiệm vụ Quân đội tham gia lao động sản xuất tình hình mới là tiên phong trong phát triển công nghiệp quốc phòng. Định hướng phát triển công nghiệp quốc phòng được xác định như thế nào?",
    "options": {
      "A": "Phát triển theo hướng hiện đại, lưỡng dụng, gắn kết chặt chẽ với công nghiệp dân sinh, hình thành hệ thống sản xuất tự chủ."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 12
  },
  {
    "id": 921,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nhằm bảo đảm sự hài hòa giữa hiệu quả kinh tế và thực hiện nhiệm vụ quốc phòng, nội dung thứ ba trong nhiệm vụ Quân đội tham gia lao động sản xuất yêu cầu các doanh nghiệp quân đội phải vận hành theo cơ chế nào?",
    "options": {
      "A": "Tiên phong phát triển doanh nghiệp quân đội gắn kết nhiệm vụ sản xuất kinh doanh với quốc phòng, vận hành theo cơ chế thị trường định hướng XHCN."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 13
  },
  {
    "id": 922,
    "q": "Qua nghiên cứu chuyên đề năm 2026, hoạt động tăng gia sản xuất ở các đơn vị quân đội không chỉ bảo đảm đời sống vật chất, tinh thần cho bộ đội mà còn mang ý nghĩa chiến lược quan trọng nào đối với củng cố tiềm lực quốc phòng?",
    "options": {
      "A": "Thể hiện tinh thần tự lực, tự cường, củng cố “thế trận lòng dân”, tăng cường mối quan hệ gắn bó máu thịt giữa quân và dân."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 14
  },
  {
    "id": 923,
    "q": "Qua nghiên cứu chuyên đề năm 2026, hình thức tham gia lao động sản xuất trực tiếp của Quân đội nhân dân Việt Nam bao gồm những tổ chức, lực lượng cơ bản nào dưới đây?",
    "options": {
      "A": "Các đoàn kinh tế - quốc phòng, các tổng công ty, công ty, tập đoàn và doanh nghiệp thuộc Bộ Quốc phòng trực tiếp sản xuất."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 15
  },
  {
    "id": 924,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc cán bộ, chiến sĩ và người lao động trực tiếp tham gia vào các hoạt động lao động sản xuất trong các doanh nghiệp, đoàn kinh tế - quốc phòng giúp mang lại sự chuyển biến quan trọng nào về mặt tư tưởng?",
    "options": {
      "A": "Nhận thức sâu sắc vai trò kép của Quân đội, xóa bỏ tư tưởng trông chờ, ỷ lại, khẳng định tính chính danh của người lính Cụ Hồ."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 16
  },
  {
    "id": 925,
    "q": "Qua nghiên cứu chuyên đề năm 2026, hình thức tham gia lao động sản xuất gián tiếp của Quân đội nhân dân Việt Nam bao gồm những hoạt động phong phú và thiết thực nào dưới đây?",
    "options": {
      "A": "Tăng gia sản xuất tại đơn vị, giúp nhân dân phòng chống thiên tai, xóa đói giảm nghèo, xây dựng nông thôn mới trên địa bàn."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 17
  },
  {
    "id": 926,
    "q": "Qua nghiên cứu chuyên đề năm 2026, giải pháp quan trọng hàng đầu, có ý nghĩa quyết định thắng lợi đối với việc nâng cao hiệu quả thực hiện nhiệm vụ Quân đội tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế - xã hội trong tình hình mới là gì?",
    "options": {
      "A": "Tăng cường sự lãnh đạo, chỉ đạo của cấp ủy, chỉ huy các cấp đối với nhiệm vụ tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 18
  },
  {
    "id": 927,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cấp ủy, chỉ huy các cấp trong toàn quân cần chủ động kiên quyết đấu tranh, phản bác các quan điểm sai trái, xuyên tạc của các thế lực thù địch nhằm mục đích đen tối nào sau đây?",
    "options": {
      "A": "Phản bác quan điểm đòi tách rời kinh tế với quốc phòng, phủ nhận chức năng “đội quân lao động sản xuất”, đòi “phi chính trị hóa” Quân đội."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 19
  },
  {
    "id": 928,
    "q": "Qua nghiên cứu chuyên đề năm 2026, để nâng cao hiệu quả hoạt động của các Khu kinh tế - quốc phòng trên các hướng biển, đảo và biên giới đất liền, các cơ quan chức năng của Bộ Quốc phòng cần chú trọng ưu tiên thực hiện giải pháp nào?",
    "options": {
      "A": "Phân kỳ đầu tư, quản lý sử dụng hiệu quả nguồn lực, đầu tư có trọng tâm trọng điểm, lồng ghép dự án với các chương trình quốc gia."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 20
  },
  {
    "id": 929,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mô hình tổ chức sản xuất tại các Khu kinh tế - quốc phòng được định hướng tổ chức lại như thế nào để phát huy tốt nhất hiệu quả hỗ trợ nhân dân vùng biên giới, vùng đặc biệt khó khăn?",
    "options": {
      "A": "Tập trung ưu tiên phát triển kinh tế hộ gia đình; đẩy mạnh dịch vụ hai đầu giúp dân phát triển kinh tế, giữ vai trò “bà đỡ” cho dân."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 21
  },
  {
    "id": 930,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong quá trình tái cơ cấu và phát triển sản xuất kinh doanh, các doanh nghiệp quân đội được yêu cầu phải tuân thủ nghiêm ngặt nguyên tắc cốt lõi nào dưới đây để tránh rủi ro tài chính và tiêu cực?",
    "options": {
      "A": "Tập trung nâng cao hiệu quả ngành nghề chính, không đầu tư dàn trải, không kinh doanh ngoài ngành và lĩnh vực nhạy cảm dễ tiêu cực."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 22
  },
  {
    "id": 931,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nhằm nâng cao hiệu quả quản trị doanh nghiệp quân đội theo hướng hiện đại, Chính phủ và Quân ủy Trung ương đã chỉ đạo thực hiện đổi mới quan trọng nào trong công tác quản lý?",
    "options": {
      "A": "Sớm thực hiện tách chức năng quản lý nhà nước, đại diện chủ sở hữu vốn của các cơ quan với hoạt động sản xuất kinh doanh của doanh nghiệp."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 23
  },
  {
    "id": 932,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đối với các đơn vị thường trực và đơn vị sự nghiệp công lập trong Quân đội, việc tổ chức hoạt động tăng gia sản xuất và làm kinh tế phải bảo đảm nguyên tắc căn bản nào?",
    "options": {
      "A": "Phát huy thế mạnh tại chỗ, phục vụ cải thiện đời sống bộ đội, chấp hành đúng pháp luật Nhà nước và quy định của Bộ Quốc phòng."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 24
  },
  {
    "id": 933,
    "q": "Qua nghiên cứu chuyên đề năm 2026, các trung tâm nghiên cứu khoa học, cơ sở đào tạo và bệnh viện quân đội được phép phát triển các hoạt động dịch vụ theo hướng nào để vừa hoàn thành nhiệm vụ chính trị vừa đóng góp cho phát triển kinh tế?",
    "options": {
      "A": "Nâng cao chất lượng dịch vụ gắn với kỹ thuật chuyên môn theo đúng quy định, tạo thêm nguồn thu để tái đầu tư nâng cao năng lực hoạt động."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 25
  },
  {
    "id": 934,
    "q": "Qua nghiên cứu chuyên đề năm 2026, định hướng kết hợp giữa hoạt động đối ngoại quốc phòng với hoạt động kinh tế đối ngoại của các doanh nghiệp quân đội trong giai đoạn hiện nay được xác định như thế nào?",
    "options": {
      "A": "Lựa chọn đối tác phù hợp, mở rộng hợp tác công nghệ cao, công nghệ lưỡng dụng, tuân thủ pháp luật và bảo vệ an ninh quốc gia."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 26
  },
  {
    "id": 935,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu quan trọng nhất của việc tăng cường hợp tác quốc tế về công nghiệp quốc phòng và thương mại quân sự của các doanh nghiệp quân đội là gì?",
    "options": {
      "A": "Tranh thủ nguồn lực về vốn, khoa học - công nghệ và trình độ quản lý, nâng cao năng lực tự chủ sản xuất vũ khí trang bị hiện đại."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 27
  },
  {
    "id": 936,
    "q": "Văn bản pháp lý quan trọng do Chính phủ ban hành ngày 21/12/2018 tạo khung khổ pháp lý đồng bộ cho việc thực hiện kết hợp giữa phát triển kinh tế - xã hội với củng cố quốc phòng, an ninh là văn bản nào?",
    "options": {
      "A": "Nghị định số 164/2018/NĐ-CP về kết hợp quốc phòng với kinh tế - xã hội và kinh tế - xã hội với quốc phòng."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 28
  },
  {
    "id": 937,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khi trực tiếp hoặc gián tiếp tham gia vào các hoạt động lao động sản xuất, cán bộ sĩ quan và quân nhân chuyên nghiệp phải tuân thủ nghiêm ngặt hệ thống quy định nào?",
    "options": {
      "A": "Thực hiện tích cực, đúng các quy định của pháp luật nước Cộng hòa xã hội chủ nghĩa Việt Nam và kỷ luật nghiêm minh của Quân đội."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 29
  },
  {
    "id": 938,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc tích cực tham gia lao động sản xuất, tăng gia cải thiện đời sống ở các đơn vị cơ sở mang lại giá trị rèn luyện thực tiễn nào cho đội ngũ cán bộ, chiến sĩ Quân đội?",
    "options": {
      "A": "Rèn luyện tinh thần tập thể, tác phong lao động có kỷ luật, nâng cao trình độ chuyên môn kỹ thuật và giữ vững phẩm chất “Bộ đội Cụ Hồ”."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/4. Cau hoi chuyen de quoc phong voi kinh te (30).docx",
    "source_id": 30
  },
  {
    "id": 939,
    "q": "Qua nghiên cứu chuyên đề năm 2026, “sự cố truyền thông” được hiểu là gì?",
    "options": {
      "B": "Sự việc đơn lẻ, quy mô hẹp, còn khả năng kiểm soát"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 1
  },
  {
    "id": 940,
    "q": "Qua nghiên cứu chuyên đề năm 2026, “khủng hoảng truyền thông” khác với “sự cố truyền thông” chủ yếu ở điểm nào?",
    "options": {
      "A": "Mức độ tác động và khả năng kiểm soát"
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 2
  },
  {
    "id": 941,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mối quan hệ giữa sự cố và khủng hoảng truyền thông được xác định là gì?",
    "options": {
      "C": "Sự cố là mầm mống, khủng hoảng là hệ quả"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 3
  },
  {
    "id": 942,
    "q": "Qua nghiên cứu chuyên đề năm 2026, ba đặc điểm cốt lõi để nhận diện khủng hoảng truyền thông ở đơn vị cơ sở là gì?",
    "options": {
      "B": "Đột ngột, lan truyền nhanh, tổn hại lớn"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 4
  },
  {
    "id": 943,
    "q": "Qua nghiên cứu chuyên đề năm 2026, “Lan truyền nhanh” trong khủng hoảng truyền thông hiện nay chủ yếu gắn với đặc điểm nào của không gian mạng?",
    "options": {
      "B": "Tốc độ lan truyền rất cao"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 5
  },
  {
    "id": 944,
    "q": "Qua nghiên cứu chuyên đề năm 2026, “thời gian vàng” trong xử lý khủng hoảng truyền thông thường được xác định là:",
    "options": {
      "A": "Dưới 24 giờ"
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 6
  },
  {
    "id": 945,
    "q": "Qua nghiên cứu chuyên đề năm 2026, một nguyên nhân chủ quan hàng đầu dẫn đến khủng hoảng truyền thông ở đơn vị là:",
    "options": {
      "B": "Vi phạm pháp luật, kỷ luật của quân nhân"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 7
  },
  {
    "id": 946,
    "q": "Qua nghiên cứu chuyên đề năm 2026, hành vi nào sau đây có thể trở thành nguồn gốc của khủng hoảng truyền thông?",
    "options": {
      "A": "Vi phạm kỷ luật",
      "B": "Sai sót nghiệp vụ",
      "C": "Phát ngôn thiếu chuẩn mực",
      "D": "Tất cả đáp án đã nêu"
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 8
  },
  {
    "id": 947,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc lãnh đạo, chỉ huy bao che, giấu giếm khuyết điểm hoặc báo cáo không trung thực ảnh hưởng như thế nào đến xử lý khủng hoảng truyền thông?",
    "options": {
      "B": "Làm khủng hoảng trầm trọng thêm"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 9
  },
  {
    "id": 948,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khủng hoảng truyền thông không được xử lý kịp thời có thể gây hậu quả nào?",
    "options": {
      "A": "Xói mòn niềm tin của Nhân dân"
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 10
  },
  {
    "id": 949,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khủng hoảng truyền thông có thể tác động trực tiếp đến?",
    "options": {
      "A": "Khả năng hoàn thành nhiệm vụ của đơn vị"
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 11
  },
  {
    "id": 950,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khủng hoảng truyền thông được phân thành bao nhiêu cấp độ?",
    "options": {
      "B": "3 cấp"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 12
  },
  {
    "id": 951,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cấp độ 1 của khủng hoảng truyền thông được xác định là gì?",
    "options": {
      "C": "Cục bộ"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 13
  },
  {
    "id": 952,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đặc điểm của cấp độ 2 của khủng hoảng truyền thông là gì?",
    "options": {
      "C": "Thông tin có nguy cơ suy diễn, quy chụp và bắt đầu lan rộng"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 14
  },
  {
    "id": 953,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cấp độ 3 của khủng hoảng truyền thông được xác định là gì?",
    "options": {
      "D": "Khủng hoảng nghiêm trọng"
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 15
  },
  {
    "id": 954,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu đầu tiên trong xử lý khủng hoảng truyền thông là gì?",
    "options": {
      "B": "Giảm thiểu tối đa thiệt hại"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 16
  },
  {
    "id": 955,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nguyên tắc đầu tiên trong xử lý khủng hoảng truyền thông là gì?",
    "options": {
      "B": "Bảo đảm sự lãnh đạo tuyệt đối, trực tiếp của tổ chức Đảng"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 17
  },
  {
    "id": 956,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khi xử lý khủng hoảng truyền thông, yêu cầu về tốc độ là gì?",
    "options": {
      "C": "Phản ứng nhanh, đi trước một bước"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 18
  },
  {
    "id": 957,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khi cung cấp thông tin trong khủng hoảng truyền thông, yêu cầu quan trọng là gì?",
    "options": {
      "B": "Chính xác và thống nhất"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 19
  },
  {
    "id": 958,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong xử lý khủng hoảng, yêu cầu ưu tiên như thế nào?",
    "options": {
      "B": "Xử lý nguyên nhân gốc rễ trước"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/5. Cau hoi chuyen de khung hoang truyen thong (20).docx",
    "source_id": 20
  },
  {
    "id": 959,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tự do, dân chủ, nhân quyền được xác định là phạm trù thuộc những lĩnh vực nào và ra đời cùng với thể chế nào trong lịch sử?",
    "options": {
      "C": "Là phạm trù chính trị, pháp luật, văn hóa - xã hội ra đời cùng với Nhà nước trong xã hội có giai cấp."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 1
  },
  {
    "id": 960,
    "q": "Trong Bản Tuyên ngôn Độc lập năm 1945, Chủ tịch Hồ Chí Minh đã khẳng định những quyền cơ bản nào của con người xuất phát từ tạo hóa?",
    "options": {
      "A": "Quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 2
  },
  {
    "id": 961,
    "q": "Hai Công ước quốc tế quan trọng về nhân quyền được Liên hợp quốc thông qua năm 1966 đã hình thành nên hai nhóm quyền cơ bản nào?",
    "options": {
      "A": "Nhóm quyền dân sự, chính trị và nhóm quyền kinh tế, xã hội, văn hóa."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 3
  },
  {
    "id": 962,
    "q": "Trong bản Tuyên ngôn Độc lập năm 1945, Chủ tịch Hồ Chí Minh đã nâng tầm quyền con người thành quyền gì của các dân tộc trên thế giới?",
    "options": {
      "A": "Tất cả các dân tộc đều bình đẳng, có quyền sống, quyền sung sướng và quyền tự do."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 4
  },
  {
    "id": 963,
    "q": "Quan điểm nhất quán của Đảng ta qua các kỳ Đại hội về mối quan hệ giữa dân chủ, kỷ luật và pháp luật là gì?",
    "options": {
      "D": "Dân chủ phải đi đôi với kỷ luật, được thể chế hóa bằng pháp luật và được pháp luật bảo vệ."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 5
  },
  {
    "id": 964,
    "q": "Điểm khác biệt căn bản trong việc thực hành nhân quyền ở Việt Nam so với các quan điểm trừu tượng là gì?",
    "options": {
      "A": "Thể chế hóa thành Hiến pháp, pháp luật cụ thể, điều chỉnh hài hòa quyền cá nhân với quyền cộng đồng."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 6
  },
  {
    "id": 965,
    "q": "Điều 3 Hiến pháp năm 2013 của nước Cộng hòa xã hội chủ nghĩa Việt Nam quy định trách nhiệm của Nhà nước như thế nào đối với quyền con người?",
    "options": {
      "B": "Bảo đảm, phát huy quyền làm chủ của Nhân dân; công nhận, tôn trọng, bảo vệ, bảo đảm quyền con người."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 7
  },
  {
    "id": 966,
    "q": "Quan điểm chỉ đạo xuyên suốt về Nhân dân được Đại hội XIV của Đảng tiếp tục nhấn mạnh là gì?",
    "options": {
      "A": "“Dân là gốc”, xác định nhân dân là trung tâm, chủ thể, mục tiêu, động lực và nguồn lực phát triển."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 8
  },
  {
    "id": 967,
    "q": "Minh chứng khách quan, tích cực khẳng định uy tín và đóng góp của Việt Nam trên trường quốc tế về nhân quyền là sự kiện nào?",
    "options": {
      "A": "Việt Nam 03 lần trúng cử thành viên Hội đồng Nhân quyền Liên hợp quốc (có 02 nhiệm kỳ liên tiếp)."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 9
  },
  {
    "id": 968,
    "q": "Qua nghiên cứu chuyên đề năm 2026, sự khác biệt cơ bản trong cách tiếp cận nhân quyền giữa các nước phương Tây và các nước đang phát triển (như Việt Nam) là gì?",
    "options": {
      "A": "Phương Tây tuyệt đối hóa quyền dân sự, chính trị cá nhân; nước đang phát triển đề cao cả quyền kinh tế, xã hội, cộng đồng."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 10
  },
  {
    "id": 969,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong tổng thể chiến lược “diễn biến hòa bình”, các thế lực thù địch coi vấn đề tự do, dân chủ, nhân quyền là gì?",
    "options": {
      "B": "Công cụ hữu hiệu để kích động, tập hợp lực lượng, hình thành tổ chức đối lập, gây bạo loạn, tạo cớ can thiệp."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 11
  },
  {
    "id": 970,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục đích nguy hiểm nhất của các thế lực thù địch khi âm mưu “cách mạng màu”, “cách mạng đường phố” ở Việt Nam là gì?",
    "options": {
      "A": "Tuyển chọn “ngọn cờ”, dựng lên chính quyền thân phương Tây hoặc ép Việt Nam chuyển hướng tư bản."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 12
  },
  {
    "id": 971,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đối với Quân đội nhân dân Việt Nam, âm mưu thâm độc nhất của các thế lực thù địch nhằm làm suy giảm sức mạnh chiến đấu là gì?",
    "options": {
      "A": "Từng bước làm suy giảm uy tín, làm mất phương hướng chính trị, tiến tới “phi chính trị hóa” Quân đội."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 13
  },
  {
    "id": 972,
    "q": "Qua nghiên cứu chuyên đề năm 2026, một số chính phủ và tổ chức quốc tế thiếu thiện chí thường dùng thủ đoạn nào để can thiệp, gây sức ép với Việt Nam?",
    "options": {
      "A": "Đưa báo cáo sai lệch, đòi thả “tù nhân lương tâm” (đối tượng vi phạm pháp luật), gắn nhân quyền với viện trợ."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 14
  },
  {
    "id": 973,
    "q": "Qua nghiên cứu chuyên đề năm 2026, bản chất thực sự đằng sau các dự án, chương trình của một số tổ chức phi chính phủ nước ngoài (INGO) tại địa bàn chiến lược là gì?",
    "options": {
      "A": "Núp bóng từ thiện để truyền bá giá trị Mỹ/phương Tây, cổ xúy dân chủ cực đoan, chuẩn bị cho \"bất tuân dân sự\"."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 15
  },
  {
    "id": 974,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tổ chức phản động lưu vong nào giữ vai trò dẫn dắt trong việc móc nối thu thập “bằng chứng” vu cáo Việt Nam vi phạm nhân quyền?",
    "options": {
      "A": "Tổ chức “BPSOS”."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 16
  },
  {
    "id": 975,
    "q": "Qua nghiên cứu chuyên đề năm 2026, thủ đoạn dụ dỗ, lôi kéo người dân tộc thiểu số di cư tự do, vượt biên sang Campuchia, Thái Lan của tổ chức BPSOS nhằm mục đích gì?",
    "options": {
      "A": "Khống chế, ép làm “nhân chứng sống” vu cáo Việt Nam, phục vụ mưu đồ chính trị và trục lợi tài chính."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 17
  },
  {
    "id": 976,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mưu đồ thâm độc của các thế lực thù địch khi thâm nhập vào lĩnh vực giáo dục - đào tạo ở Việt Nam là gì?",
    "options": {
      "A": "Đào tạo “thủ lĩnh dân chủ”, tạo lớp “lãnh đạo tiềm năng” để sẵn sàng làm \"cách mạng màu\" khi có thời cơ."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 18
  },
  {
    "id": 977,
    "q": "Qua nghiên cứu chuyên đề năm 2026, các thế lực thù địch đã lợi dụng thời điểm tuyển quân hằng năm để phát tán thông tin sai lệch nhằm mục đích gì?",
    "options": {
      "A": "Bôi nhọ “Bộ đội Cụ Hồ”, xuyên tạc kỷ luật Quân đội, kích động trốn nghĩa vụ quân sự."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 19
  },
  {
    "id": 978,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung, biện pháp hàng đầu đối với cấp ủy, chỉ huy các cấp để phòng chống chống phá về dân chủ, nhân quyền là gì?",
    "options": {
      "A": "Thường xuyên lãnh đạo, quán triệt, phổ biến và cụ thể hóa các nghị quyết, chỉ thị của Đảng, Nhà nước."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 20
  },
  {
    "id": 979,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cán bộ, chiến sĩ phải làm gì ngay khi phát hiện dấu hiệu bị các đối tượng xấu móc nối, lôi kéo, khống chế?",
    "options": {
      "A": "Báo cáo ngay với cấp ủy, chỉ huy đơn vị và cơ quan bảo vệ an ninh để xử lý kịp thời."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 21
  },
  {
    "id": 980,
    "q": "Yếu tố nào đóng vai trò là động lực và nguồn lực quan trọng của sự phát triển đất nước theo quan điểm của Đảng?",
    "options": {
      "A": "Thực hiện tốt vấn đề tự do, dân chủ, nhân quyền và phát huy quyền làm chủ của nhân dân."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 22
  },
  {
    "id": 981,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc kết hợp hài hòa chuẩn mực quốc tế về nhân quyền ở Việt Nam phải gắn liền với các điều kiện đặc thù nào?",
    "options": {
      "A": "Lịch sử, chính trị, kinh tế - xã hội, giá trị văn hóa, tôn giáo, truyền thống của dân tộc."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 23
  },
  {
    "id": 982,
    "q": "Qua nghiên cứu chuyên đề năm 2026, vì sao các nước phương Tây thường lồng ghép vấn đề nhân quyền vào các quan hệ hợp tác đối ngoại với các nước đang phát triển?",
    "options": {
      "A": "Dùng làm điều kiện ràng buộc, gây sức ép, can thiệp vào công việc nội bộ nhằm đạt lợi ích chiến lược."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 24
  },
  {
    "id": 983,
    "q": "Qua nghiên cứu chuyên đề năm 2026, luận điệu nào thường được các đối tượng phản động sử dụng để bôi nhọ các cơ quan tố tụng Việt Nam khi bắt giữ kẻ vi phạm pháp luật?",
    "options": {
      "A": "Vu cáo chính quyền “đàn áp nhà hoạt động nhân quyền”, “vi phạm tự do ngôn luận”."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/6. Câu hỏi chuyen de phòng chóng âm mưu thủ đoạn (25).docx",
    "source_id": 25
  },
  {
    "id": 984,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đặc điểm nào khẳng định AI vẫn mang tính công cụ và phụ thuộc vào con người?",
    "options": {
      "C": "AI không có ý thức hay lập trường chính trị riêng"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 1
  },
  {
    "id": 985,
    "q": "Qua nghiên cứu chuyên đề năm 2026, Chiến lược quốc gia về nghiên cứu, phát triển và ứng dụng AI đến năm 2030 của Việt Nam được ban hành vào năm nào?",
    "options": {
      "D": "Năm 2021"
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 2
  },
  {
    "id": 986,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong giáo dục, AI giúp giáo viên giảm tải công việc thông qua tính năng nào?",
    "options": {
      "B": "Tự động hóa việc chấm điểm và phân tích kết quả"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 3
  },
  {
    "id": 987,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong lĩnh vực quốc phòng, AI hỗ trợ người chỉ huy như thế nào trong điều kiện tác chiến nhanh?",
    "options": {
      "C": "Xây dựng các phương án hành động tối ưu và đẩy nhanh tốc độ ra quyết định"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 4
  },
  {
    "id": 988,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tác động tích cực nào của AI giúp công tác tư tưởng chuyển từ “xử lý khi đã xảy ra” sang “phòng ngừa từ sớm”?",
    "options": {
      "C": "Khả năng dự báo xu hướng dư luận thông qua phân tích dữ liệu thời gian thực"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 5
  },
  {
    "id": 989,
    "q": "Qua nghiên cứu chuyên đề năm 2026, AI hỗ trợ như thế nào trong việc bảo vệ nền tảng tư tưởng trên không gian mạng?",
    "options": {
      "B": "Nhận diện nội dung xuyên tạc và các mạng lưới tài khoản ảo (bot)"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 6
  },
  {
    "id": 990,
    "q": "Qua nghiên cứu chuyên đề năm 2026, công nghệ nào bị các thế lực thù địch lợi dụng để giả mạo hình ảnh, giọng nói của lãnh đạo nhằm bôi nhọ?",
    "options": {
      "C": "Deepfake"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 7
  },
  {
    "id": 991,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khái niệm “Buồng dội âm” (echo chamber) trong môi trường mạng có nghĩa là gì?",
    "options": {
      "D": "Người dùng chỉ tiếp cận nội dung trùng khớp với định kiến ban đầu do thuật toán gợi ý"
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 7
  },
  {
    "id": 992,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tại sao việc cá nhân hóa nội dung của AI lại tiềm ẩn nguy cơ làm phai nhạt lòng tin chính trị?",
    "options": {
      "B": "Vì AI liên tục đề xuất nội dung tiêu cực nếu người dùng lỡ xem các tin tức đó"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 8
  },
  {
    "id": 993,
    "q": "Qua nghiên cứu chuyên đề năm 2026, một trong những thách thức đối với truyền thông chính thống là gì?",
    "options": {
      "B": "Thay đổi thói quen tiếp nhận thông tin của công chúng (thích ngắn, nhanh, video)"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 9
  },
  {
    "id": 994,
    "q": "Qua nghiên cứu chuyên đề năm 2026, giải pháp “Bình dân học vụ số” trong LLVT Quân khu nhằm mục đích gì?",
    "options": {
      "D": "Nâng cao nhận thức, kiến thức và kỹ năng số cho cán bộ, chiến sĩ"
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 10
  },
  {
    "id": 995,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cách nào sau đây giúp quân nhân nhận diện video deepfake?",
    "options": {
      "C": "Quan sát ánh mắt, chuyển động môi không tự nhiên và âm thanh không đồng bộ"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 11
  },
  {
    "id": 996,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tại sao cần xây dựng đội ngũ cán bộ chính trị vững về kỹ năng số?",
    "options": {
      "B": "Để họ trở thành lực lượng nòng cốt dẫn dắt dư luận và phản bác thông tin xấu độc"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 12
  },
  {
    "id": 997,
    "q": "Qua nghiên cứu chuyên đề năm 2026, ứng dụng “AI Chatbot” trên mạng truyền số liệu quân sự được coi là gì?",
    "options": {
      "B": "Trợ lý chính trị ảo"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 13
  },
  {
    "id": 998,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong bối cảnh AI, yếu tố nào vẫn giữ vai trò quyết định trong cuộc đấu tranh tư tưởng?",
    "options": {
      "D": "Nhân tố con người (bản lĩnh và năng lực cán bộ)"
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 14
  },
  {
    "id": 999,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nhiệm vụ bảo vệ nền tảng tư tưởng của Đảng trong tình hình mới được đánh giá như thế nào?",
    "options": {
      "C": "Rất cấp bách và mang tính sống còn"
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 15
  },
  {
    "id": 1000,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc phối hợp với các cơ quan chức năng ngoài Quân đội nhằm mục đích gì?",
    "options": {
      "B": "Xây dựng “thế trận lòng dân” trên không gian mạng"
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 16
  },
  {
    "id": 1001,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đặc điểm nào sau đây thể hiện bản chất công nghệ cốt lõi của Trí tuệ nhân tạo (AI)?",
    "options": {
      "A": "Sự mô phỏng các năng lực trí tuệ con người bằng phương tiện điện tử."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 17
  },
  {
    "id": 1002,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu cụ thể của Việt Nam trong Chiến lược quốc gia về AI đến năm 2030 là gì?",
    "options": {
      "C": "Nằm trong nhóm 4 nước dẫn đầu ASEAN và nhóm 50 nước dẫn đầu thế giới về AI."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 18
  },
  {
    "id": 1003,
    "q": "Qua nghiên cứu chuyên đề năm 2026, AI tác động tích cực như thế nào đến việc quản lý dư luận trong công tác tư tưởng?",
    "options": {
      "C": "Chuyển từ “xử lý khi đã xảy ra” sang “phòng ngừa từ sớm, từ xa”."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 19
  },
  {
    "id": 1004,
    "q": "Qua nghiên cứu chuyên đề năm 2026, giải pháp nào được coi là quan trọng hàng đầu trong việc bảo vệ nền tảng tư tưởng trước sự phát triển của AI?",
    "options": {
      "D": "Nâng cao nhận thức, thống nhất tư tưởng và trang bị kỹ năng số cho cán bộ, chiến sĩ."
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/7. Cau hoi chuyen de tri tue nhan tao trong bao ve Dang (20).docx",
    "source_id": 20
  },
  {
    "id": 1005,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yếu tố nào phản ánh đầy đủ nhất bản chất của giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới?",
    "options": {
      "B": "Hệ thống phẩm chất chính trị, đạo đức, lối sống, phong cách và chuẩn mực hành vi của người quân nhân cách mạng được hình thành dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 1
  },
  {
    "id": 1006,
    "q": "Qua nghiên cứu chuyên đề năm 2026, giá trị văn hóa “Bộ đội Cụ Hồ” trước hết được hình thành và phát triển từ yếu tố nào?",
    "options": {
      "C": "Quá trình xây dựng, chiến đấu, trưởng thành của Quân đội dưới sự lãnh đạo của Đảng và sự giáo dục, rèn luyện của Chủ tịch Hồ Chí Minh."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 2
  },
  {
    "id": 1007,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đặc trưng giữ vai trò nền tảng của toàn bộ hệ giá trị văn hóa “Bộ đội Cụ Hồ” là gì?",
    "options": {
      "C": "Tuyệt đối trung thành với Tổ quốc, Đảng, Nhà nước và Nhân dân."
    },
    "correct": "C",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 3
  },
  {
    "id": 1008,
    "q": "Qua nghiên cứu chuyên đề năm 2026, ý nghĩa nổi bật của giá trị văn hóa “Bộ đội Cụ Hồ” đối với mỗi quân nhân là gì?",
    "options": {
      "B": "Là nguồn sức mạnh nội sinh, niềm tự hào và động lực phấn đấu."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 4
  },
  {
    "id": 1009,
    "q": "Qua nghiên cứu chuyên đề năm 2026, sự cần thiết phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trước hết xuất phát từ cơ sở nào?",
    "options": {
      "B": "Quan điểm của chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh và đường lối của Đảng về văn hóa."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 5
  },
  {
    "id": 1010,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục đích cơ bản của phát huy giá trị văn hóa “Bộ đội Cụ Hồ” là gì?",
    "options": {
      "B": "Làm cho mỗi quân nhân giữ vững bản chất cách mạng, đạo đức trong sáng và hoàn thành tốt nhiệm vụ."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 6
  },
  {
    "id": 1011,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trong chuyển đổi số nhấn mạnh yêu cầu nào?",
    "options": {
      "B": "Đổi mới sáng tạo nhưng không xa rời nguyên tắc, bản lĩnh và chuẩn mực văn hóa quân sự."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 7
  },
  {
    "id": 1012,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” được gắn chặt với nhiệm vụ trọng tâm nào của cơ quan, đơn vị?",
    "options": {
      "B": "Thực hiện nhiệm vụ chính trị trung tâm và xây dựng đơn vị vững mạnh toàn diện “mẫu mực, tiêu biểu”."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 8
  },
  {
    "id": 1013,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu cuối cùng về phát huy giá trị văn hóa “Bộ đội Cụ Hồ” hướng tới điều gì?",
    "options": {
      "B": "Củng cố mối quan hệ gắn bó máu thịt Quân đội với Nhân dân, xây dựng “thế trận lòng dân” vững chắc và lan tỏa hình ảnh cao đẹp “Bộ đội Cụ Hồ”."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 9
  },
  {
    "id": 1014,
    "q": "Qua nghiên cứu chuyên đề năm 2026, giá trị văn hóa “Bộ đội Cụ Hồ” được xem là “nguồn sức mạnh nội sinh” của Quân đội trước hết vì lý do nào?",
    "options": {
      "B": "Đây là nền tảng tạo nên sự thống nhất giữa nhận thức, niềm tin, ý chí và hành động của quân nhân trong thực hiện nhiệm vụ."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 10
  },
  {
    "id": 1015,
    "q": "Qua nghiên cứu chuyên đề năm 2026, phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trong thời kỳ mới phải được đặt trong mối quan hệ chủ yếu nào?",
    "options": {
      "B": "Giữa xây dựng con người với xây dựng Quân đội vững mạnh về chính trị."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 11
  },
  {
    "id": 1016,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nếu chỉ chú trọng xây dựng trình độ chuyên môn quân sự mà xem nhẹ xây dựng giá trị văn hóa “Bộ đội Cụ Hồ” thì hệ quả lớn nhất là gì?",
    "options": {
      "B": "Làm suy giảm nền tảng chính trị, đạo đức và sức mạnh tinh thần của Quân đội."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 12
  },
  {
    "id": 1017,
    "q": "Qua nghiên cứu chuyên đề năm 2026, sức mạnh của giá trị văn hóa “Bộ đội Cụ Hồ” được khẳng định đầy đủ nhất thông qua gì?",
    "options": {
      "B": "Hiệu quả chuyển hóa thành động lực thực hiện thắng lợi mọi nhiệm vụ."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 13
  },
  {
    "id": 1018,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu đặt ra đối với phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trong bối cảnh chuyển đổi số là gì?",
    "options": {
      "B": "Phát triển năng lực số trên nền tảng giữ vững bản lĩnh chính trị và chuẩn mực văn hóa."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 14
  },
  {
    "id": 1019,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu xuyên suốt trong phát huy giá trị văn hóa “Bộ đội Cụ Hồ” là gì?",
    "options": {
      "A": "Không ngừng đổi mới nhưng phải giữ vững bản chất cách mạng."
    },
    "correct": "A",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 15
  },
  {
    "id": 1020,
    "q": "Qua nghiên cứu chuyên đề năm 2026, phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải hướng tới xây dựng hình ảnh người quân nhân như thế nào?",
    "options": {
      "B": "Có bản lĩnh chính trị, đạo đức trong sáng, trí tuệ, kỷ luật và trách nhiệm cao trước Đảng, Tổ quốc và Nhân dân."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 16
  },
  {
    "id": 1021,
    "q": "Giá trị văn hóa “Bộ đội Cụ Hồ” là sự kết tinh những phẩm chất cao đẹp của người quân nhân cách mạng dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh, được biểu hiện tập trung ở những nội dung cơ bản nào sau đây?",
    "options": {
      "A": "Tuyệt đối trung thành với Tổ quốc, với Đảng, Nhà nước và Nhân dân; dũng cảm, kiên cường, bất khuất; đạo đức trong sáng, lối sống giản dị.",
      "B": "Dân chủ, kỷ luật, đoàn kết thống nhất, không ngại khó khăn, gian khổ, không ngừng đổi mới sáng tạo, hoàn thành tốt và xuất sắc nhiệm vụ.",
      "C": "Có tình thương yêu đồng chí, đồng đội; gắn bó máu thịt với Nhân dân; có tinh thần quốc tế trong sáng.",
      "D": "Tất cả đáp án đã nêu"
    },
    "correct": "D",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 17
  },
  {
    "id": 1022,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đối với tổ chức đoàn, nội dung phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới cần gắn với phong trào nào?",
    "options": {
      "B": "3 Tiên phong quyết thắng."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 18
  },
  {
    "id": 1023,
    "q": "Qua nghiên cứu chuyên đề năm 2026, hằng năm mỗi cán bộ, đảng viên phải thực hiện nghiêm túc việc gì để phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới?",
    "options": {
      "B": "Xây dựng cam kết tu dưỡng, rèn luyện, phấn đấu phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 19
  },
  {
    "id": 1024,
    "q": "Qua nghiên cứu chuyên đề năm 2026, để phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới, cán bộ, đảng viên cần duy trì phẩm chất nào trong quá trình rèn luyện?",
    "options": {
      "B": "Kiên trì, bền bỉ, nhẫn nại và thường xuyên “tự soi, tự sửa”."
    },
    "correct": "B",
    "source": "Chuyen de giao duc (200)/8. Cau hoi chuyen de gia tri van hoa BDCH (20).docx",
    "source_id": 20
  }
];
