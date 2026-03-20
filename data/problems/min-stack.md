---
id: "155"
title: "Min Stack"
slug: "min-stack"
difficulty: "Medium"
tags: ["Stack", "Design"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825843576"
---

## Problem

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

  * `MinStack()` initializes the stack object.
  * `void push(int val)` pushes the element `val` onto the stack.
  * `void pop()` removes the element on the top of the stack.
  * `int top()` gets the top element of the stack.
  * `int getMin()` retrieves the minimum element in the stack.



You must implement a solution with `O(1)` time complexity for each function.

 

**Example 1:**
    
    
    **Input**
    ["MinStack","push","push","push","getMin","pop","top","getMin"]
    [[],[-2],[0],[-3],[],[],[],[]]
    
    **Output**
    [null,null,null,null,-3,null,0,-2]
    
    **Explanation**
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); // return -3
    minStack.pop();
    minStack.top();    // return 0
    minStack.getMin(); // return -2
    

 

**Constraints:**

  * `-231 <= val <= 231 - 1`
  * Methods `pop`, `top` and `getMin` operations will always be called on **non-empty** stacks.
  * At most `3 * 104` calls will be made to `push`, `pop`, `top`, and `getMin`.

## Solution

```python
class MinStack:

    def __init__(self):
        self.st = []

    def push(self, val: int) -> None:
        min_val = self.getMin()
        if min_val == None or min_val > val:
            min_val = val
        
        self.st.append([val, min_val])

    def pop(self) -> None:
        self.st.pop()

    def top(self) -> int:
        return self.st[-1][0] if self.st else None

    def getMin(self) -> int:
        return self.st[-1][1] if self.st else None
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
