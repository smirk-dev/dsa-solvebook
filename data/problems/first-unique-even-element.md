---
id: "4252"
title: "First Unique Even Element"
slug: "first-unique-even-element"
difficulty: "Easy"
tags: ["Array", "Hash Table", "Counting"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965510781"
---

## Problem

You are given an integer array `nums`.

Return an integer denoting the first **even** integer (earliest by array index) that appears **exactly** once in `nums`. If no such integer exists, return -1.

An integer `x` is considered **even** if it is divisible by 2.

 

**Example 1:**

**Input:** nums = [3,4,2,5,4,6]

**Output:** 2

**Explanation:**

Both 2 and 6 are even and they appear exactly once. Since 2 occurs first in the array, the answer is 2.

**Example 2:**

**Input:** nums = [4,4]

**Output:** -1

**Explanation:**

No even integer appears exactly once, so return -1.

 

**Constraints:**

  * `1 <= nums.length <= 100`
  * `1 <= nums[i] <= 100`

## Solution

```java
import java.util.*;

class Solution {
    public int firstUniqueEven(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int num : nums){
            if(num % 2 == 0){
                map.put(num, map.getOrDefault(num, 0) + 1);
            }
        }

        for(int num : nums){
            if(num % 2 == 0 && map.get(num) == 1){
                return num;
            }
        }

        return -1;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
