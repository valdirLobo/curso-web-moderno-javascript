// comparando apenas valor
console.log("01)", "1" == 1) // primeiro teste, se string 1 tem o mesmo valor que 1 ---> == igual

//comparando estritamente, valor e tipo
console.log("02)", "1" === 1) // estritamente igual -> === 
//deu false pq um é string e outro é number

// 3 é diferente de 3 --> comparação apenas de valor
//deu false pq são genericamente iguais
console.log ("03)", "3" != 3)

//estritamente diferente
//true pq são diferentes estritamente devido ao tipo
console.log("04)", "3" !== 3)

console.log("05)", 3 < 2)

console.log("06)", 3 > 2)

console.log("07)", 3 <= 2)

console.log("08)", 3 >= 2)

const d1 = new Date (0)
const d2 = new Date (0)
//por ser uma variável de referência de memória não faz diferença se usar o estritamente igual ou igual, pois compara refer^ncia de memória
console.log ("09", d1 === d2)
console.log("10", d1 == d2)
console.log("11)", d1.getTime() === d2.getTime()) //nesse caso é true pq nesse caso está comparando o number

console.log("12)", undefined == null)
console.log("13)", undefined === null) //comparação estritamente igual