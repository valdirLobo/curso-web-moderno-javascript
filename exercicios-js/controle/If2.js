function teste1(num){
    if (num > 7)
        console.log(num) //funcionou por ser uma única sentença de código mas não é aconselhavel não usar {}

    console.log("Final") //não tem nenhuma relação com a sentença if, portanto sempre será executado
}

teste1(6)
teste1(8)

function teste2(num){
    if (num>7); {
        console.log(num)
    }
}

teste2(5)  //imprimiu o 5 devido o ; no bloco, que é uma sentença de código vazia
teste2(9)
//não usar ponto o ; com o bloco if e nem com nenhuma outra estrutura de controle