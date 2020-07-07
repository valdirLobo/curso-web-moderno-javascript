// Uma factory retorna uma nova instancia (Objeto)

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}