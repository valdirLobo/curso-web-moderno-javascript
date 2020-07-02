function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2      //condição e
   // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
   const comprarTv32 = trabalho1 != trabalho2       // !=  -->diferente
   const manterSaudavel = !comprarSorvete           // negação lógica --> não comprar sorvete ->operador unário

   return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //cria objeto para retornar todas as constantes
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

