---
id: "432"
title: "All O`one Data Structure"
slug: "all-oone-data-structure"
difficulty: "Hard"
tags: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830283834"
---

## Problem

Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

Implement the `AllOne` class:

  * `AllOne()` Initializes the object of the data structure.
  * `inc(String key)` Increments the count of the string `key` by `1`. If `key` does not exist in the data structure, insert it with count `1`.
  * `dec(String key)` Decrements the count of the string `key` by `1`. If the count of `key` is `0` after the decrement, remove it from the data structure. It is guaranteed that `key` exists in the data structure before the decrement.
  * `getMaxKey()` Returns one of the keys with the maximal count. If no element exists, return an empty string `""`.
  * `getMinKey()` Returns one of the keys with the minimum count. If no element exists, return an empty string `""`.



**Note** that each function must run in `O(1)` average time complexity.

 

**Example 1:**
    
    
    **Input**
    ["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
    [[], ["hello"], ["hello"], [], [], ["leet"], [], []]
    **Output**
    [null, null, null, "hello", "hello", null, "hello", "leet"]
    
    **Explanation**
    AllOne allOne = new AllOne();
    allOne.inc("hello");
    allOne.inc("hello");
    allOne.getMaxKey(); // return "hello"
    allOne.getMinKey(); // return "hello"
    allOne.inc("leet");
    allOne.getMaxKey(); // return "hello"
    allOne.getMinKey(); // return "leet"
    

 

**Constraints:**

  * `1 <= key.length <= 10`
  * `key` consists of lowercase English letters.
  * It is guaranteed that for each call to `dec`, `key` is existing in the data structure.
  * At most `5 * 104` calls will be made to `inc`, `dec`, `getMaxKey`, and `getMinKey`.

## Solution

```python
class Node:
    def __init__(self, count):
        self.count = count
        self.keys = set()
        self.prev = None
        self.next = None

class AllOne:

    def __init__(self):
        self.key_count = {}  # key -> count
        self.count_node = {}  # count -> Node
        self.head = Node(0)  # Dummy head (min)
        self.tail = Node(0)  # Dummy tail (max)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _add_node_after(self, new_node, prev_node):
        """Insert new_node after prev_node"""
        new_node.next = prev_node.next
        new_node.prev = prev_node
        prev_node.next.prev = new_node
        prev_node.next = new_node

    def _remove_node(self, node):
        """Remove node from linked list"""
        node.prev.next = node.next
        node.next.prev = node.prev

    def inc(self, key: str) -> None:
        if key in self.key_count:
            count = self.key_count[key]
            self.key_count[key] = count + 1
            cur_node = self.count_node[count]
            
            # Remove key from current count node
            cur_node.keys.remove(key)
            
            # Get or create next count node
            if count + 1 not in self.count_node:
                new_node = Node(count + 1)
                self.count_node[count + 1] = new_node
                self._add_node_after(new_node, cur_node)
            
            self.count_node[count + 1].keys.add(key)
            
            # Remove current node if empty
            if not cur_node.keys:
                self._remove_node(cur_node)
                del self.count_node[count]
        else:
            # New key with count 1
            self.key_count[key] = 1
            
            if 1 not in self.count_node:
                new_node = Node(1)
                self.count_node[1] = new_node
                self._add_node_after(new_node, self.head)
            
            self.count_node[1].keys.add(key)

    def dec(self, key: str) -> None:
        if key not in self.key_count:
            return
        
        count = self.key_count[key]
        cur_node = self.count_node[count]
        cur_node.keys.remove(key)
        
        if count == 1:
            # Remove key entirely
            del self.key_count[key]
        else:
            # Decrement count
            self.key_count[key] = count - 1
            
            # Get or create prev count node
            if count - 1 not in self.count_node:
                new_node = Node(count - 1)
                self.count_node[count - 1] = new_node
                self._add_node_after(new_node, cur_node.prev)
            
            self.count_node[count - 1].keys.add(key)
        
        # Remove current node if empty
        if not cur_node.keys:
            self._remove_node(cur_node)
            del self.count_node[count]

    def getMaxKey(self) -> str:
        if self.tail.prev == self.head:
            return ""
        return next(iter(self.tail.prev.keys))

    def getMinKey(self) -> str:
        if self.head.next == self.tail:
            return ""
        return next(iter(self.head.next.keys))
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
