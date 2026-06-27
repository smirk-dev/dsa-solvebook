---
id: "4075"
title: "Count Subarrays With Majority Element II"
slug: "count-subarrays-with-majority-element-ii"
difficulty: "Hard"
tags: ["Array", "Hash Table", "Divide and Conquer", "Segment Tree", "Merge Sort", "Prefix Sum"]
language: "java"
date_solved: "2026-06-27"
status: "solved"
submission_id: "2047381645"
---

## Problem

You are given an integer array `nums` and an integer `target`.

Return the number of **subarrays** of `nums` in which `target` is the **majority element**.

The **majority element** of a subarray is the element that appears **strictly more than half** of the times in that subarray.

 

**Example 1:**

**Input:** nums = [1,2,2,3], target = 2

**Output:** 5

**Explanation:**

Valid subarrays with `target = 2` as the majority element:

  * `nums[1..1] = [2]`
  * `nums[2..2] = [2]`
  * `nums[1..2] = [2,2]`
  * `nums[0..2] = [1,2,2]`
  * `nums[1..3] = [2,2,3]`



So there are 5 such subarrays.

**Example 2:**

**Input:** nums = [1,1,1,1], target = 1

**Output:** 10

**Explanation:**

**​​​​​​​** All 10 subarrays have 1 as the majority element.

**Example 3:**

**Input:** nums = [1,2,3], target = 4

**Output:** 0

**Explanation:**

`target = 4` does not appear in `nums` at all. Therefore, there cannot be any subarray where 4 is the majority element. Hence the answer is 0.

 

**Constraints:**

  * `1 <= nums.length <= 10​​​​​​​5`
  * `1 <= nums[i] <= 10​​​​​​​9`
  * `1 <= target <= 109`

## Solution

```java
class Solution {
    public long countMajoritySubarrays(int[] nums, int target) {
        int n = nums.length;
        long cnt = 0;

        for (int i = 0; i < n; i++) {
            if (nums[i] == target) nums[i] = 1;
            else nums[i] = -1;
        }

        int[] pref = new int[n];
        pref[0] = nums[0];

        for (int i = 1; i < n; i++) {
            pref[i] = pref[i - 1] + nums[i];
        }

        int shift = n;
        int[] freq = new int[2 * n + 1];

        freq[shift] = 1;

        long valid = 0;
        int lastSum = 0;

        for (int i = 0; i < n; i++) {
            if (pref[i] > lastSum) {
                valid += freq[lastSum + shift];
            } else {
                valid -= freq[pref[i] + shift];
            }

            cnt += valid;
            freq[pref[i] + shift]++;
            lastSum = pref[i];
        }

        return cnt;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
