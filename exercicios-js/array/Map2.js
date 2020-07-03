//estão em json:

const carrinho = [
    '{ "nome": "Borracha", "preco":3.45}',
    '{ "nome": "Lápis", "preco":1.99}',
    '{ "nome": "Caderno", "preco":29.99}'
]

//retornar um array apenas com os preços
// tem que usar 2 map --> 1 map chamando o Json.parse (transformar map em obj) e 2 Map recebe o obj como entrada e retorna só os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

