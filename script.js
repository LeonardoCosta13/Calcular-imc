/*
Abaixo de 17 - Muito abaixo do Peso
Entre 17 e 18,49 - Abaixo do Peso
Entre 18,5 e 24,99 - Peso Normal
Entre 25 e 29,99 - Acima do Peso


Calculo=
  peso/(altura*altura);
*/

var peso;
var altura;
var imc;
var resultado;

function calcular(){
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    imc = peso/(altura*altura);
    
    if(imc < 17){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado é: " + imc.toFixed(2) + "<h3> Cuidado muito abaixo do Peso";
        return false;
    }else if(imc > 17 && imc < 18.49){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado é: " + imc.toFixed(2) + "<h3> Abaixo do Peso";
        return false;
    }else if(imc > 18.5 && imc < 24.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado é: " + imc.toFixed(2) + "<h3> Peso Normal";
        return false;
    }else if( imc > 25 && imc < 29.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado é: " + imc.toFixed(2) + "<h3> Cuidado voce esta acima do Peso";
        return false;
    }else{
        return false;
    }
    

}