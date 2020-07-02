// função factory = função fábrica
// função factory é uma função que retorna um objeto

//factory simples
// dentro da função vc retorna um obj
function criarPessoa() {
    return {
        nome:"Lis",
        sobrenome: "Mota"
    }
}

console.log(criarPessoa())