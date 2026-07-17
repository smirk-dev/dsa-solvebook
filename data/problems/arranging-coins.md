---
id: "441"
title: "Arranging Coins"
slug: "arranging-coins"
difficulty: "Easy"
tags: ["Math", "Binary Search"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071538656"
---

## Problem

You have `n` coins and you want to build a staircase with these coins. The staircase consists of `k` rows where the `ith` row has exactly `i` coins. The last row of the staircase **may be** incomplete.

Given the integer `n`, return _the number of**complete rows** of the staircase you will build_.

 

**Example 1:**
    
    
    **Input:** n = 5
    **Output:** 2
    **Explanation:** Because the 3rd row is incomplete, we return 2.
    

**Example 2:**
    
    
    **Input:** n = 8
    **Output:** 3
    **Explanation:** Because the 4th row is incomplete, we return 3.
    

 

**Constraints:**

  * `1 <= n <= 231 - 1`

## Solution

```java
class Solution {
    public int arrangeCoins(int n) {
        int ans=0,index=1;
        while(n>=index){
            ans++;
            n-=index;
            index++;
        }
        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
