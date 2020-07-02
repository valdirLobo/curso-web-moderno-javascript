const valor = "global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "local"
    minhaFuncao()
}

exec()

//a função carrega consigo o contexto no qual ela foi escrita
// a função vai primeiro procurar dentro do escopo léxico onde ela foi definida e não no seu local de execução, se não achar vai procurar no escopo mais abrangente
