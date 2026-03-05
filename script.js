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