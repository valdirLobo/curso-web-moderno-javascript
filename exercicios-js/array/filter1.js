//filter -->filtra um array ex: quer do array só notas 9, recebe v ou f
//os elementos filtrados representam um novo array

const produtos = [
    {nome:"Notebook", preco:2499, fragil:true},
    {nome: "Iphone", preco:3999, fragil:true},
    {nome:"Copo de vidro", preco:12.49, fragil:true},
    {nome: "Copo de plástico", preco:2.99, fragil:false}
]

// p --> cada um dos produtos
// return false todos são filtrados array []
//se colocar return true todos passam ---> nenhum elemento é filtrado
console.log(produtos.filter(function (produto) {
    return produto.preco > 3000
}))

// aparecendo só os produtos caros e frágeis 2 funções
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

//console.log(produtos.filter(caro, fragil))
console.log(produtos.filter(caro).filter(fragil))