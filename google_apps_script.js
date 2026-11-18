/**
 * ===================================================================
 * GOOGLE APPS SCRIPT - TRACKING & GỘP GÓP Ý MINI-GAME TẤM CÁM
 * ===================================================================
 * Hướng dẫn:
 * 1. Mở Google Sheet của bạn > Vào Tiện ích mở rộng (Extensions) > Apps Script.
 * 2. Xóa toàn bộ code cũ và dán toàn bộ đoạn mã này vào.
 * 3. Bấm "Triển khai" (Deploy) > "Quản lý bản triển khai" (Manage deployments).
 * 4. Bấm biểu tượng cây bút chỉnh sửa > Chọn "Phiên bản mới" (New version) > Bấm "Triển khai" (Deploy).
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Khóa tránh xung đột khi nhiều người chơi gửi cùng lúc
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Tự động tạo dòng tiêu đề nếu trang tính còn mới
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời Gian", 
        "Mã Thiết Bị (ID)", 
        "Vai Tấm", 
        "Vai Cám", 
        "Kết Quả / Hành Động", 
        "Lần Chơi", 
        "Nội Dung Góp Ý"
      ]);
      sheet.getRange("A1:G1").setFontWeight("bold").setBackground("#FEF08A");
    }
    
    // Đọc dữ liệu JSON gửi lên từ game
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    
    var deviceId = String(data.deviceId || data.userId || "UNKNOWN").trim();
    var tamName = String(data.tamName || data.name || "Cô Tấm").trim();
    var camName = String(data.camName || "Con Cám").trim();
    var action = String(data.action || "").trim();
    var playCount = Number(data.playCount || 0);
    var message = String(data.message || "").trim();
    
    var lastRow = sheet.getLastRow();
    var isMerged = false;
    
    // ===============================================================
    // LOGIC GỘP DÒNG: Nếu là hành động "💬 GÓP Ý"
    // Quét ngược từ dưới lên để tìm dòng của chính lượt chơi đó
    // ===============================================================
    if (action.indexOf("GÓP Ý") !== -1 || action === "💬 GÓP Ý") {
      if (lastRow >= 2 && playCount > 0) {
        // Lấy toàn bộ dữ liệu từ dòng 2 đến dòng cuối (7 cột A -> G)
        var range = sheet.getRange(2, 1, lastRow - 1, 7);
        var values = range.getValues();
        
        // Quét ngược từ dòng mới nhất lên
        for (var i = values.length - 1; i >= 0; i--) {
          var rowDeviceId = String(values[i][1]).trim(); // Cột B (index 1)
          var rowPlayCount = Number(values[i][5]);        // Cột F (index 5)
          
          // Kiểm tra khớp cả Mã Thiết Bị và Lần Chơi thứ mấy
          if (rowDeviceId === deviceId && rowPlayCount === playCount) {
            var targetRow = i + 2; // Số thứ tự dòng thực tế trên Sheet
            var oldFeedback = String(values[i][6] || "").trim(); // Cột G (index 6)
            
            // Nếu đã có góp ý trước đó trong cùng lượt chơi thì nối thêm bằng dấu |
            var mergedFeedback = oldFeedback ? (oldFeedback + " | " + message) : message;
            
            // Cập nhật Cột G (Nội Dung Góp Ý)
            sheet.getRange(targetRow, 7).setValue(mergedFeedback);
            
            // Cập nhật lại thời gian Cột A sang thời điểm gửi góp ý
            sheet.getRange(targetRow, 1).setValue(new Date());
            
            // GIỮ NGUYÊN: Cột C (Vai Tấm), Cột D (Vai Cám), Cột E (Kết quả THẮNG/THUA), Cột F (Lần Chơi)
            isMerged = true;
            break;
          }
        }
      }
    }
    
    // Nếu chưa tìm thấy dòng nào (ví dụ vào web bấm góp ý luôn mà chưa chơi ván nào)
    // hoặc các hành động ghi log thông thường (THẮNG/THUA, THẢ TIM): Tạo dòng mới
    if (!isMerged) {
      sheet.appendRow([
        new Date(),
        deviceId,
        tamName,
        camName,
        action,
        playCount,
        message
      ]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      merged: isMerged 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Hỗ trợ kiểm tra trạng thái hoạt động trên trình duyệt
function doGet(e) {
  return ContentService.createTextOutput("Google Apps Script Tấm Cám Game Server đang hoạt động tốt! ✅")
    .setMimeType(ContentService.MimeType.TEXT);
}
