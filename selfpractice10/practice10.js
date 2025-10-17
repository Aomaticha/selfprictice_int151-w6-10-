//15.10.2025
//prompt 1: โจทย์ในห้อง
document.addEventListener("DOMContentLoaded", () => {
  const savedBg = localStorage.getItem("bgColor");
  const savedFont = localStorage.getItem("fontColor");
  const savedSize = localStorage.getItem("fontSize");
  const savedName = localStorage.getItem("userName");

  if (savedBg) document.body.style.backgroundColor = savedBg;
  if (savedFont) document.body.style.color = savedFont;
  if (savedSize) applyFontSize(savedSize);

  if (savedBg) document.getElementById("bgColor").value = savedBg;
  if (savedFont) document.getElementById("fontColor").value = savedFont;
  if (savedSize) document.getElementById("fontSize").value = savedSize;

//prompt 2: ให้เพิ่มการกรอกชื่อผู้ใช้แล้วให้แสดงเป็นข้อความตามที่กรอกว่า Hello (name) และพอเรากลับมาหน้าเดิมให้ขึ้นข้อความว่า Welcome back (name)
  if (savedName) {
    document.getElementById("userName").value = savedName;
    alert(`Welcome back, ${savedName}!`);
  }
});

function applyFontSize(size) {
  if (size === "small") document.body.style.fontSize = "14px";
  else if (size === "medium") document.body.style.fontSize = "18px";
  else if (size === "large") document.body.style.fontSize = "22px";
}

document.getElementById("saveBtn").addEventListener("click", () => {
  const bgColor = document.getElementById("bgColor").value;
  const fontColor = document.getElementById("fontColor").value;
  const fontSize = document.getElementById("fontSize").value;
  const usrname = document.getElementById("userName").value; // เพิ่ม user ลงไป

  localStorage.setItem("bgColor", bgColor);
  localStorage.setItem("fontColor", fontColor);
  localStorage.setItem("fontSize", fontSize);
  localStorage.setItem("userName", usrname); //เพิ่ม user ลงไป ให้เป็น localStorage

  alert(` Hello ${usrname}`);

  setTimeout(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    applyFontSize(fontSize);
  }, 500);
});


document.getElementById("resetBtn").addEventListener("click", () => {
  localStorage.clear();
  alert("รีเซ็ตการตั้งค่าแล้ว");
  location.reload();
});


//prompt 3:(ไฟล์ cookie.html ) ให้ผู้ใช้กรอกชื่อ แล้วกดปุ่ม “บันทึกชื่อ” เก็บชื่อใน cookie ถ้ามี cookie อยู่แล้ว ให้โชว์ข้อความ “ยินดีต้อนรับกลับมา, [ชื่อผู้ใช้]!”
    const cookies = document.cookie.split(';').map(c => c.trim());
    const nameCookie = cookies.find(c => c.startsWith('username='));
    if (nameCookie) {
      const userName = nameCookie.split('=')[1];
      document.getElementById("greeting").textContent = `Welcome back, ${userName}!`;
      document.getElementById("userName").style.display = "none";
      document.getElementById("saveBtn").style.display = "none";
    }

    document.getElementById("saveBtn").addEventListener("click", () => {
      const name = document.getElementById("userName").value.trim();
      if (name) {
        document.cookie = `username=${name}; max-age=604800; path=/`; 
        alert(`Hello ${name}!`);
        location.reload();
      } else {
        alert("Please enter your name ");
      }
    });
