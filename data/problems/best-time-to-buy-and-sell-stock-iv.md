---
id: "188"
title: "Best Time to Buy and Sell Stock IV"
slug: "best-time-to-buy-and-sell-stock-iv"
difficulty: "Hard"
tags: ["Array", "Dynamic Programming"]
language: "python3"
date_solved: "2025-11-09"
status: "solved"
submission_id: "1825188028"
---

## Problem

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `ith` day, and an integer `k`.

Find the maximum profit you can achieve. You may complete at most `k` transactions: i.e. you may buy at most `k` times and sell at most `k` times.

**Note:** You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

**Example 1:**
    
    
    **Input:** k = 2, prices = [2,4,1]
    **Output:** 2
    **Explanation:** Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
    

**Example 2:**
    
    
    **Input:** k = 2, prices = [3,2,6,5,0,3]
    **Output:** 7
    **Explanation:** Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
    

 

**Constraints:**

  * `1 <= k <= 100`
  * `1 <= prices.length <= 1000`
  * `0 <= prices[i] <= 1000`

## Solution

```python
class DoubleLinkListNode:
    def __init__(self, ind, pre = None, next = None):
        self.ind = ind
        self.pre = pre if pre else self
        self.next = next if next else self

class Solution:
    def MinMaxList(self, arr: List[int]) -> List[int]:
        n = len(arr)
        if n == 0:
            return []
        sign = -1
        res = [9999]
        for num in arr:
            if num * sign > res[-1] * sign:
                res[-1] = num
            else:
                res.append(num)
                sign *= -1
        if len(res) & 1:
            res.pop()
        return res
    def maxProfit(self, k: int, prices: List[int]) -> int:
        newP = self.MinMaxList(prices)
        n = len(newP)
        m = n // 2
        res = 0
        for i in range(m):
            res += newP[i*2+1] - newP[i*2]
        if m <= k:
            return res
        head, tail = DoubleLinkListNode(-1), DoubleLinkListNode(-1)
        NodeList = [DoubleLinkListNode(0, head)]
        for i in range(1, n):
            NodeList.append(DoubleLinkListNode(i, NodeList[-1]))
            NodeList[i-1].next = NodeList[i]
        NodeList[n-1].next = tail
        head.next, tail.pre = NodeList[0], NodeList[n-1]
        heap = []
        for i in range(n-1):
            if i&1:
                heappush(heap, [newP[i] - newP[i+1], i, i+1, 0])
            else:
                heappush(heap, [newP[i+1] - newP[i], i, i+1, 1])
        while m > k:
            loss, i, j, t = heappop(heap)
            if NodeList[i] == None or NodeList[j] == None: continue
            m -= 1
            res -= loss
            nodei, nodej = NodeList[i], NodeList[j]
            nodel, noder = nodei.pre, nodej.next
            l, r = nodel.ind, noder.ind
            valL, valR = newP[l], newP[r]
            noder.pre, nodel.next = nodel, noder
            NodeList[i], NodeList[j] = None, None
            if t == 0:
                heappush(heap, [valR - valL, l, r, 1])
            elif l != -1 and r != -1:
                heappush(heap, [valL - valR, l, r, 0])
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
