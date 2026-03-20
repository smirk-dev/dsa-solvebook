---
id: "60"
title: "Permutation Sequence"
slug: "permutation-sequence"
difficulty: "Hard"
tags: ["Math", "Recursion"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830308834"
---

## Problem

The set `[1, 2, 3, ..., n]` contains a total of `n!` unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for `n = 3`:

  1. `"123"`
  2. `"132"`
  3. `"213"`
  4. `"231"`
  5. `"312"`
  6. `"321"`



Given `n` and `k`, return the `kth` permutation sequence.

 

**Example 1:**
    
    
    **Input:** n = 3, k = 3
    **Output:** "213"
    

**Example 2:**
    
    
    **Input:** n = 4, k = 9
    **Output:** "2314"
    

**Example 3:**
    
    
    **Input:** n = 3, k = 1
    **Output:** "123"
    

 

**Constraints:**

  * `1 <= n <= 9`
  * `1 <= k <= n!`

## Solution

```python
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        # Precompute factorials
        factorials = [1]
        for i in range(1, n):
            factorials.append(factorials[-1] * i)
        
        # Available numbers
        numbers = list(range(1, n + 1))
        
        # Convert k to 0-indexed
        k -= 1
        
        result = []
        
        # Build the permutation digit by digit
        for i in range(n):
            # How many permutations are there for the remaining (n-i-1) elements?
            # This is (n-i-1)!
            factorial = factorials[n - 1 - i] if n - 1 - i >= 0 else 1
            
            # Which position in the current group?
            index = k // factorial
            
            # Add the number at this position to result
            result.append(str(numbers[index]))
            
            # Remove the used number
            numbers.pop(index)
            
            # Update k for the next iteration
            k %= factorial
        
        return ''.join(result)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
