const btnMobile = document.getElementById('btn-mobile');
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener("click", toggleMenu);


var envioFormConversaoArea = document.getElementById("formularioConversorArea");


function ConverterAreaValor(event) {
    event.preventDefault();
    var largura = parseFloat(document.getElementById("campoLargura").value);
    var comprimento = parseFloat(document.getElementById("campoComprimento").value);
    var valorMetroQuadrado = parseFloat(document.getElementById("campoValorArea").value)
    var areaTerreno = largura * comprimento;
    var valorTerreno= areaTerreno * valorMetroQuadrado;

    
    var resultadoAreaTerreno= document.getElementById("totalAreaTerreno");
    var resultadoValorTerreno = document.getElementById("valorTotalTerreno");
    var resultadoAreaValor = " O terreno tem área de " + areaTerreno + " m² e seu valor total é de " + valorTerreno + " R$";

    resultadoAreaTerreno.innerHTML = resultadoAreaValor
}
envioFormConversaoArea.addEventListener('submit', ConverterAreaValor)

var envioFormConversorTerreno = document.getElementById("formularioConversorTerreno");
function ConverterArea(event) {

    event.preventDefault();
    var valorMetros = parseFloat(document.getElementById("valor").value);
    var valorAlqueires = Math.floor(valorMetros / 24200);
    var valorLitros = (valorMetros % 24200)/605;
    var valorHectare = valorMetros/10000;
    
    var resultadoAlqueire = document.getElementById("valorConvertidoAlqueire");
    var resultadoLitros = document.getElementById("valorConvertidoLitros");
    var resultadoConversão = " O resultado de " + "<br>"+ valorMetros + " m² é " + valorAlqueires + " alqueires e " + valorLitros.toFixed(1) + " litros ou " + valorHectare.toFixed(3) + " hectares";
    if (valorAlqueires >= 1) {
    resultadoAlqueire.innerHTML = resultadoConversão}
    else {
        resultadoAlqueire.innerHTML= "O resultado de " + valorMetros + " m² é " + valorLitros.toFixed(3) + " litros ou " + valorHectare.toFixed(3) + " hectares"
    } 
}
envioFormConversorTerreno.addEventListener ('submit', ConverterArea )


var envioFormCaixa = document.getElementById("formularioCaixa");
function operacaoTroco(event) {

    event.preventDefault();
    
    var valorDinheiro = parseFloat(document.getElementById("valorDinheiro").value);
    var valorProduto = parseFloat(document.getElementById("valorProduto").value);
    var valorTroco = valorDinheiro - valorProduto;
    var valorFaltante = (valorDinheiro - valorProduto) * -1;
    campoVazio = '';   


    var dinheiroEntregue = document.getElementById("valorDinheiroEntregue");
    var troco = document.getElementById("valorTroco");
    
    if (valorDinheiro < valorProduto) {
        alert(`Complemente o valor. Faltou R$: ${valorFaltante.toFixed(2)}`)
    }  else {        
        var resultadoOperacao = `Dinheiro:R$ ${valorDinheiro.toFixed(2)}<br>Troco: R$ ${valorTroco.toFixed(2)}`;
        dinheiroEntregue.innerHTML = resultadoOperacao;        
    }   

}
envioFormCaixa.addEventListener ('submit', operacaoTroco )

function apagaForm() {
    
	document.getElementById("formularioConversorArea").reset();
	document.getElementById('form2').reset();
	document.getElementById('form3').reset();
}