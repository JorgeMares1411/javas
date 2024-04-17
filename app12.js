
var aSlider = document.getElementById('a');
var bSlider = document.getElementById('b');
var cSlider = document.getElementById('c');

aSlider.addEventListener('input', function() {
  document.getElementById('aValue').innerText = aSlider.value;
  calcularChicharronera();
});

bSlider.addEventListener('input', function() {
  document.getElementById('bValue').innerText = bSlider.value;
  calcularChicharronera();
});

cSlider.addEventListener('input', function() {
  document.getElementById('cValue').innerText = cSlider.value;
  calcularChicharronera();
});

function calcularChicharronera() {
  var a = parseFloat(aSlider.value);
  var b = parseFloat(bSlider.value);
  var c = parseFloat(cSlider.value);

  var discriminante = b * b - 4 * a * c;
  var resultado = document.getElementById('resultado');

  if (discriminante > 0) {
    var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    resultado.innerHTML = "x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
  } else if (discriminante == 0) {
    var x = -b / (2 * a);
    resultado.innerHTML = "x = " + x.toFixed(2);
  } else {
    resultado.innerHTML = "La ecuación no tiene solución real";
  }
}
