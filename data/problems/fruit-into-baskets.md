---
id: "940"
title: "Fruit Into Baskets"
slug: "fruit-into-baskets"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Sliding Window"]
language: "cpp"
date_solved: "2025-08-04"
status: "solved"
submission_id: "1723303211"
---

## Problem

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array `fruits` where `fruits[i]` is the **type** of fruit the `ith` tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

  * You only have **two** baskets, and each basket can only hold a **single type** of fruit. There is no limit on the amount of fruit each basket can hold.
  * Starting from any tree of your choice, you must pick **exactly one fruit** from **every** tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
  * Once you reach a tree with fruit that cannot fit in your baskets, you must stop.



Given the integer array `fruits`, return _the**maximum** number of fruits you can pick_.

 

**Example 1:**
    
    
    **Input:** fruits = [_1,2,1_]
    **Output:** 3
    **Explanation:** We can pick from all 3 trees.
    

**Example 2:**
    
    
    **Input:** fruits = [0,_1,2,2_]
    **Output:** 3
    **Explanation:** We can pick from trees [1,2,2].
    If we had started at the first tree, we would only pick from trees [0,1].
    

**Example 3:**
    
    
    **Input:** fruits = [1,_2,3,2,2_]
    **Output:** 4
    **Explanation:** We can pick from trees [2,3,2,2].
    If we had started at the first tree, we would only pick from trees [1,2].
    

 

**Constraints:**

  * `1 <= fruits.length <= 105`
  * `0 <= fruits[i] < fruits.length`

## Solution

```cpp
class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        int last = -1, secondLast = -1;
        int lastCount = 0, curr = 0, maxFruits = 0;

        for (int fruit : fruits) {
            if (fruit == last || fruit == secondLast) {
                curr++;
            } else {
                curr = lastCount + 1;
            }

            if (fruit == last) {
                lastCount++;
            } else {
                lastCount = 1;
                secondLast = last;
                last = fruit;
            }

            maxFruits = max(maxFruits, curr);
        }

        return maxFruits;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
