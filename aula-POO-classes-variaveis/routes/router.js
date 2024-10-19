const Produto = require('./Produtos'); 

const rotas = {
    '/produtos': {
        'GET': Produto.listar, 
        'POST': Produto.adicionar,
        'PUT': Produto.editar,
        'DELETE': Produto.remover
    }
};

module.exports = rotas;
