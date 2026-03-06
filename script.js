function buatPrediksi(){

let data = [
document.getElementById("n1").value,
document.getElementById("n2").value,
document.getElementById("n3").value,
document.getElementById("n4").value,
document.getElementById("n5").value,
document.getElementById("n6").value,
document.getElementById("n7").value,
document.getElementById("n8").value,
document.getElementById("n9").value,
document.getElementById("n10").value
];

let hitung = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};

data.forEach(num=>{
num.split("").forEach(d=>{
if(hitung[d] !== undefined){
hitung[d]++;
}
});
});

let urut = Object.entries(hitung).sort((a,b)=>b[1]-a[1]);

let top = urut.slice(0,4).map(x=>x[0]);

let prediksi = [];

for(let i=0;i<10;i++){
let angka = "";
for(let j=0;j<4;j++){
angka += top[Math.floor(Math.random()*top.length)];
}
prediksi.push(angka);
}

document.getElementById("hasil").innerHTML =
"Angka panas: "+top.join(", ")+"<br><br>"+
"Prediksi:<br>"+prediksi.join("<br>");
}