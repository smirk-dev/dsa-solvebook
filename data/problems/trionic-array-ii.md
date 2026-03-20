---
id: "3956"
title: "Trionic Array II"
slug: "trionic-array-ii"
difficulty: "Hard"
tags: ["Array", "Dynamic Programming"]
language: "java"
date_solved: "2026-02-04"
status: "solved"
submission_id: "1908051649"
---

## Problem

You are given an integer array `nums` of length `n`.

A **trionic subarray** is a contiguous subarray `nums[l...r]` (with `0 <= l < r < n`) for which there exist indices `l < p < q < r` such that:

  * `nums[l...p]` is **strictly** increasing,
  * `nums[p...q]` is **strictly** decreasing,
  * `nums[q...r]` is **strictly** increasing.



Return the **maximum** sum of any trionic subarray in `nums`.

 

**Example 1:**

**Input:** nums = [0,-2,-1,-3,0,2,-1]

**Output:** -4

**Explanation:**

Pick `l = 1`, `p = 2`, `q = 3`, `r = 5`:

  * `nums[l...p] = nums[1...2] = [-2, -1]` is strictly increasing (`-2 < -1`).
  * `nums[p...q] = nums[2...3] = [-1, -3]` is strictly decreasing (`-1 > -3`)
  * `nums[q...r] = nums[3...5] = [-3, 0, 2]` is strictly increasing (`-3 < 0 < 2`).
  * Sum = `(-2) + (-1) + (-3) + 0 + 2 = -4`.



**Example 2:**

**Input:** nums = [1,4,2,7]

**Output:** 14

**Explanation:**

Pick `l = 0`, `p = 1`, `q = 2`, `r = 3`:

  * `nums[l...p] = nums[0...1] = [1, 4]` is strictly increasing (`1 < 4`).
  * `nums[p...q] = nums[1...2] = [4, 2]` is strictly decreasing (`4 > 2`).
  * `nums[q...r] = nums[2...3] = [2, 7]` is strictly increasing (`2 < 7`).
  * Sum = `1 + 4 + 2 + 7 = 14`.



 

**Constraints:**

  * `4 <= n = nums.length <= 105`
  * `-109 <= nums[i] <= 109`
  * It is guaranteed that at least one trionic subarray exists.

## Solution

```java
class Solution {
    static class Triple {
        int p, q;
        long sum;
        Triple(int p, int q, long sum){
            this.p = p;
            this.q = q;
            this.sum = sum;
        }
    }
    public List<Triple> decompose(int[] nums){
        int n = nums.length;
        List <Triple> subarrays = new ArrayList<>();

        int l = 0;
        long sum = nums[0];

        for(int i = 1; i < n; i ++){
            // If we fail strict decreasing at boundary i-1 -> i, end the current subarray.
            if(nums[i - 1] <= nums[i]){
                subarrays.add(new Triple(l, i - 1, sum));
                l = i;
                sum = 0;
            }
            sum += nums[i];
        }
        // last subarray
        subarrays.add(new Triple(l, n - 1, sum));
        return subarrays;
    }

    public long maxSumTrionic(int[] nums){
        int n = nums.length;

        long[] maxEndingAt = new long[n];
        for(int i = 0; i < n; i ++){
            maxEndingAt[i] = nums[i];
            if(i > 0 && nums[i - 1] < nums[i]){
                if(maxEndingAt[i - 1] > 0){
                    maxEndingAt[i] += maxEndingAt[i - 1];
                }
            }
        }

        long[] maxStartingAt = new long[n];
        for(int i = n - 1; i >= 0; i --){
            maxStartingAt[i] = nums[i];
            if(i < n - 1 && nums[i] < nums[i + 1]){
                if(maxStartingAt[i + 1] > 0){
                    maxStartingAt[i] += maxStartingAt[i + 1];
                }
            }
        }

        List <Triple> PQS = decompose(nums);
        long ans = Long.MIN_VALUE;

        for(Triple t : PQS){
            int p = t.p;
            int q = t.q;
            long sum = t.sum;

            if(p > 0 && nums[p - 1] < nums[p] &&
               q < n - 1 && nums[q] < nums[q + 1] &&
               p < q){
                long cand = maxEndingAt[p - 1] + sum + maxStartingAt[q + 1];
                if(cand > ans){
                    ans = cand;
                }
            }
        }
        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
