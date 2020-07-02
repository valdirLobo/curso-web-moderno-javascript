// o this na função arrow é baseado no contexto no ual a função foi escrita
// na função arrow o this não modifica

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) 
}

new Pessoa
