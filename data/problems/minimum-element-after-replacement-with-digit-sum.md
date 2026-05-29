---
id: "3606"
title: "Minimum Element After Replacement With Digit Sum"
slug: "minimum-element-after-replacement-with-digit-sum"
difficulty: "Easy"
tags: ["Array", "Math"]
language: "java"
date_solved: "2026-05-29"
status: "solved"
submission_id: "2016023508"
---

## Problem

You are given an integer array `nums`.

You replace each element in `nums` with the **sum** of its digits.

Return the **minimum** element in `nums` after all replacements.

 

**Example 1:**

**Input:** nums = [10,12,13,14]

**Output:** 1

**Explanation:**

`nums` becomes `[1, 3, 4, 5]` after all replacements, with minimum element 1.

**Example 2:**

**Input:** nums = [1,2,3,4]

**Output:** 1

**Explanation:**

`nums` becomes `[1, 2, 3, 4]` after all replacements, with minimum element 1.

**Example 3:**

**Input:** nums = [999,19,199]

**Output:** 10

**Explanation:**

`nums` becomes `[27, 10, 19]` after all replacements, with minimum element 10.

 

**Constraints:**

  * `1 <= nums.length <= 100`
  * `1 <= nums[i] <= 104`

## Solution

```java
class Solution {
    public int minElement(int[] nums) {
        int res = 36;
        for (int n : nums)
            res = Math.min(res, n - 9 * ((n/10) + (n/100) + (n/1000) + (n/10000)));
        
        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
