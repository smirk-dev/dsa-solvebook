---
id: "182"
title: "Duplicate Emails"
slug: "duplicate-emails"
difficulty: "Easy"
tags: ["Database"]
language: "mysql"
date_solved: "2026-03-30"
status: "solved"
submission_id: "1963617539"
---

## Problem

Table: `Person`
    
    
    +-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | id          | int     |
    | email       | varchar |
    +-------------+---------+
    id is the primary key (column with unique values) for this table.
    Each row of this table contains an email. The emails will not contain uppercase letters.
    

 

Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Person table:
    +----+---------+
    | id | email   |
    +----+---------+
    | 1  | a@b.com |
    | 2  | c@d.com |
    | 3  | a@b.com |
    +----+---------+
    **Output:** 
    +---------+
    | Email   |
    +---------+
    | a@b.com |
    +---------+
    **Explanation:** a@b.com is repeated two times.

## Solution

```mysql

```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
