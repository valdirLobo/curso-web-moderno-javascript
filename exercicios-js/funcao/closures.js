// Closure é um escopo criado quando uma função é declarada
// esse escopo perrmite a função acessar e manipular variáveis externas á função

//Contexto léxico em ação!
const x = "Global"

function fora (){
    const x = "local"
    function dentro() {
       return x  
    }
    return dentro
}

const minhaFuncao = fora ()
console.log (minhaFuncao())