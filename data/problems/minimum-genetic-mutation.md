---
id: "433"
title: "Minimum Genetic Mutation"
slug: "minimum-genetic-mutation"
difficulty: "Medium"
tags: ["Hash Table", "String", "Breadth-First Search"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1826050828"
---

## Problem

A gene string can be represented by an 8-character long string, with choices from `'A'`, `'C'`, `'G'`, and `'T'`.

Suppose we need to investigate a mutation from a gene string `startGene` to a gene string `endGene` where one mutation is defined as one single character changed in the gene string.

  * For example, `"AACCGGTT" --> "AACCGGTA"` is one mutation.



There is also a gene bank `bank` that records all the valid gene mutations. A gene must be in `bank` to make it a valid gene string.

Given the two gene strings `startGene` and `endGene` and the gene bank `bank`, return _the minimum number of mutations needed to mutate from_`startGene` _to_`endGene`. If there is no such a mutation, return `-1`.

Note that the starting point is assumed to be valid, so it might not be included in the bank.

 

**Example 1:**
    
    
    **Input:** startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
    **Output:** 1
    

**Example 2:**
    
    
    **Input:** startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
    **Output:** 2
    

 

**Constraints:**

  * `0 <= bank.length <= 10`
  * `startGene.length == endGene.length == bank[i].length == 8`
  * `startGene`, `endGene`, and `bank[i]` consist of only the characters `['A', 'C', 'G', 'T']`.

## Solution

```python
class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        bankSet=set(bank)

        visited=set()

        q=deque()
        q.append(startGene)
        level=0

        while q:
            qLen=len(q)

            for _ in range(qLen):
                curr=q.popleft()

                if curr==endGene:
                    return level

                for ch in "ACGT":
                    for i in range(len(curr)):
                        neighbor=curr[:i]+ch+curr[i+1:]
                        
                        if neighbor in bankSet and neighbor not in visited:
                            visited.add(neighbor)
                            q.append(neighbor)
                
            level+=1
        return -1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
