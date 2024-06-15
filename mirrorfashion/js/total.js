var inputQuantidade = document.querySelector("#qtd");
var outputTotal = document.querySelector("#total");

inputQuantidade.oninput = function(){
    var preco = document.querySelector("#preco").textContent;
    preco = preco.replace("RS ", "");
    preco = preco.replace(",", ".");
    preco = parseFloat(preco);

    var quantidade = inputQuantidade.value;
    var total = quantidade * preco;
    total = "RS" + total.toFixed(2);
    total = total.replace(".", ",");

    outputTotal.value = total;
}