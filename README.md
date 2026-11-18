# 🌾 Tấm Cám: Bảo Vệ Giỏ Ốc (Cám Ơi, Trả Giỏ Cho Ta!)

> **Mini-game 2D Dân Gian Việt Nam** xây dựng hoàn toàn bằng **HTML5, CSS3 và Vanilla JavaScript** gói gọn trong một file duy nhất. Không sử dụng thư viện ngoài nặng nề, âm thanh tổng hợp trực tiếp bằng **Web Audio API** và đồ họa kết hợp **SVG & Canvas**.

[![Live Demo](https://img.shields.io/badge/Play-Live%20Demo-success?style=for-the-badge&logo=google-chrome)](https://mavismath.github.io/Mavisgametamcam/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber?style=for-the-badge)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0%20(Pure%20Vanilla)-blue?style=for-the-badge)](index.html)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile%20%7C%20Desktop-purple?style=for-the-badge)](index.html)

---

## 📖 Bối Cảnh & Giới Thiệu Trò Chơi

Lấy cảm hứng từ câu chuyện cổ tích dân gian Việt Nam quen thuộc, trò chơi đưa bạn hóa thân vào vai **Cô Tấm** cần mẫn đi mò cua bắt ốc nơi đồng quê sông nước. Tuy nhiên, cô em gái **Cám** lém lỉnh luôn tìm mọi mưu mô để phá đám và cướp lấy giỏ ốc của bạn trước lúc hoàng hôn buông xuống!

Trò chơi kết hợp phong cách nghệ thuật dân gian tươi sáng (vàng rơm, nâu đất, xanh lá sen) với lối chơi chạm bắt nhịp độ nhanh (Whack-a-Mole nâng cấp) cùng nhiều cơ chế tương tác bất ngờ.

---

## 🎮 Các Tính Năng Nổi Bật

### 1. 🎭 Cá Nhân Hóa Độc Đáo & Tag Bạn Thân
- Tùy chỉnh tên người chơi vai **Tấm** và tên bạn thân vai **Cám**.
- **Tải ảnh chân dung thật:** Tính năng tải ảnh từ thiết bị và tự động xử lý cắt tròn (circular avatar crop) để gắn trực tiếp lên nhân vật Cám trong suốt ván chơi và in lên **Sắc Phong Chứng Nhận**.
- Nếu không tải ảnh, game tự động vẽ nhân vật Cám bằng SVG với biểu cảm đanh đá, búi tóc củ tỏi cổ truyền.

### 2. ⚡ Gameplay 60 Giây Kịch Tính
- **Mặt ruộng 9 ô bùn:** Các đối tượng trồi lên sủi bọt ngẫu nhiên:
  - 🦀 **Cua đồng (+1 con):** Bấm nhanh thu thập vào giỏ.
  - 🐚 **Ốc bươu (+1 con):** Thu thập tăng số lượng.
  - 🐟 **Cá Bống Vàng (+3 con):** Hiệu ứng phát sáng lấp lánh và âm thanh chuông ngân đặc biệt.
  - 🩴/🪨 **Vật cản (Dép đứt, Đá cuội):** Bấm nhầm sẽ làm rung lắc giỏ và bị rơi mất 1 con.
  - 😈 **Cám rình mò:** Chạm nhầm vào Cám sẽ bị Cám cười nhạo và cướp mất 3 con trong giỏ.
- **Mục tiêu:** Thu thập từ 25 con trở lên và bảo vệ giỏ an toàn đến giây cuối cùng!

### 3. ⚠️ Tuyệt Chiêu Phá Rối Của Cám
- **Chiêu 1 - Ném bùn làm mờ màn hình:** Định kỳ mỗi 12–15 giây, Cám tung bãi bùn lớn che kín màn hình. Người chơi phải **quẹt tay liên tục (swipe gesture)** hoặc **bấm nhanh 5 lần** để lau sạch bùn mới có thể tiếp tục quan sát.
- **Chiêu 2 - Cú Lật Kèo Phút Chót (7 giây cuối):** Khi đồng hồ điểm 7 giây cuối cùng, còi báo động réo vang, Cám lao ra giật phăng quai giỏ! Người chơi phải **spam bấm liên tục 14 lần vào nút "GIỮ CHẶT GIỎ ỐC!" trong 3 giây**. Nếu không kịp, Cám sẽ cướp sạch toàn bộ ốc về 0 và xử thua ngay lập tức!

### 4. 📜 Sắc Phong Khắc Ghi & Chia Sẻ Mạng Xã Hội
- Tự động kết xuất bức ảnh **Sắc Phong Mò Cua Đại Việt** bằng HTML5 Canvas chất lượng cao (800x520) với nền gấm lụa hoàng kim, viền mây sóng sen và con dấu triều đình:
  - **Khi Thắng:** Danh hiệu cao quý *"TẤM THỦ ĐẠO - Bậc thầy mò cua, Cám thấy chỉ biết ngước nhìn"*.
  - **Khi Thua:** Danh hiệu hài hước *"TẤM NGÂY THƠ - Mò mẫm cả buổi để Cám húp trọn giỏ quà"*.
- **Tải ảnh PNG:** Lưu sắc phong về điện thoại/máy tính với 1 click để đăng lên mạng xã hội.
- **Copy lời thách đấu:** Tự động sao chép câu gạ kèo hài hước gửi qua Messenger/Zalo kèm link game.

### 5. 🔊 Âm Thanh Thuần Web Audio API (Zero External Files)
- Toàn bộ nhạc nền ngũ cung dân gian (Hò - Xự - Xang - Xê - Cống) và các hiệu ứng âm thanh (bắt cua, cá bống lấp lánh, tiếng Cám cười, còi báo động, hoan ca thắng cuộc) đều được tổng hợp bằng bộ dao động tần số (Oscillator) trong trình duyệt, hoạt động ổn định 100% không lo lỗi mạng hay đường dẫn file âm thanh ngoài.

---

## 🚀 Trải Nghiệm Trực Tiếp (Live Demo)

Bạn có thể chơi ngay trên trình duyệt mà không cần cài đặt:
👉 **[Chơi Ngay Tại GitHub Pages](https://mavismath.github.io/Mavisgametamcam/)**

---

## 🛠️ Công Nghệ Sử Dụng

| Thành Phần | Công Nghệ Áp Dụng |
| :--- | :--- |
| **Cấu trúc & Giao diện** | Semantic HTML5, Responsive Flexbox & CSS Grid thuần |
| **Hiệu ứng & Hoạt họa** | Pure CSS Keyframe Animations (Pulse, Ripple, Splat, Shake) |
| **Đồ họa nhân vật** | Vector SVG nội suy sắc nét ở mọi độ phân giải màn hình |
| **Xử lý hình ảnh** | HTML5 Canvas 2D Context (Cắt ảnh tròn, render Sắc Phong) |
| **Hệ thống âm thanh** | Web Audio API (Synthesizers & Noise Generators) |
| **Chia sẻ mạng xã hội** | Thẻ Open Graph Meta Tags (Facebook, Messenger, Zalo) |

---

## 💻 Hướng Dẫn Chạy Cục Bộ (Local Development)

Không cần cài đặt framework hay build tool phức tạp:

1. **Clone mã nguồn về máy:**
   ```bash
   git clone https://github.com/MavisMath/Mavisgametamcam.git
   cd Mavisgametamcam
   ```

2. **Khởi chạy máy chủ nội bộ:**
   - Dùng Python 3:
     ```bash
     python -m http.server 8080
     ```
   - Hoặc dùng Node.js `npx serve`:
     ```bash
     npx serve .
     ```

3. Mở trình duyệt và truy cập: `http://localhost:8080/index.html`

---

## 🌐 Hướng Dẫn Kích Hoạt GitHub Pages

1. Truy cập vào kho mã nguồn trên GitHub: `https://github.com/MavisMath/Mavisgametamcam`
2. Chọn thẻ **Settings** > Mục **Pages** (ở thanh menu bên trái).
3. Tại phần **Build and deployment** > **Branch**:
   - Chọn nhánh: `main`
   - Chọn thư mục: `/ (root)`
4. Bấm **Save**. Đợi khoảng 1-2 phút, game sẽ tự động online tại:
   `https://mavismath.github.io/Mavisgametamcam/`

---

## 📄 Bản Quyền & Giấy Phép

Dự án được phát hành theo giấy phép **MIT License**. Mọi người được tự do trải nghiệm, học hỏi, chia sẻ và phát triển thêm các tính năng mới vì mục đích cộng đồng.

Chúc bạn và bạn bè có những giây phút giải trí đầy tiếng cười với cuộc rượt đuổi giỏ ốc của Tấm và Cám! 🦀🧺🌾
