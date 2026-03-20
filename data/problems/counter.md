---
id: "2732"
title: "Counter"
slug: "counter"
difficulty: "Easy"
tags: []
language: "javascript"
date_solved: "2025-07-19"
status: "solved"
submission_id: "1703063099"
---

## Problem

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

 

**Example 1:**
    
    
    **Input:** 
    n = 10 
    ["call","call","call"]
    **Output:** [10,11,12]
    **Explanation:** counter() = 10 // The first time counter() is called, it returns n.
    counter() = 11 // Returns 1 more than the previous time.
    counter() = 12 // Returns 1 more than the previous time.
    

**Example 2:**
    
    
    **Input:** 
    n = -2
    ["call","call","call","call","call"]
    **Output:** [-2,-1,0,1,2]
    **Explanation:** counter() initially returns -2. Then increases after each sebsequent call.
    

 

**Constraints:**

  * `-1000 <= n <= 1000`
  * `0 <= calls.length <= 1000`
  * `calls[i] === "call"`

## Solution

```javascript
function createCounter(start) {
  let count = start;
  return function() {
    return count++;
  }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
