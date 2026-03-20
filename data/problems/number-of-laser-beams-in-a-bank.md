---
id: "2244"
title: "Number of Laser Beams in a Bank"
slug: "number-of-laser-beams-in-a-bank"
difficulty: "Medium"
tags: ["Array", "Math", "String", "Matrix"]
language: "cpp"
date_solved: "2025-10-27"
status: "solved"
submission_id: "1813077897"
---

## Problem

Anti-theft security devices are activated inside a bank. You are given a **0-indexed** binary string array `bank` representing the floor plan of the bank, which is an `m x n` 2D matrix. `bank[i]` represents the `ith` row, consisting of `'0'`s and `'1'`s. `'0'` means the cell is empty, while`'1'` means the cell has a security device.

There is **one** laser beam between any **two** security devices **if both** conditions are met:

  * The two devices are located on two **different rows** : `r1` and `r2`, where `r1 < r2`.
  * For **each** row `i` where `r1 < i < r2`, there are **no security devices** in the `ith` row.



Laser beams are independent, i.e., one beam does not interfere nor join with another.

Return _the total number of laser beams in the bank_.

 

**Example 1:**
    
    
    **Input:** bank = ["011001","000000","010100","001000"]
    **Output:** 8
    **Explanation:** Between each of the following device pairs, there is one beam. In total, there are 8 beams:
     * bank[0][1] -- bank[2][1]
     * bank[0][1] -- bank[2][3]
     * bank[0][2] -- bank[2][1]
     * bank[0][2] -- bank[2][3]
     * bank[0][5] -- bank[2][1]
     * bank[0][5] -- bank[2][3]
     * bank[2][1] -- bank[3][2]
     * bank[2][3] -- bank[3][2]
    Note that there is no beam between any device on the 0th row with any on the 3rd row.
    This is because the 2nd row contains security devices, which breaks the second condition.
    

**Example 2:**
    
    
    **Input:** bank = ["000","111","000"]
    **Output:** 0
    **Explanation:** There does not exist two devices located on two different rows.
    

 

**Constraints:**

  * `m == bank.length`
  * `n == bank[i].length`
  * `1 <= m, n <= 500`
  * `bank[i][j]` is either `'0'` or `'1'`.

## Solution

```cpp
class Solution {
public:
    int numberOfBeams(vector<string>& bank) {
        /*
         * ULTRA-OPTIMIZED ALGORITHM: Single-Pass Beam Calculation
         * -------------------------------------------------------
         * APPROACH:
         * Count devices ('1's) in each row, multiply consecutive non-zero counts
         * 
         * KEY OPTIMIZATIONS:
         * 1. Use long long for all vars (faster arithmetic on modern CPUs)
         * 2. Compact increment syntax (reduces instruction overhead)
         * 3. Single loop per row (minimal cache misses)
         * 4. Skip empty rows immediately (early continue)
         * 
         * COMPLEXITY:
         * Time:  O(m*n) - single pass through all cells
         * Space: O(1) - only 3 integer variables
         */
        
        long long ans = 0;    // Total beams accumulator
        long long prev = 0;   // Device count from last non-empty row
        
        // Process each floor row
        for (const string& row : bank) {
            long long cnt = 0;  // Current row device count
            
            // Count devices in current row
            for (char ch : row) {
                if (ch == '1') ++cnt;
            }
            
            // Skip rows with no devices
            if (cnt == 0) continue;
            
            // Calculate beams: each device in current row connects
            // to each device in previous non-empty row
            ans += prev * cnt;
            
            // Update previous count for next iteration
            prev = cnt;
        }
        
        return (int)ans;  // Cast to int for return type
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
