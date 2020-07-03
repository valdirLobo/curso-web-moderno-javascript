// objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object 
produto.nome = "cadeira" //ou
produto["marca do produto"] = "genérica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["marca do produto"] // não pode acessr por ponto devido ter sido criado com []
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Junior",
        idade: 34,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 34
    }, {
        nome: "Lissandra",
        idade: 29
    }], //array de objetos
    calcularValordoSeguro: function(){
        //...function dentro do objeto
    }
}

carro.proprietario.endereco.numero = 1000
carro ["proprietario"] ["endereco"] ["logradouro"] = "Rua XYZ"
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) //comrimento do array que está dentro do obj