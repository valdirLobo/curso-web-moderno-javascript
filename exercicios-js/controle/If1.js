//se a condição de if for verdadeiro o bloco será chamado
function soBoaNoticia (nota){
    if (nota >= 7) {
        console.log("Aprovado com " + nota )
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)
// só imprimiu a nota maior ou igual 7

function seForVerdadeEuFalo (valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
