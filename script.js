function analisa(){

let data=[
n1.value,n2.value,n3.value,n4.value,n5.value,
n6.value,n7.value,n8.value,n9.value,n10.value
]

let freq={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}

let pos=[{}, {}, {}, {}]

for(let p=0;p<4;p++){
for(let i=0;i<=9;i++) pos[p][i]=0
}

let ganjil=0
let genap=0
let besar=0
let kecil=0

data.forEach(num=>{

if(num.length==4){

let d=num.split("")

for(let i=0;i<4;i++){

freq[d[i]]++
pos[i][d[i]]++

if(d[i]%2==0) genap++
else ganjil++

if(d[i]>=5) besar++
else kecil++

}

}

})

let sorted=Object.entries(freq).sort((a,b)=>b[1]-a[1])

let hot=sorted.slice(0,4).map(x=>x[0])
let cold=sorted.slice(-4).map(x=>x[0])

hot.innerHTML=hot.join(" - ")
cold.innerHTML=cold.join(" - ")

document.getElementById("hot").innerHTML=hot.join(" - ")
document.getElementById("cold").innerHTML=cold.join(" - ")

let stat=""

for(let i=0;i<=9;i++){
stat+="Digit "+i+" : "+freq[i]+"<br>"
}

document.getElementById("stat").innerHTML=stat

let posisiHTML=""

for(let p=0;p<4;p++){
posisiHTML+="Posisi "+(p+1)+" : "+JSON.stringify(pos[p])+"<br>"
}

document.getElementById("posisi").innerHTML=posisiHTML

document.getElementById("pola").innerHTML=
"Ganjil : "+ganjil+"<br>"+
"Genap : "+genap+"<br>"+
"Besar : "+besar+"<br>"+
"Kecil : "+kecil

let kombinasi=[]

for(let i=0;i<20;i++){

let angka=""

for(let j=0;j<4;j++){
angka+=hot[Math.floor(Math.random()*hot.length)]
}

kombinasi.push(angka)

}

document.getElementById("kombinasi").innerHTML=kombinasi.join("<br>")

gambarGrafik(freq)

}

function gambarGrafik(freq){

let canvas=document.getElementById("chart")
let ctx=canvas.getContext("2d")

ctx.clearRect(0,0,600,300)

let max=Math.max(...Object.values(freq))

let width=40
let gap=15

for(let i=0;i<=9;i++){

let h=(freq[i]/max)*200

ctx.fillRect(i*(width+gap)+40,260-h,width,h)

ctx.fillText(i,i*(width+gap)+55,280)

}

}