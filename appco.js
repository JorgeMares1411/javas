
let valor = document.querySelector("#valor");

let dv = document.querySelector("#value");

let caja=document.querySelector("#caja");

valor.oninput = () => {

let l=parseInt(valor.value);

dv.innerHTML=l;

caja.style.width=l+"px";

caja.style.height=l+"px";

  

  

}