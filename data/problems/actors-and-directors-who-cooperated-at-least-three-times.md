---
id: "1136"
title: "Actors and Directors Who Cooperated At Least Three Times"
slug: "actors-and-directors-who-cooperated-at-least-three-times"
difficulty: "Easy"
tags: ["Database"]
language: "pythondata"
date_solved: "2025-08-03"
status: "solved"
submission_id: "1722117114"
---

## Problem

Table: `ActorDirector`
    
    
    +-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | actor_id    | int     |
    | director_id | int     |
    | timestamp   | int     |
    +-------------+---------+
    timestamp is the primary key (column with unique values) for this table.
    

 

Write a solution to find all the pairs `(actor_id, director_id)` where the actor has cooperated with the director at least three times.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    ActorDirector table:
    +-------------+-------------+-------------+
    | actor_id    | director_id | timestamp   |
    +-------------+-------------+-------------+
    | 1           | 1           | 0           |
    | 1           | 1           | 1           |
    | 1           | 1           | 2           |
    | 1           | 2           | 3           |
    | 1           | 2           | 4           |
    | 2           | 1           | 5           |
    | 2           | 1           | 6           |
    +-------------+-------------+-------------+
    **Output:** 
    +-------------+-------------+
    | actor_id    | director_id |
    +-------------+-------------+
    | 1           | 1           |
    +-------------+-------------+
    **Explanation:** The only pair is (1, 1) where they cooperated exactly 3 times.

## Solution

```pythondata
import pandas as pd

def actors_and_directors(actor_director: pd.DataFrame) -> pd.DataFrame:
    return actor_director.groupby(
        by = ['actor_id', 'director_id'],
        as_index = False
    ).count().query('timestamp >= 3') [['actor_id', 'director_id']]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
