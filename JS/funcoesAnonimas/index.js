let saudacao = function (nome) {
    return "Olá, " + nome;
};

console.log(saudacao("João")); //olá, joão

//exemplo de arrow function
const somar = (a, b) =>{ return a + b};



// Função Tradicional
function Pessoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade); // `this` refere-se ao objeto global, não ao objeto Pessoa
    }, 1000);
}

// Usando Arrow Function
function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade); // `this` refere-se ao objeto Pessoa
    }, 1000);
}