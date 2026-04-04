---
id: "4231"
title: "Smallest Pair With Different Frequencies"
slug: "smallest-pair-with-different-frequencies"
difficulty: "Easy"
tags: ["Array", "Hash Table", "Counting"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965512050"
---

## Problem

You are given an integer array `nums`.

Consider all pairs of **distinct** values `x` and `y` from `nums` such that:

  * `x < y`
  * `x` and `y` have different frequencies in `nums`.



Among all such pairs:

  * Choose the pair with the smallest possible value of `x`.
  * If multiple pairs have the same `x`, choose the one with the smallest possible value of `y`.



Return an integer array `[x, y]`. If no valid pair exists, return `[-1, -1]`.

 

**Example 1:**

**Input:** nums = [1,1,2,2,3,4]

**Output:** [1,3]

**Explanation:**

The smallest value is 1 with a frequency of 2, and the smallest value greater than 1 that has a different frequency from 1 is 3 with a frequency of 1. Thus, the answer is `[1, 3]`.

**Example 2:**

**Input:** nums = [1,5]

**Output:** [-1,-1]

**Explanation:**

Both values have the same frequency, so no valid pair exists. Return `[-1, -1]`.

**Example 3:**

**Input:** nums = [7]

**Output:** [-1,-1]

**Explanation:**

There is only one value in the array, so no valid pair exists. Return `[-1, -1]`.

 

**Constraints:**

  * `1 <= nums.length <= 100`
  * `1 <= nums[i] <= 100`

## Solution

```java
class Solution {
    public int[] minDistinctFreqPair(int[] nums) {
        HashMap<Integer, Integer> freq = new HashMap<>();
        for (int x : nums) 
            freq.put(x, freq.getOrDefault(x, 0) + 1);

        int d = freq.size();
        int[] vals = new int[d];
        int idx = 0;
        for (int v : freq.keySet()) 
            vals[idx++] = v;
        Arrays.sort(vals);

        for (int i = 0; i < d; i++) {
            int x = vals[i];
            for (int j = i + 1; j < d; j++) {
                int y = vals[j];
                if (freq.get(x) != freq.get(y)) 
                    return new int[]{x, y};
            }
        }
        return new int[]{-1, -1};
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
