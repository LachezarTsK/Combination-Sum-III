
#include <bitset>
#include <vector>
using namespace std;

class Solution {
    
public:
    vector<vector<int>> combinationSum3(int numberOfDigitsInCombination, int targetSum) {
        const int bitMaskEnd = (1 << 9);
        vector<vector<int>> allCombinations;

        for (int bitmask = 1; bitmask <= bitMaskEnd; ++bitmask) {
            if (bitset<32>(bitmask).count() != numberOfDigitsInCombination) {
                continue;
            }

            int sum = 0;
            vector<int> combination;
            int bitmaskToProcess = bitmask;

            for (int i = 1; i <= 9; ++i) {
                if ((bitmaskToProcess & 1) == 1) {
                    combination.push_back(i);
                    sum += i;
                    if (combination.size() == numberOfDigitsInCombination && sum == targetSum) {
                        allCombinations.push_back(combination);
                        break;
                    }
                }
                bitmaskToProcess >>= 1;
            }
        }
        return allCombinations;
    }
};
