class Carro {
    cor: string = ''
    marca: string = ''
    modelo: string = ''
    ano: number = 0
    potencia: number = 0
}

const fusca = new Carro()
fusca.ano = 1970
fusca.cor = 'vermelho'
fusca.marca = 'VolksWagen'
fusca.modelo = 'Fusca'
fusca.potencia = 90

const gol = new Carro()
gol.ano = 1998
gol.cor = 'branco'
gol.marca = 'VolksWagen'
gol.modelo = 'Gol'
gol.potencia = 80

console.log(fusca);
console.log('||===================||');
console.log(gol);