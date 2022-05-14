
/**
 * @param {number} numberOfDigitsInCombination
 * @param {number} targetSum
 * @return {number[][]}
 */
var combinationSum3 = function (numberOfDigitsInCombination, targetSum) {
    const bitMaskEnd = (1 << 9);
    const allCombinations = [];

    for (let bitmask = 1; bitmask <= bitMaskEnd; ++bitmask) {
        if (countOnesInBinary(bitmask) !== numberOfDigitsInCombination) {
            continue;
        }

        let sum = 0;
        let combination = [];
        let bitmaskToProcess = bitmask;

        for (let i = 1; i <= 9; ++i) {
            if ((bitmaskToProcess & 1) === 1) {
                combination.push(i);
                sum += i;
                if (combination.length === numberOfDigitsInCombination && sum === targetSum) {
                    allCombinations.push(combination);
                    break;
                }
            }
            bitmaskToProcess >>= 1;
        }
    }
    return allCombinations;
};

/**
 * @param {number} integer
 * @return {number}
 */
function countOnesInBinary(integer) {
    let counter = 0;
    while (integer > 0) {
        counter += (integer & 1);
        integer >>= 1;
    }
    return counter;
}
