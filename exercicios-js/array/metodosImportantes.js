const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // remove o último elmento do array
console.log(pilotos)

pilotos.push("Verstappen") // add um elemento na última posição do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift("Hamilton") // add um elemento no início do array, no índice zero
console.log(pilotos)

// splice add e remover rlementos
// adicionando
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

//removendo
pilotos.splice(3, 1) //removeu o massa
console.log(pilotos)

// slice --->retorna um novo array
const algunsPilotos1 = pilotos.slice(2) // aqui vai pegar a partir no índice 2 os elemento e faer um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega o índice 1 até o 4 MAS o 4 não entra, não é incluído
console.log(algunsPilotos2)