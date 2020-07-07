const porta = 3003

const express = require("express")
const app = express()

/*
app.get("/produtos", (req, res, next) => {
    console.log('Middleware...')
    next()
})
*/

const bodyParser = require("body-parser")
const bancoDeDados = require("./bancoDeDados.js")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos())  //converter para Json automaticamente
})

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post("/produtos", (req, res, next)=> {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar um JSON
})

app.put("/produtos/:id", (req, res, nxt)=> {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar um JSON
})

app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) //Json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
