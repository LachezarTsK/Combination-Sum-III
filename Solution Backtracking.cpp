
#include <vector>
using namespace std;

class Solution {
    
    vector<vector<int>> allCombinations;
    int numberOfDigitsInCombination;
    int targetSum;

public:
    vector<vector<int>> combinationSum3(int numberOfDigitsInCombination, int targetSum) {
        this->numberOfDigitsInCombination = numberOfDigitsInCombination;
        this->targetSum = targetSum;
        vector<int> combination;
        findAllCombinations(combination, 1, 0);
        return allCombinations;
    }
    
private:
    void findAllCombinations(vector<int>& combination, int currentDigit, int currentSum) {
        if (combination.size() == numberOfDigitsInCombination && currentSum == targetSum) {
            allCombinations.push_back(vector<int>(combination));
            return;
        }
        for (int i = currentDigit; i <= 9; ++i) {
            if (combination.size() < numberOfDigitsInCombination && currentSum + i <= targetSum) {
                combination.push_back(i);
                findAllCombinations(combination, ++currentDigit, currentSum + i);
                combination.pop_back();
            }
        }
    }
};
