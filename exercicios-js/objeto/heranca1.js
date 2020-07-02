// [[prototype]] --> conceito de protótipo
// [[prototype]] != prototype

const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo : "V40",
    velMax : 200
}

console.log(ferrari.__proto__) // 2 underline em cada lado
// consegue acessar o protótipo do objeto ferrari, do obj "pai"
// mostrou que o protótipo de ferrari é um obj vazio, mas existe, está presente

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
// ambos protótipos dos objetos ferrari e volvo apontam para o mesmo Object.prototype

console.log(Object.prototype.__proto__)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype)
console.log(MeuObjeto.prototype)

//o objeto não tem o atributo prototype, somente as funçõoes, como acima, para os objetos usa-se o atributo __proto__



