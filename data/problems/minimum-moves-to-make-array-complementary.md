---
id: "1793"
title: "Minimum Moves to Make Array Complementary"
slug: "minimum-moves-to-make-array-complementary"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Prefix Sum"]
language: "java"
date_solved: "2026-05-13"
status: "solved"
submission_id: "2001794237"
---

## Problem

You are given an integer array `nums` of **even** length `n` and an integer `limit`. In one move, you can replace any integer from `nums` with another integer between `1` and `limit`, inclusive.

The array `nums` is **complementary** if for all indices `i` (**0-indexed**), `nums[i] + nums[n - 1 - i]` equals the same number. For example, the array `[1,2,3,4]` is complementary because for all indices `i`, `nums[i] + nums[n - 1 - i] = 5`.

Return the _**minimum** number of moves required to make _`nums` _**complementary**_.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,4,3], limit = 4
    **Output:** 1
    **Explanation:** In 1 move, you can change nums to [1,2,_2_ ,3] (underlined elements are changed).
    nums[0] + nums[3] = 1 + 3 = 4.
    nums[1] + nums[2] = 2 + 2 = 4.
    nums[2] + nums[1] = 2 + 2 = 4.
    nums[3] + nums[0] = 3 + 1 = 4.
    Therefore, nums[i] + nums[n-1-i] = 4 for every i, so nums is complementary.
    

**Example 2:**
    
    
    **Input:** nums = [1,2,2,1], limit = 2
    **Output:** 2
    **Explanation:** In 2 moves, you can change nums to [_2_ ,2,2,_2_]. You cannot change any number to 3 since 3 > limit.
    

**Example 3:**
    
    
    **Input:** nums = [1,2,1,2], limit = 2
    **Output:** 0
    **Explanation:** nums is already complementary.
    

 

**Constraints:**

  * `n == nums.length`
  * `2 <= n <= 105`
  * `1 <= nums[i] <= limit <= 105`
  * `n` is even.

## Solution

```java
class Solution {

    public int minMoves(int[] nums, int limit) {

        int n = nums.length;

        // difference array
        int[] diff = new int[2 * limit + 2];

        for (int i = 0; i < n / 2; i++) {

            int a = nums[i];
            int b = nums[n - 1 - i];

            int low = Math.min(a, b) + 1;
            int high = Math.max(a, b) + limit;

            int sum = a + b;

            // initially all sums need 2 moves
            diff[2] += 2;
            diff[2 * limit + 1] -= 2;

            // one move range
            diff[low] -= 1;
            diff[high + 1] += 1;

            // exact sum needs 0 move
            diff[sum] -= 1;
            diff[sum + 1] += 1;
        }

        int ans = Integer.MAX_VALUE;
        int moves = 0;

        // calculate prefix sum
        for (int target = 2; target <= 2 * limit; target++) {
            moves += diff[target];
            ans = Math.min(ans, moves);
        }

        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
