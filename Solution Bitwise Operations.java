
import java.util.ArrayList;
import java.util.List;

public class Solution {

    public List<List<Integer>> combinationSum3(int numberOfDigitsInCombination, int targetSum) {

        final int bitMaskEnd = (1 << 9);
        List<List<Integer>> allCombinations = new ArrayList<>();

        for (int bitmask = 1; bitmask <= bitMaskEnd; ++bitmask) {
            if (Integer.bitCount(bitmask) != numberOfDigitsInCombination) {
                continue;
            }

            int sum = 0;
            int bitmaskToProcess = bitmask;
            List<Integer> combination = new ArrayList<>();

            for (int i = 1; i <= 9; ++i) {
                if ((bitmaskToProcess & 1) == 1) {
                    combination.add(i);
                    sum += i;
                    if (combination.size() == numberOfDigitsInCombination && sum == targetSum) {
                        allCombinations.add(combination);
                        break;
                    }
                }
                bitmaskToProcess >>= 1;
            }
        }
        return allCombinations;
    }
}
