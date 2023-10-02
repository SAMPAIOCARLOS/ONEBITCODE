let pessoa = {
    nome: 'carlos',
    idade: 18,
    sexo: 'macho',
    rotina: {
        6.00: 'acordar',
        6.30: 'comer alguma coisa',
        7.00: 'treino',
        8.30: 'pos treino',
        9.00: 'estudo',
        12.00: 'almoço',
        13.00: 'serviço',
        18.00: 'faculdade',
        21.30: 'casa',
        22.30: 'dormir',
    },
    comidaFavoritas:  {
        doces: [
            'pudim', 'doce de leite', 'açai', 'chocolate',
        ],
        salgados: [
            'coxinha', 'pastel', 'bomba', 'torta de frango', 'escondidinho', 'lasanha', 'etc...',
        ],
    },
    passaTempo: [
        'jogar Euro Truck',
        'andar de moto (quando eu tinha)',
        'Viajar viagens longas',
        'Comer alguma coisa boa',
    ],
    Familia: {
        parteDePai: {
            tios: [
                'tio odair', 'tio toninho', 'tio fabricio', 'tio rafael',
            ], 
            tias: [
                'tia oslene', 'tia nalda', 'tia oliene', 'tia hozana',
            ],
            primos: [
                'kauan', 'keven', 'nicolas', 'joas', 'junior',
            ],
            primas: [
                'bia', 'nicole',
            ],
            
        },
        parteDemãe: {
            
        }
    }
}


console.log(pessoa.Familia.parteDePai.primos[1])