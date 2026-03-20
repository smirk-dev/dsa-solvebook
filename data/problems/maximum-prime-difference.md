---
id: "3373"
title: "Maximum Prime Difference"
slug: "maximum-prime-difference"
difficulty: "Medium"
tags: ["Array", "Math", "Number Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830360844"
---

## Problem

You are given an integer array `nums`.

Return an integer that is the **maximum** distance between the **indices** of two (not necessarily different) prime numbers in `nums` _._

 

**Example 1:**

**Input:** nums = [4,2,9,5,3]

**Output:** 3

**Explanation:** `nums[1]`, `nums[3]`, and `nums[4]` are prime. So the answer is `|4 - 1| = 3`.

**Example 2:**

**Input:** nums = [4,8,2,8]

**Output:** 0

**Explanation:** `nums[2]` is prime. Because there is just one prime number, the answer is `|2 - 2| = 0`.

 

**Constraints:**

  * `1 <= nums.length <= 3 * 105`
  * `1 <= nums[i] <= 100`
  * The input is generated such that the number of prime numbers in the `nums` is at least one.

## Solution

```python
class Solution:
    def maximumPrimeDifference(self, nums: List[int]) -> int:
        # Helper to identify primes <= 100
        def is_prime(x):
            if x < 2: return False
            for i in range(2, int(x ** 0.5) + 1):
                if x % i == 0:
                    return False
            return True
        
        # Find indices of prime numbers in nums
        primes = [i for i, val in enumerate(nums) if is_prime(val)]
        # Max distance is between first and last prime index
        return primes[-1] - primes[0]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
