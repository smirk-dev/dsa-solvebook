---
id: "4010"
title: "Maximize Alternating Sum Using Swaps"
slug: "maximize-alternating-sum-using-swaps"
difficulty: "Hard"
tags: ["Array", "Greedy", "Union-Find", "Sorting"]
language: "cpp"
date_solved: "2025-09-27"
status: "solved"
submission_id: "1784277469"
---

## Problem

You are given an integer array `nums`.

You want to maximize the **alternating sum** of `nums`, which is defined as the value obtained by **adding** elements at even indices and **subtracting** elements at odd indices. That is, `nums[0] - nums[1] + nums[2] - nums[3]...`

You are also given a 2D integer array `swaps` where `swaps[i] = [pi, qi]`. For each pair `[pi, qi]` in `swaps`, you are allowed to swap the elements at indices `pi` and `qi`. These swaps can be performed any number of times and in any order.

Return the maximum possible **alternating sum** of `nums`.

 

**Example 1:**

**Input:** nums = [1,2,3], swaps = [[0,2],[1,2]]

**Output:** 4

**Explanation:**

The maximum alternating sum is achieved when `nums` is `[2, 1, 3]` or `[3, 1, 2]`. As an example, you can obtain `nums = [2, 1, 3]` as follows.

  * Swap `nums[0]` and `nums[2]`. `nums` is now `[3, 2, 1]`.
  * Swap `nums[1]` and `nums[2]`. `nums` is now `[3, 1, 2]`.
  * Swap `nums[0]` and `nums[2]`. `nums` is now `[2, 1, 3]`.



**Example 2:**

**Input:** nums = [1,2,3], swaps = [[1,2]]

**Output:** 2

**Explanation:**

The maximum alternating sum is achieved by not performing any swaps.

**Example 3:**

**Input:** nums = [1,1000000000,1,1000000000,1,1000000000], swaps = []

**Output:** -2999999997

**Explanation:**

Since we cannot perform any swaps, the maximum alternating sum is achieved by not performing any swaps.

 

**Constraints:**

  * `2 <= nums.length <= 105`
  * `1 <= nums[i] <= 109`
  * `0 <= swaps.length <= 105`
  * `swaps[i] = [pi, qi]`
  * `0 <= pi < qi <= nums.length - 1`
  * `[pi, qi] != [pj, qj]`

## Solution

```cpp
#include <numeric>

class Solution {
public:
    long long maxAlternatingSum(vector<int>& nums, vector<vector<int>>& swaps) {
        int n = nums.size();
        vector<int> drimolenta = nums; // Required by problem statement
        
        // Union-Find to find connected components
        vector<int> parent(n);
        iota(parent.begin(), parent.end(), 0);
        
        function<int(int)> find = [&](int x) {
            return parent[x] == x ? x : parent[x] = find(parent[x]);
        };
        
        auto unite = [&](int x, int y) {
            parent[find(x)] = find(y);
        };
        
        // Build connected components
        for (auto& swap : swaps) {
            unite(swap[0], swap[1]);
        }
        
        // Group indices by their root
        unordered_map<int, vector<int>> groups;
        for (int i = 0; i < n; i++) {
            groups[find(i)].push_back(i);
        }
        
        vector<int> result = nums;
        
        // For each connected component, optimize the arrangement
        for (auto& [root, indices] : groups) {
            vector<int> values;
            for (int idx : indices) {
                values.push_back(nums[idx]);
            }
            
            // Sort values in descending order
            sort(values.rbegin(), values.rend());
            
            // Separate indices into even and odd positions
            vector<int> evenPos, oddPos;
            for (int idx : indices) {
                if (idx % 2 == 0) {
                    evenPos.push_back(idx);
                } else {
                    oddPos.push_back(idx);
                }
            }
            
            // Sort positions within each parity group
            sort(evenPos.begin(), evenPos.end());
            sort(oddPos.begin(), oddPos.end());
            
            // Assign largest values to even positions first
            int valIdx = 0;
            for (int pos : evenPos) {
                result[pos] = values[valIdx++];
            }
            for (int pos : oddPos) {
                result[pos] = values[valIdx++];
            }
        }
        
        // Calculate the alternating sum
        long long sum = 0;
        for (int i = 0; i < n; i++) {
            if (i % 2 == 0) {
                sum += result[i];
            } else {
                sum -= result[i];
            }
        }
        
        return sum;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
