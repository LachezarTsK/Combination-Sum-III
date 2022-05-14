
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private List<List<Integer>> allCombinations;
    private int numberOfDigitsInCombination;
    private int targetSum;

    public List<List<Integer>> combinationSum3(int numberOfDigitsInCombination, int targetSum) {
        allCombinations = new ArrayList<>();
        this.numberOfDigitsInCombination = numberOfDigitsInCombination;
        this.targetSum = targetSum;
        findAllCombinations(new ArrayList<>(), 1, 0);
        return allCombinations;
    }

    private void findAllCombinations(List<Integer> combination, int currentDigit, int currentSum) {
        if (combination.size() == numberOfDigitsInCombination && currentSum == targetSum) {
            allCombinations.add(new ArrayList<>(combination));
            return;
        }
        for (int i = currentDigit; i <= 9; ++i) {
            if (combination.size() < numberOfDigitsInCombination && currentSum + i <= targetSum) {
                combination.add(i);
                findAllCombinations(combination, ++currentDigit, currentSum + i);
                combination.remove(combination.size() - 1);
            }
        }
    }
}
