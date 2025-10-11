const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const message = document.getElementById("message");
const inputMessage = document.getElementById("inputMessage");

//9.10.2025
//prompt 1: กด Enter แล้ว log ค่าใน console
inputMessage.addEventListener("keyup", (event) => {
  if (event.key === "Enter") console.log(event.target.value);
});

//prompt 2: เมื่อผู้ใช้ คลิกออกจากช่องชื่อ (fname หรือ lname) ถ้าว่าง จะแสดงข้อความว่า Please enter your (fname หรือ lname) เป็นสีแดง
function validateInput(e) {
  const value = e.target.value.trim();
    if (value.length === 0) {
    message.style.color = "red";
    message.textContent = `Please enter your ${e.target.id}`;
    return;
  }

//prompt 3: ห้ามมีตัวเลขหรือสัญลักษณ์ใน (fname หรือ lname)
  if (/[^a-zA-Z]/.test(value)) {
    message.style.color = "red";
    message.textContent = `${e.target.id}: Please enter only letters (no numbers or symbols!)`;
    return;
  }
    message.textContent = "";


//11.10.2025
//prompt 4: ถ้าทั้ง fname และ lname กรอกข้อมูลถูกต้องครบถ้วนแล้วให้เด้งข้อความขึ้นมาว่า "It's done"
  if (
    fName.value.trim().length > 0 &&
    lName.value.trim().length > 0 &&
    /^[a-zA-Z]+$/.test(fName.value.trim()) &&
    /^[a-zA-Z]+$/.test(lName.value.trim())
  ) {
    alert("It's done");
  }
}
fName.addEventListener("blur", validateInput);
lName.addEventListener("blur", validateInput);

