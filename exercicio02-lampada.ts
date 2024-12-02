class Lampada {
    private potencia: number
    private estado: boolean

    constructor(watts: number, estado: boolean) {
        this.potencia = watts
        this.estado = false
    }

    ligar(): void {
        this.estado = true
    }

    desligar(): void {
        this.estado = false
    }

    medirPotencia(): number {
        return this.potencia
    }
}

const lampada = new Lampada(50, false);

console.log(lampada.medirPotencia());  
console.log(lampada.ligar());
console.log(lampada);
console.log(lampada.desligar());
console.log(lampada);