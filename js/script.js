document.getElementById("btnCalcular").onclick = function(){

let valor = document.getElementById("valor").value
let cdi = document.getElementById("cdi").value

let rendimento = (valor * (cdi/100)) / 365

document.getElementById("resultado").innerHTML =
"Rendimento diário: R$ " + rendimento.toFixed(2)

}
