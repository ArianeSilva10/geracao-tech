const produtos = [
    {
        id: 1,
        nome: 'Teclado',
        valor: 50
    },
    {
        id: 2, 
        nome: 'Mouse',
        valor: 30
    }
];

function listarProdutos() {
    return JSON.stringify(produtos);
}

function adicionarProduto(produto) {
    produtos.push(produto);
    return JSON.stringify({mensagem:'Produto adicionado com sucesso'});
}

function removerProduto() {
    produtos.pop();
    return JSON.stringify({mensagem: 'Produto removido com sucesso'})
}

module.exports = {
    listarProdutos,
    adicionarProduto,
    removerProduto
};