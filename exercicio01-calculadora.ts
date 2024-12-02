class Calculadora {
    private numero1: number
    private numero2: number

    constructor(n1: number, n2: number) {
        this.numero1 = n1
        this.numero2 = n2
    }

    soma(): number {
        return this.numero1 + this.numero2
    }

    subtracao(): number {
        return this.numero1 - this.numero2
    }

    multiplicacao(): number {
        return this.numero1 * this.numero2
    }

    divisao(): number { 
        return this.numero1 / this.numero2
    }
}

const calculadora = new Calculadora(3, 6)
console.log(calculadora.soma())
console.log(calculadora.subtracao())
console.log(calculadora.multiplicacao())
console.log(calculadora.divisao())