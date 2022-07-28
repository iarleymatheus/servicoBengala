
var balde = document.getElementById("valorcompra");
var ml = document.getElementById("usado")
var btn = document.getElementById("btn")
var ValorServ = document.getElementById("valorServ")

function Calc(){

    let baldeValue = balde.value / 20000 ;
    let servico = parseInt(ValorServ.value);
    let ValorMl =Math.ceil(ml.value * baldeValue * 2 + 0.57 + servico);

    document.getElementById("valor").innerHTML = "O valor total a ser cobrado é R$: " + ValorMl+",00";
}
2 