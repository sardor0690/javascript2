var num1 = +prompt("Birinchi sonni kiriting:");
var num2 = +prompt("Ikkinchi sonni kiriting:");
var num3 = +prompt("Uchinchi sonni kiriting:");

var middleNumber = num1;

if (num2 > num1 && num2 < num3) {
  middleNumber = num2;
  alert("O'rtadagi son: " + middleNumber);
} else if (num3 > num1 && num3 < num2) {
  middleNumber = num3;
  alert("O'rtadagi son: " + middleNumber);
}else{
    alert("kechirasiz xatolik yuz")
}