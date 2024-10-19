class Pessoa {
    constructor(nome, cpf, dataDeNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }

    autenticar(){
        console.log(`${this.nome} está autenticado.`);        
    }
}

//criando instâncias da classe Pessoa
const pessoa1 = new Pessoa('João', '123.456.798-00', '01/01/1990');
console.log(pessoa1);
pessoa1.autenticar();

class Gerente extends Pessoa{
    constructor(nome, cpf, dataDeNascimento, departamento){
        super(nome, cpf, dataDeNascimento);
        this.departamento = departamento;
    }

    autenticar(){
        super.autenticar();
        console.log(`Gerente do departamento ${this.departamento} autenticado.`);
        
    }
}


const gerente1 = new Gerente('José', '987.684.321-00', '02/02/1980', 'Vendas');

console.log(gerente1);
gerente1.autenticar(); // Output: José está autenticado. Gerente do departamento Vendas autenticado.

const gerenteAuxiliar = gerente1;
gerenteAuxiliar.nome = 'Alice';

console.log(gerente1);
gerente1.autenticar(); // Output: Alice está autenticado. Gerente do departamento Vendas autenticado.

class Carro{
    static acelerar(){
        console.log('O carro está acelerando');        
    }

    static frear(){
        console.log('O carro esta freando');        
    }

    static ligarSeta(direcao){
        console.log(`Ligando seta para ${direcao}.`);        
    }
}

Carro.acelerar(); //O carro está acelerando
Carro.frear();// O carro esta freando
Carro.ligarSeta('direita'); //Ligando seta para direita.

class BancoDeDados {
    static criar(dado) {
      console.log(`Criando o dado: ${dado}`);
    }
  
    static atualizar(dado) {
      console.log(`Atualizando o dado: ${dado}`);
    }
  
    static deletar(dado) {
      console.log(`Deletando o dado: ${dado}`);
    }
  
    static consultar(dado) {
      console.log(`Consultando o dado: ${dado}`);
    }
  }
  
  BancoDeDados.criar('Registro 1'); // Criando o dado: Registro 1
  BancoDeDados.atualizar('Registro 1'); // Atualizando o dado: Registro 1
  BancoDeDados.deletar('Registro 1'); // Deletando o dado: Registro 1
  BancoDeDados.consultar('Registro 1'); // Consultando o dado: Registro 1