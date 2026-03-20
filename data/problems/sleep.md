---
id: "2733"
title: "Sleep"
slug: "sleep"
difficulty: "Easy"
tags: []
language: "javascript"
date_solved: "2025-08-06"
status: "solved"
submission_id: "1725798131"
---

## Problem

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.

**Note** that _minor_ deviation from `millis` in the actual sleep duration is acceptable.

 

**Example 1:**
    
    
    **Input:** millis = 100
    **Output:** 100
    **Explanation:** It should return a promise that resolves after 100ms.
    let t = Date.now();
    sleep(100).then(() => {
      console.log(Date.now() - t); // 100
    });
    

**Example 2:**
    
    
    **Input:** millis = 200
    **Output:** 200
    **Explanation:** It should return a promise that resolves after 200ms.
    

 

**Constraints:**

  * `1 <= millis <= 1000`

## Solution

```javascript
/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
