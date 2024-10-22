class UsuarioModel{

    static lista = [
        {
            nome: "admin",
            login: "admin"
        }
    ];

    static listar(){
        return UsuarioModel.lista;
    }

    static consultarPorId(){

    }

    static criar(data){
        UsuarioModel.lista.push(data)
    }

    static atualizar(){

    }

    static deletar(){
        
    }
}

module.exports = UsuarioModel;