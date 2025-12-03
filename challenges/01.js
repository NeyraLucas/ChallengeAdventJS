// Santa has received a list of gifts, but some are defective. A gift is defective if its name contains the # character.

// Help Santa by writing a function that takes a list of gift names and returns a new list that only contains the non-defective gifts.

/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
    const filterItems = gifts.filter((e) => !(e.includes('#')))
    return filterItems;
}


const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []