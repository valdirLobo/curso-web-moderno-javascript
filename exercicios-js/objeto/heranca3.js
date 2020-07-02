// Object.create

const pai = {nome:"Pedro", corCabelo:"Preto"}

const filha1 = Object.create(pai) //criou o objeto filha tendo como protótipo o obj pai
filha1.nome = "Ana"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: "Luna", writable: false, //não vai aceitar ser mudado
      enumerable: true}
})

console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    console.log(key)
}


// forma de saber se determinado atributo veio pelo próprio obj u por herança --> for in
for(let key in filha2){
   filha2.hasOwnProperty(key) ?
   console.log(key) : console.log(`Por herança: ${key}`)
}
