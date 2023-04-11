// question # 01


// function print(def) {
//     return function (ghi){
//  console.log(def + ghi);
//     } 
    
//  }
 
//  let innerFunction = print(5);
//  innerFunction(5);

// Question #02

// function found (arr, val) {
//     if (val === arr[11]){
//         return true;
//     }else{
//         return false;
//     }
// }
// let arr = [ "January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "Octber", "Novber", "December"];
// let val = "December";
// console.log(found(arr, val));

// Question #5


// let bgColorD = document.getElementById("bg");
// bgColorD.innerHTML = "<b>How to Change the Background Color in DOM ?</b>";
// bgColorD.style.backgroundColor = "green";
// console.log(bgColorD);

// Question #6

// function myObj (key, object) {
//     let objectString = JSON.stringify(object);
//     localStorage.setItem(key, objectString);
//     }
//     let myObject = {name : "Gulshan", age : 25};
//     myObj("myObject", myObject);

// Question #7


// let prevStudents = localStorage.getItem("students");
// let students = prevStudents? JSON.parse(prevStudents) : [];
// function studentName () {
//     let std = {
//         name : prompt("Enter Name"),
//         rollNo : +prompt("Enter Your Roll No"),
//         teacherName : prompt("Enter Teacher Name"),
//         className : prompt("Enter Class")
//     }
//     students.push(std);
//     console.log(students);
    
// }