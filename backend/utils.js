/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * @param {Array} array 
 * @returns {Array} 
 */
export const shuffleDeck = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};
