---
id: "1402"
title: "Count Square Submatrices with All Ones"
slug: "count-square-submatrices-with-all-ones"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming", "Matrix"]
language: "cpp"
date_solved: "2025-08-20"
status: "solved"
submission_id: "1742329556"
---

## Problem

Given a `m * n` matrix of ones and zeros, return how many **square** submatrices have all ones.

 

**Example 1:**
    
    
    **Input:** matrix =
    [
      [0,1,1,1],
      [1,1,1,1],
      [0,1,1,1]
    ]
    **Output:** 15
    **Explanation:** 
    There are **10** squares of side 1.
    There are **4** squares of side 2.
    There is  **1** square of side 3.
    Total number of squares = 10 + 4 + 1 = **15**.
    

**Example 2:**
    
    
    **Input:** matrix = 
    [
      [1,0,1],
      [1,1,0],
      [1,1,0]
    ]
    **Output:** 7
    **Explanation:** 
    There are **6** squares of side 1.  
    There is **1** square of side 2. 
    Total number of squares = 6 + 1 = **7**.
    

 

**Constraints:**

  * `1 <= arr.length <= 300`
  * `1 <= arr[0].length <= 300`
  * `0 <= arr[i][j] <= 1`

## Solution

```cpp
class Solution {
public:
    int countSquares(vector<vector<int>>& matrix) {
        int m = matrix.size();
        if (m == 0) return 0;
        int n = matrix[0].size();
        int res = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 1 && i > 0 && j > 0) {
                    matrix[i][j] = min({matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]}) + 1;
                }
                res += matrix[i][j];
            }
        }
        return res;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
