const imprimirResultado = function (nota){      //mAth.floor ->arredonda pra menos
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de honra")
            break //break causa a sáida do bloco associado ao swicth
         case 8:
         case 7:
             console.log("Aprovado")
             break
        case 6:
        case 5:
        case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("reprovado")     
            break
        default:
            console.log("Nota inválida")                   
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

//swicth é uma seleção múltipla
//swicth não uma expressão relacional, que retorna verdadeiro ou falso
//swicth por padrão usa o break para que ele possa executar um dos case e sair e com isso, não executar automaticamente todos que vem abaixo
