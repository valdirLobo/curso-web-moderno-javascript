
const quaseArray = {0:"Rafael", 1:"Ana", 2:"bia"}
console.log(quaseArray) // é o obj

Object.defineProperty(quaseArray, "toString", {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ["Rafale", "Ana", "bia"]
console.log(quaseArray.toString(), meuArray)