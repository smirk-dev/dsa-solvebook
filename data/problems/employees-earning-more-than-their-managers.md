---
id: "181"
title: "Employees Earning More Than Their Managers"
slug: "employees-earning-more-than-their-managers"
difficulty: "Easy"
tags: ["Database"]
language: "mysql"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829431727"
---

## Problem

Table: `Employee`
    
    
    +-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | id          | int     |
    | name        | varchar |
    | salary      | int     |
    | managerId   | int     |
    +-------------+---------+
    id is the primary key (column with unique values) for this table.
    Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.
    

 

Write a solution to find the employees who earn more than their managers.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Employee table:
    +----+-------+--------+-----------+
    | id | name  | salary | managerId |
    +----+-------+--------+-----------+
    | 1  | Joe   | 70000  | 3         |
    | 2  | Henry | 80000  | 4         |
    | 3  | Sam   | 60000  | Null      |
    | 4  | Max   | 90000  | Null      |
    +----+-------+--------+-----------+
    **Output:** 
    +----------+
    | Employee |
    +----------+
    | Joe      |
    +----------+
    **Explanation:** Joe is the only employee who earns more than his manager.

## Solution

```mysql
SELECT
  e.name AS Employee
FROM
  Employee e
JOIN
  Employee m
ON
  e.managerId = m.id
WHERE
  e.salary > m.salary;
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
