var nome = "Suiany"
var notaDoPrimeiroBimestre = 5
var notaDoSegundoBimestre = 5
var notaDoTerceiroBimestre = 5
var notaDoQuartoBimestre = 5

var notaFinal = 6.0;

var notaFinal = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1)


if (notaFinal >= 6.0) {
  console.log("Aprovado (a)")
} else {
  console.log("Reprovado (a)")
}

console.log ("Bem Vindo (a) " + nome)
console.log (notaFinal)

//