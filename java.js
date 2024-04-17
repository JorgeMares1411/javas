let vancho=document.querySelector("#vancho");

let vanchob=document.querySelector("#vanchob");

let valto=document.querySelector("#valto");

let alto=document.querySelector("#alto");

let ancho=document.querySelector("#ancho");

let colorf=document.querySelector("#colorf");

let anchob=document.querySelector("#anchob");

let colorb=document.querySelector("#colorb");

let tipob=document.querySelector("#tipob");

let cajita=document.querySelector("#cajita");

let r1=document.querySelector("#radio");

let r2=document.querySelector("#vradio");

let ro1=document.querySelector("#rotate");

let ro2=document.querySelector("#vrotate");

let t1=document.querySelector("#traslatex");

let t2=document.querySelector("#vtraslatex");

let t12=document.querySelector("#traslatey");

let t22=document.querySelector("#vtraslatey");

let  s=document.querySelector("#Scale");

let  s1=document.querySelector("#vScale");

let som=document.querySelector("#sombrax");

let  som2=document.querySelector("#vsombrax");

let sombra=document.querySelector("#colors");


ancho.oninput=()=>{ dibujar()}

alto.oninput=()=>{ dibujar()}

anchob.oninput=()=>{ dibujar()}

colorf.onchange=()=>{ dibujar()}

colorb.onchange=()=>{ dibujar()}

tipob.onchange=()=>{ dibujar()}

r1.oninput=()=>{ dibujar()}

ro1.oninput=()=>{ dibujar()};

t1.oninput=()=>{ dibujar()};

t12.oninput=()=>{ dibujar()};

s.oninput=()=>{ dibujar()};

som.oninput=()=>{ dibujar()};

sombra.oninput=()=>{ dibujar()};

const dibujar=()=>{

    let a=parseInt(ancho.value);

    let al=parseInt(alto.value);

    let ab=parseInt(anchob.value);

    let c1=colorf.value;

    let c2=colorb.value;

    let tipo=tipob.value;

    let r=r1.value;

    let rot1=ro1.value;

let t=t1.value;

let t21=t12.value;

let sc=s.value;

let sx=som.value;


    vancho.innerHTML=a;

    valto.innerHTML=al;

    vanchob.innerHTML=ab;
 
    r1.innerHTML=r;

    

    cajita.style.width=a+"px";

    cajita.style.height=al+"px";

    cajita.style.borderWidth=ab+"px";

    cajita.style.borderRadius=r+"%";

    cajita.style.backgroundColor=c1;

    cajita.style.borderColor=c2;

    cajita.style.borderStyle=tipo;

    cajita.style.rotate=rot1+"deg";
    
    cajita.style.transform="translateX("+t+"px) translateY("+t21+"px) scale("+sc+")";

    cajita.style.boxShadow=""+sx.value+"px "+Sy.value+"px"+sombra.value;


}

