---
id: "601"
title: "Human Traffic of Stadium"
slug: "human-traffic-of-stadium"
difficulty: "Hard"
tags: ["Database"]
language: "mysql"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830255741"
---

## Problem

Table: `Stadium`
    
    
    +---------------+---------+
    | Column Name   | Type    |
    +---------------+---------+
    | id            | int     |
    | visit_date    | date    |
    | people        | int     |
    +---------------+---------+
    visit_date is the column with unique values for this table.
    Each row of this table contains the visit date and visit id to the stadium with the number of people during the visit.
    As the id increases, the date increases as well.
    

 

Write a solution to display the records with three or more rows with **consecutive** `id`'s, and the number of people is greater than or equal to 100 for each.

Return the result table ordered by `visit_date` in **ascending order**.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Stadium table:
    +------+------------+-----------+
    | id   | visit_date | people    |
    +------+------------+-----------+
    | 1    | 2017-01-01 | 10        |
    | 2    | 2017-01-02 | 109       |
    | 3    | 2017-01-03 | 150       |
    | 4    | 2017-01-04 | 99        |
    | 5    | 2017-01-05 | 145       |
    | 6    | 2017-01-06 | 1455      |
    | 7    | 2017-01-07 | 199       |
    | 8    | 2017-01-09 | 188       |
    +------+------------+-----------+
    **Output:** 
    +------+------------+-----------+
    | id   | visit_date | people    |
    +------+------------+-----------+
    | 5    | 2017-01-05 | 145       |
    | 6    | 2017-01-06 | 1455      |
    | 7    | 2017-01-07 | 199       |
    | 8    | 2017-01-09 | 188       |
    +------+------------+-----------+
    **Explanation:** 
    The four rows with ids 5, 6, 7, and 8 have consecutive ids and each of them has >= 100 people attended. Note that row 8 was included even though the visit_date was not the next day after row 7.
    The rows with ids 2 and 3 are not included because we need at least three consecutive ids.

## Solution

```mysql
# Write your MySQL query statement below
SELECT DISTINCT s1.*
FROM Stadium s1, Stadium s2, Stadium s3
WHERE s1.people >= 100 
  AND s2.people >= 100 
  AND s3.people >= 100
  AND (
    (s1.id = s2.id - 1 AND s2.id = s3.id - 1) OR
    (s1.id = s2.id + 1 AND s1.id = s3.id - 1) OR
    (s1.id = s2.id + 1 AND s1.id = s3.id + 2)
  )
ORDER BY s1.visit_date;
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
