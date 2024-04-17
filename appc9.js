
let res = document.querySelector("#res")

const suma = () => {
  let n1 = parseInt(document.querySelector("#n1").value);
  let n2 = parseInt(document.querySelector("#n2").value);
  resultado = n1 + n2;
  res.innerHTML = ` <h1>resultado</h1>
    <h2> ${resultado}</h2>`
}
