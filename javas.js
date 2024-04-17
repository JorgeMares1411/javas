
let fil =document.querySelector("#fil")
let col = document.querySelector("#col")
let vf = document.querySelector("#vf")
let vc =document.querySelector("#vc")
let cp = document.querySelector("#cp")
let ci= document.querySelector("#ci")

fil.oninput = () => {
generar();

}
col.oninput = () => {
generar();
}

const generar = () => {
let f = parseInt(fil.value);
let c = parseInt(col.value);
vf.innerHTML = f;
vc.innerHTML = c;
tabla = "<table>";
for (i = 1; i <= f; i++) {
    
    tabla += "<tr bgcolor='blue'>"
    for (j = 1; j <= c; j++) {
    tabla += "<td></td>";
    }
    tabla += "</tr>";
}
document.querySelector("#res").innerHTML = tabla;
}
