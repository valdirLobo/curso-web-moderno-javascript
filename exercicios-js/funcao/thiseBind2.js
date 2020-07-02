function pessoa(){
    this.idade = 0

     const self = this //substitui o this pelo self
    
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa