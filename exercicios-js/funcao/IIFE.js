//IIFE --> Imediately Invoked Function Expression (imediatamente invocada)
// função autoinvocada
// no caso do browser serve para fugir do escopo global
// usa dentro do () e depois invoca com ()

(function() {
    console.log("Será eecutado na Hora!")
    console.log("Foge do escopo global")
})()