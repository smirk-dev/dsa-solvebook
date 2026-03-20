---
id: "826"
title: "Soup Servings"
slug: "soup-servings"
difficulty: "Medium"
tags: ["Math", "Dynamic Programming", "Probability and Statistics"]
language: "cpp"
date_solved: "2025-08-08"
status: "solved"
submission_id: "1727989194"
---

## Problem

You have two soups, **A** and **B** , each starting with `n` mL. On every turn, one of the following four serving operations is chosen _at random_ , each with probability `0.25` **independent** of all previous turns:

  * pour 100 mL from type A and 0 mL from type B
  * pour 75 mL from type A and 25 mL from type B
  * pour 50 mL from type A and 50 mL from type B
  * pour 25 mL from type A and 75 mL from type B



**Note:**

  * There is no operation that pours 0 mL from A and 100 mL from B.
  * The amounts from A and B are poured _simultaneously_ during the turn.
  * If an operation asks you to pour **more than** you have left of a soup, pour all that remains of that soup.



The process stops immediately after any turn in which _one of the soups_ is used up.

Return the probability that A is used up _before_ B, plus half the probability that both soups are used up in the**same turn**. Answers within `10-5` of the actual answer will be accepted.

 

**Example 1:**
    
    
    **Input:** n = 50
    **Output:** 0.62500
    **Explanation:** 
    If we perform either of the first two serving operations, soup A will become empty first.
    If we perform the third operation, A and B will become empty at the same time.
    If we perform the fourth operation, B will become empty first.
    So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.25 * (1 + 1 + 0.5 + 0) = 0.625.
    

**Example 2:**
    
    
    **Input:** n = 100
    **Output:** 0.71875
    **Explanation:** 
    If we perform the first serving operation, soup A will become empty first.
    If we perform the second serving operations, A will become empty on performing operation [1, 2, 3], and both A and B become empty on performing operation 4.
    If we perform the third operation, A will become empty on performing operation [1, 2], and both A and B become empty on performing operation 3.
    If we perform the fourth operation, A will become empty on performing operation 1, and both A and B become empty on performing operation 2.
    So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.71875.
    

 

**Constraints:**

  * `0 <= n <= 109`

## Solution

```cpp
double dp[201][201];
class Solution {
public: 
    double dfs(int A, int B){
        if (A<=0 && B>0) return 1;
        if (A<=0 && B<=0) return 0.5;
        if (A>0 && B<=0) return 0;
        if (dp[A][B]!=-1) return dp[A][B];
        double ans=0.25*(dfs(A-4, B)+dfs(A-3, B-1)+dfs(A-2, B-2)+dfs(A-1, B-3));
        return dp[A][B]=ans;
    }
    double soupServings(int n) {
        if (n>5000) return 1;
        fill(&dp[0][0], &dp[0][0]+201*201, -1);
        int N=ceil(n/25.0);
        return dfs(N, N);
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
