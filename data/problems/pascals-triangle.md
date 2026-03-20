---
id: "118"
title: "Pascal's Triangle"
slug: "pascals-triangle"
difficulty: "Easy"
tags: ["Array", "Dynamic Programming"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830309488"
---

## Problem

Given an integer `numRows`, return the first numRows of **Pascal 's triangle**.

In **Pascal 's triangle**, each number is the sum of the two numbers directly above it as shown:

 

**Example 1:**
    
    
    **Input:** numRows = 5
    **Output:** [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
    

**Example 2:**
    
    
    **Input:** numRows = 1
    **Output:** [[1]]
    

 

**Constraints:**

  * `1 <= numRows <= 30`

## Solution

```python
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        
        for i in range(numRows):
            # Start each row with 1
            row = [1]
            
            # If not the first row, calculate middle elements
            if i > 0:
                for j in range(1, i):
                    # Each element is sum of two elements above it
                    row.append(result[i-1][j-1] + result[i-1][j])
                # End each row with 1
                row.append(1)
            
            result.append(row)
        
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
