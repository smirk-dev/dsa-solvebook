---
id: "180"
title: "Consecutive Numbers"
slug: "consecutive-numbers"
difficulty: "Medium"
tags: ["Database"]
language: "mysql"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830242204"
---

## Problem

Table: `Logs`
    
    
    +-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | id          | int     |
    | num         | varchar |
    +-------------+---------+
    In SQL, id is the primary key for this table.
    id is an autoincrement column starting from 1.
    

 

Find all numbers that appear at least three times consecutively.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Logs table:
    +----+-----+
    | id | num |
    +----+-----+
    | 1  | 1   |
    | 2  | 1   |
    | 3  | 1   |
    | 4  | 2   |
    | 5  | 1   |
    | 6  | 2   |
    | 7  | 2   |
    +----+-----+
    **Output:** 
    +-----------------+
    | ConsecutiveNums |
    +-----------------+
    | 1               |
    +-----------------+
    **Explanation:** 1 is the only number that appears consecutively for at least three times.

## Solution

```mysql
# Write your MySQL query statement below
SELECT DISTINCT num AS ConsecutiveNums
FROM (
    SELECT 
        num,
        LAG(num, 1) OVER (ORDER BY id) AS prev1,
        LAG(num, 2) OVER (ORDER BY id) AS prev2
    FROM Logs
) AS subquery
WHERE num = prev1 AND num = prev2;
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
