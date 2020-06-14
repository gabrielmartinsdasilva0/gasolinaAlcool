/*Um posto de gasolina tem a seguinte tabela de preços:

Código: 1
Álcool preço/litro: R$3,16.

Código: 2
Gasolina preço/litro: R$4,19.

Crie um programa que mostre o código do combustível escolhido, 
a quantidade dele em litros e o valor a ser pago pelo cliente. 
Aprimore-o para que ele exiba uma mensagem ao usuário caso este 
digite um código não existente.*/
var litros=0;
var alcool = 3.16;
var gasolina = 4.19;
var total=0;
var ga=0;

alert("Posto do Tonho");
ga=prompt("Digite o valor da bomba: 1 para gasolina e da bomba 2 para alcool", "Digite aqui");

litros = prompt("Digite a quantidade de litros","Digite aqui")


if(ga==1){
    total=litros*gasolina;
    document.write(" Você solicitou " ,litros, " litros e o seu valor total será de ", parseInt(total*100)/100);
}else if
(ga==2){
    total=litros*alcool;
    document.write(" Você solicitou " ,litros, " litros e o seu valor total será de ", parseInt(total*100)/100);
}else{
    document.write("Dados indisponivel")
}
