class Produto {
    nome;
    preco;
    quantidade;

    constructor (valorNome,valorPreco,valorQuantidade){
        this.nome = valorNome
        this.preco = valorPreco
        this.quantidade = valorQuantidade
    }

    Vender(quantVend){
        if (this.quantidade < quantVend){
        console.log(`Estoque insuficiente, temos ${this.quantidade}`)
        return
        }
        this.quantidade -= quantVend
    }

    Repor(quantReposta){
        this.quantidade += quantReposta
    }

    MostrarEstoque(Mostrar){
        console.log(`Produto ${this.nome}, custa R$ ${this.preco} e temos ${this.quantidade}`)
    }

    AtualizarPreco(novoValor){
        this.preco = novoValor
    }
}

class Pessoa {
    nome;
    idade;
    profissao;

    constructor(nome,idade,profissao){
        this.idade=idade
        this.nome=nome
        this.profissao=profissao
    }
}

class Cliente extends Pessoa {
    telefone;
    email;
    dataInicio;

    constructor(nome,idade,profissao,telefone,email,dataInicio){
        super(nome,idade,profissao)
    this.telefone = telefone
    this.email=email
    this.dataInicio=dataInicio
}
}

let clienteJose = new Cliente("José Oswaldo", 33, "Analista de BI", "32313408", "josekunz@gmail.com", "2021-03-03")
console.log(clienteJose)


let caneta = new Produto ("Caneta", 2, 5)
caneta.Vender(15)
caneta.Repor(10)
caneta.MostrarEstoque()

caneta.Vender(2)
caneta.AtualizarPreco(20)
caneta.MostrarEstoque()

