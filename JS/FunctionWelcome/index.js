function boasVindas(nome) {
    document.write(`<h1>Bem-vindo(a), ${nome}!</h1>`);
}

// Chamando a função com diferentes nomes
boasVindas("Gleidson");
boasVindas("Márcio");
boasVindas("Alessandro");
boasVindas("Sarah");

document.write("exemplo de undefined:");

// exemplo de undefined
function exibirNome(nome) {
    document.write(`<h2>Nome: ${nome}</h2>`);
}

exibirNome();

document.write("exemplo de erro de referência");

function exibirIdade(idade) {
    document.write(`<h1>Idade: ${idade}</h1>`);
}

// Abaixo causará um erro de referência pois a função não foi chamada

exibirIdade(30); //Correto

document.write("exemplo de função Somar:");

function Somar(n1, n2) {
    let resultado = n1 + n2;
    return resultado;
}

let resultadoSoma= Somar(10, 20);
document.write(`<h1>O resultado da soma é: ${resultadoSoma}</h1>`);

document.write("exemplo de função mutável:");

let contador = 0;

function incrementar() {
    contador++;
}
incrementar();
document.write(`<h1>Contador: ${contador}</h1>`); // contador: 1

document.write("exemplo de função estática:");

function calcularDobro(num) {
    return num * 2;
}

let valor = 5;
let dobro = calcularDobro(valor);
document.write(`<h1>Dobro de ${valor} é: ${dobro}</h1>`); // dobro de 5 é 10

document.write("Exemplo de funções para preencher selects");

function preencherSelect(tag, limite) {
    for(let i = 1; i < limite; i++){
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        tag.appendChild(option);
    }
}

let dia = document.getElementById('dia');
let mes = document.getElementById('mes');

preencherSelect(dia, 32); //preenche o select de dias (1 a 31)
preencherSelect(mes, 13); // preenche o select de meses (1 a 12)