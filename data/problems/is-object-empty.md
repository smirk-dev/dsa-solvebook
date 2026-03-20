---
id: "2864"
title: "Is Object Empty"
slug: "is-object-empty"
difficulty: "Easy"
tags: []
language: "javascript"
date_solved: "2025-08-15"
status: "solved"
submission_id: "1736503897"
---

## Problem

Given an object or an array, return if it is empty.

  * An empty object contains no key-value pairs.
  * An empty array contains no elements.



You may assume the object or array is the output of `JSON.parse`.

 

**Example 1:**
    
    
    **Input:** obj = {"x": 5, "y": 42}
    **Output:** false
    **Explanation:** The object has 2 key-value pairs so it is not empty.
    

**Example 2:**
    
    
    **Input:** obj = {}
    **Output:** true
    **Explanation:** The object doesn't have any key-value pairs so it is empty.
    

**Example 3:**
    
    
    **Input:** obj = [null, false, 0]
    **Output:** false
    **Explanation:** The array has 3 elements so it is not empty.
    

 

**Constraints:**

  * `obj` is a valid JSON object or array
  * `2 <= JSON.stringify(obj).length <= 105`



 

**Can you solve it in O(1) time?**

## Solution

```javascript
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for (let key in obj)
        return false;
    return true;
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
