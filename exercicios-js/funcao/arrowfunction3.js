//função normal
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //associou o comparaccomthis ao obj a partir da função bind
// a partir de agora sempre que chamar o compararcomthis vai para o obj e não para o escopo global
comparaComThis(global)
comparaComThis(obj)

//função arrow
let comparaccomthisArrow = param => console.log(this === param)
comparaccomthisArrow(global)
comparaccomthisArrow(module.exports)

//bind dento de uma função arrow para ver se de fato consegue mudr a referência do this
comparaccomthisArrow = comparaccomthisArrow.bind(obj) //obj da linha 8
comparaccomthisArrow(obj) //false, arrow function é mais forte que o bind, com isso o this não muda para o obj
comparaccomthisArrow(module.exports)

//mesmo usando o bind não se consgue mudar o this d uma função arrow
