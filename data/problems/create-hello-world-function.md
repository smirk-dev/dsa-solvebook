---
id: "2809"
title: "Create Hello World Function"
slug: "create-hello-world-function"
difficulty: "Easy"
tags: []
language: "javascript"
date_solved: "2025-07-18"
status: "solved"
submission_id: "1701960008"
---

## Problem

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`. 

 

**Example 1:**
    
    
    **Input:** args = []
    **Output:** "Hello World"
    **Explanation:**
    const f = createHelloWorld();
    f(); // "Hello World"
    
    The function returned by createHelloWorld should always return "Hello World".
    

**Example 2:**
    
    
    **Input:** args = [{},null,42]
    **Output:** "Hello World"
    **Explanation:**
    const f = createHelloWorld();
    f({}, null, 42); // "Hello World"
    
    Any arguments could be passed to the function but it should still always return "Hello World".
    

 

**Constraints:**

  * `0 <= args.length <= 10`

## Solution

```javascript
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function() {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
