document.getElementById("btnCalcular").addEventListener("click", calcular)

// BUSCAR CDI AUTOMATICAMENTE NO BACEN
async function pegarCDI(){

let url = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados/ultimos/1?formato=json"

try{

let resposta = await fetch(url)
let dados = await resposta.json()

let cdiDiario = parseFloat(dados[0].valor)

// converter para anual aproximado
let cdiAnual = (Math.pow(1 + (cdiDiario/100), 252) - 1) * 100

document.getElementById("cdi").value = cdiAnual.toFixed(2)

}catch(erro){

console.log("Erro ao buscar CDI", erro)

}

}

// roda quando abrir o site
pegarCDI()



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
