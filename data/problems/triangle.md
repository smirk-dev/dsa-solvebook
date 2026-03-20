---
id: "120"
title: "Triangle"
slug: "triangle"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming"]
language: "cpp"
date_solved: "2025-09-25"
status: "solved"
submission_id: "1781979914"
---

## Problem

Given a `triangle` array, return _the minimum path sum from top to bottom_.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.

 

**Example 1:**
    
    
    **Input:** triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
    **Output:** 11
    **Explanation:** The triangle looks like:
       _2_
      _3_ 4
     6 _5_ 7
    4 _1_ 8 3
    The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
    

**Example 2:**
    
    
    **Input:** triangle = [[-10]]
    **Output:** -10
    

 

**Constraints:**

  * `1 <= triangle.length <= 200`
  * `triangle[0].length == 1`
  * `triangle[i].length == triangle[i - 1].length + 1`
  * `-104 <= triangle[i][j] <= 104`



 

**Follow up:** Could you do this using only `O(n)` extra space, where `n` is the total number of rows in the triangle?

## Solution

```cpp
class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        vector<int> dpCurrent(*triangle.rbegin());
        vector<int> dpNew;
        for(int i = triangle.size() - 2; i >= 0; --i) {
            dpNew.assign(triangle[i].size(), 0);
            for(int j = 0; j < triangle[i].size(); ++j) {
                dpNew[j] = triangle[i][j] + min(dpCurrent[j], dpCurrent[j + 1]);
            }
            dpCurrent = dpNew;
            dpNew = vector<int>();
        }
        return dpCurrent[0];
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
