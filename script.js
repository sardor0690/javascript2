var age = +prompt("yosingizni kiriting")
if (age <= 18) {
    alert("Yoshsiz, o'qishingiz kerak")
} else if(age<=50){
    alert("ishlashingiz kerak")
} else if (age<=59) {
    alert("Yaqinda pensiyaga chiqasiz" )
}else if (age<=150) {
    alert("Pensionerga o'xshaysiz hali tirik bo'lsangiz")
}else{
    alert("Nimadir noto'g'ri ketib qoldi")
}