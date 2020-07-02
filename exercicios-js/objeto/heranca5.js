console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// como são do tipo function todos acima tem o etibuto .prototype

//reverter uma sting
String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}

console.log("Escola Cod3r".reverse())

//para acessar usa o this/ split ---> transforma em array/ reverse--->reverte/ join transforma novamente em string

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(["a", "b", "c"].first())

