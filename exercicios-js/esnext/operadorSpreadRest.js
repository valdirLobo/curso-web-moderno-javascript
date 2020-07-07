// rest ---> juntar
// spread --> espalhar
// usar rest como parametro de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo:true, ...funcionario}
console.log(clone)

//usar spread array
const grupoA = ["João", "Maria", "Glória"]
const grupoFinal = ["Maria", "Rafaela", ...grupoA]
console.log(grupoFinal)
