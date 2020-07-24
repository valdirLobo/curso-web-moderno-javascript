const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

const usuarioApi = require('./api/usuario')
const produtoAPi = require('./api/produto')

produtoAPi(app, 'com param')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao('Junior'))

app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}!`)
})

/*
app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte) {
        corpo += parte
    })
    req.on('end', function() {
        res.send(corpo)
    })
})*/

app.post('/corpo', (req, res) => {
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa',(req, res, next) => {
    console.log('Durante...')
    res.json({
        data: [
            {id: 7, nome: 'Ana', position: 1},
            {id: 34, nome: 'Bia', position: 2},
            {id: 73, nome: 'carlos', position: 3},
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
    /*
    res.json([
        {id: 7, nome: 'Ana', position: 1},
        {id: 34, nome: 'Bia', position: 2},
        {id: 73, nome: 'carlos', position: 3},
    ])
    */
    /*
    res.json({
        name: 'Ipad 32g',
        price: 1899.00,
        discont: 0.12
    })
    */
    //res.send('<b>Estou bem!!!</b><br><br>Pode retornar html')
})

app.use('/opa', (req, res, next) => {
    console.log('Depois...')
    next()
})

app.listen(3000, () => {
    console.log('backend executando...')
})