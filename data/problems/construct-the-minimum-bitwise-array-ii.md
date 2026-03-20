---
id: "3611"
title: "Construct the Minimum Bitwise Array II"
slug: "construct-the-minimum-bitwise-array-ii"
difficulty: "Medium"
tags: ["Array", "Bit Manipulation"]
language: "java"
date_solved: "2026-01-21"
status: "solved"
submission_id: "1891719418"
---

## Problem

You are given an array `nums` consisting of `n` prime integers.

You need to construct an array `ans` of length `n`, such that, for each index `i`, the bitwise `OR` of `ans[i]` and `ans[i] + 1` is equal to `nums[i]`, i.e. `ans[i] OR (ans[i] + 1) == nums[i]`.

Additionally, you must **minimize** each value of `ans[i]` in the resulting array.

If it is _not possible_ to find such a value for `ans[i]` that satisfies the **condition** , then set `ans[i] = -1`.

 

**Example 1:**

**Input:** nums = [2,3,5,7]

**Output:** [-1,1,4,3]

**Explanation:**

  * For `i = 0`, as there is no value for `ans[0]` that satisfies `ans[0] OR (ans[0] + 1) = 2`, so `ans[0] = -1`.
  * For `i = 1`, the smallest `ans[1]` that satisfies `ans[1] OR (ans[1] + 1) = 3` is `1`, because `1 OR (1 + 1) = 3`.
  * For `i = 2`, the smallest `ans[2]` that satisfies `ans[2] OR (ans[2] + 1) = 5` is `4`, because `4 OR (4 + 1) = 5`.
  * For `i = 3`, the smallest `ans[3]` that satisfies `ans[3] OR (ans[3] + 1) = 7` is `3`, because `3 OR (3 + 1) = 7`.



**Example 2:**

**Input:** nums = [11,13,31]

**Output:** [9,12,15]

**Explanation:**

  * For `i = 0`, the smallest `ans[0]` that satisfies `ans[0] OR (ans[0] + 1) = 11` is `9`, because `9 OR (9 + 1) = 11`.
  * For `i = 1`, the smallest `ans[1]` that satisfies `ans[1] OR (ans[1] + 1) = 13` is `12`, because `12 OR (12 + 1) = 13`.
  * For `i = 2`, the smallest `ans[2]` that satisfies `ans[2] OR (ans[2] + 1) = 31` is `15`, because `15 OR (15 + 1) = 31`.



 

**Constraints:**

  * `1 <= nums.length <= 100`
  * `2 <= nums[i] <= 109`
  * `nums[i]` is a prime number.

## Solution

```java
class Solution {
    public int[] minBitwiseArray(List<Integer> nums) {
        int ans[] = new int[nums.size()];
        for(int i = 0; i < nums.size(); i++) {
            int n = nums.get(i);
            if(n != 2) ans[i] = n - ((n + 1) & (-n - 1)) / 2;
            else ans[i] = -1;
        }  
        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
