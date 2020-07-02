// cadeia de protótipos (prototype chain) :
Object.prototype.atrib1234 = "Topo da cadeia" // deve evitar esse tipo de manipulação

const avo = {atrib1 : "A"} //o avô tem como protótipo: Object.prototype
const pai = {__proto__: avo, atrib2: "B", atrib3: "3"} // para referenciar que o pai tem como protótibo o avo, tem que atribuir ----> __proto__:avo
const filho = {__proto__: pai, atrib3: "C"}
console.log(filho.atrib1) //foi procurando o atrib1 na cadeia de protótipos
console.log(filho.atrib0)
console.log(filho.atrib1234)
console.log(filho.atrib2)
console.log(filho.atrib3) //como encontrou na primeira cadeia de objeto não continua procurando
//ocorre um sombreamento, como se fosse uma subescrita

const carro = {
    velAtual: 0,
    velMax: 200,
    acelararMais(delta){
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta 
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 //shadowing --> sombreamento 
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

//o super chama o método do protótipo

Object.setPrototypeOf(ferrari, carro) // aqui estabeleci uma relação entre ferrari e carro
// equivalente ao __proto__
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelararMais(100)
console.log(volvo.status())

ferrari.acelararMais(300)
console.log(ferrari.status())

