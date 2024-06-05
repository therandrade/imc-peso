function Calcular(){
    var fPeso = parseFloat(document.getElementById("Peso").value)
    var fAltura = parseFloat(document.getElementById("Altura").value)
    var fIMC = fPeso/(fAltura*fAltura)
    document.getElementById("IMC").innerHTML = fIMC.toFixed(2)
    if(fIMC<18.5){
        document.getElementById("Status").innerHTML = "Status: Baixo Peso"
    }else if(fIMC<=24.9){
        document.getElementById("Status").innerHTML = "Status: Peso Ideial"
    }else if(fIMC<=29.9){
        document.getElementById("Status").innerHTML = "Status: Sobrepeso"
    }else if(fIMC<=34.9){
        document.getElementById("Status").innerHTML = "Status: Obesidade 1"
    }else if(fIMC<=39.9){
        document.getElementById("Status").innerHTML = "Status: Obesidade 2"
    }else{
        document.getElementById("Status").innerHTML = "Status: Obesidade Morbida"   
    }
}