// ES8: Object.values/ Object.entries
const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj)) // array com os valores do objeto
console.log(Object.entries(obj)) // matriz de array, dentro contendo o array com chave e valor


//Melhorias na notação literal de um objeto
const nome = "Carla"
const pessoa = {
    nome,
    ola() {
        return "Oi gente!!"
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class no JS
// uma classe internmente vai ser convertida para uma função 
class Animal {}
class Cachorro extends Animal {
    falar(){
        return "Au au!"
    }
}

console.log(new Cachorro().falar())
