let chartFreq;
let chartTrend;

function analisis(){

let data=document.getElementById("dataInput").value.split(",").map(Number);

let total=data.reduce((a,b)=>a+b,0);
let rata=total/data.length;

let max=Math.max(...data);
let min=Math.min(...data);

let median=data.sort((a,b)=>a-b)[Math.floor(data.length/2)];

document.getElementById("hasil").innerHTML=
"Jumlah data: "+data.length+
"<br>Total: "+total+
"<br>Mean: "+rata.toFixed(2)+
"<br>Median: "+median+
"<br>Max: "+max+
"<br>Min: "+min;

buatFrekuensi(data);
buatTrend(data);

}

function buatFrekuensi(data){

let freq={};

data.forEach(num=>{
freq[num]=(freq[num]||0)+1;
});

let labels=Object.keys(freq);
let values=Object.values(freq);

let ctx=document.getElementById("chartFrekuensi");

if(chartFreq){
chartFreq.destroy();
}

chartFreq=new Chart(ctx,{
type:"bar",
data:{
labels:labels,
datasets:[{
label:"Frekuensi",
data:values
}]
}
});

}

function buatTrend(data){

let ctx=document.getElementById("chartTrend");

if(chartTrend){
chartTrend.destroy();
}

chartTrend=new Chart(ctx,{
type:"line",
data:{
labels:data.map((_,i)=>"Data "+(i+1)),
datasets:[{
label:"Trend Data",
data:data
}]
}
});

}

function generate(){

let angka=Math.floor(Math.random()*100);

document.getElementById("random").innerHTML="Angka acak: "+angka;

}

function analisa(){

let data = [
n1.value,n2.value,n3.value,n4.value,n5.value,
n6.value,n7.value,n8.value,n9.value,n10.value
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

let hot = urut.slice(0,4).map(x=>x[0]);
let cold = urut.slice(-4).map(x=>x[0]);

document.getElementById("hot").innerHTML =
"🔥 Angka Panas: "+hot.join(" - ");

document.getElementById("cold").innerHTML =
"❄️ Angka Dingin: "+cold.join(" - ");

let prediksi=[];

for(let i=0;i<20;i++){

let angka="";

for(let j=0;j<4;j++){

angka += hot[Math.floor(Math.random()*hot.length)];

}

prediksi.push(angka);

}

document.getElementById("prediksi").innerHTML =
"<br>Prediksi:<br>"+prediksi.join("<br>");

}