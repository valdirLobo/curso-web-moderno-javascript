// set não aceita repetição e não e indexido

const times = new Set()
times.add("vasco")
times.add("são paulo").add("palmeiras").add("corinthians")

console.log(times)
console.log(times.size)
console.log(times.has("vasco"))
console.log(times.delete("palmeiras"))
console.log(times.has("palmeiras"))

const nomes = ["Raquel", "Lucas"]
const nomesSet = new Set(nomes)
console.log(nomesSet)