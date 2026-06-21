---
id: "1961"
title: "Maximum Ice Cream Bars"
slug: "maximum-ice-cream-bars"
difficulty: "Medium"
tags: ["Array", "Greedy", "Sorting", "Counting Sort"]
language: "java"
date_solved: "2026-06-21"
status: "solved"
submission_id: "2041103314"
---

## Problem

It is a sweltering summer day, and a boy wants to buy some ice cream bars.

At the store, there are `n` ice cream bars. You are given an array `costs` of length `n`, where `costs[i]` is the price of the `ith` ice cream bar in coins. The boy initially has `coins` coins to spend, and he wants to buy as many ice cream bars as possible. 

**Note:** The boy can buy the ice cream bars in any order.

Return _the**maximum** number of ice cream bars the boy can buy with _`coins` _coins._

You must solve the problem by counting sort.

 

**Example 1:**
    
    
    **Input:** costs = [1,3,2,4,1], coins = 7
    **Output:** 4
    **Explanation:** The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.
    

**Example 2:**
    
    
    **Input:** costs = [10,6,8,7,7,8], coins = 5
    **Output:** 0
    **Explanation:** The boy cannot afford any of the ice cream bars.
    

**Example 3:**
    
    
    **Input:** costs = [1,6,3,1,2,5], coins = 20
    **Output:** 6
    **Explanation:** The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.
    

 

**Constraints:**

  * `costs.length == n`
  * `1 <= n <= 105`
  * `1 <= costs[i] <= 105`
  * `1 <= coins <= 108`

## Solution

```java
class Solution {
    public int maxIceCream(int[] costs, int coins) {

        final int MAX_COST = 100000;

        int[] freq = new int[MAX_COST + 1];

        for (int cost : costs) {
            freq[cost]++;
        }

        int answer = 0;

        for (int cost = 1; cost <= MAX_COST; cost++) {

            if (freq[cost] == 0) {
                continue;
            }

            int canBuy = Math.min(freq[cost], coins / cost);

            answer += canBuy;

            coins -= canBuy * cost;
        }

        return answer;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
