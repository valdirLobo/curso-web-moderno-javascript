let num1 = 1
let num2 = 2

num1++ //acrescenta uma unidade ao valor da unidade
console.log(num1)

//prioridade maior
--num1 //subtraindo 1 unidade, fica 1 de novo
console.log(num1)

console.log(++num1 === num2--) //true pq o incremento ocorre primeiro por prioridade e a decrementação ocorre depois da comparação, ou seja está n1->2 e n2>2
console.log(num1 === num2)  //agora num1 -> 2 e num2 ->1
