function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const Aula1 = new Aula("Bem vindo", 123)
const Aula2 = new Aula("Até breve", 456)
console.log(Aula1, Aula2)

//simulando o new ---> o que acontece "por baixo dos panos" usando o operaor new
//f --> função contrutora / ...params ---> parãmetros
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const Aula3 = novo(Aula, "Bem vindo", 123)
const Aula4 = novo(Aula, "até breve", 456)
console.log(Aula3, Aula4)