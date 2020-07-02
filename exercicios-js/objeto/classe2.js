// herança na classe
class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissao = "professor"){
        super(sobrenome) //chama a função construtora de avo (super classe)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor() {
        super("Silva")
    }
}

const Filho = new filho
console.log(Filho)
