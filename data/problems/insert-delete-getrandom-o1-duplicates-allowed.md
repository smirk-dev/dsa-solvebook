---
id: "381"
title: "Insert Delete GetRandom O(1) - Duplicates allowed"
slug: "insert-delete-getrandom-o1-duplicates-allowed"
difficulty: "Hard"
tags: ["Array", "Hash Table", "Math", "Design", "Randomized"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830281256"
---

## Problem

`RandomizedCollection` is a data structure that contains a collection of numbers, possibly duplicates (i.e., a multiset). It should support inserting and removing specific elements and also reporting a random element.

Implement the `RandomizedCollection` class:

  * `RandomizedCollection()` Initializes the empty `RandomizedCollection` object.
  * `bool insert(int val)` Inserts an item `val` into the multiset, even if the item is already present. Returns `true` if the item is not present, `false` otherwise.
  * `bool remove(int val)` Removes an item `val` from the multiset if present. Returns `true` if the item is present, `false` otherwise. Note that if `val` has multiple occurrences in the multiset, we only remove one of them.
  * `int getRandom()` Returns a random element from the current multiset of elements. The probability of each element being returned is **linearly related** to the number of the same values the multiset contains.



You must implement the functions of the class such that each function works on **average** `O(1)` time complexity.

**Note:** The test cases are generated such that `getRandom` will only be called if there is **at least one** item in the `RandomizedCollection`.

 

**Example 1:**
    
    
    **Input**
    ["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
    [[], [1], [1], [2], [], [1], []]
    **Output**
    [null, true, false, true, 2, true, 1]
    
    **Explanation**
    RandomizedCollection randomizedCollection = new RandomizedCollection();
    randomizedCollection.insert(1);   // return true since the collection does not contain 1.
                                      // Inserts 1 into the collection.
    randomizedCollection.insert(1);   // return false since the collection contains 1.
                                      // Inserts another 1 into the collection. Collection now contains [1,1].
    randomizedCollection.insert(2);   // return true since the collection does not contain 2.
                                      // Inserts 2 into the collection. Collection now contains [1,1,2].
    randomizedCollection.getRandom(); // getRandom should:
                                      // - return 1 with probability 2/3, or
                                      // - return 2 with probability 1/3.
    randomizedCollection.remove(1);   // return true since the collection contains 1.
                                      // Removes 1 from the collection. Collection now contains [1,2].
    randomizedCollection.getRandom(); // getRandom should return 1 or 2, both equally likely.
    

 

**Constraints:**

  * `-231 <= val <= 231 - 1`
  * At most `2 * 105` calls **in total** will be made to `insert`, `remove`, and `getRandom`.
  * There will be **at least one** element in the data structure when `getRandom` is called.

## Solution

```python
import random

class RandomizedCollection:

    def __init__(self):
        self.data_map = {}  # Dictionary: value -> set of indices
        self.data_list = []  # List of values

    def insert(self, val: int) -> bool:
        # Check if value exists before insertion
        is_new = val not in self.data_map
        
        # Add to map (create set if new)
        if is_new:
            self.data_map[val] = set()
        
        # Add index to the value's set
        self.data_map[val].add(len(self.data_list))
        
        # Add value to list
        self.data_list.append(val)
        
        return is_new

    def remove(self, val: int) -> bool:
        if val not in self.data_map or not self.data_map[val]:
            return False
        
        # Get an arbitrary index of the value to remove
        remove_idx = self.data_map[val].pop()
        last_element = self.data_list[-1]
        
        # Move last element to the removed position
        self.data_list[remove_idx] = last_element
        
        # Update the moved element's index in map
        if last_element in self.data_map:
            self.data_map[last_element].add(remove_idx)
            self.data_map[last_element].discard(len(self.data_list) - 1)
        
        # Remove last element from list
        self.data_list.pop()
        
        # Clean up empty sets in map
        if not self.data_map[val]:
            del self.data_map[val]
        
        return True

    def getRandom(self) -> int:
        return random.choice(self.data_list)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
