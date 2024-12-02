type TCarro = {
    cor: string
    marca: string
    modelo: string
    ano: number
    potencia: number
    ligado: boolean
    aceleracao: number
}

//abstração 
class Carro {
    public cor: string
    private marca: string
    private modelo: string
    private ano: number
    private potencia: number

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
        if(this.ligado){            
            this.desacelerar(0) 
            this.ligado = false
        }else{
            this.ligado = true
        }
    }
    acelerar(rpm: number):void {
        this.aceleracao += rpm
    }
    estadoDoCarro():string {
        return this.ligado ? 'O carro está ligado' : 'O carro está desligado'
    }
    public turboCarro(cv: number){
        this.potencia += cv
    }
    private desacelerar(rpm: number){
        if(this.ligado){
            this.aceleracao = 0
        }
    }

}

const palio = new Carro({
    marca: 'Fiat',
    modelo: 'Palio',
    cor: 'prata',
    ano: 2005,
    potencia: 80
})

console.log(palio);
palio.turboCarro(200);
console.log(palio);
palio.ligarOuDesligar();
console.log(palio); 
palio.acelerar(10);
palio.acelerar(15);
palio.acelerar(20);
console.log(palio);