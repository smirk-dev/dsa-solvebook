---
id: "1446"
title: "Angle Between Hands of a Clock"
slug: "angle-between-hands-of-a-clock"
difficulty: "Medium"
tags: ["Math"]
language: "java"
date_solved: "2026-06-18"
status: "solved"
submission_id: "2036968500"
---

## Problem

Given two numbers, `hour` and `minutes`, return _the smaller angle (in degrees) formed between the_`hour` _and the_`minute` _hand_.

Answers within `10-5` of the actual value will be accepted as correct.

 

**Example 1:**
    
    
    **Input:** hour = 12, minutes = 30
    **Output:** 165
    

**Example 2:**
    
    
    **Input:** hour = 3, minutes = 30
    **Output:** 75
    

**Example 3:**
    
    
    **Input:** hour = 3, minutes = 15
    **Output:** 7.5
    

 

**Constraints:**

  * `1 <= hour <= 12`
  * `0 <= minutes <= 59`

## Solution

```java
class Solution {
    public double angleClock(int hour, int minutes) {
        double x = hour + minutes / 60.0;
        double diff = (11.0 * x) % 12.0;
        return Math.min(diff, 12.0 - diff) * 30.0;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
