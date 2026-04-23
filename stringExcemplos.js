let nome = "Emilene"; //0,1,2,3,4,5,6 posições dos caracteres
primeiroCaractere = nome[0];
terceiroCaractere = nome[2];
console.log(primeiroCaractere); //"E" será exibido. 

nome.charAt(1); // O método charAt acessa o caractere na posição 1 da string `nome`, que é `m`.

let tamanho = nome.length;

console.log(tamanho); // A variavel `tamanho`recebe o valor da propriedade `lenght`da string `nome`que é 7. E exibe esse valor no console.
let ultimoCaractere = nome[nome.length -1];

//concatenando strings

saudacao = "Olá, ".concat(nome, "!"); 
console.log(saudacao); //O codigo exibe a string `saudacao`, que é "Òlá, Emilene!", no console. 
