var $input_quantidade = document.querySelector("#qtd");
var $output_total = document.querySelector(#total);

$input_quantidade.oninput = function(){
    var preco = document.querySelector("#preco").textContent;
    preco = preco.replace("RS ", "");
    preco = preco.replace(",", ".");
    preco = parseFloat(preco);

    var quantidade = $input_quantidade.value;
    var total = quantidade * preco;
    total = "RS" + total.toFixed(2);
    total = total.replace(".", ",");

    $output_total.value = total;
}