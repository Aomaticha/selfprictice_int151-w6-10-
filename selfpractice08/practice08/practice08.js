//2.10.2025
// Prompt 1: แสดงทุก child ของ soup
  let soup = document.querySelector("#soup").firstElementChild;
  while (soup) {
    console.log(soup);
    soup = soup.nextElementSibling;
  }

// Prompt 2: เลือก element แรกที่เจอจาก id soup หรือ appetizer และแสดงทุก element ที่มี class .meat
  const frist = document.querySelector("#soup") || document.querySelector("#appetizer");
  console.log(frist);

  const fristall = document.querySelectorAll(".meat");
  fristall.forEach((ele) => console.log(ele));



//3.10.2025
//prompt 1: เปลี่ยนสีเมนูตามประเภท เลือกทุก <li> ใน <ul> ถ้า class เป็น vegan → เปลี่ยนสีข้อความเป็น green ถ้า class เป็น meat → เปลี่ยนสีข้อความเป็น red
  const items = document.querySelectorAll("ul li");
  items.forEach((li) => {
    if (li.classList.contains("vegan")) {
      li.style.color = "green";
    } else if (li.classList.contains("meat")) {
      li.style.color = "red";
    }
  });

//prompt 2: นับจำนวนเมนูแต่ละประเภท เลือกทุก <li> ใน <ul> ทั้งหมด นับว่าในหน้าเว็บมี meat กี่ตัว และ vegan กี่ตัว
  let meatCount = 0;
  let veganCount = 0;

  items.forEach((li) => {
    if (li.classList.contains("meat")) meatCount++;
    if (li.classList.contains("vegan")) veganCount++;
  });

  console.log("Meat:", meatCount);
  console.log("Vegan:", veganCount);



//4.10.2025
//prompt 3: เพิ่มเมนูใหม่ สร้าง <li> ใหม่  และเพิ่มลงใน <ul id="soup"> ให้ชื่อเมนูใหม่เป็น "Tom Yum Soup" และ class เป็น "meat"
const newItem = document.createElement("li");
newItem.textContent = "Tom Yum Soup";
newItem.className = "meat";
soup.appendChild(newItem);

