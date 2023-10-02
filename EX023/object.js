let pessoa = {
    nome:  "carlos",
    altura: 1.78,
        comida: [
            'arroz com carne',
            'farofa de ovo',
            'cuzcus com ovo e café'
        ],
        atividades: {
            acordar: '6:30',
            academia: '7:00',
            banho: '9:00',
            estudos: '9:30 ate 12:00',
            trabalho: '14:00 ate 18:00',
            faculdade: '19:00 ate 21:00'
        },
        setup: {
            perifericos: [
                'mouse','teclado','fone','mousepad'
            ],
            monitor: 'horizonz 21 VA 75hz',
            notebook: [
                'Aspire5', 'intel i7 10 geração', '8gb', '512SSD', 'VA',
            ],

            familia: {
                partePai: {
                    tios: [
                        'odair','james','toninho','rafael',
                    ],
                    tias:[
                        'oslene','oliene','osnalda','hozana',
                    ]
                }
            }

                
            
        }

        
}

console.log(pessoa.setup.notebook[1])

console.log(pessoa.setup.familia.partePai.tias[2])