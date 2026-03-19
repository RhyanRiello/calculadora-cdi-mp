document.getElementById("btnCalcular").addEventListener("click", calcular)

function calcular(){

let valor = parseFloat(document.getElementById("valor").value)

let cdi = parseFloat(document.getElementById("cdi").value) / 100

let percentual = parseFloat(document.getElementById("percentual").value) / 100

let ir = parseFloat(document.getElementById("ir").value) / 100

let dias = parseInt(document.getElementById("tipoDias").value)


// CDI diário
let taxaDia = Math.pow(1 + cdi, 1/dias) - 1

// aplicar percentual do CDI
taxaDia = taxaDia * percentual


// rendimento diário bruto
let rendimentoDiaBruto = valor * taxaDia


// rendimento diário líquido
let rendimentoDiaLiquido = rendimentoDiaBruto * (1 - ir)


// rendimento mensal aproximado
let rendimentoMesBruto = rendimentoDiaBruto * 30

let rendimentoMesLiquido = rendimentoMesBruto * (1 - ir)


document.getElementById("diaBruto").innerHTML =
"R$ " + rendimentoDiaBruto.toFixed(2)

document.getElementById("diaLiquido").innerHTML =
"R$ " + rendimentoDiaLiquido.toFixed(2)

document.getElementById("mesBruto").innerHTML =
"R$ " + rendimentoMesBruto.toFixed(2)

document.getElementById("mesLiquido").innerHTML =
"R$ " + rendimentoMesLiquido.toFixed(2)

document.getElementById("resultado").style.display = "block"

}
