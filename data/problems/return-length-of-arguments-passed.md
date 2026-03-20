---
id: "2820"
title: "Return Length of Arguments Passed"
slug: "return-length-of-arguments-passed"
difficulty: "Easy"
tags: []
language: "javascript"
date_solved: "2025-07-26"
status: "solved"
submission_id: "1712235912"
---

## Problem

Write a function `argumentsLength` that returns the count of arguments passed to it. 

 

**Example 1:**
    
    
    **Input:** args = [5]
    **Output:** 1
    **Explanation:**
    argumentsLength(5); // 1
    
    One value was passed to the function so it should return 1.
    

**Example 2:**
    
    
    **Input:** args = [{}, null, "3"]
    **Output:** 3
    **Explanation:** 
    argumentsLength({}, null, "3"); // 3
    
    Three values were passed to the function so it should return 3.
    

 

**Constraints:**

  * `args` is a valid JSON array
  * `0 <= args.length <= 100`

## Solution

```javascript
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
