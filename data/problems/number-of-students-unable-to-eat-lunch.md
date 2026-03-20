---
id: "1802"
title: "Number of Students Unable to Eat Lunch"
slug: "number-of-students-unable-to-eat-lunch"
difficulty: "Easy"
tags: ["Array", "Stack", "Queue", "Simulation"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829406937"
---

## Problem

The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers `0` and `1` respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a **stack**. At each step:

  * If the student at the front of the queue **prefers** the sandwich on the top of the stack, they will **take it** and leave the queue.
  * Otherwise, they will **leave it** and go to the queue's end.



This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays `students` and `sandwiches` where `sandwiches[i]` is the type of the `i​​​​​​th` sandwich in the stack (`i = 0` is the top of the stack) and `students[j]` is the preference of the `j​​​​​​th` student in the initial queue (`j = 0` is the front of the queue). Return _the number of students that are unable to eat._

 

**Example 1:**
    
    
    **Input:** students = [1,1,0,0], sandwiches = [0,1,0,1]
    **Output:** 0**Explanation:**
    - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
    - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
    - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
    - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
    - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
    - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
    - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
    - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
    Hence all students are able to eat.
    

**Example 2:**
    
    
    **Input:** students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
    **Output:** 3
    

 

**Constraints:**

  * `1 <= students.length, sandwiches.length <= 100`
  * `students.length == sandwiches.length`
  * `sandwiches[i]` is `0` or `1`.
  * `students[i]` is `0` or `1`.

## Solution

```python
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        from collections import deque
        students = deque(students)
        i = 0  # index for sandwiches
        count = 0  # counts unsuccessful attempts
        
        while students and count < len(students):
            if students[0] == sandwiches[i]:
                students.popleft()
                i += 1
                count = 0  # reset unsuccessful attempt count
            else:
                students.append(students.popleft())
                count += 1  # increment unsuccessful attempt count
        return len(students)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
