class Carro {
    cor: string = ''
    marca: string = ''
    modelo: string = ''
    ano: number = 0
    potencia: number = 0

    constructor(cor: string, marca: string, modelo: string, ano: number, potencia: number) {
        this.cor = cor
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.potencia = potencia
    }
}

const fusca = {
    cor: 'vermelho',
    marca: 'VolksWagen',
    modelo: 'Fusca',
    ano: 1970,
    potencia: 90
}

const gol = {
    cor: 'branco',
    marca: 'VolksWagen',
    modelo: 'Gol',
    ano: 1998,
    potencia: 80
}

console.log(fusca);
console.log(' ');
console.log(gol);