
var tombol = document.getElementById('tombol')
tombol.addEventListener('click', function() {
if(document.getElementById('sisa').value>0 || document.getElementById('tambahan').value>0) {
var danaTambah = document.getElementById('tambahan').value
var danaTambah1 = Number(danaTambah)
var danaSisaTerus = document.getElementById('sisa').value
var danaSisaTerus1 = Number(danaSisaTerus)
var hasil = 0;

var a = Math.round(Math.random() * 9);
var b = Math.round(Math.random() * 9);
var c = Math.round(Math.random() * 9);

if(a==b&&a==c){hasil=(a*10)+(b*20)+(c*30);} //semua sama
else if(a==b||a==c||b==c){hasil=(a*5)+(b*10)+(c*20)} //salah satu sama
else{hasil-=((a*10)+(b*20)+(c*30))} //ga ada yg sama

var danaSisa = 0
if((danaTambah1+danaSisaTerus1+hasil)<=0){
  danaSisa=0;
}
else{danaSisa=danaTambah1+danaSisaTerus1+hasil}
  
document.getElementsByName('random1')[0].placeholder=a;
document.getElementsByName('random2')[0].placeholder=b;
document.getElementsByName('random3')[0].placeholder=c;
// document.getElementsByName('sisa')[0].placeholder=danaTotal;
console.log(hasil)
console.log(danaSisa)
console.log(danaTambah1)
document.getElementById('tambahan').value='';
document.getElementById("sisa").value=danaSisa;
}
  else{alert("isi taruhan");}
});


