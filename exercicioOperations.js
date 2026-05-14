let salarioPorHora = 30;
let horasTrabalhadas = 160;

let salarioFinal = salarioPorHora * horasTrabalhadas;

console.log("O salário final é R$", salarioFinal); 

/* Fernanda quer comprar uma jaqueta de RS 200. A loja esta oferencedo 10% de desconto. Qual sera o valor final a pagar? */

let precoOriginal = 200;
let desconto = precoOriginal* 0.10; 

let precoComDesconto = precoOriginal - desconto;

console.log("O preço final é R$", precoComDesconto.toFixed(2));

/* Julia esta se cadastrando em um site que exiger ser maios de idade. Ela tem 17 anos. Verifique se a julia é maior de idade*/

let idade = 17;
let maiorDeIdade = idade >= 18;
console.log(maiorDeIdade);

let quantidadeItens = 22;
let isPar = quantidadeItens % 2 == 0;
console.log(isPar); 

/* 
and = &&
or = ||
not = !
*/

// larissa so vai sair se nao estiver chovendo e ela tiver guardachuva. no dia da festa, larissa olha pela janela e ve que esta chovendo, mas ela nao possui guardachuva. Pense em como formular o problema em um algoritmo e entao pinte o console se larissa ira pra festa.

let taChovendo = true;
let temGuardachuva = false;
let festa = !taChovendo && temGuardaChuva == true;
console.log(`True ou False: Larissa irá a festa: ${festa}`);

