

let d=document.querySelector("#dia")
let vdia=document.querySelector("#vdia")
let m=document.querySelector("#mes")
let fecha=document.querySelector("#fecha")
let signo=document.querySelector("#signo")
let imagen=document.querySelector("#imagen");

d.oninput=()=>{
    vdia.innerHTML=d.value
    lafecha() 
}
m.onchange=()=>{
    lafecha()
}
const lafecha=()=>{

    
    dia=parseInt(d.value)
    mes=parseInt(m.value)
    var me=""

if(mes==1){
me="ENERO"
}
else if(mes==2){
    me="FEBRERO"
}
else if(mes==3){
me="MARZO"
}
else if(mes==4){
    me="ABRIL"
}
else if(mes==5){
    me="MAYO"
}
else if(mes==6){
    me="JUNIO"
 }
else if(mes==7){
    me="JULIO"
}
else if(mes==8){
me="AGOSTO"
}
else if(mes==9){
 me="SEPTIEMBRE"
}
else if(mes==10){
    me="OCTUBRE"
}
else if(mes==11){
    me="NOVIEMBRE"
}
else if(mes==12){
    me="DICIEMBRE"
    }
    fecha.innerHTML="FECHA "+d.value+" DE "+me
if((dia>=20 && mes==1)||(dia<=18 && mes==2)){
  
    signo.innerHTML="ACUARIO"
    signo.innerHTML="<img src='Acuario.jpg' width=400px heigth=300px>";

}
else if((dia>=19 && mes==2)||(dia<=20 && mes==3)){
    signo.innerHTML="PISCIS"
    signo.innerHTML="<img src='pi.jpg' width=400px heigth=300px>";
}
else if((dia>=21 && mes==3)||(dia<=19 && mes==4)){
    signo.innerHTML="ARIES"
    signo.innerHTML="<img src='aries.jpeg' width=400px heigth=300px>";
}
else if((dia>=20 && mes==4)||(dia<=20 && mes==5)){
    signo.innerHTML="TAURO"
    signo.innerHTML="<img src='tauro.png' width=400px heigth=300px>";
}
else if((dia>=21 && mes==5)||(dia<=20 && mes==6)){
    signo.innerHTML="GEMINIS"
    signo.innerHTML="<img src='gemi.jpg' width=400px heigth=300px>";
}
else if((dia>=21 && mes==6)||(dia<=22 && mes==7)){
    signo.innerHTML="CANCER"
    signo.innerHTML="<img src='cancer.jpg' width=400px heigth=300px>";
}
else if((dia>=23 && mes==7)||(dia<=22 && mes==8)){
    signo.innerHTML="LEO"
    signo.innerHTML="<img src='Leo.jpg' width=400px heigth=300px>";
}
else if((dia>=23 && mes==8)||(dia<=22 && mes==9)){
    signo.innerHTML="VIRGO"
    signo.innerHTML="<img src='Virgo.jpg' width=400px heigth=300px>";
}
else if((dia>=23 && mes==9)||(dia<=22 && mes==10)){
    signo.innerHTML="LIBRA"
    signo.innerHTML="<img src='libra.jpg' width=400px heigth=300px>";
}
else if((dia>=23 && mes==10)||(dia<=21 && mes==11)){
    signo.innerHTML="ESCORPIO"
    signo.innerHTML="<img src='esco.jpg' width=400px heigth=300px>";
}
else if((dia>=22 && mes==11)||(dia<=21 && mes==12)){
    signo.innerHTML="SAGITARIO"
    signo.innerHTML="<img src='sagi.jpg' width=400px heigth=300px>";
}
else if((dia>=22 && mes==12)||(dia<=19 && mes==1)){
    signo.innerHTML="CAPRICORNIO" 
    signo.innerHTML="<img src='Capricornio.jpeg' width=400px heigth=300px>";


}

signo.style.transform=" rotateY(-180deg)";
signo.style.transition=" all 0.5s linear";
//signo.style.transitionStyle="preserve-3d";
signo.style.backfaceVisibility="hidden";

setTimeout(()=>{
  signo.style.transform=" rotateY(0deg)";
  signo.style.transition="all 0.5s linear";

},200);

}



signo();
