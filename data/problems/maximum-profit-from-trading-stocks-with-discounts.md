---
id: "3854"
title: "Maximum Profit from Trading Stocks with Discounts"
slug: "maximum-profit-from-trading-stocks-with-discounts"
difficulty: "Hard"
tags: ["Array", "Dynamic Programming", "Tree", "Depth-First Search"]
language: "python3"
date_solved: "2025-12-16"
status: "solved"
submission_id: "1857045086"
---

## Problem

You are given an integer `n`, representing the number of employees in a company. Each employee is assigned a unique ID from 1 to `n`, and employee 1 is the CEO, is the direct or indirect boss of every employee. You are given two **1-based** integer arrays, `present` and `future`, each of length `n`, where:

  * `present[i]` represents the **current** price at which the `ith` employee can buy a stock today.
  * `future[i]` represents the **expected** price at which the `ith` employee can sell the stock tomorrow.



The company's hierarchy is represented by a 2D integer array `hierarchy`, where `hierarchy[i] = [ui, vi]` means that employee `ui` is the direct boss of employee `vi`.

Additionally, you have an integer `budget` representing the total funds available for investment.

However, the company has a discount policy: if an employee's direct boss purchases their own stock, then the employee can buy their stock at **half** the original price (`floor(present[v] / 2)`).

Return the **maximum** profit that can be achieved without exceeding the given budget.

**Note:**

  * You may buy each stock at most **once**.
  * You **cannot** use any profit earned from future stock prices to fund additional investments and must buy only from `budget`.



 

**Example 1:**

**Input:** n = 2, present = [1,2], future = [4,3], hierarchy = [[1,2]], budget = 3

**Output:** 5

**Explanation:**

  * Employee 1 buys the stock at price 1 and earns a profit of `4 - 1 = 3`.
  * Since Employee 1 is the direct boss of Employee 2, Employee 2 gets a discounted price of `floor(2 / 2) = 1`.
  * Employee 2 buys the stock at price 1 and earns a profit of `3 - 1 = 2`.
  * The total buying cost is `1 + 1 = 2 <= budget`. Thus, the maximum total profit achieved is `3 + 2 = 5`.



**Example 2:**

**Input:** n = 2, present = [3,4], future = [5,8], hierarchy = [[1,2]], budget = 4

**Output:** 4

**Explanation:**

  * Employee 2 buys the stock at price 4 and earns a profit of `8 - 4 = 4`.
  * Since both employees cannot buy together, the maximum profit is 4.



**Example 3:**

**Input:** n = 3, present = [4,6,8], future = [7,9,11], hierarchy = [[1,2],[1,3]], budget = 10

**Output:** 10

**Explanation:**

  * Employee 1 buys the stock at price 4 and earns a profit of `7 - 4 = 3`.
  * Employee 3 would get a discounted price of `floor(8 / 2) = 4` and earns a profit of `11 - 4 = 7`.
  * Employee 1 and Employee 3 buy their stocks at a total cost of `4 + 4 = 8 <= budget`. Thus, the maximum total profit achieved is `3 + 7 = 10`.



**Example 4:**

**Input:** n = 3, present = [5,2,3], future = [8,5,6], hierarchy = [[1,2],[2,3]], budget = 7

**Output:** 12

**Explanation:**

  * Employee 1 buys the stock at price 5 and earns a profit of `8 - 5 = 3`.
  * Employee 2 would get a discounted price of `floor(2 / 2) = 1` and earns a profit of `5 - 1 = 4`.
  * Employee 3 would get a discounted price of `floor(3 / 2) = 1` and earns a profit of `6 - 1 = 5`.
  * The total cost becomes `5 + 1 + 1 = 7 <= budget`. Thus, the maximum total profit achieved is `3 + 4 + 5 = 12`.



 

**Constraints:**

  * `1 <= n <= 160`
  * `present.length, future.length == n`
  * `1 <= present[i], future[i] <= 50`
  * `hierarchy.length == n - 1`
  * `hierarchy[i] == [ui, vi]`
  * `1 <= ui, vi <= n`
  * `ui != vi`
  * `1 <= budget <= 160`
  * There are no duplicate edges.
  * Employee 1 is the direct or indirect boss of every employee.
  * The input graph `hierarchy `is **guaranteed** to have no cycles.

## Solution

```python
class Solution:
    def maxProfit(self, n: int, present: List[int], future: List[int], hierarchy: List[List[int]], budget: int) -> int:
        adj_list = defaultdict(list)
        for h in hierarchy:
            adj_list[h[0] - 1].append(h[1] - 1)
        
        @lru_cache(None)
        def dfs(employee, has_discount):
            cost = present[employee] // 2 if has_discount else present[employee]
            profit = future[employee] - cost
            
            buy_current = {cost: profit} if cost <= budget else {}
            skip_current = {0: 0}
            
            for child in adj_list[employee]:
                child_with_discount = dfs(child, True) # Do something
                child_no_discount = dfs(child, False) # Do nothing
                
                new_buy = {}
                for spent, prof in buy_current.items(): # Do something, but the current stock
                    for child_spent, child_prof in child_with_discount.items():
                        total_spent = spent + child_spent
                        if total_spent <= budget:
                            total_prof = prof + child_prof
                            if total_spent not in new_buy or new_buy[total_spent] < total_prof:
                                new_buy[total_spent] = total_prof
                buy_current = new_buy # This is mandatory because you need to check 
                                      # all possible combinations of picking children results. 
                                      # For example if the given graph is 1 -> 2, and 1 -> 3, 
                                      # it might be correct to either pick the path from 1 to 2, 
                                      # the path 1 to 3, or both paths if there is still budget left. 
                                      # Same goes for a skipping action.
                
                new_skip = {}
                for spent, prof in skip_current.items(): # Do nothing, skip the current stock
                    for child_spent, child_prof in child_no_discount.items():
                        total_spent = spent + child_spent
                        if total_spent <= budget:
                            total_prof = prof + child_prof
                            if total_spent not in new_skip or new_skip[total_spent] < total_prof:
                                new_skip[total_spent] = total_prof
                skip_current = new_skip
            
            result = {} # Merge the results of doing something and doing nothing at node employee
            for spent, prof in buy_current.items():
                if spent not in result or result[spent] < prof:
                    result[spent] = prof
            for spent, prof in skip_current.items():
                if spent not in result or result[spent] < prof:
                    result[spent] = prof
            
            return result
        
        result = dfs(0, False)
        return max(result.values()) if result else 0
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
