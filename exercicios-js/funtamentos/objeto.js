const prod1 = {}

prod1.id = 1
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    id: 1,
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        id: 1,
        nome: 'Botão',
    }
}

console.log(JSON.stringify(prod2))

console.log(prod2)