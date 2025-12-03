// La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
// Cada línea indica qué juguete hay que fabricar y cuántas unidades.

// Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.

// Tienes una lista de objetos con esta forma:

// toy: el nombre del juguete (string)
// quantity: cuántas unidades hay que fabricar (number)
// Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:

// Cada juguete repetido tantas veces como indique quantity
// En el mismo orden en el que aparecen en la lista original
// Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)
// Los elfos a veces se les va la cabeza y como quantity pasan un string, pero eso no es correcto y hay que ignorarlo.

/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts_v1(giftsToProduce) {
    return giftsToProduce
        .filter(item => {
            return typeof item.quantity === 'number' && item.quantity > 0;
        })
        .flatMap(item => {
            return Array.from({ length: item.quantity }, () => item.toy);
        });
}

const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
    { toy: 'train', quantity: 0 }, // no se fabrica
    { toy: 'bear', quantity: -2 }, // tampoco
    { toy: 'game', quantity: '3' }, // ojo, no vale! es un string
    { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []