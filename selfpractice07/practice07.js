//24.09.2025
//prompt 1 สรุปความสัมพันธ์ของ DOM แบบ tree ว่าแต่ละอันมีความสัมพันธ์เป็นอะไร
console.log(window.document) //root node
console.log(document) //root node
console.log(typeof document)
console.log(document.getElementById("title"))
const htmlElement = document.documentElement
console.log(htmlElement)

console.log(htmlElement.parentElement) //null
console.log(htmlElement.parentNode) //root node
if (htmlElement.parentNode === document) {
  console.log("parent of html is a root node")
}

console.log(document.firstChild) //<!DOCTYPE html>
console.log(document.firstChild.nextSibling)
console.log(document.firstChild.previousSibling) //null
console.log(document.firstElementChild) //<html>
console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
console.log(document.lastChild) //<!-- sample comment #3 -->
console.log(document.lastElementChild) //<html lang="en">



//25.09.2025
//prompt 1 เลือก <h1> (หรือ element ที่มี id="title") เปลี่ยนข้อความ เปลี่ยนสีตัวอักษร และเปลี่ยนสีพื้นหลัง
const heading = document.getElementById("title");
heading.style.backgroundColor = "#E0FFFF";
heading.textContent = "Hello , Aom";
heading.style.color = "skyblue";

//prompt 2 เปลี่ยนสีใน Element <p> ตัวแรกให้เป็นสีม่วงและเปลี่ยนฟ้อนตัวอักษร
const heading2 = document.getElementsByTagName("p")
heading2[0].style.color = "#483D8B";
heading2[0].style.fontFamily = "monospace";

//prompt 3 เพิ่ม Element <p> เข้าไปและเปลี่ยนสีตัวอักษรเป็นสีชมพู
const heading3 = document.createElement("p")
heading3.textContent = "Today we will learn about what a UX/UI Designer is and how interesting it is.";
heading3.style.color = "pink";
document.body.appendChild(heading3);

//prompt 4 เพิ่ม Element <p> เข้าไปและเปลี่ยนสีตัวอักษรเป็นสีเทาและทำให้ตัวอักษรเอียง
const heading4 = document.createElement("p")
heading4.textContent = "What is UX/UI? What is User Experience (UX)? UX, or User Experience, refers to the user's experience. Therefore, UX design is a design that aims to provide a positive user experience for users of digital products. What is User Interface (UI)? UI, or User Interface, is the interface that connects users. In digital products, UI design involves designing the appearance of a website or application to be aesthetically pleasing, easy to use, and promote a positive user experience."
heading4.style.color = "#708090";
heading4.style.fontStyle = "italic";
document.body.appendChild(heading4);



//27.09.2025
//prompt 1 (โจทย์ในห้อง) สร้าง <p> ใหม่และต่อเข้า <div> เพิ่ม attribute format="italic" ให้ <p> สร้าง <p> ใหม่ 3 ตัว เพื่อลองเพิ่มข้อความด้วย innerHTML, innerText, textContent ต่อ <p> ทั้ง 3 ตัวเข้า <div> → เพื่อเปรียบเทียบว่า แต่ละวิธีแสดงข้อความ/HTML ต่างกันยังไง
const demo = document.getElementById('demo')
const Pp = document.createElement('p')
demo.appendChild(Pp)
Pp.setAttribute('format','italic')

const text1 = document.createElement('p')
text1.innerHTML = "<i>Sample Italic Text</i>"

const text2 = document.createElement('p')
text2.innerText = "<i>Sample Italic Text</i>"

const text3 = document.createElement('p')
text3.textContent = "<i>Sample Italic Text</i>"

demo.appendChild(text1)
demo.appendChild(text2)
demo.appendChild(text3)




