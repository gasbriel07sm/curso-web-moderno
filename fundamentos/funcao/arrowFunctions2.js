function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ // o this não varia ao utilizar arrows functions
        console.log(this.idade)
    }, 1000)
}

new Pessoa