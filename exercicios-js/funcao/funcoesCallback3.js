// exemplo d callback no browser (usando referências do browser)
document.getElementesByTagName("body")[0].onclick = function (e) {
    console.log("O evento ocorreu!")
}