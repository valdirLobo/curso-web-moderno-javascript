console.log (7/0) //resulta tipo infinito

console.log("10"/2) //em muitas linguagens não daria certo pq o 10 está como uma string mas no JS
                     //funciona e dar resultado 5
// diferente do que ocorre:
console.log("3" + 2) //nesse caso não vai somar e sim concatenar pq aqui a string terá preferência
// isso ocorre pq o símbolo + faz sentido no mundo da string (concatena)
console.log("3" - 2) // dar ceto pq o símbolo - não faz sentido no mundo das strings

 console.log ("Show!"*2)   //gera NaN : note a number

 console.log (0.1 + 0.7)   //não dar 0.8 , não gera a precisão por conta da especificação seguida   
// console.log (10.toString())  --> não funcina igual as ""  

console.log ((10.345).toFixed(2))      
