const btnMobile = document.getElementById('btn-mobile');
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener("click", toggleMenu);


function ConverterAreaValor() {
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









function ConverterArea() {
    var valorMetros = parseFloat(document.getElementById("valor").value);
    var valorAlqueires = Math.floor(valorMetros / 24200);
    var valorLitros = (valorMetros % 24200)/605;
    var valorHectare = valorMetros/10000;
    
    var resultadoAlqueire = document.getElementById("valorConvertidoAlqueire");
    var resultadoLitros = document.getElementById("valorConvertidoLitros");
    var resultadoConversão = " O resultado de " + "<br>"+ valorMetros + " m² é " + valorAlqueires + " alqueires e " + valorLitros.toFixed(1) + " litros ou " + valorHectare.toFixed(2) + " hectares";
    if (valorAlqueires >= 1) {
    resultadoAlqueire.innerHTML = resultadoConversão}
    else {
        resultadoAlqueire.innerHTML= "O resultado de " + valorMetros + " m² é " + valorLitros.toFixed(2) + " litros ou " + valorHectare.toFixed(2) + " hectares"
    }

 
}