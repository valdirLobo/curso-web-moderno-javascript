const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa') //cuidado!!!por ser uma linguagem fracamente tipaa aparece como reprovado mas é uma string e não uma nota, deveria aparecer Error

