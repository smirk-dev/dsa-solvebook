---
id: "3963"
title: "Number of Perfect Pairs"
slug: "number-of-perfect-pairs"
difficulty: "Medium"
tags: ["Array", "Math", "Two Pointers", "Sorting"]
language: "cpp"
date_solved: "2025-08-16"
status: "solved"
submission_id: "1737403168"
---

## Problem

You are given an integer array `nums`.

A pair of indices `(i, j)` is called **perfect** if the following conditions are satisfied:

  * `i < j`
  * Let `a = nums[i]`, `b = nums[j]`. Then: 
    * `min(|a - b|, |a + b|) <= min(|a|, |b|)`
    * `max(|a - b|, |a + b|) >= max(|a|, |b|)`



Return the number of **distinct** perfect pairs.

**Note:** The absolute value `|x|` refers to the **non-negative** value of `x`.

 

**Example 1:**

**Input:** nums = [0,1,2,3]

**Output:** 2

**Explanation:**

There are 2 perfect pairs:

`(i, j)` | `(a, b)` | `min(|a − b|, |a + b|)` | `min(|a|, |b|)` | `max(|a − b|, |a + b|)` | `max(|a|, |b|)`  
---|---|---|---|---|---  
(1, 2) | (1, 2) | `min(|1 − 2|, |1 + 2|) = 1` | 1 | `max(|1 − 2|, |1 + 2|) = 3` | 2  
(2, 3) | (2, 3) | `min(|2 − 3|, |2 + 3|) = 1` | 2 | `max(|2 − 3|, |2 + 3|) = 5` | 3  
  
**Example 2:**

**Input:** nums = [-3,2,-1,4]

**Output:** 4

**Explanation:**

There are 4 perfect pairs:

`(i, j)` | `(a, b)` | `min(|a − b|, |a + b|)` | `min(|a|, |b|)` | `max(|a − b|, |a + b|)` | `max(|a|, |b|)`  
---|---|---|---|---|---  
(0, 1) | (-3, 2) | `min(|-3 - 2|, |-3 + 2|) = 1` | 2 | `max(|-3 - 2|, |-3 + 2|) = 5` | 3  
(0, 3) | (-3, 4) | `min(|-3 - 4|, |-3 + 4|) = 1` | 3 | `max(|-3 - 4|, |-3 + 4|) = 7` | 4  
(1, 2) | (2, -1) | `min(|2 - (-1)|, |2 + (-1)|) = 1` | 1 | `max(|2 - (-1)|, |2 + (-1)|) = 3` | 2  
(1, 3) | (2, 4) | `min(|2 - 4|, |2 + 4|) = 2` | 2 | `max(|2 - 4|, |2 + 4|) = 6` | 4  
  
**Example 3:**

**Input:** nums = [1,10,100,1000]

**Output:** 0

**Explanation:**

There are no perfect pairs. Thus, the answer is 0.

 

**Constraints:**

  * `2 <= nums.length <= 105`
  * `-109 <= nums[i] <= 109`

## Solution

```cpp
class Solution {
public:
    long long perfectPairs(vector<int>& nums) {
        std::vector<long long> abs_nums;
        for(int num : nums){
            abs_nums.push_back(std::abs(static_cast<long long>(num)));
        }
        std::sort(abs_nums.begin(), abs_nums.end());
        long long count = 0;
        int j = 0;
        for (int i = 0; i < abs_nums.size(); ++i){
            while(j< abs_nums.size() && abs_nums[j] <= 2 * abs_nums[i]){
                j++;
            }
            count += j - (i +1);
        }
        return count;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
