function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // os objetos diferentes, criados pela mesma função constutora, tem seus protótipos apontando para o mesmo obj, por padrão
 console.log(MeuObjeto.prototype === obj1.__proto__)

 MeuObjeto.prototype.nome = "Anônimo"
 MeuObjeto.prototype.falar = function() {
     console.log(`Bom dia!! Meu nome é ${this.nome}!`)
 }

 obj1.falar()

 obj2.nome = "Lisandra"
 obj2.falar()

 const obj3 = {}
 obj3.__proto__ = MeuObjeto.prototype
 obj3.nome = "Lis"
 obj3.falar()

 // Resumindo...
 console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
 console.log(MeuObjeto.__proto__ === Function.prototype )
 console.log(Function.prototype.__proto__ === Object.prototype)
 console.log(Object.prototype.__proto__ === null) // o atribto existe mas não aponta para nada

