// for é uma estrutura de controle para quantidades determinadas de repetições
// é possível utilizar o While no lugar do for (mesmo o while sendo mais adequado para repetições indeterinadas)

// exemplo de while com repetições determinadas

let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

// exmplo com for

for(let i = 1; i<= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}