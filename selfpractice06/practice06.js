//17.09.2025
//prompt 1 (โจทย์ในห้อง)
//เขียนฟังก์ชัน doSomething(x) ที่รับข้อความ x เป็นพารามิเตอร์ แล้วคืนค่าเป็นฟังก์ชันอีกตัวหนึ่ง ซึ่งเมื่อถูกเรียก จะส่งข้อความ "hi, <x>" ออกมา
function doSomething(x) {
  function echo() {
    return `hi,${x}`
  }
  return echo
}
console.log(doSomething("Aticha")())



//19.20.2025
//prompt 1
//เขียนฟังก์ชัน addPrefix(prefix) ที่รับข้อความ prefix แล้ว return ฟังก์ชันใหม่ที่เมื่อเรียก จะนำ prefix มาต่อกับข้อความที่ส่งเข้าไป
function addPrefix(prefix){
     function addPrefix2(prefix2){
        return prefix + prefix2
     }
     return addPrefix2;
}
const addID = addPrefix("ID:");
console.log(addID("67130500053"))
const addMyfav = addPrefix("Myfav:")
console.log(addMyfav("ice-cream"))



//20.09.2025
//prompt 1 (โจทย์ในห้อง)
//เขียนฟังก์ชัน idGenerator() ที่เมื่อถูกเรียก จะคืนค่าเป็นฟังก์ชันอีกตัวหนึ่ง และฟังก์ชันที่ถูกคืนค่านี้จะทำหน้าที่สร้าง “รหัสตัวเลข” (id) ที่เพิ่มขึ้นทีละ 1 ทุกครั้งที่ถูกเรียกใช้งาน
function idGenerator(){
    let id = 0;
    return function(){
        id++
        return id
    }
}
const idGene = idGenerator()
console.log(idGene()) 
console.log(idGene()) 
console.log(idGene()) 

//prompt 2
//เขียนฟังก์ชัน counter(start) ที่เริ่มนับจากเลข start แล้วทุกครั้งที่เรียก จะเพิ่มขึ้นทีละ 1
function countstart(x){
    let number = x;
    return function(){
        number++
        return number
    }
}
const count = countstart(19);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());



//22.09.2025
//prompt 1
//เขียนฟังก์ชัน sum รับตัวเลขมาแล้วคูณ 10
function sum(){
    let number = 10;
    function sum2(x){
        return number * x;
    }
    return sum2;
}
const sumtotal = sum();
console.log(sumtotal(2));
console.log(sumtotal(8));

//prompt 2
//เขียนฟังก์ชัน makeMultiplier(factor) ที่รับตัวเลข factor เข้ามา แล้ว return ฟังก์ชันใหม่ ที่เวลาถูกเรียก จะนำเลขที่ส่งเข้ามาไปคูณกับ factor
function makeMultiplier(factor){
    function makeMultiplier2(x){
        return factor * x
    }
    return makeMultiplier2
}
const times5 = makeMultiplier(5);
console.log(times5(2));
console.log(times5(20));


