let a,b;

do{
    a = Number(prompt("Nhập số a: "));
}
while(isNaN(a))

do{
    b = Number(prompt("Nhập số b: "));
}
while(isNaN(b))

if((a+ b)% 2 == 0){
    alert("Tổng 2 số chia hết cho 2");
} else {
    alert("Tổng 2 số không chia hết cho 2");
}
