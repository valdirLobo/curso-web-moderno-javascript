// this --->forma de referenciar o objeto atual daquela execução
// this é sempre o objeto que está sendo referenciado naquele contexto de execução
// no JS o this pode variar na function normal ---> tem como amarrar o this através do bind
// na função arrow o this não varia nunca, pois fica associado ao contexto léxico

const pessoa = {
    saudacao: "Bom dia!",
    falar(){ //função dentro do objeto
          console.log(this.saudacao)      //precisa do this para executar, sem ele gera erro
    }
}

pessoa.falar()

const falar = pessoa.falar  //armazenando uma fumction dntro de uma variável
falar() //conflito entre paradigmas: funcional e OO
//pode usar o bind para resolver o conflito

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//o bind é rsponsável por amarrar um determinado objeto 
