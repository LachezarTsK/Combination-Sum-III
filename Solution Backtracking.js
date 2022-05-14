
/**
 * @param {number} numberOfDigitsInCombination
 * @param {number} targetSum
 * @return {number[][]}
 */
var combinationSum3 = function (numberOfDigitsInCombination, targetSum) {
    this.numberOfDigitsInCombination = numberOfDigitsInCombination;
    this.targetSum = targetSum;
    this.allCombinations = [];
    findAllCombinations([], 1, 0);
    return this.allCombinations;
};

/**
 * @param {number[]} combination
 * @param {number} currentDigit
 * @param {number} currentSum
 * @return {number[][]}
 */
function findAllCombinations(combination, currentDigit, currentSum) {
    if (combination.length === this.numberOfDigitsInCombination && currentSum === this.targetSum) {
        this.allCombinations.push(Array.from(combination));
        return;
    }
    for (let i = currentDigit; i <= 9; ++i) {
        if (combination.length < this.numberOfDigitsInCombination && currentSum + i <= this.targetSum) {
            combination.push(i);
            findAllCombinations(combination, ++currentDigit, currentSum + i);
            combination.pop();
        }
    }
}
