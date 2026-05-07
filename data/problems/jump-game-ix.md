---
id: "3981"
title: "Jump Game IX"
slug: "jump-game-ix"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming"]
language: "java"
date_solved: "2026-05-07"
status: "solved"
submission_id: "1997241958"
---

## Problem

You are given an integer array `nums`.

From any index `i`, you can jump to another index `j` under the following rules:

  * Jump to index `j` where `j > i` is allowed only if `nums[j] < nums[i]`.
  * Jump to index `j` where `j < i` is allowed only if `nums[j] > nums[i]`.



For each index `i`, find the **maximum** **value** in `nums` that can be reached by following **any** sequence of valid jumps starting at `i`.

Return an array `ans` where `ans[i]` is the **maximum** **value** reachable starting from index `i`.

 

**Example 1:**

**Input:** nums = [2,1,3]

**Output:** [2,2,3]

**Explanation:**

  * For `i = 0`: No jump increases the value.
  * For `i = 1`: Jump to `j = 0` as `nums[j] = 2` is greater than `nums[i]`.
  * For `i = 2`: Since `nums[2] = 3` is the maximum value in `nums`, no jump increases the value.



Thus, `ans = [2, 2, 3]`.




**Example 2:**

**Input:** nums = [2,3,1]

**Output:** [3,3,3]

**Explanation:**

  * For `i = 0`: Jump forward to `j = 2` as `nums[j] = 1` is less than `nums[i] = 2`, then from `i = 2` jump to `j = 1` as `nums[j] = 3` is greater than `nums[2]`.
  * For `i = 1`: Since `nums[1] = 3` is the maximum value in `nums`, no jump increases the value.
  * For `i = 2`: Jump to `j = 1` as `nums[j] = 3` is greater than `nums[2] = 1`.



Thus, `ans = [3, 3, 3]`.

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `1 <= nums[i] <= 109​​​​​​​`

## Solution

```java
class Solution {
    public int[] maxValue(int[] nums) {
        int n = nums.length;

        int[] prefMax = new int[n];
        int[] suffMin = new int[n];

        prefMax[0] = nums[0];
        for (int i = 1; i < n; i++) {
            prefMax[i] = Math.max(prefMax[i - 1], nums[i]);
        }

        suffMin[n - 1] = nums[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            suffMin[i] = Math.min(suffMin[i + 1], nums[i]);
        }

        int[] ans = new int[n];

        int start = 0;
        int segmentMax = nums[0];

        for (int i = 0; i < n; i++) {
            segmentMax = Math.max(segmentMax, nums[i]);

            boolean cut = (i == n - 1) || (prefMax[i] <= suffMin[i + 1]);

            if (cut) {
                for (int j = start; j <= i; j++) {
                    ans[j] = segmentMax;
                }

                start = i + 1;

                if (start < n) {
                    segmentMax = nums[start];
                }
            }
        }

        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
