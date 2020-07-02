const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
//x é o índice do array
for (x in nums) {
    if(x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if(y == 5 ) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}


//não use o break externo
externo:for(a in nums){
    for(b in nums) {
        if( a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}