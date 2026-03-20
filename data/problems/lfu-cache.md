---
id: "460"
title: "LFU Cache"
slug: "lfu-cache"
difficulty: "Hard"
tags: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
language: "java"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951119242"
---

## Problem

Design and implement a data structure for a [Least Frequently Used (LFU)](https://en.wikipedia.org/wiki/Least_frequently_used) cache.

Implement the `LFUCache` class:

  * `LFUCache(int capacity)` Initializes the object with the `capacity` of the data structure.
  * `int get(int key)` Gets the value of the `key` if the `key` exists in the cache. Otherwise, returns `-1`.
  * `void put(int key, int value)` Update the value of the `key` if present, or inserts the `key` if not already present. When the cache reaches its `capacity`, it should invalidate and remove the **least frequently used** key before inserting a new item. For this problem, when there is a **tie** (i.e., two or more keys with the same frequency), the **least recently used** `key` would be invalidated.



To determine the least frequently used key, a **use counter** is maintained for each key in the cache. The key with the smallest **use counter** is the least frequently used key.

When a key is first inserted into the cache, its **use counter** is set to `1` (due to the `put` operation). The **use counter** for a key in the cache is incremented either a `get` or `put` operation is called on it.

The functions `get` and `put` must each run in `O(1)` average time complexity.

 

**Example 1:**
    
    
    **Input**
    ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
    **Output**
    [null, null, null, 1, null, -1, 3, null, -1, 3, 4]
    
    **Explanation**
    // cnt(x) = the use counter for key x
    // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
    LFUCache lfu = new LFUCache(2);
    lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
    lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
    lfu.get(1);      // return 1
                     // cache=[1,2], cnt(2)=1, cnt(1)=2
    lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                     // cache=[3,1], cnt(3)=1, cnt(1)=2
    lfu.get(2);      // return -1 (not found)
    lfu.get(3);      // return 3
                     // cache=[3,1], cnt(3)=2, cnt(1)=2
    lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                     // cache=[4,3], cnt(4)=1, cnt(3)=2
    lfu.get(1);      // return -1 (not found)
    lfu.get(3);      // return 3
                     // cache=[3,4], cnt(4)=1, cnt(3)=3
    lfu.get(4);      // return 4
                     // cache=[4,3], cnt(4)=2, cnt(3)=3
    

 

**Constraints:**

  * `1 <= capacity <= 104`
  * `0 <= key <= 105`
  * `0 <= value <= 109`
  * At most `2 * 105` calls will be made to `get` and `put`.

## Solution

```java
import java.util.*;

class LFUCache {

    class Node {
        int key, value, freq;
        Node prev, next;

        Node(int k, int v) {
            key = k;
            value = v;
            freq = 1;
        }
    }

    class DLL {
        Node head = new Node(0,0);
        Node tail = new Node(0,0);
        int size = 0;

        DLL() {
            head.next = tail;
            tail.prev = head;
        }

        void add(Node node) {
            node.prev = head;
            node.next = head.next;
            head.next.prev = node;
            head.next = node;
            size++;
        }

        void remove(Node node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            size--;
        }

        Node removeLast() {
            if(size > 0) {
                Node node = tail.prev;
                remove(node);
                return node;
            }
            return null;
        }
    }

    Map<Integer, Node> keyMap = new HashMap<>();
    Map<Integer, DLL> freqMap = new HashMap<>();

    int capacity;
    int minFreq;

    public LFUCache(int capacity) {
        this.capacity = capacity;
    }

    public int get(int key) {
        if(!keyMap.containsKey(key)) return -1;

        Node node = keyMap.get(key);
        update(node);
        return node.value;
    }

    public void put(int key, int value) {

        if(capacity == 0) return;

        if(keyMap.containsKey(key)) {
            Node node = keyMap.get(key);
            node.value = value;
            update(node);
            return;
        }

        if(keyMap.size() == capacity) {
            DLL list = freqMap.get(minFreq);
            Node removed = list.removeLast();
            keyMap.remove(removed.key);
        }

        Node node = new Node(key,value);
        keyMap.put(key,node);

        minFreq = 1;

        freqMap.putIfAbsent(1,new DLL());
        freqMap.get(1).add(node);
    }

    private void update(Node node) {

        int freq = node.freq;
        DLL list = freqMap.get(freq);

        list.remove(node);

        if(freq == minFreq && list.size == 0) {
            minFreq++;
        }

        node.freq++;

        freqMap.putIfAbsent(node.freq,new DLL());
        freqMap.get(node.freq).add(node);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
