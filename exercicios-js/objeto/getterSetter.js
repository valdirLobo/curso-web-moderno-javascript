const sequencia = {
    _valor:1, //convenção --> o _ demonstra ser prescindível que essa variável seja acessada apnas internamente
    get valor() {return this._valor++},
    set valor(valor) {this._valor = valor}
}

console.log(sequencia.valor, sequencia.valor)