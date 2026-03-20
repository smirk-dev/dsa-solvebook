---
id: "2789"
title: "Counter II"
slug: "counter-ii"
difficulty: "Easy"
tags: []
language: "javascript"
date_solved: "2025-07-21"
status: "solved"
submission_id: "1705718296"
---

## Problem

Write a function `createCounter`. It should accept an initial integer `init`. It should return an object with three functions.

The three functions are:

  * `increment()` increases the current value by 1 and then returns it.
  * `decrement()` reduces the current value by 1 and then returns it.
  * `reset()` sets the current value to `init` and then returns it.



 

**Example 1:**
    
    
    **Input:** init = 5, calls = ["increment","reset","decrement"]
    **Output:** [6,5,4]
    **Explanation:**
    const counter = createCounter(5);
    counter.increment(); // 6
    counter.reset(); // 5
    counter.decrement(); // 4
    

**Example 2:**
    
    
    **Input:** init = 0, calls = ["increment","increment","decrement","reset","reset"]
    **Output:** [1,2,1,0,0]
    **Explanation:**
    const counter = createCounter(0);
    counter.increment(); // 1
    counter.increment(); // 2
    counter.decrement(); // 1
    counter.reset(); // 0
    counter.reset(); // 0
    

 

**Constraints:**

  * `-1000 <= init <= 1000`
  * `0 <= calls.length <= 1000`
  * `calls[i]` is one of "increment", "decrement" and "reset"

## Solution

```javascript
class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    this.presentCount += 1;
    return this.presentCount;
  }

  decrement() {
    this.presentCount -= 1;
    return this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}

var createCounter = function(init) {
  return new Counter(init);
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
