// Dữ liệu câu hỏi được chuyển từ file Word nguồn.
// Giữ nguyên nội dung và đáp án theo tài liệu; không tự suy đoán đáp án còn thiếu.
// Tổng số mục: 607
var qaList = [
  {
    "id": 1,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, Quy định áp dụng đối với đối tượng nào?",
    "options": {
      "A": "Các cơ quan nhà nước, tổ chức chính trị xã hội",
      "B": "Các tổ chức đảng và cán bộ, đảng viên trong Đảng",
      "C": "Các tổ chức chính trị - xã hội và toàn thể Nhân dân",
      "D": "Các đoàn thể và toàn thể quần chúng"
    },
    "correct": "B"
  },
  {
    "id": 2,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, mục đích quan trọng của công tác chính trị, tư tưởng là gì?",
    "options": {
      "A": "Nâng cao chất lượng cán bộ đáp ứng yêu cầu nhiệm vụ",
      "B": "Giữ vững định hướng chính trị, tư tưởng",
      "C": "Mở rộng hoạt động đối ngoại",
      "D": "Tăng cường công tác hành chính trong Đảng"
    },
    "correct": "B"
  },
  {
    "id": 3,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, công tác chính trị, tư tưởng được xác định là gì?",
    "options": {
      "A": "Nhiệm vụ thường xuyên, gắn liền với hoạt động của tổ chức đảng",
      "B": "Nhiệm vụ quan trọng hàng đầu trong công tác xây dựng Đảng",
      "C": "Nhiệm vụ của cơ quan tuyên giáo các cấp",
      "D": "Nhiệm vụ của các cấp ủy và từng đảng viên"
    },
    "correct": "B"
  },
  {
    "id": 4,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, trong mối quan hệ giữa “xây” và “chống”, nội dung nào được xác định là nhiệm vụ cơ bản, chiến lược, lâu dài?",
    "options": {
      "A": "“Xây”",
      "B": "“Chống”",
      "C": "Cả hai như nhau",
      "D": "Tùy từng thời điểm"
    },
    "correct": "A"
  },
  {
    "id": 5,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, công tác chính trị, tư tưởng phải lấy nội dung nào làm định hướng hành động?",
    "options": {
      "A": "“2 kiên định”",
      "B": "“4 kiên định”",
      "C": "“5 vững”",
      "D": "“3 đột phá”"
    },
    "correct": "B"
  },
  {
    "id": 6,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, nội dung nào sau đây thuộc “4 kiên định”?",
    "options": {
      "A": "Kiên định hội nhập quốc tế",
      "B": "Kiên định đường lối đổi mới của Đảng",
      "C": "Kiên định phát triển kinh tế - xã hội",
      "D": "Kiên định công nghiệp hóa, hiện đại hóa"
    },
    "correct": "B"
  },
  {
    "id": 7,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, “chính trị, tư tưởng trong Đảng” được hiểu là trạng thái thống nhất về:",
    "options": {
      "A": "Nhận thức và tổ chức",
      "B": "Nhận thức, niềm tin, ý chí và hành động",
      "C": "Ý chí và kỷ luật",
      "D": "Tư tưởng và sinh hoạt"
    },
    "correct": "B"
  },
  {
    "id": 8,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, “công tác chính trị, tư tưởng” là tổng thể hoạt động của:",
    "options": {
      "A": "Cơ quan tuyên giáo các cấp",
      "B": "Cấp ủy, tổ chức đảng",
      "C": "Nhà nước và Mặt trận Tổ quốc",
      "D": "Các tổ chức đoàn thể"
    },
    "correct": "B"
  },
  {
    "id": 9,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, bảo vệ nền tảng tư tưởng của Đảng bao gồm nội dung nào?",
    "options": {
      "A": "Tuyên truyền chủ trương mới để phòng, chống “diễn biến hòa bình”",
      "B": "Giữ vững, phát triển giá trị khoa học, cách mạng của Chủ nghĩa Mác Lê Nin, tư tưởng Hồ Chí Minh, đường lối của Đảng và đấu tranh phản bác quan điểm sai trái, thù địch",
      "C": "Xử lý có hiệu quả các thông tin xấu độc",
      "D": "Tăng cường quản lý mạng xã hội và hoạt động của cán bộ, đảng viên trên không gian mạng."
    },
    "correct": "B"
  },
  {
    "id": 10,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, “dư luận xã hội” được hiểu là gi?",
    "options": {
      "A": "Ý kiến của cán bộ, đảng viên và quần chúng về một vấn đề gì đó",
      "B": "Ý kiến, thái độ và tâm trạng của các nhóm xã hội trước những vấn đề liên quan",
      "C": "Thông tin trên báo chí và các trang mạng về sự việc có liên quan",
      "D": "Ý kiến của cơ quan quản lý về vấn đề liên quan"
    },
    "correct": "B"
  },
  {
    "id": 11,
    "q": "Theo Quy định số 19-QĐ/TW ngày 08/4/2026 của Ban Chấp hành Trung ương về công tác chính trị, tư tưởng trong Đảng, kết quả thực hiện công tác chính trị, tư tưởng được xác định là:",
    "options": {
      "A": "Một tiêu chí quan trọng trong đánh giá, xếp loại tổ chức đảng và cán bộ, đảng viên hằng năm",
      "B": "Một nội dung tham khảo trong đánh giá, xếp loại tổ chức đảng và cán bộ, đảng viên hằng năm",
      "C": "Một tiêu chí riêng của cán bộ tuyên giáo các cấp trong đánh giá cán bộ, đảng viên hằng năm",
      "D": "Một nội dung chỉ đánh giá khi có vi phạm"
    },
    "correct": "A"
  },
  {
    "id": 12,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát được xác định là:",
    "options": {
      "A": "Một phương thức lãnh đạo quan trọng của Đảng",
      "B": "Một nhiệm vụ chuyên môn của Ủy ban Kiểm tra",
      "C": "Một hoạt động quản lý hành chính của Nhà nước",
      "D": "Một biện pháp xử lý vi phạm của các cơ quan chức năng"
    },
    "correct": "A"
  },
  {
    "id": 13,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát là cơ chế để:",
    "options": {
      "A": "Đánh giá cán bộ",
      "B": "Kiểm soát quyền lực",
      "C": "Quản lý đảng viên",
      "D": "Điều hành tổ chức"
    },
    "correct": "B"
  },
  {
    "id": 14,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, công tác kiểm tra, giám sát là nhiệm vụ:",
    "options": {
      "A": "Theo từng giai đoạn",
      "B": "Khi có vụ việc",
      "C": "Thường xuyên, liên tục",
      "D": "Chỉ khi có vi phạm"
    },
    "correct": "C"
  },
  {
    "id": 15,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, đổi mới công tác kiểm tra, giám sát phải gắn chặt với:",
    "options": {
      "A": "Công tác chính trị, tư tưởng, tổ chức, cán bộ",
      "B": "Công tác tài chính, hậu cần, kỹ thuật",
      "C": "Công tác đối ngoại, kinh tế, khoa học công nghệ",
      "D": "Công tác hành chính, pháp luật"
    },
    "correct": "A"
  },
  {
    "id": 16,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, tổ chức đảng và đảng viên phải thường xuyên:",
    "options": {
      "A": "Tự soi, tự sửa",
      "B": "Tự đánh giá, tự xếp loại",
      "C": "Tự kiểm điểm định kỳ",
      "D": "Tự báo cáo kết quả"
    },
    "correct": "A"
  },
  {
    "id": 17,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, phương châm trong kiểm tra, giám sát và kỷ luật đảng là:",
    "options": {
      "A": "Không có ngoại lệ, không có tư lợi",
      "B": "Không có vùng cấm, không có ngoại lệ",
      "C": "Bình đẳng và công khai",
      "D": "Nghiêm minh và thận trọng"
    },
    "correct": "B"
  },
  {
    "id": 18,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, việc xử lý vi phạm phải bảo đảm:",
    "options": {
      "A": "Chính xác và công khai",
      "B": "Nghiêm minh, kịp thời",
      "C": "Linh hoạt, phù hợp",
      "D": "Thận trọng, từng bước"
    },
    "correct": "B"
  },
  {
    "id": 19,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, việc công khai kết quả kiểm tra, giám sát và thi hành kỷ luật nhằm:",
    "options": {
      "A": "Tăng tính minh bạch",
      "B": "Tăng số vụ xử lý",
      "C": "Mở rộng quyền kiểm tra",
      "D": "Thay thế công tác tuyên truyền"
    },
    "correct": "A"
  },
  {
    "id": 20,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, việc hoàn thiện hệ thống quy định về kiểm tra, giám sát phải bảo đảm:",
    "options": {
      "A": "Đồng bộ, thống nhất, liên thông",
      "B": "Tập trung, chặt chẽ, nghiêm khắc",
      "C": "Đơn giản, linh hoạt, dễ thực hiện",
      "D": "Phân cấp, phân quyền, tự chủ"
    },
    "correct": "A"
  },
  {
    "id": 21,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, cấp ủy, tổ chức đảng và Ủy ban Kiểm tra các cấp phải chủ động xây dựng:",
    "options": {
      "A": "Kế hoạch công tác cán bộ",
      "B": "Chương trình kiểm tra, giám sát",
      "C": "Quy chế làm việc của Ủy ban Kiểm tra",
      "D": "Kế hoạch tuyên truyền"
    },
    "correct": "B"
  },
  {
    "id": 22,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, một điểm đổi mới quan trọng trong phương pháp kiểm tra, giám sát là chuyển trọng tâm:",
    "options": {
      "A": "Từ xử lý sang kiểm tra",
      "B": "Từ phòng ngừa sang xử lý",
      "C": "Sang phòng ngừa, cảnh báo vi phạm",
      "D": "Từ thường xuyên sang chuyên đề"
    },
    "correct": "C"
  },
  {
    "id": 23,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, chuyển đổi số trong ngành Kiểm tra Đảng nhằm:",
    "options": {
      "A": "Rút ngắn thời gian, nâng cao chất lượng kiểm tra",
      "B": "Giảm số lượng cán bộ kiểm tra",
      "C": "Thay thế hoàn toàn cán bộ kiểm tra",
      "D": "Chỉ phục vụ quản lý hồ sơ"
    },
    "correct": "A"
  },
  {
    "id": 24,
    "q": "Theo Nghị quyết số 05-NQ/TW ngày 07/4/2026 về đổi mới, nâng cao hiệu lực công tác kiểm tra, giám sát và kỷ luật đảng, cần tăng cường phối hợp giữa cơ quan kiểm tra của Đảng với:",
    "options": {
      "A": "Cơ quan tham mưu, giúp việc cấp ủy và cơ quan liên quan",
      "B": "Các cơ quan tư pháp trong hệ thống chính trị",
      "C": "Tập trung phối hợp với cơ quan hành chính",
      "D": "Phối hợp với Mặt trận Tổ quốc"
    },
    "correct": "A"
  },
  {
    "id": 25,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, mục tiêu tổng quát của công tác phòng, chống tham nhũng, lãng phí, tiêu cực là:",
    "options": {
      "A": "Tăng cường xử lý sai phạm, không để các vụ việc nhỏ bùng phát thành vụ việc lớn",
      "B": "Kiên quyết, kiên trì phòng ngừa, kiểm soát, ngăn chặn, đẩy lùi",
      "C": "Mở rộng hoạt động thanh tra, kiểm tra các cấp",
      "D": "Nâng cao hiệu quả quản lý nhà nước"
    },
    "correct": "B"
  },
  {
    "id": 26,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, công tác phòng, chống tham nhũng, lãng phí, tiêu cực phải đặt dưới:",
    "options": {
      "A": "Sự lãnh đạo của Nhà nước",
      "B": "Sự lãnh đạo trực tiếp, toàn diện của Đảng",
      "C": "Sự quản lý của Chính phủ",
      "D": "Sự giám sát của cơ quan kiểm tra"
    },
    "correct": "B"
  },
  {
    "id": 27,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, công tác phòng, chống tham nhũng, lãng phí, tiêu cực phải được tiến hành:",
    "options": {
      "A": "Theo chuyên đề",
      "B": "Khi có vụ việc",
      "C": "Thường xuyên, liên tục, từ cơ sở",
      "D": "Theo từng giai đoạn"
    },
    "correct": "C"
  },
  {
    "id": 28,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, các biện pháp phòng, chống tham nhũng, lãng phí, tiêu cực phải hướng tới:",
    "options": {
      "A": "“Không thể, không dám, không muốn, không cần”",
      "B": "“Không sai, không sót, không chậm, không né”",
      "C": "“Không tham, không lãng phí, không tiêu cực”",
      "D": "“Không vi phạm, không buông lỏng, không bao che”"
    },
    "correct": "A"
  },
  {
    "id": 29,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, lợi ích nào phải được đặt lên trên hết trong phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": {
      "A": "Lợi ích của cơ quan, đơn vị",
      "B": "Lợi ích của doanh nghiệp, người dân",
      "C": "Lợi ích quốc gia - dân tộc và Nhân dân",
      "D": "Lợi ích của địa phương, đơn vị"
    },
    "correct": "C"
  },
  {
    "id": 30,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, quan điểm xử lý mối quan hệ giữa đấu tranh phòng, chống tham nhũng và phát triển là:",
    "options": {
      "A": "Tập trung đấu tranh, không ưu tiên phát triển",
      "B": "Vừa đấu tranh, vừa kiến tạo phát triển",
      "C": "Ưu tiên phát triển trước xử lý",
      "D": "Chỉ xử lý sau khi phát triển"
    },
    "correct": "B"
  },
  {
    "id": 31,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, nội dung nào được xác định là trọng tâm để nâng cao hiệu quả phòng, chống tham nhũng, lãng phí, tiêu cực?",
    "options": {
      "A": "Thanh tra, kiểm tra, kiểm soát",
      "B": "Khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
      "C": "Tuyên truyền, vận động, giảm thiểu vi phạm",
      "D": "Điều tra, truy tố, xét xử, xử lý nghiêm minh, khách quan"
    },
    "correct": "B"
  },
  {
    "id": 32,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, phương châm xử lý vi phạm là gì?",
    "options": {
      "A": "Nhanh, mạnh, nghiêm, đáp ứng yêu cầu nhiệm vụ",
      "B": "Nghiêm minh, kịp thời, nhân văn, thuyết phục",
      "C": "Linh hoạt, mềm dẻo, phù hợp, khoa học",
      "D": "Công khai, minh bạch, thận trọng"
    },
    "correct": "B"
  },
  {
    "id": 33,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, quốc gia và xã hội liêm chính được xây dựng trên 3 trụ cột là:",
    "options": {
      "A": "Thể chế liêm chính - nền công vụ liêm chính - đội ngũ cán bộ, đảng viên, công chức, viên chức liêm chính",
      "B": "Pháp luật liêm chính - xã hội liêm chính - doanh nghiệp liêm chính",
      "C": "Đảng liêm chính - Nhà nước liêm chính - Nhân dân liêm chính",
      "D": "Cán bộ liêm chính - doanh nghiệp liêm chính - xã hội liêm chính"
    },
    "correct": "A"
  },
  {
    "id": 34,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, việc xử lý cán bộ yếu kém, thiếu trách nhiệm, uy tín thấp cần:",
    "options": {
      "A": "Động viên, tiếp tục theo dõi",
      "B": "Kịp thời thay thế, cho từ chức",
      "C": "Phê bình, kiểm điểm nghiêm túc",
      "D": "Chuyển sang vị trí công tác khác"
    },
    "correct": "B"
  },
  {
    "id": 35,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, thực hành tiết kiệm, chống lãng phí cần chú trọng các loại lãng phí nào?",
    "options": {
      "A": "Tiền bạc, tài sản, cơ sở vật chất",
      "B": "Nguồn lực, thời gian và cơ hội phát triển",
      "C": "Nhân lực và vật lực",
      "D": "Đất đai, ngân sách và tài nguyên"
    },
    "correct": "B"
  },
  {
    "id": 36,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, cơ quan nào chủ trì theo dõi, đôn đốc, hướng dẫn, kiểm tra, giám sát việc thực hiện Nghị quyết?",
    "options": {
      "A": "Ban Tổ chức Trung ương",
      "B": "Ban Nội chính Trung ương",
      "C": "Ủy ban Kiểm tra Trung ương",
      "D": "Văn phòng Trung ương Đảng"
    },
    "correct": "B"
  },
  {
    "id": 37,
    "q": "Theo Nghị quyết số 04-NQ/TW ngày 01/4/2026 về tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí, tiêu cực trong giai đoạn mới, văn bản này thay thế những văn bản nào?",
    "options": {
      "A": "Nghị quyết Trung ương 3 khóa X",
      "B": "Nghị quyết 04-NQ/TW năm 2006 và các kết luận liên quan",
      "C": "Kết luận số 10-KL/TW năm 2016",
      "D": "Chỉ thị số 50-CT/TW năm 2015"
    },
    "correct": "B"
  },
  {
    "id": 38,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 của Ban Chấp hành Trung ương về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, mục tiêu tăng trưởng GDP bình quân giai đoạn 2026–2030 là:",
    "options": {
      "A": "Trên 8%/năm",
      "B": "Trên 9%/năm",
      "C": "Từ 10%/năm trở lên",
      "D": "Khoảng 7%/năm"
    },
    "correct": "C"
  },
  {
    "id": 39,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, mục tiêu tăng trưởng “2 con số” phải gắn với yêu cầu nào?",
    "options": {
      "A": "Giảm đầu tư công",
      "B": "Ổn định kinh tế vĩ mô",
      "C": "Tăng khai thác tài nguyên",
      "D": "Mở rộng tín dụng"
    },
    "correct": "B"
  },
  {
    "id": 40,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, mục tiêu đến năm 2030 của Việt Nam là:",
    "options": {
      "A": "Trở thành nước phát triển có công nghiệp hiện đại, thu nhập trung bình cao",
      "B": "Trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao",
      "C": "Trở thành nước có thu nhập cao",
      "D": "Trở thành trung tâm tài chính khu vực"
    },
    "correct": "B"
  },
  {
    "id": 41,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, một trong những yêu cầu xuyên suốt là:",
    "options": {
      "A": "Đổi mới quản trị thể chế",
      "B": "Thu hẹp khu vực tư nhân",
      "C": "Giảm hội nhập quốc tế",
      "D": "Tăng bao cấp kinh tế"
    },
    "correct": "A"
  },
  {
    "id": 42,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phương thức quản lý nhà nước cần chuyển mạnh từ:",
    "options": {
      "A": "Tiền kiểm sang hậu kiểm",
      "B": "Hậu kiểm sang tiền kiểm",
      "C": "Phân cấp sang tập trung",
      "D": "Giám sát sang kiểm soát"
    },
    "correct": "A"
  },
  {
    "id": 43,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, trong phát triển kinh tế - xã hội cần:",
    "options": {
      "A": "Đẩy mạnh phân cấp, phân quyền",
      "B": "Tập trung quyền lực",
      "C": "Giảm trách nhiệm giải trình",
      "D": "Hạn chế giám sát"
    },
    "correct": "A"
  },
  {
    "id": 44,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, một nhiệm vụ trọng tâm là chuyển sang mô hình tăng trưởng dựa chủ yếu vào:",
    "options": {
      "A": "Tài nguyên thiên nhiên, tư liệu sản xuất sẵn có",
      "B": "Khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
      "C": "Lao động giá rẻ, khoa học công nghệ hiện đại",
      "D": "Vốn đầu tư công và lao động rẻ"
    },
    "correct": "B"
  },
  {
    "id": 45,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, công nghiệp quốc gia cần được xây dựng theo hướng:",
    "options": {
      "A": "Nhỏ, phân tán",
      "B": "Hiện đại, tự chủ",
      "C": "Phụ thuộc nhập khẩu",
      "D": "Tập trung vào gia công"
    },
    "correct": "B"
  },
  {
    "id": 46,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, đối với kinh tế nhà nước, trọng tâm đổi mới là:",
    "options": {
      "A": "Mở rộng bao cấp, đáp ứng nhu cầu xã hội",
      "B": "Quản trị doanh nghiệp theo chuẩn mực quốc tế",
      "C": "Tăng biên chế, nâng cao khả năng vận hành của doanh nghiệp",
      "D": "Giảm đầu tư công, hạn chế thất thoát"
    },
    "correct": "B"
  },
  {
    "id": 47,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phát triển kinh tế tư nhân phải bảo đảm:",
    "options": {
      "A": "Được bảo hộ riêng để phát triển",
      "B": "Bình đẳng trong tiếp cận nguồn lực",
      "C": "Chỉ hoạt động trong nước",
      "D": "Hạn chế cạnh tranh"
    },
    "correct": ""
  },
  {
    "id": 48,
    "q": "Việc chuyển từ Phòng Tham mưu thành Cục Tham mưu phản ánh yêu cầu nào?",
    "options": {
      "A": "Kiện toàn cơ quan tham mưu đáp ứng yêu cầu nhiệm vụ mới",
      "B": "Giảm nhiệm vụ của cơ quan",
      "C": "Giải thể cơ quan",
      "D": "Chuyển cơ quan sang làm hậu cần"
    },
    "correct": "A"
  },
  {
    "id": 49,
    "q": "Bộ Tham mưu Quân khu 5 hiện có bao nhiêu tổ chức Đoàn thanh niên, Hội phụ nữ",
    "options": {
      "A": "16 tổ chức cơ sở đoàn, 5 hội phụ nữ",
      "B": "15 tổ chức cơ sở đoàn, 6 hội phụ nữ",
      "C": "16 tổ chức cơ sở đoàn, 6 hội phụ nữ",
      "D": "15 tổ chức cơ sở đoàn, 5 hội phụ nữ"
    },
    "correct": "C"
  },
  {
    "id": 50,
    "q": "Phương châm của Đại hội Đảng bội Bộ Tham mưu lần thứ XV?",
    "options": {
      "A": "“Đoàn kết - Dân chủ - Kỷ cương - Đổi mới - Sáng tạo”",
      "B": "“Dân chủ - Đoàn Kết - Kỷ cương - Đổi mới - Sáng tạo”",
      "C": "“Đoàn kết - Dân chủ - Đổi mới - Sáng tạo”",
      "D": "“Đoàn kết - Dân chủ - Kỷ cương - Sáng tạo - Quyết thắng”"
    },
    "correct": "A"
  },
  {
    "id": 51,
    "q": "Nghị quyết Đại hội Đảng bộ Bộ Tham mưu lần thứ XV, nhiệm kỳ 2025 - 2030, chỉ tiêu về nghiên cứu sáng kiến cải tiến kỹ thuật?",
    "options": {
      "A": "Hằng năm mỗi đơn vị có từ 01 - 03 sáng kiến cải tiến kỹ thuật; Bộ Tham mưu có từ 05 - 08 sáng kiến tham gia thi cấp Quân khu và toàn quân đạt giải cao.",
      "B": "Hằng năm mỗi đơn vị có 01 - 02 sáng kiến cải tiến kỹ thuật; Bộ Tham mưu có từ 05 - 07 sáng kiến tham gia thi cấp Quân khu và toàn quân đạt giải cao.",
      "C": "Hằng năm mỗi đơn vị có từ 02 - 03 sáng kiến cải tiến kỹ thuật; Bộ Tham mưu có từ 06 - 08 sáng kiến tham gia thi cấp Quân khu và toàn quân đạt giải cao.",
      "D": "Hằng năm mỗi đơn vị có từ 02 sáng kiến cải tiến kỹ thuật; Bộ Tham mưu có từ 07 - 08 sáng kiến tham gia thi cấp Quân khu và toàn quân đạt giải cao."
    },
    "correct": "B"
  },
  {
    "id": 52,
    "q": "Nghị quyết Đại hội Đảng bộ Bộ Tham mưu lần thứ XV, nhiệm kỳ 2025 - 2030, chỉ tiêu về kết nạp đảng viên mới hằng năm trong toàn Đảng bộ Bộ Tham mưu?",
    "options": {
      "A": "Kết nạp từ 26 đến 30 đảng viên.",
      "B": "Kết nạp từ 27 đến 35 đảng viên.",
      "C": "Kết nạp từ 25 đến 30 đảng viên",
      "D": "Kết nạp từ 30 đến 35 đảng viên"
    },
    "correct": "C"
  },
  {
    "id": 53,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, chính sách thu hút FDI cần chuyển từ:",
    "options": {
      "A": "Ưu đãi trước sang ưu đãi sau",
      "B": "Ưu đãi thuế sang ưu đãi theo kết quả",
      "C": "Ưu đãi nhiều sang ưu đãi ít",
      "D": "Thu hút rộng sang thu hút hẹp"
    },
    "correct": "B"
  },
  {
    "id": 54,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, một yêu cầu quan trọng đối với khu vực FDI là:",
    "options": {
      "A": "Tăng nhập khẩu",
      "B": "Thúc đẩy chuyển giao công nghệ",
      "C": "Giảm liên kết trong nước",
      "D": "Tăng sử dụng lao động giản đơn"
    },
    "correct": "B"
  },
  {
    "id": 55,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phát triển thị trường trong nước được xác định là:",
    "options": {
      "A": "Điểm tựa quan trọng cho tăng trưởng",
      "B": "Nhiệm vụ thứ yếu",
      "C": "Nguồn thu ngắn hạn, đáp ứng yêu cầu cấp bách",
      "D": "Giải pháp tình thế trong điều kiện mới"
    },
    "correct": "A"
  },
  {
    "id": 56,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, phát triển thị trường vốn trong nước nhằm:",
    "options": {
      "A": "Giảm xuất khẩu",
      "B": "Làm kênh huy động vốn dài hạn",
      "C": "Giảm đầu tư tư nhân",
      "D": "Hạn chế thị trường chứng khoán"
    },
    "correct": "B"
  },
  {
    "id": 57,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, đối với vay và trả nợ công, yêu cầu được nhấn mạnh là:",
    "options": {
      "A": "Tăng vay để đầu tư cho các lĩnh vực có thế mạnh",
      "B": "Quản lý rủi ro và bảo đảm an toàn nợ công",
      "C": "Tập trung vay ngắn hạn",
      "D": "Giảm công khai thông tin"
    },
    "correct": "B"
  },
  {
    "id": 58,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, số lượng dự án đầu tư công giai đoạn 2026–2030 so với giai đoạn 2021–2025 như thế nào?",
    "options": {
      "A": "Giữ nguyên",
      "B": "Tăng ít nhất 30%",
      "C": "Giảm tối thiểu 30%",
      "D": "Giảm 10%"
    },
    "correct": "C"
  },
  {
    "id": 59,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, đến năm 2030 phấn đấu đưa vào sử dụng trên:",
    "options": {
      "A": "3.000 km đường bộ cao tốc",
      "B": "4.000 km đường bộ cao tốc",
      "C": "5.000 km đường bộ cao tốc",
      "D": "6.000 km đường bộ cao tốc"
    },
    "correct": "C"
  },
  {
    "id": 60,
    "q": "Theo Kết luận số 18-KL/TW ngày 02/4/2026 về Kế hoạch phát triển kinh tế - xã hội, tài chính quốc gia, vay, trả nợ công, đầu tư công trung hạn 5 năm 2026–2030 gắn với thực hiện mục tiêu phấn đấu tăng trưởng “2 con số”, cơ quan chủ trì theo dõi, đôn đốc, đánh giá kết quả thực hiện và định kỳ báo cáo Bộ Chính trị, Ban Bí thư là:",
    "options": {
      "A": "Đảng ủy Quốc hội",
      "B": "Ban Tuyên giáo và Dân vận Trung ương",
      "C": "Đảng ủy Chính phủ",
      "D": "Ban Chính sách, chiến lược Trung ương"
    },
    "correct": "C"
  },
  {
    "id": 61,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến chủ trương, quy định của Đảng và pháp luật Nhà nước?",
    "options": {
      "A": "Thực hiện đầy đủ các quy định",
      "B": "Nghiên cứu, học tập, thực hiện các quy định",
      "C": "Nói, viết, làm trái hoặc không thực hiện",
      "D": "Phổ biến quy định cho người khác"
    },
    "correct": "C"
  },
  {
    "id": 62,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến nguyên tắc tổ chức và hoạt động của Đảng?",
    "options": {
      "A": "Không chấp hành hoặc chấp hành không đúng, không đầy đủ",
      "B": "Tham gia đóng góp ý kiến",
      "C": "Thực hiện nghiêm túc nguyên tắc",
      "D": "Báo cáo vi phạm nguyên tắc"
    },
    "correct": "A"
  },
  {
    "id": 63,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh?",
    "options": {
      "A": "Học tập và làm theo",
      "B": "Nghiên cứu, vận dụng sáng tạo",
      "C": "Tuyên truyền, phổ biến rộng rãi",
      "D": "Phản bác, phủ định, xuyên tạc"
    },
    "correct": "D"
  },
  {
    "id": 64,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến thông tin, tài liệu bí mật của Đảng và Nhà nước?",
    "options": {
      "A": "Bảo vệ thông tin bí mật",
      "B": "Lưu trữ an toàn tài liệu, không để lộ bí mật của Đảng, Nhà nước",
      "C": "Cung cấp, làm lộ, làm mất hoặc viết bài, đăng thông tin",
      "D": "Báo cáo khi phát hiện rò rỉ thông tin"
    },
    "correct": "C"
  },
  {
    "id": 65,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, điểm mới nào sau đây được bổ sung liên quan đến việc phát tán thông tin sai sự thật?",
    "options": {
      "A": "Sử dụng hạ tầng Internet, mạng xã hội, nền tảng số, trí tuệ nhân tạo",
      "B": "Kiểm chứng thông tin trước khi đăng",
      "C": "Rút kinh nghiệm khi có sai sót",
      "D": "Chỉnh sửa thông tin cho chính xác"
    },
    "correct": "A"
  },
  {
    "id": 66,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến đơn tố cáo?",
    "options": {
      "A": "Gửi đơn đến nơi có thẩm quyền, thường xuyên theo dõi kết quả",
      "B": "Tố cáo có nội dung mang tính bịa đặt; viết đơn tố cáo giấu tên, mạo tên",
      "C": "Tố cáo có căn cứ, trung thực",
      "D": "Theo dõi kết quả giải quyết tố cáo"
    },
    "correct": "B"
  },
  {
    "id": 67,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến hoạt động bè phái?",
    "options": {
      "A": "Tham gia sinh hoạt Đảng đầy đủ, tích cực trong các hoạt động của cơ quan, đơn vị, địa phương",
      "B": "Tổ chức, xúi giục, tham gia các hoạt động bè phái, cục bộ gây mất đoàn kết nội bộ",
      "C": "Thường xuyên tham gia sinh hoạt, góp ý xây dựng tổ chức",
      "D": "Báo cáo vi phạm nguyên tắc"
    },
    "correct": "B"
  },
  {
    "id": 68,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến các tổ chức trái quy định?",
    "options": {
      "A": "Tham gia tổ chức do Đảng, Nhà nước thành lập",
      "B": "Tổ chức, tham gia, tài trợ, giúp tổ chức, hội trái quy định của Đảng, pháp luật Nhà nước",
      "C": "Ủng hộ hoạt động thiện nguyện",
      "D": "Tham gia các hội nghề nghiệp hợp pháp"
    },
    "correct": "B"
  },
  {
    "id": 69,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến báo cáo, kê khai?",
    "options": {
      "A": "Kê khai đầy đủ theo quy định",
      "B": "Báo cáo trung thực với tổ chức",
      "C": "Báo cáo, lập hồ sơ, kê khai lý lịch, kê khai tài sản, thu nhập không trung thực",
      "D": "Giải trình nguồn gốc tài sản khi được yêu cầu"
    },
    "correct": "C"
  },
  {
    "id": 70,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, điểm mới nào sau đây được bổ sung về việc sử dụng văn bằng, chứng chỉ?",
    "options": {
      "A": "Sử dụng văn bằng, chứng chỉ, chứng nhận không hợp pháp",
      "B": "Học tập nâng cao trình độ đáp ứng yêu cầu nhiệm vụ được giao",
      "C": "Công nhận văn bằng nước ngoài",
      "D": "Xác minh văn bằng theo quy định"
    },
    "correct": "A"
  },
  {
    "id": 71,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến đạo đức công vụ?",
    "options": {
      "A": "Thực hiện đúng đạo đức công vụ",
      "B": "Vi phạm đạo đức công vụ, đạo đức nghề nghiệp; vi phạm quy tắc ứng xử của người có chức vụ, quyền hạn",
      "C": "Rèn luyện đạo đức cách mạng, gương mẫu trong lời nói và việc làm",
      "D": "Gương mẫu trong công tác, xây dựng cơ quan, đơn vị vững mạnh"
    },
    "correct": "B"
  },
  {
    "id": 72,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến chạy chức, chạy quyền?",
    "options": {
      "A": "Phấn đấu theo năng lực, uy tín",
      "B": "Có hành vi chạy chức, chạy quyền, bao che, tiếp tay, can thiệp, tác động để bản thân hoặc người khác được tiếp nhận, tuyển dụng, bổ nhiệm",
      "C": "Chấp hành quyết định điều động, sẵn sàng nhận và hoàn thành các nhiệm vụ được giao",
      "D": "Chấp hành quyết định điều động; báo cáo trung thực lý lịch"
    },
    "correct": "B"
  },
  {
    "id": 73,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến tham ô, hối lộ?",
    "options": {
      "A": "Từ chối nhận quà biếu vượt quy định",
      "B": "Tham ô, đưa, nhận, môi giới hối lộ hoặc lợi dụng vị trí công tác để môi giới, hối lộ dưới mọi hình thức",
      "C": "Báo cáo hành vi tham nhũng cho cơ quan chức năng",
      "D": "Thực hiện quy định về phòng, chống tham nhũng, lãng phí, tiêu cực"
    },
    "correct": "B"
  },
  {
    "id": 74,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến việc tặng, nhận quà?",
    "options": {
      "A": "Nhận quà theo quy định, không làm ảnh hưởng đến tổ chức",
      "B": "Từ chối quà biếu không đúng quy định",
      "C": "Tặng, nhận quà dưới mọi hình thức để tác động đến tổ chức, người có trách nhiệm dẫn đến việc quyết định sai, có lợi ích riêng",
      "D": "Báo cáo việc nhận quà vượt quy định"
    },
    "correct": "C"
  },
  {
    "id": 75,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến thực hành tiết kiệm?",
    "options": {
      "A": "Thực hành tiết kiệm trong công tác; không để xảy ra thất thoát, lãng phí trong việc quản lý, khai thác, sử dụng các nguồn lực",
      "B": "Không thực hành tiết kiệm; để xảy ra thất thoát, lãng phí trong việc quản lý, khai thác, sử dụng các nguồn lực",
      "C": "Chống lãng phí, tham nhũng",
      "D": "Sử dụng hiệu quả tài sản công"
    },
    "correct": "B"
  },
  {
    "id": 76,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến việc đi du lịch, học tập, chữa bệnh?",
    "options": {
      "A": "Đi công tác theo kế hoạch được phê duyệt; du lịch, học tập, chữa bệnh bằng tiền cá nhân hoặc các tổ chức tài trợ",
      "B": "Can thiệp, tác động để bản thân, người thân thích, người khác đi du lịch, học tập, chữa bệnh bằng nguồn tài trợ của các tổ chức, cá nhân có liên quan đến ngành, lĩnh vực, địa phương được giao theo dõi, quản lý",
      "C": "Đi du lịch, học tập nâng cao trình độ; khám chữa bệnh ở các bệnh viện",
      "D": "Đi du lịch, học tập bằng tiền cá nhân; khám chữa bệnh theo chế độ bảo hiểm quy định"
    },
    "correct": "B"
  },
  {
    "id": 77,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến hoạt động kiểm tra, giám sát, thanh tra?",
    "options": {
      "A": "Chấp hành kết luận, quyết định của cơ quan có thẩm quyền",
      "B": "Cản trở, can thiệp, tác động, áp đặt vào hoạt động kiểm tra, giám sát, thanh tra, kiểm toán, điều tra, truy tố, xét xử, thi hành án nhằm làm sai lệch, bao che, tiếp tay cho các hành vi vi phạm",
      "C": "Phối hợp với cơ quan chức năng xử lý các vụ việc vi phạm theo quy định; chấp hành kết luận, quyết định của cơ quan có thẩm quyền",
      "D": "Cung cấp thông tin khi được yêu cầu"
    },
    "correct": "B"
  },
  {
    "id": 78,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến đánh bạc, sử dụng chất ma túy?",
    "options": {
      "A": "Tham gia các hoạt động văn hóa lành mạnh; tuyên truyền, vận động Nhân dân thực hiện lối sống văn minh",
      "B": "Tổ chức, tham gia đánh bạc dưới mọi hình thức; sử dụng các chất ma túy; sử dụng rượu, bia không đúng quy định",
      "C": "Tuyên truyền phòng chống tệ nạn xã hội",
      "D": "Gương mẫu trong lối sống; tham gia các hoạt động văn hóa, văn nghệ, thể dục, thể thao lành mạnh ở địa phương"
    },
    "correct": "B"
  },
  {
    "id": 79,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, đảng viên không được làm gì liên quan đến mê tín, tôn giáo?",
    "options": {
      "A": "Tôn trọng quyền tự do tín ngưỡng, hoạt động tôn giáo đúng pháp luật",
      "B": "Mê tín, hoạt động mê tín; ủng hộ hoặc tham gia các tôn giáo bất hợp pháp hoặc lợi dụng các hoạt động tôn giáo, tín ngưỡng để trục lợi",
      "C": "Thực hiện chính sách dân tộc, tôn giáo của Đảng; tham gia đấu tranh phản bác các quan điểm sai trái, thù địch bảo vệ nền tảng tư tưởng của Đảng",
      "D": "Đấu tranh chống lợi dụng tôn giáo"
    },
    "correct": "B"
  },
  {
    "id": 80,
    "q": "Theo Quy định số 207-QĐ/TW ngày 26/7/2026 về những điều đảng viên không được làm, Quy định này thay thế Quy định nào sau đây?",
    "options": {
      "A": "Quy định số 37-QĐ/TW ngày 25/10/2021",
      "B": "Quy định số 47-QĐ/TW ngày 01/11/2011",
      "C": "Quy định số 144-QĐ/TW ngày 09/5/2024",
      "D": "Quy định số 24-QĐ/TW ngày 30/7/2021"
    },
    "correct": "A"
  },
  {
    "id": 81,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, hệ thống tổ chức của Đảng hiện nay được thống nhất theo mô hình mấy cấp?",
    "options": {
      "A": "6 cấp",
      "B": "5 cấp",
      "C": "3 cấp",
      "D": "4 cấp"
    },
    "correct": "C"
  },
  {
    "id": 82,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, điểm mới trong thí điểm tổ chức cơ sở đảng được xác định là gì?",
    "options": {
      "A": "Đảng bộ trực thuộc cơ sở",
      "B": "Gồm đảng bộ trực thuộc cơ sở và chi bộ",
      "C": "Gồm chi bộ cơ sở, đảng bộ bộ phận",
      "D": "Đảng bộ ngành, lĩnh vực"
    },
    "correct": "B"
  },
  {
    "id": 83,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, tên gọi chung được thống nhất sử dụng cho các loại hình chi bộ (không còn phân biệt chi bộ cơ sở hay chi bộ trực thuộc) là gì?",
    "options": {
      "A": "Chi bộ",
      "B": "Chi bộ cơ sở",
      "C": "Chi bộ trực thuộc",
      "D": "Tổ đảng"
    },
    "correct": "A"
  },
  {
    "id": 84,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, thẩm quyền quyết định thành lập tổ chức đảng ở xã, phường, đặc khu là đảng bộ cơ sở trực thuộc cấp ủy cấp nào?",
    "options": {
      "A": "Cấp cơ sở",
      "B": "Cấp tỉnh",
      "C": "Cấp trung ương",
      "D": "Cấp xã"
    },
    "correct": "B"
  },
  {
    "id": 85,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, nội dung nào sau đây là điểm mới được thí điểm thành lập ở cấp tỉnh, thành phố?",
    "options": {
      "A": "Đảng bộ các sở, ban, ngành, doanh nghiệp nhà nước",
      "B": "Đảng bộ hội đồng nhân dân, Mặt trận Tổ quốc và các đoàn thể",
      "C": "Đảng bộ các doanh nghiệp nhà nước, doanh nghiệp có vốn đầu tư nước ngoài",
      "D": "Đảng bộ các trường đại học, cao đẳng, cơ sở giáo dục đào tạo"
    },
    "correct": "B"
  },
  {
    "id": 86,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, việc thành lập các cơ quan tham mưu, giúp việc chuyên trách (hoặc kiêm nhiệm) của đảng ủy cơ sở và đảng ủy trực thuộc cơ sở do cấp nào xem xét, quyết định?",
    "options": {
      "A": "Ban Tổ chức Trung ương",
      "B": "Cấp ủy cấp tỉnh",
      "C": "Đảng ủy cấp trên trực tiếp",
      "D": "Ban Bí thư"
    },
    "correct": "B"
  },
  {
    "id": 87,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, độ tuổi quy định của người vào Đảng tại thời điểm chi bộ xét kết nạp là bao nhiêu?",
    "options": {
      "A": "Từ đủ 18 tuổi đến đủ 60 tuổi",
      "B": "Từ đủ 18 tuổi đến đủ 65 tuổi",
      "C": "Từ đủ 20 tuổi đến đủ 60 tuổi",
      "D": "Từ đủ 18 tuổi đến hết 55 tuổi"
    },
    "correct": "A"
  },
  {
    "id": 88,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, trình độ học vấn tối thiểu của người vào Đảng theo quy định chung là gì?",
    "options": {
      "A": "Tốt nghiệp tiểu học trở lên",
      "B": "Hoàn thành chương trình giáo dục bậc trung học cơ sở trở lên",
      "C": "Tốt nghiệp trung học phổ thông",
      "D": "Có bằng cao đẳng, đại học"
    },
    "correct": "B"
  },
  {
    "id": 89,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, trong thời hạn bao lâu kể từ ngày cấp ủy có thẩm quyền ban hành quyết định kết nạp, chi bộ phải tổ chức lễ kết nạp cho đảng viên?",
    "options": {
      "A": "15 ngày làm việc",
      "B": "30 ngày làm việc",
      "C": "45 ngày làm việc",
      "D": "60 ngày làm việc"
    },
    "correct": "B"
  },
  {
    "id": 90,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, nếu chi bộ họp chậm và cấp ủy chuẩn y chậm, đảng viên dự bị đủ điều kiện vẫn được công nhận chính thức đúng vào thời điểm nào?",
    "options": {
      "A": "Ngày cấp ủy ban hành quyết định",
      "B": "Ngày hết 12 tháng dự bị",
      "C": "Ngày chi bộ họp xét",
      "D": "Ngày làm thủ tục chuyển sinh hoạt"
    },
    "correct": "B"
  },
  {
    "id": 91,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, thẩm quyền quyết định kết nạp đảng viên đối với đảng ủy cơ sở thuộc về ai?",
    "options": {
      "A": "Tập thể đảng ủy cơ sở",
      "B": "Ban thường vụ đảng ủy cơ sở",
      "C": "Chi bộ cơ sở",
      "D": "Cấp ủy cấp trên trực tiếp"
    },
    "correct": "B"
  },
  {
    "id": 92,
    "q": "Theo Quy định số 208-QĐ/TW về thi hành Điều lệ Đảng, tuổi Đảng của đảng viên được tính từ thời điểm nào?",
    "options": {
      "A": "Ngày hết thời gian dự bị",
      "B": "Ngày cấp có thẩm quyền ban hành quyết định kết nạp",
      "C": "Ngày chi bộ tổ chức lễ kết nạp",
      "D": "Ngày được công nhận đảng viên chính thức"
    },
    "correct": "B"
  },
  {
    "id": 93,
    "q": "Theo Quy định số 208-QĐ/TW về thi hành Điều lệ Đảng, thời hạn hoàn thành thủ tục chuyển sinh hoạt đảng chính thức khi đảng viên thay đổi nơi công tác hoặc cư trú là bao lâu?",
    "options": {
      "A": "30 ngày làm việc",
      "B": "45 ngày làm việc",
      "C": "60 ngày làm việc",
      "D": "90 ngày làm việc"
    },
    "correct": "C"
  },
  {
    "id": 94,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, thời gian tối thiểu kể từ khi ra khỏi Đảng để được xem xét kết nạp lại là bao lâu?",
    "options": {
      "A": "Ít nhất 12 tháng",
      "B": "Ít nhất 24 tháng",
      "C": "Ít nhất 36 tháng",
      "D": "Ít nhất 48 tháng"
    },
    "correct": "C"
  },
  {
    "id": 95,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, nghị quyết của các cơ quan lãnh đạo của Đảng chỉ có giá trị thi hành khi có bao nhiêu số thành viên trong cơ quan đó tán thành?",
    "options": {
      "A": "Ít nhất hai phần ba",
      "B": "Hơn một nửa",
      "C": "Ít nhất ba phần tư",
      "D": "Toàn thể thành viên"
    },
    "correct": "B"
  },
  {
    "id": 96,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, số lượng ủy viên ban thường vụ cấp ủy mỗi cấp theo quy định chung không được vượt quá tỷ lệ nào?",
    "options": {
      "A": "Một phần ba tổng số cấp ủy viên",
      "B": "Một phần hai tổng số cấp ủy viên",
      "C": "Hai phần ba tổng số cấp ủy viên",
      "D": "Một phần tư tổng số cấp ủy viên"
    },
    "correct": "A"
  },
  {
    "id": 97,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, đảng viên được miễn công tác và sinh hoạt đảng vẫn được hưởng quyền lợi nào sau đây?",
    "options": {
      "A": "Được bầu cấp ủy các cấp",
      "B": "Được xét tặng Huy hiệu Đảng khi đủ tiêu chuẩn",
      "C": "Được tham gia biểu quyết tại đại hội và các quyền khác",
      "D": "Được miễn đóng đảng phí vĩnh viễn"
    },
    "correct": "B"
  },
  {
    "id": 98,
    "q": "Theo Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng, đảng viên bỏ sinh hoạt đảng hoặc không đóng đảng phí trong thời gian bao lâu trong năm mà không có lý do chính đáng thì bị xem xét xóa tên?",
    "options": {
      "A": "Hai tháng",
      "B": "Ba tháng",
      "C": "Sáu tháng",
      "D": "Một năm"
    },
    "correct": "B"
  },
  {
    "id": 99,
    "q": "Quy định số 208-QĐ/TW ngày 26/7/2026 về thi hành Điều lệ Đảng được ban hành để thay thế cho quy định nào trước đây?",
    "options": {
      "A": "Quy định số 24-QĐ/TW",
      "B": "Quy định số 37-QĐ/TW",
      "C": "Quy định số 20-QĐ/TW",
      "D": "Quy định số 47-QĐ/TW"
    },
    "correct": "C"
  },
  {
    "id": 100,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, tư duy quản trị xã hội cần chuyển dịch mạnh mẽ theo hướng nào?",
    "options": {
      "A": "Từ \"quản lý xã hội\" sang \"quản trị và kiến tạo xã hội\".",
      "B": "Từ \"kiến tạo xã hội\" sang \"quản lý xã hội chặt chẽ\".",
      "C": "Từ \"phân cấp, phân quyền\" sang \"tập trung, tập quyền\".",
      "D": "Từ \"dựa trên dữ liệu\" sang \"dựa trên kinh nghiệm chủ quan\"."
    },
    "correct": "A"
  },
  {
    "id": 101,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, yếu tố nào được xác định là mục tiêu, yêu cầu xuyên suốt của quá trình phát triển, thể hiện bản chất tốt đẹp của chế độ xã hội chủ nghĩa?",
    "options": {
      "A": "Tăng trưởng kinh tế.",
      "B": "An ninh con người.",
      "C": "Ổn định chính trị.",
      "D": "Hội nhập quốc tế."
    },
    "correct": "B"
  },
  {
    "id": 102,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, mục tiêu cụ thể đến năm 2030 về phòng, chống tội phạm và tệ nạn xã hội là gì?",
    "options": {
      "A": "Phấn đấu hằng năm giảm 5% số vụ phạm tội và 100% địa bàn cấp tỉnh không có ma túy.",
      "B": "Phấn đấu hằng năm giảm 10% số vụ phạm tội về trật tự xã hội; đến năm 2030 đạt ít nhất 50% số địa bàn cấp xã và 20% địa bàn cấp tỉnh không có ma túy.",
      "C": "Loại bỏ hoàn toàn tội phạm công nghệ cao và tệ nạn ma túy trên toàn quốc vào năm 2030.",
      "D": "Giữ vững tỷ lệ phạm tội hiện tại và tập trung xử lý nghiêm các vi phạm phát sinh."
    },
    "correct": "B"
  },
  {
    "id": 103,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, Việt Nam phấn đấu thuộc nhóm bao nhiêu nước dẫn đầu thế giới về Chỉ số an ninh mạng toàn cầu (GCI) vào năm 2030?",
    "options": {
      "A": "Tốp 10 nước.",
      "B": "Tốp 15 nước.",
      "C": "Tốp 20 nước.",
      "D": "Tốp 30 nước."
    },
    "correct": "B"
  },
  {
    "id": 104,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, chỉ số hài lòng của người dân đối với sự phục vụ của cơ quan hành chính nhà nước (SIPAS) phấn đấu đạt giá trị trung bình cả nước là bao nhiêu vào năm 2030?",
    "options": {
      "A": "Trên 75%.",
      "B": "Trên 80%.",
      "C": "Trên 88%.",
      "D": "Trên 95%."
    },
    "correct": "C"
  },
  {
    "id": 105,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, tầm nhìn đến năm 2045, điều gì sẽ được hình thành vững chắc trong xã hội?",
    "options": {
      "A": "\"Trật tự tự thân\" của xã hội.",
      "B": "Hệ thống an sinh xã hội hoàn toàn do nhà nước bao cấp.",
      "C": "Mô hình kinh tế tập trung quan liêu.",
      "D": "Cơ chế kiểm soát xã hội bằng biện pháp hành chính thuần túy."
    },
    "correct": "A"
  },
  {
    "id": 106,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, hệ thống y tế cần chuyển dịch căn bản theo hướng nào?",
    "options": {
      "A": "Từ \"phòng bệnh\" sang tập trung \"chữa bệnh\".",
      "B": "Từ \"chữa bệnh\" sang chủ động phòng bệnh, chăm sóc sức khỏe toàn diện và quản lý sức khỏe.",
      "C": "Từ \"công lập\" sang hoàn toàn \"tư nhân hóa\".",
      "D": "Từ \"chăm sóc sức khỏe ban đầu\" sang \"chuyên sâu\"."
    },
    "correct": "B"
  },
  {
    "id": 107,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, chỉ số phát triển con người (HDI) và tuổi thọ trung bình tính từ lúc sinh phấn đấu đạt mức nào vào năm 2030?",
    "options": {
      "A": "HDI đạt khoảng 0,7; tuổi thọ đạt khoảng 73 tuổi.",
      "B": "HDI đạt khoảng 0,8; tuổi thọ đạt khoảng 75,5 tuổi (trong đó thời gian sống khỏe mạnh đạt tối thiểu 68 năm).",
      "C": "HDI đạt khoảng 0,9; tuổi thọ đạt khoảng 80 tuổi.",
      "D": "HDI đạt khoảng 0,75; tuổi thọ đạt khoảng 74 tuổi."
    },
    "correct": "B"
  },
  {
    "id": 108,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, hệ thống an sinh xã hội cần được phát triển theo hướng nào?",
    "options": {
      "A": "Bao cấp toàn diện, cào bằng cho mọi đối tượng.",
      "B": "Đa dạng, đa tầng, toàn diện, hiện đại, bao trùm, bền vững.",
      "C": "Giao hoàn toàn cho khu vực tư nhân và các tổ chức từ thiện đảm nhiệm.",
      "D": "Chỉ tập trung hỗ trợ cho các đối tượng chính sách, bỏ qua nhóm yếu thế khác."
    },
    "correct": "B"
  },
  {
    "id": 109,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, cơ quan nào được giao chủ trì, phối hợp với Ban Chính sách, chiến lược Trung ương để theo dõi, hướng dẫn, đôn đốc, kiểm tra, giám sát việc thực hiện Nghị quyết?",
    "options": {
      "A": "Ban Tuyên giáo và Dân vận Trung ương.",
      "B": "Đảng ủy Công an Trung ương.",
      "C": "Ủy ban Kiểm tra Trung ương.",
      "D": "Ban Tổ chức Trung ương."
    },
    "correct": "B"
  },
  {
    "id": 110,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, mục tiêu về tỷ lệ đô thị hóa cả nước đến năm 2030 là gì?",
    "options": {
      "A": "Đạt trên 40%.",
      "B": "Đạt trên 45%.",
      "C": "Đạt trên 50%.",
      "D": "Đạt trên 60%."
    },
    "correct": "C"
  },
  {
    "id": 111,
    "q": "Theo Nghị quyết số 18-NQ/TW ngày 28/7/2026 về xây dựng xã hội kỷ cương, an toàn, văn minh, hài hoà, phát triển, cơ quan nào được giao chủ trì, phối hợp thường xuyên tuyên truyền về việc triển khai, kết quả thực hiện Nghị quyết?",
    "options": {
      "A": "Ban Tuyên giáo và Dân vận Trung ương.",
      "B": "Văn phòng Trung ương Đảng.",
      "C": "Ban Kinh tế Trung ương.",
      "D": "Hội đồng Lý luận Trung ương."
    },
    "correct": "A"
  },
  {
    "id": 112,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mục tiêu đến năm 2045 là gì?",
    "options": {
      "A": "Trở thành nước đang phát triển có công nghiệp hiện đại.",
      "B": "Hoàn thành chuyển đổi sang mô hình phát triển đất nước tự cường, sáng tạo, nhân văn, bền vững, hội nhập và trở thành quốc gia phát triển, thu nhập cao.",
      "C": "Đạt mức thu nhập trung bình cao và cơ bản hoàn thành công nghiệp hóa.",
      "D": "Trở thành trung tâm sản xuất thông minh hàng đầu châu Á."
    },
    "correct": "B"
  },
  {
    "id": 113,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, động lực chính của sự phát triển được xác định là gì?",
    "options": {
      "A": "Vốn đầu tư nước ngoài và lao động giá rẻ.",
      "B": "Tài nguyên thiên nhiên và vị trí địa lý thuận lợi.",
      "C": "Khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và trí tuệ nhân tạo quốc gia.",
      "D": "Mở rộng thị trường xuất khẩu các mặt hàng truyền thống."
    },
    "correct": "C"
  },
  {
    "id": 114,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mô hình phát triển mới được vận hành đồng bộ theo cơ chế nào?",
    "options": {
      "A": "Nhà nước lãnh đạo, Đảng quản lý, Nhân dân làm chủ.",
      "B": "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ.",
      "C": "Thị trường quyết định, Nhà nước điều tiết, Xã hội giám sát.",
      "D": "Doanh nghiệp dẫn dắt, Nhà nước hỗ trợ, Người dân thụ hưởng."
    },
    "correct": "B"
  },
  {
    "id": 115,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, quản trị phát triển xã hội chuyển từ phương thức quản lý hành chính truyền thống và xử lý hậu quả sang hướng nào?",
    "options": {
      "A": "Tăng cường kiểm soát chặt chẽ mọi hoạt động của người dân bằng biện pháp hành chính.",
      "B": "Kết hợp hài hòa, hiệu quả với quản trị phát triển và kiến tạo xã hội chủ động, dựa trên dữ liệu, dự báo và phòng ngừa từ sớm, từ xa.",
      "C": "Giao hoàn toàn cho khu vực tư nhân quản lý các dịch vụ xã hội cơ bản.",
      "D": "Tập trung xử lý nghiêm các vi phạm sau khi sự việc đã xảy ra để răn đe."
    },
    "correct": "B"
  },
  {
    "id": 116,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, văn hóa được xác định giữ vai trò gì trong mô hình phát triển mới?",
    "options": {
      "A": "Là lĩnh vực tiêu tốn ngân sách cần được cắt giảm để tập trung cho kinh tế; khi kinh tế phát triển mới tập trung cho văn hóa",
      "B": "Là nền tảng tinh thần, nguồn lực và động lực nội sinh, năng lực sáng tạo, sức mạnh mềm cho phát triển.",
      "C": "Chỉ là công cụ để quảng bá hình ảnh đất nước ra nước ngoài.",
      "D": "Là yếu tố phụ trợ, chỉ phát triển mạnh sau khi kinh tế đã hoàn toàn ổn định."
    },
    "correct": "B"
  },
  {
    "id": 117,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, mục tiêu phát thải ròng bằng \"0\" được thực hiện vào năm nào?",
    "options": {
      "A": "2030",
      "B": "2040",
      "C": "2050",
      "D": "2060"
    },
    "correct": "C"
  },
  {
    "id": 118,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, lĩnh vực nào được xác định là trọng tâm trong hoạt động đối ngoại?",
    "options": {
      "A": "Ngoại giao văn hóa.",
      "B": "Ngoại giao kinh tế.",
      "C": "Ngoại giao quốc phòng.",
      "D": "Ngoại giao môi trường."
    },
    "correct": "B"
  },
  {
    "id": 119,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, khâu đột phá về thể chế và quản trị quốc gia yêu cầu chuyển từ tư duy nào sang tư duy nào?",
    "options": {
      "A": "Từ \"kiến tạo, dẫn dắt\" sang \"quản lý, kiểm soát\".",
      "B": "Từ \"quản lý, kiểm soát\" sang \"kiến tạo, dẫn dắt phát triển\".",
      "C": "Từ \"phân cấp, phân quyền\" sang \"tập trung, tập quyền\".",
      "D": "Từ \"dựa trên dữ liệu\" sang \"dựa trên kinh nghiệm chủ quan\"."
    },
    "correct": "B"
  },
  {
    "id": 120,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, yếu tố nào được xác định là tư liệu sản xuất mới và tài nguyên chiến lược?",
    "options": {
      "A": "Đất đai.",
      "B": "Vốn.",
      "C": "Dữ liệu.",
      "D": "Lao động phổ thông."
    },
    "correct": "C"
  },
  {
    "id": 121,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, ngành công nghiệp nào sau đây được ưu tiên phát triển thành ngành công nghiệp nền tảng, cốt lõi?",
    "options": {
      "A": "Công nghiệp dệt may, da giày.",
      "B": "Công nghiệp vật liệu.",
      "C": "Công nghiệp khai khoáng thô.",
      "D": "Công nghiệp lắp ráp đơn giản."
    },
    "correct": "B"
  },
  {
    "id": 122,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, hệ thống y tế được chuyển dịch từ mô hình nào sang mô hình nào?",
    "options": {
      "A": "Từ \"phòng bệnh\" sang \"chữa bệnh\".",
      "B": "Từ \"chữa bệnh\" sang \"phòng bệnh và chăm sóc sức khỏe toàn diện\".",
      "C": "Từ \"công lập\" sang hoàn toàn \"tư nhân hóa\".",
      "D": "Từ \"chăm sóc sức khỏe ban đầu\" sang \"chuyên sâu\"."
    },
    "correct": "B"
  },
  {
    "id": 123,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, tư duy về dân số được chuyển căn bản từ quản lý quy mô, cơ cấu sang phát triển cái gì?",
    "options": {
      "A": "Vốn dân số quốc gia.",
      "B": "Mật độ dân số đô thị.",
      "C": "Tỷ lệ sinh thay thế.",
      "D": "Di cư lao động ra nước ngoài."
    },
    "correct": "A"
  },
  {
    "id": 124,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, cơ chế huy động, phân bổ và sử dụng nguồn lực quốc gia chuyển từ tư duy phân bổ sang tư duy nào?",
    "options": {
      "A": "Tư duy kiểm soát chặt chẽ, không để lỗ hổng.",
      "B": "Tư duy kiến tạo, phát huy hiệu quả nguồn lực.",
      "C": "Tư duy bao cấp, hỗ trợ trực tiếp.",
      "D": "Tư duy bình quân, cào bằng."
    },
    "correct": "B"
  },
  {
    "id": 125,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, trong việc tái cấu trúc hệ sinh thái đổi mới sáng tạo quốc gia, ai được xác định là trung tâm?",
    "options": {
      "A": "Các viện nghiên cứu.",
      "B": "Doanh nghiệp.",
      "C": "Cơ quan nhà nước.",
      "D": "Các trường đại học."
    },
    "correct": "B"
  },
  {
    "id": 126,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, tư duy xây dựng pháp luật cần chấm dứt tư duy nào?",
    "options": {
      "A": "\"Không quản được thì cấm\".",
      "B": "\"Mở đường, khơi thông mọi nguồn lực\".",
      "C": "\"Đúng trên mảnh đất thực tiễn của Việt Nam\".",
      "D": "\"Tiếp thu có chọn lọc giá trị tinh hoa của nhân loại\"."
    },
    "correct": "A"
  },
  {
    "id": 127,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, không gian phát triển quốc gia được tổ chức lại theo hướng nào?",
    "options": {
      "A": "Phát triển thuần túy theo địa giới hành chính.",
      "B": "Đa tầng, đa cực, liên kết đồng bộ đất liền - vùng biển - vùng trời - lòng đất - không gian số.",
      "C": "Tập trung toàn bộ nguồn lực vào các đô thị lớn, bỏ qua nông thôn.",
      "D": "Phát triển riêng lẻ, không có sự liên kết giữa các vùng."
    },
    "correct": "B"
  },
  {
    "id": 128,
    "q": "Theo Nghị quyết số 19-NQ/TW ngày 28/7/2026 về đổi mới mô hình phát triển Việt Nam, cơ quan nào được giao chủ trì phối hợp theo dõi, hướng dẫn, đôn đốc, kiểm tra, giám sát kết quả thực hiện Nghị quyết?",
    "options": {
      "A": "Ban Tuyên giáo và Dân vận Trung ương.",
      "B": "Ban Tổ chức Trung ương.",
      "C": "Ban Chính sách, chiến lược Trung ương.",
      "D": "Ủy ban Kiểm tra Trung ương."
    },
    "correct": "C"
  },
  {
    "id": 129,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tổng GRDP của các tỉnh, thành phố ven biển đóng góp vào GDP cả nước phấn đấu đạt mức nào vào năm 2030?",
    "options": {
      "A": "Trên 50%",
      "B": "Trên 60%",
      "C": "Trên 70%",
      "D": "Trên 80%"
    },
    "correct": "C"
  },
  {
    "id": 130,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, chi phí logistics phấn đấu giảm còn dưới mức nào vào năm 2030?",
    "options": {
      "A": "10% GDP",
      "B": "12% GDP",
      "C": "15% GDP",
      "D": "18% GDP"
    },
    "correct": "B"
  },
  {
    "id": 131,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tỷ trọng nuôi biển trong tổng giá trị sản xuất thủy sản phấn đấu đạt mức nào vào năm 2030?",
    "options": {
      "A": "10%",
      "B": "15%",
      "C": "20%",
      "D": "25%"
    },
    "correct": "B"
  },
  {
    "id": 132,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, đến năm 2030 phấn đấu hoàn thành bao nhiêu phần trăm tuyến đường bộ ven biển theo quy hoạch?",
    "options": {
      "A": "80%",
      "B": "90%",
      "C": "95%",
      "D": "100%"
    },
    "correct": "D"
  },
  {
    "id": 133,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, động lực chính cho phát triển quốc gia biển mạnh được xác định là gì?",
    "options": {
      "A": "Tài nguyên thiên nhiên và lao động giá rẻ.",
      "B": "Khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và nguồn nhân lực chất lượng cao.",
      "C": "Vốn đầu tư trực tiếp nước ngoài (FDI).",
      "D": "Xuất khẩu tài nguyên khoáng sản thô."
    },
    "correct": "B"
  },
  {
    "id": 134,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, diện tích các khu bảo tồn biển, ven biển đạt tối thiểu bao nhiêu phần trăm diện tích tự nhiên vùng biển quốc gia vào năm 2030?",
    "options": {
      "A": "4%",
      "B": "5%",
      "C": "6%",
      "D": "8%"
    },
    "correct": "C"
  },
  {
    "id": 135,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, ngành kinh tế nào được xác định là trụ cột quan trọng của kinh tế biển, tạo tiền đề để Việt Nam vươn lên trở thành cường quốc hàng hải?",
    "options": {
      "A": "Kinh tế hàng hải.",
      "B": "Khai thác dầu khí.",
      "C": "Du lịch biển, đảo.",
      "D": "Nuôi trồng thủy sản."
    },
    "correct": "A"
  },
  {
    "id": 136,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tốc độ tăng trưởng tổng thu du lịch biển, đảo bình quân phấn đấu đạt mức nào vào năm 2030?",
    "options": {
      "A": "10%/năm",
      "B": "12%/năm",
      "C": "14%/năm",
      "D": "16%/năm"
    },
    "correct": "C"
  },
  {
    "id": 137,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, lực lượng nào được xác định là nòng cốt, kiểu mẫu, làm chỗ dựa cho phát triển đội tàu cá hiện đại và bảo vệ, hỗ trợ ngư dân bám biển dài ngày?",
    "options": {
      "A": "Hải quân nhân dân Việt Nam.",
      "B": "Cảnh sát biển Việt Nam.",
      "C": "Dân quân biển, hải đội dân quân thường trực.",
      "D": "Bộ đội Biên phòng."
    },
    "correct": "C"
  },
  {
    "id": 138,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, chủ thể trực tiếp tham gia xây dựng và bảo vệ Tổ quốc từ hướng biển được xác định là ai?",
    "options": {
      "A": "Các doanh nghiệp nhà nước.",
      "B": "Ngư dân, cư dân biển.",
      "C": "Lực lượng vũ trang.",
      "D": "Các nhà khoa học."
    },
    "correct": "B"
  },
  {
    "id": 139,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tỷ lệ lao động qua đào tạo có bằng cấp, chứng chỉ, có kỹ năng trong các ngành, nghề, lĩnh vực biển phấn đấu đạt trên mức nào vào năm 2030?",
    "options": {
      "A": "35%",
      "B": "40%",
      "C": "45%",
      "D": "50%"
    },
    "correct": "C"
  },
  {
    "id": 140,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, nội dung cốt lõi, mang tính đột phá trong hoàn thiện thể chế phát triển quốc gia biển mạnh là gì?",
    "options": {
      "A": "Tăng cường đầu tư công.",
      "B": "Đổi mới quản trị không gian biển quốc gia.",
      "C": "Thu hút tối đa vốn FDI.",
      "D": "Mở rộng diện tích khai thác hải sản."
    },
    "correct": "B"
  },
  {
    "id": 141,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, ngành, lĩnh vực biển mới nào sau đây được ưu tiên phát triển mạnh?",
    "options": {
      "A": "Khai thác cát lòng sông.",
      "B": "Nuôi biển công nghệ cao, y-dược biển, công nghệ sinh học biển, khử mặn nước biển, điện sóng, hydro và amoniac xanh.",
      "C": "Đánh bắt hải sản ven bờ truyền thống.",
      "D": "Khai thác dầu khí bằng phương pháp thủ công."
    },
    "correct": "B"
  },
  {
    "id": 142,
    "q": "Theo Nghị quyết số 20-NQ/TW ngày 28/7/2026 về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh, tầm nhìn đến năm 2045, Việt Nam sẽ trở thành quốc gia như thế nào?",
    "options": {
      "A": "Quốc gia đang phát triển có thu nhập trung bình.",
      "B": "Quốc gia biển mạnh, giàu từ biển, phát triển bền vững từ biển, có vị thế, uy tín quan trọng trong hợp tác quốc tế, quản trị biển và đại dương toàn cầu.",
      "C": "Quốc gia chủ yếu dựa vào xuất khẩu tài nguyên thô.",
      "D": "Quốc gia có nền kinh tế thuần nông nghiệp."
    },
    "correct": "B"
  },
  {
    "id": 143,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, Nghị quyết này thay thế văn bản nào trước đây?",
    "options": {
      "A": "Nghị quyết số 18-NQ/TW ngày 16/6/2022.",
      "B": "Nghị quyết số 19-NQ/TW ngày 28/7/2026.",
      "C": "Nghị quyết số 36-NQ/TW ngày 22/10/2018.",
      "D": "Nghị quyết số 20-QĐ/TW ngày 25/10/2021."
    },
    "correct": "A"
  },
  {
    "id": 144,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, đất đai thuộc sở hữu của ai?",
    "options": {
      "A": "Tập thể nhân dân lao động.",
      "B": "Toàn dân do Nhà nước đại diện chủ sở hữu.",
      "C": "Nhà nước sở hữu toàn bộ và vĩnh viễn.",
      "D": "Tư nhân và Nhà nước cùng sở hữu."
    },
    "correct": "B"
  },
  {
    "id": 145,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, quyền sử dụng đất được xác định là gì?",
    "options": {
      "A": "Là quyền sở hữu đất đai hợp pháp của cá nhân.",
      "B": "Là một loại tài sản và hàng hóa đặc biệt nhưng không phải là quyền sở hữu.",
      "C": "Là quyền khai thác tài nguyên thiên nhiên vô thời hạn.",
      "D": "Là tài sản công không được phép chuyển nhượng."
    },
    "correct": "B"
  },
  {
    "id": 146,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, tư duy về bồi thường khi thu hồi đất cần chuyển mạnh từ \"bồi thường tài sản bị thu hồi\" sang tư duy nào?",
    "options": {
      "A": "Bồi thường theo giá thị trường tự do.",
      "B": "Tái thiết cuộc sống cho người dân.",
      "C": "Hỗ trợ một lần bằng tiền mặt.",
      "D": "Cung cấp đất ở tái định cư bắt buộc."
    },
    "correct": "B"
  },
  {
    "id": 147,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, mục tiêu cụ thể đến hết năm 2026 là gì?",
    "options": {
      "A": "Hoàn thành sửa đổi toàn bộ hệ thống Luật Đất đai.",
      "B": "Xóa bỏ hoàn toàn tranh chấp, khiếu kiện về đất đai.",
      "C": "Hoàn thành xây dựng cơ sở dữ liệu số đối với toàn bộ các thửa đất đã được thu thập thông tin, dữ liệu.",
      "D": "Tư nhân hóa một phần quỹ đất nông nghiệp kém hiệu quả."
    },
    "correct": "C"
  },
  {
    "id": 148,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, mục tiêu đến hết năm 2027 là gì?",
    "options": {
      "A": "Cơ bản hoàn thành công tác đo đạc lập bản đồ địa chính và xây dựng cơ sở dữ liệu đất đai đối với diện tích chưa có.",
      "B": "Hoàn thành quy hoạch sử dụng đất toàn quốc và tất cả các địa phương.",
      "C": "Xóa bỏ hoàn toàn tình trạng đất bỏ hoang, suy thoái trên cả nước.",
      "D": "Số hóa 100% giấy chứng nhận quyền sử dụng đất đã cấp trước năm 2020."
    },
    "correct": "A"
  },
  {
    "id": 149,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, định hướng đổi mới về quy hoạch sử dụng đất là gì?",
    "options": {
      "A": "Tăng số lượng các loại quy hoạch chi tiết để quản lý chặt chẽ.",
      "B": "Tiến tới chỉ xây dựng một quy hoạch thống nhất trong phạm vi một đơn vị hành chính.",
      "C": "Giao toàn bộ quyền lập quy hoạch cho khu vực tư nhân.",
      "D": "Không cần quy hoạch đối với đất nông nghiệp và đất lâm nghiệp."
    },
    "correct": "B"
  },
  {
    "id": 150,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, việc giao đất, cho thuê đất đối với quỹ đất do Nhà nước quản lý được thực hiện chủ yếu qua hình thức nào?",
    "options": {
      "A": "Chỉ định thầu trực tiếp cho nhà đầu tư chiến lược.",
      "B": "Đấu giá quyền sử dụng đất, đấu thầu dự án có sử dụng đất.",
      "C": "Giao không thu tiền sử dụng đất để thu hút đầu tư.",
      "D": "Thỏa thuận trực tiếp giữa chính quyền và doanh nghiệp."
    },
    "correct": "B"
  },
  {
    "id": 151,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, đối với các dự án bồi thường, hỗ trợ, tái định cư, Nghị quyết chủ trương thực hiện như thế nào?",
    "options": {
      "A": "Gộp chung với dự án đầu tư chính để tiết kiệm thời gian.",
      "B": "Tách thành dự án độc lập để thực hiện trước.",
      "C": "Giao cho tư nhân tự thỏa thuận hoàn toàn với người dân.",
      "D": "Thực hiện sau khi dự án đầu tư hoàn thành ít nhất 50%."
    },
    "correct": "B"
  },
  {
    "id": 152,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, nguyên tắc xác định, thẩm định, quyết định giá đất được phân định như thế nào?",
    "options": {
      "A": "Địa phương xây dựng khung, Trung ương quyết định giá cụ thể.",
      "B": "Giá đất do thị trường tự quyết định hoàn toàn theo cung cầu.",
      "C": "Trung ương xây dựng tiêu chí khung, địa phương quyết định giá đất.",
      "D": "Giá đất do Hội đồng nhân dân các cấp quyết định cuối cùng."
    },
    "correct": "C"
  },
  {
    "id": 153,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, Nhà nước khuyến khích giao dịch bất động sản qua hình thức nào để minh bạch hóa thị trường?",
    "options": {
      "A": "Giao dịch bằng tiền mặt trực tiếp giữa các bên.",
      "B": "Giao dịch qua sàn giao dịch, thanh toán qua ngân hàng, không dùng tiền mặt.",
      "C": "Giao dịch qua môi giới tự do không cần đăng ký.",
      "D": "Giao dịch bằng hiện vật hoặc vàng để tránh lạm phát."
    },
    "correct": "B"
  },
  {
    "id": 154,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, chính sách đối với đất nông nghiệp hướng tới việc gì?",
    "options": {
      "A": "Hạn chế tối đa việc tích tụ, tập trung đất đai.",
      "B": "Mở rộng đối tượng, hạn mức nhận chuyển quyền sử dụng đất nông nghiệp.",
      "C": "Cấm tuyệt đối mọi hình thức chuyển đổi mục đích sử dụng.",
      "D": "Thu hồi toàn bộ đất nông nghiệp của hộ gia đình để giao cho doanh nghiệp."
    },
    "correct": "B"
  },
  {
    "id": 155,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, cơ chế nào được thí điểm để xử lý các dự án nhà ở thương mại của chủ đầu tư không còn khả năng thực hiện?",
    "options": {
      "A": "Nhà nước mua lại dự án.",
      "B": "Giao cho ngân hàng xử lý nợ và phát mại tài sản.",
      "C": "Tự động hủy bỏ dự án và thu hồi đất.",
      "D": "Chuyển giao cho cộng đồng dân cư tự quản lý."
    },
    "correct": "A"
  },
  {
    "id": 156,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, cơ quan nào có trách nhiệm theo dõi, đôn đốc, hướng dẫn việc thực hiện Nghị quyết và định kỳ báo cáo Bộ Chính trị, Ban Bí thư?",
    "options": {
      "A": "Ban Chính sách, chiến lược Trung ương.",
      "B": "Văn phòng Trung ương Đảng.",
      "C": "Thanh tra Chính phủ.",
      "D": "Bộ Tài nguyên và Môi trường."
    },
    "correct": "A"
  },
  {
    "id": 157,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, việc quản lý đất đai phải đảm bảo nguyên tắc gì về lãnh thổ?",
    "options": {
      "A": "Quản lý theo ngành là chủ yếu, ưu tiên chuyên môn.",
      "B": "Thống nhất quản lý theo lãnh thổ quốc gia.",
      "C": "Quản lý theo từng địa phương hoàn toàn độc lập.",
      "D": "Quản lý theo từng dự án đầu tư riêng biệt."
    },
    "correct": "B"
  },
  {
    "id": 158,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, đối với đất trồng lúa, Nghị quyết nghiên cứu đổi mới chính sách theo hướng nào?",
    "options": {
      "A": "Giữ cứng nhắc về diện tích tối thiểu để bảo đảm an ninh.",
      "B": "Cho phép chuyển đổi diện tích đất trồng lúa kém hiệu quả, đảm bảo an ninh lương thực.",
      "C": "Cấm tuyệt đối mọi hình thức chuyển đổi mục đích sử dụng.",
      "D": "Chuyển toàn bộ sang đất phi nông nghiệp để phát triển công nghiệp."
    },
    "correct": "B"
  },
  {
    "id": 159,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, thời hạn sử dụng đất đối với nhà ở cho thuê, nhà ở chính sách, nhà công vụ thuộc sở hữu Nhà nước là bao lâu?",
    "options": {
      "A": "50 năm.",
      "B": "70 năm.",
      "C": "Lâu dài.",
      "D": "Theo niên hạn xây dựng công trình."
    },
    "correct": "C"
  },
  {
    "id": 160,
    "q": "Theo Nghị quyết số 21-NQ/TW ngày 28/7/2026 về quan điểm, định hướng sửa đổi Luật Đất đai và các luật có liên quan, mục tiêu tổng quát của việc hoàn thiện thể chế, chính sách về quản lý và sử dụng đất là gì?",
    "options": {
      "A": "Tăng tối đa nguồn thu ngân sách từ các hoạt động liên quan đến đất đai.",
      "B": "Tư nhân hóa hoàn toàn thị trường bất động sản để kích thích tăng trưởng.",
      "C": "Giảm thiểu sự can thiệp của Nhà nước vào thị trường đất đai.",
      "D": "Đưa đất đai thực sự trở thành nguồn lực chiến lược, lợi thế cạnh tranh và động lực phát triển đất nước."
    },
    "correct": "D"
  },
  {
    "id": 161,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, công tác bảo vệ an ninh quốc gia được đặt dưới sự lãnh đạo như thế nào?",
    "options": {
      "A": "Tuyệt đối, trực tiếp về mọi mặt của Đảng.",
      "B": "Thống nhất và phân cấp của Quốc hội.",
      "C": "Tự chủ hoàn toàn của lực lượng vũ trang.",
      "D": "Linh hoạt theo từng địa phương và ngành."
    },
    "correct": "A"
  },
  {
    "id": 162,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, an ninh trong kỷ nguyên mới mở rộng phạm vi bảo vệ sang những yếu tố nào?",
    "options": {
      "A": "Chỉ tập trung bảo vệ chủ quyền lãnh thổ và biên giới trên bộ.",
      "B": "Bảo vệ các yếu tố cấu thành năng lực phát triển quốc gia, sự vận hành ổn định của toàn bộ hệ thống kinh tế, xã hội, công nghệ.",
      "C": "Chỉ bảo vệ an ninh chính trị nội bộ và lãnh đạo cấp cao.",
      "D": "Bảo vệ tuyệt đối các tài nguyên thiên nhiên chưa được khai thác."
    },
    "correct": "B"
  },
  {
    "id": 163,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, tư duy bảo vệ an ninh cần chuyển dịch từ \"quản lý từng nguy cơ\" sang hướng nào?",
    "options": {
      "A": "Quản lý tập trung, bao cấp.",
      "B": "Quản trị tương tác giữa các nguy cơ.",
      "C": "Loại bỏ hoàn toàn mọi nguy cơ.",
      "D": "Chấp nhận rủi ro ở mức độ cao."
    },
    "correct": "B"
  },
  {
    "id": 164,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, mục tiêu tổng quát là ngăn ngừa, đẩy lùi từ sớm các nhân tố gây mất ổn định chính trị từ những đâu?",
    "options": {
      "A": "Từ bên trong, từ không gian mạng, không gian vũ trụ, không gian tâm pháp, không gian biển và đại dương.",
      "B": "Từ các thế lực thù địch bên ngoài.",
      "C": "Từ các vùng biên giới trên bộ và trên biển.",
      "D": "Từ các tổ chức tôn giáo trái pháp luật."
    },
    "correct": "A"
  },
  {
    "id": 165,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, tầm nhìn đến năm 2045, bảo vệ an ninh con người sẽ đạt mức độ nào?",
    "options": {
      "A": "Thuộc nhóm dẫn đầu của khu vực và thế giới.",
      "B": "Đạt mức trung bình của các nước đang phát triển.",
      "C": "Tập trung chủ yếu vào an ninh y tế và thực phẩm.",
      "D": "Chỉ đảm bảo cho khu vực thành thị và các trung tâm lớn."
    },
    "correct": "A"
  },
  {
    "id": 166,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, bảo vệ an ninh chế độ được xác định là nhiệm vụ gì?",
    "options": {
      "A": "Nhiệm vụ thường xuyên của ngành công an.",
      "B": "Nhiệm vụ chiến lược, sống còn của quốc gia.",
      "C": "Nhiệm vụ phụ trợ trong thời bình.",
      "D": "Nhiệm vụ chủ yếu của lực lượng dân quân tự vệ."
    },
    "correct": "B"
  },
  {
    "id": 167,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, để chủ động đẩy lùi nguy cơ, thách thức, cần hình thành hệ thống gì?",
    "options": {
      "A": "Hệ thống thu thập, phân tích xử lý thông tin hiện đại, kết nối dữ liệu đa ngành, đa tầng.",
      "B": "Hệ thống giám sát bằng camera tại mọi nơi công cộng.",
      "C": "Hệ thống kiểm duyệt thông tin chặt chẽ trên internet.",
      "D": "Hệ thống báo cáo hành chính theo truyền thống."
    },
    "correct": "A"
  },
  {
    "id": 168,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, công tác phát hiện, ngăn chặn yếu tố tiềm ẩn phức tạp về an ninh, trật tự cần được thực hiện từ đâu?",
    "options": {
      "A": "Từ cấp tỉnh trở lên.",
      "B": "Từ cơ sở, trên các lĩnh vực, địa bàn.",
      "C": "Từ các cơ quan trung ương đến địa phương.",
      "D": "Từ các tổ chức quốc tế."
    },
    "correct": "B"
  },
  {
    "id": 169,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, việc bảo đảm an ninh trong các không gian mới (vũ trụ, tâm pháp, ngầm, biển và đại dương) cần được làm gì trong các chương trình quốc gia?",
    "options": {
      "A": "Tách riêng thành một chiến lược độc lập hoàn toàn.",
      "B": "Bổ sung nội dung bảo vệ an ninh vào các chương trình quốc gia, chiến lược, quy hoạch.",
      "C": "Giao hoàn toàn cho khu vực tư nhân đầu tư và quản lý.",
      "D": "Tạm hoãn cho đến khi có công nghệ tiên tiến."
    },
    "correct": "B"
  },
  {
    "id": 170,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, quy định về bảo đảm an ninh trong nghiên cứu, phát triển và ứng dụng trí tuệ nhân tạo (AI) cần tích hợp yếu tố an ninh từ khâu nào?",
    "options": {
      "A": "Khâu thương mại hóa sản phẩm.",
      "B": "Khâu thiết kế, phát triển và triển khai.",
      "C": "Khâu đào tạo nhân lực.",
      "D": "Khâu thanh lý, loại bỏ thiết bị."
    },
    "correct": "B"
  },
  {
    "id": 171,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, công nghiệp quốc phòng, công nghiệp an ninh cần phát triển theo hướng nào?",
    "options": {
      "A": "Tự chủ, tự lực, tự cường, lưỡng dụng, hiện đại.",
      "B": "Phụ thuộc hoàn toàn vào chuyển giao công nghệ nước ngoài.",
      "C": "Chỉ tập trung sản xuất vũ khí hạng nặng.",
      "D": "Giải thể các doanh nghiệp nhà nước trong lĩnh vực này."
    },
    "correct": "A"
  },
  {
    "id": 172,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, Nghị quyết này thay thế văn bản nào?",
    "options": {
      "A": "Nghị quyết số 51-NQ/TW ngày 05/9/2019 của Bộ Chính trị.",
      "B": "Nghị quyết số 28-NQ/TW ngày 12/3/2023.",
      "C": "Nghị quyết số 36-NQ/TW ngày 22/10/2018.",
      "D": "Nghị quyết số 18-NQ/TW ngày 16/6/2022."
    },
    "correct": "A"
  },
  {
    "id": 173,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, cơ quan nào chủ trì, phối hợp với các cơ quan liên quan thường xuyên theo dõi, đôn đốc, kiểm tra, giám sát việc thực hiện Nghị quyết?",
    "options": {
      "A": "Đảng ủy Công an Trung ương.",
      "B": "Ban Tuyên giáo và Dân vận Trung ương.",
      "C": "Ủy ban Kiểm tra Trung ương.",
      "D": "Văn phòng Trung ương Đảng."
    },
    "correct": "A"
  },
  {
    "id": 174,
    "q": "Theo Nghị quyết số 22-NQ/TW ngày 28/7/2026 về Chiến lược An ninh quốc gia, để chủ động đẩy lùi nguy cơ, thách thức, cần kiên định đường lối đối ngoại độc lập, tự chủ, tự cường, đa phương hóa, đa dạng hóa và kiên trì, nhất quán nguyên tắc nào?",
    "options": {
      "A": "\"Không chọn bên\".",
      "B": "\"Liên minh chặt chẽ\".",
      "C": "\"Ưu tiên lợi ích kinh tế\".",
      "D": "\"Đối đầu trực tiếp\"."
    },
    "correct": "A"
  },
  {
    "id": 175,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, chủ trương đổi mới, sắp xếp tổ chức bộ máy của hệ thống chính trị theo hướng tinh gọn, hoạt động hiệu năng, hiệu lực, hiệu quả được khẳng định là gì?",
    "options": {
      "A": "Hoàn toàn đúng đắn, phù hợp.",
      "B": "Cần xem xét lại trong thời gian tới.",
      "C": "Chỉ mang lại hiệu quả ở cấp tỉnh và thành phố.",
      "D": "Chưa thực sự giải quyết được các bất cập trong quản lý nhà nước."
    },
    "correct": "A"
  },
  {
    "id": 176,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, quá trình vận hành mô hình mới đã tạo chuyển biến rõ nét trong tư duy quản lý, chuyển mạnh từ tư duy quản lý hành chính sang hướng nào?",
    "options": {
      "A": "Quản trị phát triển.",
      "B": "Quản lý tập trung, bao cấp.",
      "C": "Quản lý theo mệnh lệnh hành chính.",
      "D": "Quản lý phân tán, tự phát theo địa phương."
    },
    "correct": "A"
  },
  {
    "id": 177,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, đối với những lĩnh vực liên ngành, giao thoa, phải thực hiện nguyên tắc nào sau đây?",
    "options": {
      "A": "Nhiều cơ quan cùng chịu trách nhiệm chính để chia sẻ rủi ro.",
      "B": "Một việc có một cơ quan chủ trì, một đầu mối chịu trách nhiệm chính.",
      "C": "Giao cho cấp xã tự quyết định dựa trên tình hình thực tế.",
      "D": "Thành lập ban chỉ đạo liên ngành tạm thời cho từng vụ việc."
    },
    "correct": "B"
  },
  {
    "id": 178,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, cấp xã được xác định là tuyến đầu của cái gì trong mô hình chính quyền địa phương 2 cấp?",
    "options": {
      "A": "Hoạch định chính sách vĩ mô.",
      "B": "Quản trị công, trực tiếp phục vụ người dân, doanh nghiệp.",
      "C": "Phân bổ nguồn lực vùng và liên kết vùng.",
      "D": "Kiểm tra, giám sát hoạt động của cấp tỉnh."
    },
    "correct": "B"
  },
  {
    "id": 179,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, cấp tỉnh giữ vai trò gì trong mô hình chính quyền địa phương 2 cấp?",
    "options": {
      "A": "Trực tiếp giải quyết thủ tục hành chính cho từng hộ dân.",
      "B": "Trung tâm trong quản trị, tổ chức không gian phát triển, liên kết vùng.",
      "C": "Thực thi các nhiệm vụ cụ thể tại cơ sở theo chỉ đạo.",
      "D": "Giám sát trực tiếp từng cán bộ, công chức cấp xã."
    },
    "correct": "B"
  },
  {
    "id": 180,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, công tác đánh giá cán bộ cần đổi mới theo hướng gắn với tiêu chí nào?",
    "options": {
      "A": "Thâm niên công tác.",
      "B": "Bằng cấp, học vị.",
      "C": "Sản phẩm cụ thể, kết quả đầu ra.",
      "D": "Mối quan hệ xã hội rộng rãi."
    },
    "correct": "C"
  },
  {
    "id": 181,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, việc xử lý dứt điểm nhà, đất, trụ sở, tài sản công dôi dư sau sắp xếp phải tuân theo nguyên tắc nào?",
    "options": {
      "A": "Bán đấu giá ngay lập tức cho khu vực tư nhân để lấy vốn đầu tư các dự án khác.",
      "B": "Công khai, minh bạch, đúng pháp luật, không để lãng phí, thất thoát.",
      "C": "Giao cho cán bộ, công chức sử dụng làm tài sản riêng.",
      "D": "Để nguyên hiện trạng, chờ chỉ đạo cụ thể của cấp trên."
    },
    "correct": "B"
  },
  {
    "id": 182,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, dữ liệu phải trở thành nền tảng của chỉ đạo, điều hành, giám sát, đánh giá cán bộ và phục vụ người dân, doanh nghiệp dựa trên nguyên tắc nào?",
    "options": {
      "A": "Đúng, đủ, sạch, sống, thống nhất, dùng chung.",
      "B": "Bảo mật tuyệt đối, không chia sẻ giữa các ngành.",
      "C": "Phân tán theo từng ngành dọc để đảm bảo an ninh.",
      "D": "Chỉ sử dụng khi có sự cố hoặc thanh tra, kiểm tra."
    },
    "correct": "A"
  },
  {
    "id": 183,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, việc ứng dụng trí tuệ nhân tạo (AI) trong tham mưu, điều hành và phục vụ người dân phải đảm bảo điều kiện gì?",
    "options": {
      "A": "Thay thế hoàn toàn con người trong việc ra quyết định cuối cùng.",
      "B": "Có kiểm soát và xác định rõ trách nhiệm của con người trong quyết định cuối cùng.",
      "C": "Chỉ áp dụng thí điểm ở cấp Trung ương và cấp tỉnh.",
      "D": "Không cần quy định pháp lý đi kèm để thúc đẩy đổi mới sáng tạo."
    },
    "correct": "B"
  },
  {
    "id": 184,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, chức năng, nhiệm vụ tham mưu về công tác dân vận được chuyển từ Ban Tuyên giáo và Dân vận Trung ương về đâu?",
    "options": {
      "A": "Văn phòng Trung ương Đảng.",
      "B": "Đảng ủy Mặt trận Tổ quốc, các đoàn thể Trung ương.",
      "C": "Ban Tổ chức Trung ương.",
      "D": "Ủy ban Kiểm tra Trung ương."
    },
    "correct": "B"
  },
  {
    "id": 185,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, kiểm soát quyền lực phải đi đôi với nguyên tắc nào để không làm cán bộ sợ trách nhiệm, né tránh công việc?",
    "options": {
      "A": "Xử lý nghiêm mọi sai sót dù là nhỏ nhất.",
      "B": "Khuyến khích đổi mới, sáng tạo.",
      "C": "Giảm biên chế mạnh mẽ ở tất cả các cấp.",
      "D": "Cắt giảm ngân sách hoạt động của các cơ quan."
    },
    "correct": "B"
  },
  {
    "id": 186,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, thước đo trọng tâm trong đánh giá hiệu năng, hiệu lực, hiệu quả vận hành của mô hình mới là gì?",
    "options": {
      "A": "Số lượng văn bản quy phạm pháp luật được ban hành.",
      "B": "Sự hài lòng của người dân, doanh nghiệp và tiến độ xử lý công việc.",
      "C": "Số lượng cuộc họp, hội nghị được tổ chức trong năm.",
      "D": "Mức độ chi tiêu ngân sách nhà nước tại địa phương."
    },
    "correct": "B"
  },
  {
    "id": 187,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, năng lực thực thi của cán bộ cấp nào được xác định là thước đo quan trọng kiểm định sự thành công của mô hình mới?",
    "options": {
      "A": "Cấp xã.",
      "B": "Cấp cơ sở.",
      "C": "Cấp tỉnh.",
      "D": "Cấp Trung ương."
    },
    "correct": "A"
  },
  {
    "id": 189,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, việc bàn giao, tiếp nhận, quản lý, chỉnh lý và số hóa hồ sơ, tài liệu sau sắp xếp phải đảm bảo điều gì?",
    "options": {
      "A": "Tiêu hủy các hồ sơ, tài liệu đã quá thời hạn 5 năm.",
      "B": "Giao cho cá nhân cán bộ tự quản lý để tiết kiệm chi phí.",
      "C": "Tuyệt đối không để thất lạc, hư hỏng, phân tán hồ sơ ảnh hưởng đến quyền, lợi ích hợp pháp của người dân.",
      "D": "Chỉ ưu tiên số hóa hồ sơ cán bộ, công chức, viên chức."
    },
    "correct": "C"
  },
  {
    "id": 190,
    "q": "Theo Kết luận số 76-KL/TW ngày 28/7/2026, để nâng cao năng lực thực thi, cần tăng cường đào tạo, bồi dưỡng, luân chuyển, bố trí cán bộ có năng lực, chuyên môn sâu về đâu?",
    "options": {
      "A": "Về cơ sở.",
      "B": "Về các bộ, ngành Trung ương.",
      "C": "Về các tổ chức quốc tế.",
      "D": "Về các doanh nghiệp nhà nước lớn."
    },
    "correct": "A"
  },
  {
    "id": 191,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, văn hóa Việt Nam được xác định là gì?",
    "options": {
      "A": "Nguồn lực kinh tế quan trọng",
      "B": "Giá trị lịch sử của các thế hệ",
      "C": "Nguồn lực nội sinh quan trọng",
      "D": "Sức mạnh mềm trong hoạt động đối ngoại"
    },
    "correct": "C"
  },
  {
    "id": 192,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, phát triển văn hóa, con người được xác định là gì?",
    "options": {
      "A": "Nền tảng và động lực",
      "B": "Chính sách xã hội",
      "C": "Nguồn lực vật chất",
      "D": "Công cụ quản lý"
    },
    "correct": "A"
  },
  {
    "id": 193,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, các giá trị văn hóa phải thực sự trở thành?",
    "options": {
      "A": "Nguồn lực tài chính",
      "B": "Sức mạnh mềm quốc gia",
      "C": "Thị trường văn hóa",
      "D": "Công cụ đối ngoại"
    },
    "correct": "B"
  },
  {
    "id": 194,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, phát triển văn hóa nhằm trước hết?",
    "options": {
      "A": "Mở rộng du lịch",
      "B": "Hoàn thiện nhân cách con người xã hội chủ nghĩa",
      "C": "Tăng xuất khẩu",
      "D": "Phát triển nghệ thuật"
    },
    "correct": "B"
  },
  {
    "id": 195,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, Nhân dân trong sự nghiệp phát triển văn hóa được xác định là gì?",
    "options": {
      "A": "Người quản lý",
      "B": "Chủ thể sáng tạo và thụ hưởng",
      "C": "Đối tượng thụ hưởng",
      "D": "Lực lượng hỗ trợ"
    },
    "correct": "B"
  },
  {
    "id": 196,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đầu tư cho văn hóa là gì?",
    "options": {
      "A": "Đầu tư cho phát triển bền vững",
      "B": "Chi tiêu an sinh xã hội",
      "C": "Khoản đầu tư ngắn hạn",
      "D": "Chi phí hành chính cho các nhiệm vụ"
    },
    "correct": "A"
  },
  {
    "id": 197,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nguồn lực nhà nước trong phát triển văn hóa giữ vai trò gì?",
    "options": {
      "A": "Chủ đạo",
      "B": "Dẫn dắt",
      "C": "Điều hành",
      "D": "Hỗ trợ"
    },
    "correct": "B"
  },
  {
    "id": 198,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nguồn lực xã hội và khu vực tư nhân được xác định là gì?",
    "options": {
      "A": "Nguồn lực bổ sung",
      "B": "Động lực quan trọng",
      "C": "Nguồn lực chủ yếu",
      "D": "Lực lượng quản lý"
    },
    "correct": "B"
  },
  {
    "id": 199,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong huy động nguồn lực phát triển văn hóa, thể chế giữ vai trò như thế nào?",
    "options": {
      "A": "Trung tâm",
      "B": "Điều phối",
      "C": "Then chốt",
      "D": "Bổ trợ"
    },
    "correct": "C"
  },
  {
    "id": 200,
    "q": "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam yêu cầu xử lý hài hòa mối quan hệ nào?",
    "options": {
      "A": "Bảo tồn và phát triển",
      "B": "Trung ương và địa phương",
      "C": "Nhà nước và thị trường",
      "D": "Công và tư"
    },
    "correct": "A"
  },
  {
    "id": 201,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, một mối quan hệ nội tại khác cần được xử lý hài hòa là gì?",
    "options": {
      "A": "Truyền thống và hiện đại",
      "B": "Thành thị và nông thôn",
      "C": "Nhà nước và xã hội",
      "D": "Kinh tế và văn hóa"
    },
    "correct": "A"
  },
  {
    "id": 202,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, mục tiêu chung đến năm 2030 là xây dựng nền văn hóa gì?",
    "options": {
      "A": "Tiên tiến, đậm đà bản sắc dân tộc",
      "B": "Hiện đại, hội nhập sâu rộng",
      "C": "Dân chủ, tự do, sáng tạo",
      "D": "Đa dạng, mở và số hóa"
    },
    "correct": "A"
  },
  {
    "id": 203,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nền văn hóa Việt Nam đến năm 2030 được xác định là gì?",
    "options": {
      "A": "Thống nhất trong đa dạng",
      "B": "Thống nhất về tổ chức",
      "C": "Đa dạng về thể chế",
      "D": "Đồng nhất về giá trị"
    },
    "correct": "A"
  },
  {
    "id": 204,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, môi trường văn hóa lành mạnh được xây dựng từ đâu?",
    "options": {
      "A": "Gia đình đến xã hội",
      "B": "Nhà trường đến cơ quan và xã hội",
      "C": "Gia đình, nhà trường, xã hội và không gian số",
      "D": "Nhà trường và không gian số"
    },
    "correct": "C"
  },
  {
    "id": 205,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, đặt mục tiêu cơ bản hoàn thành?",
    "options": {
      "A": "Xây dựng bảo tàng quốc gia",
      "B": "Tu bổ, tôn tạo di tích quốc gia đặc biệt",
      "C": "Số hóa mọi hoạt động văn hóa",
      "D": "Phục dựng toàn bộ lễ hội"
    },
    "correct": "B"
  },
  {
    "id": 206,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, công nghiệp văn hóa phấn đấu đóng góp bao nhiêu % GDP?",
    "options": {
      "A": "5% GDP",
      "B": "6% GDP",
      "C": "7% GDP",
      "D": "8% GDP"
    },
    "correct": "C"
  },
  {
    "id": 207,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2030, số thương hiệu quốc gia về công nghiệp văn hóa phấn đấu hình thành là bao nhiêu?",
    "options": {
      "A": "3–5",
      "B": "5–10",
      "C": "10–15",
      "D": "15–20"
    },
    "correct": "B"
  },
  {
    "id": 208,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, tầm nhìn đến năm 2045 xác định con người là gì?",
    "options": {
      "A": "Đối tượng của văn hóa",
      "B": "Trung tâm, chủ thể, mục tiêu, động lực",
      "C": "Lực lượng sáng tạo chính",
      "D": "Người thụ hưởng chính"
    },
    "correct": "B"
  },
  {
    "id": 209,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, đến năm 2045, công nghiệp văn hóa, kinh tế sáng tạo phấn đấu đóng góp như thế nào?",
    "options": {
      "A": "7% GDP",
      "B": "8% GDP",
      "C": "9% GDP",
      "D": "10% GDP"
    },
    "correct": "C"
  },
  {
    "id": 210,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, một nhiệm vụ quan trọng là đổi mới tư duy theo hướng nào?",
    "options": {
      "A": "Phát triển văn hóa ngang tầm chính trị, kinh tế, xã hội",
      "B": "Ưu tiên văn hóa sau kinh tế",
      "C": "Tập trung vào công nghiệp văn hóa",
      "D": "Đẩy mạnh xã hội hóa văn hóa"
    },
    "correct": "A"
  },
  {
    "id": 211,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong công tác tuyên truyền, giáo dục về văn hóa, lực lượng nào giữ vai trò nòng cốt?",
    "options": {
      "A": "Doanh nghiệp",
      "B": "Báo chí, xuất bản",
      "C": "Nhà trường",
      "D": "Văn nghệ sĩ"
    },
    "correct": "B"
  },
  {
    "id": 212,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, truyền thông hiện đại cần đặc biệt chú trọng?",
    "options": {
      "A": "Truyền hình",
      "B": "Truyền thông số",
      "C": "Phát thanh",
      "D": "Báo in"
    },
    "correct": "B"
  },
  {
    "id": 213,
    "q": "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam yêu cầu chuyển đổi phương thức quản lý văn hóa theo hướng nào?",
    "options": {
      "A": "Quản lý tập trung",
      "B": "Kiến tạo, phục vụ",
      "C": "Bao cấp, trực tiếp",
      "D": "Hành chính, mệnh lệnh"
    },
    "correct": "B"
  },
  {
    "id": 214,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, trong quản trị văn hóa hiện đại, yêu cầu chuyển từ?",
    "options": {
      "A": "Hậu kiểm sang tiền kiểm",
      "B": "Tiền kiểm sang hậu kiểm",
      "C": "Quản trị sang quản lý",
      "D": "Phân quyền sang tập trung"
    },
    "correct": "B"
  },
  {
    "id": 215,
    "q": "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam yêu cầu chuẩn hóa và số hóa toàn diện?",
    "options": {
      "A": "Di sản vật thể và phi vật thể",
      "B": "Chỉ tác phẩm nghệ thuật",
      "C": "Di sản và tác phẩm có giá trị",
      "D": "Các thiết chế văn hóa"
    },
    "correct": "C"
  },
  {
    "id": 216,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, nội dung nào thuộc nhóm ngành công nghiệp văn hóa được ưu tiên?",
    "options": {
      "A": "Điện ảnh, âm nhạc, mỹ thuật",
      "B": "Khai khoáng, luyện kim, hóa chất",
      "C": "Nông nghiệp, thủy sản, chăn nuôi",
      "D": "Xây dựng, giao thông, logistics"
    },
    "correct": "A"
  },
  {
    "id": 217,
    "q": "Theo Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam, ngày 24/11 hằng năm được thống nhất chọn là gì?",
    "options": {
      "A": "Ngày Di sản Việt Nam",
      "B": "Ngày Văn hóa Việt Nam",
      "C": "Ngày Nghệ thuật Việt Nam",
      "D": "Ngày Gia đình Việt Nam"
    },
    "correct": "B"
  },
  {
    "id": 218,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, kinh tế nhà nước được xác định là gì?",
    "options": {
      "A": "Thành phần kinh tế chủ yếu",
      "B": "Lực lượng sản xuất chủ yếu trong nền kinh tế Việt Nam",
      "C": "Giữ vai trò chủ đạo trong nền kinh tế quốc dân",
      "D": "Thành phần kinh tế đặc biệt"
    },
    "correct": "C"
  },
  {
    "id": 219,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, mục tiêu phát triển kinh tế nhà nước nhằm góp phần xây dựng nền kinh tế?",
    "options": {
      "A": "Khép kín, hạn chế giao lưu thương mại với các nước",
      "B": "Tự cung tự cấp, đáp ứng nhu cầu của xã hội",
      "C": "Độc lập, tự chủ, hội nhập quốc tế sâu rộng",
      "D": "Bao cấp phần lớn trong hoạt động kinh tế"
    },
    "correct": "C"
  },
  {
    "id": 220,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, kinh tế nhà nước phải phát huy vai trò gì?",
    "options": {
      "A": "Điều tiết, dẫn dắt, mở đường",
      "B": "Thay thế kinh tế tư nhân",
      "C": "Bao cấp nền kinh tế, bảo đảm công bằng",
      "D": "Chi phối toàn bộ thị trường"
    },
    "correct": "A"
  },
  {
    "id": 221,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, đổi mới quản trị doanh nghiệp theo chuẩn mực nào?",
    "options": {
      "A": "Địa phương",
      "B": "Quốc tế",
      "C": "Truyền thống",
      "D": "Bao cấp"
    },
    "correct": "B"
  },
  {
    "id": 222,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các lĩnh vực ưu tiên đầu tư là gì?",
    "options": {
      "A": "Công nghệ cao",
      "B": "Kinh doanh nhỏ",
      "C": "Dịch vụ ăn uống",
      "D": "Bán lẻ"
    },
    "correct": "A"
  },
  {
    "id": 223,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các lĩnh vực ưu tiên đầu tư là gì?",
    "options": {
      "A": "Công nghệ cao",
      "B": "Kinh doanh nhỏ",
      "C": "Dịch vụ ăn uống",
      "D": "Bán lẻ"
    },
    "correct": "A"
  },
  {
    "id": 224,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, doanh nghiệp nhà nước phải đi đầu trong nội dung nào?",
    "options": {
      "A": "Chuyển đổi xanh",
      "B": "Xuất khẩu lao động",
      "C": "Kinh doanh bán lẻ",
      "D": "Kinh doanh vàng"
    },
    "correct": "A"
  },
  {
    "id": 225,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, một trong các yêu cầu là gì?",
    "options": {
      "A": "Bảo toàn và phát triển vốn nhà nước",
      "B": "Tập trung bảo toàn vốn",
      "C": "Tập trung phát triển vốn",
      "D": "Không cần đánh giá vốn"
    },
    "correct": "A"
  },
  {
    "id": 226,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, phải tăng cường gì?",
    "options": {
      "A": "Kiểm toán và thanh tra",
      "B": "Kiểm tra, giám sát thường xuyên",
      "C": "Giảm giám sát, tăng kiểm tra",
      "D": "Hạn chế kiểm tra để doanh nghiệp chủ động phát triển"
    },
    "correct": "A"
  },
  {
    "id": 227,
    "q": "Theo Nghị quyết số 79-NQ/TW về phát triển kinh tế nhà nước, yêu cầu xuyên suốt trong thực hiện Nghị quyết là gì?",
    "options": {
      "A": "Đổi mới, hiệu quả, phát triển bền vững",
      "B": "Mở rộng bao cấp ra nhiều doanh nghiệp",
      "C": "Thu hẹp doanh nghiệp, bảo đảm hoạt động hiệu quả",
      "D": "Tăng số lượng doanh nghiệp bằng mọi giá"
    },
    "correct": "A"
  },
  {
    "id": 228,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, định hướng chiến lược thu hút đầu tư nước ngoài có sự chuyển dịch quan trọng nào dưới đây?",
    "options": {
      "A": "Chuyển từ chú trọng số lượng, quy mô vốn sang chất lượng, hiệu quả, công nghệ và giá trị gia tăng.",
      "B": "Chuyển từ ưu đãi dựa trên kết quả sang ưu đãi dựa hoàn toàn vào địa giới hành chính.",
      "C": "Giảm bớt tỷ trọng liên kết với khu vực kinh tế trong nước.",
      "D": "Hạn chế thu hút đầu tư nước ngoài trong các lĩnh vực công nghệ cao."
    },
    "correct": "A"
  },
  {
    "id": 229,
    "q": "Các lĩnh vực ưu tiên thu hút đầu tư nước ngoài theo tinh thần đổi mới của Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài bao gồm ngành nào sau đây?",
    "options": {
      "A": "Công nghệ bán dẫn, trí tuệ nhân tạo (AI), năng lượng xanh.",
      "B": "Khai thác tài nguyên thô và khoáng sản chưa qua chế biến.",
      "C": "Các ngành gia công sử dụng lao động phổ thông chi phí thấp.",
      "D": "Sản xuất tiêu dùng truyền thống quy mô nhỏ."
    },
    "correct": "A"
  },
  {
    "id": 230,
    "q": "Mục tiêu cốt lõi khi gắn kết kinh tế có vốn đầu tư nước ngoài với nền kinh tế trong nước theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài là gì?",
    "options": {
      "A": "Giúp doanh nghiệp Việt Nam tham gia sâu hơn vào chuỗi giá trị toàn cầu và nâng cao năng lực cạnh tranh.",
      "B": "Tạo sự độc lập hoàn toàn, không phụ thuộc vào thị trường quốc tế.",
      "C": "Ưu tiên doanh nghiệp FDI hơn doanh nghiệp trong nước trong mọi lĩnh vực.",
      "D": "Thu hẹp quy mô của khu vực kinh tế tư nhân trong nước."
    },
    "correct": "A"
  },
  {
    "id": 231,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, kinh tế có vốn đầu tư nước ngoài được xác định là gì?",
    "options": {
      "A": "Thành phần kinh tế chủ đạo của nền kinh tế",
      "B": "Bộ phận quan trọng của nền kinh tế quốc gia",
      "C": "Khu vực kinh tế ưu tiên tuyệt đối",
      "D": "Khu vực kinh tế bổ trợ"
    },
    "correct": "B"
  },
  {
    "id": 232,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, Nhà nước khuyến khích kinh tế có vốn đầu tư nước ngoài phát triển theo hướng nào?",
    "options": {
      "A": "Có thời hạn",
      "B": "Theo từng giai đoạn",
      "C": "Phát triển lâu dài",
      "D": "Theo từng ngành"
    },
    "correct": "C"
  },
  {
    "id": 233,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, phát triển kinh tế có vốn đầu tư nước ngoài phải gắn với yêu cầu nào sau đây?",
    "options": {
      "A": "Gia tăng xuất khẩu",
      "B": "Nâng cao năng lực tự chủ chiến lược",
      "C": "Tăng đầu tư công",
      "D": "Tăng lao động giá rẻ"
    },
    "correct": "B"
  },
  {
    "id": 233,
    "q": "Theo Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, yêu cầu chuyển mạnh từ tư duy chủ yếu thu hút vốn sang…?",
    "options": {
      "A": "Thu hút ODA",
      "B": "Phát triển nền tảng đầu tư chiến lược quốc gia",
      "C": "Phát triển kinh tế tư nhân",
      "D": "Thu hút đầu tư ngắn hạn"
    },
    "correct": "B"
  },
  {
    "id": 234,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, Nhà nước bảo đảm môi trường đầu tư theo yêu cầu nào?",
    "options": {
      "A": "Minh bạch, ổn định, nhất quán",
      "B": "Ưu tiên doanh nghiệp nước ngoài",
      "C": "Thay đổi linh hoạt",
      "D": "Quản lý tập trung"
    },
    "correct": "A"
  },
  {
    "id": 235,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, mục tiêu tổng quát đến năm 2030 là đưa Việt Nam trở thành?",
    "options": {
      "A": "Trung tâm tài chính ASEAN",
      "B": "Điểm đến có sức cạnh tranh thu hút nguồn vốn nước ngoài chất lượng cao",
      "C": "Quốc gia xuất khẩu lớn nhất ASEAN",
      "D": "Trung tâm logistics Đông Nam Á"
    },
    "correct": "B"
  },
  {
    "id": 236,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, vốn FDI thực hiện giai đoạn 2026-2030 khoảng?",
    "options": {
      "A": "80–100 tỷ USD",
      "B": "100–150 tỷ USD",
      "C": "150–200 tỷ USD",
      "D": "250–300 tỷ USD"
    },
    "correct": "C"
  },
  {
    "id": 237,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2030, tỷ lệ nội địa hóa trung bình trong các ngành công nghiệp chủ lực đạt bao nhiêu %?",
    "options": {
      "A": "30–35%",
      "B": "35–40%",
      "C": "45–50%",
      "D": "60–65%"
    },
    "correct": "C"
  },
  {
    "id": 238,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, tỷ lệ khu công nghiệp sinh thái đạt khoảng bao nhiêu %?",
    "options": {
      "A": "5%",
      "B": "10%",
      "C": "20%",
      "D": "30%"
    },
    "correct": "B"
  },
  {
    "id": 239,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, đến năm 2045, khu vực FDI đóng góp khoảng bao nhiêu GDP?",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "correct": "C"
  },
  {
    "id": 240,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài kiên quyết không đánh đổi điều gì để lấy tăng trưởng kinh tế đơn thuần?",
    "options": {
      "A": "Lao động và thị trường",
      "B": "Môi trường và an sinh xã hội",
      "C": "Thuế và giá trị kinh tế",
      "D": "Thị trường"
    },
    "correct": "B"
  },
  {
    "id": 241,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, quản trị đầu tư được thực hiện trên nền tảng nào?",
    "options": {
      "A": "Blockchain",
      "B": "Dữ liệu số và trí tuệ nhân tạo",
      "C": "Điện toán lượng tử",
      "D": "Internet truyền thống"
    },
    "correct": "B"
  },
  {
    "id": 242,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, một trong các loại hạ tầng được ưu tiên là gì?",
    "options": {
      "A": "Hạ tầng thương mại điện tử",
      "B": "Hạ tầng logistics",
      "C": "Hạ tầng văn hóa",
      "D": "Hạ tầng thể thao"
    },
    "correct": "B"
  },
  {
    "id": 243,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, một lĩnh vực cốt lõi ưu tiên thu hút đầu tư là gì?",
    "options": {
      "A": "Chip bán dẫn",
      "B": "Dệt may",
      "C": "Khoáng sản",
      "D": "Khai thác than"
    },
    "correct": "A"
  },
  {
    "id": 244,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, doanh nghiệp FDI được khuyến khích cam kết về gì?",
    "options": {
      "A": "Tăng nhập khẩu",
      "B": "Chuyển giao công nghệ",
      "C": "Tăng lao động phổ thông",
      "D": "Giảm đầu tư"
    },
    "correct": "B"
  },
  {
    "id": 245,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, khuyến khích tổ chức tín dụng hỗ trợ gì?",
    "options": {
      "A": "Dự án tiêu dùng",
      "B": "Dự án xanh",
      "C": "Dự án khai khoáng",
      "D": "Dự án bất động sản"
    },
    "correct": "B"
  },
  {
    "id": 246,
    "q": "Nghị quyết số 10-NQ/TW về phát triển kinh tế có vốn đầu tư nước ngoài, bộ tiêu chí đánh giá hiệu quả FDI lấy tiêu chí chủ yếu là gì?",
    "options": {
      "A": "Quy mô dự án",
      "B": "Chất lượng và hiệu quả",
      "C": "Lao động và vốn",
      "D": "Thời gian đầu tư"
    },
    "correct": "B"
  },
  {
    "id": 247,
    "q": "Nội dung trọng tâm của Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng là gì?",
    "options": {
      "A": "Công tác huấn luyện, SSCĐ",
      "B": "Giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật, bảo đảm an toàn",
      "C": "Xây dựng lực lượng, tổ chức biên chế",
      "D": "Hậu cần, kỹ thuật và đời sống"
    },
    "correct": "B"
  },
  {
    "id": 248,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn được xác định là gì?",
    "options": {
      "A": "Nhiệm vụ bổ trợ",
      "B": "Nhiệm vụ chính trị trọng tâm",
      "C": "Nhiệm vụ chuyên ngành",
      "D": "Nhiệm vụ theo thời vụ"
    },
    "correct": "B"
  },
  {
    "id": 248,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, toàn quân tổ chức hoạt động gì?",
    "options": {
      "A": "Đợt kiểm tra chính trị, quân sự",
      "B": "Đợt sinh hoạt chính trị và “chỉnh huấn” sâu rộng",
      "C": "Đợt diễn tập toàn quân về tư tưởng, kỷ luật",
      "D": "Đợt hội thao kỷ luật, an toàn giao thông"
    },
    "correct": "B"
  },
  {
    "id": 248,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, nội dung nào được yêu cầu quán triệt sâu sắc?",
    "options": {
      "A": "“7 dám”",
      "B": "“5 vững”",
      "C": "“6 rõ”",
      "D": "Các phương án đã nêu"
    },
    "correct": "D"
  },
  {
    "id": 249,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, người chỉ huy, chính ủy, chính trị viên các cấp chịu trách nhiệm chính về nội dung nào?",
    "options": {
      "A": "Công tác huấn luyện, sẵn sàng chiến đấu, bảo đảm hậu cần, kỹ thuật và các nhiệm vụ khác",
      "B": "Chất lượng giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật, bảo đảm an toàn",
      "C": "Công tác đối ngoại, xây dựng hình ảnh “Bộ đội Cụ Hồ”",
      "D": "Hoạt động sản xuất gắn với bảo đảm quốc phòng, an ninh"
    },
    "correct": "B"
  },
  {
    "id": 250,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, chỉ huy từ cấp trung đoàn trở lên phải làm gì?",
    "options": {
      "A": "Tăng cường kiểm tra cấp dưới",
      "B": "Tập trung kiểm tra khi có vụ việc",
      "C": "Kiểm tra theo kế hoạch năm",
      "D": "Giao toàn bộ cho cơ quan chính trị"
    },
    "correct": "A"
  },
  {
    "id": 251,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, chỉ huy cấp tiểu đoàn, đại đội phải làm gì?",
    "options": {
      "A": "Thường xuyên bám sát hoạt động của bộ đội",
      "B": "Tăng cường quản lý trong giờ hành chính",
      "C": "Giao quản lý cho cán bộ cấp dưới",
      "D": "Chỉ quan tâm quân nhân yếu kém"
    },
    "correct": "A"
  },
  {
    "id": 252,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, việc quản lý quân nhân cần chú trọng cả nội dung nào?",
    "options": {
      "A": "Ngày nghỉ, giờ nghỉ",
      "B": "Thời gian huấn luyện",
      "C": "Thời gian giao ban",
      "D": "Thời gian trực và nhiệm vụ đột xuất"
    },
    "correct": "A"
  },
  {
    "id": 253,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, khi có vụ việc xảy ra, đơn vị phải tránh biểu hiện gì?",
    "options": {
      "A": "Kiên quyết xử lý",
      "B": "Bao che, giấu giếm khuyết điểm",
      "C": "Báo cáo kịp thời",
      "D": "Kiểm tra, xác minh"
    },
    "correct": "B"
  },
  {
    "id": 254,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, một yêu cầu quan trọng trong tuyển chọn, đào tạo và sử dụng cán bộ là gì?",
    "options": {
      "A": "Đúng người, đúng việc",
      "B": "Tăng số lượng cán bộ",
      "C": "Ưu tiên thâm niên",
      "D": "Ưu tiên quân hàm"
    },
    "correct": "A"
  },
  {
    "id": 255,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, công tác bảo vệ chính trị nội bộ phải gắn với gì?",
    "options": {
      "A": "Bảo vệ bí mật nhà nước, an ninh, an toàn",
      "B": "Phát triển kinh tế, bảo đảm an ninh, an toàn",
      "C": "Đối ngoại quân sự, ứng dụng khoa học",
      "D": "Tăng gia sản xuất, bảo đảm đời sống"
    },
    "correct": "A"
  },
  {
    "id": 256,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, một trong những biện pháp xây dựng môi trường văn hóa quân sự là gì?",
    "options": {
      "A": "Tăng cường dân chủ, kỷ luật, kỷ cương",
      "B": "Hạn chế đối thoại",
      "C": "Giảm hoạt động tập thể",
      "D": "Tăng quản lý hành chính"
    },
    "correct": "A"
  },
  {
    "id": 257,
    "q": "Theo Chỉ thị số 76/CT-BQP ngày 28/4/2026 của Bộ trưởng Bộ Quốc phòng, cơ quan thông tấn, báo chí trong Quân đội cần chú trọng gì?",
    "options": {
      "A": "Tăng tin tức giải trí",
      "B": "Tuyên truyền gương người tốt, việc tốt, mô hình hay",
      "C": "Hạn chế thông tin tích cực",
      "D": "Chỉ đưa tin hoạt động cấp trên"
    },
    "correct": "B"
  },
  {
    "id": 258,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, phương hướng trọng tâm là gì?",
    "options": {
      "A": "Tăng quân số",
      "B": "Tạo chuyển biến vững chắc về nhận thức, trách nhiệm và hành động",
      "C": "Mở rộng đối ngoại",
      "D": "Tăng đầu tư xây dựng"
    },
    "correct": "B"
  },
  {
    "id": 259,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, quản lý tư tưởng bộ đội cần được thực hiện theo tư duy như thế nào?",
    "options": {
      "A": "Quản lý hành chính",
      "B": "Quản trị nhận thức",
      "C": "Quản lý tập trung",
      "D": "Xử lý vụ việc"
    },
    "correct": "B"
  },
  {
    "id": 260,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, cùng với “quản trị nhận thức”, cần đẩy mạnh gì?",
    "options": {
      "A": "Chủ động kiến tạo thông tin",
      "B": "Quản lý tập trung",
      "C": "Hạn chế thông tin",
      "D": "Kiểm soát hành chính"
    },
    "correct": "A"
  },
  {
    "id": 261,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, phương châm xử lý các vấn đề về tư tưởng, kỷ luật và an toàn là gì?",
    "options": {
      "A": "Xử lý từ trên xuống",
      "B": "Phòng ngừa là chính, phát hiện sớm, ngăn ngừa từ xa, giải quyết từ cơ sở",
      "C": "Chờ vụ việc xảy ra",
      "D": "Tập trung xử lý sau vi phạm"
    },
    "correct": "B"
  },
  {
    "id": 262,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, phương châm nào xác định rõ vị trí của bốn mặt công tác?",
    "options": {
      "A": "Giáo dục chính trị là nền tảng; quản lý tư tưởng là trọng tâm; duy trì kỷ luật là khâu then chốt; bảo đảm an toàn là yêu cầu xuyên suốt",
      "B": "Kỷ luật là nền tảng; giáo dục là trọng tâm; an toàn là khâu then chốt; quản lý tư tưởng là thường xuyên",
      "C": "Tư tưởng là nền tảng; an toàn là trọng tâm; giáo dục là then chốt; tư tưởng là quan trọng",
      "D": "An toàn là nền tảng; kỷ luật là trọng tâm; tư tưởng là yêu cầu xuyên suốt"
    },
    "correct": "A"
  },
  {
    "id": 263,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, một trong những chỉ tiêu về mô hình quản lý tư tưởng, kỷ luật là gì?",
    "options": {
      "A": "Mỗi đại đội có ít nhất 1 mô hình",
      "B": "Mỗi trung đoàn, lữ đoàn và tương đương trở lên có ít nhất 1 mô hình",
      "C": "Mỗi đơn vị trực thuộc Quân khu có ít nhất 1 mô hình",
      "D": "Mỗi tiểu đoàn có ít nhất 2 mô hình"
    },
    "correct": "B"
  },
  {
    "id": 264,
    "q": "Theo Nghị quyết số 09-NQ/ĐU ngày 13/7/2026 của Đảng ủy Quân khu 5 về lãnh đạo tăng cường công tác giáo dục chính trị, quản lý tư tưởng, duy trì kỷ luật và bảo đảm an toàn trong LLVT Quân khu, “6 rõ” gồm?",
    "options": {
      "A": "Rõ người, rõ việc, rõ thời gian, rõ trách nhiệm, rõ sản phẩm, rõ thẩm quyền",
      "B": "Rõ mục tiêu, rõ kế hoạch, rõ cán bộ, rõ đơn vị, rõ thời gian, rõ kết quả",
      "C": "Rõ người, rõ việc, rõ kinh phí, rõ tiến độ, rõ kết quả, rõ kiểm tra",
      "D": "Rõ nhiệm vụ, rõ tổ chức, rõ cán bộ, rõ quyền hạn, rõ tiến độ, rõ kết quả"
    },
    "correct": "A"
  },
  {
    "id": 265,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc phát huy phẩm chất “Bộ đội Cụ Hồ” thời gian qua đã gắn chặt với nội dung nào sau đây?",
    "options": {
      "A": "Thực hiện các cuộc vận động, phong trào thi đua, gắn xây dựng phẩm chất “Bộ đội Cụ Hồ” với thực hiện nhiệm vụ chính trị của cơ quan, đơn vị.",
      "B": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
      "C": "Đẩy mạnh công tác giáo dục chính trị, tư tưởng, gắn rèn luyện phẩm chất “Bộ đội Cụ Hồ” với xây dựng bản lĩnh chính trị và ý thức trách nhiệm.",
      "D": "Thực hiện nghiêm các quy định về xây dựng, chỉnh đốn Đảng, gắn rèn luyện phẩm chất “Bộ đội Cụ Hồ” với nâng cao chất lượng đội ngũ cán bộ, đảng viên."
    },
    "correct": "B"
  },
  {
    "id": 266,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, chỉ đạo của Tổng Bí thư, Chủ tịch nước Tô Lâm được quán triệt gồm?",
    "options": {
      "A": "Tập trung xây dựng bản lĩnh chính trị, phẩm chất đạo đức và ý thức trách nhiệm, đồng thời phòng ngừa những biểu hiện tiêu cực.",
      "B": "“2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa” và phương châm “5 vững”.",
      "C": "Tập trung nâng cao chất lượng đội ngũ, giữ vững kỷ luật, đoàn kết và chủ động phòng ngừa những hạn chế.",
      "D": "Xây dựng phẩm chất, năng lực, trách nhiệm và kỷ luật, đồng thời đấu tranh với những biểu hiện lệch lạc."
    },
    "correct": "B"
  },
  {
    "id": 267,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, kết quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới là gì?",
    "options": {
      "A": "Tiêu chí quan trọng để khuyến khích cán bộ, đảng viên, quần chúng nâng cao ý thức trách nhiệm trong thực hiện nhiệm vụ.",
      "B": "Tiêu chí bắt buộc đánh giá kết quả hoàn thành nhiệm vụ.",
      "C": "Nội dung tham khảo để các cấp ủy, tổ chức đảng và người chỉ huy xem xét mức độ rèn luyện phẩm chất, đạo đức của cán bộ, đảng viên.",
      "D": "Nội dung chủ yếu áp dụng đối với cán bộ chủ trì, gắn với trách nhiệm nêu gương và kết quả lãnh đạo, chỉ đạo thực hiện nhiệm vụ."
    },
    "correct": "B"
  },
  {
    "id": 268,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc tu dưỡng, rèn luyện theo chuẩn mực “Bộ đội Cụ Hồ” phải trở thành?",
    "options": {
      "A": "Hoạt động được tổ chức theo từng đợt, gắn với các sự kiện chính trị và những nhiệm vụ trọng tâm của cơ quan, đơn vị.",
      "B": "Phong trào thi đua được triển khai hằng năm.",
      "C": "Nhu cầu tự thân, ý thức tự giác, việc làm thường xuyên hằng ngày.",
      "D": "Kết quả rèn luyện phẩm chất, đạo đức và mức độ hoàn thành nhiệm vụ của từng cá nhân."
    },
    "correct": "C"
  },
  {
    "id": 269,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải được cụ thể hóa phù hợp với nội dung nào sau đây?",
    "options": {
      "A": "Đặc điểm, tình hình và yêu cầu thực tiễn của từng cơ quan, đơn vị.",
      "B": "Chức năng, nhiệm vụ của từng cơ quan, đơn vị và chức trách của mỗi quân nhân.",
      "C": "Đặc điểm tổ chức, biên chế, điều kiện công tác và yêu cầu xây dựng chính quy của từng cơ quan, đơn vị trong toàn quân.",
      "D": "Đặc điểm địa bàn, môi trường công tác và điều kiện thực hiện nhiệm vụ của từng cơ quan, đơn vị trong tình hình mới."
    },
    "correct": "B"
  },
  {
    "id": 270,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, cán bộ, đảng viên trong toàn quân phải duy trì thường xuyên nội dung nào?",
    "options": {
      "A": "Đăng ký nội dung phấn đấu gắn với yêu cầu nâng cao chất lượng và hiệu quả thực hiện nhiệm vụ.",
      "B": "Đăng ký kế hoạch học tập và nâng cao trình độ mọi mặt đáp ứng yêu cầu nhiệm vụ trong tình hình mới.",
      "C": "Đăng ký, cam kết tu dưỡng, rèn luyện, phấn đấu.",
      "D": "Đăng ký kế hoạch học tập và nâng cao trình độ mọi mặt."
    },
    "correct": "C"
  },
  {
    "id": 271,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, kết quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải được đánh giá bằng:",
    "options": {
      "A": "Kết quả thi đua, mức độ hoàn thành các chỉ tiêu và những thành tích nổi bật của cá nhân, tập thể trong thực hiện nhiệm vụ.",
      "B": "Bản lĩnh chính trị, lòng trung thành và kết quả hoàn thành nhiệm vụ.",
      "C": "Phẩm chất đạo đức, ý thức tổ chức kỷ luật và tinh thần trách nhiệm trong thực hiện chức trách, nhiệm vụ được giao.",
      "D": "Ý thức tự giác tu dưỡng, tinh thần đoàn kết và thái độ trách nhiệm của cán bộ, chiến sĩ trong công tác và sinh hoạt."
    },
    "correct": "B"
  },
  {
    "id": 272,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải kết hợp chặt chẽ với:",
    "options": {
      "A": "Công tác xây dựng nền nếp chính quy, quản lý kỷ luật và nâng cao chất lượng huấn luyện, sẵn sàng chiến đấu của cơ quan, đơn vị.",
      "B": "Công tác xây dựng, chỉnh đốn Đảng và xây dựng đơn vị vững mạnh toàn diện “mẫu mực, tiêu biểu”.",
      "C": "Công tác giáo dục chính trị, tư tưởng, xây dựng bản lĩnh chính trị và nâng cao ý thức trách nhiệm của cán bộ, chiến sĩ.",
      "D": "Công tác thi đua, khen thưởng, xây dựng môi trường văn hóa và phát huy tinh thần đoàn kết trong cơ quan, đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 273,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, phương châm nêu gương của đội ngũ cán bộ là gì?",
    "options": {
      "A": "Đi trước, làm trước.",
      "B": "Trên trước, dưới sau.",
      "C": "Dưới trước, trên sau.",
      "D": "Học trước, làm sau."
    },
    "correct": "B"
  },
  {
    "id": 274,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, nội dung nào được chú trọng trong xây dựng môi trường văn hóa quân sự?",
    "options": {
      "A": "Bảo đảm cơ sở vật chất và điều kiện sinh hoạt, học tập cho bộ đội.",
      "B": "Xây dựng các mối quan hệ chuẩn mực, đề cao dân chủ, giữ nghiêm kỷ luật.",
      "C": "Xây dựng đời sống văn hóa lành mạnh, phát huy tinh thần đoàn kết, trách nhiệm và ý thức tự giác của cán bộ, chiến sĩ.",
      "D": "Xây dựng môi trường công tác chính quy, nâng cao chất lượng giao tiếp, ứng xử và thực hiện nghiêm các quy định của đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 275,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, cần kiên quyết đấu tranh phản bác?",
    "options": {
      "A": "Các quan điểm, nhận thức lệch lạc về xây dựng phẩm chất, đạo đức và văn hóa của người quân nhân trong tình hình mới.",
      "B": "Các luận điệu xuyên tạc, phủ nhận giá trị văn hóa \"Bộ đội Cụ Hồ\".",
      "C": "Các biểu hiện nhận thức không đúng về truyền thống, phẩm chất và chuẩn mực văn hóa của Quân đội nhân dân Việt Nam.",
      "D": "Các thông tin sai lệch, thiếu căn cứ."
    },
    "correct": "B"
  },
  {
    "id": 276,
    "q": "Theo Chị thị số 676-CT/QUTW của Ban Thường vụ Quân ủy Trung ương, yêu cầu đối với công tác lãnh đạo là phải làm gì?",
    "options": {
      "A": "Chỉ đạo theo từng vụ việc.",
      "B": "Chủ động, quyết liệt và sát thực tiễn.",
      "C": "Giao khoán cho cơ quan chính trị.",
      "D": "Chỉ tập trung vào tuyên truyền."
    },
    "correct": "B"
  },
  {
    "id": 277,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, nhiệm vụ đấu tranh trên không gian mạng nhằm mục tiêu trực tiếp nào?",
    "options": {
      "A": "Chủ động tuyên truyền, lan tỏa những hình ảnh đẹp, gương người tốt, việc tốt và giá trị văn hóa của cán bộ, chiến sĩ trên không gian mạng.",
      "B": "Bảo vệ nền tảng tư tưởng của Đảng và giá trị văn hóa “Bộ đội Cụ Hồ”.",
      "C": "Chủ động định hướng thông tin, nâng cao nhận thức và trách nhiệm của cán bộ, chiến sĩ khi tham gia các hoạt động trên không gian mạng.",
      "D": "Phát huy hiệu quả các nền tảng số, nâng cao năng lực ứng dụng công nghệ và xây dựng môi trường thông tin lành mạnh trong Quân đội."
    },
    "correct": "B"
  },
  {
    "id": 278,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, yêu cầu đối với công tác kiểm tra, giám sát là gì?",
    "options": {
      "A": "Thực hiện định kỳ khi có yêu cầu.",
      "B": "Tiến hành thường xuyên, kịp thời phát hiện và chấn chỉnh hạn chế.",
      "C": "Chỉ kiểm tra cuối năm.",
      "D": "Chỉ kiểm tra đơn vị yếu."
    },
    "correct": "B"
  },
  {
    "id": 279,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, việc đánh giá kết quả phát huy giá trị văn hóa “Bộ đội Cụ Hồ” cần bảo đảm yêu cầu nào?",
    "options": {
      "A": "Đánh giá trên cơ sở báo cáo của cơ quan, đơn vị, kết hợp với nhận xét của cấp ủy và người chỉ huy trong quá trình thực hiện.",
      "B": "Thực chất, khách quan, gắn với kết quả thực hiện nhiệm vụ.",
      "C": "Đánh giá trên cơ sở kết quả xây dựng, duy trì và nhân rộng các mô hình, điển hình trong phát huy giá trị văn hóa “Bộ đội Cụ Hồ”.",
      "D": "Đánh giá theo nhận xét, kết luận của cấp trên."
    },
    "correct": "B"
  },
  {
    "id": 280,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, việc biểu dương, khen thưởng điển hình tiên tiến nhằm mục đích chủ yếu nào?",
    "options": {
      "A": "Tạo động lực để cán bộ, chiến sĩ tích cực tu dưỡng, rèn luyện, phấn đấu hoàn thành tốt chức trách, nhiệm vụ được giao.",
      "B": "Lan tỏa, nhân rộng những giá trị tốt đẹp.",
      "C": "Tạo sức thuyết phục trong giáo dục, nêu gương, góp phần củng cố ý thức trách nhiệm và động cơ phấn đấu của cán bộ, chiến sĩ.",
      "D": "Tạo động lực duy trì và nâng cao chất lượng thực hiện nhiệm vụ trong cơ quan, đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 281,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, nội dung nào thể hiện rõ yêu cầu nâng cao trách nhiệm của người đứng đầu?",
    "options": {
      "A": "Tăng cường kiểm tra, giám sát và chấn chỉnh những hạn chế trong thực hiện nhiệm vụ.",
      "B": "Thực hiện nêu gương trong mọi hoạt động.",
      "C": "Đổi mới phương pháp lãnh đạo, nâng cao hiệu quả quản lý, điều hành.",
      "D": "Xây dựng đơn vị chính quy, duy trì nền nếp và chấp hành nghiêm kỷ luật."
    },
    "correct": "B"
  },
  {
    "id": 282,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, nội dung nào cần được coi là giải pháp quan trọng để xây dựng môi trường văn hóa quân sự lành mạnh?",
    "options": {
      "A": "Tăng cường cơ sở vật chất, bảo đảm điều kiện sinh hoạt và công tác cho bộ đội.",
      "B": "Phát huy dân chủ đi đôi với giữ nghiêm kỷ luật.",
      "C": "Tăng cường hoạt động giáo dục, tuyên truyền.",
      "D": "Đầu tư trang thiết bị, nâng cao điều kiện phục vụ công tác và sinh hoạt của bộ đội."
    },
    "correct": "B"
  },
  {
    "id": 283,
    "q": "Theo Chị thị số 676-CT/TW của Ban Thường vụ Quân ủy Trung ương, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải được thực hiện theo yêu cầu nào?",
    "options": {
      "A": "Theo từng phong trào, gắn với các đợt thi đua và nhiệm vụ trọng tâm của cơ quan, đơn vị.",
      "B": "Có trọng tâm, trọng điểm, tập trung vào những thời điểm và nhiệm vụ cần thiết.",
      "C": "Thường xuyên, liên tục, đồng bộ và hiệu quả.",
      "D": "Theo từng chuyên ngành, phù hợp với chức năng, nhiệm vụ và đặc điểm hoạt động của từng cơ quan, đơn vị."
    },
    "correct": "C"
  },
  {
    "id": 284,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, việc học tập, thực hành tư tưởng, đạo đức, phương pháp, phong cách Hồ Chí Minh được xác định là nhiệm vụ như thế nào?",
    "options": {
      "A": "Là nhiệm vụ quan trọng, thường xuyên của tổ chức đảng.",
      "B": "Là nhiệm vụ chính trị thường xuyên, được triển khai chủ yếu trong các tổ chức đảng và gắn với trách nhiệm của người đứng đầu.",
      "C": "Là nhiệm vụ trọng yếu, thường xuyên của cả hệ thống chính trị và mỗi cán bộ, đảng viên.",
      "D": "Là nhiệm vụ chính trị quan trọng, được thực hiện thường xuyên trong các cơ quan, đơn vị và tập trung vào đội ngũ cán bộ chủ trì."
    },
    "correct": "C"
  },
  {
    "id": 285,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, di sản Chủ tịch Hồ Chí Minh để lại được xác định là gì?",
    "options": {
      "A": "Hệ thống những giá trị tư tưởng, lý luận và thực tiễn có ý nghĩa quan trọng đối với sự nghiệp xây dựng đất nước.",
      "B": "Hệ thống những giá trị lịch sử, văn hóa và cách mạng có ý nghĩa sâu sắc đối với Đảng, Nhà nước và nhân dân ta.",
      "C": "Hệ thống những giá trị chính trị, đạo đức và văn hóa có ý nghĩa nền tảng đối với quá trình xây dựng đất nước trong thời kỳ mới.",
      "D": "Tài sản tinh thần vô giá của Đảng và dân tộc, là nguồn sức mạnh và động lực phát triển."
    },
    "correct": "D"
  },
  {
    "id": 286,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, quan điểm nào sau đây cần được thực hiện trong quá trình học tập và thực hành theo Bác?",
    "options": {
      "A": "Đảng là trung tâm.",
      "B": "Phát triển là trên hết.",
      "C": "Dân là gốc.",
      "D": "Nhà nước quản lý toàn diện."
    },
    "correct": "C"
  },
  {
    "id": 287,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, biểu hiện nào dưới đây cần được phát huy trong đội ngũ cán bộ, đảng viên?",
    "options": {
      "A": "Chủ động đổi mới phương pháp công tác, phát huy kinh nghiệm và hoàn thành tốt nhiệm vụ được giao.",
      "B": "Luôn đặt lợi ích cá nhân, tập thể và yêu cầu nhiệm vụ trong mối quan hệ hài hòa, phù hợp.",
      "C": "Thận trọng trong thực hiện nhiệm vụ, cân nhắc kỹ lưỡng trước những vấn đề mới phát sinh trong thực tiễn.",
      "D": "Dám nghĩ, dám làm, dám chịu trách nhiệm vì lợi ích chung."
    },
    "correct": "D"
  },
  {
    "id": 288,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, đội ngũ cán bộ nào cần được kịp thời thay thế?",
    "options": {
      "A": "Cán bộ có tuổi đời cao, hạn chế về khả năng thích ứng với yêu cầu nhiệm vụ trong tình hình mới.",
      "B": "Cán bộ chưa qua đào tạo đầy đủ, còn hạn chế về trình độ chuyên môn và năng lực thực tiễn công tác.",
      "C": "Cán bộ né tránh, đùn đẩy trách nhiệm, không dám quyết, không dám làm vì lợi ích chung.",
      "D": "Cán bộ mới được bổ nhiệm, chưa có nhiều kinh nghiệm và còn cần thời gian để trưởng thành trong thực tiễn."
    },
    "correct": "C"
  },
  {
    "id": 289,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, một trong những yêu cầu quan trọng nhằm bảo vệ nền tảng tư tưởng của Đảng là gì?",
    "options": {
      "A": "Tuyên truyền, vận động các đối tượng, nhất là học sinh, sinh viên hạn chế sử dụng mạng xã hội.",
      "B": "Tập trung tuyên truyền cho tất cả các đối tượng, ưu tiên đội ngũ cán bộ, đảng viên.",
      "C": "Không công khai thông tin.",
      "D": "Tích cực đấu tranh, phản bác các quan điểm sai trái, thù địch."
    },
    "correct": "D"
  },
  {
    "id": 290,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, trách nhiệm nêu gương phải trở thành phương thức lãnh đạo nhằm mục đích chủ yếu nào?",
    "options": {
      "A": "Nâng cao vai trò, uy tín của đội ngũ cán bộ lãnh đạo, tạo động lực hoàn thành tốt chức trách, nhiệm vụ được giao.",
      "B": "Tăng cường vai trò lãnh đạo của cấp ủy, phát huy tính chủ động và trách nhiệm của tổ chức đảng trong thực hiện nhiệm vụ.",
      "C": "Tạo uy tín, lan tỏa trách nhiệm và củng cố niềm tin của Nhân dân đối với Đảng và hệ thống chính trị.",
      "D": "Đẩy mạnh trách nhiệm của cán bộ, đảng viên, tạo chuyển biến tích cực trong thực hiện các phong trào thi đua của cơ quan, đơn vị."
    },
    "correct": "C"
  },
  {
    "id": 291,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, lực lượng nào phải đi đầu trong thực hiện trách nhiệm nêu gương?",
    "options": {
      "A": "Toàn thể Nhân dân, tích cực tham gia thực hiện các chủ trương, đường lối và nhiệm vụ chung của đất nước.",
      "B": "Đoàn viên thanh niên, phát huy vai trò xung kích, tiên phong trong thực hiện nhiệm vụ và các phong trào hành động.",
      "C": "Cán bộ, công chức ở cơ sở, chủ động thực hiện trách nhiệm nêu gương trong công tác và quan hệ với Nhân dân.",
      "D": "Cán bộ, đảng viên, nhất là người đứng đầu và cán bộ lãnh đạo các cấp."
    },
    "correct": "D"
  },
  {
    "id": 292,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, nhóm tiêu chí đầu tiên trong đánh giá trách nhiệm nêu gương của cán bộ là gì?",
    "options": {
      "A": "Trình độ chuyên môn, ngoại ngữ và khả năng vận dụng kiến thức vào thực hiện chức trách, nhiệm vụ được giao.",
      "B": "Kỹ năng quản lý, điều hành và khả năng sử dụng hiệu quả các nguồn lực trong thực hiện nhiệm vụ công tác.",
      "C": "Kinh nghiệm thực tiễn, phương pháp công tác và khả năng xử lý các tình huống phát sinh trong quá trình thực hiện nhiệm vụ.",
      "D": "Bản lĩnh chính trị, tư duy đổi mới và năng lực tổ chức thực hiện."
    },
    "correct": "D"
  },
  {
    "id": 293,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, yêu cầu “chủ động nắm bắt tình hình, dự báo chính xác, quyết sách kịp thời” thuộc nhóm tiêu chí nào?",
    "options": {
      "A": "Tinh thần phục vụ Nhân dân, hành động vì lợi ích chung, lấy người dân làm trung tâm.",
      "B": "Đạo đức công vụ.",
      "C": "Bản lĩnh chính trị, tư duy đổi mới và năng lực tổ chức thực hiện.",
      "D": "Văn hóa công sở."
    },
    "correct": "C"
  },
  {
    "id": 294,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, nội dung nào sau đây thuộc nhóm tiêu chí về đạo đức công vụ và kỷ luật thực thi?",
    "options": {
      "A": "Chủ động học tập, nâng cao trình độ chuyên môn, đổi mới tư duy và vận dụng hiệu quả kiến thức vào thực tiễn công tác.",
      "B": "Nói đi đôi với làm, làm việc khoa học, sâu sát thực tiễn, có kết quả và sản phẩm cụ thể.",
      "C": "Chủ động, sáng tạo trong công tác, dám nghĩ, dám làm, dám chịu trách nhiệm và quyết đoán trước những vấn đề thực tiễn.",
      "D": "Gần gũi, sâu sát cơ sở, lắng nghe ý kiến Nhân dân, kịp thời nắm bắt tâm tư và giải quyết những vấn đề phát sinh."
    },
    "correct": "B"
  },
  {
    "id": 295,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, tinh thần phục vụ Nhân dân của cán bộ, đảng viên được thể hiện rõ nhất qua yêu cầu nào?",
    "options": {
      "A": "Tôn trọng và bảo đảm quyền, lợi ích hợp pháp, chính đáng của Nhân dân.",
      "B": "Chủ động giải quyết công việc theo đúng chức trách, thẩm quyền, bảo đảm kỷ luật, kỷ cương và hiệu quả trong thực hiện nhiệm vụ.",
      "C": "Nâng cao trách nhiệm trong công tác và kịp thời giải quyết những vấn đề phát sinh từ cơ sở.",
      "D": "Gần dân, trọng dân, hiểu dân, học dân, dựa vào dân và vì dân."
    },
    "correct": "D"
  },
  {
    "id": 296,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, việc nghiên cứu về tư tưởng, đạo đức, phương pháp, phong cách Hồ Chí Minh cần tập trung làm rõ nội dung nào?",
    "options": {
      "A": "Giá trị và ý nghĩa của các phong trào thi đua yêu nước trong quá trình xây dựng và bảo vệ Tổ quốc trong tình hình mới.",
      "B": "Những mô hình phát triển kinh tế tiêu biểu, phù hợp với yêu cầu đổi mới và phát triển đất nước trong giai đoạn hiện nay.",
      "C": "Giá trị lý luận và thực tiễn của Di sản Hồ Chí Minh trước yêu cầu mới.",
      "D": "Quá trình hình thành, phát triển và vai trò của các tổ chức chính trị - xã hội trong sự nghiệp cách mạng của đất nước."
    },
    "correct": "C"
  },
  {
    "id": 297,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, nội dung nào cần được chú trọng để lan tỏa việc học tập, thực hành theo Bác?",
    "options": {
      "A": "Mở rộng các hội nghị chuyên đề, tăng cường trao đổi kinh nghiệm và tạo chuyển biến tích cực trong nhận thức, hành động.",
      "B": "Tăng số lượng báo cáo định kỳ, thường xuyên đánh giá kết quả và kịp thời chấn chỉnh những hạn chế trong thực hiện.",
      "C": "Xây dựng nhiều quy chế mới và nâng cao hiệu quả quản lý, điều hành trong thực tiễn.",
      "D": "Nhân rộng mô hình hay, cách làm sáng tạo, hiệu quả và biểu dương kịp thời điển hình tiên tiến."
    },
    "correct": "D"
  },
  {
    "id": 298,
    "q": "Theo Chỉ thị số 07-CT/TW ngày 13/7/2026 của Bộ Chính trị, một trong những căn cứ quan trọng để đánh giá hiệu quả học tập, thực hành theo Bác là gì?",
    "options": {
      "A": "Mức độ chuyển biến về nhận thức, trách nhiệm và hành động của cán bộ, đảng viên trong thực hiện nhiệm vụ.",
      "B": "Mức độ chuyển biến về chất lượng công tác, tinh thần trách nhiệm và hiệu quả thực hiện nhiệm vụ trong thực tiễn.",
      "C": "Mức độ hài lòng của Nhân dân.",
      "D": "Mức độ chuyển biến về phương pháp công tác, ý thức trách nhiệm và kết quả thực hiện nhiệm vụ của cơ quan, đơn vị."
    },
    "correct": "C"
  },
  {
    "id": 299,
    "q": "Qua nghiên cứu chuyên đề năm 2026, để việc thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại đạt hiệu quả, yêu cầu có tính nguyên tắc đầu tiên là gì?",
    "options": {
      "A": "Tăng cường đầu tư cơ sở vật chất, trang bị kỹ thuật, bảo đảm tốt các điều kiện cần thiết cho quá trình xây dựng Quân đội hiện đại.",
      "B": "Bảo đảm sự lãnh đạo, chỉ đạo thống nhất của cấp ủy, tổ chức đảng, chính ủy, chính trị viên, người chỉ huy và cơ quan chính trị các cấp.",
      "C": "Phát huy vai trò của đội ngũ cán bộ chính trị các cấp, đồng thời huy động sự tham gia của các tổ chức quần chúng trong toàn quân.",
      "D": "Hoàn thiện hệ thống văn bản hướng dẫn, quy định và tiêu chuẩn cụ thể, bảo đảm thống nhất trong tổ chức thực hiện ở các cấp."
    },
    "correct": "B"
  },
  {
    "id": 300,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu trực tiếp của việc nâng cao nhận thức, trách nhiệm của quân nhân trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "A": "Nâng cao trình độ chuyên môn, nghiệp vụ của quân nhân, đáp ứng yêu cầu xây dựng Quân đội trong tình hình mới.",
      "B": "Hình thành sự thống nhất về nhận thức, ý chí và hành động trong tổ chức thực hiện Bộ tiêu chí.",
      "C": "Hoàn thiện phương thức quản lý, chỉ huy, điều hành và nâng cao trách nhiệm của các cơ quan, đơn vị trong tổ chức thực hiện.",
      "D": "Đổi mới phương pháp huấn luyện, nâng cao chất lượng đào tạo và khả năng thực hiện nhiệm vụ của quân nhân."
    },
    "correct": "B"
  },
  {
    "id": 301,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải được gắn chặt với nội dung nào để bảo đảm tính thiết thực?",
    "options": {
      "A": "Các nhiệm vụ thường xuyên và yêu cầu xây dựng chính quy của cơ quan, đơn vị.",
      "B": "Thực hiện nhiệm vụ chính trị trung tâm của cơ quan, đơn vị.",
      "C": "Các hoạt động giáo dục, huấn luyện và rèn luyện của cơ quan, đơn vị.",
      "D": "Các nhiệm vụ xây dựng tổ chức và duy trì nền nếp của cơ quan, đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 302,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cấp ủy, tổ chức đảng cần tập trung lãnh đạo nội dung nào để bảo đảm Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại được triển khai thống nhất?",
    "options": {
      "A": "Tăng cường lãnh đạo công tác giáo dục, quán triệt, nâng cao nhận thức và trách nhiệm của cán bộ, đảng viên trong thực hiện.",
      "B": "Quán triệt, cụ thể hóa nghị quyết và tổ chức thực hiện chặt chẽ, đồng bộ.",
      "C": "Tăng cường kiểm tra, giám sát, kịp thời phát hiện, chấn chỉnh những hạn chế và nâng cao chất lượng tổ chức thực hiện.",
      "D": "Đầu tư cơ sở vật chất hiện đại để bảo đảm triển khai một cách toàn diện, hiệu quả."
    },
    "correct": "B"
  },
  {
    "id": 303,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong tổ chức thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại, trách nhiệm của người đứng đầu được thể hiện rõ nhất ở nội dung nào?",
    "options": {
      "A": "Chỉ đạo xây dựng kế hoạch năm, xác định rõ nội dung, chỉ tiêu và tiến độ thực hiện của cơ quan, đơn vị.",
      "B": "Nêu gương, trực tiếp lãnh đạo, tổ chức, kiểm tra và chịu trách nhiệm về kết quả thực hiện",
      "C": "Chỉ đạo kiểm tra, đánh giá kết quả thực hiện, kịp thời phát hiện và chấn chỉnh những hạn chế, khuyết điểm.",
      "D": "Phân công nhiệm vụ cho cơ quan chính trị, làm tốt công tác tham mưu triển khai xây dựng kế hoạch tuyên truyền, giáo dục để mỗi quân nhân nắm được các nội dung của Bộ Tiêu chí."
    },
    "correct": "B"
  },
  {
    "id": 304,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại chỉ đạt hiệu quả khi bảo đảm yêu cầu nào sau đây?",
    "options": {
      "A": "Phân công rõ nhiệm vụ cho từng tổ chức, lực lượng, bảo đảm phát huy vai trò và trách nhiệm của từng chủ thể trong đơn vị.",
      "B": "Phát huy sức mạnh tổng hợp của các tổ chức, lực lượng và từng quân nhân trong toàn đơn vị.",
      "C": "Phát huy vai trò của cấp ủy và người chỉ huy quyết liệt trong triển khai thực hiện. Đồng thời thường xuyên kiểm tra, đôn đốc.",
      "D": "Phát huy vai trò của cơ quan chính trị và các tổ chức quần chúng, tạo sự thống nhất trong nhận thức và hành động của quân nhân."
    },
    "correct": "B"
  },
  {
    "id": 305,
    "q": "Qua nghiên cứu chuyên đề năm 2026, để bảo đảm thực hiện hiệu quả Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại, cấp ủy, tổ chức đảng cần tập trung đổi mới nội dung nào trong công tác lãnh đạo?",
    "options": {
      "A": "Đổi mới phương thức lãnh đạo, tập trung bảo đảm nguồn lực và các điều kiện cần thiết phù hợp với yêu cầu xây dựng Quân đội hiện đại.",
      "B": "Ban hành nghị quyết chuyên đề, cụ thể hóa mục tiêu, chỉ tiêu và giải pháp phù hợp với đặc điểm, nhiệm vụ của từng cơ quan, đơn vị.",
      "C": "Đổi mới phương thức lãnh đạo, tập trung nâng cao chất lượng công tác hậu cần, kỹ thuật đáp ứng yêu cầu nhiệm vụ.",
      "D": "Cụ thể hóa mục tiêu, chỉ tiêu và giải pháp phù hợp với đặc điểm, nhiệm vụ của từng cơ quan, đơn vị, bảo đảm tính khả thi."
    },
    "correct": "B"
  },
  {
    "id": 306,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu đặt ra đối với cấp ủy trong lãnh đạo thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "A": "Xác định phương hướng chung, phân công nhiệm vụ cụ thể và phát huy vai trò tham mưu của các cơ quan chuyên môn.",
      "B": "Kết hợp chặt chẽ giữa ban hành nghị quyết, tổ chức thực hiện, kiểm tra và sơ kết, tổng kết.",
      "C": "Giao nhiệm vụ cho cơ quan tham mưu, đồng thời tăng cường theo dõi, kiểm tra và định kỳ đánh giá kết quả thực hiện.",
      "D": "Tập trung công tác tuyên truyền, giáo dục, nâng cao nhận thức và trách nhiệm của cán bộ, quân nhân trong toàn đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 307,
    "q": "Qua nghiên cứu chuyên đề năm 2026, vì sao việc cụ thể hóa nội dung Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại trong nghị quyết lãnh đạo của cấp ủy có ý nghĩa đặc biệt quan trọng như thế nào?",
    "options": {
      "A": "Để tăng cường vai trò lãnh đạo, chỉ đạo của cấp ủy và người chỉ huy các cấp trong tổ chức thực hiện Bộ tiêu chí.",
      "B": "Để chuyển yêu cầu của Bộ tiêu chí thành mục tiêu, nhiệm vụ và biện pháp phù hợp với thực tiễn của từng đơn vị.",
      "C": "Để làm căn cứ xác định nội dung thi đua, đánh giá kết quả và biểu dương những tập thể, cá nhân có thành tích trong thực hiện.",
      "D": "Để tạo sự thống nhất trong xây dựng kế hoạch, tổ chức thực hiện và chế độ báo cáo giữa các cơ quan, đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 308,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc kiểm tra thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại cần tập trung vào yêu cầu nào?",
    "options": {
      "A": "Tập trung đánh giá những kết quả đã đạt được, xác định cách làm hiệu quả và lựa chọn mô hình tiêu biểu để nhân rộng trong đơn vị.",
      "B": "Kịp thời phát hiện hạn chế, xác định nguyên nhân và đề ra biện pháp khắc phục, nâng cao chất lượng thực hiện Bộ tiêu chí.",
      "C": "Tập trung kiểm tra những đơn vị có kết quả triển khai chưa hiệu quả để xác định trách nhiệm và yêu cầu chấn chỉnh, khắc phục.",
      "D": "Ưu tiên kiểm tra các đơn vị điểm, đơn vị được lựa chọn làm mô hình để đánh giá kết quả, rút kinh nghiệm và nhân rộng cách làm phù hợp."
    },
    "correct": "B"
  },
  {
    "id": 309,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc sơ kết, tổng kết thực hiện Bộ tiêu chí nhằm mục đích chủ yếu nào?",
    "options": {
      "A": "Đánh giá kết quả triển khai, biểu dương, khen thưởng những tập thể, cá nhân có thành tích và lựa chọn mô hình tiêu biểu để nhân rộng.",
      "B": "Đánh giá đúng thực chất kết quả, rút kinh nghiệm và bổ sung giải pháp nâng cao chất lượng thực hiện.",
      "C": "Đánh giá mức độ hoàn thành các chỉ tiêu, làm cơ sở phục vụ công tác thi đua, khen thưởng và tổng hợp kết quả cuối năm.",
      "D": "Xác định mức độ hoàn thành nhiệm vụ của cơ quan, đơn vị, làm căn cứ xem xét danh hiệu thi đua và xếp loại cuối năm."
    },
    "correct": "B"
  },
  {
    "id": 310,
    "q": "Qua nghiên cứu chuyên đề năm 2026, thước đo quan trọng nhất đánh giá hiệu quả lãnh đạo, chỉ đạo thực hiện Bộ tiêu chí là gì?",
    "options": {
      "A": "Số lượng văn bản lãnh đạo, chỉ đạo, kế hoạch và hướng dẫn được ban hành trong quá trình tổ chức thực hiện.",
      "B": "Mức độ chuyển biến về nhận thức, trách nhiệm và kết quả hoàn thành nhiệm vụ của cơ quan, đơn vị.",
      "C": "Số lượng hội nghị, lớp tập huấn, hoạt động tuyên truyền, giáo dục được tổ chức nhằm quán triệt và triển khai Bộ tiêu chí.",
      "D": "Mức độ triển khai thực hiện của các đơn vị, khả năng phát hiện, xây dựng và nhân rộng những mô hình mới, cách làm hiệu quả."
    },
    "correct": "B"
  },
  {
    "id": 311,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu xuyên suốt trong đổi mới công tác tuyên truyền, giáo dục về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "A": "Bảo đảm thống nhất nội dung, định hướng tuyên truyền và cách thức tổ chức thực hiện Bộ tiêu chí trong các cơ quan, đơn vị.",
      "B": "Không ngừng đổi mới, hoàn thiện và nhân rộng các hình thức, phương pháp tuyên truyền theo hướng phong phú, hấp dẫn, dễ hiểu, dễ vận dụng.",
      "C": "Tăng cường số lượng báo cáo viên, tuyên truyền viên và lực lượng tham gia phổ biến, giáo dục về Bộ tiêu chí ở các cấp.",
      "D": "Đẩy mạnh tuyên truyền tại các đơn vị điểm, đơn vị có kết quả tốt, đồng thời mở rộng các hội thi, hoạt động tìm hiểu nhằm nâng cao nhận thức về Bộ tiêu chí."
    },
    "correct": "B"
  },
  {
    "id": 312,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc đưa nội dung thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại vào giáo dục chính trị có ý nghĩa chủ yếu nào?",
    "options": {
      "A": "Bổ sung nội dung, hoàn thiện chương trình giáo dục chính trị và bảo đảm quân nhân được tiếp cận đầy đủ các yêu cầu của Bộ tiêu chí.",
      "B": "Hình thành nhận thức thường xuyên, liên tục của quân nhân thông qua các hoạt động giáo dục chính trị, tư tưởng.",
      "C": "Tăng thời lượng học tập chính trị, tạo điều kiện để quân nhân có thêm thời gian nghiên cứu và trao đổi về Bộ tiêu chí.",
      "D": "Hoàn thiện chương trình đào tạo, bồi dưỡng cán bộ, chiến sĩ theo yêu cầu xây dựng Quân đội nhân dân Việt Nam hiện đại."
    },
    "correct": "B"
  },
  {
    "id": 313,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tại sao việc giáo dục về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại không chỉ tiến hành trong giờ học chính trị?",
    "options": {
      "A": "Vì cần kết hợp nội dung giáo dục với chương trình huấn luyện, sinh hoạt và các hoạt động của đơn vị để sử dụng hiệu quả thời gian, đồng thời củng cố nhận thức cho quân nhân.",
      "B": "Vì nhận thức về Bộ tiêu chí cần được củng cố thường xuyên thông qua quá trình thực hiện chức trách, nhiệm vụ và các hoạt động thực tiễn của đơn vị.",
      "C": "Vì cần giảm sự phụ thuộc vào giờ học chính trị, tăng cường các hình thức giáo dục trực quan và hoạt động thực hành để nâng cao hiệu quả tiếp thu.",
      "D": "Vì cần tập trung giáo dục bổ sung cho những quân nhân còn hạn chế về nhận thức, đồng thời phát huy vai trò tự học, tự nghiên cứu của cán bộ, chiến sĩ."
    },
    "correct": "B"
  },
  {
    "id": 314,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu đối với việc sử dụng các phương tiện thông tin hiện đại trong tuyên truyền thực hiện Bộ tiêu chí là gì?",
    "options": {
      "A": "Thay thế hoàn toàn các hình thức giáo dục truyền thống.",
      "B": "Tăng sức thuyết phục, định hướng đúng nhận thức và trách nhiệm của quân nhân.",
      "C": "Giảm thời lượng sinh hoạt chính trị tránh nhàm chán, quan tâm hơn đến hình thức tuyên truyền trên trang mạng xã hội.",
      "D": "Hạn chế tuyên truyền trực tiếp để bảo đảm thực hiện các nhiệm vụ khác."
    },
    "correct": "B"
  },
  {
    "id": 315,
    "q": "Qua nghiên cứu chuyên đề năm 2026, vì sao việc tuyên truyền về thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại phải gắn với Phong trào Thi đua Quyết thắng và các cuộc vận động?",
    "options": {
      "A": "Tạo thêm nội dung, hình thức tổ chức phong trào thi đua và các hoạt động vận động quần chúng, góp phần nâng cao khí thế thi đua trong đơn vị.",
      "B": "Tạo sự lan tỏa rộng rãi, thu hút quân nhân tham gia, đồng thời chuyển yêu cầu của Bộ tiêu chí từ nhận thức thành động lực và hành động cụ thể trong thực hiện nhiệm vụ.",
      "C": "Làm cơ sở theo dõi, đánh giá kết quả thực hiện phong trào thi đua, các cuộc vận động và phục vụ công tác bình xét, khen thưởng hằng năm.",
      "D": "Bảo đảm thống nhất nội dung tuyên truyền, giáo dục với tổ chức phong trào thi đua trong đơn vị, phát huy vai trò của các tổ chức quần chúng trong thực hiện Bộ tiêu chí."
    },
    "correct": "B"
  },
  {
    "id": 316,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc thường xuyên cổ vũ, động viên quân nhân trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại nhằm mục đích chủ yếu nào?",
    "options": {
      "A": "Tạo động lực thi đua, khuyến khích quân nhân phấn đấu nâng cao thành tích và kết quả thực hiện nhiệm vụ của cơ quan, đơn vị.",
      "B": "Khơi dậy tinh thần trách nhiệm, phát huy tính tích cực, chủ động, sáng tạo và tự giác của quân nhân trong thực hiện các yêu cầu của Bộ tiêu chí.",
      "C": "Góp phần duy trì nền nếp giáo dục chính trị, bảo đảm hoàn thành đầy đủ các nội dung, chỉ tiêu giáo dục theo kế hoạch hằng năm.",
      "D": "Tạo không khí thi đua sôi nổi, tăng cường sự gắn kết và khuyến khích quân nhân tích cực tham gia các hoạt động tập thể của đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 317,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu cốt lõi của việc phát huy sức mạnh tổng hợp trong thực hiện Bộ tiêu chí Quân đội nhân dân Việt Nam hiện đại là gì?",
    "options": {
      "A": "Phân công rõ chức năng, nhiệm vụ, quyền hạn và trách nhiệm giữa các cơ quan, đơn vị, bảo đảm phối hợp chặt chẽ trong tổ chức thực hiện.",
      "B": "Phát huy đầy đủ vai trò, trách nhiệm của mọi tổ chức, mọi lực lượng và từng quân nhân trong tổ chức thực hiện.",
      "C": "Tăng cường phối hợp với cấp ủy, chính quyền và các lực lượng trên địa bàn, tạo sự thống nhất trong thực hiện các nội dung liên quan.",
      "D": "Mở rộng các mô hình hoạt động quần chúng, phát huy sáng kiến và cách làm hiệu quả nhằm tạo chuyển biến tích cực trong thực hiện Bộ tiêu chí."
    },
    "correct": "B"
  },
  {
    "id": 318,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu sâu xa của việc giúp Nhân dân phát triển kinh tế, giảm nghèo không chỉ nhằm cải thiện đời sống mà còn nhằm làm gì?",
    "options": {
      "A": "Góp phần nâng cao hiệu quả phát triển kinh tế - xã hội, cải thiện điều kiện sống và tạo sinh kế ổn định cho Nhân dân.",
      "B": "Góp phần hoàn thành các tiêu chí phát triển kinh tế - xã hội, xây dựng nông thôn mới và nâng cao đời sống ở địa phương.",
      "C": "Tạo điều kiện thu hút nguồn lực đầu tư, phát huy tiềm năng địa phương và thúc đẩy phát triển sản xuất, kinh doanh.",
      "D": "Củng cố niềm tin của Nhân dân, xây dựng mối quan hệ gắn bó máu thịt giữa Nhân dân với LLVT."
    },
    "correct": "D"
  },
  {
    "id": 319,
    "q": "Qua nghiên cứu chuyên đề năm 2026, ý nghĩa chiến lược của việc xây dựng hệ thống chính trị cơ sở vững mạnh là gì?",
    "options": {
      "A": "Góp phần nâng cao hiệu quả quản lý nhà nước, phát triển kinh tế - xã hội và cải thiện đời sống Nhân dân trên địa bàn.",
      "B": "Phát huy tính chủ động của địa phương trong tổ chức thực hiện nhiệm vụ, giải quyết các vấn đề phát sinh từ cơ sở.",
      "C": "Tạo “lá chắn” chính trị từ cơ sở, chủ động phòng ngừa nguy cơ mất ổn định ngay từ địa bàn.",
      "D": "Nâng cao chất lượng xây dựng Đảng, củng cố tổ chức cơ sở đảng và hoàn thành các chỉ tiêu, nhiệm vụ chính trị được giao."
    },
    "correct": "C"
  },
  {
    "id": 320,
    "q": "Qua nghiên cứu chuyên đề năm 2026,, bản chất của các mô hình “Dân vận khéo” là gì?",
    "options": {
      "A": "Tổ chức các hoạt động hỗ trợ, giúp đỡ Nhân dân trong những thời điểm, hoàn cảnh cụ thể.",
      "B": "Triển khai các hoạt động xã hội, phong trào quần chúng nhằm tạo sự đồng thuận và huy động sức mạnh cộng đồng.",
      "C": "Gắn công tác dân vận với giải quyết trực tiếp nhu cầu, lợi ích thiết thực của Nhân dân.",
      "D": "Đẩy mạnh tuyên truyền, phổ biến pháp luật, nâng cao nhận thức và ý thức chấp hành của Nhân dân trên địa bàn."
    },
    "correct": "C"
  },
  {
    "id": 321,
    "q": "Qua nghiên cứu chuyên đề năm 2026,, việc hỗ trợ sinh kế lâu dài cho đồng bào có ý nghĩa nổi bật nào sau đây?",
    "options": {
      "A": "Góp phần nâng cao thu nhập, cải thiện đời sống và tạo điều kiện để đồng bào ổn định cuộc sống lâu dài.",
      "B": "Tạo điều kiện hình thành các mô hình sản xuất, hợp tác và liên kết kinh tế phù hợp với đặc điểm địa bàn.",
      "C": "Thúc đẩy phát triển sản xuất hàng hóa, khai thác tiềm năng địa phương và nâng cao hiệu quả sử dụng các nguồn lực.",
      "D": "Góp phần làm thất bại âm mưu lợi dụng đói nghèo để kích động, chia rẽ khối đại đoàn kết toàn dân tộc."
    },
    "correct": "D"
  },
  {
    "id": 322,
    "q": "Qua nghiên cứu chuyên đề năm 2026, để giải quyết các điểm nóng về an ninh nông thôn đạt hiệu quả bền vững cần thực hiện biện pháp nào sau đây?",
    "options": {
      "A": "Tập trung lực lượng, tăng cường các biện pháp xử lý nhằm nhanh chóng ổn định tình hình và hạn chế vụ việc lan rộng.",
      "B": "Kết hợp các biện pháp hành chính, pháp luật với công tác kiểm tra, giám sát và xử lý nghiêm những trường hợp vi phạm.",
      "C": "Chủ động nắm tình hình, tập trung giải quyết những hậu quả phát sinh sau vụ việc, đồng thời rút kinh nghiệm trong tổ chức thực hiện.",
      "D": "Kết hợp giữa công tác dân vận với các biện pháp quốc phòng, an ninh và phát huy vai trò của Nhân dân."
    },
    "correct": "D"
  },
  {
    "id": 323,
    "q": "Qua nghiên cứu chuyên đề năm 2026, bản chất của “thế trận lòng dân” nhằm mục đích nào sau đây?",
    "options": {
      "A": "Phát huy sức mạnh của Nhân dân trong tham gia xây dựng nền quốc phòng toàn dân và bảo vệ địa bàn.",
      "B": "Tăng cường lực lượng dân quân tự vệ, dự bị động viên và nâng cao khả năng huy động nguồn lực tại cơ sở.",
      "C": "Xây dựng niềm tin, sự đồng thuận và mối quan hệ gắn bó giữa Nhân dân với Đảng, Nhà nước và Quân đội.",
      "D": "Củng cố hệ thống chính trị cơ sở, nâng cao hiệu quả quản lý địa bàn và xây dựng khu vực phòng thủ vững chắc."
    },
    "correct": "C"
  },
  {
    "id": 324,
    "q": "Qua nghiên cứu chuyên đề năm 2026, ý nghĩa lớn nhất của hoạt động giúp dân trong thiên tai, dịch bệnh là gì?",
    "options": {
      "A": "Góp phần nâng cao khả năng cơ động, tổ chức lực lượng và năng lực ứng phó với các tình huống khẩn cấp của đơn vị.",
      "B": "Góp phần xây dựng hình ảnh người quân nhân và tạo sự đồng thuận trên địa bàn.",
      "C": "Phát huy tinh thần trách nhiệm, khả năng phối hợp của các lực lượng và nâng cao hiệu quả thực hiện nhiệm vụ cứu hộ, cứu nạn.",
      "D": "Củng cố niềm tin của Nhân dân, tăng cường đoàn kết quân - dân và khẳng định bản chất “Đội quân công tác”."
    },
    "correct": "D"
  },
  {
    "id": 325,
    "q": "Qua nghiên cứu chuyên đề năm 2026, hạn chế về năng lực nói tiếng dân tộc của một bộ phận cán bộ ảnh hưởng trực tiếp đến nội dung gì?",
    "options": {
      "A": "Khả năng tổ chức, bảo đảm các hoạt động hậu cần, kỹ thuật và đời sống của đơn vị trên địa bàn.",
      "B": "Khả năng thực hiện nhiệm vụ tuyển chọn, gọi công dân nhập ngũ và quản lý quân số tại địa phương.",
      "C": "Khả năng nắm tình hình, tổ chức lực lượng và phối hợp thực hiện nhiệm vụ quốc phòng, an ninh trên địa bàn.",
      "D": "Hiệu quả tuyên truyền, vận động, nắm bắt tâm tư và tạo dựng niềm tin với đồng bào dân tộc thiểu số."
    },
    "correct": "D"
  },
  {
    "id": 326,
    "q": "Qua nghiên cứu chuyên đề năm 2026, công tác dân vận chỉ thực sự phát huy hiệu quả khi nào?",
    "options": {
      "A": "Khi được tổ chức với lực lượng phù hợp, bảo đảm đầy đủ cán bộ và các điều kiện cần thiết cho quá trình thực hiện.",
      "B": "Khi được đầu tư đầy đủ phương tiện, cơ sở vật chất và ứng dụng hiệu quả các phương tiện thông tin, truyền thông.",
      "C": "Khi được triển khai thống nhất, đồng bộ trên các địa bàn, bảo đảm các cơ quan, đơn vị thực hiện cùng một nội dung và phương thức.",
      "D": "Khi xuất phát từ thực tiễn, phù hợp với đặc điểm từng địa bàn và từng nhóm đối tượng, bảo đảm thiết thực, hiệu quả."
    },
    "correct": "D"
  },
  {
    "id": 327,
    "q": "Qua nghiên cứu chuyên đề năm 2026, điều gì sẽ xảy ra nếu cán bộ làm công tác dân vận thiếu hiểu biết về phong tục, tập quán của đồng bào?",
    "options": {
      "A": "Khó lựa chọn hình thức tổ chức hoạt động dân vận phù hợp với điều kiện, đặc điểm của từng địa bàn.",
      "B": "Khó huy động nguồn lực và tổ chức các mô hình dân vận phù hợp với điều kiện thực tế của địa phương.",
      "C": "Gặp khó khăn trong phối hợp với cấp ủy, chính quyền và các tổ chức quần chúng ở cơ sở khi triển khai nhiệm vụ.",
      "D": "Hiệu quả tuyên truyền, vận động và tạo dựng niềm tin với đồng bào sẽ giảm sút."
    },
    "correct": "D"
  },
  {
    "id": 328,
    "q": "Qua nghiên cứu chuyên đề năm 2026, xây dựng “thế trận lòng dân” vững chắc được coi là nền tảng trực tiếp để làm gì?",
    "options": {
      "A": "Góp phần phát triển kinh tế - xã hội, nâng cao đời sống Nhân dân và ổn định địa bàn.",
      "B": "Nâng cao chất lượng huấn luyện, sẵn sàng chiến đấu và khả năng thực hiện nhiệm vụ của lực lượng vũ trang.",
      "C": "Củng cố hệ thống cơ sở hạ tầng, giao thông và nâng cao khả năng bảo đảm cho nhiệm vụ quốc phòng, an ninh.",
      "D": "Giữ vững ổn định chính trị, củng cố quốc phòng, an ninh từ cơ sở."
    },
    "correct": "D"
  },
  {
    "id": 329,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung nào phản ánh đúng nhất tư tưởng Hồ Chí Minh về cán bộ làm công tác dân vận?",
    "options": {
      "A": "Cán bộ làm công tác dân vận phải nắm vững chủ trương, đường lối, chính sách và tổ chức thực hiện đúng các văn bản chỉ đạo.",
      "B": "Cán bộ làm công tác dân vận cần có trình độ lý luận vững vàng, phương pháp vận động khoa học và khả năng thuyết phục quần chúng.",
      "C": "Cán bộ làm công tác dân vận phải coi trọng tuyên truyền, giáo dục, giải thích để Nhân dân hiểu và đồng thuận với chủ trương, chính sách.",
      "D": "Cán bộ làm công tác dân vận phải sâu sát thực tiễn, gần dân, hiểu dân và trực tiếp hành động, không chỉ dừng ở lời nói."
    },
    "correct": "D"
  },
  {
    "id": 330,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yếu tố nào quyết định tính bền vững của “thế trận lòng dân”?",
    "options": {
      "A": "Quy mô nguồn lực đầu tư và mức độ bảo đảm các điều kiện vật chất cho công tác dân vận trên địa bàn.",
      "B": "Số lượng, phạm vi và hiệu quả hoạt động của các mô hình “Dân vận khéo” được triển khai tại cơ sở.",
      "C": "Mức độ phát triển kinh tế - xã hội, khả năng cải thiện đời sống và điều kiện sinh hoạt của Nhân dân.",
      "D": "Sự đồng thuận của Nhân dân, niềm tin đối với Đảng, Nhà nước và Quân đội được xây dựng bằng những việc làm thiết thực, lâu dài."
    },
    "correct": "D"
  },
  {
    "id": 331,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc phối hợp giữa lực lượng vũ trang với cấp ủy, chính quyền địa phương cần bảo đảm yêu cầu nào?",
    "options": {
      "A": "Phân định rõ chức năng, nhiệm vụ và trách nhiệm của từng lực lượng, bảo đảm phối hợp đúng thẩm quyền, tránh chồng chéo.",
      "B": "Duy trì phối hợp chủ yếu khi xuất hiện vụ việc phức tạp, tập trung xử lý kịp thời những vấn đề phát sinh trên địa bàn.",
      "C": "Phát huy vai trò nòng cốt của lực lượng quân sự trong phối hợp, chủ động tham mưu và tổ chức thực hiện các nhiệm vụ được giao.",
      "D": "Thường xuyên, đồng bộ, thống nhất, phát huy sức mạnh tổng hợp của cả hệ thống chính trị."
    },
    "correct": "D"
  },
  {
    "id": 332,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong điều kiện các thế lực thù địch gia tăng chống phá trên không gian mạng, nội dung cần ưu tiên trong công tác dân vận?",
    "options": {
      "A": "Tăng cường ứng dụng các giải pháp kỹ thuật, nâng cao khả năng quản lý và bảo đảm an toàn thông tin trên không gian mạng.",
      "B": "Tăng cường quản lý việc tiếp cận mạng xã hội, hạn chế những nguồn thông tin có nguy cơ tác động tiêu cực đến Nhân dân.",
      "C": "Nâng cao khả năng định hướng dư luận, tuyên truyền, đấu tranh phản bác thông tin sai trái và củng cố niềm tin của Nhân dân.",
      "D": "Đẩy mạnh chuyển đổi số, mở rộng các hình thức tuyên truyền, vận động và từng bước chuyển hoạt động dân vận sang môi trường số."
    },
    "correct": "C"
  },
  {
    "id": 333,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nếu cấp ủy, chỉ huy đơn vị chỉ coi công tác dân vận là nhiệm vụ của cơ quan chính trị thì hệ quả nào dễ xảy ra nhất?",
    "options": {
      "A": "Làm giảm sự chủ động của các cơ quan, đơn vị trong phối hợp thực hiện nhiệm vụ dân vận và giải quyết những vấn đề phát sinh trên địa bàn.",
      "B": "Làm hạn chế khả năng phối hợp giữa cơ quan chính trị với cấp ủy, chính quyền và các tổ chức quần chúng ở địa phương.",
      "C": "Làm giảm chất lượng công tác giáo dục chính trị, tư tưởng và khả năng nắm bắt tâm tư, nguyện vọng của Nhân dân trên địa bàn.",
      "D": "Không phát huy được sức mạnh tổng hợp của cả hệ thống, làm giảm hiệu quả công tác dân vận và xây dựng \"thế trận lòng dân\"."
    },
    "correct": "D"
  },
  {
    "id": 334,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong lãnh đạo công tác dân vận, nguyên tắc nào bảo đảm tính bền vững để đạt được kết quả cao nhất?",
    "options": {
      "A": "Tập trung giải quyết kịp thời những vụ việc nổi cộm, phức tạp, tạo chuyển biến rõ nét và ổn định tình hình trên địa bàn.",
      "B": "Ưu tiên triển khai các nội dung dân vận tại những địa bàn thuận lợi, có điều kiện tốt để tạo mô hình điểm và nhân rộng.",
      "C": "Phân bổ nguồn lực tương đối đồng đều giữa các địa phương, bảo đảm các địa bàn đều được quan tâm và triển khai hoạt động dân vận.",
      "D": "Kết hợp giải quyết những vấn đề trước mắt với chăm lo xây dựng cơ sở chính trị và phát triển địa bàn lâu dài."
    },
    "correct": "D"
  },
  {
    "id": 335,
    "q": "Qua nghiên cứu chuyên đề năm 2026, vì sao việc nắm chắc tình hình Nhân dân được coi là khâu mở đầu của công tác dân vận?",
    "options": {
      "A": "Giúp cấp ủy, chỉ huy có cơ sở tổng hợp thông tin, phục vụ công tác báo cáo và đánh giá tình hình địa bàn.",
      "B": "Giúp xác định những nhu cầu, vấn đề cần ưu tiên để tham mưu huy động nguồn lực và tổ chức các hoạt động hỗ trợ Nhân dân.",
      "C": "Giúp đánh giá tương đối đầy đủ đời sống, điều kiện kinh tế - xã hội và những khó khăn của Nhân dân trên địa bàn.",
      "D": "Để chủ động dự báo tình hình, lựa chọn đúng nội dung, đối tượng và biện pháp vận động phù hợp."
    },
    "correct": "D"
  },
  {
    "id": 337,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong xây dựng “thế trận lòng dân”, yếu tố nào giữ vai trò quyết định lâu dài?",
    "options": {
      "A": "Tiềm lực kinh tế của địa phương, khả năng huy động nguồn lực và mức độ phát triển kinh tế - xã hội trên địa bàn.",
      "B": "Hệ thống công trình quốc phòng, khả năng bảo đảm cơ sở vật chất và các điều kiện phục vụ nhiệm vụ quốc phòng, an ninh.",
      "C": "Chế độ, chính sách đối với cán bộ, chiến sĩ và các lực lượng trực tiếp thực hiện nhiệm vụ trên địa bàn.",
      "D": "Niềm tin của Nhân dân đối với sự lãnh đạo của Đảng và vai trò của Quân đội được củng cố bằng kết quả thực tiễn."
    },
    "correct": "D"
  },
  {
    "id": 338,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khi đánh giá chất lượng công tác dân vận, tiêu chí quan trọng nhất?",
    "options": {
      "A": "Số lượng văn bản lãnh đạo, chỉ đạo và kế hoạch công tác dân vận được ban hành, triển khai trong năm.",
      "B": "Số lượng hội nghị, hoạt động tuyên truyền, vận động và các chương trình phối hợp được tổ chức trên địa bàn.",
      "C": "Số lượng mô hình “Dân vận khéo” được xây dựng, duy trì và nhân rộng tại các cơ quan, đơn vị, địa phương.",
      "D": "Mức độ chuyển biến về nhận thức, sự đồng thuận của Nhân dân và sự ổn định chính trị - xã hội trên địa bàn."
    },
    "correct": "D"
  },
  {
    "id": 339,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trước sự chống phá ngày càng tinh vi của các thế lực thù địch, yêu cầu đặt ra đối với công tác dân vận là?",
    "options": {
      "A": "Đẩy mạnh tuyên truyền trên không gian mạng, đa dạng hóa nội dung và hình thức nhằm nâng cao nhận thức của Nhân dân.",
      "B": "Tập trung giải quyết kịp thời các vụ việc phát sinh, đồng thời tăng cường rút kinh nghiệm để hạn chế những vấn đề tương tự.",
      "C": "Mở rộng lực lượng chuyên trách, nâng cao năng lực nắm tình hình và tổ chức thực hiện công tác dân vận trên các địa bàn trọng điểm.",
      "D": "Chủ động dự báo tình hình, phát hiện sớm, xử lý từ cơ sở và kết hợp chặt chẽ giữa công tác dân vận với nhiệm vụ quốc phòng, an ninh."
    },
    "correct": "D"
  },
  {
    "id": 340,
    "q": "Qua nghiên cứu chuyên đề năm 2026, bên cạnh nhiệm vụ huấn luyện, sẵn sàng chiến đấu để giữ vững độc lập, chủ quyền, Quân đội còn giữ vai trò nòng cốt trong việc thực hiện nhiệm vụ nào sau đây?",
    "options": {
      "A": "Tiên phong thực hiện kết hợp quốc phòng với phát triển kinh tế - xã hội, xem đây là phương thức quan trọng xây dựng tiềm lực quốc phòng toàn dân.",
      "B": "Trực tiếp nắm quyền điều hành nền kinh tế quốc dân, thay thế hoàn toàn vai trò quản lý điều hành kinh tế của các cơ quan chính quyền dân sự.",
      "C": "Tập trung toàn bộ nguồn lực vào hoạt động sản xuất kinh doanh thương mại thuần túy để tự chủ hoàn toàn ngân sách hoạt động của lực lượng.",
      "D": "Mở rộng quy mô quân số thường trực ở tất cả các địa phương nhằm mục tiêu tạo ra nguồn nhân lực lao động sản xuất công nghiệp giá rẻ."
    },
    "correct": "A"
  },
  {
    "id": 341,
    "q": "Qua nghiên cứu chuyên đề năm 2026, quan niệm về việc Quân đội tham gia lao động sản xuất, kết hợp quốc phòng với kinh tế - xã hội trong kỷ nguyên mới được hiểu như thế nào?",
    "options": {
      "A": "Là tổng thể hoạt động thực hiện chức năng, nhiệm vụ cơ bản nhằm gắn kết và phát huy sức mạnh quốc phòng, gia tăng tiềm lực cho quốc gia.",
      "B": "Là hoạt động đầu tư tài chính thu lợi nhuận thuần túy của các đơn vị quân đội nhằm tạo nguồn thu riêng ngoài hệ thống ngân sách nhà nước.",
      "C": "Là việc chuyển dịch toàn bộ lực lượng quân đội thường trực sang hoạt động sản xuất hàng hóa dân dụng để cạnh tranh trên thị trường.",
      "D": "Là nhiệm vụ tạm thời của quân đội trong thời bình nhằm giải quyết việc làm cho hạ sĩ quan và chiến sĩ chuẩn bị xuất ngũ về địa phương."
    },
    "correct": "A"
  },
  {
    "id": 341,
    "q": "Qua nghiên cứu chuyên đề năm 2026, xuyên suốt tiến trình lịch sử từ khi thành lập đến nay, việc tham gia lao động sản xuất của Quân đội mang lại ý nghĩa thiết thực nào?",
    "options": {
      "A": "Tự bảo đảm một phần nhu cầu vật chất, giảm bớt gánh nặng cho nền kinh tế, nâng cao sức mạnh chiến đấu của Quân đội trong mọi tình huống.",
      "B": "Giúp Quân đội tự chủ hoàn toàn ngân sách tài chính mà không cần phụ thuộc vào nguồn phân bổ ngân sách hằng năm của Nhà nước ta.",
      "C": "Thay thế hoàn toàn vai trò sản xuất của các doanh nghiệp dân sự tại các địa bàn khu vực nông thôn và vùng sâu, vùng xa hiện nay.",
      "D": "Tạo ra nguồn doanh thu lớn để chi trả tiền lương và các chế độ đãi ngộ vượt trội cho tất cả các lực lượng vũ trang địa phương hiện nay."
    },
    "correct": "A"
  },
  {
    "id": 342,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong những năm qua, việc các Đoàn KT-QP tổ chức quy hoạch, bố trí lại dân cư, hình thành các cụm dân cư tập trung trên vành đai biên giới mang lại giá trị chiến lược gì?",
    "options": {
      "A": "Tạo thế bố trí chiến lược mới, củng cố “thế trận lòng dân”, tạo nền tảng vững chắc để xây dựng nền quốc phòng toàn dân trên địa bàn.",
      "B": "Mở rộng diện tích đất thổ cư cho người dân đô thị di chuyển về sinh sống nhằm giảm áp lực gia tăng dân số tại các thành phố lớn.",
      "C": "Biến tất cả các khu vực đường tuần tra biên giới thành các khu du lịch nghỉ dưỡng sinh thái nhằm thu hút khách du lịch quốc tế.",
      "D": "Chuyển đổi toàn bộ đất rừng phòng hộ khu vực biên giới thành các khu công nghiệp tập trung để thu hút vốn đầu tư nước ngoài."
    },
    "correct": "A"
  },
  {
    "id": 343,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung thứ nhất về Quân đội tham gia lao động sản xuất trong tình hình mới được tài liệu xác định là tiên phong trong xây dựng mô hình nào dưới đây nhằm kết hợp phát triển kinh tế - xã hội với củng cố quốc phòng?",
    "options": {
      "A": "Tiên phong trong xây dựng các khu kinh tế - quốc phòng trên các địa bàn chiến lược, biên giới, hải đảo của Tổ quốc.",
      "B": "Tiên phong trong việc xây dựng các khu công nghiệp chế xuất dành riêng cho các doanh nghiệp 100% vốn đầu tư nước ngoài.",
      "C": "Tiên phong trong việc quy hoạch các khu trung tâm thương mại tự do tại các thành phố lớn để thu hút nguồn vốn tiêu dùng.",
      "D": "Tiên phong trong việc xây dựng các khu nghỉ dưỡng sinh thái cao cấp dành riêng cho đối tượng khách du lịch quốc tế."
    },
    "correct": "A"
  },
  {
    "id": 344,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung thứ hai trong nhiệm vụ Quân đội tham gia lao động sản xuất tình hình mới là tiên phong trong phát triển công nghiệp quốc phòng. Định hướng phát triển công nghiệp quốc phòng được xác định như thế nào?",
    "options": {
      "A": "Phát triển theo hướng hiện đại, lưỡng dụng, gắn kết chặt chẽ với công nghiệp dân sinh, hình thành hệ thống sản xuất tự chủ.",
      "B": "Phát triển theo hướng chuyên môn hóa hẹp, chỉ tập trung sản xuất vũ khí đạn dược và hoàn toàn tách biệt với nền kinh tế dân sinh.",
      "C": "Tập trung toàn bộ nguồn lực để nhập khẩu dây chuyền sản xuất hàng tiêu dùng gia dụng từ các nước phát triển về lắp ráp.",
      "D": "Chuyển toàn bộ các nhà máy công nghiệp quốc phòng sang sản xuất hàng xuất khẩu để lấy tiền mua vũ khí hoàn chỉnh từ bên ngoài."
    },
    "correct": "A"
  },
  {
    "id": 345,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nhằm bảo đảm sự hài hòa giữa hiệu quả kinh tế và thực hiện nhiệm vụ quốc phòng, nội dung thứ ba trong nhiệm vụ Quân đội tham gia lao động sản xuất yêu cầu các doanh nghiệp quân đội phải vận hành theo cơ chế nào?",
    "options": {
      "A": "Tiên phong phát triển doanh nghiệp quân đội gắn kết nhiệm vụ sản xuất kinh doanh với quốc phòng, vận hành theo cơ chế thị trường định hướng XHCN.",
      "B": "Vận hành theo cơ chế bao cấp hoàn toàn từ ngân sách nhà nước, không cần quan tâm đến hiệu quả tài chính và năng lực cạnh tranh.",
      "C": "Vận hành theo mô hình tự do cạnh tranh tư bản chủ nghĩa, tối đa hóa lợi nhuận tài chính mà không cần gánh vác nhiệm vụ quốc phòng.",
      "D": "Cho phép các doanh nghiệp quân đội tự do nhượng quyền thương hiệu cho các công ty tư nhân để thu phí bản quyền hằng năm."
    },
    "correct": "A"
  },
  {
    "id": 346,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cấp ủy, chỉ huy các cấp trong toàn quân cần chủ động kiên quyết đấu tranh, phản bác các quan điểm sai trái, xuyên tạc của các thế lực thù địch nhằm mục đích đen tối nào sau đây?",
    "options": {
      "A": "Phản bác quan điểm đòi tách rời kinh tế với quốc phòng, phủ nhận chức năng “đội quân lao động sản xuất”, đòi “phi chính trị hóa” Quân đội.",
      "B": "Phản bác các chính sách ưu đãi thuế của Nhà nước dành cho các doanh nghiệp hoạt động tại các khu vực biên giới, hải đảo xa xôi.",
      "C": "Phản bác các chương trình mục tiêu quốc gia về xóa đói giảm nghèo bền vững đang được triển khai tại các vùng đồng bào dân tộc.",
      "D": "Phản bác việc ứng dụng công nghệ thông tin và chuyển đổi số vào công tác quản lý điều hành doanh nghiệp quân đội hiện nay."
    },
    "correct": "A"
  },
  {
    "id": 347,
    "q": "Qua nghiên cứu chuyên đề năm 2026, để nâng cao hiệu quả hoạt động của các Khu kinh tế - quốc phòng trên các hướng biển, đảo và biên giới đất liền, các cơ quan chức năng của Bộ Quốc phòng cần chú trọng ưu tiên thực hiện giải pháp nào?",
    "options": {
      "A": "Phân kỳ đầu tư, quản lý sử dụng hiệu quả nguồn lực, đầu tư có trọng tâm trọng điểm, lồng ghép dự án với các chương trình quốc gia.",
      "B": "Dàn trải nguồn vốn đầu tư đều khắp tất cả các địa bàn mà không cần quan tâm đến tính chiến lược và thứ tự ưu tiên phòng thủ.",
      "C": "Yêu cầu người dân tại các khu kinh tế - quốc phòng phải tự túc hoàn toàn vốn xây dựng hạ tầng mà không có sự hỗ trợ của Nhà nước.",
      "D": "Tập trung xây dựng các khu vui chơi giải trí quy mô lớn tại các đảo xa để thu hút nguồn vốn đầu tư từ các tập đoàn đa quốc gia."
    },
    "correct": "A"
  },
  {
    "id": 348,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mô hình tổ chức sản xuất tại các Khu kinh tế - quốc phòng được định hướng tổ chức lại như thế nào để phát huy tốt nhất hiệu quả hỗ trợ nhân dân vùng biên giới, vùng đặc biệt khó khăn?",
    "options": {
      "A": "Tập trung ưu tiên phát triển kinh tế hộ gia đình; đẩy mạnh dịch vụ hai đầu giúp dân phát triển kinh tế, giữ vai trò “bà đỡ” cho dân.",
      "B": "Thu hồi toàn bộ đất sản xuất của người dân địa phương để thành lập các nông trường lớn do bộ đội trực tiếp quản lý và canh tác.",
      "C": "Yêu cầu bà con nhân dân phải nộp lại toàn bộ sản phẩm nông nghiệp thu hoạch được cho Đoàn kinh tế - quốc phòng để bán đấu giá.",
      "D": "Ngừng cung cấp giống và kỹ thuật nông nghiệp cho người dân để họ tự tìm kiếm các nguồn hỗ trợ từ các tổ chức nước ngoài."
    },
    "correct": "A"
  },
  {
    "id": 349,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong quá trình tái cơ cấu và phát triển sản xuất kinh doanh, các doanh nghiệp quân đội được yêu cầu phải tuân thủ nghiêm ngặt nguyên tắc cốt lõi nào dưới đây để tránh rủi ro tài chính và tiêu cực?",
    "options": {
      "A": "Tập trung nâng cao hiệu quả ngành nghề chính, không đầu tư dàn trải, không kinh doanh ngoài ngành và lĩnh vực nhạy cảm dễ tiêu cực.",
      "B": "Sử dụng toàn bộ đất quốc phòng được giao để liên doanh thành lập các sàn giao dịch bất động sản thương mại thu lợi nhuận.",
      "C": "Tự do vay nợ tín dụng vượt quá khả năng chi trả để đầu tư vào các thị trường tài chính mạo hiểm ngoài phạm vi quản lý.",
      "D": "Che giấu thông tin tài chính và tránh sự kiểm tra, thanh tra của các cơ quan quản lý nhà nước cũng như các cơ quan của Bộ Quốc phòng."
    },
    "correct": "A"
  },
  {
    "id": 350,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nhằm nâng cao hiệu quả quản trị doanh nghiệp quân đội theo hướng hiện đại, Chính phủ và Quân ủy Trung ương đã chỉ đạo thực hiện đổi mới quan trọng nào trong công tác quản lý?",
    "options": {
      "A": "Sớm thực hiện tách chức năng quản lý nhà nước, đại diện chủ sở hữu vốn của các cơ quan với hoạt động sản xuất kinh doanh của doanh nghiệp.",
      "B": "Tăng cường sự can thiệp trực tiếp bằng mệnh lệnh hành chính của các cơ quan quân sự vào các quyết định kinh doanh hằng ngày.",
      "C": "Bỏ qua các quy định của Luật Doanh nghiệp để áp dụng hoàn toàn Điều lệnh quản lý bộ đội vào hoạt động điều hành sản xuất.",
      "D": "Yêu cầu các Giám đốc doanh nghiệp quân đội phải chịu sự quản lý trực tiếp về tài chính từ các chính quyền địa phương sở tại."
    },
    "correct": "A"
  },
  {
    "id": 351,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đối với các đơn vị thường trực và đơn vị sự nghiệp công lập trong Quân đội, việc tổ chức hoạt động tăng gia sản xuất và làm kinh tế phải bảo đảm nguyên tắc căn bản nào?",
    "options": {
      "A": "Phát huy thế mạnh tại chỗ, phục vụ cải thiện đời sống bộ đội, chấp hành đúng pháp luật Nhà nước và quy định của Bộ Quốc phòng.",
      "B": "Cho phép cán bộ chiến sĩ bỏ nhiệm vụ huấn luyện để ra ngoài làm dịch vụ tư nhân lấy tiền nộp vào quỹ vốn của cơ quan đơn vị.",
      "C": "Sử dụng toàn bộ lực lượng vũ trang thường trực vào việc nhận thi công các công trình dân dụng tư nhân để thu tiền chênh lệch.",
      "D": "Tự do tổ chức các hoạt động kinh doanh thương mại công khai mà không cần đăng ký hay quản lý nguồn thu theo quy định."
    },
    "correct": "A"
  },
  {
    "id": 352,
    "q": "Qua nghiên cứu chuyên đề năm 2026, các trung tâm nghiên cứu khoa học, cơ sở đào tạo và bệnh viện quân đội được phép phát triển các hoạt động dịch vụ theo hướng nào để vừa hoàn thành nhiệm vụ chính trị vừa đóng góp cho phát triển kinh tế?",
    "options": {
      "A": "Nâng cao chất lượng dịch vụ gắn với kỹ thuật chuyên môn theo đúng quy định, tạo thêm nguồn thu để tái đầu tư nâng cao năng lực hoạt động.",
      "B": "Chuyển hoàn toàn sang khám chữa bệnh và đào tạo thương mại giá cao, từ chối phục vụ các đối tượng chính sách và quân nhân.",
      "C": "Tách khỏi sự quản lý của Bộ Quốc phòng để hoạt động như một đơn vị tư nhân hoàn toàn độc lập trên thị trường tự do.",
      "D": "Ngừng công tác nghiên cứu khoa học ứng dụng quân sự để tập trung sản xuất các sản phẩm tiêu dùng giá rẻ bán ra thị trường."
    },
    "correct": "A"
  },
  {
    "id": 353,
    "q": "Qua nghiên cứu chuyên đề năm 2026, định hướng kết hợp giữa hoạt động đối ngoại quốc phòng với hoạt động kinh tế đối ngoại của các doanh nghiệp quân đội trong giai đoạn hiện nay được xác định như thế nào?",
    "options": {
      "A": "Lựa chọn đối tác phù hợp, mở rộng hợp tác công nghệ cao, công nghệ lưỡng dụng, tuân thủ pháp luật và bảo vệ an ninh quốc gia.",
      "B": "Bằng mọi giá tìm kiếm lợi nhuận từ đối tác nước ngoài mà không cần quan tâm đến các quy định bảo vệ bí mật quân sự.",
      "C": "Chỉ mở rộng hợp tác kinh tế đối ngoại với các công ty nhỏ lẻ và từ chối hợp tác với các tập đoàn công nghệ lớn trên thế giới.",
      "D": "Chuyển giao toàn bộ bản quyền công nghệ sản xuất vũ khí trang bị của quân đội cho các đối tác nước ngoài để lấy nguồn vốn."
    },
    "correct": "A"
  },
  {
    "id": 354,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu quan trọng nhất của việc tăng cường hợp tác quốc tế về công nghiệp quốc phòng và thương mại quân sự của các doanh nghiệp quân đội là gì?",
    "options": {
      "A": "Tranh thủ nguồn lực về vốn, khoa học - công nghệ và trình độ quản lý, nâng cao năng lực tự chủ sản xuất vũ khí trang bị hiện đại.",
      "B": "Phụ thuộc hoàn toàn vào nguồn cung cấp vũ khí nguyên chiếc từ bên ngoài để không cần duy trì các nhà máy sản xuất trong nước.",
      "C": "Nhập khẩu toàn bộ trang thiết bị cũ lạc hậu của nước ngoài về để tiết kiệm chi phí mua sắm cho ngân sách nhà nước.",
      "D": "Biến các doanh nghiệp công nghiệp quốc phòng thành các đại lý phân phối hàng hóa tiêu dùng cho các tập đoàn nước ngoài."
    },
    "correct": "A"
  },
  {
    "id": 355,
    "q": "Qua nghiên cứu chuyên đề năm 2026, “sự cố truyền thông” được hiểu là gì?",
    "options": {
      "A": "Sự việc có sức lan truyền rất lớn",
      "B": "Sự việc đơn lẻ, quy mô hẹp, còn khả năng kiểm soát",
      "C": "Khủng hoảng đã ảnh hưởng toàn xã hội",
      "D": "Vụ việc đã trở thành vấn đề chính trị - xã hội được mọi người quan tâm"
    },
    "correct": "B"
  },
  {
    "id": 356,
    "q": "Qua nghiên cứu chuyên đề năm 2026, “khủng hoảng truyền thông” khác với “sự cố truyền thông” chủ yếu ở điểm nào?",
    "options": {
      "A": "Mức độ tác động và khả năng kiểm soát",
      "B": "Thời gian xảy ra và địa điểm",
      "C": "Chủ thể gây ra sự việc và mức độ ảnh hưởng",
      "D": "Hình thức thông tin ban đầu và cách xử lý"
    },
    "correct": "A"
  },
  {
    "id": 357,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mối quan hệ giữa sự cố và khủng hoảng truyền thông được xác định là gì?",
    "options": {
      "A": "Hai hiện tượng độc lập",
      "B": "Sự cố là nguyên nhân duy nhất",
      "C": "Sự cố là mầm mống, khủng hoảng là hệ quả",
      "D": "Khủng hoảng luôn xảy ra trước sự cố"
    },
    "correct": "C"
  },
  {
    "id": 358,
    "q": "Qua nghiên cứu chuyên đề năm 2026, ba đặc điểm cốt lõi để nhận diện khủng hoảng truyền thông ở đơn vị cơ sở là gì?",
    "options": {
      "A": "Nhanh, rộng, phức tạp",
      "B": "Đột ngột, lan truyền nhanh, tổn hại lớn",
      "C": "Bất ngờ, chính trị, quân sự",
      "D": "Nhạy cảm, phức tạp, kéo dài"
    },
    "correct": "B"
  },
  {
    "id": 359,
    "q": "Qua nghiên cứu chuyên đề năm 2026, “Lan truyền nhanh” trong khủng hoảng truyền thông hiện nay chủ yếu gắn với đặc điểm nào của không gian mạng?",
    "options": {
      "A": "Không có tương tác",
      "B": "Tốc độ lan truyền rất cao",
      "C": "Phạm vi thông tin hẹp",
      "D": "Nội dung khó chia sẻ"
    },
    "correct": "B"
  },
  {
    "id": 360,
    "q": "Qua nghiên cứu chuyên đề năm 2026, “thời gian vàng” trong xử lý khủng hoảng truyền thông thường được xác định là:",
    "options": {
      "A": "Dưới 24 giờ",
      "B": "Từ 24 đến 48 giờ",
      "C": "Trong một tuần",
      "D": "Sau khi có kết luận"
    },
    "correct": "A"
  },
  {
    "id": 361,
    "q": "Qua nghiên cứu chuyên đề năm 2026, một nguyên nhân chủ quan hàng đầu dẫn đến khủng hoảng truyền thông ở đơn vị là:",
    "options": {
      "A": "Thiếu trang thiết bị, kỹ thuật hiện đại",
      "B": "Vi phạm pháp luật, kỷ luật của quân nhân",
      "C": "Thiếu hoạt động đối ngoại, ngoại giao nhân dân",
      "D": "Thiếu chương trình văn hóa, văn nghệ, thể dục thể thao"
    },
    "correct": "B"
  },
  {
    "id": 362,
    "q": "Qua nghiên cứu chuyên đề năm 2026, hành vi nào sau đây có thể trở thành nguồn gốc của khủng hoảng truyền thông?",
    "options": {
      "A": "Vi phạm kỷ luật",
      "B": "Sai sót nghiệp vụ",
      "C": "Phát ngôn thiếu chuẩn mực",
      "D": "Tất cả đáp án đã nêu"
    },
    "correct": "D"
  },
  {
    "id": 363,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc lãnh đạo, chỉ huy bao che, giấu giếm khuyết điểm hoặc báo cáo không trung thực ảnh hưởng như thế nào đến xử lý khủng hoảng truyền thông?",
    "options": {
      "A": "Làm sự việc lắng xuống",
      "B": "Làm khủng hoảng trầm trọng thêm",
      "C": "Giảm áp lực dư luận",
      "D": "Hạn chế thông tin xấu"
    },
    "correct": "B"
  },
  {
    "id": 364,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khủng hoảng truyền thông không được xử lý kịp thời có thể gây hậu quả nào?",
    "options": {
      "A": "Xói mòn niềm tin của Nhân dân",
      "B": "Tăng cường đoàn kết quân dân",
      "C": "Nâng cao uy tín đơn vị",
      "D": "Tăng hiệu quả huấn luyện"
    },
    "correct": "A"
  },
  {
    "id": 365,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khủng hoảng truyền thông có thể tác động trực tiếp đến?",
    "options": {
      "A": "Khả năng hoàn thành nhiệm vụ của đơn vị",
      "B": "Hoạt động văn hóa, văn nghệ, thể dục thể thao",
      "C": "Công tác hậu cần, tài chính",
      "D": "Hoạt động đối ngoại"
    },
    "correct": "A"
  },
  {
    "id": 366,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khủng hoảng truyền thông được phân thành bao nhiêu cấp độ?",
    "options": {
      "A": "2 cấp",
      "B": "3 cấp",
      "C": "4 cấp",
      "D": "5 cấp"
    },
    "correct": "B"
  },
  {
    "id": 367,
    "q": "Qua nghiên cứu chuyên đề năm 2026, khi cung cấp thông tin trong khủng hoảng truyền thông, yêu cầu quan trọng là gì?",
    "options": {
      "A": "Càng nhiều càng tốt",
      "B": "Chính xác và thống nhất",
      "C": "Càng nhanh càng tốt",
      "D": "Chỉ cung cấp trên mạng xã hội"
    },
    "correct": "B"
  },
  {
    "id": 368,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong xử lý khủng hoảng, yêu cầu ưu tiên như thế nào?",
    "options": {
      "A": "Truyền thông trước, xử lý sau",
      "B": "Xử lý nguyên nhân gốc rễ trước",
      "C": "Gỡ bỏ mọi thông tin trên mạng",
      "D": "Chờ cấp trên xử lý"
    },
    "correct": "B"
  },
  {
    "id": 369,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tự do, dân chủ, nhân quyền được xác định là phạm trù thuộc những lĩnh vực nào và ra đời cùng với thể chế nào trong lịch sử?",
    "options": {
      "A": "Là phạm trù kinh tế, kỹ thuật, công nghệ ra đời cùng với sự xuất hiện của công cụ lao động bằng kim loại.",
      "B": "Là phạm trù đạo đức, tôn giáo thuần túy ra đời từ khi con người bắt đầu xuất hiện trên trái đất.",
      "C": "Là phạm trù chính trị, pháp luật, văn hóa - xã hội ra đời cùng với Nhà nước trong xã hội có giai cấp.",
      "D": "Là phạm trù quân sự, an ninh quốc gia ra đời cùng với sự xuất hiện của các cuộc chiến tranh tranh giành lãnh thổ."
    },
    "correct": "C"
  },
  {
    "id": 370,
    "q": "Trong Bản Tuyên ngôn Độc lập năm 1945, Chủ tịch Hồ Chí Minh đã khẳng định những quyền cơ bản nào của con người xuất phát từ tạo hóa?",
    "options": {
      "A": "Quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc.",
      "B": "Quyền sở hữu tư liệu sản xuất, quyền tự do kinh doanh không giới hạn và quyền miễn trừ pháp lý.",
      "C": "Quyền can thiệp vào công việc nội bộ quốc gia khác và quyền tự do tham gia các hội nhóm vũ trang.",
      "D": "Quyền bãi công, đình công tự do và quyền tuyệt đối hóa lợi ích cá nhân trên lợi ích dân tộc."
    },
    "correct": "A"
  },
  {
    "id": 371,
    "q": "Hai Công ước quốc tế quan trọng về nhân quyền được Liên hợp quốc thông qua năm 1966 đã hình thành nên hai nhóm quyền cơ bản nào?",
    "options": {
      "A": "Nhóm quyền dân sự, chính trị và nhóm quyền kinh tế, xã hội, văn hóa.",
      "B": "Nhóm quyền an ninh, quân sự và nhóm quyền phát triển công nghệ, thông tin truyền thông.",
      "C": "Nhóm quyền tự do cá nhân tuyệt đối và nhóm quyền can thiệp nhân đạo quốc tế.",
      "D": "Nhóm quyền của các quốc gia phát triển và nhóm quyền của các quốc gia đang phát triển."
    },
    "correct": "A"
  },
  {
    "id": 372,
    "q": "Trong bản Tuyên ngôn Độc lập năm 1945, Chủ tịch Hồ Chí Minh đã nâng tầm quyền con người thành quyền gì của các dân tộc trên thế giới?",
    "options": {
      "A": "Tất cả các dân tộc đều bình đẳng, có quyền sống, quyền sung sướng và quyền tự do.",
      "B": "Các dân tộc lớn có quyền áp đặt mô hình phát triển và giá trị dân chủ lên các dân tộc nhỏ yếu.",
      "C": "Quyền được ưu tiên phát triển kinh tế tư nhân trước khi thực hiện các quyền tự do chính trị.",
      "D": "Quyền tự do gia nhập các liên minh quân sự quốc tế mà không cần xem xét điều kiện an ninh."
    },
    "correct": "A"
  },
  {
    "id": 373,
    "q": "Quan điểm nhất quán của Đảng ta qua các kỳ Đại hội về mối quan hệ giữa dân chủ, kỷ luật và pháp luật là gì?",
    "options": {
      "A": "Dân chủ là tuyệt đối, không cần bị hạn chế bởi kỷ luật hay các quy định của hệ thống pháp luật.",
      "B": "Kỷ luật và pháp luật là công cụ nhằm hạn chế, triệt tiêu các quyền tự do dân chủ của nhân dân.",
      "C": "Dân chủ chỉ áp dụng trong đời sống xã hội, còn trong cơ quan nhà nước phải dùng kỷ luật hành chính.",
      "D": "Dân chủ phải đi đôi với kỷ luật, được thể chế hóa bằng pháp luật và được pháp luật bảo vệ."
    },
    "correct": "D"
  },
  {
    "id": 374,
    "q": "Điểm khác biệt căn bản trong việc thực hành nhân quyền ở Việt Nam so với các quan điểm trừu tượng là gì?",
    "options": {
      "A": "Thể chế hóa thành Hiến pháp, pháp luật cụ thể, điều chỉnh hài hòa quyền cá nhân với quyền cộng đồng.",
      "B": "Áp dụng nguyên xi các chuẩn mực nhân quyền phổ quát chung chung mà không cần sửa đổi luật trong nước.",
      "C": "Chỉ tập trung bảo vệ quyền của các nhóm thiểu số mà bỏ qua quyền lợi chung của toàn thể nhân dân.",
      "D": "Tuyệt đối hóa quyền cá nhân trên hết, xem nhẹ trách nhiệm và nghĩa vụ của công dân đối với đất nước."
    },
    "correct": "A"
  },
  {
    "id": 375,
    "q": "Điều 3 Hiến pháp năm 2013 của nước Cộng hòa xã hội chủ nghĩa Việt Nam quy định trách nhiệm của Nhà nước như thế nào đối với quyền con người?",
    "options": {
      "A": "Chỉ công nhận các quyền kinh tế, còn các quyền chính trị - xã hội sẽ do các tổ chức tư nhân đảm nhiệm.",
      "B": "Bảo đảm, phát huy quyền làm chủ của Nhân dân; công nhận, tôn trọng, bảo vệ, bảo đảm quyền con người.",
      "C": "Hạn chế quyền làm chủ của Nhân dân để tập trung nguồn lực phát triển kinh tế hạ tầng quốc gia.",
      "D": "Áp dụng các tiêu chuẩn nhân quyền quốc tế một cách thụ động theo yêu cầu của các tổ chức bên ngoài."
    },
    "correct": "B"
  },
  {
    "id": 376,
    "q": "Quan điểm chỉ đạo xuyên suốt về Nhân dân được Đại hội XIV của Đảng tiếp tục nhấn mạnh là gì?",
    "options": {
      "A": "“Dân là gốc”, xác định nhân dân là trung tâm, chủ thể, mục tiêu, động lực và nguồn lực phát triển.",
      "B": "Nhân dân là đối tượng quản lý thụ động của các cơ quan chính quyền và hệ thống pháp luật.",
      "C": "Cán bộ, đảng viên là lực lượng quyết định duy nhất, nhân dân chỉ có vai trò chấp hành.",
      "D": "Phát triển kinh tế là mục tiêu duy nhất, các quyền và lợi ích của Nhân dân sẽ giải quyết sau."
    },
    "correct": "A"
  },
  {
    "id": 377,
    "q": "Minh chứng khách quan, tích cực khẳng định uy tín và đóng góp của Việt Nam trên trường quốc tế về nhân quyền là sự kiện nào?",
    "options": {
      "A": "Việt Nam 03 lần trúng cử thành viên Hội đồng Nhân quyền Liên hợp quốc (có 02 nhiệm kỳ liên tiếp).",
      "B": "Việt Nam áp dụng hoàn toàn mô hình chính trị đa đảng theo yêu cầu của các tổ chức phương Tây.",
      "C": "Việt Nam bãi bỏ toàn bộ hệ thống luật pháp quốc gia để dùng điều ước quốc tế trực tiếp.",
      "D": "Việt Nam cho phép thành lập tự do các tổ chức công đoàn độc lập nằm ngoài hệ thống chính trị."
    },
    "correct": "A"
  },
  {
    "id": 378,
    "q": "Qua nghiên cứu chuyên đề năm 2026, sự khác biệt cơ bản trong cách tiếp cận nhân quyền giữa các nước phương Tây và các nước đang phát triển (như Việt Nam) là gì?",
    "options": {
      "A": "Phương Tây tuyệt đối hóa quyền dân sự, chính trị cá nhân; nước đang phát triển đề cao cả quyền kinh tế, xã hội, cộng đồng.",
      "B": "Phương Tây coi trọng quyền phát triển cộng đồng; nước đang phát triển đề cao tự do cá nhân vô hạn.",
      "C": "Phương Tây phủ nhận các chuẩn mực quốc tế; nước đang phát triển áp dụng tuyệt đối chuẩn mực quốc tế.",
      "D": "Phương Tây không sử dụng nhân quyền làm công cụ ngoại giao; nước đang phát triển coi đó là vũ khí."
    },
    "correct": "A"
  },
  {
    "id": 379,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong tổng thể chiến lược “diễn biến hòa bình”, các thế lực thù địch coi vấn đề tự do, dân chủ, nhân quyền là gì?",
    "options": {
      "A": "Phương tiện để hỗ trợ Việt Nam phát triển kinh tế và nâng cao trình độ quản lý xã hội.",
      "B": "Công cụ hữu hiệu để kích động, tập hợp lực lượng, hình thành tổ chức đối lập, gây bạo loạn, tạo cớ can thiệp.",
      "C": "Mối quan tâm thuần túy về mặt học thuật và lý luận triết học không có mục đích chính trị.",
      "D": "Biện pháp hòa bình nhằm giúp Việt Nam giữ vững ổn định chính trị và an ninh quốc phòng."
    },
    "correct": "B"
  },
  {
    "id": 380,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục đích nguy hiểm nhất của các thế lực thù địch khi âm mưu “cách mạng màu”, “cách mạng đường phố” ở Việt Nam là gì?",
    "options": {
      "A": "Tuyển chọn “ngọn cờ”, dựng lên chính quyền thân phương Tây hoặc ép Việt Nam chuyển hướng tư bản.",
      "B": "Giúp nâng cao chỉ số phát triển con người và xóa đói giảm nghèo cho người dân vùng xa.",
      "C": "Đẩy mạnh các hoạt động giao lưu văn hóa và hợp tác giáo dục giữa các quốc gia.",
      "D": "Thúc đẩy quá trình hiện đại hóa Quân đội và tăng cường tiềm lực quốc phòng Việt Nam."
    },
    "correct": "A"
  },
  {
    "id": 381,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đối với Quân đội nhân dân Việt Nam, âm mưu thâm độc nhất của các thế lực thù địch nhằm làm suy giảm sức mạnh chiến đấu là gì?",
    "options": {
      "A": "Từng bước làm suy giảm uy tín, làm mất phương hướng chính trị, tiến tới “phi chính trị hóa” Quân đội.",
      "B": "Tăng cường viện trợ trang thiết bị quân sự hiện đại để Quân đội phụ thuộc vào bên ngoài.",
      "C": "Khuyên Quân đội tập trung vào nhiệm vụ sản xuất kinh tế mà bỏ qua huấn luyện quân sự.",
      "D": "Tách rời lực lượng Quân đội khỏi sự quản lý hành chính của các cơ quan chính quyền địa phương."
    },
    "correct": "A"
  },
  {
    "id": 382,
    "q": "Qua nghiên cứu chuyên đề năm 2026, một số chính phủ và tổ chức quốc tế thiếu thiện chí thường dùng thủ đoạn nào để can thiệp, gây sức ép với Việt Nam?",
    "options": {
      "A": "Đưa báo cáo sai lệch, đòi thả “tù nhân lương tâm” (đối tượng vi phạm pháp luật), gắn nhân quyền với viện trợ.",
      "B": "Đầu tư xây dựng các trung tâm y tế, trường học miễn phí tại các vùng sâu vùng xa.",
      "C": "Hỗ trợ Việt Nam khắc phục hậu quả chiến tranh và rà phá bom mìn tồn đọng.",
      "D": "Ký kết các hiệp định thương mại tự do không kèm theo bất kỳ điều kiện ràng buộc nào."
    },
    "correct": "A"
  },
  {
    "id": 383,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tổ chức phản động lưu vong nào giữ vai trò dẫn dắt trong việc móc nối thu thập “bằng chứng” vu cáo Việt Nam vi phạm nhân quyền?",
    "options": {
      "A": "Tổ chức “BPSOS”.",
      "B": "Tổ chức Chữ thập đỏ quốc tế.",
      "C": "Quỹ Nhi đồng Liên hợp quốc (UNICEF).",
      "D": "Tổ chức Y tế Thế giới (WHO)."
    },
    "correct": "A"
  },
  {
    "id": 384,
    "q": "Qua nghiên cứu chuyên đề năm 2026, thủ đoạn dụ dỗ, lôi kéo người dân tộc thiểu số di cư tự do, vượt biên sang Campuchia, Thái Lan của tổ chức BPSOS nhằm mục đích gì?",
    "options": {
      "A": "Khống chế, ép làm “nhân chứng sống” vu cáo Việt Nam, phục vụ mưu đồ chính trị và trục lợi tài chính.",
      "B": "Giúp đỡ họ tìm kiếm việc làm có thu nhập cao và ổn định cuộc sống lâu dài ở nước ngoài.",
      "C": "Tài trợ toàn bộ chi phí du học và đào tạo nghề chất lượng cao tại các quốc gia phát triển.",
      "D": "Hỗ trợ làm thủ tục nhập quốc tịch hợp pháp để trở về quê hương đầu tư kinh doanh."
    },
    "correct": "A"
  },
  {
    "id": 385,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mưu đồ thâm độc của các thế lực thù địch khi thâm nhập vào lĩnh vực giáo dục - đào tạo ở Việt Nam là gì?",
    "options": {
      "A": "Đào tạo “thủ lĩnh dân chủ”, tạo lớp “lãnh đạo tiềm năng” để sẵn sàng làm \"cách mạng màu\" khi có thời cơ.",
      "B": "Nâng cao chất lượng dạy và học môn ngoại ngữ cho học sinh, sinh viên Việt Nam.",
      "C": "Tài trợ trang thiết bị máy tính hiện đại cho các trường học ở vùng sâu, vùng xa.",
      "D": "Giúp đỡ các trường đại học Việt Nam xếp hạng cao trên các bảng xếp hạng quốc tế."
    },
    "correct": "A"
  },
  {
    "id": 386,
    "q": "Qua nghiên cứu chuyên đề năm 2026, các thế lực thù địch đã lợi dụng thời điểm tuyển quân hằng năm để phát tán thông tin sai lệch nhằm mục đích gì?",
    "options": {
      "A": "Bôi nhọ “Bộ đội Cụ Hồ”, xuyên tạc kỷ luật Quân đội, kích động trốn nghĩa vụ quân sự.",
      "B": "Đề xuất tăng chính sách hậu phương quân đội cho gia đình hạ sĩ quan, chiến sĩ.",
      "C": "Khuyến khích thanh niên nâng cao thể lực để đáp ứng yêu cầu huấn luyện thao trường.",
      "D": "Tuyên truyền truyền thống đánh giặc giữ nước vẻ vang của Quân đội nhân dân Việt Nam."
    },
    "correct": "A"
  },
  {
    "id": 387,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung, biện pháp hàng đầu đối với cấp ủy, chỉ huy các cấp để phòng chống chống phá về dân chủ, nhân quyền là gì?",
    "options": {
      "A": "Thường xuyên lãnh đạo, quán triệt, phổ biến và cụ thể hóa các nghị quyết, chỉ thị của Đảng, Nhà nước.",
      "B": "Mua sắm trang thiết bị công nghệ hiện đại mà không cần tập trung giáo dục tư tưởng.",
      "C": "Cấm toàn bộ cán bộ, chiến sĩ sử dụng điện thoại thông minh và mạng internet.",
      "D": "Chờ đợi hướng dẫn chi tiết từ cơ quan cấp trên khi có sự cố xảy ra tại đơn vị."
    },
    "correct": "A"
  },
  {
    "id": 388,
    "q": "Qua nghiên cứu chuyên đề năm 2026, cán bộ, chiến sĩ phải làm gì ngay khi phát hiện dấu hiệu bị các đối tượng xấu móc nối, lôi kéo, khống chế?",
    "options": {
      "A": "Báo cáo ngay với cấp ủy, chỉ huy đơn vị và cơ quan bảo vệ an ninh để xử lý kịp thời.",
      "B": "Tự mình giải quyết bí mật mà không cần thông báo cho cán bộ chỉ huy biết.",
      "C": "Chấp nhận các yêu cầu của đối tượng để tránh bị đe dọa đến cá nhân và gia đình.",
      "D": "Im lặng và nghỉ phép rời khỏi đơn vị một thời gian để tránh sự theo dõi."
    },
    "correct": "A"
  },
  {
    "id": 389,
    "q": "Yếu tố nào đóng vai trò là động lực và nguồn lực quan trọng của sự phát triển đất nước theo quan điểm của Đảng?",
    "options": {
      "A": "Thực hiện tốt vấn đề tự do, dân chủ, nhân quyền và phát huy quyền làm chủ của nhân dân.",
      "B": "Phụ thuộc hoàn toàn vào nguồn vốn vay ưu đãi và công nghệ từ các quốc gia phát triển.",
      "C": "Tuyệt đối hóa các biện pháp quản lý hành chính tập trung và hạn chế giao thương.",
      "D": "Khai thác tối đa tài nguyên thiên nhiên mà không cần tính đến phát triển bền vững."
    },
    "correct": "A"
  },
  {
    "id": 390,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc kết hợp hài hòa chuẩn mực quốc tế về nhân quyền ở Việt Nam phải gắn liền với các điều kiện đặc thù nào?",
    "options": {
      "A": "Lịch sử, chính trị, kinh tế - xã hội, giá trị văn hóa, tôn giáo, truyền thống của dân tộc.",
      "B": "Yêu cầu đơn phương từ các tổ chức phi chính phủ và các quốc gia tài trợ vốn.",
      "C": "Tiêu chuẩn pháp lý riêng của hệ thống pháp luật Mỹ và các nước Tây Âu.",
      "D": "Các xu hướng phát triển tự phát của các hội nhóm mạng xã hội không kiểm duyệt."
    },
    "correct": "A"
  },
  {
    "id": 391,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đặc điểm nào khẳng định AI vẫn mang tính công cụ và phụ thuộc vào con người?",
    "options": {
      "A": "AI mô phỏng được cảm xúc con người",
      "B": "AI xử lý thông tin nhanh hơn con người",
      "C": "AI không có ý thức hay lập trường chính trị riêng",
      "D": "AI có khả năng tự học tập từ dữ liệu"
    },
    "correct": "C"
  },
  {
    "id": 392,
    "q": "Qua nghiên cứu chuyên đề năm 2026, Chiến lược quốc gia về nghiên cứu, phát triển và ứng dụng AI đến năm 2030 của Việt Nam được ban hành vào năm nào?",
    "options": {
      "A": "Năm 2010",
      "B": "Năm 2025",
      "C": "Năm 2016",
      "D": "Năm 2021"
    },
    "correct": "D"
  },
  {
    "id": 393,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong giáo dục, AI giúp giáo viên giảm tải công việc thông qua tính năng nào?",
    "options": {
      "A": "Thay thế hoàn toàn vai trò của người dạy",
      "B": "Tự động hóa việc chấm điểm và phân tích kết quả",
      "C": "Quản lý hành vi kỷ luật của học sinh tại nhà",
      "D": "Tự động soạn thảo toàn bộ giáo trình cho các nhà trường"
    },
    "correct": "B"
  },
  {
    "id": 394,
    "q": "Qua nghiên cứu chuyên đề năm 2026, trong lĩnh vực quốc phòng, AI hỗ trợ người chỉ huy như thế nào trong điều kiện tác chiến nhanh?",
    "options": {
      "A": "Thay thế người chỉ huy đưa ra mệnh lệnh cuối cùng",
      "B": "Tự động hóa việc tuyển chọn chiến sĩ mới",
      "C": "Xây dựng các phương án hành động tối ưu và đẩy nhanh tốc độ ra quyết định",
      "D": "Loại bỏ hoàn toàn nhu cầu về trinh sát thực địa"
    },
    "correct": "C"
  },
  {
    "id": 395,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tác động tích cực nào của AI giúp công tác tư tưởng chuyển từ “xử lý khi đã xảy ra” sang “phòng ngừa từ sớm”?",
    "options": {
      "A": "Khả năng lưu trữ khối lượng lớn văn kiện Đảng",
      "B": "Khả năng thay thế cán bộ chính trị trong việc đối thoại trực tiếp",
      "C": "Khả năng dự báo xu hướng dư luận thông qua phân tích dữ liệu thời gian thực",
      "D": "Khả năng tạo ra các bài giảng video sinh động"
    },
    "correct": "C"
  },
  {
    "id": 396,
    "q": "Qua nghiên cứu chuyên đề năm 2026, AI hỗ trợ như thế nào trong việc bảo vệ nền tảng tư tưởng trên không gian mạng?",
    "options": {
      "A": "Tự động viết lại lịch sử dân tộc theo ý muốn của máy tính",
      "B": "Nhận diện nội dung xuyên tạc và các mạng lưới tài khoản ảo (bot)",
      "C": "Tự động khóa tất cả các tài khoản mạng xã hội cá nhân",
      "D": "Ngăn chặn người dân truy cập internet hoàn toàn"
    },
    "correct": "B"
  },
  {
    "id": 397,
    "q": "Qua nghiên cứu chuyên đề năm 2026, công nghệ nào bị các thế lực thù địch lợi dụng để giả mạo hình ảnh, giọng nói của lãnh đạo nhằm bôi nhọ?",
    "options": {
      "A": "Big Data",
      "B": "Cloud Computing",
      "C": "Deepfake",
      "D": "Blockchain"
    },
    "correct": "C"
  },
  {
    "id": 398,
    "q": "Qua nghiên cứu chuyên đề năm 2026, tại sao việc cá nhân hóa nội dung của AI lại tiềm ẩn nguy cơ làm phai nhạt lòng tin chính trị?",
    "options": {
      "A": "Vì AI không thể dịch được các văn bản chính trị sang tiếng Việt để cung cấp cho người sử dụng",
      "B": "Vì AI liên tục đề xuất nội dung tiêu cực nếu người dùng lỡ xem các tin tức đó",
      "C": "Vì AI làm giảm tốc độ truy cập vào các trang báo Đảng",
      "D": "Vì AI yêu cầu người dùng phải trả phí để xem tin tức chính thống"
    },
    "correct": "B"
  },
  {
    "id": 399,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nhiệm vụ bảo vệ nền tảng tư tưởng của Đảng trong tình hình mới được đánh giá như thế nào?",
    "options": {
      "A": "Đã được hoàn thành xong nhờ có công nghệ AI",
      "B": "Chỉ cần thực hiện khi có xung đột xảy ra",
      "C": "Rất cấp bách và mang tính sống còn",
      "D": "Là nhiệm vụ phụ sau nhiệm vụ huấn luyện"
    },
    "correct": "C"
  },
  {
    "id": 400,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc phối hợp với các cơ quan chức năng ngoài Quân đội nhằm mục đích gì?",
    "options": {
      "A": "Để mượn trang thiết bị máy tính của dân sự",
      "B": "Xây dựng “thế trận lòng dân” trên không gian mạng",
      "C": "Chuyển giao hoàn toàn việc bảo vệ tư tưởng cho cơ quan công an",
      "D": "Để nhờ các doanh nghiệp AI viết hộ các bài báo chính trị"
    },
    "correct": "B"
  },
  {
    "id": 401,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đặc điểm nào sau đây thể hiện bản chất công nghệ cốt lõi của Trí tuệ nhân tạo (AI)?",
    "options": {
      "A": "Sự mô phỏng các năng lực trí tuệ con người bằng phương tiện điện tử.",
      "B": "Khả năng tự phát triển ý thức và tình cảm độc lập với con người.",
      "C": "Hoạt động dựa trên sự sáng tạo không cần đến dữ liệu có sẵn.",
      "D": "Là một dạng trí tuệ sinh học mới được tạo ra trong phòng thí nghiệm."
    },
    "correct": "A"
  },
  {
    "id": 402,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu cụ thể của Việt Nam trong Chiến lược quốc gia về AI đến năm 2030 là gì?",
    "options": {
      "A": "Thay thế toàn bộ lao động thủ công bằng hệ thống AI tự động.",
      "B": "Trở thành nước đứng đầu thế giới về chế tạo robot thông minh.",
      "C": "Nằm trong nhóm 4 nước dẫn đầu ASEAN và nhóm 50 nước dẫn đầu thế giới về AI.",
      "D": "Phát triển thành công AI tự nhận thức trước năm 2030."
    },
    "correct": "C"
  },
  {
    "id": 403,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yếu tố nào phản ánh đầy đủ nhất bản chất của giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới?",
    "options": {
      "A": "Hệ thống truyền thống quân sự được tích lũy qua các cuộc chiến tranh.",
      "B": "Hệ thống phẩm chất chính trị, đạo đức, lối sống, phong cách và chuẩn mực hành vi của người quân nhân cách mạng được hình thành dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh.",
      "C": "Những giá trị tinh thần của Quân đội trong thời kỳ kháng chiến chống thực dân và đế quốc.",
      "D": "Hệ thống chuẩn mực đạo đức được xây dựng trong thời kỳ đổi mới."
    },
    "correct": "B"
  },
  {
    "id": 404,
    "q": "Qua nghiên cứu chuyên đề năm 2026, giá trị văn hóa “Bộ đội Cụ Hồ” trước hết được hình thành và phát triển từ yếu tố nào?",
    "options": {
      "A": "Quá trình xây dựng, chiến đấu và trưởng thành của Quân đội gắn với yêu cầu bảo vệ Tổ quốc và nhiệm vụ quốc phòng trong từng thời kỳ.",
      "B": "Quá trình xây dựng, chiến đấu và trưởng thành của Quân đội gắn với truyền thống dân tộc và sự phát triển của nghệ thuật quân sự Việt Nam.",
      "C": "Quá trình xây dựng, chiến đấu, trưởng thành của Quân đội dưới sự lãnh đạo của Đảng và sự giáo dục, rèn luyện của Chủ tịch Hồ Chí Minh.",
      "D": "Quá trình xây dựng, chiến đấu và trưởng thành của Quân đội gắn với yêu cầu xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại."
    },
    "correct": "C"
  },
  {
    "id": 405,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đặc trưng giữ vai trò nền tảng của toàn bộ hệ giá trị văn hóa “Bộ đội Cụ Hồ” là gì?",
    "options": {
      "A": "Đoàn kết, gắn bó với đồng chí, đồng đội, nhân dân và bạn bè quốc tế.",
      "B": "Đạo đức trong sáng, lối sống lành mạnh, kỷ luật tự giác và tinh thần trách nhiệm cao.",
      "C": "Tuyệt đối trung thành với Tổ quốc, Đảng, Nhà nước và Nhân dân.",
      "D": "Không ngừng đổi mới, sáng tạo, chủ động khắc phục khó khăn và hoàn thành tốt mọi nhiệm vụ."
    },
    "correct": "C"
  },
  {
    "id": 406,
    "q": "Qua nghiên cứu chuyên đề năm 2026, ý nghĩa nổi bật của giá trị văn hóa “Bộ đội Cụ Hồ” đối với mỗi quân nhân là gì?",
    "options": {
      "A": "Là cơ sở định hướng nhận thức, hành động và xây dựng ý thức trách nhiệm trong thực hiện nhiệm vụ.",
      "B": "Là nguồn sức mạnh nội sinh, niềm tự hào và động lực phấn đấu.",
      "C": "Là chuẩn mực định hướng rèn luyện phẩm chất, đạo đức và xây dựng bản lĩnh chính trị của mỗi quân nhân.",
      "D": "Là cơ sở củng cố tinh thần đoàn kết, ý thức tổ chức kỷ luật."
    },
    "correct": "B"
  },
  {
    "id": 405,
    "q": "Qua nghiên cứu chuyên đề năm 2026, sự cần thiết phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trước hết xuất phát từ cơ sở nào?",
    "options": {
      "A": "Yêu cầu xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại trong tình hình mới.",
      "B": "Quan điểm của chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh và đường lối của Đảng về văn hóa.",
      "C": "Yêu cầu xây dựng môi trường văn hóa lành mạnh, nâng cao đời sống tinh thần và chất lượng con người trong Quân đội.",
      "D": "Đòi hỏi tăng cường giáo dục chính trị, tư tưởng, đạo đức, lối sống và xây dựng phẩm chất người quân nhân."
    },
    "correct": "B"
  },
  {
    "id": 406,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục đích cơ bản của phát huy giá trị văn hóa “Bộ đội Cụ Hồ” là gì?",
    "options": {
      "A": "Tạo chuyển biến tích cực về nhận thức, trách nhiệm, ý thức tổ chức kỷ luật và tinh thần thi đua trong mỗi quân nhân.",
      "B": "Làm cho mỗi quân nhân giữ vững bản chất cách mạng, đạo đức trong sáng và hoàn thành tốt nhiệm vụ.",
      "C": "Xây dựng môi trường văn hóa lành mạnh, nâng cao đời sống tinh thần và củng cố đoàn kết trong đơn vị.",
      "D": "Phát huy vai trò của các hoạt động văn hóa, văn nghệ, thể dục thể thao trong xây dựng đời sống tinh thần của quân nhân."
    },
    "correct": "B"
  },
  {
    "id": 407,
    "q": "Qua nghiên cứu chuyên đề năm 2026, nội dung phát huy giá trị văn hóa “Bộ đội Cụ Hồ” trong chuyển đổi số nhấn mạnh yêu cầu nào?",
    "options": {
      "A": "Chủ động ứng dụng công nghệ mới, ưu tiên nâng cao năng lực số và hiệu quả thực hiện nhiệm vụ của mỗi quân nhân.",
      "B": "Đổi mới sáng tạo nhưng không xa rời nguyên tắc, bản lĩnh và chuẩn mực văn hóa quân sự.",
      "C": "Tập trung phát triển kỹ năng số, khả năng khai thác dữ liệu và sử dụng hiệu quả các nền tảng công nghệ trong thực hiện nhiệm vụ.",
      "D": "Đẩy mạnh ứng dụng trí tuệ nhân tạo, công nghệ số và các phương thức mới nhằm nâng cao chất lượng, hiệu quả công tác."
    },
    "correct": "B"
  },
  {
    "id": 408,
    "q": "Qua nghiên cứu chuyên đề năm 2026, việc phát huy giá trị văn hóa “Bộ đội Cụ Hồ” được gắn chặt với nhiệm vụ trọng tâm nào của cơ quan, đơn vị?",
    "options": {
      "A": "Xây dựng cơ quan, đơn vị chính quy, thống nhất, có cảnh quan môi trường xanh, sạch, đẹp và đời sống văn hóa lành mạnh.",
      "B": "Thực hiện nhiệm vụ chính trị trung tâm và xây dựng đơn vị vững mạnh toàn diện “mẫu mực, tiêu biểu”.",
      "C": "Đẩy mạnh tăng gia sản xuất, thực hành tiết kiệm, nâng cao đời sống vật chất và tinh thần cho cán bộ, chiến sĩ.",
      "D": "Xây dựng doanh trại chính quy, bảo đảm cơ sở vật chất, cảnh quan môi trường và điều kiện sinh hoạt cho bộ đội."
    },
    "correct": "B"
  },
  {
    "id": 409,
    "q": "Qua nghiên cứu chuyên đề năm 2026, mục tiêu cuối cùng về phát huy giá trị văn hóa “Bộ đội Cụ Hồ” hướng tới điều gì?",
    "options": {
      "A": "Củng cố nền nếp chính quy, xây dựng môi trường văn hóa lành mạnh và nâng cao chất lượng đời sống tinh thần trong Quân đội.",
      "B": "Củng cố mối quan hệ gắn bó máu thịt Quân đội với Nhân dân, xây dựng “thế trận lòng dân” vững chắc và lan tỏa hình ảnh cao đẹp “Bộ đội Cụ Hồ”.",
      "C": "Tăng cường quan hệ đối ngoại quốc phòng, mở rộng hợp tác, giao lưu và nâng cao vị thế, uy tín của Quân đội.",
      "D": "Đẩy mạnh nghiên cứu, ứng dụng khoa học công nghệ, nâng cao năng lực và khả năng đáp ứng yêu cầu xây dựng Quân đội hiện đại."
    },
    "correct": "B"
  },
  {
    "id": 410,
    "q": "Qua nghiên cứu chuyên đề năm 2026, yêu cầu xuyên suốt trong phát huy giá trị văn hóa “Bộ đội Cụ Hồ” là gì?",
    "options": {
      "A": "Không ngừng đổi mới nhưng phải giữ vững bản chất cách mạng.",
      "B": "Kế thừa, giữ gìn truyền thống nhưng tập trung chủ yếu vào việc bảo tồn những giá trị đã được hình thành.",
      "C": "Đẩy mạnh hiện đại hóa, đổi mới phương thức hoạt động và nâng cao năng lực thích ứng trước yêu cầu nhiệm vụ mới.",
      "D": "Chủ động hội nhập, tiếp thu các giá trị tiến bộ của nhân loại và vận dụng phù hợp vào xây dựng Quân đội."
    },
    "correct": "A"
  },
  {
    "id": 411,
    "q": "Qua nghiên cứu chuyên đề năm 2026, phát huy giá trị văn hóa “Bộ đội Cụ Hồ” phải hướng tới xây dựng hình ảnh người quân nhân như thế nào?",
    "options": {
      "A": "Có trình độ chuyên môn, nghiệp vụ vững vàng, năng lực thực tiễn tốt và khả năng đáp ứng yêu cầu nhiệm vụ trong tình hình mới.",
      "B": "Có bản lĩnh chính trị, đạo đức trong sáng, trí tuệ, kỷ luật và trách nhiệm cao trước Đảng, Tổ quốc và Nhân dân.",
      "C": "Có sức khỏe tốt, tác phong chính quy, ý thức tổ chức kỷ luật và khả năng thích ứng với điều kiện huấn luyện, công tác.",
      "D": "Có trình độ ngoại ngữ, công nghệ thông tin, kỹ năng giao tiếp và khả năng hội nhập, hợp tác trong môi trường quốc tế."
    },
    "correct": "B"
  },
  {
    "id": 412,
    "q": "Giá trị văn hóa “Bộ đội Cụ Hồ” là sự kết tinh những phẩm chất cao đẹp của người quân nhân cách mạng dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh, được biểu hiện tập trung ở những nội dung cơ bản nào sau đây?",
    "options": {
      "A": "Tuyệt đối trung thành với Tổ quốc, với Đảng, Nhà nước và Nhân dân; dũng cảm, kiên cường, bất khuất; đạo đức trong sáng, lối sống giản dị.",
      "B": "Dân chủ, kỷ luật, đoàn kết thống nhất, không ngại khó khăn, gian khổ, không ngừng đổi mới sáng tạo, hoàn thành tốt và xuất sắc nhiệm vụ.",
      "C": "Có tình thương yêu đồng chí, đồng đội; gắn bó máu thịt với Nhân dân; có tinh thần quốc tế trong sáng.",
      "D": "Tất cả đáp án đã nêu"
    },
    "correct": "D"
  },
  {
    "id": 413,
    "q": "Qua nghiên cứu chuyên đề năm 2026, đối với tổ chức đoàn, nội dung phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới cần gắn với phong trào nào?",
    "options": {
      "A": "Thanh niên lập nghiệp.",
      "B": "3 Tiên phong quyết thắng.",
      "C": "Lao động giỏi.",
      "D": "Vì biển đảo quê hương."
    },
    "correct": "B"
  },
  {
    "id": 414,
    "q": "Qua nghiên cứu chuyên đề năm 2026, hằng năm mỗi cán bộ, đảng viên phải thực hiện nghiêm túc việc gì để phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới?",
    "options": {
      "A": "Xây dựng kế hoạch công tác, xác định rõ nội dung, chỉ tiêu và biện pháp thực hiện nhiệm vụ được giao.",
      "B": "Xây dựng cam kết tu dưỡng, rèn luyện, phấn đấu phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới.",
      "C": "Đăng ký danh hiệu thi đua, xác định chỉ tiêu phấn đấu và nội dung rèn luyện phù hợp với chức trách, nhiệm vụ.",
      "D": "Đăng ký sáng kiến, cải tiến, xác định nội dung đổi mới nhằm nâng cao chất lượng, hiệu quả thực hiện nhiệm vụ."
    },
    "correct": "B"
  },
  {
    "id": 415,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội trong Quân đội ta được xác định như thế nào?",
    "options": {
      "A": "Một truyền thống tốt đẹp được hình thành, kế thừa và phát huy trong quá trình xây dựng, chiến đấu và trưởng thành của Quân đội.",
      "B": "Một nội dung quan trọng trong xây dựng tinh thần đoàn kết, ý thức tổ chức kỷ luật và trách nhiệm của cán bộ, chiến sĩ trong đơn vị.",
      "C": "Sợi chỉ đỏ xuyên suốt, vừa là thuộc tính bản chất của quân đội cách mạng, vừa là cơ sở tạo nên giá trị văn hóa quân sự tốt đẹp.",
      "D": "Một chuẩn mực đạo đức được cụ thể hóa trong quan hệ công tác, sinh hoạt và thực hiện nhiệm vụ của cán bộ, chiến sĩ."
    },
    "correct": "C"
  },
  {
    "id": 416,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội là phẩm chất đặc biệt trong nhân cách của ai?",
    "options": {
      "A": "Người cán bộ lãnh đạo, chỉ huy.",
      "B": "Người quân nhân cách mạng - “Bộ đội Cụ Hồ”.",
      "C": "Người đảng viên trong quá trình tu dưỡng, rèn luyện phẩm chất đạo đức và thực hiện chức trách, nhiệm vụ.",
      "D": "Người chiến sĩ trong quá trình học tập, huấn luyện, công tác và xây dựng mối quan hệ đoàn kết trong đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 417,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, Di chúc của Chủ tịch Hồ Chí Minh, cách tốt nhất để củng cố và phát triển sự đoàn kết, thống nhất của Đảng là gì?",
    "options": {
      "A": "Tăng cường kiểm tra, giám sát, giữ vững nguyên tắc tổ chức và nâng cao ý thức chấp hành kỷ luật của cán bộ, đảng viên.",
      "B": "Đổi mới phương thức lãnh đạo, nâng cao năng lực tổ chức thực hiện và phát huy vai trò, trách nhiệm của cấp ủy, tổ chức đảng.",
      "C": "Thực hành dân chủ rộng rãi, thường xuyên và nghiêm chỉnh tự phê bình và phê bình.",
      "D": "Đẩy mạnh công tác thi đua, khen thưởng, phát huy tinh thần trách nhiệm và động viên cán bộ, đảng viên hoàn thành tốt nhiệm vụ."
    },
    "correct": "C"
  },
  {
    "id": 418,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, tình thương yêu đồng chí, đồng đội hướng tới mục tiêu cao nhất là gì?",
    "options": {
      "A": "Nâng cao tinh thần trách nhiệm, phát huy năng lực và bảo đảm mỗi quân nhân hoàn thành tốt chức trách, nhiệm vụ được giao.",
      "B": "Phục vụ mục đích, lý tưởng cách mạng của Đảng, lợi ích dân tộc và hạnh phúc của nhân dân.",
      "C": "Cải thiện đời sống vật chất, tinh thần, tạo điều kiện thuận lợi để cán bộ, chiến sĩ yên tâm công tác và hoàn thành nhiệm vụ.",
      "D": "Xây dựng mối quan hệ đoàn kết, thống nhất, nâng cao chất lượng quản lý và tổ chức thực hiện nhiệm vụ trong đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 419,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, cán bộ các cấp cần thực hiện phương châm nào sau đây trong quản lý bộ đội?",
    "options": {
      "A": "Chủ động nắm tình hình, tăng cường kiểm tra, giám sát và duy trì chặt chẽ nền nếp quản lý bộ đội.",
      "B": "Gần bộ đội, hiểu bộ đội, giúp đỡ bộ đội.",
      "C": "Tăng cường quản lý bằng mệnh lệnh, quy định, chế độ và phát huy tính tự giác của quân nhân.",
      "D": "Quản lý chặt chẽ quân nhân thông qua hồ sơ, sổ sách, chế độ báo cáo và hệ thống thông tin quản lý."
    },
    "correct": "B"
  },
  {
    "id": 420,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, việc phát huy trách nhiệm nêu gương của cán bộ, đảng viên nhằm mục đích gì?",
    "options": {
      "A": "Góp phần nâng cao ý thức trách nhiệm và tinh thần tự giác của cán bộ, đảng viên trong thực hiện nhiệm vụ.",
      "B": "Tạo sức lan tỏa trong học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
      "C": "Góp phần nâng cao chất lượng thực hiện nhiệm vụ và hiệu quả các phong trào thi đua trong đơn vị.",
      "D": "Tạo động lực để cán bộ, đảng viên phấn đấu hoàn thành tốt chức trách, nhiệm vụ được giao."
    },
    "correct": "B"
  },
  {
    "id": 421,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, một trong những giải pháp quan trọng để củng cố tình thương yêu đồng chí, đồng đội là gì?",
    "options": {
      "A": "Tăng cường tổ chức các hoạt động tập thể, sinh hoạt đơn vị và giao lưu giữa cán bộ, chiến sĩ.",
      "B": "Kịp thời phát hiện, giải quyết các mâu thuẫn ngay từ cơ sở.",
      "C": "Đẩy mạnh công tác giáo dục, tuyên truyền.",
      "D": "Tăng cường kiểm tra, quản lý và duy trì nghiêm các chế độ, nền nếp trong đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 422,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, mục tiêu cuối cùng của các giải pháp đẩy mạnh học tập và làm theo tư tưởng Hồ Chí Minh về tình thương yêu đồng chí, đồng đội là gì?",
    "options": {
      "A": "Góp phần nâng cao chất lượng các phong trào thi đua và xây dựng môi trường văn hóa tốt đẹp trong Quân đội.",
      "B": "Xây dựng Quân đội nhân dân Việt Nam vững mạnh về chính trị, tuyệt đối trung thành với Đảng, Nhà nước và Nhân dân, hoàn thành thắng lợi mọi nhiệm vụ được giao.",
      "C": "Góp phần nâng cao chất lượng đời sống vật chất, tinh thần và điều kiện công tác của cán bộ, chiến sĩ.",
      "D": "Xây dựng mối quan hệ đoàn kết, thống nhất, trách nhiệm giữa cán bộ với chiến sĩ và giữa các quân nhân trong đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 423,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, trong xây dựng tình thương yêu đồng chí, đồng đội, người cán bộ phải kiên quyết đấu tranh với biểu hiện gì?",
    "options": {
      "A": "Thiếu chủ động, kinh nghiệm và kỹ năng trong tổ chức, quản lý bộ đội.",
      "B": "Quan liêu, vô cảm, thiếu trách nhiệm đối với bộ đội.",
      "C": "Thiếu sâu sát, chưa kịp thời trong nắm bắt tình hình và giải quyết công việc.",
      "D": "Thiếu linh hoạt trong phương pháp lãnh đạo, chỉ huy và tổ chức thực hiện nhiệm vụ."
    },
    "correct": "B"
  },
  {
    "id": 424,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, biểu hiện cụ thể của nhu cầu tự thân là ý thức chủ động tự hoàn thiện mình và phát triển một cách bền vững. Theo đó, nội dung nào dưới đây phản ánh đầy đủ nhất biểu hiện của nhu cầu tự thân?",
    "options": {
      "A": "Chủ động nâng cao trình độ chuyên môn, nghiệp vụ, hoàn thành tốt chức trách, nhiệm vụ và tích cực khắc phục hạn chế của bản thân.",
      "B": "Sống có mục đích, có lý tưởng; ý thức tự học tập, tự rèn luyện; điều chỉnh hành vi theo chuẩn mực đạo đức, pháp luật; khát vọng vươn lên bằng lao động, cống hiến và tự chịu trách nhiệm về suy nghĩ, lời nói, hành động.",
      "C": "Chủ động phát huy năng lực, tích cực đổi mới phương pháp công tác, tham gia các phong trào thi đua và đóng góp sáng kiến cho đơn vị.",
      "D": "Tự giác chấp hành kỷ luật, điều lệnh, điều lệ; giữ gìn phẩm chất đạo đức, lối sống và xây dựng mối quan hệ đoàn kết trong tập thể."
    },
    "correct": "B"
  },
  {
    "id": 425,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, theo tư tưởng Hồ Chí Minh, việc học tập không phải để đối phó, lấy hình thức hay “đủ thủ tục”, mà trước hết nhằm mục đích gì?",
    "options": {
      "A": "Chủ động nâng cao trình độ, năng lực công tác và đáp ứng tốt hơn yêu cầu nhiệm vụ được giao.",
      "B": "Vì sự trưởng thành của bản thân, vì trách nhiệm trước Đảng, trước Nhân dân và mục tiêu của cách mạng.",
      "C": "Tích cực hoàn thiện kiến thức, kỹ năng và phương pháp công tác để nâng cao chất lượng thực hiện nhiệm vụ.",
      "D": "Phát huy khả năng của bản thân, tạo động lực phấn đấu và đóng góp ngày càng thiết thực cho tập thể, đơn vị."
    },
    "correct": "B"
  },
  {
    "id": 426,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân cần kiên quyết đấu tranh chống biểu hiện nào trong nội bộ?",
    "options": {
      "A": "Thiếu chủ động trong học tập, rèn luyện, công tác và chưa đáp ứng đầy đủ yêu cầu nhiệm vụ.",
      "B": "Chủ nghĩa cá nhân, suy thoái tư tưởng chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa”.",
      "C": "Hạn chế về trình độ chuyên môn, nghiệp vụ, kinh nghiệm thực tiễn và phương pháp công tác.",
      "D": "Thiếu điều kiện bảo đảm, cơ sở vật chất và phương tiện phục vụ học tập, rèn luyện và công tác."
    },
    "correct": "B"
  },
  {
    "id": 427,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân cần gắn chặt với nhiệm vụ nào?",
    "options": {
      "A": "Xây dựng đội ngũ cán bộ, đảng viên có phẩm chất, năng lực, uy tín ngang tầm nhiệm vụ.",
      "B": "Phát huy vai trò, trách nhiệm của cán bộ, đảng viên trong xây dựng tổ chức đảng và đơn vị vững mạnh.",
      "C": "Nâng cao chất lượng công tác giáo dục chính trị, tư tưởng, đạo đức, lối sống và ý thức trách nhiệm của quân nhân.",
      "D": "Tăng cường công tác quản lý, giáo dục, rèn luyện cán bộ, đảng viên gắn với yêu cầu thực hiện chức trách, nhiệm vụ."
    },
    "correct": "A"
  },
  {
    "id": 428,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo Bác trở thành nhu cầu tự thân, cấp ủy các cấp cần duy trì thường xuyên nội dung nào?",
    "options": {
      "A": "Tăng cường kiểm tra, đánh giá việc chấp hành chế độ, nền nếp và thực hiện nhiệm vụ của cán bộ, đảng viên.",
      "B": "Duy trì tự phê bình, phê bình và thực hiện tốt việc “tự soi, tự sửa” trong cán bộ, đảng viên.",
      "C": "Đẩy mạnh các hoạt động văn hóa, văn nghệ, thể dục thể thao nhằm xây dựng môi trường đoàn kết trong đơn vị.",
      "D": "Tăng cường tổ chức các hoạt động thi đua, hội thao, hội thi nhằm tạo động lực phấn đấu cho cán bộ, chiến sĩ."
    },
    "correct": "B"
  },
  {
    "id": 429,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh trở thành nhu cầu tự thân phải được cụ thể hóa vào đâu?",
    "options": {
      "A": "Từng vị trí công tác, chức trách, nhiệm vụ và quá trình học tập, rèn luyện của cán bộ, đảng viên.",
      "B": "Các hoạt động văn hóa, văn nghệ và xây dựng môi trường văn hóa trong cơ quan, đơn vị.",
      "C": "Các phong trào thi đua, hoạt động thể dục thể thao và sinh hoạt tập thể của cán bộ, chiến sĩ.",
      "D": "Hoạt động tăng gia sản xuất, thực hành tiết kiệm và nâng cao đời sống vật chất trong đơn vị."
    },
    "correct": "A"
  },
  {
    "id": 430,
    "q": "Qua nghiên cứu chuyên đề tư tưởng Hồ Chí Minh năm 2026, để việc học tập và làm theo Bác trở thành nhu cầu tự thân, cán bộ chủ trì đơn vị giữ vai trò như thế nào?",
    "options": {
      "A": "Chủ động tổ chức, quản lý và điều hành các hoạt động của đơn vị theo đúng chức trách, nhiệm vụ được giao.",
      "B": "Gương mẫu trong học tập, tu dưỡng, rèn luyện và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
      "C": "Chủ động nghiên cứu, đổi mới phương pháp công tác và nâng cao chất lượng thực hiện nhiệm vụ của đơn vị.",
      "D": "Tăng cường kiểm tra, đôn đốc, đánh giá kết quả học tập và làm theo Bác của cán bộ, đảng viên, quần chúng."
    },
    "correct": "B"
  },
  {
    "id": 431,
    "q": "Theo Luật Phòng thủ dân sự, nội dung nào không thuộc biện pháp khắc phục hậu quả thảm họa, sự cố?",
    "options": {
      "A": "Tổ chức tìm kiếm người mất tích, cứu chữa người bị thương.",
      "B": "Tiêu hủy mầm bệnh, vệ sinh môi trường.",
      "C": "Tổ chức diễn tập phòng thủ dân sự.",
      "D": "Sửa chữa, khôi phục công trình hạ tầng thiết yếu."
    },
    "correct": "C"
  },
  {
    "id": 432,
    "q": "Theo Luật Phòng thủ dân sự, mục tiêu cao nhất của hoạt động phòng thủ dân sự là gì?",
    "options": {
      "A": "Phát triển kinh tế địa phương.",
      "B": "Bảo vệ tài nguyên thiên nhiên.",
      "C": "Bảo vệ tính mạng, sức khỏe, tài sản của Nhân dân.",
      "D": "Mở rộng hợp tác quốc tế."
    },
    "correct": "C"
  },
  {
    "id": 433,
    "q": "Theo Luật Phòng thủ dân sự, Cơ quan thường trực của Ban Chỉ huy phòng thủ dân sự địa phương là ai?",
    "options": {
      "A": "Công an cùng cấp.",
      "B": "Văn phòng UBND.",
      "C": "Cơ quan quân sự cùng cấp.",
      "D": "Sở Nội vụ."
    },
    "correct": "C"
  },
  {
    "id": 434,
    "q": "Theo Luật Phòng thủ dân sự, lực lượng nòng cốt của phòng thủ dân sự gồm?",
    "options": {
      "A": "Công chức và viên chức.",
      "B": "Dân quân tự vệ và dân phòng.",
      "C": "Thanh niên xung phong.",
      "D": "Người lao động trong doanh nghiệp."
    },
    "correct": "B"
  },
  {
    "id": 435,
    "q": "Theo Luật Phòng thủ dân sự, một trong các quyền của cá nhân trong hoạt động phòng thủ dân sự là gì?",
    "options": {
      "A": "Từ chối chấp hành huy động.",
      "B": "Được tiếp cận thông tin về phòng thủ dân sự theo quy định của pháp luật.",
      "C": "Tự quyết định cấp độ phòng thủ dân sự.",
      "D": "Ban bố tình trạng khẩn cấp."
    },
    "correct": "B"
  },
  {
    "id": 436,
    "q": "Theo Luật Phòng thủ dân sự, một trong các nghĩa vụ của cá nhân là gì?",
    "options": {
      "A": "Không cần tham gia diễn tập",
      "B": "Chỉ tham gia khi tự nguyện",
      "C": "Tham gia đào tạo, huấn luyện, diễn tập khi có yêu cầu của cơ quan có thẩm quyền",
      "D": "Chỉ tham gia khi có thù lao"
    },
    "correct": "C"
  },
  {
    "id": 437,
    "q": "Theo Luật Phòng thủ dân sự, tổ chức, cá nhân nước ngoài tham gia cứu trợ tại Việt Nam phải làm gì?",
    "options": {
      "A": "Đăng ký hoạt động với cơ quan có thẩm quyền của Việt Nam.",
      "B": "Xin phép chính quyền cấp xã.",
      "C": "Xin phép Bộ Ngoại giao nước họ.",
      "D": "Được bảo lãnh bởi doanh nghiệp Việt Nam."
    },
    "correct": "A"
  },
  {
    "id": 438,
    "q": "Theo Luật Phòng thủ dân sự, khi tham gia hoạt động phòng thủ dân sự theo quyết định huy động của người có thẩm quyền, cá nhân được hưởng quyền nào?",
    "options": {
      "A": "Được miễn mọi nghĩa vụ công dân.",
      "B": "Được hưởng tiền công lao động theo quy định.",
      "C": "Được tự quyết định nhiệm vụ thực hiện.",
      "D": "Được miễn chấp hành chỉ huy điều hành."
    },
    "correct": "B"
  },
  {
    "id": 439,
    "q": "Theo Luật Phòng thủ dân sự, cơ quan, tổ chức có quyền nào sau đây?",
    "options": {
      "A": "Được tiếp cận thông tin về phòng thủ dân sự theo quy định của pháp luật.",
      "B": "Tự ban bố cấp độ phòng thủ dân sự.",
      "C": "Tự huy động lực lượng xã hội.",
      "D": "Tự áp dụng tình trạng khẩn cấp."
    },
    "correct": "A"
  },
  {
    "id": 440,
    "q": "Theo Luật Phòng thủ dân sự, một trong những nghĩa vụ của cơ quan, tổ chức là gì?",
    "options": {
      "A": "Tự quyết định việc huy động tài sản của người dân.",
      "B": "Xây dựng và tổ chức thực hiện phương án phòng ngừa, ứng phó, khắc phục hậu quả sự cố, thảm họa.",
      "C": "Ban hành văn bản quy phạm pháp luật về phòng thủ dân sự.",
      "D": "Quyết định thành lập lực lượng chuyên trách địa phương."
    },
    "correct": "B"
  },
  {
    "id": 441,
    "q": "Theo Luật Phòng thủ dân sự, lực lượng rộng rãi trong phòng thủ dân sự được hình thành từ đâu?",
    "options": {
      "A": "Toàn dân tham gia.",
      "B": "Chỉ lực lượng dân quân tự vệ.",
      "C": "Chỉ lực lượng công an xã.",
      "D": "Chỉ lực lượng dự bị động viên."
    },
    "correct": "A"
  },
  {
    "id": 442,
    "q": "Theo Luật Phòng thủ dân sự, Nhà nước khuyến khích hoạt động nào sau đây?",
    "options": {
      "A": "Huy động bắt buộc mọi nguồn lực xã hội.",
      "B": "Thu phí đối với hoạt động cứu trợ.",
      "C": "Ủng hộ vật chất, tài chính, tinh thần cho hoạt động phòng thủ dân sự trên nguyên tắc tự nguyện.",
      "D": "Xã hội hóa toàn bộ hoạt động phòng thủ dân sự."
    },
    "correct": "C"
  },
  {
    "id": 443,
    "q": "Theo Luật Phòng thủ dân sự, nguồn lực thi hành Luật được bảo đảm từ đâu?",
    "options": {
      "A": "Ngân sách trung ương.",
      "B": "Ngân sách địa phương.",
      "C": "Các nguồn kinh phí hợp pháp khác.",
      "D": "Tất cả các nguồn đã nêu."
    },
    "correct": "D"
  },
  {
    "id": 444,
    "q": "Theo Luật Phòng thủ dân sự, Bộ trưởng Bộ Quốc phòng có trách nhiệm nào sau đây?",
    "options": {
      "A": "Giúp Thủ tướng Chính phủ theo dõi, hướng dẫn, kiểm tra việc triển khai thực hiện Luật.",
      "B": "Ban hành luật và nghị quyết về phòng thủ dân sự.",
      "C": "Quyết định ngân sách địa phương cho phòng thủ dân sự.",
      "D": "Thành lập các bộ, ngành liên quan."
    },
    "correct": "A"
  },
  {
    "id": 445,
    "q": "Theo Luật Phòng thủ dân sự, một trong những biện pháp được áp dụng trong phòng thủ dân sự Cấp độ 1 là gì?",
    "options": {
      "A": "Sơ tán người, tài sản ra khỏi khu vực nguy hiểm.",
      "B": "Thiết lập tình trạng thiết quân luật.",
      "C": "Tổng động viên toàn quốc.",
      "D": "Đình chỉ hoạt động của tất cả các cơ quan nhà nước."
    },
    "correct": "A"
  },
  {
    "id": 446,
    "q": "Theo Luật Phòng thủ dân sự, người làm nhiệm vụ phòng thủ dân sự trực đêm (từ 22h đến 6h sáng hôm sau) được hưởng chế độ đặc thù gì?",
    "options": {
      "A": "Được tặng Bằng khen ngay lập tức.",
      "B": "Được thăng cấp bậc hàm trước thời hạn.",
      "C": "Được hưởng tiền ăn thêm.",
      "D": "Được nghỉ bù 1 tháng."
    },
    "correct": "C"
  },
  {
    "id": 447,
    "q": "Theo Luật Phòng thủ dân sự, công dân có nghĩa vụ gì trong phòng thủ dân sự?",
    "options": {
      "A": "Tuân thủ sự hướng dẫn, chỉ đạo của cơ quan có thẩm quyền.",
      "B": "Tham gia các hoạt động phòng thủ dân sự khi được huy động.",
      "C": "Bảo vệ công trình phòng thủ dân sự.",
      "D": "Tất cả các ý trên."
    },
    "correct": "D"
  },
  {
    "id": 448,
    "q": "Theo Luật Phòng thủ dân sự, đâu không phải là biện pháp phòng thủ dân sự được áp dụng trong tình trạng chiến tranh?",
    "options": {
      "A": "Triển khai hệ thống đài quan sát, thông báo, báo động và cảnh báo.",
      "B": "Tổ chức sơ tán người, tài sản.",
      "C": "Huấn luyện cho lực lượng chuyên trách.",
      "D": "Dự trữ lương thực, thực phẩm, thuốc chữa bệnh, nước uống."
    },
    "correct": "C"
  },
  {
    "id": 449,
    "q": "Việt Nam chính thức cử lực lượng tham gia hoạt động gìn giữ hòa bình Liên hợp quốc từ thời điểm nào?",
    "options": {
      "A": "Tháng 5/2013.",
      "B": "Tháng 6/2013.",
      "C": "Tháng 6/2014.",
      "D": "Tháng 9/2015."
    },
    "correct": "C"
  },
  {
    "id": 450,
    "q": "Đến nay, Việt Nam đã cử gần bao nhiêu lượt sĩ quan, quân nhân chuyên nghiệp tham gia thực hiện nhiệm vụ gìn giữ hòa bình Liên hợp quốc?",
    "options": {
      "A": "Gần 500 lượt.",
      "B": "Gần 700 lượt.",
      "C": "Gần 900 lượt.",
      "D": "Gần 1.100 lượt."
    },
    "correct": "D"
  },
  {
    "id": 451,
    "q": "Một điểm mới quan trọng của Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc năm 2025 so với Nghị quyết số 130/2020/QH14 của Quốc hội là gì?",
    "options": {
      "A": "Bỏ quy định về hợp tác quốc tế.",
      "B": "Bổ sung đối tượng dân sự tham gia lực lượng gìn giữ hòa bình Liên hợp quốc.",
      "C": "Thu hẹp đối tượng tham gia.",
      "D": "Chỉ cho phép lực lượng quân đội tham gia."
    },
    "correct": "B"
  },
  {
    "id": 452,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những yêu cầu quan trọng khi Việt Nam tham gia lực lượng gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": {
      "A": "Bảo đảm lợi ích kinh tế của doanh nghiệp Việt Nam ở nước ngoài.",
      "B": "Phù hợp với Hiến chương Liên hợp quốc, pháp luật quốc tế, pháp luật Việt Nam và điều ước quốc tế mà Việt Nam là thành viên.",
      "C": "Ưu tiên triển khai lực lượng quân sự trước lực lượng dân sự.",
      "D": "Chỉ tham gia các phái bộ tại khu vực châu Á."
    },
    "correct": "B"
  },
  {
    "id": 453,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, việc tham gia lực lượng gìn giữ hòa bình Liên hợp quốc góp phần trực tiếp thực hiện đường lối đối ngoại nào của Đảng và Nhà nước ta?",
    "options": {
      "A": "Đối ngoại kinh tế là trọng tâm.",
      "B": "Hội nhập kinh tế quốc tế toàn diện.",
      "C": "Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.",
      "D": "Phát triển công nghiệp quốc phòng."
    },
    "correct": "C"
  },
  {
    "id": 454,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, việc cử lực lượng tham gia hoạt động gìn giữ hòa bình Liên hợp quốc phải bảo đảm yêu cầu nào?",
    "options": {
      "A": "Không làm ảnh hưởng đến khả năng sẵn sàng chiến đấu và thực hiện nhiệm vụ của cơ quan, đơn vị.",
      "B": "Chỉ lựa chọn cán bộ giữ chức vụ chỉ huy.",
      "C": "Chỉ cử lực lượng quân đội tham gia.",
      "D": "Ưu tiên số lượng hơn chất lượng."
    },
    "correct": "A"
  },
  {
    "id": 455,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, đối với đơn vị tham gia hoạt động gìn giữ hòa bình Liên hợp quốc, việc tổ chức lực lượng phải đáp ứng yêu cầu gì?",
    "options": {
      "A": "Theo nhu cầu của nước sở tại.",
      "B": "Theo đề xuất của Liên hợp quốc và khả năng bảo đảm của Việt Nam.",
      "C": "Do Bộ Ngoại giao quyết định.",
      "D": "Theo yêu cầu của các tổ chức quốc tế liên quan."
    },
    "correct": "B"
  },
  {
    "id": 456,
    "q": "Một trong những mục tiêu quan trọng của việc ban hành Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc là gì?",
    "options": {
      "A": "Mở rộng hoạt động kinh tế đối ngoại.",
      "B": "Tăng cường đầu tư quốc phòng ở nước ngoài.",
      "C": "Hoàn thiện cơ sở pháp lý cho việc tham gia lực lượng gìn giữ hòa bình Liên hợp quốc.",
      "D": "Xây dựng lực lượng dự bị động viên."
    },
    "correct": "C"
  },
  {
    "id": 457,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, trong quản lý nhà nước về tham gia hoạt động gìn giữ hòa bình Liên hợp quốc, Bộ Quốc phòng giữ vai trò gì?",
    "options": {
      "A": "Cơ quan phối hợp, triển khai thực hiện các nhiệm vụ được giao.",
      "B": "Cơ quan tư vấn độc lập.",
      "C": "Cơ quan chủ trì giúp Chính phủ thực hiện quản lý nhà nước.",
      "D": "Cơ quan thanh tra chuyên ngành."
    },
    "correct": "C"
  },
  {
    "id": 458,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những nhiệm vụ của lực lượng Việt Nam tại phái bộ gìn giữ hòa bình Liên hợp quốc là gì?",
    "options": {
      "A": "Tham gia thay đổi thể chế chính trị nước sở tại.",
      "B": "Hỗ trợ thực hiện nhiệm vụ theo sự phân công của Liên hợp quốc.",
      "C": "Tham gia hoạt động quân sự tiến công độc lập.",
      "D": "Thực hiện chức năng quản lý hành chính nhà nước."
    },
    "correct": "B"
  },
  {
    "id": 459,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, chức năng của lực lượng Việt Nam tham gia hoạt động gìn giữ hòa bình được xác định chủ yếu là gì?",
    "options": {
      "A": "Bảo vệ lợi ích kinh tế.",
      "B": "Duy trì, bảo vệ hòa bình.",
      "C": "Thực hiện nhiệm vụ đối ngoại.",
      "D": "Hỗ trợ hoạt động nhân đạo."
    },
    "correct": "B"
  },
  {
    "id": 460,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình Liên hợp quốc, trong trường hợp cần thiết phải rút lực lượng về nước trước thời hạn, cơ sở xem xét chủ yếu là gì?",
    "options": {
      "A": "Điều kiện khí hậu tại địa bàn phái bộ.",
      "B": "Yêu cầu cá nhân của thành viên tham gia.",
      "C": "Tình hình nhiệm vụ, an ninh, an toàn hoặc yêu cầu cấp bách liên quan đến lợi ích quốc gia.",
      "D": "Đề nghị của nước sở tại."
    },
    "correct": "C"
  },
  {
    "id": 461,
    "q": "Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, hoạt động hợp tác quốc tế trong lĩnh vực gìn giữ hòa bình Liên hợp quốc nhằm mục đích gì?",
    "options": {
      "A": "Tăng cường năng lực tham gia hoạt động gìn giữ hòa bình Liên hợp quốc của Việt Nam.",
      "B": "Mở rộng hoạt động xuất khẩu quốc phòng.",
      "C": "Hình thành liên minh quân sự.",
      "D": "Tăng cường cạnh tranh quốc tế."
    },
    "correct": "A"
  },
  {
    "id": 462,
    "q": "Theo Luật Tham gia lực lượng gìn giữ hòa bình của Liên hợp quốc, một trong những hình thức hợp tác quốc tế về gìn giữ hòa bình là gì?",
    "options": {
      "A": "Đào tạo, tập huấn và trao đổi kinh nghiệm.",
      "B": "Chuyển giao quyền chỉ huy lực lượng.",
      "C": "Liên kết quân sự thường trực.",
      "D": "Thành lập lực lượng vũ trang chung."
    },
    "correct": "A"
  },
  {
    "id": 463,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan có thẩm quyền quyết định ban bố tình trạng khẩn cấp là ai?",
    "options": {
      "A": "Chính phủ.",
      "B": "Quốc hội.",
      "C": "Ủy ban Thường vụ Quốc hội.",
      "D": "Chủ tịch nước."
    },
    "correct": "C"
  },
  {
    "id": 464,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, chủ thể có thẩm quyền công bố tình trạng khẩn cấp căn cứ vào nghị quyết của Ủy ban Thường vụ Quốc hội là ai?",
    "options": {
      "A": "Thủ tướng Chính phủ.",
      "B": "Chủ tịch Quốc hội.",
      "C": "Bộ trưởng Bộ Quốc phòng.",
      "D": "Chủ tịch nước."
    },
    "correct": "D"
  },
  {
    "id": 465,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, thông tin về tình trạng khẩn cấp phải được thực hiện như thế nào?",
    "options": {
      "A": "Chỉ công bố trên Cổng thông tin Chính phủ.",
      "B": "Chỉ thông báo cho các cơ quan liên quan.",
      "C": "Thông báo ngay trên phương tiện thông tin đại chúng và niêm yết công khai tại địa bàn được đặt trong tình trạng khẩn cấp.",
      "D": "Chỉ công bố khi có yêu cầu."
    },
    "correct": "C"
  },
  {
    "id": 466,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, chủ thể có thẩm quyền quyết định áp dụng các biện pháp trong tình trạng khẩn cấp là gì?",
    "options": {
      "A": "Chủ tịch nước.",
      "B": "Bộ trưởng Bộ Quốc phòng.",
      "C": "Thủ tướng Chính phủ.",
      "D": "Chủ tịch UBND cấp tỉnh."
    },
    "correct": "C"
  },
  {
    "id": 467,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, Thủ tướng Chính phủ được ủy quyền cho Chủ tịch UBND cấp tỉnh áp dụng biện pháp trong trường hợp nào?",
    "options": {
      "A": "Tình trạng khẩn cấp về quốc phòng.",
      "B": "Tình trạng khẩn cấp về an ninh quốc gia.",
      "C": "Tình trạng khẩn cấp do thảm họa.",
      "D": "Mọi loại tình trạng khẩn cấp."
    },
    "correct": "C"
  },
  {
    "id": 468,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, đối tượng nào được ưu tiên trong cứu trợ, hỗ trợ khẩn cấp?",
    "options": {
      "A": "Người có thu nhập thấp",
      "B": "Người làm việc trong khu vực công, các đối tượng nhạy cảm dễ bị tổn thương.",
      "C": "Người có nguy cơ bị ảnh hưởng đến tính mạng, sức khỏe, đặc biệt là đối tượng dễ bị tổn thương",
      "D": "Người đang kinh doanh"
    },
    "correct": "C"
  },
  {
    "id": 469,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, cơ quan chỉ đạo, chỉ huy hoạt động trong tình trạng khẩn cấp về thảm họa là gì?",
    "options": {
      "A": "Ban Chỉ huy Tình trạng khẩn cấp về quốc phòng.",
      "B": "Ban Chỉ huy Bảo vệ an ninh quốc gia.",
      "C": "Ban Chỉ đạo Phòng thủ dân sự quốc gia và hệ thống Ban Chỉ huy Phòng thủ dân sự các cấp.",
      "D": "Chính quyền địa phương."
    },
    "correct": "C"
  },
  {
    "id": 470,
    "q": "Quan điểm nào sau đây được xác định trong quá trình xây dựng Luật Tình trạng khẩn cấp?",
    "options": {
      "A": "Thay thế toàn bộ quy định hiện hành.",
      "B": "Kế thừa những quy định đã được thực tiễn kiểm nghiệm.",
      "C": "Bãi bỏ các luật chuyên ngành liên quan.",
      "D": "Chỉ áp dụng kinh nghiệm nước ngoài."
    },
    "correct": "B"
  },
  {
    "id": 471,
    "q": "Trường hợp nào sau đây không thuộc các loại tình trạng khẩn cấp theo Luật Tình trạng khẩn cấp năm 2025?",
    "options": {
      "A": "Tình trạng khẩn cấp về quốc phòng.",
      "B": "Tình trạng khẩn cấp về tài chính.",
      "C": "Tình trạng khẩn cấp về thảm họa.",
      "D": "Tình trạng khẩn cấp về an ninh quốc gia, trật tự, an toàn xã hội."
    },
    "correct": "B"
  },
  {
    "id": 472,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, người ra quyết định ứng phó trong tình trạng khẩn cấp không phải chịu trách nhiệm khi nào?",
    "options": {
      "A": "Quyết định đúng thẩm quyền và không vụ lợi.",
      "B": "Có sự đồng ý của địa phương.",
      "C": "Được tập thể thống nhất.",
      "D": "Có văn bản báo cáo cấp trên."
    },
    "correct": "A"
  },
  {
    "id": 473,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, trong trường hợp cần thiết, Thủ tướng Chính phủ có thể ủy quyền cho Chủ tịch UBND cấp tỉnh quyết định áp dụng biện pháp như thế nào?",
    "options": {
      "A": "Tình trạng khẩn cấp về quốc phòng.",
      "B": "Tình trạng khẩn cấp về an ninh quốc gia.",
      "C": "Tình trạng khẩn cấp do thảm họa.",
      "D": "Mọi loại tình trạng khẩn cấp."
    },
    "correct": "C"
  },
  {
    "id": 474,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, đối tượng nào được ưu tiên trong hoạt động cứu trợ, hỗ trợ khẩn cấp?",
    "options": {
      "A": "Người có thu nhập thấp.",
      "B": "Người có công với cách mạng.",
      "C": "Đối tượng dễ bị tổn thương.",
      "D": "Người cư trú lâu năm."
    },
    "correct": "C"
  },
  {
    "id": 475,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, người được huy động làm nhiệm vụ trong tình trạng khẩn cấp được hưởng gì?",
    "options": {
      "A": "Chính sách đặc thù và chế độ theo quy định pháp luật.",
      "B": "Chế độ như người lao động thông thường.",
      "C": "Chỉ được hỗ trợ ăn ở.",
      "D": "Chỉ được thanh toán chi phí đi lại."
    },
    "correct": "A"
  },
  {
    "id": 475,
    "q": "Theo Luật Tình trạng khẩn cấp năm 2025, Ban Chỉ đạo Phòng thủ dân sự quốc gia chỉ đạo, chỉ huy hoạt động trong tình trạng nào?",
    "options": {
      "A": "Tình trạng khẩn cấp về quốc phòng",
      "B": "Tình trạng khẩn cấp về thảm họa",
      "C": "Tình trạng khẩn cấp về tài chính",
      "D": "Tình trạng khẩn cấp về ngoại giao"
    },
    "correct": "B"
  },
  {
    "id": 476,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, công trình nào được xác định là trung tâm của Khu Di tích Lăng Chủ tịch Hồ Chí Minh?",
    "options": {
      "A": "Khu K9.",
      "B": "Quảng trường Ba Đình.",
      "C": "Đài tưởng niệm các Anh hùng liệt sĩ.",
      "D": "Lăng Chủ tịch Hồ Chí Minh."
    },
    "correct": "D"
  },
  {
    "id": 477,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, Khu Di tích Lăng Chủ tịch Hồ Chí Minh có ý nghĩa đặc biệt trên những lĩnh vực nào?",
    "options": {
      "A": "Kinh tế - thương mại.",
      "B": "Chính trị - lịch sử - văn hóa.",
      "C": "Du lịch - dịch vụ.",
      "D": "Tài chính - ngân hàng."
    },
    "correct": "B"
  },
  {
    "id": 478,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, quản lý, bảo vệ Khu Di tích Lăng phải gắn với nội dung nào?",
    "options": {
      "A": "Phát triển du lịch quốc tế.",
      "B": "Phát huy ý nghĩa chính trị, văn hóa của Khu Di tích Lăng.",
      "C": "Hoạt động thương mại.",
      "D": "Tăng thu ngân sách."
    },
    "correct": "B"
  },
  {
    "id": 479,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nội dung giữ gìn lâu dài, bảo vệ tuyệt đối an toàn thi hài Chủ tịch Hồ Chí Minh bao gồm?",
    "options": {
      "A": "Hoạt động y tế - kỹ thuật.",
      "B": "Hoạt động thương mại.",
      "C": "Hoạt động đầu tư nước ngoài.",
      "D": "Hoạt động sản xuất."
    },
    "correct": "A"
  },
  {
    "id": 480,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, cơ quan nào quyết định thành lập Hội đồng khoa học cấp Nhà nước về bảo quản thi hài Chủ tịch Hồ Chí Minh?",
    "options": {
      "A": "Chủ tịch nước.",
      "B": "Bộ trưởng Bộ Quốc phòng.",
      "C": "Thủ tướng Chính phủ.",
      "D": "Quốc hội."
    },
    "correct": "C"
  },
  {
    "id": 481,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, Ban Quản lý Lăng có thẩm quyền gì?",
    "options": {
      "A": "Ban hành luật.",
      "B": "Ban hành các quy trình nội bộ về giữ gìn thi hài Chủ tịch Hồ Chí Minh.",
      "C": "Ban hành pháp lệnh.",
      "D": "Ban hành nghị quyết."
    },
    "correct": "B"
  },
  {
    "id": 482,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, mục tiêu bảo vệ trong Khu Di tích Lăng bao gồm?",
    "options": {
      "A": "Chỉ công trình Lăng.",
      "B": "Chỉ Quảng trường Ba Đình.",
      "C": "Các công trình, khu vực và hoạt động chính trị, văn hóa.",
      "D": "Chỉ Đài tưởng niệm."
    },
    "correct": "C"
  },
  {
    "id": 483,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, lực lượng trực tiếp quản lý, bảo vệ Khu Di tích Lăng thuộc ai?",
    "options": {
      "A": "Bộ Tư lệnh Lăng Chủ tịch Hồ Chí Minh.",
      "B": "UBND thành phố Hà Nội.",
      "C": "Bộ Văn hóa, Thể thao và Du lịch.",
      "D": "Văn phòng Chính phủ."
    },
    "correct": "A"
  },
  {
    "id": 484,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, chức năng, nhiệm vụ của lực lượng quản lý, bảo vệ Khu Di tích Lăng do ai quy định?",
    "options": {
      "A": "Chính phủ.",
      "B": "Chủ tịch nước.",
      "C": "Bộ trưởng Bộ Quốc phòng.",
      "D": "Quốc hội."
    },
    "correct": "C"
  },
  {
    "id": 485,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, ngân sách nhà nước bảo đảm cho nhiệm vụ quản lý, bảo vệ Khu Di tích Lăng được bố trí như thế nào?",
    "options": {
      "A": "Theo pháp luật về ngân sách nhà nước.",
      "B": "Theo quy chế nội bộ.",
      "C": "Theo Luật Đầu tư nước ngoài.",
      "D": "Theo Điều lệ doanh nghiệp."
    },
    "correct": "A"
  },
  {
    "id": 486,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, quân nhân làm nhiệm vụ quản lý, bảo vệ Khu Di tích Lăng được hưởng gì?",
    "options": {
      "A": "Chế độ như quân nhân và các chế độ đặc thù phù hợp nhiệm vụ.",
      "B": "Chỉ lương cơ bản.",
      "C": "Chỉ phụ cấp trách nhiệm.",
      "D": "Không có chế độ riêng."
    },
    "correct": "A"
  },
  {
    "id": 487,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, công chức, viên chức thuộc Ban Quản lý Lăng được hưởng gì?",
    "options": {
      "A": "Phụ cấp phục vụ quốc phòng, an ninh.",
      "B": "Trợ cấp thất nghiệp thường xuyên.",
      "C": "Phụ cấp độc hại ngành công nghiệp.",
      "D": "Phụ cấp hàng hải."
    },
    "correct": "A"
  },
  {
    "id": 488,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một chính sách quan trọng đối với nguồn nhân lực là gì?",
    "options": {
      "A": "Giảm tuyển dụng nhân lực chất lượng cao.",
      "B": "Ưu tiên thu hút người có tài năng và nhà khoa học chuyên môn sâu.",
      "C": "Hạn chế đào tạo.",
      "D": "Chỉ tuyển dụng theo thời vụ."
    },
    "correct": "B"
  },
  {
    "id": 489,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những hoạt động chính trị tại Khu Di tích Lăng là gì?",
    "options": {
      "A": "Lễ viếng Chủ tịch Hồ Chí Minh.",
      "B": "Hội chợ thương mại.",
      "C": "Đấu giá tài sản.",
      "D": "Triển lãm kinh doanh."
    },
    "correct": "A"
  },
  {
    "id": 490,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, nhà nước ưu tiên đẩy mạnh nội dung nào trong quản lý, bảo vệ Khu Di tích Lăng?",
    "options": {
      "A": "Nghiên cứu, ứng dụng khoa học công nghệ hiện đại.",
      "B": "Hoạt động xuất khẩu.",
      "C": "Kinh doanh dịch vụ.",
      "D": "Liên doanh thương mại."
    },
    "correct": "A"
  },
  {
    "id": 491,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, việc quản lý, bảo vệ Khu Di tích Lăng phải gắn với gì?",
    "options": {
      "A": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
      "B": "Hoạt động kinh doanh.",
      "C": "Phát triển du lịch đại trà.",
      "D": "Thương mại hóa di tích."
    },
    "correct": "A"
  },
  {
    "id": 492,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những trách nhiệm của cấp ủy các cấp là gì?",
    "options": {
      "A": "Đưa nội dung Pháp lệnh vào nghị quyết lãnh đạo.",
      "B": "Ban hành pháp lệnh mới.",
      "C": "Quy định chế độ tiền lương.",
      "D": "Xây dựng luật."
    },
    "correct": "A"
  },
  {
    "id": 493,
    "q": "Ý nghĩa quan trọng của việc triển khai Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh là gì?",
    "options": {
      "A": "Tăng nguồn thu ngân sách",
      "B": "Bảo vệ tuyệt đối an toàn thi hài Chủ tịch Hồ Chí Minh và phát huy giá trị chính trị, lịch sử, văn hóa của Khu Di tích Lăng",
      "C": "Mở rộng hoạt động thương mại",
      "D": "Phát triển du lịch đại trà"
    },
    "correct": "B"
  },
  {
    "id": 494,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, công trình nào được xác định là trung tâm của Khu Di tích Lăng Chủ tịch Hồ Chí Minh?",
    "options": {
      "A": "Khu K9 Đá Chông.",
      "B": "Quảng trường Ba Đình..",
      "C": "Lăng Chủ tịch Hồ Chí Minh",
      "D": "Đài tưởng niệm các Anh hùng liệt sĩ."
    },
    "correct": "C"
  },
  {
    "id": 495,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, Khu Di tích Lăng Chủ tịch Hồ Chí Minh có ý nghĩa nổi bật nào dưới đây?",
    "options": {
      "A": "Chỉ mang giá trị kiến trúc, du lịch.",
      "B": "Chỉ phục vụ nghiên cứu khoa học.",
      "C": "Có giá trị đặc biệt về chính trị, lịch sử, văn hóa và quốc phòng - an ninh.",
      "D": "Chỉ phục vụ các hoạt động đối ngoại."
    },
    "correct": "C"
  },
  {
    "id": 496,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những nội dung quản lý, bảo vệ Khu Di tích Lăng là gì?",
    "options": {
      "A": "Quản lý hoạt động kinh doanh dịch vụ du lịch.",
      "B": "Quản lý, tổ chức các hoạt động chính trị, văn hóa trong Khu Di tích Lăng.",
      "C": "Quản lý hoạt động báo chí trên địa bàn Hà Nội.",
      "D": "Quản lý các khu vui chơi công cộng."
    },
    "correct": "B"
  },
  {
    "id": 497,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, một trong những yêu cầu đối với việc quản lý các công trình thuộc Khu Di tích Lăng là gì?",
    "options": {
      "A": "Chỉ chú trọng khai thác du lịch.",
      "B": "Duy trì không gian, cảnh quan, kiến trúc và bảo vệ môi trường.",
      "C": "Chỉ thực hiện bảo trì khi có hư hỏng lớn.",
      "D": "Chuyển đổi công năng khi cần thiết."
    },
    "correct": "B"
  },
  {
    "id": 498,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, việc tổ chức các hoạt động tại Khu Di tích Lăng phải bảo đảm yêu cầu nào?",
    "options": {
      "A": "Ưu tiên hoạt động thương mại.",
      "B": "Kết hợp chặt chẽ giữa nhiệm vụ chính trị với bảo đảm an ninh, an toàn.",
      "C": "Chỉ phục vụ các đoàn khách quốc tế.",
      "D": "Chỉ phục vụ các cơ quan Trung ương."
    },
    "correct": "B"
  },
  {
    "id": 499,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, ý nghĩa quan trọng của Khu Di tích Lăng Chủ tịch Hồ Chí Minh đối với các thế hệ người Việt Nam là gì?",
    "options": {
      "A": "Nơi tổ chức các hoạt động vui chơi cộng đồng.",
      "B": "Biểu tượng của di sản tư tưởng, đạo đức, phong cách Hồ Chí Minh; giáo dục truyền thống cách mạng.",
      "C": "Trung tâm thương mại - dịch vụ của Thủ đô.",
      "D": "Địa điểm nghiên cứu khoa học chuyên ngành."
    },
    "correct": "B"
  },
  {
    "id": 500,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, các công trình lưu giữ lâu dài thi hài Chủ tịch Hồ Chí Minh (trong đó có công trình Lăng) được xếp thuộc các công trình quốc phòng và khu quân sự Nhóm mấy?",
    "options": {
      "A": "Nhóm II.",
      "B": "Nhóm III.",
      "C": "Nhóm I.",
      "D": "Tất cả đáp án đều sai."
    },
    "correct": "C"
  },
  {
    "id": 501,
    "q": "Phương án nào phản ánh đúng nhất về Khi Di tích Lăng theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh?",
    "options": {
      "A": "Chỉ gồm các công trình đã được công nhận di tích.",
      "B": "Chỉ gồm các công trình thuộc khu trung tâm Ba Đình.",
      "C": "Gồm các công trình, khu vực có tính chất đặc biệt.",
      "D": "Chỉ gồm Lăng và Quảng trường Ba Đình."
    },
    "correct": "C"
  },
  {
    "id": 502,
    "q": "Theo Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh, điểm nào sau đây không phải là một nội dung thuộc bảo vệ an ninh, an toàn Khu Di tích Lăng?",
    "options": {
      "A": "Xác định phạm vi bảo vệ.",
      "B": "Xác định hình thức bảo vệ.",
      "C": "Xác định nguồn kinh phí.",
      "D": "Bảo đảm an ninh cho hoạt động."
    },
    "correct": "C"
  },
  {
    "id": 503,
    "q": "Một nội dung quan trọng được Pháp lệnh quản lý, bảo vệ khu di tích Lăng Chủ tịch Hồ Chí Minh thể chế hóa nhưng trước đó chủ yếu được thực hiện trên cơ sở các văn bản hành chính là?",
    "options": {
      "A": "Công tác nghiên cứu khoa học.",
      "B": "Công tác tuyển chọn nhân lực.",
      "C": "Một số nội dung nghi lễ.",
      "D": "Công tác bảo đảm ngân sách."
    },
    "correct": "C"
  },
  {
    "id": 504,
    "q": "Luật Thanh tra (sửa đổi) năm 2025 đã kết thúc hoạt động của những cơ quan thanh tra nào ở các Bộ, cơ quan thuộc Chính phủ và địa phương?",
    "options": {
      "A": "Kết thúc hoạt động của Thanh tra Bộ, Thanh tra Tổng cục, Cục thuộc Bộ, Thanh tra sở và Thanh tra huyện.",
      "B": "Kết thúc hoạt động của Thanh tra Chính phủ, Thanh tra Bộ Công an, Thanh tra Bộ Quốc phòng, Thanh tra tỉnh.",
      "C": "Kết thúc hoạt động của Thanh tra Ngân hàng Nhà nước, Thanh tra Cơ yếu và các cơ quan Thanh tra quân khu.",
      "D": "Kết thúc hoạt động của Thanh tra Chính phủ và toàn bộ hệ thống cơ quan Thanh tra tỉnh trên cả nước."
    },
    "correct": "A"
  },
  {
    "id": 505,
    "q": "Sự thay đổi quan trọng nào về mặt khái niệm đã được thực hiện trong Luật Thanh tra năm 2025 (sửa đổi)?",
    "options": {
      "A": "Sửa đổi khái niệm “thanh tra”, không quy định riêng các khái niệm thanh tra hành chính, thanh tra chuyên ngành.",
      "B": "Giữ nguyên khái niệm “thanh tra” cũ và mở rộng thêm các loại hình thanh tra tư nhân, thanh tra độc lập.",
      "C": "Bỏ hoàn toàn khái niệm “thanh tra” và thay thế bằng khái niệm “kiểm tra nhà nước” trong toàn bộ văn bản.",
      "D": "Quy định rõ ràng phân loại 05 khái niệm thanh tra riêng biệt cho từng cấp quản lý hành chính nhà nước."
    },
    "correct": "A"
  },
  {
    "id": 506,
    "q": "Theo khoản 1 Điều 2 Luật Thanh tra năm 2025 (sửa đổi), khái niệm “Thanh tra” được định nghĩa chuẩn xác như thế nào?",
    "options": {
      "A": "Là hoạt động xem xét, đánh giá, kết luận, kiến nghị xử lý đối với việc thực hiện chính sách, pháp luật, nhiệm vụ.",
      "B": "Là hoạt động kiểm tra, xử phạt, thu hồi tài sản vi phạm đối với mọi cá nhân, tổ chức trên lãnh thổ Việt Nam.",
      "C": "Là hoạt động điều tra, truy tố, xét xử các hành vi vi phạm pháp luật hành chính và hình sự của đối tượng.",
      "D": "Là hoạt động giám sát, đôn đốc, hướng dẫn các cơ quan nhà nước thực hiện đúng chức năng, nhiệm vụ được giao."
    },
    "correct": "A"
  },
  {
    "id": 507,
    "q": "Theo Điều 7 Luật Thanh tra năm 2025 (sửa đổi), hệ thống các cơ quan thanh tra bao gồm những cơ quan nào?",
    "options": {
      "A": "Thanh tra Chính phủ; Thanh tra tỉnh; Thanh tra Quân đội, Công an, Ngân hàng Nhà nước, Cơ yếu; Điều ước quốc tế.",
      "B": "Thanh tra Chính phủ; Thanh tra các Bộ; Thanh tra các Tổng cục; Thanh tra các Sở và Thanh tra các Huyện.",
      "C": "Thanh tra Chính phủ; Thanh tra các Bộ; Thanh tra tỉnh; Thanh tra Huyện và các Ban Thanh tra nhân dân.",
      "D": "Thanh tra Chính phủ; Thanh tra Ủy ban Thường vụ Quốc hội; Thanh tra Tòa án nhân dân; Thanh tra Kiểm toán."
    },
    "correct": "A"
  },
  {
    "id": 508,
    "q": "Nghị định số 216/2025/NĐ-CP được Chính phủ ban hành ngày 05/8/2025 quy định về nội dung cơ bản nào?",
    "options": {
      "A": "Quy định chi tiết một số điều và hướng dẫn thi hành Luật Thanh tra nhằm triển khai đồng bộ Luật Thanh tra.",
      "B": "Quy định về tổ chức và hoạt động của Thanh tra quốc phòng trong Quân đội nhân dân Việt Nam hiện nay.",
      "C": "Quy định về tổ chức và hoạt động thanh tra Công an nhân dân trong lực lượng Công an nhân dân hiện nay.",
      "D": "Quy định về xử phạt vi phạm hành chính trong lĩnh vực thanh tra, giải quyết khiếu nại, tố cáo toàn quốc."
    },
    "correct": "A"
  },
  {
    "id": 509,
    "q": "Nghị định số 217/2025/NĐ-CP được Chính phủ ban hành ngày 05/8/2025 quy định về vấn đề gì?",
    "options": {
      "A": "Quy định chi tiết về hoạt động kiểm tra chuyên ngành áp dụng thống nhất trong cơ quan hành chính nhà nước.",
      "B": "Quy định về việc trích lập, quản lý và sử dụng nguồn kinh phí từ các khoản thu hồi qua công tác thanh tra.",
      "C": "Quy định chế độ, chính sách, trang phục, thẻ thanh tra đối với cán bộ, công chức làm công tác thanh tra.",
      "D": "Quy định việc ứng dụng công nghệ thông tin, công nghệ số và sổ nhật ký điện tử trong Đoàn thanh tra."
    },
    "correct": "A"
  },
  {
    "id": 510,
    "q": "Nghị định số 284/2025/NĐ-CP do Chính phủ ban hành ngày 03/11/2025 quy định về tổ chức và hoạt động của cơ quan nào?",
    "options": {
      "A": "Quy định về tổ chức và hoạt động của Thanh tra quốc phòng, thay thế cho Nghị định số 33/2014/NĐ-CP trước đây.",
      "B": "Quy định về tổ chức và hoạt động của Thanh tra ngành Ngân hàng Nhà nước Việt Nam trong thời kỳ mới.",
      "C": "Quy định về tổ chức và hoạt động của Thanh tra Cơ yếu thuộc Ban Cơ yếu Chính phủ theo Luật Thanh tra mới.",
      "D": "Quy định về tổ chức và hoạt động của Thanh tra theo điều ước quốc tế mà Việt Nam là quốc gia thành viên."
    },
    "correct": "A"
  },
  {
    "id": 511,
    "q": "Nghị định số 273/2025/NĐ-CP do Chính phủ ban hành ngày 16/10/2025 quy định về nội dung nào?",
    "options": {
      "A": "Quy định về tổ chức và hoạt động thanh tra Công an nhân dân triển khai thi hành Luật Thanh tra năm 2025.",
      "B": "Quy định về việc phòng, chống lãng phí, tiêu cực trong các cơ quan điều tra thuộc lực lượng Công an nhân dân.",
      "C": "Quy định quy trình giải quyết khiếu nại, tố cáo và tiếp công dân trong lực lượng Công an nhân dân hiện nay.",
      "D": "Quy định tiêu chuẩn bổ nhiệm, miễn nhiệm cán bộ làm công tác kiểm tra, giám sát trong Công an nhân dân."
    },
    "correct": "A"
  },
  {
    "id": 512,
    "q": "Theo Nghị định số 284/2025/NĐ-CP, cơ quan Thanh tra quốc phòng bao gồm những cấp tổ chức nào?",
    "options": {
      "A": "Cơ quan Thanh tra Bộ Quốc phòng; Thanh tra quốc phòng Quân khu; Thanh tra Bộ Tư lệnh Thủ đô Hà Nội.",
      "B": "Cơ quan Thanh tra Bộ Quốc phòng; Thanh tra các Sư đoàn; Thanh tra các Trung đoàn và Thanh tra Ban CHQS cấp huyện.",
      "C": "Cơ quan Thanh tra Bộ Quốc phòng; Thanh tra các Quân đoàn; Thanh tra các Binh chủng và Thanh tra Học viện.",
      "D": "Cơ quan Thanh tra Bộ Quốc phòng; Thanh tra Bộ Tổng Tham mưu; Thanh tra Tổng cục Chính trị và các Tổng cục."
    },
    "correct": "A"
  },
  {
    "id": 513,
    "q": "Theo Điều 3 Nghị định số 284/2025/NĐ-CP, Thanh tra quốc phòng có chức năng cơ bản nào sau đây?",
    "options": {
      "A": "Giúp Thủ trưởng cơ quan cùng cấp quản lý nhà nước về thanh tra, tiếp công dân, giải quyết KNTC, phòng chống TNC.",
      "B": "Thực hiện nhiệm vụ điều tra các vụ án hình sự nguy hiểm phát sinh trong và ngoài lực lượng Quân đội nhân dân.",
      "C": "Trực tiếp chỉ đạo công tác tác chiến, huấn luyện sẵn sàng chiến đấu đối với các đơn vị lực lượng vũ trang.",
      "D": "Thẩm định, phê duyệt ngân sách quốc phòng và quyết toán thu chi tài chính hàng năm của các quân khu."
    },
    "correct": "A"
  },
  {
    "id": 514,
    "q": "Chánh Thanh tra Quân khu có quyền hạn nào sau đây khi phát hiện việc thi hành kỷ luật gây trở ngại cho việc thanh tra?",
    "options": {
      "A": "Kiến nghị cấp có thẩm quyền quyết định đình chỉ thi hành kỷ luật, điều chuyển công tác người đang bị thanh tra.",
      "B": "Trực tiếp ra quyết định tước danh hiệu quân nhân đối với người chỉ hữu ra quyết định thi hành kỷ luật đó.",
      "C": "Tạm giữ hình sự người chỉ huy cơ quan, đơn vị có hành vi gây trở ngại cho hoạt động của Đoàn thanh tra.",
      "D": "Yêu cầu Viện kiểm sát quân sự Quân khu khởi tố vụ án hình sự về hành vi cản trở hoạt động thanh tra."
    },
    "correct": "A"
  },
  {
    "id": 515,
    "q": "Theo Điều 13 Nghị định số 284/2025/NĐ-CP, Thanh tra viên quốc phòng là ai?",
    "options": {
      "A": "Là sĩ quan Quân đội nhân dân Việt Nam được bổ nhiệm vào các ngạch Thanh tra để thực hiện nhiệm vụ thanh tra.",
      "B": "Là quân nhân chuyên nghiệp, công nhân và viên chức quốc phòng làm việc tại các cơ quan thanh tra quân đội.",
      "C": "Là công chức, viên chức thuộc Thanh tra Chính phủ được biệt phái sang công tác tại Bộ Quốc phòng.",
      "D": "Là cán bộ làm công tác kiểm tra Đảng thuộc Ủy ban Kiểm tra Quân ủy Trung ương được giao nhiệm vụ thanh tra."
    },
    "correct": "A"
  },
  {
    "id": 516,
    "q": "Tiêu chuẩn về trình độ đào tạo quân sự đặc thù dành riêng cho ngạch Thanh tra viên cao cấp quốc phòng là gì?",
    "options": {
      "A": "Tốt nghiệp đào tạo tham mưu tác chiến chiến dịch - chiến lược tại Học viện Quốc phòng.",
      "B": "Tốt nghiệp đào tạo cán bộ cấp trung, lữ đoàn tại các học viện chuyên ngành quân sự, quốc phòng.",
      "C": "Tốt nghiệp đại học quân sự nước ngoài được Bộ Giáo dục và Đào tạo công nhận văn bằng tương đương.",
      "D": "Có trình độ tiến sĩ chuyên ngành Khoa học quân sự hoặc Quản lý nhà nước về an ninh quốc phòng."
    },
    "correct": "A"
  },
  {
    "id": 517,
    "q": "Yêu cầu về lý luận chính trị đối với sĩ quan để xem xét bổ nhiệm ngạch Thanh tra viên cao cấp quốc phòng là gì?",
    "options": {
      "A": "Phải có trình độ cao cấp lý luận chính trị theo quy định của Đảng và Pháp luật nhà nước.",
      "B": "Chỉ cần có trình độ trung cấp lý luận chính trị do các học viện quân sự cấp chứng chỉ hoàn thành.",
      "C": "Chỉ cần hoàn thành chương trình sơ cấp lý luận chính trị tại các trung tâm bồi dưỡng chính trị.",
      "D": "Không bắt buộc quy định về tiêu chuẩn lý luận chính trị nếu đã có bằng tiến sĩ chuyên ngành."
    },
    "correct": "A"
  },
  {
    "id": 518,
    "q": "Cấp ủy, chỉ huy cơ quan, đơn vị có trách nhiệm gì trong việc lãnh đạo, chỉ đạo triển khai Luật Thanh tra năm 2025?",
    "options": {
      "A": "Đưa nội dung chấp hành Luật Thanh tra vào kế hoạch công tác hằng năm, gắn với xây dựng Đảng, đơn vị VMTD.",
      "B": "Ủy quyền toàn bộ việc chỉ đạo thực hiện Luật Thanh tra cho cán bộ phụ trách pháp chế của cơ quan tự quyết.",
      "C": "Chỉ triển khai thực hiện Luật Thanh tra khi có quyết định thanh tra đột xuất của cơ quan thanh tra cấp trên.",
      "D": "Chỉ thực hiện công tác phổ biến Luật Thanh tra đối với lực lượng sĩ quan cấp tá và chỉ huy chủ chốt."
    },
    "correct": "A"
  },
  {
    "id": 519,
    "q": "Trong công tác phối hợp thanh tra, trách nhiệm của cấp ủy, chỉ huy cơ quan, đơn vị được quy định như thế nào?",
    "options": {
      "A": "Phối hợp, cung cấp đầy đủ, kịp thời, trung thực thông tin, tài liệu và chịu trách nhiệm về tính chính xác.",
      "B": "Có quyền từ chối cung cấp các tài liệu nội bộ nếu thấy ảnh hưởng đến thành tích thi đua của đơn vị.",
      "C": "Chỉ cung cấp tài liệu cho Đoàn thanh tra khi có sự đồng ý bằng văn bản của cơ quan điều tra hình sự.",
      "D": "Được phép chủ động chỉnh sửa thông tin số liệu trước khi bàn giao tài liệu cho Đoàn thanh tra xác minh."
    },
    "correct": "A"
  },
  {
    "id": 520,
    "q": "Phương châm của Đại hội XIV của Đảng được xác định là gì?",
    "options": {
      "A": "Đoàn kết – Kỷ cương – Phát triển – Hội nhập",
      "B": "Đoàn kết – Dân chủ – Kỷ cương – Đột phá – Phát triển",
      "C": "Dân chủ – Kỷ luật – Đổi mới – Phát triển",
      "D": "Đoàn kết – Đổi mới – Hội nhập – Bền vững"
    },
    "correct": "B"
  },
  {
    "id": 521,
    "q": "Đại hội XIV của Đảng xác định mục tiêu phát triển đến năm 2030 của Việt Nam là gì?",
    "options": {
      "A": "Nước phát triển, thu nhập cao",
      "B": "Nước công nghiệp theo hướng hiện đại",
      "C": "Nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao",
      "D": "Trung tâm kinh tế số của khu vực"
    },
    "correct": "C"
  },
  {
    "id": 522,
    "q": "Tầm nhìn đến năm 2045 được Nghị quyết Đại hội XIV xác định là gì?",
    "options": {
      "A": "Trở thành nước công nghiệp hiện đại",
      "B": "Trở thành nước phát triển, thu nhập cao",
      "C": "Trở thành trung tâm đổi mới sáng tạo châu Á",
      "D": "Trở thành quốc gia kinh tế số hàng đầu"
    },
    "correct": "B"
  },
  {
    "id": 523,
    "q": "Đại hội XIV của Đảng xác định chỉ tiêu tăng trưởng GDP bình quân giai đoạn 2026–2030?",
    "options": {
      "A": "7–8%/năm",
      "B": "8–9%/năm",
      "C": "Từ 9%/năm trở lên",
      "D": "Từ 10%/năm trở lên"
    },
    "correct": "D"
  },
  {
    "id": 524,
    "q": "Đại hội XIV của Đảng xác định một trong các ngành công nghiệp, công nghệ chiến lược được ưu tiên phát triển là gì?",
    "options": {
      "A": "Công nghiệp khai khoáng",
      "B": "Công nghiệp dệt may",
      "C": "Chip bán dẫn và trí tuệ nhân tạo",
      "D": "Công nghiệp chế biến nông sản"
    },
    "correct": "C"
  },
  {
    "id": 525,
    "q": "Một trong ba đột phá chiến lược được Đại hội XIV của Đảng xác định là gì?",
    "options": {
      "A": "Đột phá về ngoại giao",
      "B": "Đột phá về phân phối thu nhập",
      "C": "Đột phá mạnh mẽ về thể chế phát triển",
      "D": "Đột phá về dân số"
    },
    "correct": "C"
  },
  {
    "id": 525,
    "q": "Nghị quyết Đại hội XIV định hướng việc phát triển văn hóa, con người Việt Nam như thế nào?",
    "options": {
      "A": "Văn hóa là sức mạnh nội sinh, động lực mạnh mẽ để phát triển đất nước.",
      "B": "Văn hóa là lĩnh vực giải trí nhằm nâng cao đời sống tinh thần cho nhân dân.",
      "C": "Văn hóa là phương tiện để giới thiệu hình ảnh đất nước với khách quốc tế.",
      "D": "Văn hóa là nền tảng để thu hút các nguồn vốn đầu tư từ nước ngoài về."
    },
    "correct": "A"
  },
  {
    "id": 526,
    "q": "Về nhiệm vụ bảo vệ Tổ quốc, Nghị quyết Đại hội XIV xác định phương châm cốt lõi là gì?",
    "options": {
      "A": "Sẵn sàng chiến đấu để đánh thắng mọi kẻ thù khi chúng xâm phạm lãnh thổ.",
      "B": "Xây dựng quân đội hiện đại để đủ sức cạnh tranh với các nước trong khu vực.",
      "C": "Bảo vệ Tổ quốc từ sớm, từ xa, giữ vững môi trường hòa bình để phát triển.",
      "D": "Tập trung vào việc phát triển vũ khí hạt nhân để tăng cường sức mạnh quân sự."
    },
    "correct": "C"
  },
  {
    "id": 527,
    "q": "“Chuyển đổi xanh” trong định hướng phát triển kinh tế của Đại hội XIV của Đảng bao hàm ý nghĩa gì?",
    "options": {
      "A": "Việc phủ xanh đất trống đồi trọc tại các tỉnh miền núi và vùng sâu vùng xa.",
      "B": "Việc sử dụng màu xanh làm màu chủ đạo cho các dự án xây dựng đô thị mới.",
      "C": "Phát triển kinh tế gắn với bảo vệ môi trường và sử dụng năng lượng sạch.",
      "D": "Ưu tiên phát triển các ngành nông nghiệp truyền thống của người dân địa phương."
    },
    "correct": "C"
  },
  {
    "id": 528,
    "q": "Đại hội XIV của Đảng, một trong những “nút thắt” lớn nhất cần tháo gỡ để phát triển đất nước hiện nay là gì?",
    "options": {
      "A": "Sự thiếu hụt về nguồn vốn đầu tư từ các ngân hàng thương mại nhà nước.",
      "B": "Hệ thống hạ tầng giao thông kết nối giữa các vùng miền còn chưa đồng bộ.",
      "C": "Những điểm nghẽn về thể chế, chính sách chưa bắt kịp yêu cầu thực tiễn.",
      "D": "Nguồn tài nguyên khoáng sản đang ngày càng bị cạn kiệt do khai thác quá mức."
    },
    "correct": "C"
  },
  {
    "id": 529,
    "q": "Tinh thần khởi nghiệp trong học sinh, sinh viên được Nghị quyết Đại hội XIV khuyến khích như thế nào?",
    "options": {
      "A": "Tập trung vào việc mua bán hàng hóa online để kiếm thêm thu nhập cá nhân.",
      "B": "Khuyến khích học sinh sớm nghỉ học để tham gia vào thị trường lao động.",
      "C": "Thúc đẩy tư duy sáng tạo, khởi nghiệp dựa trên nền tảng công nghệ số.",
      "D": "Chỉ thực hiện khởi nghiệp khi đã có đầy đủ nguồn vốn từ phía gia đình cấp."
    },
    "correct": "C"
  },
  {
    "id": 530,
    "q": "Để xây dựng “thế trận lòng dân” vững chắc, Nghị quyết Đại hội XIV nhấn mạnh nội dung nào?",
    "options": {
      "A": "Thực hiện tốt dân chủ, bảo đảm quyền làm chủ thực chất của nhân dân.",
      "B": "Tăng cường việc tuyên truyền các văn bản pháp luật đến tận từng hộ gia đình.",
      "C": "Xây dựng thêm nhiều công trình công cộng phục vụ lợi ích của cộng đồng.",
      "D": "Tổ chức các cuộc thi tìm hiểu về lịch sử Đảng cho mọi tầng lớp nhân dân."
    },
    "correct": "A"
  },
  {
    "id": 531,
    "q": "Hệ thống chính trị nhiệm kỳ XIV của Đảng hướng tới mô hình tổ chức như thế nào?",
    "options": {
      "A": "Mở rộng thêm nhiều cơ quan chuyên trách để quản lý sâu sát từng lĩnh vực.",
      "B": "Giữ nguyên mô hình cũ để đảm bảo tính ổn định và liên tục của chính sách.",
      "C": "Tinh gọn, thông suốt, hoạt động hiệu lực, hiệu quả, vì nhân dân phục vụ.",
      "D": "Tập trung quyền lực tuyệt đối vào người đứng đầu các cơ quan hành chính."
    },
    "correct": "C"
  },
  {
    "id": 532,
    "q": "Tại sao Đại hội XIV của Đảng coi chuyển đổi số là một “cuộc cách mạng” thực sự?",
    "options": {
      "A": "Vì nó thay đổi hoàn toàn phương thức sản xuất và đời sống xã hội.",
      "B": "Vì nó giúp tiết kiệm được một lượng lớn giấy tờ trong các văn phòng.",
      "C": "Vì nó yêu cầu mọi người dân phải có một chiếc điện thoại thông minh.",
      "D": "Vì nó là nhiệm vụ bắt buộc của các quốc gia đang phát triển hiện nay."
    },
    "correct": "A"
  },
  {
    "id": 533,
    "q": "Điểm mới về mô hình tăng trưởng kinh tế trong Nghị quyết Đại hội XIV là gì?",
    "options": {
      "A": "Tăng trưởng dựa trên việc mở rộng tối đa diện tích canh tác nông nghiệp.",
      "B": "Tăng trưởng dựa trên việc gia tăng số lượng công nhân lao động phổ thông.",
      "C": "Tăng trưởng dựa trên năng suất, chất lượng và đổi mới sáng tạo số.",
      "D": "Tăng trưởng dựa trên việc vay vốn ưu đãi từ các định chế tài chính quốc tế."
    },
    "correct": "C"
  },
  {
    "id": 534,
    "q": "Đại hội XIV của Đảng, xác định trong kỷ nguyên vươn mình, nhiệm vụ nào được coi là “then chốt” của xây dựng Đảng?",
    "options": {
      "A": "Công tác cán bộ, xây dựng đội ngũ đủ phẩm chất, năng lực và uy tín.",
      "B": "Việc phát triển thêm số lượng đảng viên mới trong các doanh nghiệp tư nhân.",
      "C": "Việc tổ chức các lớp học tập nghị quyết định kỳ hàng năm cho đảng viên.",
      "D": "Việc hiện đại hóa các phòng họp và trang thiết bị làm việc của cấp ủy."
    },
    "correct": "A"
  },
  {
    "id": 535,
    "q": "Đối với lĩnh vực giáo dục phổ thông, Đại hội XIV của Đảng nhấn mạnh hướng đi nào?",
    "options": {
      "A": "Tập trung vào việc nhồi nhét kiến thức để đạt giải cao trong các kỳ thi quốc tế.",
      "B": "Đổi mới căn bản, toàn diện, chú trọng phát triển kỹ năng và tư duy sáng tạo.",
      "C": "Tăng số lượng giờ học lý thuyết để học sinh nắm vững các kiến thức cơ bản.",
      "D": "Chỉ tập trung đào tạo những môn học liên quan trực tiếp đến khoa học tự nhiên."
    },
    "correct": "B"
  },
  {
    "id": 536,
    "q": "Đại hội XIV của Đảng, quốc phòng, an ninh trong kỷ nguyên mới được gắn kết chặt chẽ với yếu tố nào?",
    "options": {
      "A": "Gắn kết chặt chẽ, hài hòa giữa phát triển kinh tế, xã hội với quốc phòng, an ninh.",
      "B": "Gắn kết với việc mua sắm thêm nhiều trang thiết bị quân sự từ nước ngoài.",
      "C": "Gắn kết với việc tăng cường diễn tập quân sự tại tất cả các cấp học phổ thông.",
      "D": "Gắn kết với việc hạn chế các hoạt động giao lưu văn hóa với người nước ngoài."
    },
    "correct": "A"
  },
  {
    "id": 537,
    "q": "Nghị quyết Đại hội XIV xác định “nguồn lực nội sinh” của dân tộc bao gồm những gì?",
    "options": {
      "A": "Các mỏ khoáng sản quý hiếm và nguồn tài nguyên rừng vàng biển bạc hiện nay.",
      "B": "Lượng tiền tiết kiệm của người dân và các nguồn kiều hối gửi về hàng năm.",
      "C": "Giá trị văn hóa, sức mạnh con người và khối đại đoàn kết toàn dân tộc.",
      "D": "Hệ thống các cảng biển nước sâu và sân bay quốc tế hiện đại khắp cả nước."
    },
    "correct": "C"
  },
  {
    "id": 538,
    "q": "Tư duy phát triển bền vững Đại hội XIV của Đảng thể hiện qua việc xử lý mối quan hệ nào?",
    "options": {
      "A": "Giữa tăng trưởng kinh tế với phát triển văn hóa và bảo vệ môi trường.",
      "B": "Giữa việc sản xuất hàng hóa phục vụ trong nước và việc xuất khẩu ra ngoài.",
      "C": "Giữa việc sử dụng lao động trẻ và việc chăm sóc những người già hiện nay.",
      "D": "Giữa việc phát triển các khu đô thị mới và giữ gìn các làng nghề cổ truyền."
    },
    "correct": "A"
  },
  {
    "id": 539,
    "q": "Đại hội XIV xác định mục đích của cải cách tổ chức bộ máy và sắp xếp lại đơn vị hành chính?",
    "options": {
      "A": "Mở rộng không gian phát triển.",
      "B": "Mở rộng không gian phát triển, phân bổ lại nguồn lực, tăng hiệu quả phục vụ Nhân dân, giảm chi phí xã hội, giảm thủ tục hành chính và tăng kỷ luật thực thi.",
      "C": "Giảm chi phí xã hội, giảm thủ tục hành chính.",
      "D": "Phân bổ lại nguồn lực giữa các địa phương."
    },
    "correct": "B"
  },
  {
    "id": 540,
    "q": "Đại hội đại biểu toàn quốc lần thứ XIV của Đảng xác định yếu tố nào là nền tảng, động lực, sức mạnh nội sinh bảo đảm cho sự phát triển bền vững?",
    "options": {
      "A": "Tài nguyên thiên nhiên",
      "B": "Vốn đầu tư nước ngoài",
      "C": "Văn hoá và con người Việt Nam",
      "D": "Khoa học công nghệ"
    },
    "correct": "C"
  },
  {
    "id": 541,
    "q": "Đại hội đại biểu toàn quốc lần thứ XIV của Đảng xác định nội dung đột phá nào là “Đột phá của đột phá” để thúc đẩy phát triển?",
    "options": {
      "A": "Thể chế phát triển",
      "B": "Kinh tế",
      "C": "văn hóa",
      "D": "Khoa học công nghệ"
    },
    "correct": "A"
  },
  {
    "id": 542,
    "q": "Đại hội XIV của Đảng xác định thành phần kinh tế nào giữ vai trò chủ đạo?",
    "options": {
      "A": "Kinh tế nhà nước",
      "B": "Kinh tế tư nhân",
      "C": "Kinh tế tập thể.",
      "D": "Kinh tế có vốn đầu tư nước ngoài"
    },
    "correct": "A"
  },
  {
    "id": 543,
    "q": "Để đẩy mạnh khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số, Đại hội XIV xác định cần thực hiện những cơ chế gì?",
    "options": {
      "A": "Trọng dụng nhân tài, đánh giá dựa trên sản phẩm.",
      "B": "Tài chính linh hoạt, hợp tác công tư, đặt hàng nhiệm vụ khoa học gắn với yêu cầu phát triển.",
      "C": "Trọng dụng nhân tài, đánh giá dựa trên sản phẩm, tài chính linh hoạt, hợp tác công tư, đặt hàng nhiệm vụ khoa học gắn với yêu cầu phát triển.",
      "D": "Trọng dụng nhân tài, đánh giá dựa trên sản phẩm, tài chính linh hoạt, hợp tác công tư, đặt hàng nhiệm vụ khoa học."
    },
    "correct": "C"
  },
  {
    "id": 544,
    "q": "Một trong những định hướng về xây dựng văn hóa và con người tại Đại hội XIV?",
    "options": {
      "A": "Xây dựng và phát triển nền văn hoá Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
      "B": "Xây dựng và phát triển nền văn hoá Việt Nam đậm đà bản sắc dân tộc, đồng bộ trên nền tảng hệ giá trị quốc gia và chuẩn mực con người Việt Nam đáp ứng yêu cầu phát triển trong giai đoạn mới.",
      "C": "Xây dựng nền văn hoá Việt Nam tiên tiến, đậm đà bản sắc dân tộc, đồng bộ trên nền tảng hệ giá trị quốc gia, hệ giá trị văn hoá và con người Việt Nam đáp ứng yêu cầu phát triển trong giai đoạn mới.",
      "D": "Xây dựng và phát triển nền văn hoá Việt Nam tiên tiến, đậm đà bản sắc dân tộc, đồng bộ trên nền tảng hệ giá trị quốc gia, hệ giá trị văn hoá và chuẩn mực con người Việt Nam đáp ứng yêu cầu phát triển trong giai đoạn mới."
    },
    "correct": "D"
  },
  {
    "id": 545,
    "q": "Vị trí, vai trò, tầm quan trọng của nhiệm vụ tăng cường quốc phòng, an ninh và đẩy mạnh đối ngoại, hội nhập quốc tế được xác định trong Đại hội XIV?",
    "options": {
      "A": "Trọng yếu, thường xuyên.",
      "B": "Cấp bách.",
      "C": "Thường xuyên.",
      "D": "Thường xuyên, liên tục."
    },
    "correct": "A"
  },
  {
    "id": 546,
    "q": "Đại hội XIV của Đảng, những nội dung trong bảo đảm an ninh quốc gia trong giai đoạn mới?",
    "options": {
      "A": "An ninh biên giới, lãnh thổ.",
      "B": "An ninh biên giới, lãnh thổ, an ninh chế độ, an ninh văn hoá tư tưởng, an ninh kinh tế, an ninh tài chính.",
      "C": "An ninh biên giới, lãnh thổ, an ninh chế độ, an ninh văn hoá tư tưởng, an ninh kinh tế, an ninh tài chính, an ninh dữ liệu, an ninh năng lượng, an ninh nguồn nước, an ninh lương thực....",
      "D": "An ninh kinh tế, an ninh tài chính, an ninh dữ liệu, an ninh năng lượng, an ninh nguồn nước, an ninh lương thực."
    },
    "correct": "C"
  },
  {
    "id": 547,
    "q": "Công tác nào tiếp tục được Đại hội XIV xác định là “then chốt của then chốt”?",
    "options": {
      "A": "Công tác cán bộ.",
      "B": "Công tác quốc phòng an ninh, đối ngoại.",
      "C": "Công tác kinh tế, tư pháp.",
      "D": "Văn hóa xã hội."
    },
    "correct": "A"
  },
  {
    "id": 548,
    "q": "Đại hội XIV xác định vị trí, vai trò của các thành tố. Người dân, nhà nước pháp quyền, văn hoá và đoàn kết toàn dân tộc như thế nào?",
    "options": {
      "A": "Người dân là trung tâm, mục tiêu và động lực; nhà nước pháp quyền là trụ cột; văn hoá là nền tảng tinh thần; đoàn kết toàn dân tộc là sức mạnh nội sinh..",
      "B": "Người dân là chủ thể, mục tiêu và động lực; nhà nước pháp quyền là trụ cột; văn hoá là nền tảng tinh thần; đoàn kết toàn dân tộc là sức mạnh nội sinh.",
      "C": "Người dân là trung tâm, chủ thể, mục tiêu và động lực; nhà nước pháp quyền là trụ cột; văn hoá là nền tảng tinh thần; đoàn kết toàn dân tộc là sức mạnh nội sinh.",
      "D": "Người dân là trung tâm, mục tiêu và động lực; nhà nước pháp quyền là trụ cột; văn hoá là nền tảng tinh thần; đoàn kết toàn dân tộc là sức mạnh nội sinh.."
    },
    "correct": "C"
  },
  {
    "id": 549,
    "q": "Phương châm Đại hội Đảng bộ Quân đội lần thứ XII là gì?",
    "options": {
      "A": "Đoàn kết - Đổi mới - Phát triển - Bền vững",
      "B": "Dân chủ - Kỷ cương - Trách nhiệm - Hiệu quả",
      "C": "Đoàn kết - Dân chủ - Kỷ cương - Kiên định - Đột phá - Phát triển",
      "D": "Kiên định - Đổi mới - Hội nhập - Phát triển"
    },
    "correct": "C"
  },
  {
    "id": 550,
    "q": "Chủ đề của Đại hội Đảng bộ Quân đội lần thứ XII là gì?",
    "options": {
      "A": "“Phát huy truyền thống Quân đội anh hùng, xây dựng Đảng bộ trong sạch, vững mạnh toàn diện, mẫu mực, tiêu biểu, Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại.",
      "B": "Nâng cao sức mạnh quốc phòng, bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa, góp phần xây dựng đất nước hòa bình, giàu mạnh, phồn vinh, văn minh, hạnh phúc”.",
      "C": "Nâng cao sức mạnh quốc phòng, bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa”.",
      "D": "Cả a và b đều đúng."
    },
    "correct": "D"
  },
  {
    "id": 551,
    "q": "Trong nhiệm kỳ 2020-2025, lực lượng dân quân tự vệ đạt tỷ lệ bao nhiêu % so với dân số?",
    "options": {
      "A": "1,0%.",
      "B": "1,41%.",
      "C": "1,8%.",
      "D": "2,0%."
    },
    "correct": "D"
  },
  {
    "id": 552,
    "q": "Trong nhiệm kỳ 2020 - 2025 kết quả xây dựng Đảng bộ về tư tưởng đã được Đại hội Đảng bộ Quân đội lần thứ XII đánh giá như thế nào?",
    "options": {
      "A": "Tiếp tục được đổi mới mạnh mẽ, đi vào chiều sâu, góp phần nâng cao nhận thức, tăng cường đoàn kết, thống nhất trong cấp uỷ, tổ chức đảng và cơ quan, đơn vị.",
      "B": "Nội dung, hình thức giáo dục chính trị tư tưởng có nhiều đổi mới.",
      "C": "Công tác giáo dục, định hướng tư tưởng góp phần củng cố bản lĩnh chính trị.",
      "D": "Chất lượng giáo dục chính trị tư tưởng từng bước được nâng lên."
    },
    "correct": "A"
  },
  {
    "id": 553,
    "q": "Những nội dung nào sau đây được xem là bài học kinh nghiệm rút ra sau 5 năm thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XI, góp phần nâng cao sức mạnh tổng hợp của Quân đội?",
    "options": {
      "A": "Giữ vững và tăng cường sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng đối với Quân đội.",
      "B": "Xây dựng Quân đội vững mạnh về mọi mặt, lấy xây dựng vững mạnh về chính trị làm cơ sở.",
      "C": "Coi trọng tổng kết thực tiễn, nghiên cứu phát triển lý luận, gắn chặt với xây dựng, hoàn thiện thể chế, cơ chế, chính sách.",
      "D": "Tất cả các đáp án đều đúng"
    },
    "correct": "D"
  },
  {
    "id": 554,
    "q": "Những nội dung nào sau đây phản ánh bài học kinh nghiệm về xây dựng khối đoàn kết, phát huy sức mạnh tổng hợp trong Quân đội và sự ủng hộ quốc tế trong thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XI?",
    "options": {
      "A": "Xây dựng, chỉnh đốn Đảng trong sạch, vững mạnh.",
      "B": "Kết hợp phát triển kinh tế – xã hội với quốc phòng, an ninh.",
      "C": "Xây dựng Quân đội vững mạnh về chính trị, nâng cao sức mạnh chiến đấu.",
      "D": "Tăng cường đoàn kết thống nhất trong toàn quân và đoàn kết, gắn bó máu thịt quân-dân; phát huy sức mạnh tổng hợp của khối đại đoàn kết toàn dân tộc, kết hợp sự ủng hộ của bạn bè quốc tế đối với sự nghiệp quốc phòng."
    },
    "correct": "D"
  },
  {
    "id": 555,
    "q": "Những nội dung nào sau đây phản ánh bài học kinh nghiệm về chủ động nghiên cứu, dự báo tình hình và nâng cao chất lượng lãnh đạo, chỉ đạo trong thực hiện nhiệm vụ quân sự, quốc phòng được nghị quyết Đại hội Đảng bộ quân đội lần thứ XII chỉ ra?",
    "options": {
      "A": "Đổi mới tư duy lãnh đạo, nâng cao hiệu lực, hiệu quả chỉ đạo, điều hành.",
      "B": "Phát huy tinh thần chủ động, sáng tạo, sử dụng hiệu quả nguồn lực xây dựng Quân đội.",
      "C": "Chủ động nghiên cứu, nắm, dự báo đúng tình hình; lãnh đạo, chỉ đạo có trọng tâm, trọng điểm, quyết liệt trong thực hiện nhiệm vụ.",
      "D": "Tất cả các đáp án đều đúng."
    },
    "correct": "D"
  },
  {
    "id": 556,
    "q": "Nội dung nào sau đây phản ánh bài học kinh nghiệm về kiểm soát quyền lực, giữ vững kỷ luật và nguyên tắc lãnh đạo trong Quân sau 5 năm thực hiện Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XI?",
    "options": {
      "A": "Kiên định mục tiêu, kết hợp kinh tế – quốc phòng.",
      "B": "Đổi mới tư duy lãnh đạo, nâng cao hiệu lực quản lý.",
      "C": "Phát huy tinh thần tự lực, ứng dụng khoa học – công nghệ.",
      "D": "Chủ động kiểm tra, giám sát và kiểm soát quyền lực, giữ vững nguyên tắc lãnh đạo, kỷ luật, kỷ cương."
    },
    "correct": "D"
  },
  {
    "id": 557,
    "q": "Nghị quyết Đại hội đảng bộ Quân đội lần thứ XII xác định mục tiêu sản xuất vật tư kỹ thuật như thế nào?",
    "options": {
      "A": "Sản xuất được 30% vật tư kỹ thuật đặc chủng; 60% vật tư kỹ thuật thông dụng.",
      "B": "Sản xuất được 30% vật tư kỹ thuật đặc chủng; 65% vật tư kỹ thuật thông dụng.",
      "C": "Sản xuất được 40% vật tư kỹ thuật đặc chủng; 60% vật tư kỹ thuật thông dụng.",
      "D": "Sản xuất được 40% vật tư kỹ thuật đặc chủng; 60% vật tư kỹ thuật thông dụng."
    },
    "correct": "A"
  },
  {
    "id": 558,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định mục tiêu bảo đảm, bảo quản vũ khí, trang bị như thế nào?",
    "options": {
      "A": "Bảo đảm 100% vũ khí, trang bị có nhà che; 50% nhà kho cấp chiến lược được xây dựng, quản lý theo mô hình ứng dụng công nghệ cao.",
      "B": "bảo đảm 100% vũ khí, trang bị có nhà che; 60% nhà kho cấp chiến lược được xây dựng, quản lý theo mô hình ứng dụng công nghệ cao.",
      "C": "bảo đảm 100% vũ khí, trang bị có nhà che; 70% nhà kho cấp chiến lược được xây dựng, quản lý theo mô hình ứng dụng công nghệ cao.",
      "D": "bảo đảm 100% vũ khí, trang bị có nhà che; 80% nhà kho cấp chiến lược được xây dựng, quản lý theo mô hình ứng dụng công nghệ cao."
    },
    "correct": "A"
  },
  {
    "id": 559,
    "q": "Chỉ tiêu quân số khỏe hằng năm mà Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định đó là.",
    "options": {
      "A": "Trên 98,5%",
      "B": "Trên 98,6%",
      "C": "Trên 98,7%",
      "D": "Trên 98,8%"
    },
    "correct": "A"
  },
  {
    "id": 560,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định thực hiện những đột phá nào trong nhiệm kỳ 2025 – 2030?",
    "options": {
      "A": "Hoàn thiện đồng bộ thể chế quân sự, quốc phòng; huy động hiệu quả các nguồn lực xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại",
      "B": "Tập trung phát triển nguồn nhân lực chất lượng cao; đẩy mạnh thu hút, trọng dụng nhân tài, xây dựng đội ngũ cán bộ đáp ứng yêu cầu xây dựng Quân đội hiện đại; nâng cao chất lượng xây dựng chính qui, quản lý kỷ luật; phát huy giá trị văn hoá “Bộ đội đội Cụ Hồ” thời kỳ mới.",
      "C": "Đẩy mạnh phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số; phát triển công nghiệp quốc phòng tự chủ, tự lực, tự cường, lưỡng dụng, hiện đại.",
      "D": "Tất cả đáp án trên đều đúng."
    },
    "correct": "D"
  },
  {
    "id": 561,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định Quân đội có vai trò như thế nào trong bảo vệ nền tảng tư tưởng của Đảng?",
    "options": {
      "A": "Là cơ quan trung tâm phối hợp với các lực lượng trong và ngoài quân đội tham gia bảo vệ nền tảng tư tưởng của Đảng.",
      "B": "Tiếp tục là lực lượng nòng cốt, tiên phong trong bảo vệ nền tảng tư tưởng của Đảng.",
      "C": "Chủ động, nhạy bén trong tham gia đấu tranh bảo vệ nền tảng tư tưởng của Đảng.",
      "D": "Chủ động xây dựng lực lượng chuyên sâu trong tham gia đấu tranh bảo vệ nền tảng tư tưởng của Đảng."
    },
    "correct": "B"
  },
  {
    "id": 562,
    "q": "Nhiệm vụ, giải pháp nào được xác định nhằm tăng cường công tác tư tưởng, thông tin, tuyên truyền trong Quân đội được Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "A": "Tăng cường lãnh đạo, chỉ đạo quản lý các hoạt động sản xuất, báo chí, văn hoá, văn học, nghệ thuật, theo đúng tôn chỉ, mục đích;",
      "B": "Nâng cao hiệu quả công tác thông tin đối ngoại và thông tin, tuyên truyền các hoạt động quân sự, quốc phòng.",
      "C": "Chú trọng nắm, đánh giá tình hình, diễn biến tư tưởng, kịp thời định hướng cán bộ, chiến sĩ và nhân dân trước những vấn đề mới, phức tạp, nhạy cảm.",
      "D": "Tất cả đáp án trên đều đúng"
    },
    "correct": "D"
  },
  {
    "id": 563,
    "q": "Nhiệm vụ, giải pháp nào được xác định nhằm tăng cường công tác bảo đảm an ninh, an toàn trong Quân đội được Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định?",
    "options": {
      "A": "Lãnh đạo chỉ đạo chặt chẽ, hiệu quả công tác bảo vệ an ninh; thực hiện tốt phương châm chủ động phòng ngừa, giữ vững bên trong là chính; xây dựng đơn vị an toàn gắn với địa bàn an toàn.",
      "B": "Quán triệt, giáo dục cán bộ, chiến sĩ đề cao cảnh giác, biết tự bảo vệ, không để kẻ địch lợi dụng móc nối, chống phá, thu thập tình báo.",
      "C": "Tăng cường các biện pháp phòng gian, bảo mật; bảo đảm an ninh, an toàn các hoạt động của toàn quân.",
      "D": "Tất cả đáp án đều đúng"
    },
    "correct": "D"
  },
  {
    "id": 564,
    "q": "Để nâng cao khả năng tác chiến hiện đại trong thực hiện nhiệm vụ sẵn sàng chiến đấu Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định ưu tiên nguồn lực nào?",
    "options": {
      "A": "Ưu tiên nguồn lực để tăng cường sức mạnh, nâng cao khả năng tác chiến trên không, trên biển",
      "B": "Ưu tiên nguồn lực cho phát triển các đoàn KTQP",
      "C": "Ưu tiên nguồn lực cho hoạt động đối ngoại",
      "D": "Ưu tiên nguồn lực cho công tác hậu cần thông thường"
    },
    "correct": "A"
  },
  {
    "id": 565,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định để nâng cao năng lực tác chiến trong môi trường hiện đại, cần tập trung vào nội dung nào?",
    "options": {
      "A": "Tăng cường khả năng tác chiến điện tử, xây dựng “Vòm phòng không bền vững”, hình thành những đơn vị tác chiến mới",
      "B": "Chỉ phát triển lực lượng bộ binh",
      "C": "Giảm đầu tư cho phòng không",
      "D": "Không chú trọng tác chiến điện tử"
    },
    "correct": "A"
  },
  {
    "id": 566,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định những nhiệm vụ, giải pháp chủ yếu lãnh đạo nâng cao chất lượng huấn luyện, diễn tập?",
    "options": {
      "A": "Thực hiện tốt phương châm huấn luyện “Cơ bản - Thiết thực - Vững chắc",
      "B": "Kết hợp huấn luyện quân sự với giáo dục chính trị, rèn luyện điều lệnh, thể lực và bồi dưỡng kỹ năng, kinh nghiệm chiến đấu.",
      "C": "Tiếp tục đổi mới nội dung, phương pháp tổ chức diễn tập ở các cấp, nhất là diễn tập hiệp đồng quân, binh chủng và diễn tập phòng thủ quân khu, phòng thủ khu vực.",
      "D": "Tất cả các đáp án đều đúng"
    },
    "correct": "D"
  },
  {
    "id": 567,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định nhiệm vụ, giải pháp chủ yếu lãnh đạo đẩy mạnh ứng dụng công nghệ vào những hoạt động nào?",
    "options": {
      "A": "Công tác Hậu cần - Kỹ thuật",
      "B": "Xây dựng các đoàn KTQP",
      "C": "Huấn luyện SSCĐ",
      "D": "Các hoạt động chỉ đạo, quản lý, chỉ huy, điều hành, giải quyết thủ tục hành chính và xử lý công việc trên môi trường điện tử."
    },
    "correct": "D"
  },
  {
    "id": 568,
    "q": "Nghị quyết Đại hội Đảng bộ Quân đội lần thứ XII xác định nhiệm vụ, giải pháp chủ yếu lãnh đạo xây dựng đội ngũ cán bộ nhân viên hậu cần, kỹ thuật như thế nào?",
    "options": {
      "A": "Có đủ số lượng, cơ cấu hợp lý, chất lượng cao.",
      "B": "Mở rông biên chế",
      "C": "Chủ động đưa đi đào tạo ở các trường bên ngoài quân đội.",
      "D": "Chú trọng đưa về các đơn vị cơ sở"
    },
    "correct": "A"
  },
  {
    "id": 568,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI đánh giá công tác giáo dục, quản lý, rèn luyện, bồi dưỡng đội ngũ cán bộ hiện nay như thế nào?",
    "options": {
      "A": "Đội ngũ cán bộ chưa đáp ứng được yêu cầu về trình độ chuyên môn nghiệp vụ.",
      "B": "Một bộ phận cán bộ còn có tư tưởng ngại khó, ngại khổ trong công tác.",
      "C": "Công tác giáo dục, quản lý, rèn luyện, bồi dưỡng đội ngũ cán bộ chưa toàn diện; một số cán bộ trách nhiệm, năng lực còn hạn chế, chưa gương mẫu trong đạo đức, lối sống.",
      "D": "Cán bộ chủ trì chưa thể hiện được vai trò trung tâm đoàn kết tại đơn vị."
    },
    "correct": "C"
  },
  {
    "id": 568,
    "q": "Khi đánh giá về hạn chế trong công tác huấn luyện, Đại hội Đảng bộ Quân khu lần thứ XI chỉ ra điểm yếu nào cần khắc phục?",
    "options": {
      "A": "Thời gian dành cho huấn luyện còn ngắn, chưa bám sát thực tế địa bàn.",
      "B": "Hệ thống giáo án, bài giảng chưa được cập nhật và đổi mới thường xuyên.",
      "C": "Công tác huấn luyện, diễn tập có nội dung còn hạn chế; thực hiện quy định trong diễn tập chưa nghiêm, có đơn vị để xảy ra mất an toàn.",
      "D": "Hệ thống thao trường bãi tập chưa đáp ứng đầy đủ yêu cầu huấn luyện tinh nhuệ."
    },
    "correct": "C"
  },
  {
    "id": 569,
    "q": "Đánh giá về công tác hậu cần, Đại hội Đảng bộ Quân khu lần thứ XI chỉ ra điểm yếu nào cần rút kinh nghiệm trong nhiệm kỳ qua?",
    "options": {
      "A": "Diện tích tăng gia sản xuất chưa được các đơn vị mở rộng đúng mức.",
      "B": "Chưa chủ động tự túc được nguồn thực phẩm tại chỗ cho cán bộ, chiến sĩ.",
      "C": "Công tác hậu cần một số chỉ tiêu, nhiệm vụ chưa đạt; một số mô hình tăng gia sản xuất chưa hiệu quả; xử lý các tồn đọng để chuyển sang công ty cổ phần còn gặp nhiều khó khăn.",
      "D": "Công tác quản lý tài chính trong các mô hình tăng gia chưa thật sự chặt chẽ."
    },
    "correct": "C"
  },
  {
    "id": 570,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu xây dựng sở chỉ huy cơ bản cấp tỉnh đạt tỷ lệ bao nhiêu trong nhiệm kỳ?",
    "options": {
      "A": "Phấn đấu đạt trên 90% chỉ tiêu đề ra.",
      "B": "Hoàn thành 95% mục tiêu xây dựng sở chỉ huy các cấp.",
      "C": "Hoàn thành 100% sở chỉ huy cơ bản cấp tỉnh.",
      "D": "Cơ bản hoàn thành các hạng mục sở chỉ huy trọng yếu tại địa phương."
    },
    "correct": "C"
  },
  {
    "id": 571,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định tỷ lệ đảng viên trong lực lượng Dân quân thường trực đạt chỉ tiêu bao nhiêu?",
    "options": {
      "A": "Phấn đấu đạt từ 20% trở lên.",
      "B": "Phấn đấu đạt từ 25% trở lên.",
      "C": "Đạt tỷ lệ 26% trở lên.",
      "D": "Phấn đấu đạt mức 30% trở lên."
    },
    "correct": "C"
  },
  {
    "id": 572,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định nội dung đột phá thứ nhất tập trung vào vấn đề gì?",
    "options": {
      "A": "Đổi mới, nâng cao chất lượng huấn luyện đáp ứng yêu cầu nhiệm vụ trong tình hình mới; tập trung xây dựng chính quy, chấp hành nghiêm pháp luật, kỷ luật và bảo đảm an toàn.",
      "B": "Đẩy mạnh cải cách hành chính và ứng dụng chuyển đổi số quân sự.",
      "C": "Nâng cao năng lực sẵn sàng chiến đấu tại các vùng địa bàn trọng điểm.",
      "D": "Chấn chỉnh tổ chức biên chế theo hướng tinh, gọn, mạnh."
    },
    "correct": "A"
  },
  {
    "id": 573,
    "q": "Nội dung đột phá thứ hai được Đại hội Đảng bộ Quân khu lần thứ XI xác định tập trung vào yếu tố nào để thực hiện nhiệm vụ?",
    "options": {
      "A": "Xây dựng khu vực phòng thủ và thế trận quốc phòng toàn dân.",
      "B": "Đổi mới công tác tăng gia sản xuất và bảo đảm hậu cần tại đơn vị.",
      "C": "Đẩy mạnh ứng dụng khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số trong thực hiện các nhiệm vụ của LLVT Quân khu.",
      "D": "Nâng cao chất lượng công tác giáo dục chính trị và quản lý tư tưởng."
    },
    "correct": "C"
  },
  {
    "id": 574,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định mục tiêu đột phá thứ ba về xây dựng đội ngũ cán bộ như thế nào?",
    "options": {
      "A": "Chú trọng công tác đào tạo ngoại ngữ cho đội ngũ cán bộ trẻ.",
      "B": "Tăng cường điều động cán bộ cho các đơn vị biên giới, hải đảo.",
      "C": "Xây dựng đội ngũ cán bộ các cấp, nhất là cán bộ chủ trì có đủ phẩm chất, năng lực, uy tín đáp ứng yêu cầu, nhiệm vụ trong tình hình mới.",
      "D": "Thực hiện luân chuyển cán bộ để rèn luyện qua thực tiễn cơ sở."
    },
    "correct": "C"
  },
  {
    "id": 575,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định tỷ lệ huy động, tiếp nhận, huấn luyện lực lượng Dự bị động viên đạt chỉ tiêu bao nhiêu?",
    "options": {
      "A": "Đạt 90% chỉ tiêu đề ra.",
      "B": "Đạt 95% chỉ tiêu đề ra.",
      "C": "Đạt 100% chỉ tiêu đề ra.",
      "D": "Phấn đấu vượt chỉ tiêu theo khả năng huy động của từng địa phương."
    },
    "correct": "B"
  },
  {
    "id": 576,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu tổ chức diễn tập cho các cấp trong nhiệm kỳ như thế nào?",
    "options": {
      "A": "Đạt 90% các cơ quan, đơn vị theo kế hoạch.",
      "B": "Đạt 95% các đối tượng được quy định diễn tập.",
      "C": "Tổ chức diễn tập đạt 100% chỉ tiêu ở các cấp.",
      "D": "Phấn đấu tổ chức diễn tập vượt 5% chỉ tiêu so với nhiệm kỳ trước."
    },
    "correct": "C"
  },
  {
    "id": 577,
    "q": "Đại hội Đảng bộ Quân khu lần thứ XI xác định chỉ tiêu thực hiện các nhiệm vụ nghiên cứu khoa học và cải cách hành chính như thế nào?",
    "options": {
      "A": "Đạt 90% tại các cơ quan, đơn vị trực thuộc Quân khu.",
      "B": "Ưu tiên hoàn thành cho các cơ quan tham mưu tác chiến và kỹ thuật.",
      "C": "Hoàn thành 100% nhiệm vụ nghiên cứu khoa học; ứng dụng khoa học, chuyển đổi số, thực hiện Đề án 06 và cải cách hành chính theo kế hoạch.",
      "D": "Phấn đấu dẫn đầu toàn quân về chuyển đổi số."
    },
    "correct": "C"
  },
  {
    "id": 578,
    "q": "Khái quát truyền thống của Quân đội nhân dân Việt Nam là gì?",
    "options": {
      "A": "Trung với Đảng, hiếu với dân, sẵn sàng chiến đấu, hy sinh, vì độc lập tự do của Tổ quốc, vì chủ nghĩa xã hội. Nhiệm vụ nào cũng hoàn thành, khó khăn nào cũng vượt qua, kẻ thù nào cũng đánh thắng.",
      "B": "Dựa vào dân, phát huy sức mạnh toàn dân.",
      "C": "Lấy tuyên truyền, giáo dục, vận động, thuyết phục là chính.",
      "D": "Tổ chức lực lượng rộng khắp, mạng lưới liên hoàn, khép kín."
    },
    "correct": "A"
  },
  {
    "id": 579,
    "q": "Chủ đề phong trào thi đua Quyết thắng năm 2026?",
    "options": {
      "A": "Đoàn kết, sáng tạo, kỷ cương, nêu gương, quyết thắng.",
      "B": "Đoàn kết, dân chủ, nêu gương, kỷ cương, quyết thắng.",
      "C": "Đoàn kết, kỷ cương, đột phá, sáng tạo, quyết thắng.",
      "D": "Dân chủ, đoàn kết, mẫu mực, kỷ cương, quyết thắng."
    },
    "correct": "C"
  },
  {
    "id": 580,
    "q": "Bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa từ sớm, từ xa, trên tất cả các yếu tố cấu thành Tổ quốc gồm?",
    "options": {
      "A": "Đất liền, biển đảo, trên không, vũ trụ, biên giới và không gian mạng.",
      "B": "Đất liền, biển đảo, vũ trụ và không gian mạng.",
      "C": "Đất liền, biển đảo, trên không, vũ trụ và không gian mạng.",
      "D": "Đất liền, biển đảo, trên không, vũ trụ."
    },
    "correct": "C"
  },
  {
    "id": 581,
    "q": "Trong quan hệ đối tác xếp theo cấp độ từ thấp đến cao là?",
    "options": {
      "A": "Đối tác chiến lược toàn diện; đối tác toàn diện; đối tác chiến lược.",
      "B": "Đối tác toàn diện; đối tác chiến lược; đối tác chiến lược toàn diện.",
      "C": "Đối tác chiến lược; đối tác toàn diện; đối tác chiến lược toàn diện.",
      "D": "Đối tác chiến lược toàn diện; đối tác chiến lược; đối tác toàn diện."
    },
    "correct": "B"
  },
  {
    "id": 583,
    "q": "Theo Nghị quyết số 847-NQ/QUTW ngày 28/12/2021 của Quân ủy Trung ương giải pháp quan trọng hàng đầu để giữ vững và phát huy phẩm chất “Bộ đội Cụ Hồ”; kiên quyết chống chủ nghĩa cá nhân trong tình hình mới?",
    "options": {
      "A": "Coi trọng xây dựng các cấp ủy, tổ chức đảng trong sạch, vững mạnh tiêu biểu, đề cao vai trò, trách nhiệm trong lãnh đạo phát huy phẩm chất “Bộ đội Cụ Hồ”, kiên quyết chống chủ nghĩa cá nhân.",
      "B": "Xây dựng đội ngũ cán bộ các cấp có đủ phẩm chất, năng lực, uy tín thực sự là tấm gương mẫu mực trong phát huy phẩm chất “Bộ đội Cụ Hồ”.",
      "C": "Nâng cao hiệu lực, hiệu quả công tác kiểm tra, giám sát; kiên quyết chấn chỉnh, xử lý nghiêm các vi phạm.",
      "D": "Tăng cường công tác lãnh đạo tư tưởng, giáo dục chính trị, nâng cao nhận thức, trách nhiệm cho cán bộ, đảng viên và quần chúng tiếp tục phát huy phẩm chất “Bộ đội Cụ Hồ”, kiên quyết chống chủ nghĩa cá nhân."
    },
    "correct": "D"
  },
  {
    "id": 584,
    "q": "Theo Quy định số 144-QĐ/TW, ngày 09/5/2024 của Bộ Chính trị, đâu là chuẩn mực đạo đức cách mạng của cán bộ, đảng viên?",
    "options": {
      "A": "Liên hệ chặt chẽ với Nhân dân, lắng nghe ý kiến và chịu sự giám sát của Nhân dân.",
      "B": "Tôn trọng Nhân dân, tận tụy phục vụ Nhân dân.",
      "C": "Trung thành với Đảng Cộng sản Việt Nam, bảo vệ danh dự Tổ quốc và lợi ích quốc gia.",
      "D": "Gương mẫu, khiêm tốn, tu dưỡng rèn luyện, học tập suốt đời."
    },
    "correct": "D"
  },
  {
    "id": 585,
    "q": "Đấu tranh trên không gian mạng trong Quân đội nhân dân Việt Nam là nhiệm vụ của ai?",
    "options": {
      "A": "Là nhiệm vụ của cấp ủy, chỉ huy các cấp.",
      "B": "Là nhiệm vụ của cán bộ chính trị các cấp.",
      "C": "Là nhiệm vụ của cấp ủy, chỉ huy và của mọi tổ chức, mọi lực lượng trong toàn quân.",
      "D": "Là nhiệm vụ của cơ quan chính trị các cấp."
    },
    "correct": "C"
  },
  {
    "id": 586,
    "q": "Quy định số 85-QĐ/TW ngày 07/10/2022 của Ban Bí thư về việc cán bộ, đảng viên thiết lập và sử dụng trang thông tin điện tử cá nhân trên Internet áp dụng đối tượng nào?",
    "options": {
      "A": "Áp dụng đối với cán bộ, đảng viên, nhất là cán bộ lãnh đạo, quản lý, người đứng đầu cấp ủy, tổ chức đảng.",
      "B": "Áp dụng đối với các cấp ủy, tổ chức đảng, cán bộ, đảng viên.",
      "C": "Áp dụng đối với cán bộ, đảng viên khi tham gia mạng xã hội.",
      "D": "Áp dụng với cấp ủy, tổ chức đảng."
    },
    "correct": "B"
  },
  {
    "id": 587,
    "q": "Đâu là trách nhiệm của cán bộ, đảng viên trong việc thiết lập và sử dụng trang thông tin điện tử cá nhân trên Internet, mạng xã hội theo Quy định số 85-QĐ/TW ngày 07/10/2022 của Ban Bí thư?",
    "options": {
      "A": "Khai báo thông tin chính danh;",
      "B": "Đăng ký ít nhất 01 tài khoản mạng xã hội;",
      "C": "Sẵn sàng tham gia đấu tranh trên không gian mạng khi có chỉ đạo;",
      "D": "Quản lý chặt chẽ trang thông tin điện tử cá nhân của mình;"
    },
    "correct": "A"
  },
  {
    "id": 588,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định” gồm những nội dung nào?",
    "options": {
      "A": "Kiên định mục tiêu, lý tưởng chiến đấu của Quân đội; kiên định xây dựng lực lượng dân quân tự vệ, dự bị động viên vững mạnh.",
      "B": "Kiên định đường lối quân sự, quốc phòng của Đảng; kiên định xây dựng Quân đội vững mạnh về chính trị.",
      "C": "Kiên định quốc phòng toàn dân, chiến tranh nhân dân; kiên định hội nhập, đối ngoại quốc phòng.",
      "D": "Kiên định hiện đại hóa Quân đội; kiên định công nghiệp quốc phòng tự chủ."
    },
    "correct": "B"
  },
  {
    "id": 589,
    "q": "Nội hàm “kiên định đường lối quân sự, quốc phòng của Đảng” trong chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội là gì?",
    "options": {
      "A": "Tập trung hiện đại hóa Quân đội, xây dựng một số lực lượng hiện đại.",
      "B": "Tăng cường hợp tác quốc phòng, mua sắm vũ khí, trang bị.",
      "C": "Quán triệt và thực hiện đúng quan điểm, đường lối, chính sách của Đảng, Nhà nước về quân sự, quốc phòng.",
      "D": "Phát triển lực lượng thường trực, xây dựng dân quân tự vệ, dự bị động viên “vững mạnh, rộng khắp”, sẵn sàng chiến đấu cao."
    },
    "correct": "C"
  },
  {
    "id": 590,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, khi thực hiện “kiên định đường lối quân sự, quốc phòng của Đảng” cần quán triệt nội dung nào?",
    "options": {
      "A": "Quốc phòng toàn dân, chiến tranh nhân dân và chính sách “bốn không”.",
      "B": "Phát triển kinh tế gắn với quốc phòng, bảo vệ biên cương của Tổ quốc.",
      "C": "Mở rộng hợp tác quân sự, mua sắm vũ khí trang bị cho Quân đội.",
      "D": "Tăng cường lực lượng dự bị, sẵn sàng bổ sung lực lượng khi có tình huống."
    },
    "correct": "A"
  },
  {
    "id": 591,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, phương châm nào là nền tảng quan trọng trong thực hiện “kiên định đường lối quân sự, quốc phòng của Đảng”?",
    "options": {
      "A": "Dựa vào tiềm lực kinh tế, đầu tư mạnh hơn cho Quân đội",
      "B": "Dựa vào sức mạnh quốc tế, trên tinh thần đoàn kết, hòa bình trên thế giới",
      "C": "Dựa vào khoa học, công nghệ, xây dựng nền quốc phòng vững mạnh",
      "D": "Dựa vào dân, lấy dân làm gốc và phát huy sức mạnh của Nhân dân"
    },
    "correct": "D"
  },
  {
    "id": 592,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, trong đó “Kiên định xây dựng Quân đội vững mạnh về chính trị” trước hết nhằm?",
    "options": {
      "A": "Nâng cao chất lượng huấn luyện, khả năng sẵn sàng chiến đấu.",
      "B": "Tăng cường sự lãnh đạo của Đảng đối với Quân đội.",
      "C": "Đẩy mạnh hội nhập quốc tế, đối ngoại quốc phòng.",
      "D": "Hiện đại hóa vũ khí, trang bị, nâng cao khả năng sẵn sàng chiến đấu."
    },
    "correct": "B"
  },
  {
    "id": 593,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 kiên định”, trong đó một nội dung quan trọng của kiên định xây dựng Quân đội vững mạnh về chính trị là gì?",
    "options": {
      "A": "Bản lĩnh chính trị kiên định, vững vàng, giỏi chuyên môn quân sự.",
      "B": "Bản lĩnh chính trị kiên định, vững vàng, giỏi chuyên môn quân sự, thành thạo công nghệ số trong thời kỳ mới.",
      "C": "Kiên định Chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh, quan điểm, đường lối quân sự của Đảng, mục tiêu độc lập dân tộc và chủ nghĩa xã hội.",
      "D": "Kiên định mục tiêu độc lập, có khả năng đối ngoại."
    },
    "correct": "C"
  },
  {
    "id": 594,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về phương châm “5 vững”, cụm từ “không ngừng phát huy giá trị văn hóa “Bộ đội Cụ Hồ” thời kỳ mới” phản ánh nội dung nào?",
    "options": {
      "A": "Chính trị vững.",
      "B": "Kỷ luật vững.",
      "C": "Công nghệ vững.",
      "D": "Nghệ thuật quân sự vững."
    },
    "correct": "A"
  },
  {
    "id": 595,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “2 đẩy mạnh” gồm:",
    "options": {
      "A": "Đẩy mạnh huấn luyện, xây dựng chính quy; đẩy mạnh phát huy giá trị văn hóa “Bộ đội Cụ Hồ”.",
      "B": "Đẩy mạnh huấn luyện, xây dựng chính quy; đẩy mạnh chuyển đổi số và phát triển công nghiệp quốc phòng.",
      "C": "Đẩy mạnh xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại; đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng.",
      "D": "Đẩy mạnh xây dựng quân đội vững mạnh về chính trị, quân sự; đẩy mạnh bảo đảm tốt hậu cần và kỹ thuật."
    },
    "correct": "C"
  },
  {
    "id": 596,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại”, nhân tố tiên quyết là gì?",
    "options": {
      "A": "Đẩy mạnh xây dựng con người hiện đại trong Quân đội.",
      "B": "Tăng cường mua sắm vũ khí, trang bị của các nước tiên tiến.",
      "C": "Tăng thời gian huấn luyện, nâng cao khả năng sẵn sàng chiến đấu.",
      "D": "Mở rộng hợp tác quân sự, xây dựng các lực lượng tiên tiến, hiện đại."
    },
    "correct": "A"
  },
  {
    "id": 598,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, nội dung nào không thuộc “Kỷ luật vững”?",
    "options": {
      "A": "Chấp hành điều lệnh, điều lệ.",
      "B": "Quản lý chặt chẽ quân nhân, vũ khí.",
      "C": "Không vi phạm pháp luật, kỷ luật.",
      "D": "Làm chủ nền tảng số và trí tuệ nhân tạo."
    },
    "correct": "D"
  },
  {
    "id": 597,
    "q": "Chỉ đạo của Tổng Bí thư, Chủ tịch nước đối với Quân đội về “5 vững”, trong đó “Công nghệ vững” nhấn mạnh yêu cầu:",
    "options": {
      "A": "Sử dụng tốt máy tính, trang thiết bị kỹ thuật thông minh.",
      "B": "Thành thạo điện thoại thông minh, các thiết bị điện tử trong Quân đội.",
      "C": "Làm chủ công nghệ quân sự, khai thác tốt trang bị hiện đại và hình thành “chiến sĩ số”.",
      "D": "Xây dựng cơ sở dữ liệu, đưa quân đội nhanh chóng hội nhập quốc tế."
    },
    "correct": "C"
  },
  {
    "id": 598,
    "q": "Đảng bộ Quân khu 5 thành lập vào thời gian nào?",
    "options": {
      "A": "16/10/1945",
      "B": "22/11/1946",
      "C": "19/12/1946",
      "D": "15/3/1946"
    },
    "correct": "B"
  },
  {
    "id": 600,
    "q": "Bộ Tham mưu được tặng những Huân chương nào của Nhà nước?",
    "options": {
      "A": "Huân chương Bảo vệ Tổ quốc hạng Nhất, hạng Nhì, hạng Ba.",
      "B": "Huân chương Bảo vệ Tổ quốc hạng Nhì, hạng Ba.",
      "C": "Huân chương Độc lập hạng Ba.",
      "D": "Huân chương Chiến công hạng Nhất."
    },
    "correct": "A"
  }
];
