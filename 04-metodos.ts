type TCarro = {
    cor: string
    marca: string
    modelo: string
    ano: number
    potencia: number
    ligado: boolean
    aceleracao: number
}

class Carro {
    cor: string = ''
    marca: string = ''
    modelo: string = ''
    ano: number = 0
    potencia: number = 0

    ligado: boolean
    aceleracao: number

    constructor(carro: { modelo: string, marca: string, cor: string, ano: number, potencia: number }) {
        this.cor = carro.cor
        this.marca = carro.marca
        this.modelo = carro.modelo
        this.ano = carro.ano
        this.potencia = carro.potencia
        this.ligado = false
        this.aceleracao = 0
    }

    ligarOuDesligar():void {
        this.ligado = !this.ligado
    }
    acelerar(rpm: number):void {
        this.aceleracao += rpm
    }
    estadoDoCarro():string {
        return this.ligado ? 'O carro está ligado' : 'O carro está desligado'
    }

}

const novoCarro = {
    modelo: 'Jetta',
    marca: 'VolksWagen',
    cor: 'branco',
    ano: 1998,
    potencia: 80
}

const jetta = new Carro(novoCarro)
//console.log(jetta);
jetta.cor = 'preto'
jetta.ano = 2022

console.log('');

console.log(jetta);

console.log(jetta.estadoDoCarro());
jetta.ligarOuDesligar()
console.log(jetta.estadoDoCarro());
jetta.acelerar(10);
console.log(jetta.aceleracao);
console.log(jetta);