const frutas = ["Maçã", true, false, 7];


const products = [
    {
        id: 1,
        name: 'pizza',
        description: 'dadawdadaw'
    },
    {
        id: 2,
        name: 'coxinha',
        description: 'dadawdadaw'
    },
    {
        id: 3,
        name: 'curso do guanabara',
        description: 'dadawdadaw'
    },
]

let currentTime = 2000;
for (const value of products) {
    setTimeout(() => {
        document.write(value)
    }, currentTime)

    currentTime += 2000;
}
