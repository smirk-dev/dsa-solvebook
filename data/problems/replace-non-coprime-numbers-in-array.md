---
id: "2307"
title: "Replace Non-Coprime Numbers in Array"
slug: "replace-non-coprime-numbers-in-array"
difficulty: "Hard"
tags: ["Array", "Math", "Stack", "Number Theory"]
language: "cpp"
date_solved: "2025-09-16"
status: "solved"
submission_id: "1772554194"
---

## Problem

You are given an array of integers `nums`. Perform the following steps:

  1. Find **any** two **adjacent** numbers in `nums` that are **non-coprime**.
  2. If no such numbers are found, **stop** the process.
  3. Otherwise, delete the two numbers and **replace** them with their **LCM (Least Common Multiple)**.
  4. **Repeat** this process as long as you keep finding two adjacent non-coprime numbers.



Return _the**final** modified array._ It can be shown that replacing adjacent non-coprime numbers in **any** arbitrary order will lead to the same result.

The test cases are generated such that the values in the final array are **less than or equal** to `108`.

Two values `x` and `y` are **non-coprime** if `GCD(x, y) > 1` where `GCD(x, y)` is the **Greatest Common Divisor** of `x` and `y`.

 

**Example 1:**
    
    
    **Input:** nums = [6,4,3,2,7,6,2]
    **Output:** [12,7,6]
    **Explanation:** 
    - (6, 4) are non-coprime with LCM(6, 4) = 12. Now, nums = [**_12_** ,3,2,7,6,2].
    - (12, 3) are non-coprime with LCM(12, 3) = 12. Now, nums = [**_12_** ,2,7,6,2].
    - (12, 2) are non-coprime with LCM(12, 2) = 12. Now, nums = [**_12_** ,7,6,2].
    - (6, 2) are non-coprime with LCM(6, 2) = 6. Now, nums = [12,7,_**6**_].
    There are no more adjacent non-coprime numbers in nums.
    Thus, the final modified array is [12,7,6].
    Note that there are other ways to obtain the same resultant array.
    

**Example 2:**
    
    
    **Input:** nums = [2,2,1,1,3,3,3]
    **Output:** [2,1,1,3]
    **Explanation:** 
    - (3, 3) are non-coprime with LCM(3, 3) = 3. Now, nums = [2,2,1,1,_**3**_ ,3].
    - (3, 3) are non-coprime with LCM(3, 3) = 3. Now, nums = [2,2,1,1,_**3**_].
    - (2, 2) are non-coprime with LCM(2, 2) = 2. Now, nums = [_**2**_ ,1,1,3].
    There are no more adjacent non-coprime numbers in nums.
    Thus, the final modified array is [2,1,1,3].
    Note that there are other ways to obtain the same resultant array.
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `1 <= nums[i] <= 105`
  * The test cases are generated such that the values in the final array are **less than or equal** to `108`.

## Solution

```cpp
#include <vector>
#include <numeric>
using namespace std;

class Solution {
public:
    vector<int> replaceNonCoprimes(vector<int>& nums) {
        vector<int> result;
        for (int num : nums) {
            result.push_back(num);
            while (result.size() > 1) {
                int a = result.back();
                int b = result[result.size() - 2];
                int g = gcd(a, b);
                if (g > 1) {
                    result.pop_back();
                    result.pop_back();
                    long long lcm = (long long)a / g * b;
                    result.push_back((int)lcm);
                } else {
                    break;
                }
            }
        }
        return result;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
