class Pessoa {
  constructor(nome){
      this.nome = nome
  }

  falar() {
      console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa("João")
p1.falar()


const criarpessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarpessoa ("Lis")
const p3 = criarpessoa ("João")
p2.falar()
p3.falar()